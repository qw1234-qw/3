document.addEventListener('DOMContentLoaded', function() {
    var openOrDownloadBtn = document.getElementById('openOrDownloadBtn');
    var qqMailUrlScheme = 'qqmail://im/chat?chat_type=wpa&uin=3566935805&version=1&src_type=web&mail_type=compose&to=3566935805@qq.com';
    var downloadUrl = 'https://app.mail.qq.com/cgi-bin/mailapp?latest=match&apv=webmail';
    var returnUrl = 'index.html'; // 返回的页面

    openOrDownloadBtn.addEventListener('click', function() {
        // 尝试打开 QQ 邮箱应用
        window.location.href = qqMailUrlScheme;

        // 设置定时器，用于检查是否成功打开 QQ 邮箱
        setTimeout(function() {
            // 如果未成功打开 QQ 邮箱，则进行下载跳转
            window.location.href = downloadUrl;

            // 设置另一个定时器，返回到 index.html
            setTimeout(function() {
                window.location.href = returnUrl;
            }, 3000); // 设定合适的时间，例如3秒
        }, 2000); // 等待2秒以检查应用是否打开
    });
});