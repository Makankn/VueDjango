<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link href='https://fonts.googleapis.com/css?family=Didact Gothic' rel='stylesheet'>
  <div class="box">
    <div class="container">
      <div class="top-header">
        <span class="span">Don't have an account?</span>
        <header class="header">Register</header>
      </div>

      <div class="input-field">
        <input type="text" class="input" placeholder="Name" required>
        <i class="material-icons">label</i>
      </div>
      <div class="input-field">
        <input type="text" class="input" placeholder="Email" required>
        <i class="material-icons">mail</i>
      </div>
      <div class="input-field">
        <input type="password" class="input" placeholder="Password" required>
        <i class="material-icons">lock</i>
      </div>
      <div class="input-field">
        <input type="password" class="input" placeholder="Re-type Password" required>
        <i class="material-icons">loop</i>
      </div>
      <div class="policies">
        <input type="checkbox" id="check">
        <label class="span" for="check">I have read and agree</label>
        <label class="policylabel"><a href="#">privacy policies</a></label>
      </div>
      <div class="input-field">
        <input type="submit" class="submit" value="Register">
      </div>

      <div class="login">
        <span class="span">Have an account?</span>
        <label class="loginlabel"><a href="../log-in">Login</a></label>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

.box{
  font-family: "Didact Gothic", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60vh;
  margin: 0 auto;
}

.container{
  display: flex;
  flex-direction: column;
  padding: 0 15px 15px 15px;
}

.span{
  font-size: small;
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
  margin: 0 5px 0 5px;
}

.header{
  font-size: 30px;
  display: flex;
  justify-content: center;
  padding: 0 0 40px 0;
}

.input-field{
  display: flex;
  flex-direction: column;
}

.input{
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 0 0 3px 55px;
  background: rgba(72, 199, 142, 0.1);
}

.material-icons{
  position: relative;
  top: -35px;
  left: 20px;
}

.policies{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: small;
  margin: 0 auto;
  margin-bottom: 20px;
}

.submit{
  border:  none;
  border-radius: 5px;
  font-size: 15px;
  height: 45px;
  width: 100%;
  outline: none;
  background: rgba(72, 199, 142, 0.7);
  cursor: pointer;
  transition: 0.3s;
}

.submit:hover{
  box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
}

.login{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: small;
  margin: 0 auto;
}

</style>