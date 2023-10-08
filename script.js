// database siswa yang dibuat dengan array
let data = [
    { nama: "Ainul", usia: 17, alamat: "Kediri", ayah: "Ali", ibu: "Dewi", mtk: 80, ipa: 90, bhsIndo: 100, ket: Boolean},
    { nama: "Yaqin", usia: 16, alamat: "Malang", ayah: "Mas'at", ibu: "Sri", mtk: 50, ipa: 80, bhsIndo: 76, ket: Boolean},
    { nama: "Sams", usia: 18, alamat: "Surabaya", ayah: "Tono", ibu: "Rani", mtk: 100, ipa: 90, bhsIndo: 80, ket: Boolean}
  ]

// function untuk menampilkan data siswa 
  function tampilData(list) {
    // switch yang digunakan untuk membedakan data menurut 2 kriteria
    switch (list) {
        case "profile" :
            console.log("Data Siswa:")
            let i = 0
            // while untuk menampilkan data berulang dari array
            while (i < data.length) {
                console.log(
                    `Nama: ${data[i].nama}, Usia: ${data[i].usia}, Alamat: ${data[i].alamat}`
                );
                i++
            }
            break
        
        case "keluarga" :
            let o = 0
            console.log("Nama Keluarga: ")
            do {
                console.log(
                    `Nama: ${data[o].nama}, Nama Ayah: ${data[o].ayah}, Nama Ibu: ${data[o].ibu}`
                );
                o++
            } while (o < data.length)
        break

        case "nilai" :
            console.log("Nilai Siswa: ")
            // for statement untuk mengulang dari data array
            for (let i = 0; i < data.length; i++) {
                let totalNilai = (data[i].mtk + data[i].ipa + data[i].bhsIndo) / 3
                // fi statement mencari keterangan lulus atau tidak nya siswa dari nilai ujian nasional yang ada berdasarkan total nilai
                if (totalNilai >= 80) {
                    data[i].ket = true
                    if (data[i].ket == true) {
                        console.log(
                            `Nama: ${data[i].nama}, Nilai MTK: ${data[i].mtk}, Nilai Ipa: ${data[i].ipa}, Nilai Bahasa: ${data[i].bhsIndo}, Keterangan : lulus`
                        )
                    }
                } else {
                    data[i].ket = false
                    if (data[i].ket == false) {
                        console.log(
                            `Nama: ${data[i].nama}, Nilai MTK: ${data[i].mtk}, Nilai Ipa: ${data[i].ipa}, Nilai Bahasa: ${data[i].bhsIndo}, Keterangan : tidak lulus`
                        )
                    }
                }
            }
            break
    }
  }
  

//   manampilkan function

// function yang sama tetapi dengan parameter berbeda
// parameter untuk menampilkan profile di case pertama menggunakan while
  tampilData("profile")
  console.log("")
// parameter untuk menampilkan nama keluarga di case kedua menggunakan do while
  tampilData("keluarga")
  console.log("")
// parameter untuk menampilkan data nilai siswa dan keterangan lulus/tidak di case ketiga menggunakan for statement
  tampilData("nilai")
  