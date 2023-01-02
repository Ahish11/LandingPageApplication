$(document).ready(function () {
  $(".table_outer_menu").on("click", function () {
    if ($(".status_content").hasClass("active")) {
      $(".status_content").removeClass("active");
    } else {
      // in $this parents not working
      //  $(this).parents().find(".status_content").addClass("active");
      $(this).parent().parent().find(".status_content").addClass("active");
    }
  });
  $(".edit").on("click", function () {
    // if ($(".popup_edit_outerbg").hasClass("active")) {
    //   $(".popup_edit_outerbg").removeClass("active");
    // } else {
    $(this).parent().parent().parent().parent(".table_tr").addClass("activetr");
    $(".status_content").removeClass("active");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".popup_edit_outerbg")
      .addClass("active");
    var getText1 = $(this).parent().parent().parent().siblings(".row1").text();
    $(".row1_input").val(getText1);
    var getText2 = $(this).parent().parent().parent().siblings(".row2").text();
    $(".row2_input").val(getText2);
    var getText3 = $(this)
      .parent()
      .parent()
      .parent()
      .siblings(".row3")
      .find(".trustLevel-no")
      .text();
    $(".row3_input").val(getText3);
    var getText4 = $(this).parent().parent().parent().siblings(".row4").text();
    $(".row4_input").val(getText4);
    var getText5 = $(this).parent().parent().parent().siblings(".row5").text();
    $(".row5_input").val(getText5);
    var getText6 = $(this).parent().parent().parent().siblings(".row6").text();
    $(".row6_input").val(getText6);
    var getText7 = $(this).parent().parent().parent().siblings(".row7").text();
    $(".row7_input").val(getText7);
    if ($(this).parent().siblings(".EnabledBtn").hasClass("disableBtn")) {
      $(".default_btn").addClass("disableBtn");
      $(".default_btn").removeClass("EnabledBtn");
      $(".default_btn").text("Disabled");
    } else {
      $(".default_btn").addClass("EnabledBtn");
      $(".default_btn").text("Enabled");
      $(".default_btn").removeClass("disableBtn");
    }
    //}
  });

  $(".submitBtn_edit").click(function () {
    $(".table_tr.activetr").find(".row1").text($(".row1_input").val());
    $(".table_tr.activetr").find(".row2").text($(".row2_input").val());
    $(".table_tr.activetr")
      .find(".row3 .trustLevel-no")
      .text($(".row3_input").val());
    $(".table_tr.activetr").find(".row4").text($(".row4_input").val());
    $(".table_tr.activetr").find(".row5").text($(".row5_input").val());
    $(".table_tr.activetr").find(".row6").text($(".row6_input").val());
    $(".table_tr.activetr").find(".row7").text($(".row7_input").val());
    $(".table_tr.activetr").removeClass("activetr");
    $(".popup_edit_outerbg").removeClass("active");

    //  if($(".row3_input").val()<=5)
    //     {
    //       alert("1")
    //       $(".row3 .trustLevel-circle1").css("background","red");
    //     }
    //     else if($(".row3_input").val()>=5)
    //     {
    //       alert("2")
    //       $(".row3 .trustLevel_circle2").css("background","green");
    //     }
  });

  $(".close_icon,.cancelBtn_edit").click(function () {
    $(".popup_edit_outerbg").removeClass("active");
  });
  $(".delete").on("click", function () {
    $(this).parent().parent().parent().parent(".table_tr").remove();
  });

  // $(".toggle").click(function () {
  //   alert("togg")
  //  })
});
