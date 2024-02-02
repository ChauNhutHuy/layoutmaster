function load(selector, path) {
  const cached = localStorage.getItem(path);
  if (cached) {
    document.querySelector(selector).innerHTML = cached;
  }

  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      if (html !== cached) {
        document.querySelector(selector).innerHTML = html;
        localStorage.setItem(path, html);
      }
    });
}

var taiKhoan = [];

function dangKy() {
  var tenDangNhap = document.getElementById("account__email").value;
  var matKhau = document.getElementById("password").value;

  if (kiemTraTonTai(tenDangNhap)) {
    alert("Tài khoản đã tồn tại. Vui lòng chọn tên đăng nhập khác.");
  } else {
    taiKhoan.push({ tenDangNhap: tenDangNhap, matKhau: matKhau });
    alert(
      "Đăng ký thành công!\nTên đăng nhập: " +
        tenDangNhap +
        "\nMật khẩu: " +
        matKhau
    );

    // In giá trị của taiKhoan ra console
    console.log("Danh sách tài khoản sau khi đăng ký:", taiKhoan);
  }
}

function kiemTraTonTai(tenDangNhap) {
  return taiKhoan.some(function (tk) {
    return tk.tenDangNhap === tenDangNhap;
  });
}

function dangNhap() {
  var tenDangNhap = document.getElementById("account__email").value;
  var matKhau = document.getElementById("password").value;

  // Kiểm tra thông tin đăng nhập
  var taiKhoanTonTai = taiKhoan.find(function (tk) {
    return tk.tenDangNhap === tenDangNhap && tk.matKhau === matKhau;
  });

  if (taiKhoanTonTai) {
    alert("Đăng nhập thành công!\nTên đăng nhập: " + tenDangNhap);
    // Chuyển hướng tới trang chủ
    window.location.href = "index.html";
  } else {
    alert(
      "Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập."
    );
  }
}
