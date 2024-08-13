import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../contexts/FormContextProvider';
import RenderIf from './RenderIf';
import Result from './Result';
import { parseResults } from '../helpers/helpers';

const Results = () => {
  /* @ts-expect-error: TODO: Provide default in definition of context */
  const { resultData, activeDescendant } = useContext(FormContext);
  const [parsedResults, setParsedResults] = useState<object[]>();

  useEffect(() => {
    if (!resultData) {
      return;
    }
    const clean = parseResults(resultData, activeDescendant);
    setParsedResults(clean);
  }, [resultData]);

  useEffect(() => {
    console.log(parsedResults);
  }, [parsedResults]);

  return (
    <div className="flex-[300px]">
      <RenderIf isTrue={!!parsedResults}>
        {parsedResults?.map((result, i) => {
          //@ts-expect-error TODO: Set a result schema.
          return <Result key={`.0${i}`} title={result.title} />;
        })}
      </RenderIf>
    </div>
  );
};

export default Results;
