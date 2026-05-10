const semuaProduk = [
    { 
        id: 1, 
        nama: "Kursi Jati Minimalis", 
        kategori: "kursi", 
        harga: "Rp 550.000", 
        gambar: "kursi - Copy.jpg"
    },
    { 
        id: 2, 
        nama: "Meja Makan", 
        kategori: "meja", 
        harga: "Rp 1.500.000", 
        gambar: "meja makan - Copy.jpg"
    },
    { 
        id: 3, 
        nama: "Lemari Pakaian", 
        kategori: "lemari", 
        harga: "Rp 2.200.000", 
        gambar: "lemari - Copy.jpg"
    },
    { 
        id: 4, 
        nama: "Kursi Teras Jati", 
        kategori: "kursi", 
        harga: "Rp 700.000", 
        gambar: "kjati.jpg"
    },
    { 
        id: 5, 
        nama: "Meja Kerja Jati", 
        kategori: "meja", 
        harga: "Rp 2.800.000", 
        gambar: "mkj.jpg"
    },
    { 
        id: 6, 
        nama: "Lemari Buku Minimalis", 
        kategori: "lemari", 
        harga: "Rp 1.500.000", 
        gambar: "lbm.jpg"
    },
    { 
        id: 7, 
        nama: "Kursi Tamu Jati", 
        kategori: "kursi", 
        harga: "Rp 1.200.000", 
        gambar: "ktamu.jpg"
    },
    { 
        id: 8,
        nama: "Meja Tamu Jati", 
        kategori: "meja", 
        harga: "Rp 1.000.000", 
        gambar: "mtamu.jpg"
    },
    { 
        id: 9,
        nama: "Lemari Jati Modern", 
        kategori: "lemari", 
        harga: "Rp 3.500.000", 
        gambar: "ljmodern.jpg"
    },
    { 
        id: 10,
        nama: "Kursi Jati Elegant", 
        kategori: "kursi", 
        harga: "Rp 1.000.000", 
        gambar: "kjelegant.jpg"
    },
    { 
        id: 11,
        nama: "Meja Jati Minimalis", 
        kategori: "meja", 
        harga: "Rp 1.200.000", 
        gambar: "mjminimalis.jpg"
    },
    { 
        id: 12,
        nama: "Lemari Jati Klasik", 
        kategori: "lemari", 
        harga: "Rp 3.200.000", 
        gambar: "ljklasik.jpg"
    }
];

function tampilkanProduk(filter = 'semua') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = "";

    const produkDifilter = filter === 'semua' 
        ? semuaProduk 
        : semuaProduk.filter(p => p.kategori === filter);

    produkDifilter.forEach(p => {
        const kartu = `
            <div class="product-card">
                <img src="${p.gambar}" alt="${p.nama}" class="product-img">
                <div class="product-info">
                    <p class="product-category">${p.kategori}</p>
                    <h4 class="product-name">${p.nama}</h4>
                    <p class="product-price">${p.harga}</p>
                </div>
            </div>
        `;
        grid.innerHTML += kartu;
    });
}

function filterProduk(kategori) {
    tampilkanProduk(kategori);

    const buttons = document.querySelectorAll('.btn-filter');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${kategori}`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    tampilkanProduk();
});

let jumlahKeranjang = 0;

function tambahKeKeranjang() {
    jumlahKeranjang++;
    const badge = document.getElementById('cart-count');
    badge.innerText = jumlahKeranjang;
    alert("Produk berhasil ditambahkan ke keranjang!");
}

function tampilkanProduk(filter = 'semua') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ""; 

    const produkDifilter = filter === 'semua' 
        ? semuaProduk 
        : semuaProduk.filter(p => p.kategori === filter);

    produkDifilter.forEach(p => {
        const kartu = `
            <div class="product-card">
                <div class="product-img-container">
                    <img src="${p.gambar}" alt="${p.nama}" class="product-img">
                </div>
                <div class="product-info">
                    <p class="product-category">${p.kategori}</p>
                    <h4 class="product-name">${p.nama}</h4>
                    <p class="product-price">${p.harga}</p>
                    <button onclick="tambahKeKeranjang()" class="btn-beli">
                        <i class="fas fa-plus"></i> Tambah
                    </button>
                </div>
            </div>
        `;
        grid.innerHTML += kartu;
    });
}

document.getElementById('formKontak')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda secepatnya.");
    this.reset();
});