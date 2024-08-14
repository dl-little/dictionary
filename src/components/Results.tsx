import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../contexts/FormContextProvider';
import RenderIf from './RenderIf';
import Result from './Result';
import { parseResults } from '../helpers/helpers';
import IconAlert from './IconAlert';

const Results = () => {
  /* @ts-expect-error: TODO: Provide default in definition of context */
  const { resultData, activeDescendant, resultsMessage, setResultsMessage } =
    useContext(FormContext);
  const [parsedResults, setParsedResults] = useState<TParsedResults[]>();

  useEffect(() => {
    if (!resultData || resultData.length <= 0) {
      return;
    }

    const clean = parseResults(resultData, activeDescendant);

    if (clean.length <= 0) {
      setResultsMessage(
        `There are no ${activeDescendant} for ${resultData[0].word}.`
      );
    } else {
      setResultsMessage('');
    }

    setParsedResults(clean);
  }, [resultData]);

  useEffect(() => {
    console.log(parsedResults);
  }, [parsedResults]);

  return (
    <div className="flex-[300px] [&>*:not(:first-child)]:mt-4 border border-blue-600 p-2 min-h-[300px]">
      <h2 className="text-2xl">Results</h2>
      <RenderIf isTrue={!!parsedResults}>
        <ul className="[&>*:not(:first-child)]:mt-4">
          {parsedResults?.map((result, i) => {
            return (
              <Result
                key={`.0${i}`}
                title={result.title}
                meanings={result.meanings}
              />
            );
          })}
        </ul>
      </RenderIf>
      <RenderIf isTrue={!!resultsMessage}>
        <span className="text-red-600 flex-1">
          <IconAlert className="inline mr-1 mb-1" />
          {resultsMessage}
        </span>
      </RenderIf>
    </div>
  );
};

export default Results;
