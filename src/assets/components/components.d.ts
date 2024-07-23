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
  onChange?: () => void;
}
