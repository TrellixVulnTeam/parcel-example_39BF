import "./../design/style_movie.scss";

export const MoviePage = (render) => {

  const template = `<div id="filmShowCase"></div>`;
  const makeFilm = (film) =>
    `
    <div id="master"></div>
  <div id="card">
    <div class="card_image" style="background-image: url('https://image.tmdb.org/t/p/w500/${film?.poster_path}'); height: 300px; border-top-left-radius: 4px;
    border-top-right-radius: 4px; background-size: cover;">
        
    </div>
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
      document.getElementById("filmShowCase").insertAdjacentHTML("afterbegin", res);
    });
};
