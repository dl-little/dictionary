import { FormEventHandler, ReactNode, useContext } from 'react';
import { FormContext } from '../contexts/FormContextProvider';

const Form = ({ children }: { children: ReactNode }) => {
  /* @ts-expect-error: TODO: Provide default in definition of context */
  const { activeDescendant, word } = useContext(FormContext);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(activeDescendant, word);
  };

  return (
    <form
      className="max-w-[768px] w-full [&>*:not(:first-child)]:mt-4"
      onSubmit={handleSubmit}
    >
      {children}
      <button
        type="submit"
        value="Make Query"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Make Query
      </button>
    </form>
  );
};

export default Form;
