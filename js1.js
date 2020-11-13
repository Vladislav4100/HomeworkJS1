//ЗАДАЧА 1
let sadYchastok =1000;
let widthGr =15;
let heightGr=25;
let free;
	free=sadYchastok-(widthGr*heightGr);
console.log(free);
//ЗАДАЧА 2
let sqeareOvalaBig;
let sqeareOvalSmoll=600;//600 сантиметров в квадрате
 sqeareOvalaBig =1500;//15 дм **2 умножить на 100 чтобы получить в см**2
let decision2=sqeareOvalaBig-sqeareOvalSmoll;
	console.log(decision2);
//ЗАДАЧА 3	
let number1=50;
let number2=15;
let number3=45;
let minimum1;
if (number1<number2) {
minimum1=number1
}	else {
minimum1=number2
}
let minimum2;
if(number3<minimum1) {
minimum2=number3
} else {
minimum2=minimum1
}
console.log(minimum2);
//ЗАДАЧА 4 Вывести в консоль ближайшее к 10 из двух чисел

let m=8.5
let n=11.45
let h=10-m;
let b=10-n;
	if (h < 0) {
	h = -1 * h
}
	if (b < 0) {
	b = -1 * b
}
let l;
	if (h < b) {
	l = m
	} else {
	l = n
}
console.log (l);