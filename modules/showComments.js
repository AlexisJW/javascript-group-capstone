const showComments = async (itemId) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/comments?item_id=${itemId}`);
  const comments = await response.json();
  let commentSection = '<h3>Comments</h3>';
  comments.forEach((comment) => {
    commentSection += `
        <li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>
        `;
  });
  document.querySelector('.comments-section').innerHTML = commentSection;
};

export default showComments;
