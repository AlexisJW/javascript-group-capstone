const totalComments = async (num) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/comments?item_id=${num}`);
  const comments = await response.json();
  return comments.length;
};

export default totalComments;