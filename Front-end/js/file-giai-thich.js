$(function () {
    $('.khoisanpham').slick({
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
    // code bên trên là dãy sản phẩm ở trên trang chủ ,mặc định show 5 sản phẩm trên dãy, mỗi lần bấm sang trái sang phải là qua 1 sản phẩm; các breakpoint là các kích cỡ (px)

    
    $("#backtotop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
    });   
    //code bên trên là khi click vào button với id: backtotop ( trượt lên đầu trang) thì hàm animate trượt lên đầu trang (0px) với tốc độ là 400

    $(window).scroll(function () {
        if ($("body,html").scrollTop() > 150) {
            $(".navbar").addClass("fixed-top");
        }
        else {
            $(".navbar").removeClass("fixed-top");
        }
    });
    // code bên trên là hàm để header fix lại ở trên đầu, khi trang trượt trên 150px thì header(navbar) thêm class fixed-top, trở về thì lại bỏ class fixed-top

    $(window).scroll(function () {
        if ($("body,html").scrollTop() > 500) {
            $(".nutcuonlen").addClass("hienthi");
        }
        else {
            $(".nutcuonlen").removeClass("hienthi");
        }
    });
    // code bên trên là khi cuộn trang trên 500px thì nutcuonlen( backtotop) thêm class hienthi, class hienthi duoc css trong file home.css với:visibility = visible; opacity = 1; tức là hiển thì ra cái nút, còn không trượt quá 500px thì nút sẽ xóa class hienthi: tức là ko hiển thị 

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

    // code bên dưới là khi bật qua lại giữa 2 tab đăng nhập và đăng ký trong form signin signup, khi click qua lại thì bỏ class fade(hiển thị modal box mờ) rồi ẩn form đó đi, hiển thị form còn lại lên
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

    // code bên dưới là các ảnh thumbnail sản phẩm trong trang chi tiết sản phẩm, ảnh nào đang hiển thị thì có viền vàng
    $(".thumb-img.thumb1").addClass('vienvang');
    $('.thumb-img').click(function (e) {
        $('.product-image').attr('src', this.src);
    });

    $('.thumb-img').click(function (e) {
        $('.thumb-img:not(:hover)').removeClass('vienvang');
        $(this).addClass('vienvang');
    });

    //code bên dưới là code cho nút số lượng sản phẩm muốn cho vào giỏ hàng, khi click vào dấu + thì tăng 1 sản phẩm, click vào dấu trừ thì giảm 1 sản phẩm
    $(".btn-inc").click(function (e) {
        var strval = $(this).parent().prev().val();
        var val = parseInt(strval) + 1;
        $(this).parent().prev().attr('value', val);
    });
    $(".btn-dec").click(function (e) {
        var strval = $(this).parent().next().val();
        var val = parseInt(strval) - 1;
        if (val < 1) {
            $(this).parent().next().attr('value', 1);
        } else {
            $(this).parent().next().attr('value', val);
        }
    });

    //code cho header của 3 bước mua hàng ở trang giỏ hàng, khi click vào header thì thêm class active ( trong đó class này đã css để khi click sẽ có màu đỏ, và nút mũi tên sẽ rotate xuống dưới)
    $('#step1contentid').on('show.bs.collapse', function () {
        $(this).prev().addClass("active");
    })
    $('#step1contentid').on('hide.bs.collapse', function () {
        $(this).prev().removeClass("active");
    })
    $('#step2contentid').on('show.bs.collapse', function () {
        $(this).prev().addClass("active");
    })
    $('#step2contentid').on('hide.bs.collapse', function () {
        $(this).prev().removeClass("active");
    })
    $('#step3contentid').on('show.bs.collapse', function () {
        $(this).prev().addClass("active");
    })
    $('#step3contentid').on('hide.bs.collapse', function () {
        $(this).prev().removeClass("active");
    })


});
