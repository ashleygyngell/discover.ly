# Discoverly - Project 3 @ GA (General Assembly)

This was my first group project on the Software Engineering course, built in collaboration with [Tom Riley](https://github.com/TomCRiley) and [Elise La Rooy](https://github.com/eliselarooy)

![app-screenshot](https://res.cloudinary.com/dj7e2jadx/image/upload/v1654004396/Screenshot_2022-05-31_at_14.39.33_xyxv0g.png)

## Deployment 

This app has been deployed via Heroku and Netlify and is available [here](https://discoverly.netlify.app/)

The free servers on Heroku sleep when they are not in use, so please allow a few seconds for them to wake up! 

Feel free to register as a user or use: **email:** `demo@demo.com` & **password:** `Demo123!`

This Repo is for the backend only. The code for the frontend is available [here]

## The Brief

A 7 day build time to create a full stack web application. 
- Feature complex CRUD operations like posting and commenting, including user registration and JWT authenication.
- Is served from a Mongo database to an Express API
- Incorporates a React front end
- Uses any combination of CSS frameworks or CSS/SASS to style the front end. 

## Languages / Frameworks / Databases used 

- MongoDb
- React
- Node.js
- Bulma
- HTML5

## Installation 

- Clone the repo from GitHub onto your machine.
- Use yarn/npm to install all dependencies from the package.json file.

## Concept

A Social Discovery app where users can post their favorite spots for sporting activities. 

## Phase One (Day 1)

**Concept, Wireframing, Pseudocoding**

Our intial conversation revolved around a desire to build a social app that incorporated a mutual appreciation for outdoor activities. 

Our first task was to sketch up a wireframe that walked through a basic user story and visualize our mininum viable product. We then spent some time working out the best way to use git branches for optimum version control and created tickets on a Trello board, pre defining all the tasks we needed to complete.

Finally, we decided to work with an Agile methodology, to incorporate daily stand-ups and look for paired programming opportunities.

![wireframe-screenshot](https://res.cloudinary.com/dj7e2jadx/image/upload/v1654004136/Screenshot_2022-05-31_at_14.34.13_eabnvx.png)

![trello-screenshot](https://res.cloudinary.com/dj7e2jadx/image/upload/v1654004129/Screenshot_2022-05-31_at_14.34.53_voonus.png)

## Phase Two (Day 2-4)

**The Back End Build** 

We worked through the Trello board tickets one at a time, focussing on the backend first. We wanted to make sure the majority of the back end was running correctly, to make the connection to the front end as seamless as possible. This involved creating controllers for the users, comments and spot creation. I took on the responsibility of the login and registration features as shown below in a code snippet from usersController.js.  

```async function registerUser(req, res, next) {
  try {
    const searchedUser = req.body.username;
    console.log(searchedUser);
    const users = await User.findOne({ username: searchedUser });
    console.log(users);
    if (!req.body.username) {
      return res.status(203).send({ message: 'Username Required' });
    else if (users !== null) {
      return res.status(203).send({ message: 'Username Already Exists' });
```
The async function used here contains an await expression that suspends execution until the returned promise is fulfiled. First it checks for an input, returning an 203 error if not detected. Then, if the user has input a username, it checks against information in the database, returning a 203 error if the username already exists. This process carries on through a variety of else if statements.

For example, the next code snippet demonstrates the multiple use cases of regex for input validation when a user is registering a profile. These patterns represent a set of strings that check for certain conditions. This was crucial in avoiding a generic password input, nor a false email. Finally, the last section of the  code is where the user is created if all of the if statements are not applicable and the await expression is resolved with a creation of a user, passing in the request body. 
    
  ``` } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(req.body.email)
    ) {
      return res.status(203).send({ message: 'Email Invalid' });
    } else if (
      !/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(req.body.password)
    ) {
      return res.status(203).send({
        message:
          'Password is not valid. Password must contain: 10 characters, 1 symbol and 1 number.',
      });
    } 
    const user = await User.create(req.body);
    return res.status(201).send({ message: 'success', user });
  } catch (err) {
    next(err);
  }
}
``` 

## Phase Three (Day 5-7)

**The Front End Build**

We built the majority of the front end by coding as a group, with the Bulma CSS framework handling most of the design process for us. We installed a few extra node packages for a word carousel and login/signup transition whilst incoprotating Cloudinary for our image uploads and leaflet for our Maps. 


# Wins 

- Working alongside Tom and Elise was a genuine delight. We were able to constructivley dissagree with each other on many aspects of the app but this made for an app that weaved all of our best ideas into one finished product. 
- Our daily standups were incredibly useful and allowed us to flag any blockers that we could code as a group before working on our own tasks as the days went on. 
- Every time we made a change/completed a task from the trello board, we made sure to commit and merge our changes. 

## Challenges

- Speaking of merging, there was a rare merge conflict but we made sure to focus all our attention on resolving this and then we could move on quickly and avoid any issues down the line. Good communication and color coding the tasks we were completing made sure we avoided this issue for the most part. 

- Working with Cloudinary for the first time proved incredibly challenging. As this was something none of us had experience with before, I reached out to one of our instructors who provided us with some clarity which, paired with the online documentation and youtube tutorials, made sure we could incorporate its functionality without draining too much productivity time. 

## Stretch Goals 

- Implementing a user bio
- Whats near me function, using the users current coordinates. 
- Fixing the state issue on the registration form. There is a progress bar that visualises progress for the user when registering. This works correctly if the user goes from one box to the other inputting their information. However, if the user inputs information into a box and then deletes the information, the progress bar still lights up as if this section has been 'completed' 

## Takeaways

- Pair programming really gave me a sense of collective ownership and increased our flow/focus state whilst maintaining a good morale. 
- Getting to grips with JWT and their relationship with a browser's local storage was really valuable for my confidence moving forward with a solo, full stack project on the horizon.
