let modal = document.getElementById("subscription-modal");
let subscribe = document.getElementById("subscribe");
let confirm = document.querySelector(".modal-footer .confirm");
let cancel = document.querySelector(".modal-footer .cancel");

subscribe.onclick = function() {
    modal.style.display = "block";
};
confirm.onclick = function() {
    modal.style.display = "none";
    alert("Подписка оформлена");
};
cancel.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
