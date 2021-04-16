function addYoutubeSearch() {
  //Check if current host is google

  const googleHost = "www.google.";
  const host = window.location.hostname;
  const path = window.location.pathname;

  if (host.search(googleHost) == -1 || path != "/search") {
    return;
  }
  //Check if the tab already exists
  if (document.getElementById("YoutubeSearchTab")) {
    return;
  }
  //Google is in the host name, find the search tabs
  //Google search class MUFPAc includes all search tabs, class hdtb-mitem includes individual search tabs
  const searchTabs = document.getElementsByClassName("MUFPAc");
  // Clone a node in the search tab to insert the youtube search
  const original = searchTabs[0].childNodes[1];
  let youtubeClone = original.cloneNode(true);

  //Change icon and data within the clone
  youtubeClone.getElementsByTagName("svg")[0].innerHTML = YoutubeLogo();
  youtubeClone.getElementsByTagName("a")[0].childNodes[1].textContent =
    "YouTube";

  //Get the current search, then send the query to YouTube in a new tab
  const currentSearch = window.location.search;
  var query = currentSearch.substring(
    currentSearch.indexOf("?q=") + 3,
    currentSearch.indexOf("&")
  );
  var query = "https://www.youtube.com/results?search_query=" + query;
  youtubeClone.getElementsByTagName("a")[0].href = query;
  youtubeClone.getElementsByTagName("a")[0].target = "";
  //Add new ID to the tab, and insert it into the search function
  youtubeClone.id = "YoutubeSearchTab";
  original.insertAdjacentElement("afterend", youtubeClone);
}

addYoutubeSearch();

//Just returning the SVG for the Youtube Logo
function YoutubeLogo() {
  return '<svg focusable="false" viewBox="0 0 95 95">	\
              <path d="M82.287,45.907c-0.937-4.071-4.267-7.074-8.275-7.521c-9.489-1.06-19.098-1.065-28.66-1.06 \
                  c-9.566-0.005-19.173,0-28.665,1.06c-4.006,0.448-7.334,3.451-8.27,7.521c-1.334,5.797-1.35,12.125-1.35,18.094 \
                  c0,5.969,0,12.296,1.334,18.093c0.936,4.07,4.264,7.073,8.272,7.521c9.49,1.061,19.097,1.065,28.662,1.061\
                  c9.566,0.005,19.171,0,28.664-1.061c4.006-0.448,7.336-3.451,8.272-7.521c1.333-5.797,1.34-12.124,1.34-18.093\
                  C83.61,58.031,83.62,51.704,82.287,45.907z M28.9,50.4h-5.54v29.438h-5.146V50.4h-5.439v-4.822H28.9V50.4z M42.877,79.839h-4.629\
                  v-2.785c-1.839,2.108-3.585,3.136-5.286,3.136c-1.491,0-2.517-0.604-2.98-1.897c-0.252-0.772-0.408-1.994-0.408-3.796V54.311\
                  h4.625v18.795c0,1.084,0,1.647,0.042,1.799c0.111,0.718,0.462,1.082,1.082,1.082c0.928,0,1.898-0.715,2.924-2.166v-19.51h4.629\
                  L42.877,79.839L42.877,79.839z M60.45,72.177c0,2.361-0.159,4.062-0.468,5.144c-0.618,1.899-1.855,2.869-3.695,2.869\
                  c-1.646,0-3.234-0.914-4.781-2.824v2.474h-4.625V45.578h4.625v11.189c1.494-1.839,3.08-2.769,4.781-2.769\
                  c1.84,0,3.078,0.969,3.695,2.88c0.311,1.027,0.468,2.715,0.468,5.132V72.177z M77.907,67.918h-9.251v4.525\
                  c0,2.363,0.773,3.543,2.363,3.543c1.139,0,1.802-0.619,2.066-1.855c0.043-0.251,0.104-1.279,0.104-3.134h4.719v0.675\
                  c0,1.491-0.057,2.518-0.099,2.98c-0.155,1.024-0.519,1.953-1.08,2.771c-1.281,1.854-3.179,2.768-5.595,2.768\
                  c-2.42,0-4.262-0.871-5.599-2.614c-0.981-1.278-1.485-3.29-1.485-6.003v-8.941c0-2.729,0.447-4.725,1.43-6.015\
                  c1.336-1.747,3.177-2.617,5.54-2.617c2.321,0,4.161,0.87,5.457,2.617c0.969,1.29,1.432,3.286,1.432,6.015v5.285H77.907z"/>\
              <path d="M70.978,58.163c-1.546,0-2.321,1.181-2.321,3.541v2.362h4.625v-2.362C73.281,59.344,72.508,58.163,70.978,58.163z"/>\
              <path d="M53.812,58.163c-0.762,0-1.534,0.36-2.307,1.125v15.559c0.772,0.774,1.545,1.14,2.307,1.14\
                  c1.334,0,2.012-1.14,2.012-3.445V61.646C55.824,59.344,55.146,58.163,53.812,58.163z"/>\
              <path d="M56.396,34.973c1.705,0,3.479-1.036,5.34-3.168v2.814h4.675V8.82h-4.675v19.718c-1.036,1.464-2.018,2.188-2.953,2.188\
                  c-0.626,0-0.994-0.37-1.096-1.095c-0.057-0.153-0.057-0.722-0.057-1.817V8.82h-4.66v20.4c0,1.822,0.156,3.055,0.414,3.836\
                  C53.854,34.363,54.891,34.973,56.396,34.973z"/>\
              <path d="M23.851,20.598v14.021h5.184V20.598L35.271,0h-5.242l-3.537,13.595L22.812,0h-5.455c1.093,3.209,2.23,6.434,3.323,9.646\
                  C22.343,14.474,23.381,18.114,23.851,20.598z"/>\
              <path d="M42.219,34.973c2.342,0,4.162-0.881,5.453-2.641c0.981-1.291,1.451-3.325,1.451-6.067v-9.034\
                  c0-2.758-0.469-4.774-1.451-6.077c-1.291-1.765-3.11-2.646-5.453-2.646c-2.33,0-4.149,0.881-5.443,2.646\
                  c-0.993,1.303-1.463,3.319-1.463,6.077v9.034c0,2.742,0.47,4.776,1.463,6.067C38.069,34.092,39.889,34.973,42.219,34.973z\
                  M39.988,16.294c0-2.387,0.724-3.577,2.231-3.577c1.507,0,2.229,1.189,2.229,3.577v10.852c0,2.387-0.722,3.581-2.229,3.581\
                  c-1.507,0-2.231-1.194-2.231-3.581V16.294z"/>\
          </svg>';
}
