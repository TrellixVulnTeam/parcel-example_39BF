import "./../design/style_movie.scss";

export const MoviePage = (render) => {
  const template = `<div id="filmShowCase"></div>`;
  const makeFilm = (film) => /*html*/ `
  <div id="master"></div>
  <div id="card">
  
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 48 48"><defs><style>.vi-primary {fill: #ffb400;stroke: #fff;stroke-linecap: round;stroke-width: 0;fill-rule: evenodd;}</style></defs><path class="vi-primary" d="M24,40S7,35.578,7,18.482C7,13.245,11.349,8,16.714,8A10.088,10.088,0,0,1,24,11.556,10.088,10.088,0,0,1,31.286,8C36.651,8,41,13.245,41,18.482,41,35.523,24,40,24,40Z"/></svg>
  </div>
    <div class="card_image" style="background-image: url('https://image.tmdb.org/t/p/w500/${film?.poster_path}'); height: 300px; border-top-left-radius: 4px; border-top-right-radius: 4px; background-size: cover;"></div>
    <div id="card_text">
    <div id="titolo">
        <span id="titolo" style="color: red">TITOLO: </span>
        ${film.original_title}
    </div>
    <div id="amg">
        <span id="amg">Voto Medio: </span>
        ${film.vote_average}
    </div>
    <div id="data">
        <span id="data">Data: </span>
        ${film.release_date}
    </div>
    </div>
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
     const filmIcons = document.querySelectorAll('.icon')
     for (let i = 0; i < filmIcons.length; i++) {
      filmIcons[i].addEventListener('click', () => {
        console.log("Hai cliccato l'icona");
      })
    }
    });

 
}
