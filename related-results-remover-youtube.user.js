// ==UserScript==
// @name         Cleanup Youtube Search results
// @namespace    https:/github.com/abdullahoguk/related-results-remover-youtube
// @version      0.1
// @description  Remove related videos and search suggestions in youtube search results.
// @author       Abdullah Öğük
// @license CC-BY-SA-3.0; http://creativecommons.org/licenses/by-sa/3.0/
// @license MIT
// @match        *.youtube.com/results?search_query=*
// @include      *youtube.com/results?search_query=*
// @include      *.youtube.com/results?search_query=*
// @run-at document-end


// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //to track changes on DOM for new UI(SPA) 
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          main();
        });
      });
      
      mutationObserver.observe(document.body, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
      });
      
      function main(){
      
      //Remove related video in new UI
      [...document.querySelectorAll("ytd-badge-supported-renderer")]
          .filter(function(e){return /Related|İlgili video/.test(e.innerText)})
          .forEach(function(e){e.closest("#dismissable").remove()});
      
      //Remove related video in old UI
      [...document.querySelectorAll(".yt-badge")]
          .filter(function(e){return /Related|İlgili video/.test(e.innerText)})
          .forEach(function(e){e.closest("li").remove()});
      
      //Remove Search Suggestions
      var suggestions = document.querySelector("div.search-refinements");
      if(suggestions){suggestions.remove()};
      
       };
      
})();