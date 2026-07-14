let DanhsachSV = [
    { ten:"A", diem: 7.5 },
    { ten:"B", diem: 5.0 },
    { ten:"C", diem: 9.2},
    { ten:"D", diem: 3.3},
]

    const DanhSachTen = () => {
    
        const danhSachTen = DanhsachSV.map(sv => sv.ten);
    
        console.log("Danh sách tên sinh viên :", danhSachTen);
};
    const ThemSinhVien = (TenMoi , DiemMoi) => {
        DanhsachSV.push({ten:TenMoi , diem:DiemMoi});
        console.log(`=> Đã thêm sinh viên: ${TenMoi}`);
        
    }
    const XoaSinhVien =(TenCanXoa) =>{
        DanhsachSV = DanhsachSV.filter(sv => sv.ten !== TenCanXoa );
        console.log(`=> Đã xóa sinh viên: ${TenCanXoa}`);
    }
    const TimSinhVien = (TenSinhVien) => {
        let KetQua = DanhsachSV.filter(sv => sv.ten.includes(TenSinhVien));
        console.log(`\n[Kết quả tìm kiếm cho "${TenSinhVien}"]`);
        console.table(KetQua);

    }
    const locSinhVien = () =>{
        let sinhviendat = DanhsachSV.filter(sv => sv.diem >= 5.0)
        console.log("\n[Danh sách sv đạt: ]");
        console.table(sinhviendat);
    } 
    const diemTBlop = () => {
        let TongDiem = DanhsachSV.reduce((sum,sv)=> sum +sv.diem ,0);
        let TBdiem = TongDiem / DanhsachSV.length;
        console.log(`\n=>Điểm TB của tất cả Sv là: ${TBdiem.toFixed(2)}`);
    }
    const inDanhSach = (tieuDe) => {
    console.log(`\n--- ${tieuDe} ---`);
    console.table(DanhsachSV);
}
inDanhSach("Danh sách ban đầu:");
DanhSachTen();
ThemSinhVien("E",7.0);
inDanhSach("Danh sách sau khi thêm:");
XoaSinhVien("B");
inDanhSach("Danh sách sau khi xóa:");
TimSinhVien("A");
locSinhVien();
diemTBlop();
renderUI();