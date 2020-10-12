// front-end 
$(".order").click(function(){
    $(".choose").show()
});
$("#del").click(function () {
    alert("Delivery fee is 1000Rwf");
    var address = prompt("Enter your address:");
    alert("Your pizza will be delivered to " + address + ".");
});
$("#checkout").click(function(event){

    var pieSize = new Array();$("input:checkbox[name='size']:checked").each(function(){
        pieSize.push(this.value)
    });
    var crustType =new Array(); $("input:checkbox[name='crust']:checked").each(function(){
        crustType.push(this.value)
    });
    var topkind =new Array(); $("input:checkbox[name='toppings']:checked").each(function(){
        topkind.push(this.value)
    });
    var pizzaNumber = $("#pizzanumber").val();
    
        event.preventDefault();
        $(".summary").show();
        $("#summary").append("Pizza Size:" + pieSize + "<br>")
        $("#summary").append("Type of Crust:" + crustType + "<br>")
        $("#summary").append("Toppings:" + topkind + "<br>")
        $("#summary").append("Pizza number:" + pizzaNumber + "<br>")
    });
    //back-end
    //creating constructors
function Pizza(pieSize,crustType,topkind, pizzaNumber){
    this.pieSize = pieSize;
    this.crustType = crustType;
    this.topkind = topkind;
    this.pizzaNumber = pizzaNumber
};