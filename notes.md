# **Final Study Guide**
![image](https://github.com/soph1e-mart1n/startup/assets/112999477/12fe7f80-4f0b-4306-be11-5c5a1d1b6885)

* ### What ports are used for HTTP, HTTPS, SSH?
  * By default, HTTPS connections use TCP port 443. HTTP, the unsecure protocol, uses port 80. SSH is 20
  * When you connect to a device on the internet you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/6b8f79a9-bcb2-40c5-9110-9fa4de76e5c6)

* ### What do HTTP status codes in the 300, 400, 500 range indicate?
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/50ce755d-cebf-4cb3-8836-1ae07401294c)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/c67fd001-cc58-499c-8de9-7c77f291a43b)
  * ## Status codes

It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

Within those ranges here are some of the more common codes. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for a full description of status codes.

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.   
* ### What does the HTTP header content-type allows you to do?
  * The Content-Type header field is used to specify the nature of the data in the body of an entity, by giving type and subtype identifiers, and by providing auxiliary information that may be required for certain types. It helps the browser or server understand what format the information being sent/requested is in, improving the way it is processed and displayed.
  * 	The format of the content being sent. These are described using standard MIME types.
* ### What do the following attributes of a cookie do?
  * Domain
    * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/1836b1ad-eda9-40ae-9593-f416ab20a897)
  * Path
    * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/711d81f8-27de-4292-b2fe-ac677526feba)
  * SameSite
    * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/9a793bd4-574b-4a21-b3c7-27341b3542af)
  * HTTPOnly
    * A cookie with the HttpOnly attribute is inaccessible to the JavaScript Document.cookie API; it's only sent to the server. For example, cookies that persist in server-side sessions don't need to be available to JavaScript and should have the HttpOnly attribute. This precaution helps mitigate cross-site scripting (XSS) attacks.
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/2595d68d-87dc-4cf2-a129-f2007b15b396)
  * An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests. Typically, an HTTP cookie is used to tell if two requests come from the same browser—keeping a user logged in, for example. It remembers stateful information for the stateless HTTP protocol.
    Cookies are mainly used for three purposes:
    Session management
    Logins, shopping carts, game scores, or anything else the server should remember
    Personalization
    User preferences, themes, and other settings
    Tracking
    Recording and analyzing user behavior
* ### Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/2f1313a8-0aa3-4a7a-b192-d3a35529ad07)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/8260113d-4ad6-4a49-82c3-cb16d5ca8893)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/33dfb19f-709b-449d-b122-c3e45a648716)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/3c7a71ad-326f-4238-90ea-a3b7cc531931)
  * In the previous instruction you saw how to use Node.js to create a simple web server. This works great for little projects where you are trying to quickly serve up some web content, but to build a production ready application you need a framework with a bit more functionality for easily implementing a full web service. This is where the Node package Express come in. Express provides support for:
    Routing requests for service endpoints
    Manipulating HTTP requests with JSON body content
    Generating HTTP responses
    Using middleware to add functionality
* ### Given the following Express service code: What does the following JavaScript fetch return?
* ### Given the following MongoDB query
  ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/04eb7c80-840b-44a0-adfc-d1b7bd05dcb5)
  select all of the matching documents.
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/46ab8a26-6584-4e56-8a93-27d98ce6faca)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/66a23562-9118-479f-b70d-46db4eeee721)
* ### How should you store user passwords in a database?
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/e4c4a3ee-85dc-4240-bb4e-710b91adff78)
* ### Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/17ed8a1e-c888-4f33-adf3-521c9abbc33c)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/cddf5fbd-c478-43d3-83d7-2f733178e514)
* ### What is the WebSocket protocol used for?
  * Finally, in 2011 the communication protocol WebSocket was created to solve this problem. The core feature of WebSocket is that it is fully duplexed. This means that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.
  * WebSocket connections are still only between two parties. So if you want to facilitate a conversation between a group of users, the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers.
* ### What is JSX and how are the curly braces rendered?
  * Combining JavaScript and HTML
  * React combines JavaScript and HTML into its component format. CSS must be declared outside of the JSX file. The component itself highly leverages the functionality of JavaScript and can be represented as a function or class.
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/36588b9f-abfb-4f97-9b87-a2cf71a22631)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/77d65e5e-0ce2-4e32-977d-d80ff27e1208)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/b02f747f-4bb1-4637-8f9e-f36a750fefdd)
* ### Assuming a HTML document with a
  ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/416c8fa7-3f62-46c2-8e8a-d663f6df5f6e)
  element, what content will the following React component generate?
  ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/a9934bef-0be4-4513-9e82-7a04eedbc9b5)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/ea77353d-e64b-46c0-99be-de8c88256c56)
* ### Assuming a HTML document with a
  ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/20fbe2d2-15db-4869-a0bd-2bfdfe88864b)
  element, what content will the following React component generate?
    ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/ed8f389e-600c-42f0-a235-fe9120c4ed4f)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/04292a08-6411-4ddd-843a-05f7bb6dd704)
