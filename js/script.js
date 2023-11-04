/* input*/
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateLogin() {
    var email = document.getElementById("email-input").value;
    var error = document.getElementById("error-msg");
    var userInfoForm = document.getElementById("user-info-form");
    var userEmail = document.getElementById("user-email");

    if (!validateEmail(email)) {
        error.innerHTML = "Email không hợp lệ! Vui lòng nhập lại.";
        error.classList.remove("hide");
        userInfoForm.classList.add("hide");
    } else {
        error.classList.add("hide");
        userEmail.innerHTML = email;
        userInfoForm.classList.remove("hide");
        document.getElementById("login-form").classList.add("hide");

    }
}

function validateEmail(email) {
    return regex.test(email);
}

/* view-moro*/
window.addEventListener("DOMContentLoaded", (event) => {// để đảm bảo rằng mã JavaScript sẽ được thực thi khi tài liệu HTML đã được tải hoàn toàn.
    const skillTitles = document.querySelectorAll(".skill-title");

    skillTitles.forEach((title) => {// vòng lặp forEach
        title.addEventListener("click", () => { // sự kiện Click gắn vào phần tử title
            const skillDetails = title.nextElementSibling;
            const viewMore = title.querySelector(".view-more");
            const viewLess = title.querySelector(".view-less");

            if (skillDetails.style.display === "none") { // dùng để kt trạng thái hiển thị
                skillDetails.style.display = "block";
                viewMore.style.display = "none";
                viewLess.style.display = "inline";
            } else {
                skillDetails.style.display = "none";
                viewMore.style.display = "inline";
                viewLess.style.display = "none";
            }
        });
    });
});