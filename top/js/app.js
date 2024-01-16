const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade", // フェード切り替え
  // width: 540,
  // height: 500, 
  // 自動再生
  autoplay: {
    delay: 4000, // 4秒後に次のスライドへ
    disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
  },
  speed: 2000, // 2秒かけてフェード
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
