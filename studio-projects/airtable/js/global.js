const fetchFoods = async () => {
    const response = await fetch('https://api.airtable.com/v0/appZqDXbSTRL2TC8z/Grid%20view?api_key=keyx3iNHEhOlUODAL').then(data => data.json())
      
    // Hi, it's Or:
    // const foodsRecords = response.records.filter(function(record) {
        // return a condition that determines whether the record should be filtered;
        // out or not. Meaning, a condition that returns true or false
    // })


    const bearsRecords = response.records;
    const filteredRecords = bearsRecords.filter(bear => bear.fields.description, true);
    console.log(filteredRecords);

    const bearOneImgEl = document.getElementById('bear-1');
    const bearTwoImgEl = document.getElementById('bear-2');

    const bearOneContainer = document.getElementById('bear-1-container');
    const bearTwoContainer = document.getElementById('bear-2-container');

    const bearOneName = document.getElementById('bear-1-name');
    const bearTwoName = document.getElementById('bear-2-name');

    const bearOneDesc = document.getElementById('bear-1-info');
    const bearTwoDesc = document.getElementById('bear-2-info');

    const cheerleader = document.getElementById('cheerleader');

    function renderGame () {
        bearOneContainer.classList.remove('green-overlay');
        bearOneContainer.classList.remove('red-overlay');
        bearTwoContainer.classList.remove('green-overlay');
        bearTwoContainer.classList.remove('red-overlay');

        cheerleader.removeEventListener('click', function() {
            renderGame();
        });
        
        cheerleader.innerHTML = '';

        var randomBearOne = filteredRecords[Math.floor(Math.random()*filteredRecords.length)];
        var randomBearTwo = filteredRecords[Math.floor(Math.random()*filteredRecords.length)];
        console.log(randomBearOne);
        console.log(randomBearTwo);

        bearOneImgEl.src = randomBearOne.fields.image[0].url;
        bearTwoImgEl.src = randomBearTwo.fields.image[0].url;

        bearOneName.innerHTML = randomBearOne.fields.name;
        bearTwoName.innerHTML = randomBearTwo.fields.name;

        bearOneDesc.innerHTML = randomBearOne.fields.description;
        bearTwoDesc.innerHTML = randomBearTwo.fields.description;

        bearOneDesc.style.visibility = 'hidden';
        bearTwoDesc.style.visibility = 'hidden';

        bearOneContainer.addEventListener('click', function() {
            compare(randomBearOne, randomBearTwo, bearOneContainer, bearTwoContainer);
        });
    
        bearTwoContainer.addEventListener('click', function() {
            compare(randomBearTwo, randomBearOne, bearTwoContainer, bearOneContainer);
        });
    };

    const compare = (chosenBear, otherBear, chosenContainer, otherContainer) => {
        var chosenNoComma = chosenBear.fields.price.replace(',', '');
        var otherNoComma = otherBear.fields.price.replace(',', '');
        var chosenInt = parseInt(chosenNoComma);
        var otherInt = parseInt(otherNoComma);
        console.log(chosenInt);
        console.log(otherInt);
        if (chosenInt > otherInt) {
            judgement(chosenContainer, otherContainer);
            console.log('correct')
            cheerleader.innerHTML = 'You got that!';
        } else {
            judgement(otherContainer, chosenContainer)
            console.log('incorrect');
            cheerleader.innerHTML = 'You suck at life.';
        }
    };

    //reset = () => {
    //    var randomBearOne = filteredRecords[Math.floor(Math.random()*filteredRecords.length)];
    //    var randomBearTwo = filteredRecords[Math.floor(Math.random()*filteredRecords.length)];
     
    //}

    function judgement (correctContainer, incorrectContainer) {
        bearOneDesc.style.visibility = 'visible';
        bearTwoDesc.style.visibility = 'visible';

        correctContainer.classList.add('green-overlay');
        incorrectContainer.classList.add('red-overlay');
        console.log(correctContainer);
        cheerleader.addEventListener('click', function() {
            renderGame();
        })
    };



   renderGame();
};

fetchFoods();





// Hi, it's Or again

/* const sum = function(a, b) {
    return a + b;
}

sum(5, 6);
sum(123213, 1232);
*/