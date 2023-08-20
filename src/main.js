document.querySelectorAll(".cardpost").forEach(cardpost => {
    const postId = cardpost.dataset.postId;
    const ratings = cardpost.querySelectorAll(".postrating");
    const likerating = ratings[0];


    ratings.forEach(rating => {
        const button = rating.querySelector(".pr_btn");
        const count = rating.querySelector(".pr_count")

        console.log(button);
        console.log(count);

        button.addEventListener("click", async () => {
          const likeorDislike = likerating === rating ? "like" : "dislike";
          const response = await fetch(`/posts/${postId}/${likeorDislike}`)
          const body = await response.json()
        })
    })
})