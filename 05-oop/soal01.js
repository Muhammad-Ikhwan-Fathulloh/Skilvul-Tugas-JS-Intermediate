// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
//Maka fun1 akan menampilkan data dari obj, dan fun2 data kosong
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
//tidak
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
//karena obj sudah dipanggil dan fun1 memanggil pertama, sedangkan fun2 terakhir
const obj = {
    fun1: function() {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();