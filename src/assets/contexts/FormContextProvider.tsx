import { createContext, ReactNode, useState } from 'react';

/* @ts-expect-error: TODO: Provide default */
export const FormContext = createContext();

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeDescendant, setActiveDescendant] = useState<
    string | undefined
  >();
  const [word, setWord] = useState<string | undefined>();

  return (
    <FormContext.Provider
      value={{
        activeDescendant,
        setActiveDescendant,
        word,
        setWord,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
