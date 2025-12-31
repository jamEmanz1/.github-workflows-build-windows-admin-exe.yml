# UnitedFieldStaff Admin — Windows EXE (click to open)

This repo builds a Windows EXE (NSIS installer) via GitHub Actions.

## Why this works
- Your Windows machine does NOT need Node or dev tools.
- GitHub Actions compiles the EXE and gives you a download artifact.

## How to build (3 minutes)
1) Create a GitHub repo (private ok)
2) Upload this folder contents
3) Go to Actions → Build Windows Admin EXE → Run workflow
4) Download artifact: `UnitedFieldStaff_Admin_Windows_EXE`
5) Run installer → open the Admin app

## IMPORTANT
This EXE loads your Admin Portal URL if configured:
- Set `ADMIN_URL` in the workflow env (or in Windows environment variables)
If not set, it opens an offline demo so it never “does nothing”.

Next step (real product):
- Host the admin portal (login + database) on a URL like https://admin.unitedfieldstaff.com
- Then set ADMIN_URL to that URL.

