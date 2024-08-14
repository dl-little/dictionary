const Result = ({
  title,
  meanings,
}: {
  title: string;
  meanings: TMeaningsEntry[];
}) => {
  return (
    <li className="[&>*:not(:first-child)]:mt-1 [&>*:not(:first-child)]:pl-4">
      <h3 className="text-lg capitalize">{title}</h3>
      <ul>
        {meanings.map((entry, i) => {
          return <p key={`.0${i}`}>{entry.partOfSpeech}</p>;
        })}
      </ul>
    </li>
  );
};

export default Result;
