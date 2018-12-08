// ==UserScript==
// @name         Cleanup Youtube Search results
// @namespace    https:/github.com/abdullahoguk/related-results-remover-youtube
// @version      0.1
// @description  Remove related videos and search suggestions in youtube search results.
// @author       Abdullah Öğük
// @match        *.youtube.com/results?search_query=*
// @include      *youtube.com/results?search_query=*
// @include      *.youtube.com/results?search_query=*
// @run-at document-end


// @grant        none
// ==/UserScript==

(function() {
    'use strict';
window.addEventListener('load', main, false);

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