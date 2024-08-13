export const parseResults = (data: object[], type: string) => {
  const resultsStructure = data.map((entry) => {
    return {
      title: entry.word,
      meanings: entry.meanings
        .map((m) => {
          return {
            partOfSpeech: m.partOfSpeech,
            ...(m[type].length > 0 && {
              [type]: m[type],
            }),
          };
        })
        .filter((e) => {
          return Object.prototype.hasOwnProperty.call(e, type);
        }),
    };
  });

  const meaningfulResults = resultsStructure.filter((r) => {
    return r.meanings.length > 0;
  });

  return meaningfulResults;
};
