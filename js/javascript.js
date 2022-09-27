$(document).ready(function () {

    $('.btn-nav-mobile').click(function () {
        if ($('.nav-mobile').css('display') == 'none') {
            $('.nav-mobile').slideDown();
            $('.btn-nav-mobile p:nth-child(1)').css('transform', ' rotate(45deg) translate(4.3px)');
            $('.btn-nav-mobile p:nth-child(2)').css('display', ' none');
            $('.btn-nav-mobile p:nth-child(3)').css('transform', ' rotate(-45deg) translate(4.3px)');
        } else {
            $('.nav-mobile').slideUp();
            $('.btn-nav-mobile p:nth-child(1)').css('transform', ' rotate(0deg) translate(0px)');
            $('.btn-nav-mobile p:nth-child(2)').css('display', ' inline');
            $('.btn-nav-mobile p:nth-child(3)').css('transform', ' rotate(0deg) translate(0px)');
        }
    });
    $('.item-mobile-zoomit').click(function () {
        if ($('.child-item-nav-mobile1').css('display') == 'none') {
            $('.child-item-nav-mobile1').slideDown();
            $('.child-item-nav-mobile2').slideUp();
            $('.child-item-nav-mobile3').slideUp();
            $('.child-item-nav-mobile4').slideUp();
            $('.child-item-nav-mobile5').slideUp();
            $('.child-item-nav-mobile6').slideUp();
            $('.child-item-nav-mobile7').slideUp();
            $('.item-mobile-fanavari i').css('transform', 'rotate(0deg)');
            $('.item-mobile-barresi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-video i').css('transform', 'rotate(0deg)');
            $('.item-mobile-elmi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-kasbokar i').css('transform', 'rotate(0deg)');
            $('.item-mobile-zomplus i').css('transform', 'rotate(0deg)');

            $('.item-mobile-zoomit i').css('transform', 'rotate(-90deg)');
        } else {
            $('.child-item-nav-mobile1').slideUp();
            $('.item-mobile-zoomit i').css('transform', 'rotate(0deg)');
        }
    });
    $('.item-mobile-fanavari').click(function () {
        if ($('.child-item-nav-mobile2').css('display') == 'none') {
            $('.child-item-nav-mobile2').slideDown();
            $('.child-item-nav-mobile1').slideUp();
            $('.child-item-nav-mobile3').slideUp();
            $('.child-item-nav-mobile4').slideUp();
            $('.child-item-nav-mobile5').slideUp();
            $('.child-item-nav-mobile6').slideUp();
            $('.child-item-nav-mobile7').slideUp();
            $('.item-mobile-zoomit i').css('transform', 'rotate(0deg)');
            $('.item-mobile-barresi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-video i').css('transform', 'rotate(0deg)');
            $('.item-mobile-elmi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-kasbokar i').css('transform', 'rotate(0deg)');
            $('.item-mobile-zomplus i').css('transform', 'rotate(0deg)');

            $('.item-mobile-fanavari i').css('transform', 'rotate(-90deg)');
        } else {
            $('.child-item-nav-mobile2').slideUp();
            $('.item-mobile-fanavari i').css('transform', 'rotate(0deg)');
        }
    });
    $('.item-mobile-barresi').click(function () {
        if ($('.child-item-nav-mobile3').css('display') == 'none') {
            $('.child-item-nav-mobile3').slideDown();
            $('.child-item-nav-mobile2').slideUp();
            $('.child-item-nav-mobile1').slideUp();
            $('.child-item-nav-mobile4').slideUp();
            $('.child-item-nav-mobile5').slideUp();
            $('.child-item-nav-mobile6').slideUp();
            $('.child-item-nav-mobile7').slideUp();
            $('.item-mobile-zoomit i').css('transform', 'rotate(0deg)');
            $('.item-mobile-fanavari i').css('transform', 'rotate(0deg)');
            $('.item-mobile-video i').css('transform', 'rotate(0deg)');
            $('.item-mobile-elmi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-kasbokar i').css('transform', 'rotate(0deg)');
            $('.item-mobile-zomplus i').css('transform', 'rotate(0deg)');

            $('.item-mobile-barresi i').css('transform', 'rotate(-90deg)');
        } else {
            $('.child-item-nav-mobile3').slideUp();
            $('.item-mobile-barresi i').css('transform', 'rotate(0deg)');
        }
    });
    $('.item-mobile-video').click(function () {
        if ($('.child-item-nav-mobile4').css('display') == 'none') {
            $('.child-item-nav-mobile4').slideDown();
            $('.child-item-nav-mobile2').slideUp();
            $('.child-item-nav-mobile3').slideUp();
            $('.child-item-nav-mobile1').slideUp();
            $('.child-item-nav-mobile5').slideUp();
            $('.child-item-nav-mobile6').slideUp();
            $('.child-item-nav-mobile7').slideUp();
            $('.item-mobile-zoomit i').css('transform', 'rotate(0deg)');
            $('.item-mobile-fanavari i').css('transform', 'rotate(0deg)');
            $('.item-mobile-barresi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-elmi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-kasbokar i').css('transform', 'rotate(0deg)');
            $('.item-mobile-zomplus i').css('transform', 'rotate(0deg)');

            $('.item-mobile-video i').css('transform', 'rotate(-90deg)');
        } else {
            $('.child-item-nav-mobile4').slideUp();
            $('.item-mobile-video i').css('transform', 'rotate(0deg)');
        }
    });
    $('.item-mobile-elmi').click(function () {
        if ($('.child-item-nav-mobile5').css('display') == 'none') {
            $('.child-item-nav-mobile5').slideDown();
            $('.child-item-nav-mobile2').slideUp();
            $('.child-item-nav-mobile3').slideUp();
            $('.child-item-nav-mobile4').slideUp();
            $('.child-item-nav-mobile1').slideUp();
            $('.child-item-nav-mobile6').slideUp();
            $('.child-item-nav-mobile7').slideUp();
            $('.item-mobile-zoomit i').css('transform', 'rotate(0deg)');
            $('.item-mobile-fanavari i').css('transform', 'rotate(0deg)');
            $('.item-mobile-barresi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-video i').css('transform', 'rotate(0deg)');
            $('.item-mobile-kasbokar i').css('transform', 'rotate(0deg)');
            $('.item-mobile-zomplus i').css('transform', 'rotate(0deg)');

            $('.item-mobile-elmi i').css('transform', 'rotate(-90deg)');
        } else {
            $('.child-item-nav-mobile5').slideUp();
            $('.item-mobile-elmi i').css('transform', 'rotate(0deg)');
        }
    });
    $('.item-mobile-kasbokar').click(function () {
        if ($('.child-item-nav-mobile6').css('display') == 'none') {
            $('.child-item-nav-mobile6').slideDown();
            $('.child-item-nav-mobile2').slideUp();
            $('.child-item-nav-mobile3').slideUp();
            $('.child-item-nav-mobile4').slideUp();
            $('.child-item-nav-mobile5').slideUp();
            $('.child-item-nav-mobile1').slideUp();
            $('.child-item-nav-mobile7').slideUp();
            $('.item-mobile-zoomit i').css('transform', 'rotate(0deg)');
            $('.item-mobile-fanavari i').css('transform', 'rotate(0deg)');
            $('.item-mobile-barresi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-video i').css('transform', 'rotate(0deg)');
            $('.item-mobile-elmi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-zomplus i').css('transform', 'rotate(0deg)');

            $('.item-mobile-kasbokar i').css('transform', 'rotate(-90deg)');
        } else {
            $('.child-item-nav-mobile6').slideUp();
            $('.item-mobile-kasbokar i').css('transform', 'rotate(0deg)');
        }
    });
    $('.item-mobile-zomplus').click(function () {
        if ($('.child-item-nav-mobile7').css('display') == 'none') {
            $('.child-item-nav-mobile7').slideDown();
            $('.child-item-nav-mobile2').slideUp();
            $('.child-item-nav-mobile3').slideUp();
            $('.child-item-nav-mobile4').slideUp();
            $('.child-item-nav-mobile5').slideUp();
            $('.child-item-nav-mobile6').slideUp();
            $('.child-item-nav-mobile1').slideUp();
            $('.item-mobile-zoomit i').css('transform', 'rotate(0deg)');
            $('.item-mobile-fanavari i').css('transform', 'rotate(0deg)');
            $('.item-mobile-barresi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-video i').css('transform', 'rotate(0deg)');
            $('.item-mobile-elmi i').css('transform', 'rotate(0deg)');
            $('.item-mobile-kasbokar i').css('transform', 'rotate(0deg)');

            $('.item-mobile-zomplus i').css('transform', 'rotate(-90deg)');
        } else {
            $('.child-item-nav-mobile7').slideUp();
            $('.item-mobile-zomplus i').css('transform', 'rotate(0deg)');
        }
    });

    $('.btn-search-mobile').click(function () {
        if ($('.input-search-header').css('opacity') == 0) {
            $('.input-search-header').css({
                'opacity': '1',
                'z-index': '100'
            });
            $(this).removeClass('fa-search');
            $(this).addClass('fa-close');
            $(this).css({
                'border': '2px solid #fff',
                'border-radius': '50%',
                'padding': '2px 4px'
            });
        } else {
            $('.input-search-header').css({
                'opacity': '0',
                'z-index': '-100'
            });
            $(this).removeClass('fa-close');
            $(this).addClass('fa-search');
            $(this).css({
                'border': 'none',
                'border-radius': '0',
                'padding': '0'
            });
        }
    });

    $('.btn-search-desktop').click(function () {
        if ($('.input-search-header').css('opacity') == 0) {
            $('.input-search-header').css({
                'opacity': '1',
                'z-index': '100'
            });
            $(this).removeClass('fa-search');
            $(this).addClass('fa-close');
            $(this).css({
                'border': '2px solid #fff',
                'border-radius': '50%',
                'padding': '2px 4px',
                'font-size': '12px'
            });
            $('.fa-user-o').css('transform', 'translateY(2.2px)');
            $('.fa-share-alt').css('transform', 'translateY(2.2px)');
        } else {
            $('.input-search-header').css({
                'opacity': '0',
                'z-index': '-100'
            });
            $(this).removeClass('fa-close');
            $(this).addClass('fa-search');
            $(this).css({
                'border': 'none',
                'border-radius': '0',
                'padding': '0',
                'font-size': '20px'
            });
            $('.fa-user-o').css('transform', 'translateY(0px)');
            $('.fa-share-alt').css('transform', 'translateY(0px)');
        }
    });

    $('.fa-share-alt').click(function () {
        if ($('.sharebox').css('display') == 'none') {
            $('.sharebox').slideDown(500);
        } else {
            $('.sharebox').slideUp(500);
        }
    });

    $('.privacy').hover(function () {
        $('.main-privacy').css('right', '0');
        $('.left-privacy p').css('display', 'none');
    }, function () {
        $('.main-privacy').css('right', '-187px');
        $('.left-privacy p').css('display', 'inline');
    });

    $('.btn-show-login-signUp').click(function () {
        $('.login-signup').css('display', 'inline');
        $('.bg-dark').css('display', 'inline');
    });
    $('.bg-dark').click(function () {
        $('.login-signup').css('display', 'none');
        $('.bg-dark').css('display', 'none');

    });
    $('.btn-close-login-signup').click(function () {
        $('.login-signup').css('display', 'none');
        $('.bg-dark').css('display', 'none');

    });
    $('.chose-login p:nth-child(1)').click(function () {
        $('.form-login').css('display', 'inline');
        $('.form-signup').css('display', 'none');
        $(this).css({
            'border': '1px solid #ddd',
            'border-bottom': 'none',
            'color': '#444'
        });
        $('.chose-login p:nth-child(2)').css({
            'border': 'none',
            'color': '#999'
        });
    });
    $('.chose-login p:nth-child(2)').click(function () {
        $('.form-login').css('display', 'none');
        $('.form-signup').css('display', 'inline');
        $(this).css({
            'border': '1px solid #ddd',
            'border-bottom': 'none',

            'color': '#444'
        });
        $('.chose-login p:nth-child(1)').css({
            'border': 'none',
            'color': '#999'
        });
    });


    if ($(window).scrollTop() <= 200) {
        $('.nav-2').css({
            'position': 'fixed',
            'top': '40px',
            'transition': '0s'
        });
    } else {
        $('.nav-2').css({ //برای اینکه تو رفرش نپره بیاد بالا
            'position': 'fixed',
            'top': '0px',
            'transition': ' 0.0s'
        });
    }

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 140 && $(window).scrollTop() <= 200) {
            $('.nav-2').css({
                'position': 'fixed',
                'top': '-80px',
                'transition': '0s'
            });
        } else if ($(window).scrollTop() >= 201) {
            $('.nav-2').css({
                'position': 'fixed',
                'top': '0px',
                'transition': ' 0.8s'
            });
        } else if ($(window).scrollTop() <= 201) {
            $('.nav-2').css({
                'position': 'absolute',
                'top': '40px',
                'transition': '0s'
            });
        }

    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.top-of-site').fadeIn();
        } else {
            $('.top-of-site').fadeOut();
        }
    });


    $('.dropbtn1').click(function () {
        if($('.myDropdown1').css('display')=='none'){
            $('.myDropdown1').fadeIn();
            $('.myDropdown1').css('display','flex');
            $('.myDropdown1').css('top','45px');
        }else{
            $('.myDropdown1').fadeOut();
            $('.myDropdown1').css('top','65px');
        }
    });
    $('.dropbtn2').click(function () {
        if($('.myDropdown2').css('display')=='none'){
            $('.myDropdown2').fadeIn();
            $('.myDropdown2').css('display','flex');
            $('.myDropdown2').css('display','flex');
            $('.myDropdown2').css('top','45px');
        }else{
            $('.myDropdown2').fadeOut();
            $('.myDropdown2').css('top','65px');
        }
    });
    $('.dropbtn3').click(function () {
        if($('.myDropdown3').css('display')=='none'){
            $('.myDropdown3').fadeIn();
            $('.myDropdown3').css('display','flex');
            $('.myDropdown3').css('top','45px');
        }else{
            $('.myDropdown3').fadeOut();
            $('.myDropdown3').css('top','65px');
        }
    });
    $('.dropbtn4').click(function () {
        if($('.myDropdown4').css('display')=='none'){
            $('.myDropdown4').fadeIn();
            $('.myDropdown4').css('display','flex');
            $('.myDropdown4').css('top','45px');
        }else{
            $('.myDropdown4').fadeOut();
            $('.myDropdown4').css('top','65px');
        }
    });
    $('.dropbtn5').click(function () {
        if($('.myDropdown5').css('display')=='none'){
            $('.myDropdown5').fadeIn();
            $('.myDropdown5').css('display','flex');
            $('.myDropdown5').css('top','45px');
        }else{
            $('.myDropdown5').fadeOut();
            $('.myDropdown5').css('top','65px');
        }
    });
    $('.dropbtn6').click(function () {
        if($('.myDropdown6').css('display')=='none'){
            $('.myDropdown6').fadeIn();
            $('.myDropdown6').css('display','flex');
            $('.myDropdown6').css('top','45px');
        }else{
            $('.myDropdown6').fadeOut();
            $('.myDropdown6').css('top','65px');
        }
    });
    $('.dropbtn7').click(function () {
        if($('.myDropdown7').css('display')=='none'){
            $('.myDropdown7').fadeIn();
            $('.myDropdown7').css('display','flex');
            $('.myDropdown7').css('top','45px');
        }else{
            $('.myDropdown7').fadeOut();
            $('.myDropdown7').css('top','65px');
        }
    });
    $('.dropbtn8').click(function () {
        if($('.myDropdown8').css('display')=='none'){
            $('.myDropdown8').fadeIn();
            $('.myDropdown8').css('display','flex');
            $('.myDropdown8').css('top','45px');
        }else{
            $('.myDropdown8').fadeOut();
            $('.myDropdown8').css('top','65px');
        }
    });
});


