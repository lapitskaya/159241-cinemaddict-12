import {createUserRankTemplate} from "./view/user-rank";
import {createMainMenuTemplate} from "./view/main-menu";
import {createSortTemplate} from "./view/sort";
import {createFilmsTemplate} from "./view/films";
import {createFilmsListTemplate} from "./view/films-list";
import {createTopRatedListTemplate} from "./view/top-rated-list";
import {createMostCommentedListTemplate} from "./view/most-commented-list";
import {createFilmCardTemplate} from "./view/film-card";
import {createFooterStatisticTemplate} from "./view/footer-statistic";

const CARD_COUNT = 5;
const EXTRA_CARD_COUNT = 2;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const mainHeaderElement = document.querySelector(`.header`);

render(mainHeaderElement, createUserRankTemplate());

const mainContentElement = document.querySelector(`.main`);

render(mainContentElement, createMainMenuTemplate());
render(mainContentElement, createSortTemplate());
render(mainContentElement, createFilmsTemplate());

const filmsElement = mainContentElement.querySelector(`.films`);

render(filmsElement, createFilmsListTemplate());

const filmsListElement = filmsElement.querySelector(`.films-list`);
const filmsListContainerElement = filmsListElement.querySelector(`.films-list__container`);

for (let i = 0; i < CARD_COUNT; i++) {
  render(filmsListContainerElement, createFilmCardTemplate());
}

render(filmsElement, createTopRatedListTemplate());

const topRatedListElement = filmsElement.querySelector(`.top-rated`);
const topRatedListContainerElement = topRatedListElement.querySelector(`.films-list__container`);

for (let i = 0; i < EXTRA_CARD_COUNT; i++) {
  render(topRatedListContainerElement, createFilmCardTemplate());
}

render(filmsElement, createMostCommentedListTemplate());

const mostCommentedListElement = filmsElement.querySelector(`.most-commented`);
const mostCommentedListContainerElement = mostCommentedListElement.querySelector(`.films-list__container`);

for (let i = 0; i < EXTRA_CARD_COUNT; i++) {
  render(mostCommentedListContainerElement, createFilmCardTemplate());
}

const mainFooterElement = document.querySelector(`.footer`);

render(mainFooterElement, createFooterStatisticTemplate());
render(mainFooterElement, createFilmDetailsModalTemplate(), `afterend`);
