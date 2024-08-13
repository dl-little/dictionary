import { createContext, ReactNode, useState } from 'react';

/* @ts-expect-error: TODO: Provide default */
export const FormContext = createContext();

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeDescendant, setActiveDescendant] = useState<
    string | undefined
  >();
  const [word, setWord] = useState<string | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [resultData, setResultData] = useState<object[]>();

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
