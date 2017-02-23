var a = prompt('Podaj liczbę a');
var b = prompt('Podaj liczbę b');
var value = (a*a) + (2 * a * b) - (b*b);
console.log(value);
if (value>0){
	console.log('Wynik jest dodatni');
} else {
	console.log('Wynik jest ujemny');
}

