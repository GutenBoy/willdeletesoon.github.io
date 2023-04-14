



// JQEURY/JS COMMON TO EVERY PAGE

// JAVA SCRIPT FOR LOADER COMMON TO EVERY WEBPAGE


$(document).ready(function () {


    $(".fillBottom").addClass("fill");

    var a = $("body").attr("id");

    $("." + a + " a").css({ "transform": "translateY(-2px)", "transition": "1s ease", "color": "#f6d334" });

    $("." + a).css({ "pointer-events": "none" });

    $("." + a + " a").addClass("dotting");

    $(".onloadShow").removeClass("visibilityNone"); //showing the three dots.


    $(".one").addClass("animate"); //adding the animate class to the three dots sequentially.
    setTimeout(function () {
        $(".two").addClass("animate");
        setTimeout(function () {
            $(".three").addClass("animate");
        }, 100);
    }, 100);
    setTimeout(function () {
        $(".onloadShow").addClass("visibilityNone"); //removing the three dots.
        $(".totalContainer").removeClass("visibilityNone"); //showing the document after loading the three dots animation.
        $(".totalContainer").addClass("opacityOnLoad");
        $(".footer").addClass("footerUp");
        $(".skilldescription").addClass("skillDescriptionSlide");
        $(".heading button").addClass("skillButtonSlide");
    }, 500);

    $(".hey").addClass("down");
    $(".azeem").addClass("down");
    $(".contactMe").addClass("contactslide");
});


// MINIMUM NAVIGATION BAR TOGGLING CLASSES 

function togglingClasses() {
    $(".adjust").toggleClass("visibilityNone");
    $(".Name").toggleClass("visibilityNone");
    $(".socialSection").toggleClass("visibilityNone");
    $(".aboutMe").toggleClass("visibilityNone");
    $(".totalContainer").toggleClass("background");
    $(".hamBurger").toggleClass("visibilityNone");
    $(".hamBurgerClose").toggleClass("visibilityNone");
    $(".projects").toggleClass("visibilityNone");

}
$(".hamBurger").click(function () {
    togglingClasses();
    $("#NavBar ul").addClass("slide-out");
    $(".hamBurgerClose").addClass("slide-out");
    $("#NavBar ul").removeClass("slide-in");
    $(".hamBurgerClose").removeClass("slide-in");
});
$(".hamBurgerClose").click(function () {
    $("#NavBar ul").removeClass("slide-out");
    $(".hamBurgerClose").removeClass("slide-out");
    $("#NavBar ul").addClass("slide-in");
    $(".hamBurgerClose").addClass("slide-in");
    setTimeout(() => {
        togglingClasses();
    }, 400);
});



















// JQUERY CODE FOR INDIVIDUAL PAGE SEPARATELY

if (window.location.pathname.includes("/index.html") || (!window.location.pathname.includes("/projects.html") && !window.location.pathname.includes("/about.html") && !window.location.pathname.includes("/skills.html"))) {

    // HOME PAGE JQUERY


    // ANIMATION TO SHOW A HOVER OVER THE MAIN TEXT IN HOME PAGE
    for (var i = 0; i < 19; i++) {
        $(".doin")[i].addEventListener('mouseover', myFunc);
    }

    function myFunc(e) {
        $(this).addClass("textinc");
        setTimeout(function () {
            $(".textinc").removeClass("textinc");
        }, 3000);
    }

    // FIXING THE TEXT LENGTH FOR MOBILE DEVICES
    const about = window.matchMedia("(max-width: 700px)");
    if (about.matches) {
        $(".azeem").html("I'M AZEEM");
        $(".am p").html("Welcome to my digital home! As a computer science student, I am excited to share my passion for creating innovative digital solutions with you");
    }



    // CONTACT FORM DISPLAYING
    $(".contact").slideUp();
    $(".closeForm").click(function () {
        $("body").toggleClass("bgimage");
        $(".contact").slideUp();
        setTimeout(function () {
            $(".totalContainer").toggleClass("visibilityNone");
        }, 500);
    });
    function showForm() {
        $("body").toggleClass("bgimage");
        $(".contact").css("visibility", "visible");
        $(".contact").removeClass("visibilityNone");
        $(".totalContainer").addClass("visibilityNone");
        $(".contact").slideDown();
    }
}


else if (window.location.pathname.includes("/skills.html")) {

    const skill = window.matchMedia("(max-width:1030px)");

    if (skill.matches) {
        $(".iconshead").addClass("skillDescriptionSlide");
        $(".skilldescription").addClass("visibilityNone");
        function openSkillDescription() {
            $(".heading button").toggleClass("background2");
            $(".skilldescription").toggleClass("visibilityNone");
            $(".iconshead").toggleClass("visibilityNone");
            // $(".skilldescription").toggleClass("showingSkills");
            $(".iconshead").toggleClass("skillDescriptionSlide");
        }
    }

    // AUTO FILL WHEN CLICKED THE SKILL ICON
    $(".iconImages").click(function () {
        var a = $(this).attr("id");
        console.log(a);
        $('.' + a).removeClass("ratingFill");
        setTimeout(() => {
            $("." + a).addClass("ratingFill");
        }, 100);
    });

}

else if (window.location.pathname.includes("/about.html")) {


    // ABOUT SECTION JQUERY

    // BUILDING A ROAD FOR THE ABOUT SECTION

    function aboutAzeem(button) {
        var a = button.getAttribute("context");
        console.log(a);
        $(".startAbout").addClass("visibilityNone");
        $(".education").addClass("visibilityNone");
        $(".favourites").addClass("visibilityNone");
        $(".hobbies").addClass("visibilityNone");
        $(".menmyself").addClass("visibilityNone");
        if (a == 'education') {
            $(".education").removeClass("visibilityNone");
            $(".alian").removeClass("moveleft moveright movebottom moveup");
            $(".alian").addClass("moveleft");
        }
        else if (a == 'menmyself') {
            $(".alian").removeClass("moveleft moveright movebottom moveup");
            $(".menmyself").removeClass("visibilityNone");
            $(".alian").addClass("moveright");
        }
        else if (a == 'favourites') {
            $(".alian").removeClass("moveleft moveright movebottom moveup");
            $(".favourites").removeClass("visibilityNone");
            $(".alian").addClass("movebottom");
        }
        else {
            $(".alian").removeClass("moveleft moveright movebottom moveup");
            $(".hobbies").removeClass("visibilityNone");
        }
    }
}

else if (window.location.pathname.includes("/projects.html")) {
    // JQUERY FOR PROJECT PAGE

    var start = 1;
    ShowProject(start);

    function ShowProject(count) {
        var showing = $(".project" + count).removeClass("visibilityNone");
    }


    function restartAnimation(addend, next) {
        for (var i = 1; i < 4; i++) {
            $(".project" + i).addClass("visibilityNone");
            $(".corouselDots .dot" + i).removeClass("active");
            $(".project" + i).removeClass("slideDown");
            $(".project" + i).removeClass("slideUp");
        }
        if (addend == -1) {
            $(".project" + next).addClass("slideDown");
        }
        else {
            $(".project" + next).addClass("slideUp");
        }
    }

    function makeProjectActive(dotNumber) {
        restartAnimation();
        $(".project" + dotNumber).removeClass("visibilityNone");
        $(".corouselDots .dot" + dotNumber).addClass("active");
    }
    function moveProject(addend) {
        start = start + addend;
        if (start > 3) {
            start = 1;
        }
        if (start < 1) {
            start = 3;
        }
        restartAnimation(addend, start);
        $(".corouselDots .dot" + start).addClass("active");
        ShowProject(start);
    }

}