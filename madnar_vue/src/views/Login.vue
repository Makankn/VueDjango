<template>
  <head>
    <link rel="stylesheet" type ="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <title>Login Page</title>
    
  </head>
  <body>
    <div class="container">
        <div class="image-column">
            <img id="background-img" src="" alt="Background Image">
        </div>
                <!-- <script>
                    const images = ["1.jpg", "2.jpg", "5.jpg" , "4.jpg" , "7.jpg" , "11.png" ];
                    const randomIndex = Math.floor(Math.random() * images.length);
                    const imgUrl = images[randomIndex];
                    document.getElementById("background-img").src = imgUrl;
                </script> -->
        <div class="login-column">
            <!-- <img class="logo" src="logo.png"></img> -->
            <h1 class="title">Login</h1>
            <form class="form">
              <input type="email"  placeholder="Email Address">
              <input type="password" placeholder="password">
              <p>&#8212; Or Login with &#8212;</p>
              <div class="logos">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-google"></i>
              </div>
              <input type="submit" value="Login">
            </form>
            <p class="text">Dont have an account? <a class="login" href="#">Sign In</a></p>
          </div>
    </div>
    
  </body>


</template>




<style scoped>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #f5f5f5;
            font-family: "Montserrat", sans-serif;
        }

        .container{
            display: flex;
            margin: 0;
        }

       .image-column img {
            max-width: 100%;
            width: 100%;
            height: 80%;
            display: block;
        }

        .login-column {
            vertical-align: top;
            max-width: 45%;
            width: 45%;
            padding: 5rem;
            margin-right: 0;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        }

        .title {
            font-size: 1.9rem;
            font-weight: 600;
            text-align: center;
            margin-top: 0;
            margin-bottom: 1.5rem;
            color: #252525;
        }

        .form {
            display: grid;
            grid-gap: 1.5rem;
        }

      
        .form input[type="email"],
        .form input[type="password"] {
            width: 100%;
            padding: 1rem;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            background-color: #f5f5f5;
            color: #252525;
        }
        
        .form input[type="email"]:focus,
        .form input[type="password"]:focus {
            outline: none;
            box-shadow: 0px 0px 5px #0d4b07;
        }


        .form input[type="submit"] {
            display: block;
            width: 100%;
            padding: 1rem;
            background-color: #3b3b3b;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }
        
        .form input[type="submit"]:hover {
            background-color: #7b4205;
        }

        .logo{
            width: 30%;
            margin-top: 0px;
            margin-left: 140px;
            margin-bottom: 50px;
        }

        .login{
            color:#146b0c;
        }

        .text{
            margin-top: 10px;
        }

        .form p {
            text-align: center;
            /* margin-top: 1rem; */
            font-size: 1rem;
            color: #252525;
        }

        .logos{
            display: flex; 
            justify-content: center; 
            align-items: center; 
            margin-top: 1rem;
        }

        .fa-facebook{
            font-size: 50px;
            margin-right: 1rem;
            color: #3b5998;
        }

        .fa-google{
            font-size: 45px;
            margin-left: 1rem;
            color: 	#DB4437;
        }
        
    </style>