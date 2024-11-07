let currentStep = 1;

let mySelectedChoise = {
    step1: 'step1',
    step2: 'step2',
    step3: 'step3',
    step4: 'step4',
}


const inputElement = document.getElementById('input-step-2');

inputElement.addEventListener('input', (event) => {
    mySelectedChoise.step2 = event.target.value

    console.log('Змінено текст:', event.target.value);
    console.log(mySelectedChoise.step2 + ' TEXT');
});


function chooseLabel(button, number) {
    const activeInput = document.querySelectorAll(`.active-input-step-${number}`);
    activeInput[0].classList.remove(`active-input-step-${number}`);
    button.classList.add(`active-input-step-${number}`);

    mySelectedChoise[`step${number}`] = button.name;

    console.log('choise ' + mySelectedChoise[`step${number}`]);

    console.log(`step ${number}`);
}

function saveDataInput(input) {
    const activeInput = document.querySelectorAll(`.active-input-step-${number}`);
    activeInput[0].name = input.value;

    console.log(activeInput[0].name + ' activeInput');
}

function prevStep() {
    const steps = document.querySelectorAll('.progress-step');
    const lines = document.querySelectorAll('.progress-line');
    let buttonBack = document.querySelectorAll('.disabled-button');
    const buttonsContainer = document.querySelectorAll('.buttons-container');
    const nextStepBlock = document.querySelectorAll('.disabled-block');
    const showStepBlock = document.querySelectorAll('.active-block');

    if (currentStep > 1) {
        currentStep--;
    // Оновлюємо клас активного кроку

    // Додаємо клас "active" для наступного кроку
    steps[currentStep].classList.remove('active');
    // Додаємо клас "active" для лінії між кроками
        lines[currentStep - 1].classList.remove('active');
    // Додаємо active-button клас до кнопки Назад
    // if (buttonBack) {
    //     buttonBack[0].classList.add('active-button')
    // }
        showStepBlock[0].classList.add('disabled-block');
        showStepBlock[0].classList.remove('active-block');
        nextStepBlock[currentStep - 1].classList.add('active-block');
        nextStepBlock[currentStep - 1].classList.remove('disabled-block');


        console.log(currentStep);

        if (currentStep === 1) {
            // currentStep--;

            buttonBack = document.querySelectorAll('.disabled-button');
            buttonBack[0].classList.remove('active-button');
            buttonBack[0].classList.add('disabled-button');

            buttonsContainer[0].style.justifyContent = 'center';

            console.log(currentStep);
        }

        if (currentStep === 4) {
            document.querySelector('.next-button').classList.add('active-button');
            document.querySelector('.next-button').classList.remove('disabled-button');
            document.querySelector('.submit-button').classList.add('disabled-button');
            document.querySelector('.submit-button').classList.remove('active-button');
        }
    }
}

function nextStep() {
    if (currentStep < 5) {
        // Оновлюємо клас активного кроку
        const steps = document.querySelectorAll('.progress-step');
        const lines = document.querySelectorAll('.progress-line');
        const buttonBack = document.querySelectorAll('.disabled-button');
        const nextButton = document.querySelectorAll('.active-button');
        const buttonsContainer = document.querySelectorAll('.buttons-container');
        const nextStepBlock = document.querySelectorAll('.disabled-block');
        const showStepBlock = document.querySelectorAll('.active-block');

        // Додаємо клас "active" для наступного кроку
        steps[currentStep].classList.add('active');
        // Додаємо клас "active" для лінії між кроками
        lines[currentStep - 1].classList.add('active');

        showStepBlock[0].classList.add('disabled-block');
        showStepBlock[0].classList.remove('active-block');
        nextStepBlock[currentStep - 1].classList.add('active-block');
        nextStepBlock[currentStep - 1].classList.remove('disabled-block');

        console.log(currentStep);
        // Додаємо active-button клас до кнопки Назад
        if (buttonBack) {
            buttonBack[0].classList.add('active-button');
            buttonsContainer[0].style.justifyContent = 'space-between';
        }
        currentStep++;

        if (currentStep === 5) {
            nextButton[1].classList.remove('active-button');
            nextButton[1].classList.add('disabled-button');
            buttonBack[1].classList.remove('disabled-button');
            buttonBack[1].classList.add('active-button');
        }
    }

}
