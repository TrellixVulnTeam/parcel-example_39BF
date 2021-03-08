export const MoviePage = (render) => {
    const template =/*html*/ `
        <button id="get-data">GET DATA</button>
        <ul>
            <li>
    
            </li>
        </ul>
      `;
    render(template);

    const axios = require('axios');
    const getDatas = document.getElementById('get-data');

    const getData = () => {
        axios.get('https://api.themoviedb.org/3/movie/5?api_key=4f9b09b41835b16489ca663662029a70')
        .then(response => {
            console.log(response.data)
        });
    }

    getDatas.addEventListener('click', getData);
  };