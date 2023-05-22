
<template>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
>

</head>
<body>



<div class="row" style="margin-top:10px">
   
    <div class="col-75">
        
        <div class="container">
            <div class="checkout">
                <h1 ><b>Checkout Form</b></h1>
            </div>
            <form action="/action_page.php">

                <div class="row">
                    <div class="col-50">
                     
                        <h3><b>Billing Address</b></h3>
                        <br>
                        <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
                        <label for="email"><i class="fa fa-envelope"></i> Email</label>
                        <input type="text" id="email" name="email" placeholder="john@example.com">
                        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                        <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
                        <label for="city"><i class="fa fa-institution"></i> City</label>
                        <input type="text" id="city" name="city" placeholder="New York">

                        
                             <div class="col-50"> 
                                <label for="state">State</label>
                                <input type="text" id="state" name="state" placeholder="NY">
                            </div> 
                            <div class="col-50">
                                <label for="zip">Zip</label>
                                <input type="text" id="zip" name="zip" placeholder="10001">
                              
                            </div>
                            <label>
                                <input type="checkbox"  name="sameadr"> Shipping address same as billing
                                </label>
                        
                    </div>

                    <div class="col-50">
                        <h3><b>Payment</b></h3>
                        <br>
                        <label for="fname">Accepted Cards</label>
                        <div class="icon-container">
                            <i class="fa fa-cc-visa" style="color:navy;"></i>
                            <i class="fa fa-cc-amex" style="color:blue;"></i>
                            <i class="fa fa-cc-mastercard" style="color:red;"></i>
                            <i class="fa fa-cc-discover" style="color:orange;"></i>
                        </div>
                        <label for="cname">Name on Card</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe">
                        <label for="ccnum">Credit card number</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
                        <label for="expmonth">Exp Month</label>
                        <input type="text" id="expmonth" name="expmonth" placeholder="September">
                        
                            <div class="col-50">
                                <label for="expyear">Exp Year</label>
                                <input type="text" id="expyear" name="expyear" placeholder="2018">
                            </div>
                            <div class="col-50">
                                <label for="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" placeholder="352">
                            </div>
                        
                    </div>

                </div>  
                
               
                
                <input type="submit" value="Continue to checkout" class="btn" >
                
                
            </form>
        </div>
    </div>
    
</div>

</body>
</template>


<style scoped>
body {

    font-family: "Didact Gothic", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 22px;
    padding: 8px;
    max-width: 60vh;
    margin: 0 auto;
    
    
}

* {
    box-sizing: border-box;
}

.row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 100px;
    
}
.col-75 {
    -ms-flex: 75%;
    flex: 75%;
    padding: 0 50px;
}

.col-50 {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
    padding: 0 60px;
    
}


.container {
    background-color: #ffffff;
    padding: 0 15px 15px 15px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
    margin-top : -20px;
    
    display: flex;
    justify-content: center;
    align-items: center;

}
.checkout {
   text-align: center;
   display: flex;
  flex-direction: row;
  align-items: center;
  font-size: x-large;
  margin-bottom: -2%;
  margin-top: 5%;
  font-family: "Didact Gothic", sans-serif;
 



}


input[type=text] {
    width: 100%;
    margin-bottom: 25px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 50px;
    background-color: #ecf9f3;
}

label {
    margin-bottom: 10px;
    display: block;
}

.icon-container {
    margin-bottom: 20px;
    padding: 10px 0;
    font-size: 24px;
    margin-left: 10px;
}

.btn {
   background-color: rgba(72, 199, 142, 0.7); 
    color: black;
    padding: 16px;
    margin-top: -30px;
    margin-bottom: 30px;
    margin-left: 50px;
    border: none;
    width: 90%;
    border-radius: 50px;
    cursor: pointer;
    font-size: 22px; 
  
     
}

.btn:hover {
   
    box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
}

a {
    color: #2196F3;
}

hr {
    border: 1px solid lightgrey;
}

span.price {
    float: right;
    color: black;
}


/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the "cart" column go on top) */
@media (max-width: 800px) {
    
    .row {
        flex-direction: column-reverse;
    }
    
}
</style>