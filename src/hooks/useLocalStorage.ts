import { useState, useEffect } from 'react';
const useLocalStorage = (resultData: IResultEntry[]) => {
  const [cachedResults, setCachedResults] = useState<ICachedResults>({});

  useEffect(() => {
    const resultsInStorage = localStorage.getItem('dictionary');

    if (!resultsInStorage) {
      return;
    }

    setCachedResults(JSON.parse(resultsInStorage));
  }, [resultData]);

  useEffect(() => {
    setEntryInCache();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultData]);

  const getCachedEntry = (word: string) => {
    if (!Object.prototype.hasOwnProperty.call(cachedResults, word)) {
      return false;
    }

    return cachedResults[word];
  };

  const setEntryInCache = () => {
    if (!resultData || resultData.length <= 0) {
      return;
    }

    const cacheEntry = {
      [resultData[0].word]: resultData,
    };

    const newCache = {
      ...cachedResults,
      ...cacheEntry,
    };

    setCachedResults(newCache);
    localStorage.setItem('dictionary', JSON.stringify(newCache));
  };

  return {
    getCachedEntry,
  };
};

export default useLocalStorage;
