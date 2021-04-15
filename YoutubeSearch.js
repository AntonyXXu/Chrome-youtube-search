// import  from "./assets/";

//Check if current host is google
const googleHost = "www.google.";
const currentURL = window.location.hostname;
if (currentURL.search(googleHost) == -1) {
  return;
}

//Google is in the host name, find the search tabs
//Google search class MUFPAc includes all search tabs, class hdtb-mitem includes individual search tabs
const searchTabs = document.getElementsByClassName("MUFPAc");

// Clone a node in the search tab to insert the youtube search
const original = searchTabs[0].childNodes[1];
let youtubeClone = original.cloneNode(true);

//Change icon and data within the clone
youtubeClone.getElementsByTagName("a")[0].text = "YouTube";

//Get the current search, then send the query to YouTube in a new tab
const currentSearch = window.location.search;
var query = currentSearch.split("?q=")[1].split("&")[0];
var query = "https://www.youtube.com/results?search_query=" + query;
youtubeClone.getElementsByTagName("a")[0].href = query;
youtubeClone.getElementsByTagName("a")[0].target = "_blank";

//Add the new tab into the search
original.insertAdjacentElement("afterend", youtubeClone);
