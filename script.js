
function fetchData() {
    fetch('https://kitsu.io/api/edge/anime')
    .then(response => {  
        if(!response.ok) {
            throw Error('ERROR')
        }
        return response.json()   
    })

    .then(data => {
        // console.log(data);

        const html = data.data.map(data => {
            return  `
            <div class="card">
                <img src="${data.attributes.posterImage.small}" alt="${data.attributes.canonicalTitle}">

                <div class="info">
                    <h4> ${data.attributes.canonicalTitle}</h4>
                    <h5> Rate: ${data.attributes.averageRating}</h5>
                    <p class="description">Description:<br> ${data.attributes.description}</p>
                    <small>Episodes: ${data.attributes.episodeCount}</small>
                </div>
            </div>
            `
        }).join('')

        document.querySelector('#app').insertAdjacentHTML('afterbegin', html)  
    })
    .catch(error => {
        // console.log(error);
    })
}
fetchData()








