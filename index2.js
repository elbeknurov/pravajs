// 1 misol
alert(`Assalomu aleykum prava olish uchun ariza qoldirinng!!!`);
var name = prompt("Ismingizni kiriting");
var age = +prompt(`${name} Yoshingizni kiriting`);

if (age >= 18) {
  alert(`${name} siz prava olish yoshidasiz `);
} else {
  alert(`sizga prava olish uchun ${18 - age} yil kerak ekan!!!`);
}

// 2 misol
var a = +prompt("1sonni kiriting?");
var b = +prompt("2sonni kiriting?");
var c = +prompt("3sonni kiriting?");

if (a > b && a > c) {
  alert(`${a} soningiz katta`);
} else if (b > c) {
  alert(`${b}  soningiz katta`);
} else if (a == b && a == c && b == c) {
  alert("siz hamma soningizni bir xil kiritdingiz");
} else {
  alert(`${c} soningiz katta`);
}
