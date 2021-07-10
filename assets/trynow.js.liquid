let trynow_total = 0;
/*Elements interaction*/
$('.trynow-button').on('mouseenter', function(){
    $('#properties').val("true");
})

$('.original-button').on('mouseenter', function(){
    $('#properties').val("false");
})

/* UPSELLS */
function getTryNowItems(items){
    let try_now_price = 0;
    items.forEach(item => {
        if (item.properties !== null && item.properties !== undefined) {
            if (item.properties.hasOwnProperty("TryNow")) {
                if (item.properties.TryNow === "true") {
                    try_now_price += (item.price * item.quantity);
                }
            }
        }
    });
    return try_now_price;
}

function changeUpsells(){
    // Check cart for trynow items only on /cart or /products/*
    if(!window.location.href.includes("/cart") && !window.location.href.includes("/products/")){
        return;
    }
    $.ajax({
        type: "GET",
        url: "https://www.100percentpure.com/cart.js",
        success: function(cart) {
            trynow_total = getTryNowItems(cart.items);
            cart_total = cart.total_price;
            if (window.location.href.includes("/cart")) {
                if(trynow_total > 0){
                    $('button[trynow="true"] > #AddToCartText').text("Try At Home - $0.00");
                    $('button[trynow="true"]').attr("name", "properties[TryNow]")
                    $('button[trynow="true"]').attr("value", "true")      
                }
            }else if (window.location.href.includes("/products/")){
                if(trynow_total > 0){
                    if($('button[trynow="true"]').hasClass('disabled')){
                        $('button[trynow="true"]').text("In Your Tote")
                    }else{
                        $('button[trynow="true"]').text("Try At Home - $0.00")
                    }
                    $('button[trynow="true"]').attr("name", "properties[TryNow]")
                    $('button[trynow="true"]').attr("value", "true") 
                }else{
                    if($('button[trynow="true"]').hasClass('disabled')){
                        $('button[trynow="true"]').text("In Your Tote")
                    }else{
                        $('button[trynow="true"]').text("Add To Tote")
                    }
                    $('button[trynow="true"]').attr("name", "")
                    $('button[trynow="true"]').attr("value", "") 
                }
            }
        },
        error: function(error){
            console.log("error");
        },
        cache: false,
        dataType: "json"
    });
}

/* HIW SLIDER */
function createSlider(){
    $('.trynow-steps-slick-container').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
    });
}

/* CART */
$(document).on('click','#trynow-cart-topbutton-hook',() => {
    $('#cart-trigger-btn').trigger('click');
});

/* SIDECART HEIGHT FIX ON PDP */
function changeSidecartSize() {
    if(window.matchMedia('(max-width: 480px)').matches && $('#mobileAddToTote').length > 0){
        var sidecart = $('#CartDrawer');
        if($('.trynow-button-mobile').length > 0 ){
            sidecart.addClass('trynow-pdp-cartdrawer-small');
        } else {
            sidecart.addClass('trynow-pdp-cartdrawer');
        }
    }
}

/* IP Tracking */
function geolocation(){
	let location = OneTrust.getGeolocationData()
    if(location.country === 'US'){
    	$('.trynow_try_for_text').show();
        $('.trynow-button').show();
        $('.trynow-steps').show();
    }else{
    	$('.trynow_try_for_text').hide();
        $('.trynow-button').hide();
        $('.trynow-steps').hide();
    }
}

/* Call Functions */
$( window ).on( "load", function() {
    changeUpsells();
    createSlider();
    changeSidecartSize();
    geolocation();
}) 


/* Redirect to trynow checkout */

function trynowCheckout() {
    $.getJSON('/cart.js', function(cart) {
        var checkoutUrl = "https://100percentpure.trynowcheckout.com/customer-information?shopName=www.100percentpure.com&token=" + cart.token;
        window.location = checkoutUrl;
    });
}