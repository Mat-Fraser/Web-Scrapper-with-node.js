const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then(data => {
        data.forEach(article => {
            const articleItem = `<h2>${article.title}</h2><h4>${article.url}</h4>`
            feedDisplay.insertAdjacentHTML("beforeend", articleItem)
        })
    })
    .catch(err => console.log(err))