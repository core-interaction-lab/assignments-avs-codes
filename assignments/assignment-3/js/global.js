const fetchFoods = async () => {
    const response = await fetch('https://api.airtable.com/v0/apputNuv8tUPwvsnM/Table%201?api_key=keyx3iNHEhOlUODAL').then(data => data.json())
      
    const foodsRecords = response.records;
    console.log(response);
    console.log(foodsRecords);
    const foodContainer =  document.getElementById('food-container');

    var randomFood = foodsRecords[Math.floor(Math.random()*foodsRecords.length)];

    console.log(randomFood);
    console.log(randomFood.fields);
    console.log(randomFood.fields.name);
    const nameEl = document.getElementById('food-name');
    const originEl = document.getElementById('food-origin');
    const fillingEl = document.getElementById('food-filling');
    const wrappingEl = document.getElementById('food-wrapping');
    const flavorEl = document.getElementById('food-flavor');
    const descriptionEl = document.getElementById('food-description');

    nameEl.innerHTML = randomFood.fields.name;
    originEl.innerHTML = `Origin: ${randomFood.fields.origin}`;
    fillingEl.innerHTML = `Fillings: ${randomFood.fields.filling}`;
    wrappingEl.innerHTML = `Wrapping: ${randomFood.fields.wrapping}`;
    flavorEl.innerHTML = randomFood.fields.flavor;
    descriptionEl.innerHTML = randomFood.fields.description;
   
    const refreshButton = document.getElementById('refresh-button');
    function refresh() {
        var randomFood = foodsRecords[Math.floor(Math.random()*foodsRecords.length)];
        console.log(randomFood);
        nameEl.innerHTML = randomFood.fields.name;
        originEl.innerHTML = `Origin: ${randomFood.fields.origin}`;
        fillingEl.innerHTML = `Fillings: ${randomFood.fields.filling}`;
        wrappingEl.innerHTML = `Wrapping: ${randomFood.fields.wrapping}`;
        flavorEl.innerHTML = randomFood.fields.flavor;
        descriptionEl.innerHTML = randomFood.fields.description;
    }

    refreshButton.addEventListener('click', refresh);
    refreshButton.addEventListener('mouseover', evt => {
        refreshButton.style.backgroundColor = 'rgb(82, 150, 115)';
    });

    refreshButton.addEventListener('mouseout', evt => {
        refreshButton.style.backgroundColor = 'rgb(113, 199, 154)';
    });
    
};

fetchFoods();