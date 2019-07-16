function shoppingTime(memberId, money) {
    // you can only write your code here!
    var barang = {
        namaBarang: 
            ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'],
        harga: [1500000, 500000, 250000, 175000, 50000]
    }
    var dataPelanggan = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: money
    }

    if (memberId === '' || money === undefined) {
        console.log('Mohon maaf, toko X hanya berlaku untuk member saja');
    }
    if (money < 50000) {
        console.log('Mohon maaf, uang tidak cukup');
    } else {
        for (var i = 0; i < barang.harga.length; i++) {
            if (money >= barang.harga[i]) {
                dataPelanggan.changeMoney -= barang.harga[i];
                dataPelanggan.listPurchased.push(barang.namaBarang[i])
            }
        }
    }
    return dataPelanggan;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja