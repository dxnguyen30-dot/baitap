let toan = Number(prompt("Nhập điểm toán: "));
let anh = Number(prompt("Nhập điểm anh: "));
let sinh = Number(prompt("Nhập điểm sinh: "));
if (isNaN(toan) || isNaN(anh) || isNaN(sinh)) {
    console.error("Lỗi: Điểm nhập vào không hợp lệ!");
} else {
let TBdiem = (toan+anh+sinh)/3;
let XepLoai = "";
if (TBdiem >= 8.5){
    XepLoai = "Giỏi"
}else if(TBdiem >= 6.5){
    XepLoai = "Khá"
}else if(TBdiem >= 5.0){
      XepLoai = "Trung bình"
}else{
      XepLoai = "Yếu"
}
console.log(`Điểm trung bình của bạn là: ${TBdiem.toFixed(2)}`);
console.log(`Xếp loại học lực: ${XepLoai}`);

}
