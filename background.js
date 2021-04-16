try {
  //If change, run YoutubeSearch.js
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.scripting.executeScript({
      files: ["YoutubeSearch.js"],
      target: { tabId: tabId },
    });
  });
} catch (e) {
  console.log(e);
}
