// ナビバーとその元の位置を取得
const header = document.getElementById('main-header');
const initialHeaderPosition = header.offsetTop;

let lastScrollY = window.scrollY; // 前回のスクロール位置を保持

// スクロールイベントを監視
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // 下にスクロールしてヘッダーが画面上部に達したら固定
  if (currentScrollY > lastScrollY && header.getBoundingClientRect().top <= 0) {
    header.classList.add('fixed');
  }

  // 上にスクロールして元の位置に戻ったら固定解除
  if (currentScrollY < lastScrollY && currentScrollY <= initialHeaderPosition) {
    header.classList.remove('fixed');
  }

  // 現在のスクロール位置を更新
  lastScrollY = currentScrollY;
});
