async function loadData(){
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await response.json();
    return data;
}
loadData().then(data => {
    displayData(data);
});

function displayData(countries){
    const mainDiv = document.getElementById('country-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
                <h3 class="country-name">${country.name}</h3>
                <p class="capital-name">${country.capital} </p>
                <button onclick="displayCountryDetail('${country.name}')">Show Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        mainDiv.appendChild(countryDiv);
    });


    // same function using map
    // countries.map(country => {
    //     console.log(country);
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = 'country';
    //     const countryInfo = `
    //             <h3>${country.name}</h3>
    //             <p>${country.capital} </p>
    //     `;
    //     countryDiv.innerHTML = countryInfo;
    //     mainDiv.appendChild(countryDiv);
    // })

        // Using create element
        // const countryName = document.createElement('div');
        // const h3 = document.createElement('h3');
        // h3.innerText = `Country : ${country.name}`;
        // const p = document.createElement('p');
        // p.innerText = `Capital : ${country.capital}`;
        // countryName.appendChild(h3);
        // countryName.appendChild(p);
        // mainDiv.appendChild(countryName);
        // Using create element
    
}
function displayCountryDetail(name){
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        renderCountryInfo(data[0]);
        // console.log(data[0].name);
    });
}

const renderCountryInfo= country => {
    // console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <h3>${country.region}</h3>
        <h3>${country.population}</h3>
        <h2>${country.callingCodes}</h2>
        <img src ="${country.flag}">
    `;
}



