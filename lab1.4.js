document.getElementById("myForm").addEventListener("submit", function(event) {
    var username = document.getElementById("exampleInputName").value;
    var usernameError = document.getElementById("usernameError");
    var regex = /^[a-zA-Z0-9]/; // Biểu thức chính quy để kiểm tra ký tự
    var morethan2words = /^.{2,}$/; 
    
    if (username === "") {
        usernameError.textContent = "Vui lòng điền vào trường username.";
        event.preventDefault(); // Ngăn chặn submit form nếu trường username trống
    } else if (!regex.test(username)) {
        usernameError.textContent = "Username không được chứa ký tự đặc biệt ";
        event.preventDefault(); // Ngăn chặn submit form nếu trường username không hợp lệ
    } else if (!morethan2words.test(username)) {
        usernameError.textContent = "Username phải chứa ít nhất hai ký tự.";
        event.preventDefault(); // Ngăn chặn submit form nếu trường username không hợp lệ
    } else {
        usernameError.textContent = ""; // Xóa thông báo lỗi nếu trường username hợp lệ
    }
});

let changeColor = (element) => {
    element.style.backgroundColor = "gray";
}
let resetColor = () => {
    let imageContainers = document.getElementsByClassName("card shadow mb-3");
    for (var i = 0; i < imageContainers.length; i++) {
        imageContainers[i].style.backgroundColor = "";
    }
}