// ナビバーを取得
const header = document.getElementById('main-header');

// ヘッダーのオフセット位置（上からの距離）を取得
const headerOffsetTop = header.offsetTop;

// スクロールイベントを監視
window.addEventListener('scroll', () => {
  // ユーザーのスクロール位置がヘッダーのオフセット位置を超えたら固定
  if (window.scrollY > headerOffsetTop) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});
