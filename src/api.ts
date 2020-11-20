const ACCESS_TOKEN_MAP_BOX = "access_token=pk.eyJ1IjoiYml0c3NzdW5hZ3JpIiwiYSI6ImNraHFycGo2dzBjbHgycW1jYmE3cG1jNWkifQ.-2I-QUF6V4SCyckqOgblFA";

export const fetchLocalMapBox = (local: string) =>
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
  )
    .then((response) => response.json())
    .then((data) => data);

export const fetchUserGithub = (login: string) =>
  fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then((data) => data);
