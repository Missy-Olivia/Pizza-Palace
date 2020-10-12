// front-end 
$(".order").click(function(){
    $(".choose").show()
});
$("#del").click(function () {
    alert("Delivery fee is 1000Rwf");
    var address = prompt("Enter your address:");
    alert("Your pizza will be delivered to " + address + ".");
});