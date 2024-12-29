import { ChangeDetectionStrategy, Component } from "@angular/core";
import { DifficultyImagePath } from "../../../shared/enums/difficulty-image-path.enum";
import { ICardButton } from "../../../shared/models/card-button.model";
import { RadioCardButtonComponent } from "../../../shared/components/radio-card-button/radio-card-button.component";

@Component({
  selector: "app-basic-page",
  standalone: true,
  imports: [RadioCardButtonComponent],
  templateUrl: "./basic-page.component.html",
  styleUrl: "./basic-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {
  cardButtons: ICardButton[] = [
    {
      title: "Basic",
      isComingSoon: false,
      logoURI: DifficultyImagePath.BASIC,
      onClick: () => {},
    },
    {
      title: "Intermediate",
      isComingSoon: true,
      logoURI: DifficultyImagePath.INTERMEDIATE,
      onClick: () => {},
    },
    {
      title: "Advanced",
      isComingSoon: true,
      logoURI: DifficultyImagePath.ADVANCED,
      onClick: () => {},
    },
    {
      title: "???",
      isComingSoon: true,
      logoURI: DifficultyImagePath.RIP,
      onClick: () => {},
    },
  ];
}
