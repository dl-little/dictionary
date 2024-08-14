import RenderIf from './RenderIf';

const Result = ({
  title,
  meanings,
}: {
  title: string;
  meanings: TMeaningsEntry[];
}) => {
  return (
    <li className="p-4 bg-slate-100 [&>*:not(:first-child)]:mt-3">
      <h3 className="text-2xlg uppercase font-mono text-purple-900">{title}</h3>
      <ul
        className="
        [&>*:not(:first-child)]:mt-8
        [&>*:not(:first-child)]:before:content-['']
        [&>*:not(:first-child)]:before:absolute
        [&>*:not(:first-child)]:before:top-[-1em]
        [&>*:not(:first-child)]:before:left-[44%]
        [&>*:not(:first-child)]:before:w-[12%]
        [&>*:not(:first-child)]:before:h-[2px]
      [&>*:not(:first-child)]:before:bg-slate-300"
      >
        {meanings.map((entry, i) => {
          return (
            <li
              key={`.0${i}`}
              className="relative [&>*:not(:first-child)]:mt-3 [&>*:not(:first-child)]:pl-4 columns-2"
            >
              <p className="italic text-sm font-mono absolute top-[-1em]">
                {entry.partOfSpeech}.
              </p>
              <RenderIf isTrue={!!entry.definitions}>
                {entry.definitions?.map((def, i) => {
                  return (
                    <p
                      className="relative before:content-['-'] before:absolute before:left-0"
                      key={`.0${i}`}
                    >
                      {def.definition}
                    </p>
                  );
                })}
              </RenderIf>
              <RenderIf isTrue={!!entry.synonyms}>
                {entry.synonyms?.map((syn, i) => {
                  return (
                    <p
                      className="relative before:content-['-'] before:absolute before:left-0"
                      key={`.0${i}`}
                    >
                      {syn}
                    </p>
                  );
                })}
              </RenderIf>
              <RenderIf isTrue={!!entry.antonyms}>
                {entry.antonyms?.map((ant, i) => {
                  return (
                    <p
                      className="relative before:content-['-'] before:absolute before:left-0"
                      key={`.0${i}`}
                    >
                      {ant}
                    </p>
                  );
                })}
              </RenderIf>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Result;
