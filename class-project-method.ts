// CLASS BOOK
// Class ini adalah cetak biru (blueprint) untuk objek Buku
class Book {
    // Atribut / properti yang dimiliki setiap objek Book
    title: string;      // Judul buku
    pages: number;      // Jumlah halaman
    author: string;     // Nama penulis
    type: string;       // Jenis buku (Novel, Cerpen, dll)
    stock: number;      // Stok buku yang tersedia

    // Constructor: dipanggil otomatis saat kita membuat objek baru dengan "new Book(...)"
    // Parameter di sini adalah data yang dikirim saat objek dibuat
    constructor(
        title: string,
        pages: number,
        author: string,
        type: string,
        stock: number
    ) {
        // "this" merujuk ke objek yang sedang dibuat
        // Kita mengisi atribut objek dengan nilai dari parameter
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.type = type;
        this.stock = stock;
    }

    // Method borrow(): perilaku "meminjam buku"
    borrow() {
        // Cek apakah stok sudah habis
        if (this.stock === 0) {
            // Jika stok 0, lempar error supaya program berhenti dengan pesan
            throw new Error("Book is out of stock");
        }

        // Kurangi stok sebanyak 1
        this.stock--;

        // Tampilkan pesan sukses ke console
        console.log(
            `Buku "${this.title}" berhasil dipinjam. Stok tersisa: ${this.stock}`
        );
    }

    // Method returnBook(): perilaku "mengembalikan buku"
    returnBook() {
        // Tambah stok sebanyak 1
        this.stock++;

        // Tampilkan pesan sukses
        console.log(
            `Buku "${this.title}" berhasil dikembalikan. Stok: ${this.stock}`
        );
    }
}

// CLASS MEMBER
// Class ini adalah cetak biru untuk objek Anggota Perpustakaan

class Member {
    // Atribut anggota
    name: string;                   // Nama anggota
    studentId: string;              // NIM / ID mahasiswa
    private borrowedBooks: Book[];  // Daftar buku yang sedang dipinjam (PRIVATE = hanya bisa diakses di dalam class ini)

    // Constructor untuk membuat anggota baru
    constructor(name: string, studentId: string) {
        this.name = name;
        this.studentId = studentId;
        this.borrowedBooks = [];    // Awalnya array kosong (belum pinjam buku apapun)
    }

    // Method borrow(): anggota meminjam sebuah buku
    borrow(book: Book) {
        // Cek apakah anggota sudah meminjam 3 buku atau lebih
        if (this.borrowedBooks.length >= 3) {
            // Jika sudah 3, tolak dan lempar error
            throw new Error(
                `${this.name} sudah mencapai batas maksimal 3 buku!`
            );
        }

        // Panggil method borrow() milik buku (stok buku berkurang)
        book.borrow();

        // Masukkan buku ke dalam daftar pinjaman anggota
        this.borrowedBooks.push(book);

        // Tampilkan pesan
        console.log(`${this.name} meminjam buku "${book.title}".`);
    }

    // Method returnBook(): anggota mengembalikan sebuah buku
    returnBook(book: Book) {
        // Cari posisi buku di dalam array borrowedBooks
        const index = this.borrowedBooks.indexOf(book);

        // Jika buku tidak ditemukan di daftar pinjaman
        if (index === -1) {
            throw new Error(
                `${this.name} tidak meminjam buku "${book.title}".`
            );
        }

        // Hapus buku dari daftar pinjaman (mulai dari index, hapus 1 item)
        this.borrowedBooks.splice(index, 1);

        // Panggil method returnBook() milik buku (stok buku bertambah)
        book.returnBook();

        // Tampilkan pesan
        console.log(`${this.name} mengembalikan buku "${book.title}".`);
    }
}

// MEMBUAT OBJEK BOOK (3 buah)
const book1 = new Book(
    "Laskar Pelangi", 529, "Andrea Hirata", "Novel", 10
);

const book2 = new Book(
    "Bumi", 440, "Tere Liye", "Novel", 5
);

const book3 = new Book(
    "Kancil", 40, "Nadrian", "Cerpen", 3
);

// ============================================================
// MEMBUAT OBJEK MEMBER (2 buah)
// ============================================================
const member1 = new Member("Akmal", "2413045");
const member2 = new Member("Dhani", "2413037");

// ============================================================
// PENGUJIAN: PEMINJAMAN
// ============================================================
console.log("\n=== Pengujian Peminjaman ===");

// Member 1 (Akmal) meminjam 3 buku (batas maksimal)
member1.borrow(book1);
member1.borrow(book2);
member1.borrow(book3);

// Member 2 (Dhani) meminjam book1 (stok book1 sudah berkurang)
member2.borrow(book1);

// PENGUJIAN: PENGEMBALIAN
console.log("\n=== Pengujian Pengembalian ===");

// Akmal mengembalikan book1
member1.returnBook(book1);

// PENGUJIAN: PINJAM LAGI SETELAH PENGEMBALIAN
console.log("\n=== Peminjaman Setelah Pengembalian ===");

// Akmal meminjam book1 lagi (sekarang boleh karena jumlah pinjaman < 3)
member1.borrow(book1);