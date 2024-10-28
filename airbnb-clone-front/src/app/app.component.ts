import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer.component";
import { ToastModule } from "primeng/toast";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { ToastService } from "./layout/toast.service";
import { MessageService } from "primeng/api";
import { fontAwesomeIcons } from "./shared/font-awesome-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ToastModule, NavbarComponent],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  faIconLibrary = inject(FaIconLibrary);
  isListingView = true;
  toastService = inject(ToastService);
  messageService = inject(MessageService);

  ngOnInit(): void {
    this.initFontAwesome();
    this.listenToastService();
  }

  private initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }

  private listenToastService() {
    this.toastService.sendSub.subscribe({
      next: newMessage => {
        if(newMessage && newMessage.summary !== this.toastService.INIT_STATE) {
          this.messageService.add(newMessage);
        }
      }
    })
  }
}
