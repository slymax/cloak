const options = {
	text: "https://www.google.",
	maxResults: 100000,
	startTime: 0
};
const clear = ({ url }) => {
	if (url.startsWith(options.text)) {
		chrome.history.deleteUrl({ url });
	}
};
const setup = () => {
	chrome.history.search(options, results => {
		results.forEach(clear);
	});
};
chrome.management.onEnabled.addListener(setup);
chrome.runtime.onInstalled.addListener(setup);
chrome.history.onVisited.addListener(clear);
