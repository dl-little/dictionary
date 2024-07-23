import { ReactElement } from 'react';

const FormGroup: React.FC<IFormGroup> = (props) => {
  const { input } = props;

  const renderInput = (input: InputGroup) => {
    let inputEl: ReactElement<HTMLInputElement | HTMLSelectElement>;
    switch (input.type) {
      case 'number':
        inputEl = (
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            id={input.id}
            className="border-gray-400 border"
          />
        );
        break;
      case 'select':
        inputEl = (
          <select id={input.id} className="border-gray-400 border">
            <option hidden key="blank" value="-1">
              Choose which type of faker object to create
            </option>
            {input.options?.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.display}
                </option>
              );
            })}
          </select>
        );
        break;
      default:
        inputEl = (
          <input
            type={input.type}
            id={input.id}
            className="border-gray-400 border"
          />
        );
    }
    return inputEl;
  };

  return (
    <div className="w-full flex flex-col mt-4">
      <label className="font-bold" htmlFor={input.id}>
        {input.label}
      </label>
      {renderInput(input)}
    </div>
  );
};

export default FormGroup;
