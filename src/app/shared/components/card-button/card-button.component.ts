import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-card-button",
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: "./card-button.component.html",
  styleUrl: "./card-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardButtonComponent {
  @Input() isComingSoon: boolean = false;
  @Input() title: string = "No Title";
  @Input() logoURI: string = "";

  onCardClick($event: Event) {
    if (this.isComingSoon) {
      $event.preventDefault();
      return;
    }
    console.log("Button clicked");
  }
}
