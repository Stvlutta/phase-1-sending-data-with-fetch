// src/submitData.js
export function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })
  .then(response => response.json())
  .then(data => {
    const newId = data.id;
    const idElement = document.createElement('p');
    idElement.textContent = `New ID: ${newId}`;
    document.body.appendChild(idElement);
  })
  .catch(error => {
    const errorMessage = error.message;
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorElement);
  });
}