<template>
  <div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href='https://fonts.googleapis.com/css?family=Didact Gothic' rel='stylesheet'>
    <div class="box">
      <div class="container">
        <div class="top-header">
          <span class="span">Have an account?</span>
          <header class="header">Login</header>
        </div>
    <form @submit.prevent="submitForm">
        <div class="input-field">
          <input type="text" class="input is-rounded" id="input-new" placeholder="Username" required v-model="username">
          <i class="material-icons">person</i>
        </div>
        <div class="input-field">
          <input type="password" class="input is-rounded" id="input-new" placeholder="Password" required v-model="password">
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
    </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  name: 'Login',
  data (){
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  mounted() {
    document.title = 'Log In | madnar'
  },
  methods: {
    async submitForm() {
      axios.defaults.headers.common["Authorization"] = ""

      localStorage.removeItem("token")

      const formData = {
        username: this.username,
        password: this.password
      }


      await axios
          .post("/api/v1/token/login/", formData)
          .then(response => {
              const token = response.data.auth_token

              this.$store.commit('setToken', token)
                    
              axios.defaults.headers.common["Authorization"] = "Token " + token

              localStorage.setItem("token", token)

              const toPath = this.$route.query.to || '/cart'

              this.$router.push(toPath)
          })
          .catch(error => {
              if (error.response) {
                  for (const property in error.response.data) {
                        this.errors.push(`${property}: ${error.response.data[property]}`)
                  }
              } else {
                  this.errors.push('Something went wrong. Please try again')
                        
                  console.log(JSON.stringify(error))
              }
        })
    }
  }
}
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

#input-new {
  z-index: 1;
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
