$(document).ready(function () {
  $(".threeDotMenu-img").click(function () {
    if ($(".topFixed").hasClass("active")) {
      $(".topFixed").removeClass("active");
    } else {
      $(".topFixed").addClass("active");
    }
  });
  $(".threeDotMenu-img-mobile").click(function () {
    $(".topFixed").removeClass("active");
  });
  $(".down-arrow").click(function () {
    if (
      $(".topFixed").hasClass("activeDownArrow") &&
      $(".explore").hasClass("active")
    ) {
      $(".topFixed").removeClass("activeDownArrow");
      $(".explore").removeClass("active");
    } else {
      $(".topFixed").addClass("activeDownArrow");
      $(".explore").addClass("active");
    }
  });
  $(".liActive").click(function () {
    $(".explore").removeClass("active");
  });
  $(".notification-img").click(function () {
    if ($(".topFixed").hasClass("active1")) {
      $(".topFixed").removeClass("active1");
    } else {
      $(".topFixed").addClass("active1");
    }
  });
  $(".noti-close-btn").click(function () {
    $(".topFixed").removeClass("active1");
  });
  $(".heading-hambarekar").click(function () {
    if ($(".edit-delete").hasClass("active")) {
      $(".edit-delete").removeClass("active");
    } else {
      $(this).next(".edit-delete").addClass("active");
    }
  });
  $(".viewMore-Btn").click(function () {
    if ($(".token-content").hasClass("active")) {
      $(".token-content").removeClass("active");
      $(".viewMore-Btn").text("View More");
    } else {
      $(".token-content").addClass("active");
      $(".viewMore-Btn").text("close");
    }
  });
  $(".token-period").click(function () {
    if ($(".token-sec").hasClass("active")) {
      $(".token-sec").removeClass("active");
    } else {
      $(".token-sec").addClass("active");
    }
  });
  $(".servicesOn,.servicesOff").click(function () {
    $(".services-popup-outerbg").addClass("active");
    $(".popup-services").addClass("active");
    $(this).addClass("switchMain");
  });
  $(".yesBtn").click(function () {
    if ($(".switchMain").hasClass("servicesOn")) {
      $(".switchMain").addClass("servicesOff");
      $(".switchMain").removeClass("servicesOn");
      $(".popup-services").removeClass("active");
      $(".services-popup-outerbg").removeClass("active");
    } else {
      $(".switchMain").addClass("servicesOn");
      $(".switchMain").removeClass("servicesOff");
      $(".popup-services").removeClass("active");
      $(".services-popup-outerbg").removeClass("active");
    }
  });
  $(".noBtn").click(function () {
    $(".services-popup-outerbg").removeClass("active");
    $(".popup-bg").removeClass("active");
    $(".switch-On").removeClass("switchMain");
    $(".switch-Off").removeClass("switchMain");
  });

  // $(".servicesOff").click(function () {
  //   if (
  //     $(this).hasClass("servicesOff") &&
  //     $(".services-popup-outerbg").hasClass("active")
  //   ) {
  //     $(this).addClass("servicesOn");
  //     $(this).removeClass("servicesOff");
  //     $(".services-popup-outerbg").removeClass("active");
  //   } else {
  //     $(this).removeClass("servicesOn");
  //     $(this).addClass("servicesOff");
  //     $(".services-popup-outerbg").addClass("active");
  //   }
  // });
  // $(".servicesOn").click(function () {
  //   if (
  //     $(this).hasClass("servicesOn") &&
  //     $(".services-popup-outerbg").hasClass("activeAlert")
  //   ) {
  //     $(this).addClass("servicesOff");
  //     $(this).removeClass("servicesOn");
  //     $(".services-popup-outerbg").removeClass("activeAlert");
  //   } else {
  //     $(".services-popup-outerbg").addClass("activeAlert");
  //     $(".yesBtn").click(function () {
  //       $(".pub").addClass("servicesOff");
  //       $(".services-popup-outerbg").removeClass("activeAlert");
  //     });
  //     $(this).removeClass("servicesOff");
  //   }
  // });

  // $(".yesBtn").on("click", function () {
  //   if ($(".servicesOn").hasClass("servicesOff")) {
  //     $(".services-popup-outerbg").removeClass("active");
  //     $(".servicesOn").removeClass("servicesOff");
  //   } else {
  //     $(".servicesOn").addClass("servicesOff");
  //   }
  // });
  $(".popup-close").click(function () {
    $(".services-popup-outerbg").removeClass("active");
    $(".logout-popup-outerbg").removeClass("activeLogout");
  });

  $(".circle").click(function () {
    if ($(this).hasClass("circle")) {
      $(this).addClass("circleRed");
      $(this).removeClass("circle");
    } else {
      $(this).removeClass("circleRed");
      $(this).addClass("circle");
    }
  });
  $(".circleRed").click(function () {
    if ($(this).hasClass("circleRed")) {
      $(this).addClass("circle");
      $(this).removeClass("circleRed");
    } else {
      $(this).removeClass("circle");
      $(this).addClass("circleRed");
    }
  });

  $(".token1").click(function () {
    $(".week").text("1 Month");
  });
  $(".token2").click(function () {
    $(".week").text("6 Month");
  });
  $(".token3").click(function () {
    $(".week").text("1 Year");
  });
  $(".token4").click(function () {
    $(".week").text("24 Hours");
    //  var week= $(".week");
    // var hours=.text("24 Hours");
    // if( week.text("24 Hours").){
    //     $(".token4").css("background","red");
    // }
    // else{
    //     $(".token4").css("background","unset");
    // }
  });
  $(".notiDelete").click(function () {
    $(this).parents(".notifications-outer").remove();
    //    $(this).parents().find(".notifications-outer").remove(); this not working
  });
  $(".search").click(function () {
    if ($(".searchDiv").hasClass("active")) {
      $(".searchDiv").removeClass("active");
    } else {
      $(".searchDiv").addClass("active");
    }
  });
  // outerbg close
  $(".outerbg").click(function () {
    $(".searchDiv").removeClass("active");
    $(".topFixed").removeClass("active1");
  });
  $(".joanne-logan").click(function () {
    if (
      $(".adminContent").hasClass("active1") &&
      $(".top-right-content").hasClass("active")
    ) {
      $(".adminContent").removeClass("active1");
      $(".top-right-content").removeClass("active");
    } else {
      $(".adminContent").addClass("active1");
    }
    $(".logout").click(function () {
      if ($(".adminContent").hasClass("active2")) {
        $(".adminContent").removeClass("active2");
      }
      // $(".logout").text("Log Out");
      // } else {
      //   $(".adminContent").addClass("active2");
      //   // $(".logout").text("Login");
      //
    });
  });
  $(".logout").click(function () {
    if ($(".logout-popup-outerbg").hasClass("activeLogout")) {
      $(".logout-popup-outerbg").removeClass("activeLogout");
    } else {
      $(".logout-popup-outerbg").addClass("activeLogout");
      $(".top-right-content").addClass("active");
    }
  });
  $(".yesBtn-popupLogout").click(function () {
    $(".adminContent").addClass("active2");
    $(".logout-popup-outerbg").removeClass("activeLogout");
    $(".top-right-content").addClass("active");
  });
  $(".noBtn-popupLogout").click(function () {
    $(".logout-popup-outerbg").removeClass("activeLogout");
  });

  // popup login
  // $(".userImg,.login").click(function () {
  //   if ($(".popup-login-outerbg").hasClass("activeLogin")) {
  //     $(".popup-login-outerbg").removeClass("activeLogin");
  //   } else {
  //     $(".popup-login-outerbg").addClass("activeLogin");
  //   }
  // });
  // $(".login-close").click(function () {
  //   $(".popup-login-outerbg").removeClass("activeLogin");
  // });
  // popup forgot password
  $(".forgotPassword").click(function () {
    const forgotPasswordBg = $(".popup-forgotPassword-outerbg");
    if ($(".popup-forgotPassword-outerbg").hasClass("active")) {
      forgotPasswordBg.removeClass("active");
    } else {
      forgotPasswordBg.addClass("active");
      $(".popup-login-outerbg").removeClass("activeLogin");
    }
  });
  $(".resetPassword-close").click(function () {
    const forgotPasswordBg = $(".popup-forgotPassword-outerbg");
    forgotPasswordBg.removeClass("active");
    $(".popup-login-outerbg").removeClass("activeLogin");
  });
  $(".identityManagement").click(function () {
    $(".explore").removeClass("active");
  });
  $(".profileClose").click(function () {
    $(".adminContent").removeClass("active1");
  });
  $(".loginBtn").click(function () {
    $(".adminContent").removeClass("active2");
    $(".adminContent").removeClass("active1");
    $(".popup-login-outerbg").removeClass("activeLogin");
    $(".top-right-content").removeClass("active");
    alert("Login Succesfully");
  });
});
