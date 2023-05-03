

<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="icon_start">
        <i class="mdi mdi-36px"></i>
      </div>
      <div class="navbar-brand">
        
          <!-- <i class="fa-solid fa-bag-shopping" style="color: #354b7e;"></i> -->
        
        <router-link to="/" class="navbar-item"><strong>MadNar</strong></router-link>

        <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobileMenu = !showMobileMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      
      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu}">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Categories
            </a>

            <div class="navbar-dropdown">
              <router-link to="/summer" class="navbar-item">
                Summer
              </router-link>
              <router-link to="/winter" class="navbar-item">
                Winter
              </router-link>
            </div>
          </div>


          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Log in</router-link>

              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart ({{ cartTotalLength}})</span>
              </router-link>

            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      
      <div class="footer-icons">
        <br>
        <center><a href="https://www.google.com/"><img src="https://cdn.icon-icons.com/icons2/3237/PNG/512/instagram_logo_brand_social_media_application_icon_197362.png" alt="Instagram" style="width:42px;height:42px;"></a>
        <a href="https://www.google.com/"><img src="https://th.bing.com/th/id/R.4836fdca1a992b4e59c88f2cff7be154?rik=DlgRDEq6A05pyA&riu=http%3a%2f%2fmosaic5g.io%2fimg%2flogos%2fSharif-University-of-Technology_Logo.png&ehk=ZfxsOMD7ToiFM5Dtq8ppG501GXuGrlWPjwr8U9Ja6zI%3d&risl=&pid=ImgRaw&r=0" alt="University" style="width:42px;height:42px;"></a>
        <a href="https://www.github.com/"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" style="width:42px;height:42px;"></a></center>
      </div>
      <div class="footer-text">
        <br>
        <center>
        <p><a href="/html/default.asp">About us</a></p>
        <p><a href="/html/default.asp">Cantact us</a></p></center>

      </div>
      <span class="icon"> 
        <i class ='is-instagram'></i>
      </span>
    </footer>

    
  </div>
  
</template>


<script>
export default {
  name: 'DropdownMenu',
  data() {
    return{
      showMobileMenu: false,
      cart: {
        items :[]
      }
    }
  },
  beforeCreate(){
    this.$store.commit('initializeStore')
  },
  mounted (){
    this.cart = this.$store.state.cart
  },
  computed :{
    cartTotalLength (){
      let totalLenght=0
      
      for (let i =0; i<this.cart.items.length; i++){
        totalLenght += this.cart.items[i].quantity
      }
      return totalLenght
    }
  }
}
</script>



<style>


.footer-icons a {
  margin: 0 10px; /* adds spacing between the icons */
}
.footer-text a {
  display: inline-block;
  
}

</style>

<style lang="scss">
@import '../node_modules/bulma';
@import '//node_modules/madnar_vue/node_modules/bulma-social/social-providers';
</style>


