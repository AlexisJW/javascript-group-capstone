const detailSection = document.createElement('section');
detailSection.classList.add('popup','flexbox');

document.body.insertBefore(detailSection, document.body.children[1])

const comments = async (num) => {
    const requestURL = 'https://api.tvmaze.com/shows';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const resultObj = await response.json();
  detailSection.innerHTML =
        `
        <i class=""></i>
        <img src="${resultObj[num].image.original}" class="detail-image" alt="Image">
        <h2>
            ${resultObj[num].name}
        </h2>
        <div class="detail-items">
            <li></li>
            <li> </li>
            <li></li>
            <li></li>
        </div>
        `
}

export default comments;





