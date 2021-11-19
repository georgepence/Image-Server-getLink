# Image-Server-getLink
Example Javascript code showing two ways to get an image from the Image Server and insert it into HTML.   The focus here is on index.html.  The server.js file is just here to serve index.html (there is nothing to learn with server.js).  All of the relevant javascript is in a 'script element' at the bottom of the html file.

Index.html shows two types of calls to the Image Server:

1) The script makes a call with url query 'response_type=link'.  It takes that response (jsonized link text), parses it, and inserts the link into image-div as 'src'. The resulting call by the browser renders an image. 
2) In image-div-2, the browser simply has a link to the server with query 'response_type=file'.  The server sends an image, and the browser renders it.

Method one makes two calls to the server, but there may be advantages to having a link to an actual image.  If a second call needs to be made for that specific image, it will produce same image (whereas with method 2 a second call will produce a new random image).

Either method eventually returns an actual image file, which raises a third possibility with its own advantages: The returned image could be saved by the client to a local directory.   This allows it to be called multiple times (without an http delay, or possibility of server failure), and also allows it to be resized or otherwise manipulated.

In the next couple of days, I'll post some example code in another repository, how to save the returned image to a file using node's 'fs' code.


 ` _________________________      _________________________ `
 `|App.js                   |    |App.js                   |`
 `| _______________________ |    | _______________________ |`
 `||NavBar.js              ||    ||NavBar.js              ||`
 `| _______________________ |    | _______________________ |`
 `||Home.js                ||    ||Exhibitions            ||`
 `|| _____________________ ||    || _____________________ ||`
 `||| Museums.js          |||    ||| MuseumExhibitions.js|||`
 `||| ____   ____   ____  |||    ||| ____   ____   ____  |||`
 `||||Card| |Card| |Card| |||    ||||Exhibitions.js    | |||`
 `||||____| |____| |____| |||    ||||       Exhibit.js | |||`
 `||| ____   ____   ____  |||    ||||       Exhibit.js | |||`
 `||||Card| |Card| |Card| |||    ||||Exhibitions.js... | |||`
 `||||____| |____| |____| |||    ||||__________________| |||`
 `|||_____________________|||    |||_____________________|||`
 `||_______________________||    ||_______________________||`
 `| _______________________ |    | _______________________ |`
 `||       Credits.js      ||    ||       Credits.js      ||`
 `||_______________________||    ||_______________________||`
 `|_________________________|    |_________________________|`
