// 用于加载头文件，footer 的 js 文件
// 使用 XMLHttpRequest 加载头文件
var headerxhr = new XMLHttpRequest();
headerxhr.onreadystatechange = function () {
    if (headerxhr.readyState === 4 && headerxhr.status === 200) {
        // 将导航栏内容插入到当前页面的指定元素中
        document.getElementById('header-container').innerHTML = headerxhr.responseText;
    }
};
headerxhr.open('GET', 'commonHTML/header.html', true);

headerxhr.send();

// 使用 XMLHttpRequest 加载并插入导航栏
var navXhr = new XMLHttpRequest();
navXhr.onreadystatechange = function () {
    if (navXhr.readyState === 4 && navXhr.status === 200) {
        document.getElementById('nav-container').innerHTML = navXhr.responseText;
    }
};
navXhr.open('GET', 'commonHTML/nav.html', true);
navXhr.send();

// 使用 XMLHttpRequest 加载并插入页脚
var footerXhr = new XMLHttpRequest();
footerXhr.onreadystatechange = function () {
    if (footerXhr.readyState === 4 && footerXhr.status === 200) {
        document.getElementById('footer-container').innerHTML = footerXhr.responseText;
    }
};
footerXhr.open('GET', 'commonHTML/footer.html', true);
footerXhr.send();