function check_valid_inputUsername_signup() {
    let input_username_signUp = document.querySelector('.input-user-signup').value;
    let error1_input_signup = document.querySelector('.p1-input-signup');
    if (input_username_signUp == '') {
        error1_input_signup.innerHTML = 'ورود نام کاربری الزامی است';
    } else if (input_username_signUp.length < 4) {
        error1_input_signup.innerHTML = 'نام کاربری بین 4 تا ۵۰ کاراکتر است';
    } else {
        error1_input_signup.innerHTML = '';
    }

}

function check_valid_inputEmail_signup() {
    let input_email_signUp = document.querySelector('.input-email-signup').value;
    let error2_input_signup = document.querySelector('.p2-input-signup');

    if (input_email_signUp == '') {
        error2_input_signup.innerHTML = 'ورود ایمیل الزامی است';
    } else if (!input_email_signUp.includes('@gmail.com')) {
        error2_input_signup.innerHTML = 'ایمیل وارد شده معتبر نیست';
    } else {
        error2_input_signup.innerHTML = '';

    }
}

function check_valid_inputPassword_signup() {
    let input_password_signUp = document.querySelector('.input-password-signup').value;
    let error3_input_signup = document.querySelector('.p3-input-signup');

    if (input_password_signUp == '') {
        error3_input_signup.innerHTML = 'ورود رمز عبور الزامی است';
    } else if (input_password_signUp.length < 6) {
        error3_input_signup.innerHTML = 'رمز عبور حداقل 6 کاراکتر است';
    } else {
        error3_input_signup.innerHTML = '';
    }
}

