interface IRadioGroup {
  label: string;
  children: ReactNode;
  id: string;
}

type TRadio = {
  label: string;
  id: string;
  activeIndex?: number;
  index?: string;
  fClass?: string;
  handleClick?: () => void;
};

interface IRenderIf {
  children: ReactNode;
  isTrue: boolean;
}

type TLicenseEntry = {
  name: string;
  url: string;
};

type TDefinitionsEntry = {
  antonyms?: unknown;
  synonyms?: unknown;
  definition: string;
  example?: string;
};

type TMeaningsEntry = {
  antonyms?: string[];
  definitions?: TDefinitionsEntry[];
  partOfSpeech: string;
  synonyms?: string[];
};

type TPhoneticsEntry = {
  audio: string;
  license: TLicenseEntry;
  sourceUrl: string;
  text: string;
};

interface IResultEntry {
  license: TLicenseEntry;
  meanings: TMeaningsEntry[];
  phonetics: TPhoneticsEntry[];
  sourceUrls: string[];
  word: string;
}

type TParsedResults = {
  title: string;
  meanings: TMeaningsEntry[];
};
