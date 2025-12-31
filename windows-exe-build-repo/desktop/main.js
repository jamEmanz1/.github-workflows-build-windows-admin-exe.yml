const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    show: true,
    backgroundColor: "#0b1220"
  });

  // 1) Preferred: load hosted admin portal (with real login + database)
  // Set ADMIN_URL at build/run time:
  //   ADMIN_URL=https://admin.unitedfieldstaff.com
  const adminUrl = process.env.ADMIN_URL;

  if (adminUrl && adminUrl.startsWith("http")) {
    win.loadURL(adminUrl);
    return;
  }

  // 2) Fallback: load bundled offline demo (so the EXE always opens)
  const fallback = path.join(__dirname, "offline", "index.html");
  win.loadFile(fallback);

  dialog.showMessageBox(win, {
    type: "info",
    title: "Admin URL not set",
    message: "This EXE opened the offline demo because ADMIN_URL is not configured.",
    detail: "Set ADMIN_URL to your hosted admin portal URL to enable real login + live data.",
  });
}

app.whenReady().then(createWindow);
