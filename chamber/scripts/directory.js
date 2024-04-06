const url = "https://santmie.github.io/wdd230/chamber/data/members.json";
const membersList = document.querySelector('#members-list');

const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

getMembers(); 

let isGridView = true; // Initial view is grid
gridButton.classList.add('active');

gridButton.addEventListener('click', () => {
    isGridView = true;
    gridButton.classList.add('active');
    listButton.classList.remove('active');
    displayMembers(); // Update the view
});

listButton.addEventListener('click', () => {
    isGridView = false;
    listButton.classList.add('active');
    gridButton.classList.remove('active');
    displayMembers(); // Update the view
});


function displayMembers(members) {
    membersList.innerHTML = ''; // Clear previous content
    if (!members) {
        // If members array is not provided, try to get it from the previous API call
        const storedMembers = JSON.parse(localStorage.getItem('members'));
        if (storedMembers) {
            members = storedMembers;
        } else {
            // If no members are available, return
            return;
        }
    } else {
        // Store the members array in local storage for future use
        localStorage.setItem('members', JSON.stringify(members));
    }

    members.forEach((member) => {
        if (isGridView) {
            let card = createCard(member);
            membersList.appendChild(card);
        } else {
            let listItem = createListItem(member);
            membersList.appendChild(listItem);
        }
    });

    membersList.classList.toggle('grid-view', isGridView);
    membersList.classList.toggle('list-view', !isGridView);
}


function createCard(member) {
    let card = document.createElement('section');
    
    let companyName = document.createElement('h3');
    companyName.textContent = member.name;
    
    let address = document.createElement('p');
    address.textContent = `${member.address}`;
    
    let phone = document.createElement('p');
    phone.textContent = `${member.phone}`;
    
    let website = document.createElement('a');
    website.textContent = member.website;
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');
    
    let logo = document.createElement('img');
    logo.setAttribute('src', member.image);
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');
    
    let membershipLevel = document.createElement('p');
    membershipLevel.textContent = `Membership Level: ${member.membership_level}`;
    
    card.appendChild(logo);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membershipLevel);
    
    return card;
}

function createListItem(member) {
    let listItem = document.createElement('li');

    let companyName = document.createElement('span');
    companyName.textContent = member.name;

    let address = document.createElement('span');
    address.textContent = `${member.address}`;

    let phone = document.createElement('span');
    phone.textContent = `${member.phone}`;

    let website = document.createElement('a');
    website.textContent = member.website;
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');

    let membershipLevel = document.createElement('span');
    membershipLevel.textContent = `Membership Level: ${member.membership_level}`;

    listItem.appendChild(companyName);
    listItem.appendChild(address);
    listItem.appendChild(phone);
    listItem.appendChild(website);
    listItem.appendChild(membershipLevel);
    return listItem;
}