* ### What does the following React component do?
  ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/bbab8638-97a1-4aa9-8c75-eaa88f25edc0)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/8e24a60e-5e34-4c5a-b11f-f6738cea6898)
* ### What are React Hooks used for?
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/3866c31f-2a79-4dcf-a774-d3cf93684fb0)
* ### What is the useEffect hook used for?
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/30c1b270-4645-40c2-bcea-36952c192b58)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/570b3b61-6d4a-4477-aa1c-51209916fde7)
* ### What does this code do?
  ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/a897d0c7-7e3f-46ed-85e7-4ce984028f14)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/0c0d905a-08dd-4c1a-8e8d-e1522db36665)
  * A web framework router provides essential functionality for single-page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. With a single page application, the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages. The router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.
  * React does not have a standard router package, and there are many that you can choose from. We will use react-router-dom Version 6. The simplified routing functionality of React-router-dom derives from the project react-router for its core functionality. Do not confuse the two, or versions of react-router-dom before version 6, when reading tutorials and documentation.
* ### What role does npm play in web development?
  * Node package manager (npm) is a package manager and a software register but it's also a place where developers can find, build and manage code packages. Right now, npm contains over 800,000 packages for various applications, from front-end and robotics to mobile apps.
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/7143b7ef-8dce-4718-968e-6ba8d02bc489)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/f1ca39ae-5f7f-4a02-9e3a-623c8fd5acd1)
* ### What does package.json do in a npm project?
  * JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.
  * If you list the files in the directory you will notice that it has created a file named package.json. This file contains three main things: 1) Metadata about your project such as its name and the default entry JavaScript file, 2) commands (scripts) that you can execute to do things like run, test, or distribute your code, and 3) packages that this project depends upon. The following shows what your package.json looks like currently. It has some default metadata and a simple placeholder script that just runs the echo command when you execute npm run test from the console.
* ### What does the fetch function do?
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/3222751c-be14-4550-995d-160149bac0ce)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/e486477d-7270-4fde-88ed-8ba773928594)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/f12ce640-3b7a-407c-96c4-d66631941e46)
* ### What does node.js do?
  * It was the first successful application for deploying JavaScript outside of a browser.
  * Node.js simply took the V8 engine and ran it inside of a console application. When you run a JavaScript program in Chrome or Node.js, it is V8 that reads your code and executes it. With either program wrapping V8, the result is the same.
* ### What does Vite do?
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/dc6d5ef2-7548-448c-8f7f-5f4b7374fb12)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/1d2e0d9e-bee5-470c-a126-4013358538b8)


# **Midterm study guide**
* In the following code, what does the link element do? 
  * The <link> tag defines the relationship between the current document and an external resource.
  * The <link> tag is most often used to link to external style sheets or to add a favicon to your website.
  * The <link> element is an empty element, it contains attributes only.
* In the following code,  what does a div tag do?
  * The <div> tag defines a division or a section in an HTML document.
  * The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.
  * The <div> tag is easily styled by using the class or id attribute.
  * Any sort of content can be put inside the <div> tag! 
* In the following code, what is the difference between the #title and .grid selector?
  * A period ( . ) indicates a class, and a hash ( # ) indicates an ID. The fundamental difference between is that you can reuse a class on your page over and over, whereas an ID can be used once
* In the following code, what is the difference between padding and margin?
  * In CSS, a margin is the space around an element's border, while padding is the space between an element's border and the element's content. Put another way, the margin property controls the space outside an element, and the padding property controls the space inside an element.
    
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/8629839b-8937-4dba-bbc1-85006ffebb93)
    
* Given this HTML and this CSS how will the images be displayed using flex?
  * The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.
* What does the following padding CSS do?

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/cde5349b-c5da-4b23-911f-1566be578cc6)

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/e9e79a42-c06e-4eb3-ae6f-ba964a00ccee)

* What does the following code using arrow syntax function declaration do?
  * An arrow function expression is an anonymous function expression written with the “fat arrow” syntax ( => ). Like traditional function expressions, arrow functions are not hoisted, and so you cannot call them before you declare them. They are also always anonymous—there is no way to name an arrow function
* What does the following code using map with an array output?
  * const array1 = [1, 4, 9, 16];
  * // Pass a function to map
  * const map1 = array1.map((x) => x * 2);
  * console.log(map1);
  * // Expected output: Array [2, 8, 18, 32]
* What does the following code output using getElementByID and addEventListener?
  * The getElementById() method returns an element with a specified value.
  * The getElementById() method returns null if the element does not exist.
  * The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/d9ec34c4-902b-42bf-bcd3-a452bd5aa915)

