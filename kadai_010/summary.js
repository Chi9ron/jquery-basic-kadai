$(function(){

  // 1. 文字色変化ボタン
  $('#change-color').on('click', function(){
    // CSSの color プロパティを赤色に変更
    $('#target').css('color', 'red');
  });

  // 2. 文字内容変化ボタン
  $('#change-text').on('click', function(){
    // テキスト内容を新しいメッセージに切り替え
    $('#target').text('ありがとう！');
  });

  // 3. フェードアウトボタン
  $('#fade-out').on('click', function(){
    // 要素をフェードアウト（徐々に透明にして非表示）する
    $('#target').fadeOut();
  });

  // 4. フェードインボタン
  $('#fade-in').on('click', function(){
    // 要素をフェードイン（徐々に表示）する
    $('#target').fadeIn();
  });
});