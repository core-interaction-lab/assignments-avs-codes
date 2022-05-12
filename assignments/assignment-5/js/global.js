const attachEventListeners = (input, output) => {
    input.addEventListener('keyup', function() {
        output.innerHTML = input.value;
    })
};

const noun1Input = document.getElementById('noun-1-input');
const noun1Output = document.getElementById('noun-1');

attachEventListeners(noun1Input, noun1Output);

const place1Input = document.getElementById('place-1-input');
const place1Output = document.getElementById('place-1');

attachEventListeners(place1Input, place1Output);

const food1Input = document.getElementById('food-1-input');
const food1Output = document.getElementById('food-1');

attachEventListeners(food1Input, food1Output);

const food2Input = document.getElementById('food-2-input');
const food2Output = document.getElementById('food-2');

attachEventListeners(food2Input, food2Output);

const verb1Input = document.getElementById('verb-1-input');
const verb1Output = document.getElementById('verb-1');

attachEventListeners(verb1Input, verb1Output);

const adverb1Input = document.getElementById('adverb-1-input');
const adverb1Output = document.getElementById('adverb-1');

attachEventListeners(adverb1Input, adverb1Output);

const body1Input = document.getElementById('body-1-input');
const body1Output = document.getElementById('body-1');

attachEventListeners(body1Input, body1Output);

const noun2Input = document.getElementById('noun-2-input');
const noun2Output = document.getElementById('noun-2');

attachEventListeners(noun2Input, noun2Output);

const color1Input = document.getElementById('color-1-input');
const color1Output = document.getElementById('color-1');

attachEventListeners(color1Input, color1Output);

const verb2Input = document.getElementById('verb-2-input');
const verb2Output = document.getElementById('verb-2');

attachEventListeners(verb2Input, verb2Output);

const noun3Input = document.getElementById('noun-3-input');
const noun3Output = document.getElementById('noun-3');

attachEventListeners(noun3Input, noun3Output);

const name1Input = document.getElementById('name-1-input');
const name1Output = document.getElementById('name-1');

attachEventListeners(name1Input, name1Output);

const noun4Input = document.getElementById('noun-4-input');
const noun4Output = document.getElementById('noun-4');

attachEventListeners(noun4Input, noun4Output);
