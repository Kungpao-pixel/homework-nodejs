const rumus = require('./rumus');

const sisiPersegi = 5;
console.log("Luas Persegi adalah : ", rumus.luasPersegi(sisiPersegi));
console.log("Keliling Persegi adalah : ", rumus.kelilingPersegi(sisiPersegi));

const panjang= 4;
const lebar = 6;
console.log("Luas Persegi panjang adalah : ", rumus.luasPersegiPanjang(panjang, lebar))
console.log("Keliling Persegi panjang adalah : ", rumus.kelilingPersegiPanjang(panjang, lebar))
