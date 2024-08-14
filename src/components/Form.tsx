import { FormEventHandler, ReactNode, useContext } from 'react';
import { FormContext } from '../contexts/FormContextProvider';
import RenderIf from './RenderIf';
import IconAlert from './IconAlert';

const Form = ({ children }: { children: ReactNode }) => {
  const {
    /* @ts-expect-error: TODO: Provide default in definition of context */
    word,
    /* @ts-expect-error: TODO: Provide default in definition of context */
    errorMessage,
    /* @ts-expect-error: TODO: Provide default in definition of context */
    setErrorMessage,
    /* @ts-expect-error: TODO: Provide default in definition of context */
    setResultData,
    /* @ts-expect-error: TODO: Provide default in definition of context */
    touched,
    /* @ts-expect-error: TODO: Provide default in definition of context */
    setTouched,
  } = useContext(FormContext);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Don't try to submit if the form is invalid and the user has not made a change to the form.
    // eslint-disable-next-line no-extra-boolean-cast -- we know it's a string.
    if (!!errorMessage || !touched) {
      return;
    }

    const base = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    try {
      const response = await fetch(`${base}${word}`, {
        method: 'GET',
      });

      if (!response.ok) {
        let errorText = '';
        switch (response.status) {
          case 404:
            errorText =
              'It is possible this word does not exist. You could always Google it.';
            break;
          default:
            errorText = 'Something bizarre happened - it is okay, though.';
        }
        throw new Error(errorText);
      }

      const answer = await response.json();
      setResultData(answer);

      // Reset the form to prevent multiple submissions without changing anything.
      setTouched(false);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <form
      className="flex-[300px] [&>*:not(:first-child)]:mt-4"
      onSubmit={handleSubmit}
    >
      {children}
      <div className="flex flex-row flex-nowrap justify-between gap-[1%] min-h-[100px]">
        <button
          type="submit"
          value="Make Query"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-fit"
        >
          Make Query
        </button>
        <RenderIf isTrue={!!errorMessage}>
          <span className="text-red-600 flex-1">
            <IconAlert className="inline mr-1 mb-1" />
            {errorMessage}
          </span>
        </RenderIf>
      </div>
    </form>
  );
};

export default Form;
