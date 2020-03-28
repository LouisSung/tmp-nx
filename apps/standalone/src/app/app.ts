import {ChildProcess, fork} from 'child_process';
import {BrowserWindow, screen, shell} from 'electron';

import {join} from 'path';
import {format} from 'url';

import {rendererAppName, rendererAppPort} from './constants';

export default class App {
  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
  public static mainWindow: Electron.BrowserWindow;
  public static application: Electron.App;
  public static BrowserWindow;
  public static apiServerProcess: ChildProcess;

  public static main(app: Electron.App, browserWindow: typeof BrowserWindow): void {
    // we pass the Electron.App object and the
    // Electron.BrowserWindow into this function
    // so this class has no dependencies. This
    // makes the code easier to write tests for

    App.BrowserWindow = browserWindow;
    App.application = app;

    App.application.on('window-all-closed', App.onWindowAllClosed); // Quit when all windows are closed.
    App.application.on('ready', App.onReady); // App is ready to load data
    App.application.on('activate', App.onActivate); // App is activated
  }

  public static isDevelopmentMode(): boolean {
    const isEnvironmentSet: boolean = 'ELECTRON_IS_DEV' in process.env;
    const getFromEnvironment: boolean = parseInt(process.env.ELECTRON_IS_DEV as string) === 1;

    return isEnvironmentSet ? getFromEnvironment : !App.application.isPackaged;
  }

  private static onWindowAllClosed(): void {
    if (process.platform !== 'darwin') {
      App.apiServerProcess.kill();
      App.application.quit();
    }
  }

  private static onClose(): void {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    App.mainWindow = null;
  }

  private static onRedirect(event: Event, url: string): void {
    if (url !== App.mainWindow.webContents.getURL()) {
      // this is a normal external redirect, open it in a new browser window
      event.preventDefault();
      shell.openExternal(url).catch(() => {});
    }
  }

  private static onReady(): void {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    App.startApiServer();
    App.initMainWindow();
    // prettier-ignore
    setTimeout(() => { App.loadMainWindow(); }, 1000);
  }

  private static onActivate(): void {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (App.mainWindow === null) {
      App.onReady();
    }
  }

  private static initMainWindow(): void {
    const workAreaSize = screen.getPrimaryDisplay().workAreaSize;
    const width = Math.min(1920, workAreaSize.width || 1920);
    const height = Math.min(1080, workAreaSize.height || 1080);

    // Create the browser window.
    App.mainWindow = new BrowserWindow({
      width,
      height,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        backgroundThrottling: false
      }
    });
    App.mainWindow.setMenu(null);
    App.mainWindow.center();

    // if main window is ready to show, close the splash window and show the main window
    App.mainWindow.once('ready-to-show', () => {
      App.mainWindow.show();
    });

    // handle all external redirects in a new browser window
    // App.mainWindow.webContents.on('will-navigate', App.onRedirect);
    // App.mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options) => {
    //     App.onRedirect(event, url);
    // });

    // Emitted when the window is closed.
    App.mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      App.mainWindow = null;
    });
  }

  private static loadMainWindow(): void {
    // load the index.html of the app.
    if (App.isDevelopmentMode()) {
      App.mainWindow.loadURL(`http://localhost:${rendererAppPort}`).catch(() => {});
    } else {
      App.mainWindow.webContents.openDevTools();
      App.mainWindow
        .loadURL(format({pathname: join(__dirname, '..', rendererAppName, 'index.html'), protocol: 'file:', slashes: true}))
        .catch(() => {});
    }
    App.mainWindow.webContents.send('api-port', process.env.port ?? '3000');
  }

  /**
   * failed
   */
  // private static async willFailed(): Promise<void> {
  //   const func = async(): Promise<void> => { return Promise.resolve(); };
  //
  //   await func();
  // }

  private static startApiServer(): void {
    // const getPort = new Promise<string>((resolve: (string) => void) => {
    //   const server = net.createServer();
    //   server.unref().listen(0, () => { const port = server.address().port; server.close(() => { resolve(port); }); });
    // });
    // getPort.then((port: string) => {
    //   process.env.port = port; App.apiServerProcess = fork(`${__dirname}/../api/main.js`); }).catch(() => {});
    process.env.port = '54321';
    App.apiServerProcess = fork(`${__dirname}/../api/main.js`);
  }
}
