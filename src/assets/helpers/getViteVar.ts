const getViteVar = (defaultViteVar: string | undefined) => {
  if (!defaultViteVar || !import.meta.env[defaultViteVar]) {
    return '';
  }

  return import.meta.env[defaultViteVar];
};

export default getViteVar;
