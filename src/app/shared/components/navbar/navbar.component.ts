import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { AvatarModule } from "primeng/avatar";
import { ToolbarModule } from "primeng/toolbar";
import { Router } from "@angular/router";
import { StyleClassModule } from "primeng/styleclass";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [ButtonModule, AvatarModule, ToolbarModule, StyleClassModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(["/"]);
  }
}
