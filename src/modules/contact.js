function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-div');

    const number = document.createElement('p');
    number.textContent = '789 456 123';

    const mail = document.createElement('p');
    mail.textContent = 'restaurant@4meal.com';

    const address = document.createElement('p');
    address.textContent = '1600 Pennsylvania Avenue NW, Washington, DC 20500';

    const mapImage = document.createElement('img');
    mapImage.src = 'images/mapimage.jpeg';
    mapImage.alt = 'mapimage';
    mapImage.classList.add('map-img');

    const chatBtn = document.createElement('button');
    chatBtn.textContent = '';
    // chatBtn.textContent = 'Start Live Chat';
    chatBtn.classList.add('chat-btn');


    contact.appendChild(number);
    contact.appendChild(mail);
    contact.appendChild(address);
    contact.appendChild(mapImage);
    contact.appendChild(chatBtn);

    return contact
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact