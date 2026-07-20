/*
Fetch API and HTTP Basics :
- Fetch API : GET, POST basics.
- Headers, status codes, JSON parsing.
- From submission via fetch.
- Error handling with response.OK and try-catch.
- Basics REST principles.
*/

// fetch("https://randomuser.me/api/")
// .then((rawdata) => {
//     return rawdata.json();
// })
// .then(data => {
//     console.log(data);
//     console.log(data.results[0]);
// })
// .catch((err) => {
//     console.log(err);
// })

// fetch("https://randomuser.me/api/?results=5")
// .then((rawdata) => rawdata.json())
// .then(data => { console.log(data);
//     console.log(data.results);
//     data.results.forEach(function(user) {
//         console.log(user)
//     })
// })
// .catch((err) => {
//     console.log(err);
// })

const container = document.getElementById('users-container');
const refreshBtn = document.getElementById('refresh-btn');

async function loadUsers() {
    try {
        container.innerHTML = '<p class="text-center col-span-full text-xl">Loading...</p>';

        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();

        container.innerHTML = '';

        data.results.forEach(user => {
            const card = document.createElement('div');
            card.className = 'bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col items-center p-6 hover:shadow-blue-900/50 transition transform hover:-translate-y-2';

            card.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}" class="w-32 h-32 rounded-full border-4 border-blue-600 mb-4 object-cover">
            <h2 class="text-xl font-bold">${user.name.title} ${user.name.first} ${user.name.last}</h2>
            <p class="text-gray-400 text-sm mt-1">${user.email}</p>
            <p class="text-gray-300 mt-3">
              <span class="font-medium">Location:</span><br>
              ${user.location.city}, ${user.location.country}
            </p>
            <p class="text-gray-400 text-sm mt-2">
              Age: ${user.dob.age}
            </p>
          `;

            container.appendChild(card);
        });
    } catch (err) {
        container.innerHTML = '<p class="text-center col-span-full text-red-400 text-xl">Failed to load users. Please try again.</p>';
        console.error(err);
    }
}

loadUsers();

refreshBtn.addEventListener('click', loadUsers);