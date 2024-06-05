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
