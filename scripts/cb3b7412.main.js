function UpdateTableHeaders(){$(".persist-area").each(function(){var a=$(this),b=a.offset(),c=$(window).scrollTop(),d=$(".floatingHeader",this);skillsHeader=$(".persist-header.techskills").eq(0),experienceHeader=$(".persist-header.work-experience").eq(0),aboutmeHeader=$(".persist-header.aboutme").eq(0),skillsFloatingHeader=$(".persist-header.techskills.floatingHeader"),experienceFloatingHeader=$(".persist-header.work-experience.floatingHeader"),aboutmeFloatingHeader=$(".persist-header.aboutme.floatingHeader"),c>b.top&&c<b.top+a.height()?(d.css({visibility:"visible"}),skillsHeader.css({visibility:"hidden"}),"visible"==experienceFloatingHeader.css("visibility")&&experienceHeader.css({visibility:"hidden"}),"visible"==aboutmeFloatingHeader.css("visibility")&&aboutmeHeader.css({visibility:"hidden"})):(d.css({visibility:"hidden"}),"hidden"==$.trim(skillsFloatingHeader.css("visibility"))&&skillsHeader.css("visibility","visible"),"hidden"==$.trim(experienceFloatingHeader.css("visibility"))&&experienceHeader.css("visibility","visible"),"hidden"==$.trim(aboutmeFloatingHeader.css("visibility"))&&aboutmeHeader.css("visibility","visible"))})}$(function(){var a;$(".persist-area").each(function(){a=$(".persist-header",this),a.before(a.clone()).css("width",a.width()).addClass("floatingHeader")}),$(window).scroll(UpdateTableHeaders).trigger("scroll")}),function(){var a=$(window),b=$(".arrow");b.hide();var c=!1;a.scroll(function(){var d=a.scrollTop()>200;d&&!c?(c=!0,b.fadeIn("slow")):c&&!d&&(c=!1,b.fadeOut("slow"))})}();