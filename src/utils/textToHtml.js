export const textToHtml = (str, tag) => {
  let dom = document.createElement(tag);
  dom.innerHTML = str;
  return dom;
};
