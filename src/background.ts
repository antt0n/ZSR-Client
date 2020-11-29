'use strict'

import { app, protocol, BrowserWindow, Tray, Menu, shell} from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'

// Test
import log from 'electron-log'
import { autoUpdater } from 'electron-updater'

autoUpdater.logger = log;

//

const isDevelopment = process.env.NODE_ENV !== 'production'
const path = require("path");
let appIcon: Tray;
let icon = path.join(__dirname, "/../src/assets/icon.ico");

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  const win = new BrowserWindow({
    minHeight: 600,
    minWidth: 800,
    webPreferences: {
      nodeIntegration: (process.env
        .ELECTRON_NODE_INTEGRATION as unknown) as boolean
    },
    title: "Z-Sync Reworked",
    autoHideMenuBar: true,
    icon: icon,
    titleBarStyle: "hidden",
    frame: false,
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    // if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }

  // Création du tray

  appIcon = new Tray(icon);
  const contextMenu = Menu.buildFromTemplate([
    { label: "Z-Sync Reworked", enabled: false},
    { type:"separator" },
    { label: "Github page", click: () => { shell.openExternal('https://github.com/antt0n/z-sync-reworked'); } },
    { label: "No idea here :/", click: () => { /* no idea :/ */} },
    { type:"separator" },
    { label: "Quit Z-Sync", click: () => { app.quit(); } }
  ]);

  appIcon.on('click', function (event) {
    win.webContents.goToIndex(0);
    win.show();
  });

  appIcon.setToolTip('Z-Sync Reworked');
  appIcon.setContextMenu(contextMenu);

}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
  
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow();
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}