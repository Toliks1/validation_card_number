const cardNumber= prompt('Enter your card number');

const cardNumberRegExp = new RegExp(/^[0-9]{16}$/);

const removeSpaces = (str) => str.replace(/\s+/g, '');

function validation (userCardNumber){
	if (userCardNumber === null){
		return false;
	} else {
		return cardNumberRegExp.test(removeSpaces(userCardNumber));
	}
}

const getAndExpandArr = (stringAfterValidation) => ([...(removeSpaces(stringAfterValidation))]).reverse();

function convertForEvenElem(elem){
	(elem*=2) > 9	? elem = 1 + elem%10 : elem;
	return elem;
}

function getFinalArr (arr){
	for (let i = 0; i < arr.length; i++){
		i%2 === 1 ? arr[i] = convertForEvenElem(arr[i]) : arr[i] = +arr[i];
	}
}

function  mainFunc(userCard){
	if (validation(userCard)){
		let arrToBeProcessed = getAndExpandArr(userCard);
		getFinalArr(arrToBeProcessed);
		const summ = arrToBeProcessed.reduce((accum,num) => accum + num);
		if (summ%10 === 0){
			return true + ' Card number accepted';
		} else {
			return false + ' Check your card number again!';
		}
	} else{
		return false + ' Enter a sixteen-digit number!';
  }
};

alert(mainFunc(cardNumber));

console.log('change1')