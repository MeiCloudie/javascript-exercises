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

//BÀI TẬP 3
document.getElementById("formQuyDoiTien").onsubmit = function (event) {
  // Ngăn chặn hành vi mặc định của form khi submit
  event.preventDefault()

  // Lấy giá trị từ input
  var tienUSD = parseFloat(document.getElementById("tienUSD").value)

  // Giá quy đổi
  var giaQuyDoi = 23500

  // Tính toán số tiền quy đổi
  var thanhTien = tienUSD * giaQuyDoi

  // Hiển thị kết quả
  document.getElementById("xuatQuyDoiTien").innerText =
    thanhTien.toLocaleString("vi", {
      currency: "VND",
      //   style: "currency",
    }) + " VND"
}

//BÀI TẬP 4
document.getElementById("formTinhDienTichChuVi").onsubmit = function (event) {
  // Ngăn chặn hành vi mặc định của form khi submit
  event.preventDefault()

  // Lấy giá trị từ các input
  var chieuDai = parseFloat(document.getElementById("chieuDaiHCN").value)
  var chieuRong = parseFloat(document.getElementById("chieuRongHCN").value)

  // Tính diện tích và chu vi
  var dienTich = chieuDai * chieuRong
  var chuVi = (chieuDai + chieuRong) * 2

  // Hiển thị kết quả
  var ketQua = `Diện Tích: ${dienTich} - Chu Vi: ${chuVi}`
  document.getElementById("xuatDienTichChuVi").innerText = ketQua
}

//BÀI TẬP 5
document.getElementById("formTinhTongHaiKySo").onsubmit = function (event) {
  // Ngăn chặn hành vi mặc định của form khi submit
  event.preventDefault()

  // Lấy giá trị từ input
  var soCoHaiChuSo = parseInt(document.getElementById("soCoHaiChuSo").value)

  // Kiểm tra nếu số không phải là số có 2 chữ số
  if (soCoHaiChuSo < 10 || soCoHaiChuSo > 99) {
    alert("Vui lòng nhập số có 2 chữ số")
    return
  }

  // Lấy hàng đơn vị và hàng chục
  var soHangDonVi = soCoHaiChuSo % 10
  var soHangChuc = Math.floor(soCoHaiChuSo / 10)

  // Tính tổng
  var tong = soHangDonVi + soHangChuc

  // Hiển thị kết quả
  document.getElementById("xuatTong2KySo").innerText =
    soHangChuc + " + " + soHangDonVi + " = " + tong
}
