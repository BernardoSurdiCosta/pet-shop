async function getServiceTypes() {
    console.log('getServiceTypesList');
    const response = await fetch('http://localhost:3000/api/servicetypes');
    const data = await response.json();
  
    console.log(data);

    const ServiceTypesListContainer = document.getElementById('ServiceTypes-list-container')

    data.serviceTypes.forEach(serviceTypes => {
        const newServiceTypesTr = document.createElement('tr')

        newServiceTypesTr.id = serviceTypes.id
        newServiceTypesTr.innerHTML = `
          <td>${serviceTypes.name}</td>
          <td>${serviceTypes.price}</td>
          <td>${serviceTypes.duration}</td>
          <td><button type="button" class="btn btn-warning">Atualizar</button>
          <button type="button" class="btn btn-danger">Excluir</button></td> 
        `
        ServiceTypesListContainer.appendChild(newServiceTypesTr)
    })
}

getServiceTypes()

const CreateServiceTypes = document.getElementById('create-ServiceTypes-button')

CreateServiceTypes.addEventListener('click', async (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name="nameServiceTypes"]').value
    const price = document.querySelector('input[name="priceServiceTypes"]').value
    const duration = document.querySelector('input[name="durationServiceTypes"]').value

    await fetch('http://localhost:3000/api/servicetypes', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            duration,
        })
    })

    await getServiceTypes()
})