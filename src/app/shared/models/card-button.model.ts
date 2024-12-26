export interface ICardButton {
  isComingSoon: boolean;
  title: string;
  logoURI: string;
  isSelected?: boolean;
  onClick($event: Event): void;
}
