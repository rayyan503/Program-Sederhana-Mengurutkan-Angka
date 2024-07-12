const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let angka = [];
let n = 0;

function displayMenu() {
  console.log("MENU PILIHAN");
  console.log("1. Input angka");
  console.log("2. Sorting");
  console.log("3. Searching");
  console.log("4. Selesai");
}

function inputAngka() {
  rl.question("Masukkan jumlah nilai tugas : ", (input) => {
    n = parseInt(input);

    console.log("Input Angka Secara Acak");
    for (let i = 0; i < n; i++) {
      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * 100);
      } while (angka.includes(randomNum)); // Pastikan angka acak unik

      angka.push(randomNum);
      console.log(`Angka ${i + 1} : ${angka[i]}`);
    }

    displayMenu();
    chooseOption();
  });
}

function sorting() {
  angka.sort((a, b) => a - b);
  console.log("Hasil sorting : " + angka.join(", "));
  displayMenu();
  chooseOption();
}

function searching() {
  rl.question("Masukkan angka yang ingin dicari : ", (input) => {
    const angkaDicari = parseInt(input); // Mengubah input menjadi bilangan bulat

    // Menggunakan find() untuk mencari angka dengan tipe data yang ketat (strict)
    const found = angka.find((num) => num === angkaDicari);

    if (found !== undefined) {
      console.log("Angka ditemukan.");
    } else {
      console.log("Angka tidak ditemukan.");
    }

    displayMenu();
    chooseOption();
  });
}

function chooseOption() {
  rl.question("Masukkan pilihan [1/2/3/4] : ", (input) => {
    const option = parseInt(input);

    switch (option) {
      case 1:
        inputAngka();
        break;
      case 2:
        sorting();
        break;
      case 3:
        searching();
        break;
      case 4:
        console.log("Program selesai.");
        rl.close(); // Menutup readline saat program selesai
        break;
      default:
        console.log("Pilihan tidak valid.");
        displayMenu();
        chooseOption();
        break;
    }
  });
}

// Mulai program dengan menampilkan menu pilihan pertama kali
displayMenu();
chooseOption();
