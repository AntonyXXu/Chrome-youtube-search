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
