(function(window, undefined) {
    'use strict';

    /*
    NOTE:
    ------
    PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
    WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

    $('.toggle-question').on('click', function() {
        $(this).parents('.question-wrap').toggleClass('on');
    });

    $('.commnet_like').on('click', function() {
        $(this).toggleClass('on');
    });


    $('.coaching_about_more').on('click', function() {
        $(this).parents('.coaching_about .txt').toggleClass('on');
        $(this).toggleClass('on');

        if ($(this).hasClass('on')) {
            $(this).children('span').text('Show less');
        } else {
            $(this).children('span').text('Show more');
        }
    });

    $('.toggle_session').on('click', function() {
        $(this).toggleClass('on');
        $(this).parents('.session_tit').next('.coaching_history_list').slideToggle();
    });

    $('.pop_gray_txtarea_wrap textarea').on('focus', function() {
        $(this).parents('.pop_gray_txtarea_wrap').addClass('on');
    })
    $('.pop_gray_txtarea_wrap textarea').on('blur', function() {
        $(this).parents('.pop_gray_txtarea_wrap').removeClass('on');
    })


    //btn-chat tooltip
    $('.btn-chat').tooltip();


    //fake select
    $(".fake_select .select_tit").on("click", function() {
        if ($(this).parents(".fake_select").hasClass('on')) {
            $(".fake_select").removeClass("on");
        } else {
            $(".fake_select").removeClass("on");
            $(this).parents(".fake_select").addClass("on");
        }
    });

    $(".select_option a").on("click", function(e) {
        //var optionValue = $(this).text();
        const value = e.currentTarget.textContent.trim();
        //console.log(value);
        $(this).parents(".fake_select").children(".select_tit").children("span").text(value);
    });

    //score 영역 추가
    $(".score_select .select_option a").on("click", function(e) {
        const widthTarget = $(this).parents('.score_select').children('.select_tit').find('.star');
        const scoreWidth = $(this).attr('data-width');
        //console.log(widthTarget);
        widthTarget.css('width', scoreWidth);
    });

    // 타겟영역을 제외하고 클릭했을 시 팝업 숨김처리.
    $("body").on("click", function(e) {
        var tgPoint = e.target;
        //console.log(tgPoint.parentNode);

        //fake select
        if ($(tgPoint.parentNode.parentNode).hasClass("fake_select" && "on")) {
            //작동안되게처리
        } else if ($(tgPoint.parentNode).hasClass("fake_select" || "on")) {
            //작동안되게처리
        } else {
            $(".fake_select").removeClass("on");
        }

    });

    //통계영역 검색 옵션
    $('.search-option-tabs input[name="search-options"]').on('change', function() {
        var search_option_type = $(this).attr('data-target');
        $(this).parents('.card-body').children('.search-option-wrap').hide();
        $(this).parents('.card-body').children(search_option_type).show();
    })



    // add new Experience

    $(".experience-btn").on("click", function() {
        $(this).closest('.authors-wrap').find('.authors-card').append($(` <div class="authors-block"> <hr> <div class="form-body"> 
                <div class="d-flex del-row align-items-center mt-3">
                    <div class="form-group del-form-wrap form-resume-wrap">
                        <div class="form-resume">
                            <input type="text" class="form-control mr-1"
                                placeholder="Company name">
                            <input type="text" class="form-control" placeholder="position">
                        </div>
                        <div class="form-resume mt-1">
                            <div class="date-wrap">
                                <div class="position-relative has-icon-left">
                                    <input type="text" class="form-control pickadate"
                                        placeholder="Start Date">
                                    <div class="form-control-position">
                                        <i class='bx bx-calendar'></i>
                                    </div>
                                </div>
                                <span class="bar">~</span>
                                <div class="position-relative has-icon-left">
                                    <input type="text" class="form-control pickadate"
                                        placeholder="End Date">
                                    <div class="form-control-position">
                                        <i class='bx bx-calendar'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-resume mt-1">
                            <input type="text" class="form-control" id="" name=""
                                placeholder="Description">
                        </div>
                    </div>
                    <div class="del-btn-wrap">
                        <button
                            class="btn btn-icon btn-light rounded-circle text-nowrap px-1 authors-delete"
                            data-repeater-delete="" type="button">
                            <i class="bx bx-x"></i>
                        </button>
                    </div>
                </div>

            </div>
            </div>`));
            removeExperience();
            calendarCode();
    });


// add Skils

$(".skills-btn").on("click", function() {
    $(this).closest('.authors-wrap').find('.authors-card').append($(`<div class="authors-block">
            <div class="">
                <div class="d-flex del-row">
                    <div class="form-group del-form-wrap">
                        <input type="text" class="form-control" id=""
                            placeholder="Add any skills or certificates relevant to your field of expertise">
                    </div>
                    <div class="del-btn-wrap">
                        <button
                            class="btn btn-icon btn-light rounded-circle text-nowrap px-1 authors-delete"
                            data-repeater-delete="" type="button">
                            <i class="bx bx-x"></i>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>`));
        removeExperience();
        calendarCode();
});


// add Education

$(".education-btn").on("click", function() {
    $(this).closest('.authors-wrap').find('.authors-card').append($(`<div class="authors-block"> <hr>
                    <div class="form-body">
                        <div class="d-flex del-row mt-3">
                            <div class="form-group del-form-wrap form-resume-wrap">
                                <div class="form-resume">
                                    <input type="text" style="width: 49%;" class="form-control mr-1"
                                        placeholder="School name (e.g. Boston University)">
                                
                                </div>
                                <div class="form-resume mt-1">
                                    <div class="date-wrap">
                                        <div class="position-relative has-icon-left">
                                            <input type="text" class="form-control pickadate"
                                                placeholder="Start Date">
                                            <div class="form-control-position">
                                                <i class='bx bx-calendar'></i>
                                            </div>
                                        </div>
                                        <span class="bar">~</span>
                                        <div class="position-relative has-icon-left">
                                            <input type="text" class="form-control pickadate"
                                                placeholder="End Date">
                                            <div class="form-control-position">
                                                <i class='bx bx-calendar'></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex del-row">
                            <div class="form-group del-form-wrap form-resume-wrap">
                                <div class="form-resume">
                                    <select name="" id="" class="form-control mr-1">
                                        <option value="">Degree type</option>
                                    </select>
                                    <input type="text" class="form-control" name=""
                                        placeholder="Field of study (e.g. Biology)">
                                </div>
                                <div class="form-resume mt-1">
                                    <input type="text" class="form-control" id="" name=""
                                        placeholder="Description">
                                </div>
                            </div>
                            <div class="del-btn-wrap">
                                <button
                                    class="btn btn-icon btn-light authors-delete rounded-circle text-nowrap px-1"
                                    data-repeater-delete="" type="button">
                                    <i class="bx bx-x"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`));
        removeExperience();
        calendarCode();
});



function removeExperience() {
    let removeExperienceBtn = $(".authors-delete");
    if(removeExperienceBtn){
        removeExperienceBtn.each(function() {
            $(this).on("click", function() {
                const removeExperienceBLock =  $(this).closest('.authors-block');
                removeExperienceBLock.remove();
            });
        });
    }
} removeExperience();


$('.edit-field').click(function() {
    $(this).closest(".edit-input-block").find('input').removeAttr('readonly').first().focus();
});



})(window);