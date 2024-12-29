import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ICardButton } from "../../models/card-button.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-radio-card-button",
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: "./radio-card-button.component.html",
  styleUrl: "./radio-card-button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioCardButtonComponent {
  @Input() cardButtons: ICardButton[] = [];
  @Input() isHorizontalSpread: boolean = false;

  onCardClick($event: Event, cardButtonIndex: number) {
    const selectedCardButtons = this.cardButtons[cardButtonIndex];
    if (selectedCardButtons.isComingSoon || selectedCardButtons.isSelected) {
      return;
    }
    this.cardButtons = this.cardButtons.map((button, index) => ({
      ...button,
      isSelected: index === cardButtonIndex,
    }));

    this.cardButtons[cardButtonIndex].onClick($event);
  }
}
