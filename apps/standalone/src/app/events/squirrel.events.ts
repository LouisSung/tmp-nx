/**
 * This module is responsible on handling all the setup events that is submitted by squirrel.
 */

import {app} from 'electron';
import {spawn} from 'child_process';
import {basename, join, resolve} from 'path';

import {environment} from '../../environments/environment';

export default class SquirrelEvents {
  private static isAppFirstRun = false;

  // app paths
  private static readonly appFolder = resolve(process.execPath, '..');
  private static readonly appRootFolder = resolve(SquirrelEvents.appFolder, '..');
  private static readonly updateExe = resolve(join(SquirrelEvents.appRootFolder, 'Update.exe'));
  private static readonly exeName = resolve(join(SquirrelEvents.appRootFolder, `app-${environment.version}`, basename(process.execPath)));

  public static handleEvents(): boolean {
    if (process.argv.length === 1 || process.platform !== 'win32') {
      return false;
    }

    switch (process.argv[1]) {
      case '--squirrel-install':
      case '--squirrel-updated':
        // Install desktop and start menu shortcuts
        SquirrelEvents.update(['--createShortcut', SquirrelEvents.exeName]);

        return true;

      case '--squirrel-uninstall':
        // Remove desktop and start menu shortcuts
        SquirrelEvents.update(['--removeShortcut', SquirrelEvents.exeName]);

        return true;

      case '--squirrel-obsolete':
        app.quit();

        return true;

      case '--squirrel-firstrun':
        // Check if it the first run of the software
        SquirrelEvents.isAppFirstRun = true;

        return false;
    }

    return false;
  }

  public static isFirstRun(): boolean {
    return SquirrelEvents.isAppFirstRun;
  }

  private static update(args: Array<string>): void {
    /* eslint-disable @typescript-eslint/unbound-method */ // @LS: for `app`
    try {
      spawn(SquirrelEvents.updateExe, args, {detached: true}).on('close', () => {
        return setTimeout(app.quit, 1000);
      });
    } catch (error) {
      setTimeout(app.quit, 1000);
    }
    /* eslint-enable @typescript-eslint/unbound-method */
  }
}
