import { ChangeEvent, useContext } from 'react';
import { FormContext } from '../contexts/FormContextProvider';

const WordInput = () => {
  /* @ts-expect-error: TODO: Provide default in definition of context */
  const { setWord } = useContext(FormContext);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setWord(e.target.value);
  };

  return (
    <>
      <label htmlFor="word" className="sr-only">
        Word
      </label>
      <input
        type="text"
        className="border-gray-400 border block"
        onChange={handleInput}
        required={true}
        id="word"
      />
    </>
  );
};

export default WordInput;
