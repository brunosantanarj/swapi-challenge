const NOT_FOUND = 'not-found';

export default (path) => fetch(`https://swapi.co/api/${path}`);

export async function fetchImages(term) {
  const response = await fetch(`https://ai-images-santana.herokuapp.com/images?term=${term}`);

  try {

    if (response.ok) {
      const imageURL = await response.text();
      return imageURL;
    }
  
    return NOT_FOUND;

  } catch(err) {

    return NOT_FOUND;
  }
}

export async function fetchStarships(starships) {
  try {

    const fetchAll = await Promise.all(starships.map(async (star) => {
      const response = await fetch(star);
      const fetchedStarships = await response.json();
      return fetchedStarships;
    }));

    if (fetchAll.length > 0) {
      return fetchAll;
    }
  
    return NOT_FOUND;
  } catch (e) {
    return NOT_FOUND;
  }
}
