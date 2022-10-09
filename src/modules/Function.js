import { result } from './Variables.js';

const resultParse = () => {
  const resultParse = parseInt(result.innerHTML, 10);
  return resultParse;
};

export default resultParse;