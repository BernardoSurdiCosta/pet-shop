async function getServiceTypes() {
    console.log('getServiceTypes')
    const response = await fetch('http://localhost:3000/api/servicetypes')
    const data = await response.json()

    const servicetypes = document.querySelectorAll('tr > td')

    servicetypes.forEach(td => {
        const tr = td.parentNode
        tr.remove()
    })

    const ServiceTypesListContainer = document.getElementById('ServiceTypes-list-container')

    data.forEach(servicetypes => {
        const newServiceTypesTr = document.createElement('tr')

        newServiceTypesTr.id = servicetypes.id
        newServiceTypesTr.innerHTML = `
          <td>${servicetypes.name}</td>
          <td>${servicetypes.price}</td>
          <td>${servicetypes.duration}</td>
        `
        ServiceTypesListContainer.appendChild(newServiceTypesTr)
    })
}

getServiceTypes()

const CreateServiceTypes = document.getElementById('create-ServiceTypes-button')

CreateServiceTypes.addEventListener('click', async (event) => {
    event.preventDefault()

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