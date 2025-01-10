import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RadioCardButtonComponent } from "../../../../shared/components/radio-card-button/radio-card-button.component";
import { ModeSelectionSideNavComponent } from "../../mode-selection-sidenav/mode-selection-sidenav.component";
import { ICardButton } from "../../../../shared/models/card-button.model";
import { DifficultyImagePath } from "../../../../shared/enums/difficulty-image-path.enum";

@Component({
  selector: "app-basic-page",
  standalone: true,
  imports: [RadioCardButtonComponent, ModeSelectionSideNavComponent],
  templateUrl: "./basic-page.component.html",
  styleUrl: "./basic-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {
  cardButtons: ICardButton[] = [
    {
      title: "Level 1",
      description: "Movement",
      isComingSoon: false,
      logoURI: DifficultyImagePath.BASIC,
      onClick: () => {},
    },
    {
      title: "Level 2",
      isComingSoon: true,
      logoURI: DifficultyImagePath.BASIC,
      onClick: () => {},
    },
    {
      title: "Level 3",
      isComingSoon: true,
      logoURI: DifficultyImagePath.BASIC,
      onClick: () => {},
    },
    {
      title: "Level 4",
      isComingSoon: true,
      logoURI: DifficultyImagePath.BASIC,
      onClick: () => {},
    },
  ];
}
