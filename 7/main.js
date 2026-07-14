import { studentManager } from "./studentManager.js";
const manager = new studentManager();
manager.ThemSinhVien("A",8.5);
manager.ThemSinhVien("B",5.0);
manager.ThemSinhVien("C",3.1);
manager.hienThi();
console.log("Điểm trung bình cả lớp: ",manager.tinhDiemTB().toFixed(2));
console.log("Danh sách sinh viên đạt: ");
manager.LocSinhVien().forEach(sv => console.log("-",sv.ten));
const container = document.querySelector("#output");
let currentFilter = "all";

function render(){
    container.innerHTML = "";
    const dsHienThi = currentFilter === "dat" ? manager.LocSinhVien() : manager.danhSach;

dsHienThi.forEach(sv => {
    const p = document.createElement("p");
    p.textContent = `${sv.ten} - ${sv.diem} điểm - Xếp loại: ${sv.xepLoai()}`;
    container.appendChild(p);
});

const dtp = document.createElement("p");
dtp.innerHTML = `<strong>Điểm trung bình cả lớp: ${manager.tinhDiemTB().toFixed(2)}</strong>`;
container.appendChild(dtp);
}
render();
const tenInput = document.querySelector("#tenInput");
const diemInput = document.querySelector("#diemInput");
const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", () => {
  const ten = tenInput.value.trim();
  const diem = Number(diemInput.value);

  if (ten === "") {
    alert("Vui lòng nhập tên sinh viên!");
    return;
  }
  if (isNaN(diem) || diem < 0 || diem > 10) {
    alert("Điểm không hợp lệ! Vui lòng nhập từ 0 đến 10.");
    return;
  }

  manager.ThemSinhVien(ten, diem);
  tenInput.value = "";
  diemInput.value = "";
    render();
});
const tenXoaInput = document.querySelector("#tenXoaInput");
const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", () => {
  const ten = tenXoaInput.value.trim();

  if (ten === "") {
    alert("Vui lòng nhập tên sinh viên cần xóa.");
    return;
  }
  const sv = manager.TimSinhVien(ten);
  if (!sv) {
    alert(`Không tìm thấy sinh viên "${ten}".`);
    return;
  }

  manager.XoaSinhVien(ten);
  tenXoaInput.value = "";
  render(); 
});
const tenTimInput = document.querySelector("#tenTimInput");
const searchBtn = document.querySelector("#searchBtn");
const searchResult = document.querySelector("#searchResult");

searchBtn.addEventListener("click", () => {
  const ten = tenTimInput.value.trim();
  const sv = manager.TimSinhVien(ten);
  searchResult.textContent = sv
    ? `${sv.ten} - ${sv.diem} điểm - Xếp loại: ${sv.xepLoai()}`
    : `Không tìm thấy sinh viên "${ten}"`;
});
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    
    filterBtns.forEach(b => b.className = "filter-btn");
    this.className = "filter-btn active";

    currentFilter = this.getAttribute("data-filter");
    render(); 
  });
});