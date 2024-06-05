//BÀI TẬP 1
document.getElementById("formQuanLyTuyenSinh").onsubmit = function (event) {
  // Ngăn chặn hành vi mặc định của form khi submit
  event.preventDefault()

  // Lấy giá trị từ input
  var diemChuan = parseFloat(document.getElementById("diemChuan").value)
  var diemMonThuNhat = parseFloat(
    document.getElementById("diemMonThuNhat").value
  )
  var diemMonThuHai = parseFloat(document.getElementById("diemMonThuHai").value)
  var diemMonThuBa = parseFloat(document.getElementById("diemMonThuBa").value)

  var khuVuc = document.querySelector('input[name="khuVuc"]:checked').value
  var doiTuong = document.querySelector('input[name="doiTuong"]:checked').value

  // Kiểm tra nếu điểm nhập vào không hợp lệ
  if (
    diemMonThuNhat < 0 ||
    diemMonThuNhat > 10 ||
    diemMonThuHai < 0 ||
    diemMonThuHai > 10 ||
    diemMonThuBa < 0 ||
    diemMonThuBa > 10
  ) {
    alert("Vui lòng nhập điểm các môn trong khoảng từ 0 đến 10")
    return
  }

  // Kiểm tra nếu có môn nào bị điểm 0
  if (diemMonThuNhat === 0 || diemMonThuHai === 0 || diemMonThuBa === 0) {
    document.getElementById("xuatKetQuaTuyenSinh").innerText =
      "Bạn đã RỚT - Có môn bị điểm 0"
    return
  }

  // Tính điểm ưu tiên
  var diemKhuVuc = 0
  if (khuVuc === "A") {
    diemKhuVuc = 2
  } else if (khuVuc === "B") {
    diemKhuVuc = 1
  } else if (khuVuc === "C") {
    diemKhuVuc = 0.5
  }

  var diemDoiTuong = 0
  if (doiTuong === "DT1") {
    diemDoiTuong = 2.5
  } else if (doiTuong === "DT2") {
    diemDoiTuong = 1.5
  } else if (doiTuong === "DT3") {
    diemDoiTuong = 1
  }

  // Tính tổng điểm
  var tongDiem =
    diemMonThuNhat + diemMonThuHai + diemMonThuBa + diemKhuVuc + diemDoiTuong

  // Kiểm tra kết quả tuyển sinh
  if (tongDiem >= diemChuan) {
    document.getElementById(
      "xuatKetQuaTuyenSinh"
    ).innerText = `Bạn đã ĐẬU - Tổng điểm: ${tongDiem}`
  } else {
    document.getElementById(
      "xuatKetQuaTuyenSinh"
    ).innerText = `Bạn đã RỚT - Tổng điểm: ${tongDiem}`
  }
}

//BÀI TẬP 2
// Định nghĩa hàm tính tiền điện
function tinhTienDien(soKw) {
  var tienDien = 0
  var tien50KwDau = 50 * 500
  var tien50KwKe = 50 * 650
  var tien100KwKe = 100 * 850
  var tien150KwKe = 150 * 1100

  if (soKw <= 50) {
    tienDien = soKw * 500
  } else if (soKw <= 100) {
    tienDien = tien50KwDau + (soKw - 50) * 650
  } else if (soKw <= 200) {
    tienDien = tien50KwDau + tien50KwKe + (soKw - 100) * 850
  } else if (soKw <= 350) {
    tienDien = tien50KwDau + tien50KwKe + tien100KwKe + (soKw - 200) * 1100
  } else {
    tienDien =
      tien50KwDau + tien50KwKe + tien100KwKe + tien150KwKe + (soKw - 350) * 1300
  }
  return tienDien
}

// Xử lý khi submit form
document.getElementById("formTinhTienDien").onsubmit = function (event) {
  // Ngăn chặn hành vi mặc định của form khi submit
  event.preventDefault()

  // Lấy giá trị từ input
  var hoTen = document.getElementById("hoTen").value
  var soKw = parseFloat(document.getElementById("soNgayLam").value)

  // Tính tiền điện
  var tienDien = tinhTienDien(soKw)

  // Hiển thị kết quả
  document.getElementById(
    "xuatTienDien"
  ).innerText = `${hoTen} cần thanh toán ${tienDien.toLocaleString("vi", {
    currency: "VND",
    //   style: "currency",
  })} đồng cho tiền điện.`
}

