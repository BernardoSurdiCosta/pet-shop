async function getServiceList() {
    const response = await fetch('http://localhost:3000/api/services')
    const data = await response.json()

    const services = document.querySelectorAll('tr > td')

    services.forEach(td => {
        const tr = td.parentNode
        tr.remove()
    })

    const serviceListContainer = document.getElementById('service-list-container')

    data.forEach(service => {
    const newServiceTr = document.createElement('tr')

    newServiceTr.id = service.id
    newServiceTr.innerHTML = `
    <td>${service.service_type}</td>
    <td>${service.animal}</td>
    <td>${service.scheduled_date}</td>
    <td><button type="button" class="btn btn-warning">Atualizar</button>
    <button type="button" class="btn btn-danger">Excluir</button></td> 
    `
    serviceListContainer.appendChild(newServiceTr)
    })
}

getServiceList()

const createServiceButton = document.getElementById('create-service-button')
createServiceButton.addEventListener('click', async (event) => {
    event.preventDefault()

    const service_type = document.querySelector('input[name="service_type"]').value
    const animal = document.querySelector('input[name="animal"]').value
    const scheduled_date = document.querySelector('input[name="scheduled_date"]').value

    await fetch('http://localhost:3000/api/services', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            service_type,
            animal,
            scheduled_date
        })
    })
    await getServiceList()
})