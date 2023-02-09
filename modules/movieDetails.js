const detailSection = document.createElement('section');
detailSection.classList.add('popup');

document.body.insertBefore(detailSection, document.body.children[1]);

const comments = async (num) => {
  const requestURL = 'https://api.tvmaze.com/shows';
  const request = new Request(requestURL);
  const response = await fetch(request);
  let resultObj = await response.json();
  resultObj = resultObj[num];
  detailSection.innerHTML = `
        <button class='close'><i class='fa fa-close fa-10x'></i></button>
            <img src="${resultObj.image.medium}" class="detail-image" alt="Image">
            <h2>
                ${resultObj.name}
            </h2>
        <div class="detail-items">
            <li>Language: ${resultObj.language}</li>
            <li>Genres: ${resultObj.genres}</li>
            <li>Premiered: ${resultObj.premiered}</li>
            <li>Ended: ${resultObj.ended}</li>
            <li>Average rating: ${resultObj.rating.average}</li>
            <li><a href='${resultObj.officialSite}' target='_blank'>Official Site</a></li>
        </div>
        `;
};

export default comments;
