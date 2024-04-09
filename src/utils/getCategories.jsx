const defaultCats = [
    "React js",
    "Nodejs",
    "Javascript",
    "Solidity",
    "Microservices",
  ];
export const getCats=()=>localStorage.getItem('category')?JSON.parse(localStorage.getItem('category')):defaultCats