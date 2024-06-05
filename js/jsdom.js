// BÀI TẬP 1
document.getElementById("formTinhTienLuongNV").onsubmit = function (event) {
  // Ngăn chặn hành vi mặc định của form khi submit
  event.preventDefault()

  // Lấy giá trị từ các input
  var luong1Ngay = document.getElementById("luong1Ngay").value
  var soNgayLam = document.getElementById("soNgayLam").value

  // Tính toán lương
  var tongLuong = luong1Ngay * soNgayLam

  // Hiển thị kết quả
  document.getElementById("xuatLuong").innerText =
    tongLuong.toLocaleString("vi", {
      currency: "VND",
      //   style: "currency",
    }) + " VND"
}

//BÀI TẬP 2
document.getElementById("formTinhGiaTriTrungBinh").onsubmit = function (event) {
  // Ngăn chặn hành vi mặc định của form khi submit
  event.preventDefault()

  // Lấy giá trị từ các input
  var soThuNhat = parseFloat(document.getElementById("soThuNhat").value)
  var soThuHai = parseFloat(document.getElementById("soThuHai").value)
  var soThuBa = parseFloat(document.getElementById("soThuBa").value)
  var soThuTu = parseFloat(document.getElementById("soThuTu").value)
  var soThuNam = parseFloat(document.getElementById("soThuNam").value)

  // Tính toán giá trị trung bình
  var tong = soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam
  var giaTriTrungBinh = tong / 5

  // Hiển thị kết quả
  document.getElementById("xuatTrungBinh").innerText = giaTriTrungBinh
}
