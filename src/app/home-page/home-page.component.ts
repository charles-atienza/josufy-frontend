import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from "@angular/core";
import { HomePageSideNavComponent } from "./home-page-sidenav/home-page-sidenav.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [HomePageSideNavComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
