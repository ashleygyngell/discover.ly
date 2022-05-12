# Discoverly - Project 3 @ GA (General Assembly)

This was my first group project on the Software Engineering course, built in collaboration with [Tom Riley](https://github.com/TomCRiley) and [Elise La Rooy](https://github.com/eliselarooy)

![app-screenshot]

## Deployment 

This app has been deployed via Heroku and Netlify and is available [here](https://discoverly.netlify.app/)

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

Our intial conversation revolved around a desire to build a social app that incorporated a mutual appreciation for outdoor activities and sketched up a wireframe that walked through a basic user story and visualized our mininum viable product. 

We then spent some time working out the best way to use git branches for optimum version control and created tickets on a Trello board, pre defining all the tasks we needed to complete.

Finally, we decided to work with an Agile methodology, to incorporate daily stand-ups and make the most of paired programming when needed. 



# Wins 

Both Tom and Elise, whilst being firm with their own ideas were incredibly easy to work with. 

## Challenges

Occasional merge conflicts. Good communication and working on the tasks and merging afterwards kept us on track! 


## The Build
* We were placed into groups of three. For us, it was alarmingly easy to come up with a concept for a project. We wanted to build something social, something that represented the different corners of England that we live in and something that would be flexible enough to be expanded upon should we reach our MVP in good time.
* We came up with a social discovery app, where users can post their favourite running routes or hiking locations. Our MVP would be to post and upload pictures, and our stretch goals would include vital things like mapping (though important, we thought it could be a huge time-sink).
* We worked in an Agile methodology, with daily stand ups and some pair programming when necessary. 
* Primarily, we worked with version control through Git and on our own branches of the repository. Occasionally there were some merge conflicts, but these were generally avoided as we worked siloed into our own components or pre defined tasks that we would take from the Trello board.

```JavaScript
const createComment = async (req, res, next) => {
  try {
    const spot = await Spot.findById(req.params.id);

    if (!spot) {
      return res.status(404).send({ message: 'Spot not found!' });
    }

    const newComment = { ...req.body, createdBy: req.currentUser._id };

    spot.comments.push(newComment);
    const savedSpot = await spot.save();

    return res.status(201).json({ message: 'New comment created!', savedSpot });
  } catch (err) {
    next(err);
  }
};
```

One of our first priorities was to create endpoints for all our major user functionality like posting a location they’d discovered or uploading a comment or a picture. This is an endpoint that allows a user to post a comment.

We first needed a way to interface between our Express functionality and the Mongo database. We used Mongoose which enabled us to easily perform CRUD operations on the correct collection in our database. 

With Mongoose, we designed our schemas that allow us to store our data in a specific configuration. 

```JavaScript
const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxlength: 300 },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);
export default mongoose.model('Comment', commentsSchema);
```

Here we are telling Mongoose that the comment a user creates ::must have:: text, which is a string and has a max length of 300 characters, along with a rating between 1 and 5, a username and a time stamp.

```javascript
export const createComment = async (id, comment) => {
  const options = {
    method: 'POST',
    url: `/api/spots/${id}/comments`,
    data: comment,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
    },
  };
  const { data } = await axios.request(options);

  return data;
};
```

In our front end, we accessed the endpoint with Axios, making sure to include a header with the authorisation token so that only a logged in user can make a comment. 

```javascript
const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const user = await getUserById(createdBy);
      setUser(user);
    };

    getData();
  }, []);const [user, setUser] = React.useState(null);
```

Lastly, to implement the comment we used React useEffect to grab the data from the endpoint with an asynchronous function. We then used setState to update the HTML with the new data from the endpoint - in this case, a user comment.

## Map function explanation ?????

## Wins
This was a huge step up in complexity from my previous hackathon project. I really enjoyed the project management aspect of this early on, deciphering what we needed to do as soon as possible for MVP and feeding back to our teachers in stand ups. 

I also found it was great experiencing working in teams with a fuller understanding of version control and how to merge independent features together. We iterated extremely fast because of this and my teammates Elise and Ash came just as ready as I did every single day to smash the project. It was a really collaborative environment where we implemented as many ideas as we could think of.

I personally am very proud of managing to get maps into the website, especially implementing the ‘pin’ functionality of Leaflet.js and customising it to include the logo I had designed. 

## Stretch Goals
As mentioned, we did iterate very quickly and managed to include most of our wishlist features. Something we didn’t manage to implement was a user bio that a user could update after registration. 

c
