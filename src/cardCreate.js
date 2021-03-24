import cardCreateFunction from './templates/card.hbs';

import data from './menu.json'

const createdCard = cardCreateFunction(data)
const mainUL = document.querySelector(".js-menu")
mainUL.insertAdjacentHTML("beforeend",createdCard)