function check_valid_inputPasswordagain_signup() {
    let input_password_again_signUp = document.querySelector('.input-password-again-signup').value;
    let input_password_signUp = document.querySelector('.input-password-signup').value;
    let error4_input_signup = document.querySelector('.p4-input-signup');
    if (input_password_again_signUp == '') {
        error4_input_signup.innerHTML = 'ورود تکرار رمز عبور الزامی است';
    } else if (input_password_again_signUp != input_password_signUp) {
        error4_input_signup.innerHTML = 'رمز عبور با تکرار رمز عبور یکسان نیست';
    } else {
        error4_input_signup.innerHTML = '';
    }
}

function check_valid_all_signup() {
    let input_username_signUp = document.querySelector('.input-user-signup').value;
    let input_email_signUp = document.querySelector('.input-email-signup').value;
    let input_password_signUp = document.querySelector('.input-password-signup').value;
    let input_password_again_signUp = document.querySelector('.input-password-again-signup').value;
    let error1_input_signup = document.querySelector('.p1-input-signup');
    let error2_input_signup = document.querySelector('.p2-input-signup');
    let error3_input_signup = document.querySelector('.p3-input-signup');
    let error4_input_signup = document.querySelector('.p4-input-signup');
    if (input_username_signUp == '') {
        error1_input_signup.innerHTML = 'ورود نام کاربری الزامی است';
    } else if (input_username_signUp.length < 4) {
        error1_input_signup.innerHTML = 'نام کاربری بین 4 تا ۵۰ کاراکتر است';
    } else {
        error1_input_signup.innerHTML = '';
    }

    if (input_email_signUp == '') {
        error2_input_signup.innerHTML = 'ورود ایمیل الزامی است';
    } else if (!input_email_signUp.includes('@gmail.com')) {
        error2_input_signup.innerHTML = 'ایمیل وارد شده معتبر نیست';
    } else {
        error2_input_signup.innerHTML = '';

    }

    if (input_password_signUp == '') {
        error3_input_signup.innerHTML = 'ورود رمز عبور الزامی است';
    } else if (input_password_signUp.length < 6) {
        error3_input_signup.innerHTML = 'رمز عبور حداقل 6 کاراکتر است';
    } else {
        error3_input_signup.innerHTML = '';
    }

    if (input_password_again_signUp == '') {
        error4_input_signup.innerHTML = 'ورود تکرار رمز عبور الزامی است';
    } else if (input_password_again_signUp != input_password_signUp) {
        error4_input_signup.innerHTML = 'رمز عبور با تکرار رمز عبور یکسان نیست';
    } else {
        error4_input_signup.innerHTML = '';
    }
}



