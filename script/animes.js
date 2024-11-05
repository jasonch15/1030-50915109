let tug = true;
$(".anime").on('click', function() {
    if (tug) {
        const path = anime.path('.path path');
        anime({
            targets: '.dot',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            duration: 2000,
            easing: 'easeInOutQuad',
            loop: true // 使動畫循環
        });
    } else {
        anime.remove('.dot'); // 停止動畫
        $('.dot').css({ transform: 'none' }); // 重置位置
    }
    tug = !tug;
});

$(document).ready(function () {
    $(".anime_toMIDDLE").on("click", function () {
        // 要顯示的程式碼
        const code = `
let tug = true;
$(".anime").on('click', function() {
    if (tug) {
        const path = anime.path('.path path');
        anime({
            targets: '.dot',
            translateX: path('x'),
            translateY: path('y'),
            rotate: path('angle'),
            duration: 2000,
            easing: 'easeInOutQuad',
            loop: true // 使動畫循環
        });
    } else {
        anime.remove('.dot'); // 停止動畫
        $('.dot').css({ transform: 'none' }); // 重置位置
    }
    tug = !tug;
});
        `;

        // 使用 SweetAlert2 顯示程式碼
        Swal.fire({
            title: '程式碼示例',
            html: `<pre><code>${code}</code></pre>`,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: '好',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: 'Thumbs down',
            customClass: {
                popup: 'swal2-custom-width' // 自定義類
            }
        });
    });
});
