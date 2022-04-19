const slideShowContainer = document.getElementById('slideshow-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const fetchFoods = async () => {
    const response = await fetch('https://api.airtable.com/v0/appZqDXbSTRL2TC8z/Grid%20view?api_key=keyx3iNHEhOlUODAL').then(data => data.json())
    buildSlideShow(response.records);
    return response.records;
};

const buildSlideShow = (foods) => {
    console.log(foods);
    console.log(buildSlide(foods[0]));


   const firstMovie = buildSlide(foods[0]);
    slideShowContainer.append(firstMovie);

    let currentFood = 0;

    prevButton.addEventListener('click', () => {
        if (currentFood === 0) {
            currentFood = foods.length - 1;
        } else {
            currentFood = currentFood - 1;
        }

        const  foodRecord = foods[currentFood];
        swapSlide(foodRecord);
    });

    nextButton.addEventListener('click', () => {
        if (currentFood === foods.length -1) {
            currentFood = 0;
        } else {
            currentFood = currentFood + 1;
        }

        const  foodRecord = foods[currentFood];
        swapSlide(foodRecord);

    });

};

const swapSlide = (foodRecord) => {
    const slideEl = buildSlide(foodRecord);

    slideShowContainer.innerHTML = '';
    slideShowContainer.append(slideEl);
}

buildSlide(prevButton);
buildSlide(slideShowContainer);

const buildSlide = (food) => {
    const foodContainer = document.createElement('article');
    if (food.fields.image) {
        console.log(food.fields.image[0].url);
        const foodImg = document.createElement('img');
        foodImg.src = food.fields.image[0].url;
        foodContainer.append(foodImg);
    }
    if (food.fields.name) {
        console.log(food.fields.name);
        const nameEl = document.createElement('p');
        nameEl.innerHTML = food.fields.name;
        nameEl.classList.add('food-name');
        foodContainer.append(nameEl);
    }
    return foodContainer;
}

fetchFoods();