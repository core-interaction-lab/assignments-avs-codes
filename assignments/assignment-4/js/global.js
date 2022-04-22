const story1 = document.getElementById('story-1');
const story2 = document.getElementById('story-2');
const story3 = document.getElementById('story-3');
const story4 = document.getElementById('story-4');
const story5 = document.getElementById('story-5');
const story6 = document.getElementById('story-6');
const story7 = document.getElementById('story-7');
const story8 = document.getElementById('story-8');
const story9 = document.getElementById('story-9');
const story10 = document.getElementById('story-10');

const storyModal = document.getElementById('story-modal');

const modalContent = document.getElementById('modal-content');

const storyTitle = document.getElementById('story-title');

const storyText = document.getElementById('story-text');

let storiesArray = [];

const fetchStories = async () => {
    const response = await fetch('https://interactionlab.space/data/assignment-4-3.json').then(data => data.json());
    storiesArray = response.data.children;
    

    const buildStory = (story) => {
        storyTitle.innerHTML = '';
        storyText.innerHTML ='';

        var originalText = storiesArray[story].data.selftext_html;
    
        storyText.innerHTML = htmlDecode(originalText);
    
        storyTitle.innerHTML = storiesArray[story].data.title;
    };

    story1.addEventListener('click', function() {

        buildStory(0);
        revealModal();
        resetModalScroll();
    });

    story2.addEventListener('click', function() {
        buildStory(1);
        revealModal();
        resetModalScroll();
    });
    
    story3.addEventListener('click', function() {
        buildStory(2);
        revealModal();
        resetModalScroll();
    });

    story4.addEventListener('click', function() {
        buildStory(3);
        revealModal();
        resetModalScroll();
    });

    story5.addEventListener('click', function() {
        buildStory(4);
        revealModal();
        resetModalScroll();
    });

    story6.addEventListener('click', function() {
        buildStory(5);
        revealModal();
        resetModalScroll();
    });

    story7.addEventListener('click', function() {
        buildStory(6);
        revealModal();
        resetModalScroll();
    });

    story8.addEventListener('click', function() {
        buildStory(7);
        revealModal();
        resetModalScroll();
    });

    story9.addEventListener('click', function() {
        buildStory(8);
        revealModal();
        resetModalScroll();
    });

    story10.addEventListener('click', function() {
        buildStory(9);
        revealModal();
        resetModalScroll();
    });
    
};

window.onclick = function(event) {
    if (event.target == storyModal) {
      storyModal.style.visibility = "hidden";
    }
  };

const revealModal = () => {
    storyModal.style.visibility = "visible";
}

const resetModalScroll = () => {
    storyModal.scrollTo(0,0);
}

const htmlDecode = (text) => {
    const e = document.createElement('div');
    e.innerHTML = text;
    return e.innerText;
}

fetchStories();

