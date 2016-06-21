var http = require("http");
var url = require("url");
var count = 0;

function getProperty(re) {
	var arr = [];

	for (var i in re) {
		if ( i === "url") {
			arr.push(re[i]);
		}
	}
	return arr;
}

function start(route, handle) {
	function onRequest(request, response) {
		// console.log("Request received." + "== " + console.log(getProperty(request)) + count);
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received. " );
		route(handle, pathname, response, request);

	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;

// response.writeHead(200, {"Content-Type": "text/plain"});
// var content = route(handle, pathname);
// response.write(content);
// // response.write("Hello World! Does this change?");
// count++;
// response.end();
// route(handle, pathname, response);

// request.setEncoding("utf8");

// request.addListener("data", function(postDataChunk) {
// 	postData += postDataChunk;
// 	console.log("Received POST data chunk '" + postDataChunk + "'.");
// })

// request.addListener("end", function() {
// 	route(handle, pathname, response, postData)
// })
