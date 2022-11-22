const div = document.querySelector('.div');

const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(val => {
        val.forEach(element => {
            div.innerHTML += `id: ${element.id}, name: ${element.name}<br>`;
        });
    });

// async function fetchUsers() {
//     const users = await fetch('https://jsonplaceholder.typicode.com/users');
//     const val = await users.json();
//     val.forEach(element => {
//         div.innerHTML += `id: ${element.id}, name: ${element.name}<br>`;
//     })
// }

// fetchUsers();