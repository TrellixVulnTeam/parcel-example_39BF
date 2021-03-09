import "./../design/style_movie.scss";

export const MoviePage = (render) => {
  const template = `<div id="filmShowCase"></div>`;
  const makeFilm = (film) => /*html*/ `
  <div id="master"></div>
  
  <div id="card">
  <br>
  
  <div id="heart" style="position: absolute; display: flex; width: 16.6%; justify-content: flex-end; bottom: 373px;">
  <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height="30px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="30px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter"><g><path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" style="fill:#FF7979;"/></g></g><g id="Layer_1"/></svg>
  </div>
    <div class="card_image" style="background-image: url('https://image.tmdb.org/t/p/w500/${film?.poster_path}'); height: 300px; border-top-left-radius: 4px; border-top-right-radius: 4px; background-size: cover;"></div>
    <div id="card_text">
    <div id="titolo">
        <span id="titolo">Titolo: </span>
        ${film.original_title}
    </div>
    <div id="amg">
        <span id="amg">Voto Medio: </span>
        ${film.vote_average}
    </div>
    <div id="data">
        <span id="data">Data Rilascio: </span>
        ${film.release_date}
    </div>
    </div>
    <div style="clear:both;"></div>
  </div>
  
`;
  render(template);

  const axios = require("axios");
  const film = axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4f9b09b41835b16489ca663662029a70&language=it"
    )
    .then((res) => res.data.results)
    .then((res) => res.map(makeFilm))
    .then((res) => res.join(""))
    .then((res) => {
      document
        .getElementById("filmShowCase")
        .insertAdjacentHTML("afterbegin", res);
    });
};
