function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact-div')

    const number = document.createElement('p');
    number.textContent = '789 456 123'

    const address = document.createElement('p');
    address.textContent = '1600 Pennsylvania Avenue NW, Washington, DC 20500'

    const mapImage = document.createElement('img');
    mapImage.src = 'images/mapimage.jpeg'
    mapImage.alt = 'mapimage'
    mapImage.classList.add('map-img')

    contact.appendChild(number);
    contact.appendChild(address);
    contact.appendChild(mapImage);

    return contact
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact