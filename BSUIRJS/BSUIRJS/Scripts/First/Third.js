var resultName = prompt("Введите сюда своё имя", "Введите имя");
alert("Ваше имя " + resultName);

var isResultToContinue = confirm("Начать заново?");

while (isResultToContinue) {
	isResultToContinue = confirm("Не надоело?");
}

alert("Ну и правильно!");