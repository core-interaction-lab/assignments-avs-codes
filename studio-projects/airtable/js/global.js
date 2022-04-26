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

    const bearOnePrice = document.getElementById('bear-1-price');
    const bearTwoPrice = document.getElementById('bear-2-price');

    const cheerleader = document.getElementById('cheerleader');

    const refreshBtn = document.getElementById('refresh');

    const message = document.getElementById('message');

    function renderGame () {
        refreshBtn.style.visibility = 'hidden';
        bearOneImgEl.style.mixBlendMode = 'normal';
        bearOneImgEl.style.opacity = '1';
        bearTwoImgEl.style.mixBlendMode = 'normal';
        bearTwoImgEl.style.opacity = '1';
        bearOneContainer.style.backgroundColor = 'rgb(255, 255, 255)';
        bearTwoContainer.style.backgroundColor = 'rgb(255, 255, 255)';

        bearOneContainer.style.cursor = 'pointer';
        bearTwoContainer.style.cursor = 'pointer';

        cheerleader.removeEventListener('click', function() {
            renderGame();
        });
        
        message.innerHTML = 'Now which bear has that $$$?'

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

        bearOnePrice.innerHTML = `$${randomBearOne.fields.price}`;
        bearTwoPrice.innerHTML = `$${randomBearTwo.fields.price}`;

        bearOnePrice.style.opacity = '0';
        bearTwoPrice.style.opacity = '0';


        bearOneContainer.addEventListener('click', function() {
            compare(randomBearOne, randomBearTwo, bearOneContainer, bearTwoContainer, bearOneImgEl, bearTwoImgEl);
        });
    
        bearTwoContainer.addEventListener('click', function() {
            compare(randomBearTwo, randomBearOne, bearTwoContainer, bearOneContainer, bearTwoImgEl, bearOneImgEl);
        });
    };

    const compare = (chosenBear, otherBear, chosenContainer, otherContainer, chosenImg, otherImg) => {
        var chosenNoComma = chosenBear.fields.price.replace(',', '');
        var otherNoComma = otherBear.fields.price.replace(',', '');
        var chosenInt = parseInt(chosenNoComma);
        var otherInt = parseInt(otherNoComma);
        console.log(chosenInt);
        console.log(otherInt);
        if (chosenInt > otherInt) {
            judgement(chosenContainer, otherContainer, chosenImg, otherImg);
            console.log('correct')
            message.innerHTML = 'You got that!';
        } else {
            judgement(otherContainer, chosenContainer, otherImg, chosenImg)
            console.log('incorrect');
            message.innerHTML = 'Dang! Maybe next time!';
        }
    };

    function judgement (correctContainer, incorrectContainer, correctImg, incorrectImg) {
        console.log(correctContainer, incorrectContainer, correctImg, incorrectImg);
        bearOneContainer.style.cursor = 'default';
        bearTwoContainer.style.cursor = 'default';
        bearOneDesc.style.visibility = 'visible';
        bearTwoDesc.style.visibility = 'visible';

        correctContainer.style.backgroundColor = 'rgba(61, 126, 80, 0.555)'
        incorrectContainer.style.backgroundColor = 'rgba(165, 52, 52, 0.555)'
        correctImg.style.mixBlendMode = 'multiply';
        correctImg.style.opacity = '0.25';
        incorrectImg.style.mixBlendMode = 'multiply';
        incorrectImg.style.opacity = '0.25';
        bearOnePrice.style.opacity = '1';
        bearTwoPrice.style.opacity = '1';
        console.log(correctContainer);
        refreshBtn.addEventListener('click', function() {
            renderGame();
        })
        refreshBtn.style.visibility = 'visible';
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