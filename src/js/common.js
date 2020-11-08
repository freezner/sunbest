$(document).ready(function(){
  $(".all_menu").on("click", function(){
    if ($(".quick").css("display") == "none") {
      $(".submenu").hide();

      $(".quick").fadeIn("fast");
    } else {
      $(".quick").fadeOut("fast");
    }
  });

  $(".layout_gnb .menu a").on("mouseover", function(){
    $(".submenu").hide();
    
    if ($(this).attr("data-sub") != undefined) {
      $("#" + $(this).attr("data-sub")).fadeIn("fast");
    }
  });

  $(".submenu").on("mouseleave", function(){
    $(this).hide();
  });
});

function bluring() {
  try{
  if(event.srcElement.tagName=='A'||event.srcElement.tagName=='IMG') {
  document.body.focus();
  }
  }catch( e ) { }
  }
  try{
  document.onfocusin=bluring;
  }catch( e ) { }
  
  var rurl = location.href;
  var purl = getUrl(rurl);
  
  function getUrl(url_str)
  {
  var real_url;
  if (url_str.indexOf('/') > 0)
  {
  real_url = url_str.split('/');
  real_url = real_url[0]+'//'+real_url[2]+'/'+real_url[3]+'/';
  }
  return real_url;
  }
  
  function goLocate(go_url)
  {
  document.location = purl + go_url;
  }