* What does the following line of Javascript do using a # selector?
  * The id selector uses the id attribute of an HTML element to select a specific element.
  * The id of an element is unique within a page, so the id selector is used to select one unique element!
  * To select an element with a specific id, write a hash (#) character, followed by the id of the element.
* Which of the following are true? (mark all that are true about the DOM)

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/849998d1-0b8e-4620-b6f5-91e023dc6b29)

* By default, the HTML span element has a default CSS display property value of: 
  * <span> is an inline element by default
* How would you use CSS to change all the div elements to have a background color of red?

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/a75b6482-8505-4984-9db2-f8a41389f3c3)

* How would you display an image with a hyperlink in HTML?

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/cd9881d2-848d-4e7e-bc1c-dbf46183a958)

* In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/853a32ac-53b5-4fcc-972b-41ae20229464)

* Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
  * class or id css
* What will the following code output when executed using a for loop and console.log?
  * The log() method writes (logs) a message to the console.
  * The log() method is useful for testing purposes.
* How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/efed8fa9-63f4-4219-ad1a-2d5c4984f808)

* What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/ddc10abc-cc31-469d-bc6c-f4f77171b08d)
* How do you declare the document type to be html?
  * A doctype declaration tells the browser that the page to be rendered is written in HTML. To declare an HTML5 doctype, `<! DOCTYPE html>` is required in the first line of your HTML document. Doctype declaration for HTML5 is not case sensitive and does not require a closing tag.
* What is valid javascript syntax for if, **else**, for, while, switch statements?

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/1095341f-34aa-4d5c-8c27-bfcd7e4b1cfb)

* What is the correct syntax for creating a javascript object?
  * let person = "John Doe";
* Is is possible to add new properties to javascript objects?
  * Yes
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/6434f7dd-aa18-4dfc-aa85-74d781cb7dbf)
* If you want to include JavaScript on an HTML page, which tag do you use?
  * In HTML, JavaScript code is inserted between <script> and </script> tags.
* Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/78b2a4c4-871e-407d-9dec-9d77dc7c5b3c)

* Which of the following correctly describes JSON?
  * JSON stands for JavaScript Object Notation
  * JSON is a lightweight format for storing and transporting data
  * JSON is often used when data is sent from a server to a web page
  * JSON is "self-describing" and easy to understand

  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/4b20a74b-7c0d-4012-9a75-2048123a05f7)
   
* What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?

  * chmod - changes access permissions
  * pwd - displays the path name of the working directory
  * cd - changes the current diractory
  * ls - displays content of directory
  * vim - Vim is an editor to create or edit a text file
  * nano - small and friendly text editor
  * mkdir - create one or more directories specified by the Directory parameter
  * mv - move file
  * rm - delete file
  * man - Displays manual entries online.
  * ssh - SSH enables secure logins to remote computers
  * ps - shows status of processes
  * wget - Wget is a free GNU command-line utility tool used to download files from the internet
  * sudo - Sudo stands for either "substitute user do" or "super user do" and it allows you to temporarily elevate your current user account to have root privileges

* Which of the following console command creates a remote shell session?
  * ssh
* Which of the following is true when the -la parameter is specified for the ls console command?
  * Displays the mode, number of links, owner, group, size (in bytes), and time of last modification for each file. If the file is a special file, the size field contains the major and minor device numbers. If the time of last modification is greater than six months ago, the time field is shown in the format month date year where as files modified within six months the time field is shown as month date time format.
  * Lists all entries in the directory
* Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
  * For example, if you currently own myblog.wordpress.com, the “myblog” section would be a subdomain, the “wordpress” section would be the second-level domain (SLD) and the “.com” would be the top-level domain (TLD)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/ce2d3b76-8686-40d5-a581-2a8d7af32546)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/ad11f232-b06e-4d96-a1bc-f35fb9084986)
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/96aa4c46-6a66-4fac-ba50-f9a0d1cf0179)
* Is a web certificate is necessary to use HTTPS.
  * Yes, https requires a SSL certificate
* Can a DNS A record can point to an IP address or another A record.
  * A DNS A record is the most fundamental type of DNS record. The A stands for “Address,” and it's used to point a domain name to an IP address or host. You can only use an A record when you want to point to an IPv4 address
  * The DNS A record points to the IP address for a given domain name
* Port 443, 80, 22 is reserved for which protocol?
  * Port 443 is a virtual point ⁠through which data transmissions are sent and received
  *  Port 80 is the port number assigned to commonly used internet communication protocol, Hypertext Transfer Protocol (HTTP)
  *  Port 22 is a well-known port number used in computer networking. It is specifically associated with the Secure Shell (SSH) protocol, which is commonly used for secure remote administration and secure file transfer over an unsecured network
* What will the following code using Promises output when executed?
  * A JavaScript Promise object contains both the producing code and calls to the consuming code
  * ![image](https://github.com/soph1e-mart1n/startup/assets/112999477/442e9da2-d7f1-4948-8ae2-71688a6f6418)

