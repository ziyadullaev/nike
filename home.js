// 1- masala stringdagi qaytarilmagan sozni topish

// function yagonaSozlarniTop(matn) {
//     const sozlar = matn.split(" ");
//     const yagonaSozlar = sozlar.filter(soz => sozlar.filter(s => s === soz).length === 1);
//     return yagonaSozlar;
// }

// const matn = "bu uyga vazifa uyga juda muhim vazifa";
// console.log(yagonaSozlarniTop(matn));

// 2-masala berilgan arraydagi tub sonlarni topish

// function tubmi(son) {
//     if (son < 2) return false;
//     for (let i = 2; i <= Math.sqrt(son); i++) {
//         if (son % i === 0) return false;
//     }
//     return true;
// }

// const raqamlar = [3, 4, 7, 9, 11, 15];
// const tubSonlar = raqamlar.filter(tubmi);
// console.log(tubSonlar);

// 3-masala ketma ket 3ta juft yoki toqligini tekshirish

// function ketmaKetToqYokiJuft(raqamlar) {
//     for (let i = 0; i < raqamlar.length - 2; i++) {
//         const qism = raqamlar.slice(i, i + 3);
//         if (qism.every(son => son % 2 === 0) || qism.every(son => son % 2 === 1)) {
//             return true;
//         }
//     }
//     return false;
// }

// const raqamlar = [2, 4, 6, 7, 8, 9];
// console.log(ketmaKetToqYokiJuft(raqamlar)); 


// 4-masala berilgan arraydagi raqamlarni aniqlab sort qilish

// function raqamlarniAjratVaTartibla(matn) {
//     const raqamlar = matn.match(/\d+/g).map(Number);
//     return raqamlar.sort((a, b) => a - b);
// }

// const matn = "Uy 5-xonada 2 ta stul va 11 ta kitob bor.";
// console.log(raqamlarniAjratVaTartibla(matn));

// 5-masala arraydagi sonlarni ochirib tashlash 

// function raqamlarniOchir(matn) {
//     return matn.replace(/\d+/g, "");
// }

// const matn = "Xonada 5 ta stol va 3 ta orindiq bor.";
// console.log(raqamlarniOchir(matn));

// 6-masala 4-id dagi elementni ochirish
const mahsulotlar = [
    { id: 1, nom: "Mahsulot A" },
    { id: 2, nom: "Mahsulot B" },
    { id: 4, nom: "Mahsulot C" },
    { id: 5, nom: "Mahsulot D" }
];

const filtrlanganMahsulotlar = mahsulotlar.filter(mahsulot => mahsulot.id !== 4);
console.log(filtrlanganMahsulotlar);
