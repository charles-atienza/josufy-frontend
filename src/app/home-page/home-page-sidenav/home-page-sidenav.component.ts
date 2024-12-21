import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-home-page-sidenav",
  standalone: true,
  imports: [],
  templateUrl: "./home-page-sidenav.component.html",
  styleUrl: "./home-page-sidenav.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageSideNavComponent {}
