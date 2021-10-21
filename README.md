# Image-Server-getLink
Example Javascript code to get a link to an image from the Image Server and insert it into HTML.   The server.js file is just here to serve index.html; 
there is nothing to learn with server.js.    The index.html contains the javascript "fetch" to get an image link, and then inserts it in the "image-div" div 
element.  

The image link is in a format "http://flip3.engr.oregonstate.edu:17778/image?image=6.jpeg", using the query "image=".  This results in the Microserver sending
image file to the browser.  The fact that the "response" is a file means the client *can* accept the response and write it to a local client directory rather
than simply rendering it, and then 
serve from the local directory, or manipulate the image before serving.  I'll shortly post a second github with some sample code to write the response to disk.
 
