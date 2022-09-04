import { app, Menu, MenuItem, MenuItemConstructorOptions } from 'electron';
const isMac = process.platform === 'darwin';
const template = [
  // { role: 'appMenu' }
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' },
          ],
        },
      ]
    : []),
  { role: 'editMenu' },
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac
        ? [{ type: 'separator' }, { role: 'front' }, { type: 'separator' }, { role: 'window' }]
        : [{ role: 'close' }]),
    ],
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Open Source for Github',
        click: async () => {
          const { shell } = require('electron');
          await shell.openExternal('https://github.com/jaywcjlove/wxmp');
        },
      },
      {
        label: 'Online Website',
        click: async () => {
          const { shell } = require('electron');
          await shell.openExternal('https://jaywcjlove.github.io/wxmp');
        },
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(template as Array<MenuItem | MenuItemConstructorOptions>);
Menu.setApplicationMenu(menu);
