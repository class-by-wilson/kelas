// cara mendefinisikan variabel pada javascript
var name = "Andi"; // variabel var dapat di perbaharui dan di deklarasi ulang
let age = 20; // variabel let dapat di perbaharui dan tidak dapat di deklarasi ulang
const hobby = "playing football"; // variabel const tidak dapat di perbaharui maupun di deklarasi ulang

// tipe tipe data
const str = "text"; // string
const num = 40; // number
const obj = {
	name: "Andi",
	age: 20,
}; // object
const arr = [6, 2, 3, 1, 4, 5]; // array

// operator
// untuk materi operator bisa lihat referensi di https://www.w3schools.com/js/js_operators.asp saja

// conditions
console.log("output dari materi conditions : \n");

const score = 80;

// condition dengan menggunakan if
if (score > 80) {
	// code dijalan ketika score diatas 80
	console.log("nilainya A");
} else if (score > 60) {
	// code dijalankan ketika score dibawah 80 dan diatas 60
	console.log("nilainya B");
} else {
	// code dijalankan ketika score dibawah 60
	console.log("nilainya C");
}

// condition dengan menggunakan switch
const switchNum = 4;
switch (switchNum) {
	case 2:
	case 4:
	case 6:
	case 8:
		console.log(`${switchNum} merupakan angka genap`); // jika switchNum bernilai 2, 4, 6, 8 maka code ini akan di jalankan
		break; // break harus di tambahkan di akhir dari code case sebagai penanda bahwa itu sudah akhir dari code, jika tidak ditambahkan maka code yang dibawahnya akan dijalankan
	case 1:
	case 3:
	case 5:
	case 7:
	case 9:
		console.log(`${switchNum} merupakan angka ganjil`);
		break;
}

console.log("==============================\n");

//function

console.log("output dari materi function : \n");

function greet(name) {
	console.log(`Hello! ${name}`);
}

greet(name);

function sum(x, y) {
	return x + y; // return berfungsi untuk membalikkan var ke fungsinya
}

sum(1, 4); // maka hasilnya tidak akan terprint, oleh karena itu kita perlu pass hasil returny ke variable
const hasil = sum(1, 4);
console.log(hasil);

// contoh arrow function
const divided = (x, y) => {
	return x / y;
};

console.log("==============================\n");

// arrays

console.log("output dari materi array : \n");
console.log(arr);
console.log(arr[0]); // mengambil data dari array pada posisi index 0 -> 1
const lastDataFromArr = arr.pop(); // .pop() fungsi untuk menghapus data terakhir array dan mereturnnya
console.log(`[${arr}] data yang terhapus dari array = ${lastDataFromArr}`);
const firstDataFromArr = arr.shift(); // .shift() fungsi untuk menghapus data pertama array dan mereturnnya
console.log(`[${arr}] data yang terhapus dari array = ${firstDataFromArr}`);
const sortedArr = arr.sort(); // menyortir array menjadi berurutan
console.log(`array yang sudah tersortir = [${sortedArr}]`);

console.log("==============================\n");

// object
const userData = {
	name: "Wilson",
	age: 21,
};

console.log("output dari materi object :\n");
console.log("name : " + userData.name); // untuk mengambil value dari property name pada userData
console.log("age : " + userData.age); // untuk mengambil value dari property age pada userData

console.log("==============================\n");
