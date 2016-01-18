// ==UserScript==
// @name        TIFF metadata
// @namespace   big-oil.org/tiff.no
// @description Add IMDB ratings to the TIFF calendar view
// @include     http://tiff.no/program/cal*
// @version     1
// @grant       GM_xmlhttpRequest
// ==/UserScript==

function imdbRate(movieEl) {
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://omdbapi.com?t=" + name(movieEl),
        onload: (response) => {
          let data = JSON.parse(response.responseText);
          let rating = data.imdbRating
          if (!isNaN(parseFloat(rating))) {
            addRating(movieEl, rating);
          }
        }
    });
}

function name(movieEl) {
  return document.evaluate(
    './span[@class="label"]',
    movieEl, null, XPathResult.ANY_TYPE, null).iterateNext().textContent;
}

function addRating(movieEl, rating) {
    let time = document.evaluate(
        './span[@class="tid"]',
        movieEl, null, XPathResult.ANY_TYPE, null).iterateNext();
    time.textContent += ' (' + rating + ')';
}

function findMovies() {
    return document.evaluate(
        '//div[@class="inner"]',
        document, null, XPathResult.ANY_TYPE, null);
}

let items = findMovies();
let item = items.iterateNext();
while (item) {
    imdbRate(item)
    item = items.iterateNext();
}
