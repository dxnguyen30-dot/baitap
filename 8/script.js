const API_URL = "https://jsonplaceholder.typicode.com/posts"
const SO_BAI_HIEN_THI = 10;
const statusBox = document.querySelector("#statusBox");
const postList = document.querySelector("#postList");
const reloadBtn = document.querySelector("#reloadBtn");
function hienthiLoading(){
    statusBox.innerHTML = `<p class = "loading-text">Đang tải dữ liệu</p>`;
    postList.innerHTML=""; 
}
function hienthiLoi(thongBao){
    statusBox.innerHTML = `<div class = "error-box">Đã xảy ra lỗi: ${thongBao}.</div>`
}
function hienthiDanhSach(danhSach){
    postList.innerHTML="";
    danhSach.forEach(post => {
        const div = document.createElement("div");
        div.className = "post-item";
        const h3 = document.createElement("h3");
        h3.className = "post-title";
        h3.textContent = post.title;
        const p = document.createElement("p");
        p.className = "post-body";
        p.textContent = post.body;
div.append(h3);
div.append(p);
postList.append(div);
}); 
}
async function taiDanhSach(){
    hienthiLoading();
    try{
        const response = await fetch (API_URL);
        if (!response.ok) {
            throw new Error ("server trả về lỗi"+response.status);
        }
            const data = await response.json();
            const danhSachRutGon = data.slice(0, SO_BAI_HIEN_THI);
            statusBox.innerHTML="";
            hienthiDanhSach(danhSachRutGon);
        }catch (loi){
            hienthiLoi(loi.message);

    }
}
reloadBtn.addEventListener("click", taiDanhSach);
taiDanhSach()
