import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  themes = {'light theme': 'my-theme', 'dark theme': 'my-theme-2'};
  apptheme = this.themes['light theme'];
  sideBarState = false;

  constructor(private overlaycontainer: OverlayContainer) {
  }

  ngOnInit(): void {
    this.overlaycontainer.themeClass = this.apptheme;
  }

  onThemeChange(theme: String): void {
    this.apptheme = this.themes[theme['new_theme']];
    this.overlaycontainer.themeClass = this.apptheme;
  }

  toggleSideBar(): void {
    this.sideBarState = !this.sideBarState;
  }
}
