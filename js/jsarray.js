// BÀI TẬP MẢNG
// Khai báo các mảng sử dụng trong chương trình
let mangNguyen = []
let mangMoi = []

// 0. Hàm thêm số nguyên vào mảng
document
  .getElementById("formNhapMang")
  .addEventListener("submit", function (e) {
    e.preventDefault()
    let soNguyenN = parseInt(document.getElementById("soNguyenN").value)
    mangNguyen.push(soNguyenN)
    document.getElementById("xuatMang").innerText = mangNguyen.join(", ")
    document.getElementById("formNhapMang").reset()
  })

// 1. Hàm tính tổng các số dương trong mảng
document
  .getElementById("btnTongSoDuong")
  .addEventListener("click", function () {
    let tongSoDuong = mangNguyen.reduce(
      (sum, num) => (num > 0 ? sum + num : sum),
      0
    )
    document.getElementById("xuatTongSoDuong").innerText = tongSoDuong
  })

// 2. Hàm đếm số dương trong mảng
document.getElementById("btnDemSoDuong").addEventListener("click", function () {
  let soLuongSoDuong = mangNguyen.filter((num) => num > 0).length
  document.getElementById("xuatDemSoDuong").innerText = soLuongSoDuong
})

// 3. Hàm tìm số nhỏ nhất trong mảng
document
  .getElementById("btnTimSoNhoNhat")
  .addEventListener("click", function () {
    let soNhoNhat = Math.min(...mangNguyen)
    document.getElementById("xuatTimSoNhoNhat").innerText = soNhoNhat
  })

// 4. Hàm tìm số dương nhỏ nhất trong mảng
document
  .getElementById("btnTimSoDuongNhoNhat")
  .addEventListener("click", function () {
    let soDuongNhoNhat = Math.min(...mangNguyen.filter((num) => num > 0))
    document.getElementById("xuatTimSoDuongNhoNhat").innerText = soDuongNhoNhat
  })

// 5. Hàm tìm số chẵn cuối cùng trong mảng
document
  .getElementById("btnTimSoChanCuoiCung")
  .addEventListener("click", function () {
    let soChanCuoiCung = -1
    for (let i = mangNguyen.length - 1; i >= 0; i--) {
      if (mangNguyen[i] % 2 === 0) {
        soChanCuoiCung = mangNguyen[i]
        break
      }
    }
    document.getElementById("xuatTimSoChanCuoiCung").innerText = soChanCuoiCung
  })

// 6. Hàm đổi chỗ 2 giá trị trong mảng
document.getElementById("formDoiCho").addEventListener("submit", function (e) {
  e.preventDefault()
  let viTri1 = parseInt(document.getElementById("soViTri1").value)
  let viTri2 = parseInt(document.getElementById("soViTri2").value)
  let mangDoiCho = [...mangNguyen]
  ;[mangDoiCho[viTri1], mangDoiCho[viTri2]] = [
    mangDoiCho[viTri2],
    mangDoiCho[viTri1],
  ]
  document.getElementById("xuatMangDoiCho").innerText = mangDoiCho.join(", ")
  document.getElementById("formDoiCho").reset()
})

// 7. Hàm sắp xếp mảng theo thứ tự tăng dần
document
  .getElementById("btnSapXepMangTangDan")
  .addEventListener("click", function () {
    let mangTangDan = [...mangNguyen].sort((a, b) => a - b)
    document.getElementById("xuatSapXepMangTangDan").innerText =
      mangTangDan.join(", ")
  })

// 8. Hàm tìm số nguyên tố đầu tiên trong mảng
document
  .getElementById("btnTimSoNguyenToDauTien")
  .addEventListener("click", function () {
    function isPrime(num) {
      if (num <= 1) return false
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
      }
      return true
    }
    let soNguyenToDauTien = mangNguyen.find((num) => isPrime(num)) || -1
    document.getElementById("xuatTimSoNguyenToDauTien").innerText =
      soNguyenToDauTien
  })

// 9. Hàm thêm số vào mảng mới
document
  .getElementById("formNhapMangMoi")
  .addEventListener("submit", function (e) {
    e.preventDefault()
    let soMoi = parseFloat(document.getElementById("soMoi").value)
    mangMoi.push(soMoi)
    document.getElementById("xuatMangMoi").innerText = mangMoi.join(", ")
    document.getElementById("formNhapMangMoi").reset()
  })

// 9. Hàm đếm số nguyên trong mảng mới
document
  .getElementById("btnDemSoNguyen")
  .addEventListener("click", function () {
    let soLuongSoNguyen = mangMoi.filter((num) => Number.isInteger(num)).length
    document.getElementById("xuatDemSoNguyen").innerText = soLuongSoNguyen
  })

// 10. Hàm so sánh số lượng số dương và số lượng số âm
document
  .getElementById("btnSoSanhDuongVaAm")
  .addEventListener("click", function () {
    let soLuongSoDuong = mangNguyen.filter((num) => num > 0).length
    let soLuongSoAm = mangNguyen.filter((num) => num < 0).length
    let ketQuaSoSanh = ""
    if (soLuongSoDuong > soLuongSoAm) {
      ketQuaSoSanh = "Số Dương > Số Âm"
    } else if (soLuongSoDuong < soLuongSoAm) {
      ketQuaSoSanh = "Số Dương < Số Âm"
    } else {
      ketQuaSoSanh = "Số Dương = Số Âm"
    }
    document.getElementById("xuatSoSanhDuongVaAm").innerText = ketQuaSoSanh
  })
