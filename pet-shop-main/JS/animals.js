async function getAnimalsList() {
    console.log('getAnimalsList')
    const response = await fetch('http://localhost:3000/api/animals')
    const data = await response.json()
    
    const animals = document.querySelectorAll('tr > td')
    
    animals.forEach(td => {
      const tr = td.parentNode
      tr.remove()
    })
    
    const animalsListContainer = document.getElementById('animal-list-container')
    
    data.forEach(animal => {
        const newAnimaltr = document.createElement('tr')
        
        newAnimaltr.id = animal.id
        newAnimaltr.innerHTML = `
          <td>${animal.name}</td>
          <td>${animal.breed}</td>
          <td>${animal.age}</td>
          <td>${animal.weigth}</td>
          <td>${animal.owner_name}</td>
          <td>${animal.is_vacinated}</td>
        `
        
        animalsListContainer.appendChild(newAnimaltr)
    })
}

getAnimalsList()


const createAnimalbutton = document.getElementById('create-animal-button')

createAnimalbutton.addEventListener('click', async (event) => {
event.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const breed = document.querySelector('input[name="breed"]').value
    const age = document.querySelector('input[name="age"]').value
    const weigth = document.querySelector('input[name="weigth"]').value
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
            weigth,
            owner_name,
            is_vacinated,
        })
    })

    await getAnimalsList()
})