# CS Girly
## Description
## Elevator Pitch
Most people majoring in computer science can agree that they can barely take care of themselves. Well, with CS Girly, you can take care of a computer science major even if it isn't yourself! Each user can log in, take care of their Girly, and play games to earn GirlCoins. GirlCoins can be spent to customize your Girly. You want her to look the best she can, because other users will be able to view your Girly in realtime!

## Design
![CS Girly](https://github.com/soph1e-mart1n/startup/assets/112999477/640e153c-5929-47d4-9c32-bb7b26f868e7)

## Key Features
* Secure login over HTTPS
* Customize, feed, and take care of your Girly
* Play games to earn GirlCoins
* Buy new clothes with earned GirlCoins
* Other users' characters deisplayed in realtime
* Money earned is persistently stored

## Technologies
* **HTML** - Uses correct HTML structure for application. Four HTML pages. One for login, one for customizing, one for gaming, and one for seeing other characters.
* **CSS** - Making application compatible with different screen sizes. Making the application aesthetically pleasing.
* **JavaScript** - Provides login, character and customizations display, game display, and displaying other users' characters. 
* **Web Service** - Backend service for logging in, retrieving and submitting character customization, and retrieving and saving money value. 
* **Authentication** - Register and login users. Credentials stored in database. Can't customize character without authentication.
* **Data Storage** - Stores users, user customization choices, and money earned.
* **WebSocket** - When each user changes/saves their customizations, a message is broadcasted to all other users.

## HTML Deliverable
* **HTML pages** - Four HTML page that represent the ability to login, care for your character, play a game, and view other characters.
* **Links** - The login page automatically links to the character page.
* **Text** - Each of the pictures in the gallery is paired with a text of who made the picture. Each contains text describing what can be done.
* **Images** - On the character page, I included images of a character and what you can use to take care of her.
* **Login** - Input box and submit button for login.
* **Database** - The gallery and character design and current well-being represents data pulled from the database.
* **WebSocket** - The text represents realtime character change messages.

## CSS Deliverable
For this deliverable I properly styled the application into an organized appearance.

- **Header, footer, and main content body**
- **Navigation elements** - I deleted the underlines and changed the color
- **Responsive to window resizing** - My app changes layout for all window sizes and devices
- **Application elements** - Used colors that go with the theme of my webapp
- **Application text content** - Consistent fonts that were alligned properly
- **Application images** - Made images centered to text or screen

## JavaScript deliverable
For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- **Login** - When you press the login button it takes you to the customization page.
- **Database** - Displayed the clothes the user has. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
- **WebSocket** - I used random text. This will be replaced with WebSocket text later.
- **Application logic** - The user can interact with difference parts of the website, including the memory game and the dress-up page.

## Service deliverable
For this deliverable I added backend endpoints that receives points and returns the point totals.

- **Node.js/Express HTTP service** - done!
- **Static middleware for frontend** - done!
- **Calls to third party endpoints** - For pictures in the gallery, I called random pictures.
- **Backend service endpoints** - Placeholders for coins that stores the current amount of coins the user has.
- **Frontend calls service endpoints** - I did this using the fetch function.

## DB deliverable
For this deliverable I stored the points in the database.

- **MongoDB Atlas database created** - done!
- **Endpoints for data** - My stubbed out endpoints now process the data and send it to Mongo.
- **Stores data in MongoDB** - done!

## Login deliverable
For this deliverable I associate the coins with the logged in user.

- **User registration** - Creates a new account in the database.
- **existing user** - Stores the coins under the same user if the user already exists.
- **Use MongoDB to store credentials** - Stores both user and their coins.
- **Restricts functionality** - You cannot save coins until you have logged in.

## WebSocket deliverable
For this deliverable I used webSocket to display messages of user updates to their Girly in realtime.

- **Backend listens for WebSocket connection** - done!
- **Frontend makes WebSocket connection** - done!
- **Data sent over WebSocket connection** - done!
- **WebSocket data displayed** - All user updates displayed in realtime.

## React deliverable
For this deliverable I converted the application over to use React.

Used a different GitHub repository: https://github.com/soph1e-mart1n/startup-react.git

- **Bundled and transpiled** - done!
- **Components** - Login, Game, Customize, and Gallery are all components.
- **Router** - Routing between all components using the navbar.
- **Hooks** - Used React's useEffect hook as a transition from using JS's on document load
