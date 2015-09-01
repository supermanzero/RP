/**
 * Created by Colin on 2015/7/24.
 */
define(function () {
    var exam=exam || {};

    exam.init=function(){
        $(".cmspages-content").scroll(function(){
            $(".exam-view-subject-fixed").css({"top":$(".cmspages-content").scrollTop()})
        });

        $(".exam-answer").on("click",".upload-img",function(){
            $(this).toggleClass("on")
        })
    }
    return exam;
});