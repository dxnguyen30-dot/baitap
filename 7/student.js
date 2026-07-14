export class Student {
    constructor (ten , diem){
        this.ten = ten;
        this.diem = diem;
    }
    xepLoai (){
        if (this.diem >=8.5) return "Giỏi";
        if (this.diem >=7.0) return "Khá";
        if (this.diem >=6.0) return "Trung bình";
        return "Yếu";
    }
diemDat (){
    return this.diem >=5.0;
}
} 