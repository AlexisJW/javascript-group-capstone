const showComments = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/comments?item_id=${itemId}`);
  const comments = await response.json();
  comments.forEach((comment) => {
    document.querySelector('.comments-section').innerHTML
        += `
        <li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>
        `;
  });
};

export default showComments;
