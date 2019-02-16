   

      $(document).ready(function(){
$('a').addClass("linkContainer nav-link practice")
// $(".practice").hide();

// $(".card").mouseenter(function(){
//   $(".practice").show("slow");
// })

// $(".card").mouseleave(function(){
//   $(".practice").hide();
// })

function mouseEnter() {
  $(document).$(".practice").style.display = "inline-block";
}

function mouseLeave() {
  $(document).$(".practice").style.display = "none";
}
      })
