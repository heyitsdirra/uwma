document.addEventListener("DOMContentLoaded", function () {
    showPage(0);
});

let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.toggle("active", i === index);
    });
    currentPage = index;
}

function cekToken() {
    let token = document.getElementById("tokenInput").value.trim().toLowerCase();
    let suratData = {
        "ratna": "Kamu luar biasa! 💖",
        "shofiyya": "Jangan pernah berhenti bersinar ✨",
        "ellisya": "Aku akan selalu ingat kamu! 🌸",
        "bening": "Persahabatan kita seperti cerita dongeng, penuh kenangan indah! 🩷"
    };

    if (suratData[token]) {
        document.getElementById("isiSurat").innerText = suratData[token];
        showPage(1);
    } else {
        alert("Kode tidak valid! Coba lagi 💕");
    }
}

function kembaliKeAwal() {
    showPage(0);
    document.getElementById("tokenInput").value = "";
}
