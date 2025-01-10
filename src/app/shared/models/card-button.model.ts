export interface ICardButton {
  isComingSoon: boolean;
  title: string;
  description?: string;
  logoURI: string;
  isSelectable?: boolean;
  isSelected?: boolean;
  onClick(card: ICardButton): void;
}
