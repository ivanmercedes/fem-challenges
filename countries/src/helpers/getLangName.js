const getLangName = (lanaguages) => {
  let text = ``;

  lanaguages.map((lanaguage) => (text += `${lanaguage.name}, `));

  return text.substring(0, text.length - 2);
};

export default getLangName;
