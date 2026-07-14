import { Student } from "./student.js";
export class studentManager {
    constructor(){
      this.danhSach = [];   
    }
    ThemSinhVien(ten,diem){
        const sv = new Student(ten,diem);
        this.danhSach.push(sv);
        return sv;
    }
    XoaSinhVien(ten){
        this.danhSach=this.danhSach.filter(sv => sv.ten !== ten);
    }
    TimSinhVien(ten){
        const sv = this.danhSach.find(sv => sv.ten === ten);
        return sv;
    }
    layXepLoaiTheoTen(ten){
        const sv = this.TimSinhVien(ten);
        return sv?.xepLoai() ?? "Không tìm thấy sinh viên";
    }
    tinhDiemTB(){
        if (this.danhSach.length === 0) return 0;
        const tong = this.danhSach.reduce((sum, sv) => sum + sv.diem, 0);
        return tong / this.danhSach.length;
    }
    LocSinhVien(){
        return this.danhSach.filter(sv=>sv.diemDat());
    }
    hienThi() {
        this.danhSach.forEach(sv => {
        console.log(`${sv.ten} - ${sv.diem} điểm - Xếp loại: ${sv.xepLoai()}`);
    });
    }

    
}