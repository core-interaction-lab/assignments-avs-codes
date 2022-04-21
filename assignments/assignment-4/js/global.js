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

        var originalText = storiesArray[story].data.selftext;


    
        storyText.innerHTML = originalText;
    
        storyTitle.innerHTML = storiesArray[story].data.title;
    };

    story1.addEventListener('click', function() {
        buildStory(0);
        revealModal();
    });

    story2.addEventListener('click', function() {
        buildStory(1);
        revealModal();
    });
    
    story3.addEventListener('click', function() {
        buildStory(2);
        revealModal();
    });

    story4.addEventListener('click', function() {
        buildStory(3);
        revealModal();
    });

    story5.addEventListener('click', function() {
        buildStory(4);
        revealModal();
    });

    story6.addEventListener('click', function() {
        buildStory(5);
        revealModal();
    });

    story7.addEventListener('click', function() {
        buildStory(6);
        revealModal();
    });

    story8.addEventListener('click', function() {
        buildStory(7);
        revealModal();
    });

    story9.addEventListener('click', function() {
        buildStory(8);
        revealModal();
    });

    story10.addEventListener('click', function() {
        buildStory(9);
        revealModal();
    });
    
};

window.onclick = function(event) {
    if (event.target == storyModal) {
      storyModal.style.display = "none";
    }
  };

const revealModal = () => {
    storyModal.style.display = "block";
}

fetchStories();

