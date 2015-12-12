// ==UserScript==
// @name        Itromso content marketing removal
// @namespace   big-oil.org/itromso.no
// @description Remove content marketing content from itromso.no
// @include     http://www.itromso.no/
// @version     1
// @grant       none
// ==/UserScript==

function removeByClass(name) {
  var items = document.evaluate('//div[contains(concat(" ", @class, " "), concat(" ", "' + name + '", " "))]', document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  for (var i = 0; i < items.snapshotLength; i++) {
    var item = items.snapshotItem(i);
    item.parentNode.removeChild(item);
  }
}

removeByClass('betalt')
