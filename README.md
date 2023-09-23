# CS Girly
## Description
## Elevator Pitch
Most people majoring in computer science can agree that they can barely take care of themselves. Well, with CS Girly, you can take care of a computer science major even if it isn't yourself! Each user can log in, take care of their Girly, and play games to earn GirlCoins. GirlCoins can be spent to customize your Girly. You want her to look the best she can, because other users will be able to view your Girly in realtime!

## Design
![CS Girly](https://github.com/soph1e-mart1n/startup/assets/112999477/640e153c-5929-47d4-9c32-bb7b26f868e7)

## Key Features
*Secure login over HTTPS
*Customize, feed, and take care of your Girly
*Play games to earn GirlCoins
*Buy new clothes with earned GirlCoins
*Other users' characters deisplayed in realtime
*Money earned is persistently stored

## Technologies
***HTML** - Uses correct HTML structure for application. Four HTML pages. One for login, one for customizing, one for gaming, and one for seeing other characters.
***CSS** - Making application compatible with different screen sizes. Making the application aesthetically pleasing.
***JavaScript** - Provides login, character and customizations display, game display, and displaying other users' characters. 
***Web Service** - Backend service for logging in, retrieving and submitting character customization, and retrieving and saving money value. 
***Authentication** - Register and login users. Credentials stored in database. Can't customize character without authentication.
***Data Storage** - Stores users, user customization choices, and money earned.
***WebSocket** - When each user changes/saves their customizations, their new character is broadcasted to all other users.
