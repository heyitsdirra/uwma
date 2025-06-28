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
    let token = document.getElementById("tokenInput").value.trim().toLowerCase();

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
