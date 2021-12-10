function information() {
    const about = document.createElement('div');
    about.classList.add('about-div');

    const h3 = document.createElement('h3');
    // h3.textContent = 'Best Restaurant 4 your daily meals'
    h3.innerHTML  = '<p>Best Restaurant</p><p>4 your daily meals</p>'
    about.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = "A restuarant made for you to easily choose your perfact choice of food, it saves time and you don't need to spend time thinking for the perfact choice, it's all perfact with our limited choices";
    about.appendChild(p);

    const h2 = document.createElement('h2');
    h2.innerHTML = '<p>Order Online,</p><p>we take it 4 you</p>';
    about.appendChild(h2);

    return about;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';

    main.appendChild(information());
}

export default loadHome;