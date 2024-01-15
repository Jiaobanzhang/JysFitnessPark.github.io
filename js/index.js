// 变量初始化
var slideIndex = 1;
// 初始化显示第一张幻灯片
showSlides(slideIndex);

// 接收一个参数 n，表示要切换的幻灯片的相对偏移量。
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// 调用 showSlides 函数，并将 slideIndex 设置为传递的值，以直接跳转到指定的幻灯片。
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 根据传递的索引值 n 显示对应的幻灯片
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("image-container");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // 给 这个 dots 添加 "active" 类
    dots[slideIndex - 1].className += " active";
}