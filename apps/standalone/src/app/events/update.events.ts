import {arch, platform} from 'os';
import {MessageBoxReturnValue, app, autoUpdater, dialog} from 'electron';

import {updateServerUrl} from '../constants';
import App from '../app';

export default class UpdateEvents {
  // initialize auto update service - most be invoked only in production
  public static initAutoUpdateService(): void {
    const platformArch = platform() === 'win32' ? platform() : `${platform()}_${arch()}`;
    const version = app.getVersion();
    const feed: Electron.FeedURLOptions = {url: `${updateServerUrl}/update/${platformArch}/${version}`};

    if (!App.isDevelopmentMode()) {
      console.log('Initializing auto update service...\n');

      autoUpdater.setFeedURL(feed);
      UpdateEvents.checkForUpdates();
    }
  }

  // check for updates - most be invoked after initAutoUpdateService() and only in production
  private static checkForUpdates(): void {
    if (!App.isDevelopmentMode() && autoUpdater.getFeedURL() !== '') {
      autoUpdater.checkForUpdates();
    }
  }
}

autoUpdater.on('update-downloaded', (event: Event, releaseNotes: string, releaseName: string, releaseDate: Date) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.'
  };

  dialog
    .showMessageBox(dialogOpts)
    .then((returnValue: MessageBoxReturnValue) => {
      if (returnValue.response === 0) {
        autoUpdater.quitAndInstall();
      }
    })
    .catch(() => {});
});

autoUpdater.on('checking-for-update', () => {
  console.log('Checking for updates...\n');
});

autoUpdater.on('update-available', () => {
  console.log('New update available!\n');
});

autoUpdater.on('update-not-available', () => {
  console.log('Up to date!\n');
});

autoUpdater.on('before-quit-for-update', () => {
  console.log('Application update is about to begin...\n');
});

autoUpdater.on('error', (message: Error) => {
  console.error('There was a problem updating the application');
  console.error(message, '\n');
});
