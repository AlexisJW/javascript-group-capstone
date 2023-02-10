import showComments from './showComments.js';

const addComments = async (itemId) => {
    const user = document.querySelector('#username');
    const comment = document.querySelector('#username');
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/comments', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username: user.value,
      comment: comment.value,
    }),
  })
  
};

export default addComments;