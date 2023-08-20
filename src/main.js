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
            /* prevent double clicking */
            if (rating.classList.contains("pr_select")){
                return;
            }
            count.textContent = Number(count.textContent) + 1;

            ratings.forEach(rating => {
                if(rating.classList.contains("pr_select")) {
                    const count = rating.querySelector(".pr_count");
                    
                    count.textContent = Math.max(0, Number(count.textContent) - 1);
                    rating.classList.remove("pr_select");
                }
            })
            rating.classList.add("pr_select");

        /*1 */
          const likeorDislike = likerating === rating ? "like" : "dislike";
          const response = await fetch(`/posts/${postId}/${likeorDislike}`)
          const body = await response.json()
        })
    })
})