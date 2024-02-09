const Choices = document.querySelectorAll(`.Choices`);
const Section = document.querySelector('section');
const Subtitles = document.querySelector('p');

const classIntro = document.querySelector('.intro');
const h1Intro = classIntro.querySelector('h1');
const pIntro = classIntro.querySelector('h4');
const h5intro = classIntro.querySelector('h5');

let currentId = 0
let canChoose = false
let introFinished = false
let introDone = false

const sleep = async ms => new Promise(res => setTimeout(res, ms))

async function animateText(txt) {
    if (!Subtitles.classList.contains("show")) Subtitles.classList.add("show");
    Subtitles.textContent = txt;
    
    await sleep(2500);
}

const changeBackground = async (url, time) => {
    await sleep(time);
    Section.style.backgroundImage = `url(${url})`;
};

const restartButton = () => {
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Game';
    restartButton.classList.add('restartButton');
    restartButton.onclick = () => {
        window.location.reload();
    };
    Section.appendChild(restartButton);
}

const storyBuild = [{
        id: 0,
        
        timefunc: async () => {
            await changeBackground('../Illustrasjoner/Intro/Artboard1.png', 2500);
            
            document.querySelector(`.blackbars`)
                .style.height = '100vh';
            document.querySelector(`.blackbars`)
                .style.top = '0%';
            
            await animateText("Before illness cast its shadow, your mother stood as an unblemished rose in the garden of life.");
            await changeBackground('../Illustrasjoner/Intro/Artboard2.png', 5000);
            await animateText("When illness struck, your family found themselves in a financial drought.");
            await changeBackground('../Illustrasjoner/Intro/Artboard3.png', 5000);
            await animateText("At 16, you took a leap into the workforce, igniting the flame of independence. This marked the beginning of a new chapter.");
            await changeBackground('../Illustrasjoner/Intro/Artboard3.png', 3500);
        },
        
        valg: [{
            id: 1
            , tekst: "Start the game."
            , nextId: 1
        }, {
            id: 2
            , tekst: ""
            , nextId: 1
        }]
    },
    // -- \\
    {
        id: 1,
        
        timefunc: async () => {
            await changeBackground('../Illustrasjoner/Intro/Fabric.png', 4000);
            await animateText("You entered the workforce, where working conditions mirrored the harsh shadows of your economic struggle.");
            await changeBackground('../Illustrasjoner/Intro/Fabric2.png', 5000);
            await animateText("You meet a worker and get a choice to engage in a resistance.");
        },
        
        valg: [{
            id: 1
            , tekst: "You accept."
            , nextId: 2
        }, {
            id: 2
            , tekst: "You decline."
            , nextId: 1.5
        }]
    },
    // -- \\
    {
        id: 1.5,
        
        timefunc: async () => {
            await changeBackground('../Illustrasjoner/Intro/Bar.png', 4500);
            await animateText("You go home tired and later go out to the workers bar.");
            await changeBackground('../Illustrasjoner/Intro/ManPub.png', 4500);
            await animateText("A few workes come up to you asking to join the resistance.");
        },
        
        valg: [{
            id: 1
            , tekst: "You accept the invitation."
            , nextId: 2
        }, {
            id: 2
            , tekst: "You decline, but you agree to participate in the demonstrations."
            , nextId: 3
        }]
    },
    // -- \\
    {
        id: 2,
        
        timefunc: async () => {
            await changeBackground('../Illustrasjoner/Intro/Bar.png', 4500);
            await animateText("You get a letter with a time and location of a pub which you go to.");
            await changeBackground('../Illustrasjoner/Intro/ManPub.png', 4500);
            await animateText("They ask if you want to join in on a demonstration later.");
        },
        
        valg: [{
            id: 1
            , tekst: "You accept the invitation."
            , nextId: 3
        }, {
            id: 2
            , tekst: ""
            , nextId: 3
        }]
    },
    // -- \\
    {
        id: 3,
        
        timefunc: async () => {
            await changeBackground('../Illustrasjoner/Intro/Demonstration.png', 4500);
            await animateText("You attend the peaceful demonstration and the police arrives.");
            await changeBackground('../Illustrasjoner/Intro/Demonstration.png', 4500);
            await animateText("You have the choice to flee or keep going");
        },
        
        valg: [{
            id: 1
            , tekst: "You flee."
            , nextId: 4
        }, {
            id: 2
            , tekst: "You keep going."
            , nextId: 4
        }]
    },
    // -- \\
    {
        id: 4,
        
        timefunc: async () => {
            await changeBackground('../Illustrasjoner/Intro/HiddenTunnel.png', 4500);
            await animateText("You later get shown inside of a hidden tunnel, where you meet other workers.");
            await changeBackground('../Illustrasjoner/Intro/HiddenTunnel.png', 4500);
            await animateText("A mysterious man ask you to gather information.");
        },
        
        valg: [{
            id: 1
            , tekst: "Break into your bosses office and gather information."
            , nextId: 5
        }, {
            id: 2
            , tekst: "Break into the companies office and gather information."
            , nextId: 5.5
        }]
    },
    // -- \\
    {
        id: 5,
        
        timefunc: async () => {
            await changeBackground('../Illustrasjoner/Intro/Innbrudd.png', 4500);
            await animateText("You sucesfully gather information and evidence against your boss");
        },
        
        valg: [{
            id: 1
            , tekst: "Contact news services and leak the information."
            , nextId: 6
        }, {
            id: 2
            , tekst: "Organize a riot to the companies building."
            , nextId: 6.5
        }]
    },
    // -- \\
    {
        id: 5.5,
        
        timefunc: async () => {
            await changeBackground('../Illustrasjoner/Intro/Innbrudd.png', 4500);
            await animateText("You gathered solid evidence and managed to escape.");
        },
        
        valg: [{
            id: 1
            , tekst: "Contact news services and leak the information."
            , nextId: 6
        }, {
            id: 2
            , tekst: "Organize a riot to the companies building."
            , nextId: 6.5
        }]
    },
    // -- \\
    {
        id: 6,
        
        timefunc: async () => {



            await changeBackground('../Illustrasjoner/Intro/ResistanceFailed.png', 7500);

            document.querySelector(`.blackbars`)
            .style.height = '155vh';
            document.querySelector(`.blackbars`)
            .style.top = '-20%';

            await animateText("In a twist of fate, your choices led to betrayal, and the resistance crumbled.");
            await changeBackground('../Illustrasjoner/Intro/ResistanceFailed.png', 7500);
            await animateText("Facts: Rates of child poverty in the UK have increased for all types of working family. Lone parent families working part time and households with only one working parent have seen the sharpest increases in poverty have the last three years.");

            restartButton();

        },
        
        valg: [{
            id: 1
            , tekst: ""
            , nextId: 10
        }, {
            id: 2
            , tekst: ""
            , nextId: 10
        }]
    },
    // -- \\
    {
        id: 6.5,
        
        timefunc: async () => {

            await changeBackground('../Illustrasjoner/Intro/Succsesful.png', 7500);
            
          
            document.querySelector(`.blackbars`)
            .style.height = '155vh';
            document.querySelector(`.blackbars`)
            .style.top = '-20%';
            
            
            await animateText("Your choices inspired others. Demonstrations sparked improvements. Working conditions got better, poverty declined.");
            await changeBackground('../Illustrasjoner/Intro/Succsesful.png', 7500);
            await animateText("Facts: Rates of child poverty in the UK have increased for all types of working family. Lone parent families working part time and households with only one working parent have seen the sharpest increases in poverty have the last three years.");
        },
        
        valg: [{
            id: 1
            , tekst: ""
            , nextId: 10
        }, {
            id: 2
            , tekst: ""
            , nextId: 10
        }]
    }
]


