/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const locatecard = document.querySelector('.cards')

axios.get('https://api.github.com/users/steelehelbling')

.then(response=>{
  //console.log('response.data.message')
const card = Card(response.data)
locatecard.appendChild(card)
})
.catch(error =>{
 console.log('data not returned', error)
})

axios.get('https://api.github.com/users/steelehelbling/followers')
.then(response => {
  console.log(response.data);
  for (info of response.data) {
    axios.get('https://api.github.com/users/' + info.login)
    
    .then(response => {
      console.log(response.data)
      const followerCard = Card(response.data)
      locatecard.appendChild(followerCard)
    })
  }
})
.catch(error =>{
  console.log('data not returned', error)
 })


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

function Card(object){
  const newCard = document.createElement('div'),

cardInfo = document.createElement('div'),
Name = document.createElement('h3'),
UserName = document.createElement('p'),
location = document.createElement('p'),
link = document.createElement('a'),
newImg = document.createElement('img'),
profile = document.createElement('p'),
followers = document.createElement('p'),
following = document.createElement('p'),
bio = document.createElement('p');

newCard.classList.add('card')
cardInfo.classList.add('card-info');

Name.classList.add('name');
UserName.classList.add('username');


link.textContent = object.html_url;
newImg.src = object.avatar_url;
Name.textContent = object.name;
UserName.textContent = object.login;
location.textContent = `Location:  ${object.location}`;
profile.textContent = `Profile:  ${link}`;
followers.textContent = `Followers:  ${object.followers}`;
following.textContent = `Following:  ${object.following}`;
bio.textContent = `Bio: ${object.bio}`;

newCard.appendChild(newImg);
newCard.appendChild(cardInfo);
cardInfo.appendChild(Name);
cardInfo.appendChild(UserName);
cardInfo.appendChild(location);
cardInfo.appendChild(profile);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);
return newCard;
}






/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
/*
 List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell


*/
