// Bài 1: Viết chương trình cộng hai số
// Ý tưởng cho bài này như sau: trước tiên cần viết một hàm công hai số và nó có
// có hai tham số truyền vào, lúc này hai tham số đó chúng ta sẽ sử dụng hàm
// prompt() để lấy. Lưu ý khi lấy dữ liệu từ người dùng thì bạn nên sử dụng hàm
// parseInt() or ép kiểu Number để chuyển sang kiểu number nhé, nếu không nó sẽ
// hiểu là cộng hai chuỗi nên dẫn đến kết quả sai.
// Sử dụng Return
// function tong(a,b) {
//     var tong = a + b;
//     return tong;
// }
// let userInput1 = Number(prompt("Nhap tham so a bat ki"));
// let userInput2 = Number(prompt("Nhap tham so b bat ki"));
// console.log(tong(userInput1,userInput2));

// Bài 2. Tính tổng các số lẻ trong mảng. Sử dụng Return
/// ...

// 1.
// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào.
// Gọi hàm vừa xây dựng được.
// function binhPhuong(a){
//     return a**2;
// }
// let userInput = Number(prompt("Nhap mot so bat ki"));
// let soBinhPhuong = binhPhuong(userInput);
// console.log(soBinhPhuong);

// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn.
// Gọi hàm vừa xây dựng được
// function demo(b){
//     let dientich = b**2 * Math.PI/4
//     let chuVi = 2*b*Math.PI
//      console.log(dientich);
//      console.log(chuVi);
//      return ;
// }
// let userInput = Number(prompt("cho nguoi dung nhap duong kinh"));
// let congthuc = demo(userInput);
// console.log(congthuc);



// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ 
// được đưa vào. Gọi hàm vừa xây dựng được.
// // c1
// function giaithua(b){
//     let c = 1;
//     for (let i = b; i > 0; i = i - 1){
//         c = c*i;
//     }return c;
// }
// let userInput = Number(prompt("nhap 1 so nguyen bat ki"));
// let gan = giaithua(userInput)
// console.log(gan);
// //c2
// function giaithua(b){
//     if (b === 0){
//        return 1; 
//     }return b * giaithua(b-1);
// }
// let userInput = Number(prompt("Nhap so nguyen bat ki"));
// let ketQua = giaithua(userInput);
// console.log(`giai thua cua ${userInput} la ${ketQua}`);

// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào 
// có phải là ký tự số không. Nếu là ký tự số hàm
// trả về true, ngược lại trả về false.
/// ???????
// function isInteger(){
// return regInteger(number);
// } 
// let userInput = prompt("Nhap ki tu bat ki");
// if(isInteger(userInput)){
//     console.log(`la ky tu so`);
// }else{
//     console.log(`khong la ki tu so`);
// }

// }
// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, 
//trả về số nguyên có giá trị nhỏ nhất.

// function minArr(){
//     let a = Number(prompt("Nhap so a"));
//     let b = Number(prompt("Nhap so b"));
//     let c = Number(prompt("nhap so c"));
//     //let min = minArr[0];
// conder = Number.isInteger(a)&& Number.isInteger(b)&& Number.isInteger(c)
// if (a <= b && a <= c && conder){
//     console.log(`So nho nhat la so a : ${a}`);
// }else if(b <= a && b <= c && conder){
// console.log(`So nho nhat la so b :${b}`)
//  }else  if (c <= a && c <= b && conder){
//     console.log(`So nho nhat la so c : ${c}`);
//  }
// }
// minArr()

// Bài 6: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào 
// có phải là nguyên dương không. Nếu là nguyên dương trả về true,
// ngược lại trả về false.
function kiemTraSoNguyenDuong() {
    let userInput = Number(prompt("nhap mot so bat ki"));
    let check = Number.isInteger(userInput);
    if (check === userInput && userInput > 0) {
        console.log(`${userInput} la so nguyen duong`);
        return true;
    } else {
        console.log(`${userInput} khong phai la so nguyen duong`);
        return false;
    }
}
kiemTraSoNguyenDuong();


// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, 
// thực hiện đổi chỗ hai số nguyên đó.
// function hoanDoi(a,b){
//     console.log(a,b);
//     console.log(b,a);
// }
// let userInput1 = prompt("nhap so nguyen a bat ki");
// let userInput2 = prompt("nhap so nguyen b bat ki");
// let changes = hoanDoi(userInput1,userInput2);
// console.log(changes);

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, 
// sau đó đảo ngược mảng số nguyên đó.
// function daoNguoc(arr){
//     let c = [];
//  for(let i = arr.length; i >= 0 ; i = i - 1){
//     c = c.push(arr[i]);
//     console.log(c);
//     return;
// }
// } let userInput = prompt("Nhap mang so nguyen bat ki, duoc cach nhau boi dau phay");
// // let arr1 = userInput.split(",");
// let b = daoNguoc(userInput);
// console.log(b);

// Bài 9: Viết hàm truyền vào một mảng ký tự, 
// và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.

// function kiemTraKyTu() {
//     let userInput = prompt("Nhap mang ky tu bat ki");
//     let mang = userInput.split("");
//     let check = prompt("nhap 1 ki tu bat ki");
//     let ketQua = 0;
//     for (let i = 0; i < mang.length; i++) {
//         if (mang[i] == check) {
//             ketQua = ketQua + 1;
//         }
//     }
//     if (ketQua > 0) {
//         console.log(`Ki tu xuat hien ${ketQua} lan trong mang ky tu bat ki`);
//     } else {
//         console.log(`Ki tu ${ketQua} khong co trong mang ky tu bat ki`);
//     }
// }
// kiemTraKyTu();
 
// note : 2, 9, 4, 6 tham khao them