const refs = {
  getBtn: document.querySelector('button'),
  userTable: document.querySelector('.users-table'),
};
const tableHead = `<thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>`;

function fetchUsers() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  fetch(`${BASE_URL}/users`)
    .then(response => {
      return response.json();
    })
    .then(users => {
      const markup = users
        .map(({ name, email, address }) => {
          return ` <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${address.city}</td>
          </tr>`;
        })
        .join('');
      refs.userTable.innerHTML = tableHead + markup;
    });
}

refs.getBtn.addEventListener('click', fetchUsers);
