import { app, shell, BrowserWindow } from 'electron';
import './Menu';

export interface Options extends Electron.BrowserWindowConstructorOptions {
  preload?: string;
  webpath?: string;
}

export class App {
  app = app;
  win?: BrowserWindow;
  isLogin: boolean = false;
  /** 创建主进程窗口 */
  async createWindow(options: Options = {}, loadURL?: string) {
    await app.whenReady();
    const opts: Options = {
      titleBarStyle: 'hidden', // 无标题栏
      frame: false, // 创建无边窗口
      width: 800,
      height: 600,
      minWidth: 850,
      center: true,
      maximizable: true,
      minimizable: true,
      resizable: true,
      webPreferences: {
        // 多线程
        nodeIntegrationInWorker: true,
        nodeIntegration: true,
        contextIsolation: false,
      },
      ...options,
    };
    if (options.preload) {
      opts.webPreferences.preload = options.preload;
    }

    this.win = new BrowserWindow(opts);
    if (process.env.NODE_ENV === 'development') {
      this.win.loadURL(loadURL || 'http://localhost:3000/');
      // 打开开发者工具，默认不打开
      this.win.webContents.openDevTools();
    } else {
      this.win.loadFile(options.webpath);
    }
    this.win.webContents.setWindowOpenHandler(({ url }) => {
      if (/^https?:\/\//.test(url)) {
        shell.openExternal(url);
        return { action: 'deny' };
      }
      return {
        action: 'allow',
        overrideBrowserWindowOptions: {
          modal: true,
        },
      };
    });
    return this.win;
  }
}
