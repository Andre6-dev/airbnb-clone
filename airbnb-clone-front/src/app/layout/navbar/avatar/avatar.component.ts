import { Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    NgClass,
    FontAwesomeModule
  ],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() avatarUrl: string | undefined;
  @Input() avatarSize?: "avatar-sm" | "avatar-xl";
}
