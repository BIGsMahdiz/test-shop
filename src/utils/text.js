const textCut = (text) => {
  return text.split(" ").slice(0, 2).join(" ");
};

export {textCut}