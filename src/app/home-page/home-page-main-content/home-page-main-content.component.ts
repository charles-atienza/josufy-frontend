import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RadioCardButtonComponent } from "../../shared/components/radio-card-button/radio-card-button.component";
import { DifficultyImagePath } from "../../shared/enums/difficulty-image-path.enum";
import { ICardButton } from "../../shared/models/card-button.model";

@Component({
  selector: "app-home-page-main-content",
  standalone: true,
  imports: [RadioCardButtonComponent],
  templateUrl: "./home-page-main-content.component.html",
  styleUrl: "./home-page-main-content.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageMainContentComponent {
  DifficultyImagePath = DifficultyImagePath;
  cardButtons: ICardButton[] = [
    {
      title: "Basic",
      isComingSoon: false,
      logoURI: DifficultyImagePath.BASIC,
      onCardClick: () => {},
    },
    {
      title: "Intermediate",
      isComingSoon: true,
      logoURI: DifficultyImagePath.INTERMEDIATE,
      onCardClick: () => {},
    },
    {
      title: "Advanced",
      isComingSoon: true,
      logoURI: DifficultyImagePath.ADVANCED,
      onCardClick: () => {},
    },
    {
      title: "???",
      isComingSoon: true,
      logoURI: DifficultyImagePath.RIP,
      onCardClick: () => {},
    },
  ];
}
