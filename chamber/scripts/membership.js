document.addEventListener('DOMContentLoaded', function() {
const url = "https://santmie.github.io/wdd230/chamber/data/members.json";
const spotlight1 = document.querySelector('#members-gold');
const spotlight2 = document.querySelector('#members-silver');

const gridButton = document.getElementById('view-grid');

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


spotlight1.classList.add('grid-view');
spotlight2.classList.add('grid-view');

function displayMembers(members) {
    // Clear previous content of spotlights
    spotlight1.innerHTML = '';
    spotlight2.innerHTML = '';

    // Filter gold and silver members
    const goldMembers = members.filter(member => member.membership_level === 'Gold');
    const silverMembers = members.filter(member => member.membership_level === 'Silver');

    // Shuffle the gold and silver members arrays randomly
    shuffleArray(goldMembers);
    shuffleArray(silverMembers);

    // Get up to three random members for each spotlight
    const goldSpotlightMembers = goldMembers.slice(0, Math.min(2, goldMembers.length));
    const silverSpotlightMembers = silverMembers.slice(0, Math.min(2, silverMembers.length));

    // Append random gold members to spotlight 1
    goldSpotlightMembers.forEach(member => {
        spotlight1.appendChild(createCard(member));
    });

    // Append random silver members to spotlight 2
    silverSpotlightMembers.forEach(member => {
        spotlight2.appendChild(createCard(member));
    });
}

// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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

});