//BÀI TẬP 3
function tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc) {
  var thueThuNhap = 0
  var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000

  if (thuNhapChiuThue <= 0) {
    thueThuNhap = 0
  } else if (thuNhapChiuThue <= 60000000) {
    thueThuNhap = thuNhapChiuThue * 0.05
  } else if (thuNhapChiuThue <= 120000000) {
    thueThuNhap = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1
  } else if (thuNhapChiuThue <= 210000000) {
    thueThuNhap =
      60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15
  } else if (thuNhapChiuThue <= 384000000) {
    thueThuNhap =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      (thuNhapChiuThue - 210000000) * 0.2
  } else if (thuNhapChiuThue <= 624000000) {
    thueThuNhap =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      (thuNhapChiuThue - 384000000) * 0.25
  } else if (thuNhapChiuThue <= 960000000) {
    thueThuNhap =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      (thuNhapChiuThue - 624000000) * 0.3
  } else {
    thueThuNhap =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      336000000 * 0.3 +
      (thuNhapChiuThue - 960000000) * 0.35
  }

  return thueThuNhap
}

// Xử lý khi submit form
document.getElementById("formTinhTienThue").onsubmit = function (event) {
  // Ngăn chặn hành vi submit mặc định của form để tránh việc reload trang
  event.preventDefault()

  // Lấy giá trị của các trường nhập liệu từ form
  var hoTenThue = document.getElementById("hoTenThue").value // Lấy họ tên người dùng
  var tongThuNhapNam = parseFloat(
    document.getElementById("tongThuNhapNam").value
  ) // Lấy tổng thu nhập năm và chuyển thành kiểu số thực
  var soNguoiPhuThuoc = parseInt(
    document.getElementById("soNguoiPhuThuoc").value
  ) // Lấy số người phụ thuộc và chuyển thành kiểu số nguyên

  // Tính thuế thu nhập cá nhân dựa trên tổng thu nhập năm và số người phụ thuộc
  var thue = tinhThueThuNhap(tongThuNhapNam, soNguoiPhuThuoc)

  // Hiển thị kết quả tính thuế trên giao diện
  document.getElementById(
    "xuatTienThue"
  ).innerText = `Thuế Thu Nhập Cá Nhân của ${hoTenThue} là: ${thue.toLocaleString(
    "vi",
    {
      currency: "VND",
      //   style: "currency",
    }
  )} VND`
}

//BÀI TẬP 4
function handleLoaiKhachHangChange() {
  const selectLoaiKhachHang = document.getElementById("selectLoaiKhachHang")
  const inputSoKetNoi = document.getElementById("soKetNoi")
  const loaiKhachHang = selectLoaiKhachHang.value
  if (loaiKhachHang === "Doanh Nghiệp") {
    inputSoKetNoi.disabled = false
  } else {
    inputSoKetNoi.disabled = true
    inputSoKetNoi.value = ""
  }
}

function calculateCableBill(event) {
  event.preventDefault()

  const selectLoaiKhachHang = document.getElementById("selectLoaiKhachHang")
  const loaiKhachHang = selectLoaiKhachHang.value
  const maKhachHang = document.getElementById("maKhachHang").value
  const soKenhCaoCap =
    parseInt(document.getElementById("soKenhCaoCao").value) || 0
  const soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0
  const ketQuaTinhTienCap = document.getElementById("xuatTienCap")

  let phiXuLyHoaDon = 0
  let phiDichVuCoBan = 0
  let phiThueKenhCaoCap = 0
  let tongTien = 0

  if (loaiKhachHang === "Nhà Dân") {
    phiXuLyHoaDon = 4.5
    phiDichVuCoBan = 20.5
    phiThueKenhCaoCap = 7.5 * soKenhCaoCap
  } else if (loaiKhachHang === "Doanh Nghiệp") {
    phiXuLyHoaDon = 15
    if (soKetNoi <= 10) {
      phiDichVuCoBan = 75
    } else {
      phiDichVuCoBan = 75 + (soKetNoi - 10) * 5
    }
    phiThueKenhCaoCap = 50 * soKenhCaoCap
  }

  tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap

  ketQuaTinhTienCap.textContent = `Mã khách hàng ${loaiKhachHang}: ${maKhachHang} có tổng tiền cáp là $${tongTien.toFixed(
    2
  )}`
}

// Gọi hàm handleLoaiKhachHangChange khi loại khách hàng thay đổi
document.getElementById("selectLoaiKhachHang").onchange =
  handleLoaiKhachHangChange

// Gọi hàm calculateCableBill khi form được submit
document.getElementById("formTinhTienCap").onsubmit = calculateCableBill

// Khởi tạo trạng thái ban đầu cho form
handleLoaiKhachHangChange()
