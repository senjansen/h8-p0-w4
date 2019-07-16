function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let hasil = [];
    let biaya = 2000;

    if (arrPenumpang.length === 0) {
        return hasil;
    } else {
        for (let i = 0; i < arrPenumpang.length; i++) {
            var objPenumpang = {};
            
            objPenumpang.nama = arrPenumpang[i][0];
            objPenumpang.berangkat = arrPenumpang[i][1];
            objPenumpang.tujuan = arrPenumpang[i][2];
            objPenumpang.bayar = (rute.indexOf(objPenumpang.tujuan) - rute.indexOf(objPenumpang.berangkat)) * biaya;

            hasil.push(objPenumpang)
        }
    }
    return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]