const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


  let navBar = document.querySelector('nav')
navBar.children[0].textContent  = 'Services'
navBar.children[1].textContent  = 'Product'
navBar.children[2].textContent  = 'Vision'
navBar.children[3].textContent  = 'Features'
navBar.children[4].textContent  = 'About'
navBar.children[5].textContent  = 'Contact'


let h1 = document.querySelector('h1')
h1.innerHTML = "DOM Is Awesome"

 let button = document.querySelector('button')
button.innerHTML = "Get Started"

 let firstPic = document.getElementById("cta-img");
firstPic.setAttribute('src', siteContent["cta"]["img-src"])

 let secondImg = document.getElementById("middle-img");
secondImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let textContent = document.querySelectorAll('.text-content')
 let text1 = textContent[0]

text1.children[0].textContent = "Features"
text1.children[1].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let text2 = textContent[1]
text2.children[0].textContent = "About"
text2.children[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
 
  let text3 = textContent[2]
text3.children[0].textContent = "Services"
text3.children[1].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
 
const text4 = textContent[3]
text4.children[0].textContent= "Product"
text4.children[1].textContent= "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
 
  let text5 = textContent[4]
text5.children[0].textContent= "Vision"
text5.children[1].textContent= "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contactUs = document.querySelector('.contact')
contactUs.children[0].textContent = "Contact"
contactUs.children[1].textContent = "123 Way 456 Street Somewhere, USA"
contactUs.children[2].textContent = "1 (888) 888-8888"
contactUs.children[3].textContent = "sales@greatidea.io"
 
  let footer = document.querySelector('footer')
footer.firstChild.textContent = "Copyright Great Idea! 2018"
