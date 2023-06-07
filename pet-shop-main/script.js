async function getUserList() {
  console.log('getUserList');
  const response = await fetch('http://localhost:3000/api/user');
  const data = await response.json();

  console.log(data);

  const userListContainer = document.getElementById('user-list-container');

  data.user.forEach(user => {
    const newUserTr = document.createElement('tr');

    newUserTr.innerHTML = `
      <td>${user.name}</td>
      <td>${user.date_nas}</td>
      <td>${user.email}</td>
      <td>${user.cpf}</td>
      <td><button type="button" class="btn btn-warning">Atualizar</button>
      <button type="button" class="btn btn-danger">Excluir</button></td>  
    `;

    userListContainer.appendChild(newUserTr);
  });
}

getUserList();

const createUserButton = document.getElementById('create-user-button');

createUserButton.addEventListener('click', async (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const date_nas = document.querySelector('input[name="date_nas"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const cpf = document.querySelector('input[name="cpf"]').value;

  await fetch('http://localhost:3000/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      date_nas,
      email,
      cpf,
    }),
  });

  await getUserList();
});
