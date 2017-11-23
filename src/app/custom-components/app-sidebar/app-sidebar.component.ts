import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss']
})
export class AppSidebarComponent {
  projects = [
    { name: 'Desert storm', icon: 'folder', link: '/desert-storm' },
    { name: 'Desert storm', icon: 'folder', link: '/desert-storm' },
    { name: 'Jungle king', icon: 'folder', link: '/desert-storm' },
    { name: 'Snow', icon: 'folder', link: '/desert-storm' },
    { name: 'Summer', icon: 'folder', link: '/desert-storm' },
    { name: 'Winter', icon: 'folder', link: '/desert-storm' }
  ];

  categories = [
    { name: 'Fashion', icon: 'photo_camera', link: '/fashion', projects: this.projects},
    { name: 'Beauty and Glamour', icon: 'shopping_basket', link: '/fashion', projects: this.projects},
    { name: 'Portraits', icon: 'aspect_ratio', link: '/fashion', projects: this.projects},
    { name: 'Fine Art', icon: 'brush', link: '/fashion', projects: this.projects },
    { name: 'Conceptual', icon: 'lightbulb_outline', link: '/fashion', projects: this.projects},
    { name: 'Composites', icon: 'layers', link: '/fashion', projects: this.projects },
    { name: 'Lifestyle', icon: 'motorcycle', link: '/fashion', projects: this.projects }
  ];



  settings = { name: 'Settings', icon: 'settings', link: '/settings', tools: this.projects };
  appTheme = 'light theme';
  themes = [{ value: 'light theme' }, { value: 'dark theme' }];

  @Input() sideBarState: boolean;
  @Output() themeTransition = new EventEmitter();
  @Output () closeSidebar = new EventEmitter();

  changeTheme() {
    this.themeTransition.emit({'new_theme': this.appTheme});
  }

  closedSideBar() {
    this.closeSidebar.emit();
  }


}
