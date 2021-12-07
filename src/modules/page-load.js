function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const websiteTitle = document.createElement('h1');
  websiteTitle.classList.add('website-title')
  websiteTitle.textContent = 'Restaurant 4 meal';

  header.appendChild(websiteTitle);

  return header;
}

function createNav() {
  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.classList.add('nav-btn', 'home');
  menuBtn.classList.add('nav-btn', 'menu');
  contactBtn.classList.add('nav-btn', 'contact');

  homeBtn.textContent = 'Home';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contact';

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');

  const githubLink = document.createElement('div');
  githubLink.innerHTML = 'Made by: <a href= "https://github.com/MohamedMaaiz">Mohamed Maaiz</a>'

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab');
  githubIcon.classList.add('fa-github');

  githubLink.appendChild(githubIcon);
  footer.appendChild(githubLink);

  return footer;
}


function loadPage() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createFooter());
  content.appendChild(createMain());
}
  
export default loadPage;