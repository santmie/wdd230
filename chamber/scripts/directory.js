const url = "https://santmie.github.io/wdd230/chamber/data/members.json";
const membersList = document.querySelector('#members-list');

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

getMembers(); // Call the function to fetch and display the members' data

function displayMembers(members) {
    members.forEach((member) => {
        // Create elements to add to the div.members-list element
        let card = document.createElement('div');
        card.classList.add('member-card');

        let companyName = document.createElement('h2');
        companyName.textContent = member.name;

        let address = document.createElement('p');
        address.textContent = `Address: ${member.address}`;

        let phone = document.createElement('p');
        phone.textContent = `Phone: ${member.phone}`;

        let website = document.createElement('a');
        website.textContent = 'Website';
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');

        let logo = document.createElement('img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');

        let membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membership_level}`;

        // Append the elements to the card
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(logo);
        card.appendChild(membershipLevel);

        // Append the card to the membersList
        membersList.appendChild(card);
    });
}
