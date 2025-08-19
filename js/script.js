const burger = document.getElementById("burger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeSidebar = document.getElementById("closeSidebar");

burger.addEventListener("click", () => {
    sidebar.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("hidden");
});

document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const content = item.querySelector(".faq-answer");
    const arrow = item.querySelector(".arrow");

    btn.addEventListener("click", () => {
        const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

        // Tutup semua dulu (biar kayak accordion)
        document.querySelectorAll(".faq-answer").forEach((el) => {
            el.style.maxHeight = "0px";
        });
        document.querySelectorAll(".arrow").forEach((a) => {
            a.style.transform = "rotate(0deg)";
        });

        // Kalau yang diklik sebelumnya tertutup → buka
        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
            arrow.style.transform = "rotate(180deg)";
        }
    });
});

AOS.init({
    duration: 1000,
    once: true,
});
