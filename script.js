const options = {
	text: "www.google.",
	maxResults: 999999,
	startTime: 0
};
const clear = ({ url }) => {
	const { hostname, pathname } = new URL(url);
	if (hostname.startsWith(options.text) && pathname === "/search") {
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
