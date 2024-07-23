import { ReactElement } from 'react';
import getViteVar from '../helpers/getViteVar';

const FormGroup: React.FC<IFormGroup> = (props) => {
  const { input, handleInput } = props;

  const renderInput = (input: InputGroup) => {
    let inputEl: ReactElement<HTMLInputElement | HTMLSelectElement>;
    const sharedProps = {
      className: 'border-gray-400 border',
      onChange: handleInput,
      required: true,
      ...(!!input.default && {
        defaultValue: getViteVar(input.default),
      }),
    };

    switch (input.type) {
      case 'number':
        inputEl = (
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            id={input.id}
            {...sharedProps}
          />
        );
        break;
      case 'select':
        inputEl = (
          <select id={input.id} {...sharedProps}>
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
        inputEl = <input type={input.type} id={input.id} {...sharedProps} />;
    }

    return inputEl;
  };

  return (
    <div className="w-full flex flex-col">
      <label className="font-bold" htmlFor={input.id}>
        {input.label}
      </label>
      {renderInput(input)}
    </div>
  );
};

export default FormGroup;