const showChoice = () => {
    const currentStory = storyBuild.find(story => story.id === currentId);
    const valg1 = currentStory.valg.find(valg => valg.id === 1);
    const valg2 = currentStory.valg.find(valg => valg.id === 2);
    
    Choices.forEach(choice => {
        
        console.log("Choice Has Been Showed")
        
        choice.classList.add("show");
        choice.style.display = 'flex';
        const option1 = choice.querySelector('[id="1"]');
        const option2 = choice.querySelector('[id="2"]');
        if (option1) {
            option1.textContent = valg1.tekst;
        }
        if (option2) {
            option2.textContent = valg2.tekst;
        }
    });
}


const nextChapter = async () => {
    const currentStory = storyBuild.find(story => story.id === currentId);
    
    if (currentStory) {
        await currentStory.timefunc();
        console.log("Current Story Func Finished")
        if (currentId !== 6.5 && currentId !== 6) {
            await sleep(1000);
            console.log("Subtitles Removed")
            Subtitles.classList.remove(`show`);
            canChoose = true;
            showChoice();
        }
    }
}

Choices.forEach((choiceList) => {
    choiceList.addEventListener('click', async (event) => {
        event.preventDefault();
        if (!canChoose || !event.target.matches('[id="1"], [id="2"]')) return;
        
        const choiceId = parseInt(event.target.id);
        const currentStory = storyBuild.find(story => story.id === currentId);
        const nextChoice = currentStory.valg.find(val => val.id === choiceId);
        
        if (nextChoice) {
            console.log("NextChoice Has Been Selected")
            currentId = nextChoice.nextId;
            canChoose = false;
            nextChapter();
            Choices.forEach(choice => choice.classList.remove("show"));
            await sleep(5000);
            Choices.forEach(choice => choice.style.display = 'none');
        }
    })
});


const showH1 = () => {
    h1Intro.classList.add('show');
};
const showP = () => {
    pIntro.classList.add('show');
};
const showH5 = () => {
    h5intro.classList.add('show');
};
const hideIntro = () => {
    classIntro.classList.add('hidden');
};
const removeIntro = () => {
    classIntro.remove();
};

const Intro = async () => {
    await sleep(500)
        .then(showH1);
    await sleep(1000)
        .then(showP);
    await sleep(1500)
        .then(showH5);
    introFinished = true
};

document.addEventListener('mouseup', async (event) => {
    if (introFinished && !introDone) {
        introDone = true
        await sleep(500)
            .then(hideIntro);
        await sleep(2000)
            .then(removeIntro);
        nextChapter();
    }
})

Intro();
