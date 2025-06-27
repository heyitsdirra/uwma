document.addEventListener("DOMContentLoaded", function () {
    showPage("home-page");
});

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

// Cek Token & Ambil Data dari surat.json
function cekToken() {
    const token = document.getElementById("tokenInput").value.trim().toLowerCase();

    // Cek tanggal dulu
    const today = new Date();
    const bukaTanggal = new Date("2025-06-27");

    if (today < bukaTanggal) {
        alert("🎁 Suratnya belum bisa dibuka, yaa. Silakan kembali pada tanggal 28 Juni 2025!");
        return; // Stop di sini kalau tanggal belum cukup
    }

    fetch("surat.json")
        .then(response => response.json())
        .then(data => {
            if (data[token]) {
                document.getElementById("isiSurat").innerText = data[token];
                showPage("letter-page");
            } else {
                alert("Invalid Code! Try Again.");
            }
        })
        .catch(error => console.error("Error loading letter data:", error));
}

// Kembali ke Halaman Awal
function kembaliKeAwal() {
    document.getElementById("tokenInput").value = "";
    showPage("home-page");
}
