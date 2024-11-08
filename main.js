let currentStep = 1;

let mySelectedChoise = {
    step1: 'Персональный_компьютер',
    step2: 'Не_включается',
    step3: 'Блок_питания',
    step4: 'ДО_2-Х_ЛЕТ',
}


const inputElement = document.getElementById('input-step-2');

inputElement.addEventListener('input', (event) => {
    mySelectedChoise.step2 = `${event.target.value}`;
});


function chooseLabel(button, number) {
    const activeInput = document.querySelectorAll(`.active-input-step-${number}`);


    activeInput[0].classList.remove(`active-input-step-${number}`);
    button.classList.add(`active-input-step-${number}`);

    mySelectedChoise[`step${number}`] = button.name;

    const step2label = document.querySelectorAll('.step-2-button');
    const step2input = document.querySelectorAll('.step-2-input');
    if (!step2input[0].classList.contains('active-input-step-2')) {
        step2label[7].classList.remove('step-2-label');
        step2input[0].classList.remove('step-2-input-colours')
    }
}

function step2LabelColors() {
    const label = document.querySelectorAll('.step-2-button');
    const input = document.querySelectorAll('.step-2-input');

    if (input[0].classList.contains('active-input-step-2')) {
        label[7].classList.add('step-2-label');
        input[0].classList.add('step-2-input-colours')
    }
}

function sendForm() {}

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

        showStepBlock[0].classList.add('disabled-block');
        showStepBlock[0].classList.remove('active-block');
        nextStepBlock[currentStep - 1].classList.add('active-block');
        nextStepBlock[currentStep - 1].classList.remove('disabled-block');

        if (currentStep === 1) {

            buttonBack = document.querySelectorAll('.disabled-button');
            buttonBack[0].classList.remove('active-button');
            buttonBack[0].classList.add('disabled-button');

            buttonsContainer[0].style.justifyContent = 'center';
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

