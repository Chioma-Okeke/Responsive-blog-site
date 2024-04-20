const navLinks = document.querySelectorAll(".nav ul li a")
const validationMessage = document.createElement("p")
const message = document.createTextNode("Field cannot be submitted blank")
validationMessage.appendChild(message)
validationMessage.classList.add("validation-message")

async function fetchData () {
    try {
        const response = await fetch('../../data.json')
        const data = await response.json()
        const {homePageMainFeedData, recentPostsData} = data

        const mainFeedList = document.querySelector(".main-posts")
        homePageMainFeedData.forEach(post => {
            const listItem = document.createElement("li")
            listItem.classList.add("post")
            listItem.innerHTML = `
                <div class="post-image-section">
                    <img src="${post.image}" class="post-image">
                    <p class="date-font">${post.date}</p>
                </div>
                <div class="post-description-section">
                    <h4 class="main-feed-subheading margin-zero">${post.title}</h4>
                    <p class="post-description">${post.description}</p>
                    <p class="moreInfo-font">CONTINUE READING</p>
                </div>
            `
            mainFeedList.appendChild(listItem)
            console.log(mainFeedList, "mainfeedList")
        })

        const recentPostList = document.querySelector(".recent-posts")
        recentPostsData.forEach(post => {
            const listItem = document.createElement("li")
            listItem.classList.add("recent-feed")
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
    } catch (error) {

    }
}

function toggle () {
    var blur = document.querySelector('.blur')
    blur.classList.toggle('active')
    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
    const emailFields = document.querySelectorAll(".send-form input")
    emailFields.forEach(item => {
        item.value = ""
    })
    validationMessage.style.visibility = "hiddem"
}

function submitForm() {
    const emailInputs = document.querySelectorAll(".send-form input")
    console.log(emailInputs)
    emailInputs.forEach(emailInput => {
        if (emailInput.value = "") {
            validationMessage.style.visibility = "visible"
        } else {
            toggle()
            alert("You have successfully subscribed")
        }
    })
}

function handleNavClick (event) {
    navLinks.forEach(item => {
        item.classList.remove("current")
    })
    event.target.classList.add("current")
}

navLinks.forEach(item => {
    item.addEventListener('click', handleNavClick)
})

document.addEventListener("DOMContentLoaded", fetchData)
console.log("hello")