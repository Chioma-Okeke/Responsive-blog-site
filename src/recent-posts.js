async function fetchData () {
    const response = await fetch('../../data.json')
    const data = await response.json()
    console.log(data);
    const {recentPostFeedData, recentPostsData} = data

    const recentFeedList = document.querySelector(".main-posts")
    recentPostFeedData.forEach((feedData) => {
        const listItem = document.createElement("li")
        listItem.classList.add("post")
        listItem.innerHTML = `
        <div class="post-image-section">
            <img src="${feedData.image}" class="post-image">
            <p class="date-font">${feedData.date}</p>
        </div>
        <div class="post-description-section">
            <h4 class="main-feed-subheading margin-zero">${feedData.title}</h4>
            <p class="post-description">${feedData.description}</p>
            <p class="moreInfo-font">CONTINUE READING</p>
        </div>
        `
        recentFeedList.appendChild(listItem)
        console.log(recentFeedList)
    })

    const recentPostList = document.querySelector(".recent-posts")
        recentPostsData.forEach(post => {
            const listItem = document.createElement("li")
            listItem.classList.add("recent-feed")
            listItem.classList.add("demarcation")
            listItem.innerHTML = `
                <div class="recent-post-image" style="background-image: url('${post.image}');"></div>
                <p class="about-profile" style="text-align: left;">${post.text}</p>
            `
            recentPostList.appendChild(listItem)
            console.log(listItem, "recentPosts")
        })

        const subscriptionForm = document.querySelector("#popup")
        subscriptionForm.innerHTML = `
            <img src="../../assets/close-x.svg" class="close-icon" onclick="toggle()">
            <img src="../../assets/subscribeImage.jpg" class="subscription-form-image">
            <div class="subscribe-form-text">
                <h1>KEEP IN TOUCH</h1>
                <p>Never miss a post by subscribing to our weekly newsletter and hearing about our special offers ahead of the crowd</p>
                <p>Don't worry you can unsubscribe at any time :)</p>
                <div class="send-form">
                    <input type="email" placeholder="hello@email.com" class="large-screen">
                    <input type="email" placeholder="email address" class="small-screen">
                    <button><img src="../../assets/paper-plane-2563.svg"></button>
                </div>
                <p class="validation-message">Field cannot be submitted blank</p>
            </div>
        `
}

function toggle () {
    var blur = document.querySelector('.blur')
    blur.classList.toggle('active')
    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}

window.addEventListener("load", fetchData)
console.log("hello")