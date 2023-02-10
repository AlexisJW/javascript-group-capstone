const showComments = async (item_id) => {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/X2HxEwPkDolJVV1WCgVc/comments?item_id=${item_id}`);
    const comments = await response.json();
    comments.forEach((comment) =>
    document.querySelector('.comment').innerHTML +=
        `
        <p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>
        `
    )
}

export default showComments

