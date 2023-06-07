async function getAnimalsList() {
    console.log('getAnimalsList');
    const response = await fetch('http://localhost:3000/api/animals');
    const data = await response.json();
  
    console.log(data);
     
    const animalsListContainer = document.getElementById('animal-list-container')
    
    data.animals.forEach(animals => {
        const newAnimaltr = document.createElement('tr')
        
        newAnimaltr.id = animals.id
        newAnimaltr.innerHTML = `
          <td>${animals.name}</td>
          <td>${animals.breed}</td>
          <td>${animals.age}</td>
          <td>${animals.weight}</td>
          <td>${animals.owner_name}</td>
          <td>${animals.is_vacinated}</td>
          <td><button type="button" class="btn btn-warning">Atualizar</button>
          <button type="button" class="btn btn-danger">Excluir</button></td> 
        `
        
        animalsListContainer.appendChild(newAnimaltr)
    })
}

getAnimalsList()


const createAnimalbutton = document.getElementById('create-animal-button')

createAnimalbutton.addEventListener('click', async (event) => {
event.preventDefault();

    const name = document.querySelector('input[name="name"]').value
    const breed = document.querySelector('input[name="breed"]').value
    const age = document.querySelector('input[name="age"]').value
    const weight = document.querySelector('input[name="weight"]').value
    const owner_name = document.querySelector('input[name="owner_name"]').value
    const is_vacinated = document.querySelector('input[name="is_vacinated"]').value

    await fetch('http://localhost:3000/api/animals', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            name,
            breed,
            age,
            weight,
            owner_name,
            is_vacinated,
        })
    })

    await getAnimalsList()
})