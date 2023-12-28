var barang = [
    { kode: "001", nama: "Barang A", harga: 10000 },
    { kode: "002", nama: "Barang B", harga: 20000 },
    { kode: "003", nama: "Barang C", harga: 30000 },
  ];
function TotalBelanja() {
    var kd_barang = document.getElementById("kd_barang").value;
    var jml_Barang = parseInt(
      document.getElementById("jml_Barang").value
    );
    var pilihanBarang = barang.find(function (item) {
      return item.kode === kd_barang;
    });

    if (pilihanBarang) {
      var totalBelanja = jml_Barang * pilihanBarang.harga;
      window.alert("Total pembayaran adalah: Rp " + totalBelanja);
      var jumlahBayar = parseInt(window.prompt("Masukkan uang user:"));
      if (jumlahBayar < totalBelanja) {
        window.alert( "Uang tidak cukup. Silakan masukkan jumlah uang yang mencukupi.");
      } else {
        var kembalian = jumlahBayar - totalBelanja;
        window.alert("Total kembalian anda adalah: Rp " + kembalian);
      }
    } else {
      window.alert("Kode barang tidak valid!");
    }
}