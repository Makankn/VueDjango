<template>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>
<!-- <img src="C:\Users\AsusIran\Desktop\n.png" style="width:300px;height:200px;"> -->
<h2>Checkout</h2>

<div class="row">
    <div class="col-75">
        <div class="container">
            <form action="/action_page.php">

                <div class="row">
                    <div class="col-50">
                        <h3>Billing Address</h3>
                        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" >
                        <label for="email"><i class="fa fa-envelope"></i> Email</label>
                        <input type="text" id="email" name="email" >
                        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" name="address" >
                        <label for="city"><i class="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" >

                        <div class="row">
                            <div class="col-50">
                                <label for="state">State</label>
                                <input type="text" id="state" name="state" >
                                 <label for="zip">Zip</label>
                                <input type="text" id="zip" name="zip" >
                            </div>
                           
                        </div>
                         <div class="col-50">
                        <h3>Payment</h3>
                        <label for="fname">Accepted Cards</label>
                        <div class="icon-container">
                            <i class="fa fa-cc-visa" style="color:navy;"></i>
                            <i class="fa fa-cc-amex" style="color:blue;"></i>
                            <i class="fa fa-cc-mastercard" style="color:red;"></i>
                            <i class="fa fa-cc-discover" style="color:orange;"></i>
                        </div>
                        <label for="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" >
                        <label for="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" >
                        <label for="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" >
                        <div class="row">
                            <div class="col-50">
                                <label for="expyear">Exp Year</label>
                                <input type="text" id="expyear" name="expyear" >
                                <label for="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" >
                            </div>
                        
                        </div>
                    </div>
                    </div>

                   

                </div>
                <label>
                    <label>
                            <input type="checkbox" :checked="true" name="sameadr"> Shipping address same as billing
                    </label>
                </label>
                <input type="submit" value="Continue to checkout" class="btn">
            </form>
        </div>
    </div>
</div>


</body>
</template>

<style scoped>
body {
    font-family: Arial;
    font-size: 22px;
    padding: 8px;
}

* {
    box-sizing: border-box;
}

.row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -16px;
}


.col-50 {
    -ms-flex: 50%;
    flex: 50%;
}

.col-75 {
    -ms-flex: 75%;
    flex: 75%;
}


.col-50,
.col-75 {
    padding: 0 16px;
}

.container {
    background-color: #FFFFFF;
    padding: 5px 20px 15px 20px;
    
   
}

input[type=text] {
    width: 40%;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

label {
    margin-bottom: 10px;
    display: block;
}

.icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 30px;
}

.btn {
    background-color: #000000;
    color: white;
    padding: 20px;
    margin: 10px 0;
    border: none;
    width: 40%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 26px;
}

.btn:hover {
    background-color: #45a049;
}

a {
    color: #45a049;
}

hr {
    border: 1px solid lightgrey;
}

span.price {
    float: right;
    color: grey;
}


@media (max-width: 800px) {
    .row {
        flex-direction: column-reverse;
    }
    .col-25 {
        margin-bottom: 20px;
    }
}
</style>