import { createContext, ReactNode, useState } from 'react';

/* @ts-expect-error: TODO: Provide default */
export const FormContext = createContext();

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeDescendant, setActiveDescendant] = useState<
    'synonyms' | 'definitions' | 'antonyms' | undefined
  >();
  const [word, setWord] = useState<string | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [resultsMessage, setResultsMessage] = useState<string | undefined>();
  const [resultData, setResultData] = useState<IResultEntry[] | undefined>();
  const [touched, setTouched] = useState<boolean>(false);

  return (
    <FormContext.Provider
      value={{
        activeDescendant,
        setActiveDescendant,
        word,
        setWord,
        errorMessage,
        setErrorMessage,
        resultData,
        setResultData,
        resultsMessage,
        setResultsMessage,
        touched,
        setTouched,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
