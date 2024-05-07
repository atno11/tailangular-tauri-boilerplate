#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Window;
#[derive(serde::Serialize, serde::Deserialize, Debug)]
pub enum WindowAction {
  Close,
  Minimize,
  Maximize
}

#[tauri::command]
pub fn handle_window(win: Window, action: WindowAction) -> String{
  println!("[tauri::command][handle_window]Action passed: {:?}", action);
  match action {
    WindowAction::Close => {
      win.close().unwrap();
      "none".into()
    },
    WindowAction::Maximize => {
      let is_maximized = win.is_maximized().unwrap();
      if is_maximized {
        win.unmaximize().unwrap();
        "crop_square".into()
      } else {
        win.maximize().unwrap();
        "filter_none".into()
      }
    },
    WindowAction::Minimize => {
      win.minimize().unwrap();
      "none".into()
    }
  }
}

