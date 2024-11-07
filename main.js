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

function sendForm () {
    console.log(mySelectedChoise);
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

// function nextStep() {
//     if (currentStep < 5) {
//         // Вибираємо всі кроки та лінії
//         const steps = document.querySelectorAll('.progress-step');
//         const lines = document.querySelectorAll('.progress-line');
//
//         // Поточний і наступний блоки
//         const currentStepBlock = document.getElementById(`step-${currentStep}`);
//         const nextStepBlock = document.getElementById(`step-${currentStep + 1}`);
//
//         // Зміна видимості блоків
//         currentStepBlock.classList.remove('active-block');
//         currentStepBlock.classList.add('disabled-block');
//         nextStepBlock.classList.remove('disabled-block');
//         nextStepBlock.classList.add('active-block');
//
//         // Оновлення класів для прогрес-лінії та кроків
//         steps[currentStep].classList.add('active');
//         if (currentStep - 1 >= 0) {
//             lines[currentStep - 1].classList.add('active');
//         }
//
//         // Оновлення кнопок
//         document.querySelector('.disabled-button').classList.remove('disabled-button');
//         document.querySelector('.disabled-button').classList.add('active-button');
//
//         // Кнопка "Отправить" на останньому кроці
//         if (currentStep === 4) {
//             document.querySelector('.next-button').classList.add('disabled-button');
//             document.querySelector('.next-button').classList.remove('active-button');
//             document.querySelector('.submit-button').classList.remove('disabled-button');
//             document.querySelector('.submit-button').classList.add('active-button');
//         }
//
//         // Переходимо до наступного кроку
//         currentStep++;
//     }
// }
//
// function prevStep() {
//     if (currentStep > 1) {
//         const steps = document.querySelectorAll('.progress-step');
//         const lines = document.querySelectorAll('.progress-line');
//
//         // Поточний і попередній блоки
//         const currentStepBlock = document.getElementById(`step-${currentStep}`);
//         const prevStepBlock = document.getElementById(`step-${currentStep - 1}`);
//
//         // Зміна видимості блоків
//         currentStepBlock.classList.remove('active-block');
//         currentStepBlock.classList.add('disabled-block');
//         prevStepBlock.classList.remove('disabled-block');
//         prevStepBlock.classList.add('active-block');
//
//         // Видалення класів активного кроку та лінії
//         steps[currentStep - 1].classList.remove('active');
//         if (currentStep - 2 >= 0) {
//             lines[currentStep - 2].classList.remove('active');
//         }
//
//         // Оновлення кнопок
//         if (currentStep === 2) {
//             document.querySelector('.active-button').classList.remove('active-button');
//             document.querySelector('.active-button').classList.add('disabled-button');
//         }
//
//         // Кнопка "Далее" на 4 кроці
//         if (currentStep === 5) {
//             document.querySelector('.submit-button').classList.add('disabled-button');
//             document.querySelector('.submit-button').classList.remove('active-button');
//             document.querySelector('.next-button').classList.remove('disabled-button');
//             document.querySelector('.next-button').classList.add('active-button');
//         }
//
//         // Повертаємось до попереднього кроку
//         currentStep--;
//     }
// }
