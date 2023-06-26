function Login() {
  //   event.preventDefault(); // Ngăn chặn form submit mặc định của trình duyệt
  var email = document.getElementById("email").value;
  var password = document.getElementById("pw").value;

  // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
  if (email === "nglienhg000@gmail.com" && password === "012") {
    // Nếu hợp lệ, chuyển hướng sang trang khác
    alert("Login Success!");
    window.location.href = "infor.html";
  } else {
    // Nếu không hợp lệ, hiển thị thông báo lỗi
    alert("Email or password is incorrect!");
  }
}

function Signup() {
  // var email_s = document.getElementById("email_s").value;
  var password_s = document.getElementById("password_s").value;
  var confirm_s = document.getElementById("confirm-password_s").value;

  if (password_s != confirm_s) {
    alert("Confirmation password is incorrect!");
  } else {
    alert("Signup Success");
    window.location.href = "login.html";
  }
}
