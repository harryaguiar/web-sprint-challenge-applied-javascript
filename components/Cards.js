// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


let resArray = [];
axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((res) => {
    // if the call is successful, it runs this callback
    console.log('Here is the res: ', res);
  
    resArray = res.data.articles;
    console.log(`Array:`, resArray);
    cardsContainer.appendChild(articleFunction(resArray));
    
    // res.articles.forEach((e) => {
    //   cardsContainer.appendChild(articleFunction(e));
    //   });

  })
  .catch((err) => {
    // if the call is unsuccessful, it runs this callback
    console.log('Here is the err: ', err);
  });

  function articleFunction(object){
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
  
  
    const author = document.createElement('div');
    author.classList.add('author');
  
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const img = document.createElement('img');
   
  
    const authorName = document.createElement('span');
    
  
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorName);

    headline.textContent = object.bootstrap[0].headline;
    img.src = object.bootstrap[0].authorPhoto;
    authorName.textContent = `By: ${object.bootstrap[0].authorName}`;

    card.addEventListener('click', e => {
        console.log(headline.textContent);
      })
    
  
  return card;
  
  };
  
  
//   console.log(resArray);
  
  const cardsContainer = document.querySelector('.cards-container');
  
