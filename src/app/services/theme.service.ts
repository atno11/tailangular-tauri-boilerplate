import { Injectable } from '@angular/core';

const themeAttr = "app-theme";
//Theme attr = [app-theme]
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes = [
    "dark", "light"
  ]
  private isDarkMode = document.body.getAttribute(themeAttr) === "dark";
  constructor() { }

  selectTheme(theme: string) {
    if(!this.themes.includes(theme)) {
      console.log(this.isDarkMode)
      return document.body.setAttribute(themeAttr, this.isDarkMode ? "light" : "dark");
    }
    return document.body.setAttribute(themeAttr, theme)
  }
}
