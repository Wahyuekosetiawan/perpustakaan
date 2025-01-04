// Fungsi untuk validasi form transaksi dan menambahkan data ke tabel
document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai dari input form
    const namaTransaksi = document.getElementById('namaTransaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    // Validasi: Pastikan semua field diisi
    if (!namaTransaksi || !jumlah || !kategori) {
        alert('Semua field harus diisi!');
        return; // Hentikan proses jika ada field yang kosong
    }

    // Tambahkan data ke tabel
    tambahkanDataKeTabel(namaTransaksi, jumlah, kategori);

    // Reset form setelah data ditambahkan
    document.getElementById('transaksiForm').reset();
});

// Fungsi untuk menambahkan data ke tabel
function tambahkanDataKeTabel(namaTransaksi, jumlah, kategori) {
    const tbody = document.querySelector('#transaksiTable tbody');

    // Buat baris baru
    const row = document.createElement('tr');

    // Buat sel untuk nama transaksi
    const namaCell = document.createElement('td');
    namaCell.textContent = namaTransaksi;
    row.appendChild(namaCell);

    // Buat sel untuk jumlah
    const jumlahCell = document.createElement('td');
    jumlahCell.textContent = jumlah;
    row.appendChild(jumlahCell);

    // Buat sel untuk kategori
    const kategoriCell = document.createElement('td');
    kategoriCell.textContent = kategori;
    row.appendChild(kategoriCell);

    // Tambahkan baris ke tabel
    tbody.appendChild(row);
}

// Data transaksi contoh (opsional, jika ingin menampilkan data awal)
const transaksiData = [
    { namaTransaksi: "Peminjaman Buku A", jumlah: 2, kategori: "Buku Pelajaran" },
    { namaTransaksi: "Peminjaman Buku B", jumlah: 1, kategori: "Novel" },
    { namaTransaksi: "Peminjaman Buku C", jumlah: 3, kategori: "Komik" }
];

// Fungsi untuk menambahkan data contoh ke tabel saat halaman dimuat
function tambahkanTransaksiKeTabel() {
    transaksiData.forEach(transaksi => {
        tambahkanDataKeTabel(transaksi.namaTransaksi, transaksi.jumlah, transaksi.kategori);
    });
}

// Panggil fungsi saat halaman dimuat
window.onload = tambahkanTransaksiKeTabel;