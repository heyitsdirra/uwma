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

    fetch("surat.json?v=" + Date.now())
    .then(response => {
        console.log("Status:", response.status);
        if (!response.ok) throw new Error("HTTP error " + response.status);
        return response.json();
    })
    .then(data => {
        console.log("Data surat loaded:", data); // Tambahin ini!
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
