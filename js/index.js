$(".link").unwrap();

function loadMain(fileName) {
  document.body.style.backgroundImage = "url('img/" + fileName + ".jpg')";
  $('main').hide('fast');

  if(fileName === "contact"){
    $("main").load("views/contact.php");
    changeSelectedLink(fileName);
  } else{
    $("main").load("views/" + fileName + ".html");
    changeSelectedLink(fileName);
  }
  $("main").show('slow');
}

function changeSelectedLink(link) {
  $("div button span").each(function() {
    if($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    }
    if($(this).hasClass(link)) {
      $(this).addClass("selected");
    }
  });
}
