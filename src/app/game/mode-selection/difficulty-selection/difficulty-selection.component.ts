import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RadioCardButtonComponent } from "../../../shared/components/radio-card-button/radio-card-button.component";
import { ICardButton } from "../../../shared/models/card-button.model";
import { DifficultyImagePath } from "../../../shared/enums/difficulty-image-path.enum";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-home-page-main-content",
  standalone: true,
  imports: [RadioCardButtonComponent],
  templateUrl: "./difficulty-selection.component.html",
  styleUrl: "./difficulty-selection.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifficultySelectionComponent {
  constructor(private router: Router) {}

  cardButtons: ICardButton[] = [
    {
      title: "Basic",
      isComingSoon: false,
      logoURI: DifficultyImagePath.BASIC,
      onClick: () => {
        this.router.navigate(["basic"]);
      },
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
