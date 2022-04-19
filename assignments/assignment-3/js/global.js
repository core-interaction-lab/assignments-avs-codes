const fetchFoods = async () => {
    const response = await fetch('https://api.airtable.com/v0/apputNuv8tUPwvsnM/Table%201?api_key=keyx3iNHEhOlUODAL').then(data => data.json())
      
    // Hi, it's Or:
    // const foodsRecords = response.records.filter(function(record) {
        // return a condition that determines whether the record should be filtered
        // out or not. Meaning, a condition that returns true or false
    // })

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
   
    descriptionEl.classList.add('p-recolor');

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
        
        var randSelector = Math.floor(Math.random()*4);
        const bodyBckgColors = ['rgb(142, 73, 64)', 'rgb(73, 116, 116)', 'rgb(90, 73, 116)', 'rgb(57, 69, 110)'];
        const pBckgColors = ['rgb(142, 73, 64)', 'rgb(73, 116, 116)', 'rgb(90, 73, 116)', 'rgb(57, 69, 110)']
        const body = document.getElementById('body');
        const recolorObjs = document.querySelectorAll('.p-recolor');
        
        body.style.backgroundColor = bodyBckgColors[randSelector];
        recolorObjs.forEach((obj) => {
            obj.style.backgroundColor = pBckgColors[randSelector];
        });
    };

    refreshButton.addEventListener('click', refresh);
    refreshButton.addEventListener('mouseover', evt => {
        refreshButton.style.backgroundColor = 'rgb(82, 150, 115)';
    });

    refreshButton.addEventListener('mouseout', evt => {
        refreshButton.style.backgroundColor = 'rgb(113, 199, 154)';
    });
    
};

fetchFoods();





// Hi, it's Or again

/* const sum = function(a, b) {
    return a + b;
}

sum(5, 6);
sum(123213, 1232);
*/