const text = "https://www.google.";
const clear = ({ url }) => {
	if (url.startsWith(text)) {
		chrome.history.deleteUrl({ url });
	}
};
const setup = () => {
	chrome.history.search({ text }, results => {
		results.forEach(clear);
	});
};
chrome.management.onEnabled.addListener(setup);
chrome.runtime.onInstalled.addListener(setup);
chrome.history.onVisited.addListener(clear);
