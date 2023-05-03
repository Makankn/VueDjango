

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
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <h2 class="title is-4">About Us</h2>
            <p>We are a team of developers passionate about creating amazing web applications that help people solve real-world problems.</p>
          </div>
          <div class="column is-4">
            <h2 class="title is-4">Contact Us</h2>
            <p>Feel free to reach out to us at:</p>
            <ul>
              <li><i class="fas fa-envelope"></i> <a href="mailto:contact@madnar.com">contact@madnar.com</a></li>
              <li><i class="fas fa-phone"></i> <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a></li>
              <li><i class="fas fa-map-marker-alt"></i> 123 Main St, Anytown, USA</li>
            </ul>
          </div>
          <div class="column is-4">
            <h2 class="title is-4">Follow Us</h2>
            <p>Stay up-to-date with the latest news and promotions:</p>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
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

<style scoped>
.footer {
  background-color: #2f2f2f;
  color: #fff;
  padding: 50px 0;
}

.footer h2 {
  color: #fff;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icons a {
  color: #fff;
  font-size: 24px;
  margin-right: 20px;
}

.social-icons a:last-child {
  margin-right: 0;
}
</style>

<style lang="scss">
@import '../node_modules/bulma';
@import '//node_modules/madnar_vue/node_modules/bulma-social/social-providers';
</style>


