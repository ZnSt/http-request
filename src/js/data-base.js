const refs = {
  formRef: document.querySelector('.search-form'),
  resultRef: document.querySelector('.result'),
  errorRef: document.querySelector('.error'),
};

refs.formRef.addEventListener('submit', findUser);

function findUser(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const userId = form.elements.userId.value.trim();
  if (!userId) {
    alert('Enter ID!');
    return;
  }
  fetchUserById(userId)
    .then(user => renderUser(user))
    .catch(error => handleError(error));
}

function handleError(error) {
  refs.errorRef.textContent = error.message;
}

function renderUser(user) {
  const markup = createMarkup(user);
  refs.resultRef.innerHTML = markup;
}
function fetchUserById(id) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  return fetch(`${BASE_URL}/users/${id}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Not found'));
  });
}

function createMarkup({ id, name, company }) {
  return `<table>
        <tbody>
            <tr>
                <th>User ID: &emsp;</th>
                <td>${id}</td>
            </tr>
            <tr>
                <th>User name: &emsp;</th>
                <td>${name}</td>
            </tr>
            <tr>
                <th>Company: &emsp;</th>
                <td>${company.name}</td>
            </tr>
        </tbody>
    </table>`;
}
