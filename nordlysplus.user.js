// ==UserScript==
// @name        Nordlys+ removal
// @namespace   big-oil.org/nordlys.no
// @description Remove paywall content from nordlys.no
// @include     http://www.nordlys.no/
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

removeByClass('df-skin-paywall')
removeByClass('df-skin-annonse')
