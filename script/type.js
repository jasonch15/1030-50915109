$(document).ready(function () {
  $("#datepicker").datepicker({
    changeMonth: true, // 允許選擇月份
    changeYear: true, // 允許選擇年份
  });
});

$(document).ready(function () {
  $(".datepicker_toMIDDLE").on("click", function () {
    // 要顯示的程式碼
    const code = `
 var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    loop: false,
    onBegin: function(self) { prettyLog('onBegin ' + self) },
    onComplete: function(self) { prettyLog('onCmplete ' + self) },
    preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    onReset: function(self) { prettyLog('onReset ' + self) },
    onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    onDestroy: function(self) { prettyLog('onDestroy ' + self) }
  });
        `;

    // 使用 SweetAlert2 顯示程式碼
    Swal.fire({
      title: "程式碼示例",
      html: `<pre><code>${code}</code></pre>`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: "好",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "取消",
      cancelButtonAriaLabel: "Thumbs down",
    });
  });

  $(".web_toMIDDLE").on("click", function () {
    const code = `

var glideMulti = new Glide('.multi', {
  type: 'slider',
  autoplay: 4000,
  focusAt: 'center',
  perView: 2
});

var glideMulti1 = new Glide('.multi1', {
  type: 'carousel',
  autoplay: 3500,
  perView: 3
});

var glideHeroPeek = new Glide('.heropeek', {
  type: 'carousel',
  animationDuration: 1000,
  autoplay: 3000,
  focusAt: '1',
  startAt: 1,
  perView: 1,
   // set a value to show the previous and next slides peeking in
  peek: {
    before: 20,
    after: 20
  },
  gap: 0
});

var glideHero = new Glide('.hero', {
  type: 'carousel',
  animationDuration: 2000,
  autoplay: 4500,
  focusAt: '1',
  startAt: 3,
  perView: 1, 
});

glideMulti.mount();
glideMulti1.mount();
glideHeroPeek.mount();
glideHero.mount();




        `;
    Swal.fire({
      title: "程式碼示例",
      text: `${code}`,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: "好",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "取消",
      cancelButtonAriaLabel: "Thumbs down",
      customClass: {
        popup: "swal2-custom-width", // 自定義類
      },
    });
  });
});