function check_valid_inputUsername_login() {
    let input_username_login = document.querySelector('.input-username-login').value;
    let error1_input_login = document.querySelector('.p1-input-login');

    if (input_username_login == '') {
        error1_input_login.innerHTML = 'لطفا نام کاربری را وارد کنید';
    } else {
        error1_input_login.innerHTML = '';

    }



}

function check_valid_inputPassword_login() {
    let input_password_login = document.querySelector('.input-password-login').value;
    let error2_input_login = document.querySelector('.p2-input-login');

    if (input_password_login == '') {
        error2_input_login.innerHTML = 'لطفا رمز عبور را وارد کنید';
    } else {
        error2_input_login.innerHTML = '';

    }
}

function check_valid_all_login() {
    let input_username_login = document.querySelector('.input-username-login').value;
    let input_password_login = document.querySelector('.input-password-login').value;
    let error1_input_login = document.querySelector('.p1-input-login');
    let error2_input_login = document.querySelector('.p2-input-login');
    if (input_username_login == '') {
        error1_input_login.innerHTML = 'لطفا نام کاربری را وارد کنید';
    } else {
        error1_input_login.innerHTML = '';

    }
    if (input_password_login == '') {
        error2_input_login.innerHTML = 'لطفا رمز عبور را وارد کنید';
    } else {
        error2_input_login.innerHTML = '';

    }
}


function return_to_top() {
    window.scrollTo({
        top: '0',
        behavior: 'smooth'
    });
}