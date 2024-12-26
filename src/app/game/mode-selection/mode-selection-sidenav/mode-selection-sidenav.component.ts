import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from "@angular/core";
import { RadioCardButtonComponent } from "../../../shared/components/radio-card-button/radio-card-button.component";
import { ICardButton } from "../../../shared/models/card-button.model";
import { PlayImagePath } from "../../../shared/enums/play-image-pathenum";

@Component({
  selector: "app-home-page-sidenav",
  standalone: true,
  imports: [RadioCardButtonComponent],
  templateUrl: "./mode-selection-sidenav.component.html",
  styleUrl: "./mode-selection-sidenav.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModeSelectionSideNavComponent {
  sidenavTop = 70; // Initial top value (matches navbar height)
  cardButtons: ICardButton[] = [
    {
      title: "Play with friend",
      isComingSoon: true,
      logoURI: PlayImagePath.PLAY_WITH_FRIEND,
      onClick: () => {},
    },
    {
      title: "Play with AI",
      isComingSoon: true,
      logoURI: PlayImagePath.PLAY_WITH_AI,
      onClick: () => {},
    },
    {
      title: "Puzzle",
      isComingSoon: false,
      logoURI: PlayImagePath.PUZZLE,
      isSelected: true,
      onClick: () => {},
    },
  ];

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Adjust the sidenav's top position based on scroll position
    this.sidenavTop = Math.max(0, 70 - scrollTop);
  }
}
