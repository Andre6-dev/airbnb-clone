import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ToolbarModule } from "primeng/toolbar";
import { MenuModule } from "primeng/menu";
import { CategoryComponent } from "./category/category.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { MenuItem } from "primeng/api";
import { ToastService } from "../toast.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{

  toastService = inject(ToastService);
  location = "Anywhere";
  guests = "Guests";
  dates = "Week";

  currentMenuItems: MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.currentMenuItems = this.fetchMenu();
    this.toastService.send({severity: "info", summary: "Welcome to the navbar!"});
  }

  private fetchMenu() {
    return [
      {
        label: "Sign up",
        styleClass: "font-bold"
      },
      {
        label: "Log in",
      }
    ]
  }
}
