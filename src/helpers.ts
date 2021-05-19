const cuisines: Array<string> = [
  "African",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];
const getRandomCuisineName = (): string => {
  const random = Math.round(Math.random() * 10) + 1;
  console.log(random);
  return cuisines[random];
};
export interface Cuisine {
  id: string;
  image: string;
  title: string;
}

export interface ItemDetails {
  id: string;
  summary: string;
  dishTypes: Array<string>;
  title: string;
  image: string;
  analyzedInstructions: Array<Instuctions>;
}
interface Instuctions {
  name: string;
  steps: Array<{ step: string }>;
}
export { getRandomCuisineName };
