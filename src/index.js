import "./design/styles.scss";
import Navigo from "navigo";
import { AboutPage, CounterPage } from "./pages";
import { render } from "./utils";
import { LoginPage } from "./pages/login";

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
        // {lista dei film preferiti ... prendo un api qualunque ... themoviedb ... import firebase che mi salva i film preferiti}
      },

      "/": {
        as: "counter",
        uses: function (match) {
          CounterPage(render('#main'))
        },
      }
    })
    .resolve();
});
