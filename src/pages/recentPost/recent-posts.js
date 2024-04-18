const recentPostsFeedSummaryData = [
    {
        image: "../../assets/dumplins.jpg",
        text: "Keep cooking simple"
    },
    {
        image: "../../assets/simple work station.jpg",
        text: "Simplicity and work"
    },
    {
        image: "../../assets/simple decoration.jpg",
        text: "Simple decoration"
    }
]

const recentPostFeedData = [
    {
        image: "../../assets/heroSection.jpg",
        title: "Finding simplicity in life",
        date: "July 19, 2019 | 3 comments",
        description: "Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living."
    },
    {
        image: "../../assets/dumplins.jpg",
        title: "Keep cooking simple",
        date: "July 19, 2019 | 3 comments",
        description: "Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. `One of the easiest ways to do that is to keep your cooking nice and simple."
    },
    {
        image: "../../assets/simple work station.jpg",
        title: "Simplicity and work",
        date: "July 12, 2019 | 3 comments",
        description: "Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out."
    },
    {
        image: "../../assets/simple decoration.jpg",
        title: "Simple decoration",
        date: "July 3, 2019 | 3 comments",
        description: " A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before."
    }
]

function generateMainFeed() {
    const ul = document.querySelector(".main-posts")

    recentPostFeedData.forEach((feedData) => {
        const li = document.createElement("li")
        li.classList.add("post")

        const div1 = document.createElement("div")
        div1.classList.add("post-image-section")
        
        const img = document.createElement("img")
        img.src = feedData.image
        img.classList.add("post-image")
        div1.append(img)

        const p = document.createElement("p")
        const date = document.createTextNode(feedData.date)
        p.classList.add("date-font")
        p.appendChild(date)
        div1.appendChild(p)

        li.appendChild(div1)

        const div2 = document.createElement("div")
        div2.classList.add("post-description-section")
        const h4 = document.createElement("h4")
        h4.classList.add("main-feed-subheading")
        h4.classList.add("margin-zero")
        const title = document.createTextNode(feedData.title)
        h4.appendChild(title)
        div2.appendChild(h4)

        const postDescription = document.createElement("p")
        const description = document.createTextNode(feedData.description)
        postDescription.classList.add("post-description")
        postDescription.appendChild(description)
        div2.appendChild(postDescription)

        const continueReadig = document.createElement("p")
        const moreInfo = document.createTextNode("CONTINUE READING")
        continueReadig.classList.add("moreInfo-font")
        continueReadig.appendChild(moreInfo)
        div2.appendChild(continueReadig)

        li.appendChild(div2)
        ul.appendChild(li)
    })
}

function generateRecentPosts () {
    const ul = document.querySelector(".recent-posts")
    recentPostsFeedSummaryData.forEach((recentPost) => {
        const li = document.createElement("li")
        li.classList.add("recent-feed")
        li.classList.add("demarcation")
        const image = document.createElement("div")
        image.style.backgroundImage = `url("${recentPost.image}")`
        image.classList.add("recent-post-image")
        li.appendChild(image)

        const imageCaption = document.createElement("p")
        const caption = document.createTextNode(recentPost.text)
        imageCaption.style.textAlign = "left"
        imageCaption.classList.add("about-profile")
        imageCaption.appendChild(caption)
        li.appendChild(imageCaption)
        
        ul.appendChild(li)
    })
}

function generateSubscribeForm () {
    const div = document.querySelector("#popup")
    
    const image = document.createElement("img")
    image.src = "../../assets/subscribeImage.jpg"
    image.classList.add("subscription-form-image")
    div.appendChild(image)

    const textSection = document.createElement("div")
    const h1 = document.createElement("h1")
    const title = document.createTextNode("KEEP IN TOUCH")
    h1.appendChild(title)
    textSection.appendChild(h1)

    const p1 = document.createElement("p")
    const p1Text = document.createTextNode("Never miss a post by subscribing to our weekly newsletter and hearing about our special offers ahead of the crowd")
    p1.appendChild(p1Text)
    textSection.appendChild(p1)

    const p2 = document.createElement("p")
    const p2Text = document.createTextNode("Don't worry you can unsubscribe at any time :)")
    p2.appendChild(p2Text)
    textSection.appendChild(p2)

    const emailField1 = document.createElement("input")
    emailField1.type = 'email'
    emailField1.placeholder = 'hello@email.com'
    emailField1.classList.add("large-screen")
    textSection.appendChild(emailField1)
    const emailField2 = document.createElement("input")
    emailField2.type = 'email'
    emailField2.placeholder = 'email address'
    emailField2.classList.add("small-screen")
    textSection.appendChild(emailField2)

    textSection.classList.add("subscribe-form-text")

    div.appendChild(textSection)
    console.log(div)
}

function toggle () {
    var blur = document.querySelector('.blur')
    blur.classList.toggle('active')
    var popup = document.getElementById('popup')
    popup.classList.toggle('active')
}

window.addEventListener("load", generateMainFeed)
generateRecentPosts()
generateSubscribeForm()
console.log("hello")