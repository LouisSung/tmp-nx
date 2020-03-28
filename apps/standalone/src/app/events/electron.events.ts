/**
 * This module is responsible on handling all the inter process communications
 * between the frontend to the electron backend.
 */

import {IpcMainEvent, IpcMainInvokeEvent, app, ipcMain} from 'electron';

import {environment} from '../../environments/environment';

export default class ElectronEvents {
  public static bootstrapElectronEvents(): Electron.IpcMain {
    return ipcMain;
  }
}

// Retrieve app version
ipcMain.handle('get-app-version', (event: IpcMainInvokeEvent) => {
  console.log(`Fetching application version... [v${environment.version}]`);

  return environment.version;
});

// Handle App termination
ipcMain.on('quit', (event: IpcMainEvent, code: number) => {
  app.exit(code);
});
