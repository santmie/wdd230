const baseURL = "https://santmie.github.io/wdd230/";
const linksURL = "https://santmie.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

function displayLinks(data) {
    const ul = document.getElementById('activity-list'); // Get the ul element by its ID
    data.weeks.forEach(week => {
        const li = document.createElement('li');
        li.textContent = `${week.week}: `;
        
        week.links.forEach((link, index) => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.title;
            a.target = "_blank";
            li.appendChild(a);
            
            // Add a separator if the current link is not the last one in the week's list
            if (index < week.links.length - 1) {
                const span = document.createElement('span');
                span.textContent = " | ";
                li.appendChild(span);
            }
        });
        
        ul.appendChild(li);
    });
}

// Call the getLinks function to fetch and display the links
getLinks();
