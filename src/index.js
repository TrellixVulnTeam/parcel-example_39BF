import "./design/styles.scss";
import Navigo from "navigo";
import { AboutPage, CounterPage } from "./pages";
import { render } from "./utils";
import { LoginPage } from "./pages/login";

window.addEventListener("load", () => {
  const router = new Navigo("/");

  router
    .on(() => {
      new CounterPage(render('#main'))
    })
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
    })
    .resolve();
});
