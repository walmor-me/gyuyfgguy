const http = require('http');
const rupiah = require('rupiah-format')
const fs = require('fs');
const host = 'localhost'
const port = 30000  

// request adalah data masuk dari luar
// response adalah data keluar dari sistem 

const server = http.createServer(function (request, response) {
    const nama = "adzka";
    let uang = 500000;
    let jajan = 15000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('data berhasil disimpan')
    })

    const hasil = `halo nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya 
    tadinya ${uang}, sekarang menjadi ${sisaRupiah},`


    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '', function () {
    console.log(`server menyala di ${host}:${port} 😋`);
})