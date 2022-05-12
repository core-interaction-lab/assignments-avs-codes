const startBtn = document.getElementById('start');
const header = document.getElementById('header');

const question = document.getElementById('question');
const memo = document.getElementById('memo');

const romanticBtn = document.getElementById('romantic');
const workBtn = document.getElementById('work');
const relationshipBtn = document.getElementById('relationship');
const selfBtn = document.getElementById('self');

const initQuestion = document.getElementById('initial-question');

const breathe = document.getElementById('breathe');
const breatheContainer = document.getElementById('breathe-container');
const breatheTimer = document.getElementById('breathe-timer');

const release = document.getElementById('release');
const releaseContainer = document.getElementById('release-container');
const affirmation = document.getElementById('affirmation');
const submit = document.getElementById('submit');

const restart = document.getElementById('restart');

window.addEventListener('load', function() {

    this.setInterval(function() {
        startBtn.classList.add('grey-raise');
    }, 1000);

});

function questionVisible() {
    romanticBtn.classList.add('grey-raise');
    workBtn.classList.add('grey-raise');
    relationshipBtn.classList.add('grey-raise');
    selfBtn.classList.add('grey-raise');
    question.style.display = 'flex';
    question.style.opacity = '1';
};

startBtn.addEventListener('click', function() {
    header.style.opacity = '0';
    startBtn.classList.remove('grey-raise');

    setTimeout(() => {
        header.style.visibility = 'hidden';
        questionVisible();
    }, 2000);
});

const recolorPage = (color) => {
    document.body.classList.add(`${color}-bkg`);
};

const decolorPage = () => {
    document.body.className = '';
    releaseContainer.className = '';
    release.classList.className = '';
    submit.classList.className = '';
}

const showMemo = (color) => {

    setTimeout(() => {
        memo.style.display = 'flex';
        memo.style.visibility = 'visible';
        memo.style.opacity= '1';
    }, 500);
    setTimeout(() => {
        releaseContainer.classList.add(`${color}-raise`);
        release.classList.add(`${color}-textarea`);
        submit.classList.add(`${color}-textarea`);
        submit.classList.add(`${color}-submit`);
        submit.style.opacity = '1';
        question.style.display = 'none';
        affirmation.style.opacity = '1';
        release.style.opacity = '1';
    }, 1000);
}   ;

const showBreathe = () => {
    releaseContainer.className = '';
    memo.style.opacity ='0';
    submit.style.opacity = '0';
    setTimeout(() => {
        breathe.classList.add('grey-raise');
        breatheTimer.classList.add('grey-raise');
    }, 2000);
    setTimeout(() => {
        memo.style.display = 'none';
        breatheContainer.style.visibility = 'visible';
        breathe.style.visibility = 'visible';
        decolorPage();
    }, 1000);
}

const removeRaise = () => {
    romanticBtn.classList.add('remove-raise');
    workBtn.classList.add('remove-raise');
    relationshipBtn.classList.add('remove-raise');
    selfBtn.classList.add('remove-raise');
};

const clearTextarea = () => {
    release.value = '';
};


romanticBtn.addEventListener('click', function() {
    const romanticAffirmations = [
        "Often times, many issues in a romantic relationship stem from communication. Make sure to hear you partner and be heard yourself.",
        "Romantic relationships work both ways. Ask yourself: 'Can I provide what I also desire?"
    ];
    var randomAffirmation = romanticAffirmations[Math.floor(Math.random()*romanticAffirmations.length)];
    affirmation.innerHTML = randomAffirmation;
    removeRaise();
    clearTextarea();
    question.style.opacity = '0';
    setTimeout(() => {
        recolorPage('red');
        showMemo('red');
    }, 1500);
});


workBtn.addEventListener('click', function() {
    const workAffirmations = [
        "Sometimes, it takes a negative experience with our work to learn what we truly want.",
        "It's easy to get lost in the stress of work. Take a moment to compare the skill of who you were to who you are now."
    ];
    var randomAffirmation = workAffirmations[Math.floor(Math.random()*workAffirmations.length)];
    affirmation.innerHTML = randomAffirmation;
    removeRaise();
    clearTextarea();
    question.style.opacity = '0';
    setTimeout(() => {
        recolorPage('green');
        showMemo('green');
    }, 1500);
});

