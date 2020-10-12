const text = "https://www.google.";
const clear = ({ url }) => {
	if (url.startsWith(text)) {
		chrome.history.deleteUrl({ url });
	}
};
chrome.history.onVisited.addListener(clear);
chrome.runtime.onInstalled.addListener(() => {
	chrome.history.search({ text }, results => {
		results.forEach(clear);
	});
});
