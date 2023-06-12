async function getServiceTypes() {
    console.log('getServiceTypesList');
    const response = await fetch('http://localhost:3000/api/servicetypes');
    const data = await response.json();
  
    console.log(data);
    const servicetypes = document.querySelectorAll('tr > td')
    servicetypes.forEach(td => {
      const tr = td.parentNode
      tr.remove()
  })

    const ServiceTypesListContainer = document.getElementById('ServiceTypes-list-container')

    data.serviceTypes.forEach(serviceTypes => {
        const newServiceTypesTr = document.createElement('tr')

        newServiceTypesTr.id = `servicetypes-id-${serviceTypes.id}`
        newServiceTypesTr.innerHTML = `
          <td>${serviceTypes.name}</td>
          <td>${serviceTypes.price}</td>
          <td>${serviceTypes.duration}</td>
          <td><button type="button" class="btn btn-warning">Atualizar</button>
          <button type="button" class="btn btn-danger delete-button" onclick="deleteServiceTypes(${serviceTypes.id})">Excluir</button></td> 
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

async function deleteServiceTypes(serviceTypesId){
    const deleteResult = await fetch(`http://localhost:3000/api/servicetypes/${serviceTypesId}`, {
        method: 'DELETE'
    })

    const deleteResultJson = await deleteResult.json()

    if(deleteResultJson.deleteServicetypesCount < 1){
        console.error("Nenhum serviço foi deletado")
        return
    } 
    
    const serviceToBeDeleted = document.getElementById(`servicetypes-id-${serviceTypesId}`)
    serviceToBeDeleted.remove()

    return deleteResultJson
}