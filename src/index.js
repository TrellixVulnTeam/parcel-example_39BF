import "./design/styles.scss";
import Navigo from "navigo";
import { AboutPage, CounterPage } from "./pages";
import { render } from "./utils";
import { LoginPage } from "./pages/login";
import { MoviePage } from "./pages/movie";

window.addEventListener("load", () => {
  const router = new Navigo("/");

  router
    .on({
      "/about": {
        as: "about",
        uses: function (match) {
          AboutPage(render('#main'))
        },
      },

      "/login": {
        as: "login",
        uses: function (match) {
          LoginPage(render('#main'))
        },
        },

      "/": {
        as: "counter",
        uses: function (match) {
          CounterPage(render('#main'))
        },
      },

      "/movie": {
        as: "Movie",
        uses: function (match) {
          MoviePage(render('#main'))
        },
      },
    })
    .resolve();

   
});
