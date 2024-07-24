import { ReactElement } from 'react';
import getViteVar from '../helpers/getViteVar';

const FormGroup: React.FC<IFormGroup> = (props) => {
  const { input, handleInput, example } = props;

  const renderInput = (input: InputGroup) => {
    let inputEl: ReactElement<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >;
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
            <option hidden key="blank" value="">
              Choose which type of faker object to create
            </option>
            {input.options?.map((option) => {
              const formattedExample = JSON.stringify(
                option.example,
                null,
                2
              ).replace(
                /"(\w+)":\s*"([^"]+)"\s*,?|^\{|\}$/g,
                (match, key, value) => {
                  if (key && value) return `${key}: ${value}`; // For key-value replacements
                  return ''; // For removing curly brackets
                }
              );
              return (
                <option
                  key={option.value}
                  value={option.value}
                  data-example={formattedExample}
                >
                  {option.display}
                </option>
              );
            })}
          </select>
        );
        break;
      case 'textarea':
        inputEl = (
          <>
            <p className="font-bold" id="example-label">
              Example document:
            </p>
            <pre
              id="example"
              aria-describedby="example-label"
              className="whitespace-pre-wrap text-sm"
            >
              {example}
            </pre>
          </>
        );
        break;
      default:
        inputEl = <input type={input.type} id={input.id} {...sharedProps} />;
    }

    return inputEl;
  };

  return (
    <div className="w-full flex flex-col">
      {input.id !== 'example' && (
        <label className="font-bold" htmlFor={input.id}>
          {input.label}
        </label>
      )}
      {renderInput(input)}
    </div>
  );
};

export default FormGroup;
