const showComments = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/comments?item_id=${itemId}`);
  const comments = await response.json();
  document.querySelector('.comment').innerHTML
        += `
        <p>${comments[itemId].creation_date} ${comments[itemId].username}: ${comments[itemId].comment}</p>
        `;
};

export default showComments;
