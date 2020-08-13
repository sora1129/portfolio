$(function() {
  // navbar open
  $('.menu-icon').click(function() {
    $('#navbar').animate({'marginRight':'400px'},300)
  });

// navbar close
$('#close').click(function() {
  $('#navbar').animate({'marginRight':'0px'},300)
});

// navbar pagelink
$('#navbar a, #footer a').click(function() {
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
    'scrollTop': position
  },500);
});

  // work-list
  $('.work-list').hover(
    function() {
      $(this).find('#item-content').fadeIn('item-active')
  },
  function() {
    $(this).find('#item-content').fadeOut('item-active')
    }
);

  // work-content open
  // モーダルのボタンをクリックした時
  $('.work-list').on('click', function() {
    var btnIndex = $(this).index(); // 何番目のモーダルボタンかを取得
    $('.work_box').eq(btnIndex).fadeIn(); // クリックしたモーダルボタンと同じ番目のモーダルを表示する
  });

  // work-content close
  $('#close_content , .modal_bg').click(function(){
    $('.work_box').fadeOut(); // モーダルを非表示にする
  });



// form
  $('.form a').hover(
    function() {
      $('.form span').css('font-size','48px')
    },
    function() {
      $('.form span').css('font-size','38px')
    }
  );

});