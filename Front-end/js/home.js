$(function () {
    $('.khoisanpham').slick({
        lazyLoad:'ondemand',
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    

    //hieu ung header va nut backtotop
    $("#backtotop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
    });

    $(window).scroll(function () {
        if ($("body,html").scrollTop() > 150) {
            $(".navbar").addClass("fixed-top");
        }
        else {
            $(".navbar").removeClass("fixed-top");
        }
    });

    $(window).scroll(function () {
        if ($("body,html").scrollTop() > 500) {
            $(".nutcuonlen").addClass("hienthi");
        }
        else {
            $(".nutcuonlen").removeClass("hienthi");
        }
    });

    // header form dangnhap dangky
    $(".nutdangnhap").click(function (e) {
        $("ul.tabs .tab-dangnhap").addClass("active");
    });
    $(".nutdangky").click(function (e) {
        $("ul.tabs .tab-dangky").addClass("active");
    });

    $("ul.tabs .tab-dangnhap").click(function (e) {
        $("ul.tabs .tab-dangnhap").addClass("active");
        $("ul.tabs .tab-dangky").removeClass("active");
    });

    $("ul.tabs .tab-dangky").click(function (e) {
        $("ul.tabs .tab-dangky").addClass("active");
        $("ul.tabs .tab-dangnhap").removeClass("active");
    });

    // form dangnhap dangky 
    $(".tab-dangky").click(function (e) {
        $('#formdangnhap').removeClass("fade");
        $('#formdangky').removeClass("fade");
        $('#formdangnhap').modal("hide");
        $('#formdangky').modal("show");
    });
    $(".tab-dangnhap").click(function (e) {
        $('#formdangnhap').removeClass("fade");
        $('#formdangky').removeClass("fade");
        $('#formdangky').modal("hide");
        $('#formdangnhap').modal("show");
    });
    $(".close").click(function (e) {
        $('.modal').addClass("fade");
        $("ul.tabs .tab-dangnhap").removeClass("active");
        $("ul.tabs .tab-dangky").removeClass("active");
    });

    

    // validate
    // $("#form-signup").validate({
    //     rules: {
    //         name: {
    //             required: true,
    //         },
    //         phone: {
    //             required: true,
    //             minlength: 8
    //         },
    //         password: {
    //             required: true,
    //             minlength: 6
    //         },
    //         confirm_password: {
    //             required: true,
    //             minlength: 6,
    //             equalTo: "#inputPassword"
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: {
    //             required: "Vui lòng nhập họ và tên",
    //         },
    //         phone: {
    //             required: "Vui lòng nhập số điện thoại",
    //             minlength: "Số máy quý khách vừa nhập là số không có thực"
    //         },
    //         password: {
    //             required: 'Vui lòng nhập mật khẩu',
    //             minlength: 'Vui lòng nhập ít nhất 6 kí tự'
    //         },
    //         confirm_password: {
    //             required: 'Vui lòng nhập lại mật khẩu',
    //             minlength: 'Vui lòng nhập ít nhất 6 kí tự',
    //             equalTo: 'Mật khẩu không trùng'
    //         },
    //         email: {
    //             required: "Vui lòng nhập email",
    //             minlength: "Email không hợp lệ",
    //             email: "Vui lòng nhập email",
    //         }
    //     }
    // });

    // $("#form-signin").validate({
    //     rules: {
    //         password: {
    //             required: true,
    //             minlength: 6
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         password: {
    //             required: 'Vui lòng nhập mật khẩu',
    //             minlength: 'Vui lòng nhập ít nhất 6 kí tự'
    //         },
    //         email: {
    //             required: "Vui lòng nhập email",
    //             minlength: "Email không hợp lệ",
    //             email: "Vui lòng nhập email",
    //         }
    //     }
    // });

    $(".carousel.lazy").on("slide.bs.carousel", function(ev) {
        var lazy;
        lazy = $(ev.relatedTarget).find("img[data-src]");
        lazy.attr("src", lazy.data('src'));
        lazy.removeAttr("data-src");
    });
});
