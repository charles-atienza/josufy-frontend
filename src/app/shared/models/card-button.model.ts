export interface ICardButton {
  isComingSoon: boolean;
  title: string;
  logoURI: string;
  isSelected?: boolean;
  onCardClick($event: Event): void;
}
