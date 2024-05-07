# Introduction

Create desktop applications with Angular 17 (Angular Material + SASS + + Tailwind) and Tauri(Rust)

Packages:
  - Angular 17.3.6
  - Tauri 2.0.0

Run you app in local or production environment, package your app into an exe file for Linux, Mac & Windows.

## Getting Started

*Clone this repository locally:*
```bash
git clone https://github.com/atno11/tailangular-tauri-boilerplate
```

*Install Tauri(Rust)*

[Tauri Pre-Requisites](https://tauri.studio/docs/getting-started/prerequisites)

*Install dependencies with npm:*
```bash
npm install
```
*Install Angular-cli to generate Angular Components*
```bash
npm install -g @angular/cli
```

## Development build

- **in a terminal window** -> npm start

The Angular + Tauri started in a local development environment

The tauri application code is managed by `src-tauri/main.rs.
In npm start, the app run with a Angular App(http://localhost:4200), and the webView is managed by Tauri.

## Adding new fonts

To add new fonts, just place a font in `./src/assets/fonts`, and run the command npm run fonts.
the font family will have the same name of the font file.

## Project structure

| Folder    | Description                                   |
|-----------|-----------------------------------------------|
| src-tauri | Tauri main process folder (Rust)              |
| src       | Tauri renderer process folder (Web / Angular) |

## Browser mode

To execute only the application in a browser to manage   the front, run `npm run web:serve`.

## Included Commands

| Command                 | Description                                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------|
| `npm run web:serve`     | Execute the app in the web browser (DEV mode)                                                         |
| `npm run web:prod`      | Build the app that can be used directly in the web browser. Your built files are in the /dist folder. |
| `npm run tauri:bundle`  | Builds your application and creates an app consumable based on your operating system                  |
