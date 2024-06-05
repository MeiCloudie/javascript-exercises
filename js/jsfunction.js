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
