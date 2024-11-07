let currentStep = 1;

function prevStep() {
    const steps = document.querySelectorAll('.progress-step');
    const lines = document.querySelectorAll('.progress-line');
    let buttonBack = document.querySelectorAll('.disabled-back-button');
    const buttonsContainer = document.querySelectorAll('.buttons-container');


    if (currentStep > 1) {
        currentStep--;
    // Оновлюємо клас активного кроку

    // Додаємо клас "active" для наступного кроку
    steps[currentStep].classList.remove('active');
    // Додаємо клас "active" для лінії між кроками
        lines[currentStep - 1].classList.remove('active');
    // Додаємо active-back-button клас до кнопки Назад
    // if (buttonBack) {
    //     buttonBack[0].classList.add('active-back-button')
    // }

    console.log(currentStep);

        if (currentStep === 1) {
            // currentStep--;

            buttonBack = document.querySelectorAll('.disabled-back-button');
            buttonBack[0].classList.remove('active-back-button');
            buttonBack[0].classList.add('disabled-back-button');

            buttonsContainer[0].style.justifyContent = 'center';

            console.log(currentStep);
        }
    }
}

function nextStep() {
    if (currentStep < 5) {
        // Оновлюємо клас активного кроку
        const steps = document.querySelectorAll('.progress-step');
        const lines = document.querySelectorAll('.progress-line');
        const buttonBack = document.querySelectorAll('.disabled-back-button');
        const buttonsContainer = document.querySelectorAll('.buttons-container');

        // Додаємо клас "active" для наступного кроку
        steps[currentStep].classList.add('active');
        // Додаємо клас "active" для лінії між кроками
            lines[currentStep - 1].classList.add('active');
        console.log(currentStep);
        // Додаємо active-back-button клас до кнопки Назад
        if (buttonBack) {
            buttonBack[0].classList.add('active-back-button')
            buttonsContainer[0].style.justifyContent = 'space-between';
        }
        currentStep++;
    }
}