relationshipBtn.addEventListener('click', function() {
    const relationshipAffirmations = [
        "It is in the nature of the ocean to ebb and flow. You and others may drift apart, but you will find the coast.",
        ""
    ];
    var randomAffirmation = relationshipAffirmations[Math.floor(Math.random()*relationshipAffirmations.length)];
    affirmation.innerHTML = randomAffirmation;
    removeRaise();
    clearTextarea();
    question.style.opacity = '0';
    setTimeout(() => {
        recolorPage('purple');
        showMemo('purple');
    }, 1500);
});

selfBtn.addEventListener('click', function() {
    const selfAffirmations = [
        "We all feel our own emotions, negative or positive. They are a part of who we are. What isn't healthy is holding onto them for too long.",
        "There is much to learn about the world and even more so about ourselves. Never give up an opportunity to learn. "
    ];
    var randomAffirmation = selfAffirmations[Math.floor(Math.random()*selfAffirmations.length)];
    affirmation.innerHTML = randomAffirmation;
    removeRaise();
    clearTextarea();
    question.style.opacity = '0';
    setTimeout(() => {
        recolorPage('blue');
        showMemo('blue');  
    }, 1500);
});

submit.addEventListener('click', function() {
    let textareaLength = release.value.length;
    console.log(`textareaLength=${textareaLength}`);
    let numOfCycles = Math.floor((textareaLength/20)+1);
    console.log(`numOfCycles=${numOfCycles}`);
    var i = 0;

    const breatheIn = () => {
        breatheTimer.style.transition = 'all 4s ease-in-out 0s';
        breatheTimer.innerHTML = 'in'
        breatheTimer.style.width = '100%';
        breatheTimer.style.height = '100%';
    };

    const breatheOut = () => {
        breatheTimer.innerHTML = 'out';
        breatheTimer.style.width = '20%';
        breatheTimer.style.height = '20%';
    }


    const lastBreatheOut = () => {
        breathe.className = '';
        breathe.style.transition = 'all 4s ease-in-out 0s';
        breatheTimer.style.transition = 'all 10s ease-in-out 0s';
        setTimeout(() => {
        breatheTimer.innerHTML = 'now release,';
        breathe.style.width = '150vw';
        breathe.style.height = '150vh';
            setTimeout(() => {
                breatheTimer.style.width = '100%';
                breatheTimer.style.height = '100%';
                breatheTimer.style.borderRadius = '0';
                setTimeout(() => {
                    breatheTimer.innerHTML = 'now release,</br><i> and let go</i>';
                }, 2000);
            }, 1000);
        }, 2000);
    }

    const breatheInitiate = () => {
        if (i < numOfCycles) {
            breatheTimer.innerHTML = 'now breathe';
            breatheTimer.style.width = '20%';
            breatheTimer.style.height = '20%';
            setTimeout(() => {
                breatheIn();
                console.log('in')
                setTimeout(() => {

                    breatheTimer.style.transition = 'all 8s ease-in-out 0s';
                    breatheTimer.innerHTML = 'hold';
                    console.log('hold')
                    setTimeout(() => {

                        breatheOut();
                        console.log('out')
                        setTimeout(() => {

                            i++;
                            breatheInitiate();
                            console.log(`i=${i}`);

                        }, 8000);

                    }, 7000);

                }, 4000);

            }, 1000);

        } else if (i = numOfCycles) {
            setTimeout(() => {
                breatheIn();
                console.log('last in')
                setTimeout(() => {

                    breatheTimer.style.transition = 'all 8s ease-in-out 0s';
                    breatheTimer.innerHTML = 'hold';
                    console.log('last hold')
                    setTimeout(() => {
                        lastBreatheOut();
                        console.log('last out');
                    }, 8000);

                }, 7000);

            }, 2000);
        } else {
            //terminate();
        }; 
    };
    
        showBreathe();
        setTimeout(() => {
            breatheInitiate();
        }, 2000);
});

