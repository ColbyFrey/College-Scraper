!function(a){"use strict";a=jQuery,jQuery(document).ready(function(){var t;jQuery(".masonry-ajax").on("click",".ajax-load-btn.active",function(){var t=jQuery(this);if(t.hasClass("nomore"))return void t.text(ajax_btn_str.nomore);var e=t.parents(".module-masonry").attr("id"),i=ajax_c[e].entries,s=ajax_c[e].args,n=ajax_c[e].columns;if(t.parents(".module-masonry").find(".bk-tabs").length>0)var r=t.parents(".module-masonry").find(".bk-tabs.active").attr("class").split(" ")[0].split("-")[2],o=ajax_c[e]["tab"+r].cat;else var r=1,o=ajax_c[e]["tab"+r].cat;jQuery(".ajax-load-btn").removeClass("active"),t.css("display","none"),t.siblings(".loading-animation").css("display","inline-block");var l=t.parent(".masonry-ajax").siblings(".bk-masonry-wrap").children().children(".bk-masonry-content"),d=l.find(".item").length+parseInt(ajax_c[e]["tab"+r].offset);console.log(d);var c={action:"masonry_load",post_offset:d,entries:i,columns:n,args:s,currentCatID:o};jQuery.post(ajaxurl,c,function(s){var n=a(s).hide().fadeIn("1500"),o=n.find(".bk-mask").length;l.append(n).masonry("appended",n),l.imagesLoaded(function(){setTimeout(function(){var s=jQuery(window).scrollTop();l.masonry("destroy"),l.masonry({itemSelector:".item",columnWidth:1,isAnimated:!0,isFitWidth:!0}),window.scrollTo(0,s),jQuery(l).find(".post-c-wrap").removeClass("sink"),jQuery(l).find(".post-category").removeClass("sink"),jQuery(l).find(".thumb").removeClass("hide-thumb"),jQuery(".ajax-load-btn").addClass("active"),t.find(".ajax-load-btn").text(ajax_btn_str.loadmore),i>o&&(t.text(ajax_btn_str.nomore),t.addClass("no-more"),t.removeClass("active"),ajax_c[e]["nomore-"+r]=1),t.css("display","inline-block"),t.siblings(".loading-animation").css("display","none"),a(".sidebar").trigger("sticky_kit:recalc")},500);var s=n.find(".rating-canvas");a.each(s,function(t,e){var i=a(e).data("rating"),s=e.getContext("2d");if(e.width=a(e).parent().width(),e.height=a(e).parent().height(),a(e).parent().hasClass("rating-wrap"))var n=2;else var n=4;var r=e.width/2,o=e.height/2;if(a(e).parent().hasClass("rating-wrap"))var l=(e.width-6)/2;else var l=(e.width-10)/2;var d=Math.PI*i*2/100;s.beginPath(),s.arc(r,o,l,-(Math.PI/180*90),d-Math.PI/180*90,!1),s.lineWidth=n,s.strokeStyle="#fff",s.stroke()})})})}),jQuery(".blog-ajax").on("click",".ajax-load-btn.active",function(){var e=jQuery(this);if(e.hasClass("nomore"))return void e.text(ajax_btn_str.nomore);var i=e.parents(".module-blog").attr("id"),s=i.split("-")[0],n=ajax_c[i].entries,r=ajax_c[i].args;if(e.parents(".module-blog").find(".bk-tabs").length>0)var o=e.parents(".module-blog").find(".bk-tabs.active").attr("class").split(" ")[0].split("-")[2],l=ajax_c[i]["tab"+o].cat;else var o=1,l=ajax_c[i]["tab"+o].cat;jQuery(".ajax-load-btn").removeClass("active"),e.css("display","none"),e.siblings(".loading-animation").css("display","inline-block");var d=e.parent(".blog-ajax").siblings(".row").children(".bk-blog-content");if(t=d.find(".item").length+parseInt(ajax_c[i]["tab"+o].offset),"classic_blog"==s)var c={action:"classic_blog_load",post_offset:t,entries:n,args:r,currentCatID:l};else if("large_blog"==s)var c={action:"large_blog_load",post_offset:t,entries:n,args:r,currentCatID:l};jQuery.post(ajaxurl,c,function(t){var s=a(t).hide().fadeIn("1500"),r=s.find(".content_out").length;d.append(s),d.imagesLoaded(function(){setTimeout(function(){jQuery(d).find(".thumb").removeClass("hide-thumb"),jQuery(".ajax-load-btn").addClass("active"),e.find(".ajax-load-btn").text(ajax_btn_str.loadmore),n>r&&(e.text(ajax_btn_str.nomore),e.addClass("no-more"),e.removeClass("active"),ajax_c[i]["nomore-"+o]=1),e.css("display","inline-block"),e.siblings(".loading-animation").css("display","none")},500);var t=s.find(".rating-canvas");a.each(t,function(t,e){var i=a(e).data("rating"),s=e.getContext("2d");if(e.width=a(e).parent().width(),e.height=a(e).parent().height(),a(e).parent().hasClass("rating-wrap"))var n=2;else var n=4;var r=e.width/2,o=e.height/2;if(a(e).parent().hasClass("rating-wrap"))var l=(e.width-6)/2;else var l=(e.width-10)/2;var d=Math.PI*i*2/100;s.beginPath(),s.arc(r,o,l,-(Math.PI/180*90),d-Math.PI/180*90,!1),s.lineWidth=n,s.strokeStyle="#fff",s.stroke()})})})}),jQuery(".bk-tabs").on("click",function(t){if(t.preventDefault(),!a(this).hasClass("active")&&!a(this).hasClass("disable-click")){a(".bk-tabs").each(function(){a(this).addClass("disable-click")});var e=a(this).find("a").html();a(this).parent().siblings().find("span").empty(),a(this).parent().siblings().find("span").append(e);var i=a(this).siblings(".bk-tabs.active").attr("class").split(" ")[0].split("-")[2];a(this).siblings(".bk-tabs").removeClass("active"),a(this).addClass("active");var s=a(this).parents(".bkmodule").attr("id"),n=s.split("-")[0],r=a(this).attr("class").split(" ")[0].split("-")[2];if("rand"!=ajax_c[s]["tab"+r].order?(a(this).parents(".module-title").siblings(".loadmore").hasClass("hide")&&a(this).parents(".module-title").siblings(".loadmore").removeClass("hide"),1==ajax_c[s]["nomore-"+r]?(a(this).parents(".module-title").siblings(".loadmore").find(".ajaxtext").text(ajax_btn_str.nomore),a(this).parents(".module-title").siblings(".loadmore").find(".ajaxtext").addClass("no-more"),a(this).parents(".module-title").siblings(".loadmore").find(".ajaxtext").removeClass("active")):(a(this).parents(".module-title").siblings(".loadmore").find(".ajaxtext").text(ajax_btn_str.loadmore),a(this).parents(".module-title").siblings(".loadmore").find(".ajaxtext").removeClass("no-more"),a(this).parents(".module-title").siblings(".loadmore").find(".ajaxtext").addClass("active"))):a(this).parents(".module-title").siblings(".loadmore").hasClass("hide")||a(this).parents(".module-title").siblings(".loadmore").addClass("hide"),"masonry"===n)var o=a(this).parents(".module-title").siblings(".bk-masonry-wrap").children().children();else if("classic_blog"===n||"large_blog"===n)var o=a(this).parents(".module-title").siblings(".bk-blog-wrapper").children();else var o=a(this).parents(".module-title").siblings(".bk-module-inner");if(o.append('<div class="bk-preload"></div><div class="bk-preload-wrapper"><div>'),(""==ajax_c[s]["tab"+i].content||ajax_c[s]["tab"+i].content!==o[0].innerHTML)&&(ajax_c[s]["tab"+i].content=o[0].innerHTML),""==ajax_c[s]["tab"+r].content){var l={action:n,ajax_c:ajax_c,blockID:s,tabClicked:r};jQuery.post(ajaxurl,l,function(t){var e=a(t).hide().fadeIn("1500");e.find(".content_out").length;o.empty(),o.append(e),o.find(".bk-preload-wrapper").remove(),o.find(".bk-preload").remove(),o.imagesLoaded(function(){setTimeout(function(){if(jQuery(o).find(".thumb").removeClass("hide-thumb"),"masonry"===n){jQuery(o).find(".post-c-wrap").removeClass("sink"),jQuery(o).find(".post-category").removeClass("sink");var t=jQuery(window).scrollTop();o.masonry("destroy"),o.masonry({itemSelector:".item",columnWidth:1,isAnimated:!0,isFitWidth:!0}),window.scrollTo(0,t)}a(".bk-tabs").each(function(){a(this).removeClass("disable-click")})},500);var t=e.find(".rating-canvas");a.each(t,function(t,e){var i=a(e).data("rating"),s=e.getContext("2d");if(e.width=a(e).parent().width(),e.height=a(e).parent().height(),a(e).parent().hasClass("rating-wrap"))var n=2;else var n=4;var r=e.width/2,o=e.height/2;if(a(e).parent().hasClass("rating-wrap"))var l=(e.width-6)/2;else var l=(e.width-10)/2;var d=Math.PI*i*2/100;s.beginPath(),s.arc(r,o,l,-(Math.PI/180*90),d-Math.PI/180*90,!1),s.lineWidth=n,s.strokeStyle="#fff",s.stroke()})})})}else{var d=a(ajax_c[s]["tab"+r].content).hide().fadeIn("1500");o.empty(),o.append(d),o.find(".bk-preload-wrapper").remove(),o.find(".bk-preload").remove(),o.imagesLoaded(function(){setTimeout(function(){if(jQuery(o).find(".thumb").removeClass("hide-thumb"),"masonry"===n){jQuery(o).find(".post-c-wrap").removeClass("sink"),jQuery(o).find(".post-category").removeClass("sink");var t=jQuery(window).scrollTop();o.masonry("destroy"),o.masonry({itemSelector:".item",columnWidth:1,isAnimated:!0,isFitWidth:!0}),window.scrollTo(0,t)}a(".bk-tabs").each(function(){a(this).removeClass("disable-click")})},500)});var c=d.find(".rating-canvas");a.each(c,function(t,e){var i=a(e).data("rating"),s=e.getContext("2d");if(e.width=a(e).parent().width(),e.height=a(e).parent().height(),a(e).parent().hasClass("rating-wrap"))var n=2;else var n=4;var r=e.width/2,o=e.height/2;if(a(e).parent().hasClass("rating-wrap"))var l=(e.width-6)/2;else var l=(e.width-10)/2;var d=Math.PI*i*2/100;s.beginPath(),s.arc(r,o,l,-(Math.PI/180*90),d-Math.PI/180*90,!1),s.lineWidth=n,s.strokeStyle="#fff",s.stroke()})}}}),jQuery(".related-tab").on("click",function(t){if(t.preventDefault(),!a(this).hasClass("active")){a(this).siblings(".related-tab").removeClass("active"),a(this).addClass("active");var e=a(this).attr("class").split(" ")[1],i=a(this).parent().siblings(".bk-related-posts"),s=a(this).attr("id"),n=a(this).siblings().attr("id");if(i.append('<div class="bk-preload"></div><div class="bk-preload-wrapper"><div>'),(""==ajax_c[e][n].content||ajax_c[e][n].content!==i[0].innerHTML)&&(ajax_c[e][n].content=i[0].innerHTML),""==ajax_c[e][s].content){var r={action:"author_posts_load",author_id:ajax_c.current_author};jQuery.post(ajaxurl,r,function(t){var e=a(t).hide().fadeIn("1500");i.empty(),i.append(e),i.find(".bk-preload-wrapper").remove(),i.find(".bk-preload").remove(),i.imagesLoaded(function(){setTimeout(function(){jQuery(i).find(".thumb").removeClass("hide-thumb")},500)})})}else{var o=a(ajax_c[e][s].content).hide().fadeIn("1500");i.empty(),i.append(o),i.find(".bk-preload-wrapper").remove(),i.find(".bk-preload").remove(),i.imagesLoaded(function(){setTimeout(function(){jQuery(i).find(".thumb").removeClass("hide-thumb")},500)})}}})})}(jQuery);