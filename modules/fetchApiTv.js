// fetch the tv API and Populate.
const populate = async () => {
  const cardsContainer = document.querySelector('#cards-container');
  const requestURL = 'https://api.tvmaze.com/shows';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const data = await response.json();
  const resultObj = data;
  cardsContainer.innerHTML = '';
  resultObj.forEach((obj) => {
    cardsContainer.innerHTML += `
        <div class="shadow-card">
          <div class="container-item">
            <img src="${obj.image.medium}" alt="Avatar" style="width:100%">
              <div class="container">
              <h4><b> ${obj.name} </b></h4> 
              <button style="font-size:14px" id="comment-${obj.id}"> Comments <i class="fa fa-comments-o"></i></button> 
             </div>
          </div>
        </div>
      `;
  });

  return cardsContainer.innerHTML;
};

export default populate;