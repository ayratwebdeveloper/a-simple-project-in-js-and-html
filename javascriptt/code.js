const CURRENT_YEAR = 2023
const YEAR = 23
const CORRECT_ANSERWER ="Ответ верный"
const ERROR_ANSERWER = "Ответ не верный"

const inputNode = document.querySelector('.javascript-input')
const buttonNode = document.querySelector('.javascript-button')
const outputNode = document.querySelector('.javascript-output')
// Обрабатываем события
buttonNode.addEventListener('click', function(){
// Простая логика приложения
	const inputValue = inputNode.value;
	// Проверка поле ввода на то, что оно не содержит пустое значение
	if(!inputNode){
		return;
	}

	const anserwer = Number(inputNode.value);
	let output = CORRECT_ANSERWER
// Проверка на правильность ответа
	if(anserwer !== CURRENT_YEAR && anserwer !== YEAR){
		output = ERROR_ANSERWER
	}

	outputNode.innerHTML = output
})