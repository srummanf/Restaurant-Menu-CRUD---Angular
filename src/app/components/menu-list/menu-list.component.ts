import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  Menu: any = [];
  constructor(private apiService: ApiService) {
    this.readMenu();
  }
  ngOnInit() { }
  readMenu() {
    this.apiService.getMenus().subscribe((data) => {
      this.Menu = data;
    })
  }
  removeMenu(Menu, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteMenu(Menu._id).subscribe((data) => {
        this.Menu.splice(index, 1);
      }
      )
    }
  }
}
