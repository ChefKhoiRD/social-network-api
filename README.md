# Social Network API

## User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Instructions
```
1. Run npm install
2. Run node server
4. Navigate to localhost:3001/api/users and localhost:3001/api/thoughts
3. Test Get, Post, Put, and Delete routes on both
4. Test Post localhost:3001/api/thoughts/:thoughtId/reactions
5. Test Delete routes with localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId
```

## Screenshots
![readmescreenshots](./readmeassets/Screenshot_1.png)
![readmescreenshots](./readmeassets/Screenshot_2.png)

## Walkthrough video
![readmewalkthrought](./readmeassets/socialnetwork.gif)