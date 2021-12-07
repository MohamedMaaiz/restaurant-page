function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-div')

    menu.appendChild(createMenuItem('Waffle', 'Strawberry, Waffle', '20$'));
    menu.appendChild(createMenuItem('Shrimp', 'Shrimp, Soup, Vegetables ', '20$'));
    menu.appendChild(createMenuItem('Fish', 'Fish, Potato, Lemon', '20$'));
    menu.appendChild(createMenuItem('Burger', 'Burger, Fries, Sausage', '20$'));

    const credits = document.createElement('div');
    credits.classList.add('credits');
    credits.innerHTML = "<a href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a>";
    menu.appendChild(credits);

    return menu;
}

function createMenuItem(name, description, price) {
    const card = document.createElement('div');
    const cName = document.createElement('h3');
    const cDescription = document.createElement('p');
    const cPrice = document.createElement('span');
    const cImage = document.createElement('img');

    card.classList.add('menu-card')

    cName.textContent = name;
    cDescription.textContent = description;
    cPrice.textContent = price;
    cImage.src = `images/${name.toLowerCase()}.png`;
    cImage.alt = `${name}`;

    card.appendChild(cName);
    card.appendChild(cDescription);
    card.appendChild(cPrice);
    card.appendChild(cImage);

    return card
}


function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu
