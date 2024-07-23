type SelectOption = {
  value: string;
  display: string;
};

type InputGroup = {
  label: string;
  type: string;
  id: string;
  options?: SelectOption[];
};

interface IFormGroup {
  input: InputGroup;
  handleInput?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
