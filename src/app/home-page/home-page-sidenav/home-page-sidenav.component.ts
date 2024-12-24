import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from "@angular/core";
import { CardButtonComponent } from "../../shared/components/card-button/card-button.component";
import { DifficultyImagePath } from "../../shared/enums/difficulty-image-path.enum";

@Component({
  selector: "app-home-page-sidenav",
  standalone: true,
  imports: [CardButtonComponent],
  templateUrl: "./home-page-sidenav.component.html",
  styleUrl: "./home-page-sidenav.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageSideNavComponent {
  difficultyImagePath = DifficultyImagePath;
  sidenavTop = 70; // Initial top value (matches navbar height)

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Adjust the sidenav's top position based on scroll position
    this.sidenavTop = Math.max(0, 70 - scrollTop);
  }
}
