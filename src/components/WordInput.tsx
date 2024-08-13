/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { FormContext } from '../contexts/FormContextProvider';
import IconAlert from './IconAlert';
import RenderIf from './RenderIf';

const WordInput = () => {
  /* @ts-expect-error: TODO: Provide default in definition of context */
  const { setWord, errorMessage, setErrorMessage } = useContext(FormContext);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [invalid, setInvalid] = useState<boolean>(false);
  const [touched, setTouched] = useState<boolean>(false);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (invalid) {
      setInvalid(false);
    }

    if (!touched) {
      setTouched(true);
    }

    // eslint-disable-next-line no-extra-boolean-cast -- We know that errorMessage is a string. We just have no default in context config.
    if (!!errorMessage) {
      setErrorMessage('');
    }

    setWord(e.target.value);
  };

  const handleInvalid = () => {
    setInvalid(true);
  };

  // @ts-expect-error TODO: find event type
  const handleBlur = (event) => {
    if (event.target.value.length > 0 || !touched) {
      return;
    }

    setInvalid(true);
  };

  useEffect(() => {
    const inputCurrent = inputRef.current;

    if (!inputCurrent) {
      return;
    }

    inputCurrent.addEventListener('invalid', handleInvalid);
    return () => {
      inputCurrent.removeEventListener('invalid', handleInvalid);
    };
  }, [inputRef]);

  // Only add blur event listener after the form field has been edited.
  // Source: https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/#afterward-validation
  useEffect(() => {
    inputRef?.current?.addEventListener('blur', handleBlur);

    return () => {
      inputRef?.current?.removeEventListener('blur', handleBlur);
    };
  }, [touched]);

  return (
    <div className="relative min-h-[3em] flex flex-col justify-end items-start">
      <label className="text-2xl relative" htmlFor="word">
        Word
        <RenderIf isTrue={invalid}>
          <p
            className="text-red-600 text-sm absolute w-[200px] bottom-[10%] left-[110%] flex items-center gap-1"
            id="input-invalid"
          >
            <IconAlert className="text-red-600" />
            This input can't be empty.
          </p>
        </RenderIf>
      </label>
      <input
        type="text"
        className="border-gray-400 border inline"
        onChange={handleInput}
        required={true}
        aria-invalid={invalid}
        {...(invalid && {
          'aria-describedby': 'input-invalid',
        })}
        id="word"
        ref={inputRef}
      />
    </div>
  );
};

export default WordInput;
