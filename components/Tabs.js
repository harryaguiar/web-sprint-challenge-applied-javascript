// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


let resArray = [];
axios
  .get(`https://lambda-times-api.herokuapp.com/topics`)
  .then((res) => {
    // if the call is successful, it runs this callback
    console.log('Here is the res: ', res);
  
    resArray = res.data.topics;
    console.log(`Array:`, resArray);
    topics.appendChild(tredingTopics(resArray));
    // res.data.forEach((e) => {
    //   cards.append(githubCard(e));
    //   });

  })
  .catch((err) => {
    // if the call is unsuccessful, it runs this callback
    console.log('Here is the err: ', err);
  });


  function tredingTopics(element){

    const topics = document.querySelector('.topics');
      
    const tab1 = document.createElement('div');
    tab1.classList.add('tab');
    tab1.textContent = element[0]

    const tab2 = document.createElement('div');
    tab2.classList.add('tab');
    tab2.textContent = element[1];

    const tab3 = document.createElement('div');
    tab3.classList.add('tab');
    tab3.textContent = element[2];

    const tab4 = document.createElement('div');
    tab4.classList.add('tab');
    tab4.textContent = element[3];

    const tab5 = document.createElement('div');
    tab5.classList.add('tab');
    tab5.textContent = element[4];

    
    topics.appendChild(tab1);
    topics.appendChild(tab2);
    topics.appendChild(tab3);
    topics.appendChild(tab4);
    topics.appendChild(tab5);

  
  return element;
  
  };




  const topics = document.querySelector('.topics');
  