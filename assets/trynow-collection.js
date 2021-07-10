// Change items CTA to Try At Home
$(function() {
    $('button[trynow="true"]').append('<input type="hidden" id="properties" name="properties[TryNow]" value="true">');
    $('button[trynow="true"] > #AddToCartText').text("Try At Home - $0.00");
})