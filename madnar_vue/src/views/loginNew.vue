<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link href='https://fonts.googleapis.com/css?family=Didact Gothic' rel='stylesheet'>
  <div class="box">
    <div class="container">
      <div class="top-header">
        <span class="span">Have an account?</span>
        <header class="header">Login</header>
      </div>

      <div class="input-field">
        <input type="text" class="input is-rounded" placeholder="Username" required>
        <i class="material-icons">person</i>
      </div>
      <div class="input-field">
        <input type="password" class="input is-rounded" placeholder="Password" required>
        <i class="material-icons">key</i>
      </div>
      <div class="input-field is-rounded">
        <input type="submit" class="submit" value="Login">
      </div>
      <div class="logos">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-google"></i>
      </div>

      <div class="bottom">
        <div class="left">
          <input type="checkbox" id="check">
          <label class="checklabel" for="check">Remember Me</label>
        </div>
        <div class="right">
          <label><a href="#">Forgot password?</a></label>
        </div>
      </div>

      <div class="register">
        <span class="span">Don't have an account?</span>
        <label class="reglabel"><a href="../register">Register</a></label>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

.logos{
  display: flex; 
  justify-content: center; 
  align-items: center; 
  margin-top: 1rem;
}

.fa-facebook{
  font-size: 50px;
  /* margin-right: 1rem; */
  color: #3b5998;
}

.fa-google{
  font-size: 45px;
  margin-left: 1rem;
  color: 	#DB4437;
}
.box{
  font-family: "Didact Gothic", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 60vh;
  margin:0 auto;
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
  /* border-radius: 5px; */
  padding: 0 0 3px 55px;
  background: rgba(72, 199, 142, 0.1);
}

.material-icons{
  position: relative;
  top: -35px;
  left: 20px;
}

.submit{
  border:  none;
  border-radius: 25px;
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

.bottom{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: small;
  margin-top: 10px;
}

.left{
  display: flex;
}

.checklabel{
  margin-left: 5px;
}

.register{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: small;
  margin: 0 auto;
}

.reglabel{
  margin-left: 5px;
}

</style>