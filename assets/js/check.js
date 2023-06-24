function Login() {
  //   event.preventDefault(); // Ngăn chặn form submit mặc định của trình duyệt
  var email = document.getElementById("email").value;
  var password = document.getElementById("pw").value;

  // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
  if (email === "nglienhg000@gmail.com" && password === "012") {
    // Nếu hợp lệ, chuyển hướng sang trang khác
    alert("đăng nhập thành công!");
    window.location.href = "infor.html";
  } else {
    // Nếu không hợp lệ, hiển thị thông báo lỗi
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
}
function Login() {
  //   event.preventDefault(); // Ngăn chặn form submit mặc định của trình duyệt
  var email = document.getElementById("email").value;
  var password = document.getElementById("pw").value;

  // Kiểm tra nếu tên đăng nhập và mật khẩu hợp lệ
  if (email === "nglienhg000@gmail.com" && password === "012") {
    // Nếu hợp lệ, chuyển hướng sang trang khác
    alert("đăng nhập thành công!");
    window.location.href = "infor.html";
  } else {
    // Nếu không hợp lệ, hiển thị thông báo lỗi
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
  }
}

function Signup() {
  var password_s = document.getElementById("password_s").value;
  var confirm_s = document.getElementById("confirm-password_s").value;

  if (password_s === confirm_s) {
    alert("Đăng ký thành công!");
    window.location.href = "login.html";
  } else {
    alert("Mật khẩu xác nhận không chính xác!");
  }
}

