let data = fungsi1("Tamiko",20,"bekerja");

function fungsi1(nama,umur = 0, status = "sekolah"){
  return `Nama saya ${nama} umur saya ${umur} tahun dan saya sedang ${status}`
}
// Nama saya Tamiko umur saya 0 tahun dan saya sedang sekolah

// let arr = []
// arr.push("data1"); //dari belakang
// console.log(arr)
// arr.push("data9");
// console.log(arr)
// arr.unshift("data5"); //dari depan
// console.log(arr)

// let catalog = [];

// catalog.push(
//   {
//     nama : "tas",
//     harga : 500000,
//     brand : "bata"
//   }
// )
// console.log(catalog)
// catalog.push(
//   {
//     nama : "sepatu",
//     harga : 300000,
//     brand : "adidas"
//   }
// )
// console.log(catalog)
// catalog.unshift(
//   {
//     nama : "torso",
//     harga : 600000,
//     brand : "jack",
//     diskon : "20%"
//   }
// )
// console.log(catalog[0])

let obj = [
  {
    nama : "aqua",
    completed : false
  },
  {
    nama : "ades",
    completed : true
  },
  {
    nama : "sms",
    completed : true
  },
  {
    nama : "muraqua",
    completed : false
  },
]

for(item of obj){
  console.log(`${item.completed ? "<s>" : ""} ${item.nama} ${item.completed ? "</s>" : ""}`)
}