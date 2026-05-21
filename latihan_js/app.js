import Student from "./models/student.js";
import BankAccount from "./models/BankAccount.js";

const mhs1 = new Student("Alfatah", 21, "241110085", "Informatika");
mhs1.greet();
mhs1.study();

const rekeningMhs = new BankAccount(mhs1.name);
rekeningMhs.deposit(200000);
rekeningMhs.withdraw(50000);

document.getElementById("output").innerHTML = `
    <h2>Data mahasiswa</h2>
    <p><strong>Nama:</strong> ${mhs1.name}</p>
    <p><strong>Umur:</strong> ${mhs1.age} tahun</p>
    <p><strong>NIM:</strong> ${mhs1.nim}</p>
    <p><strong>Jurusan:</strong> ${mhs1.major}</p>
    <p><strong>saldo akhir :</strong> 
    Rp${rekeningMhs.getBalance().toLocaleString('id-ID')}</p>
`;
