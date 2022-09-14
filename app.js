const acceptInput = () => {
    const inputField = document.getElementById('input-field');
    const input = inputField.value;
    loadData(input);
    inputField.value = '';
}


const loadData = name => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => displayData(data[0]))
}


const displayData = country => {
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = `
    <img width="150px" src="${country.flags.png}">
    <h3 class="my-3">${country.name.common}</h3>
    <h5> Capital : ${country.capital}</h5>
    <h5 class="my-3"> Continent : ${country.continents}</h5>
    <h5> Population : ${country.population}</h5>
    `
    // console.log(country.currencies.BDT.symbol)
}





