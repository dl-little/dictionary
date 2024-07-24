type SelectOption = {
  value: string;
  display: string;
  example?: object;
};

type InputGroup = {
  label: string;
  type: string;
  id: string;
  options?: SelectOption[];
  default?: string;
};

interface IFormGroup {
  input: InputGroup;
  handleInput?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  example?: object;
}
