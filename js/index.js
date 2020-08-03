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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let codeSnippet = document.getElementById('cta-img');
//codeSnippet.src = 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
codeSnippet.src = siteContent.cta['img-src'];
let middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent["main-content"]["middle-img-src"];
let nav = document.querySelector('nav');

//I really want to get these child nodes appended programmatically, but because the data is JSON, it's super hard to iterate through, or grab specific elements programmatically. I've tried like 3 different ways, probably going to end up settling with a closure.
//I can see a better way to do this now, but this is surprisingly clean. Plus it's kinda neat.o

const nextItemClosure = function(item) {
  let keys = Object.keys(item);
  keys.reverse();
  return () => item[keys.pop()];
}
const nextNav= function() {
  let keys = Object.keys(siteContent.nav)
  keys.reverse();
  return () => siteContent.nav[keys.pop()];
}();
for(node of nav.children) {
  node.textContent = nextNav();
  node.style.color = 'green';
}
const first = document.createElement('a');
first.textContent = 'asdf';
const second = document.createElement('a');
second.textContent = 'jkl;';
nav.prepend(first);
nav.appendChild(second);
for(node of nav.children) {
  node.style.color = 'green';
}


let cta = document.querySelector('.cta');
cta.querySelector('h1').textContent = siteContent.cta.h1;
cta.querySelector('button').textContent = siteContent.cta.button;
//I'm wayyy to lazy at this point to figure out how to iterate over nested crap easily
//especially when this is so ambigiously labeled I have to look at the original.html just to figure out where it's supposed to go. Just gonna get this done 'fast' rather than well
let topContent = document.querySelector('.top-content');
topContent.querySelectorAll('.text-content h4')[0].textContent = siteContent['main-content']['features-h4'];
topContent.querySelectorAll('.text-content p')[0].textContent = siteContent['main-content']['features-content'];
topContent.querySelectorAll('.text-content h4')[1].textContent = siteContent['main-content']['about-h4'];
topContent.querySelectorAll('.text-content p')[1].textContent = siteContent['main-content']['about-content'];

let bottomContent = document.querySelector('.bottom-content');
bottomContent.querySelectorAll('.text-content h4')[0].textContent = siteContent['main-content']['services-h4'];
bottomContent.querySelectorAll('.text-content p')[0].textContent = siteContent['main-content']['services-content'];
bottomContent.querySelectorAll('.text-content h4')[1].textContent = siteContent['main-content']['product-h4'];
bottomContent.querySelectorAll('.text-content p')[1].textContent = siteContent['main-content']['product-content'];
bottomContent.querySelectorAll('.text-content h4')[2].textContent = siteContent['main-content']['vision-h4'];
bottomContent.querySelectorAll('.text-content p')[2].textContent = siteContent['main-content']['vision-content'];




let contact = document.querySelector('.contact');
const nextContact = nextItemClosure(siteContent.contact);
for(node of contact.children)
  node.textContent = nextContact();
let footer = document.querySelector('footer');
footer.innerHTML = `<p> ${siteContent.footer.copyright}</p>`;