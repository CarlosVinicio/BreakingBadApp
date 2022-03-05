export const replaceSpaces = (author: string) => {
  return author.replace(' ', '+');  
}

export const getRandomQuote = (quotes:any[]) => {
  const randonNumber = Math.random();
  const totalItems = quotes.length;
  const randomIndex = Math.floor(randonNumber * totalItems);
  return quotes[randomIndex];
}