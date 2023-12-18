export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};
export const decodeHTMLEntities = (htmlString) => {
  const entitiesMap = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'",
    "&#39;": "'",
    "&#x27;": "'",
    "&#x2F;": "/",
  };

  return htmlString.replace(/&[a-z]+;|&#\d+;/gi, (match) => {
    // Si c'est une entité nommée, utilisez la table de mappage
    if (entitiesMap.hasOwnProperty(match)) {
      return entitiesMap[match];
    }

    // Sinon, si c'est une entité numérique, convertissez-la en caractère
    const dec = match.match(/\d+/);
    return dec ? String.fromCharCode(dec) : match;
  });
};
