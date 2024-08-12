interface IRadioGroup {
  label: string;
  children: ReactNode;
  id: string;
}

type TRadio = {
  label: string;
  id: string;
  activeIndex?: number;
  index?: string;
  fClass?: string;
  handleClick?: () => void;
};
