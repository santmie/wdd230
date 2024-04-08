const url = "https://santmie.github.io/wdd230/chamber/data/members.json";
const spotlight1 = document.getElementById('members-random1');
const spotlight2 = document.getElementById('members-random2');
const spotlight3 = document.getElementById('members-random3');

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayRandomMembers(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

getMembers(); 

function displayRandomMembers(members) {
    const goldMembers = members.filter(member => member.membership_level === 'Gold');
    const silverMembers = members.filter(member => member.membership_level === 'Silver');

    const randomGoldMember = goldMembers[Math.floor(Math.random() * goldMembers.length)];
    const randomSilverMember = silverMembers[Math.floor(Math.random() * silverMembers.length)];

    spotlight1.appendChild(createCard(randomGoldMember));
    spotlight2.appendChild(createCard(randomSilverMember));
    spotlight3.appendChild(createCard(randomGoldMember)); // Just for demonstration, you can modify this as needed
}

function createCard(member) {
    let card = document.createElement('div');
    card.classList.add('member-card');
    
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
