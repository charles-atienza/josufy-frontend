import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RadioCardButtonComponent } from "../../shared/components/radio-card-button/radio-card-button.component";
import { DifficultyImagePath } from "../../shared/enums/difficulty-image-path.enum";

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
}
