const cookiesCont = document.getElementById("cookies");

const acceptBtn = document.getElementById("accept");
const declineBtn = document.getElementById("decline");

acceptBtn.addEventListener("click", () => {
    cookiesCont.style.opacity = 0;
});
declineBtn.addEventListener("click", () => {
    cookiesCont.style.opacity = 0;
});