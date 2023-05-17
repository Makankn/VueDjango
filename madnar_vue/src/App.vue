

<template>
  <div id="wrapper">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="logo navbar-item" href="/">
        <img src="https://img.icons8.com/ios-filled/50/null/dress-back-view.png"/>
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="showMobileMenu = !showMobileMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileMenu }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item" exact :class="{ 'router-link-exact-active': $route.path === '/' }"><strong>MadNar</strong></router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Categories</a>

          <div class="navbar-dropdown">
            <router-link to="/summer" class="navbar-item">Summer</router-link>
            <router-link to="/winter" class="navbar-item">Winter</router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <router-link to="/cart" class="navbar-item">
          <span class="icon has-badge-rounded has-badge-success" :data-count="cartTotalLength"><i class="fas fa-shopping-cart"></i></span>
        </router-link>

        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/log-in" class="button is-light">Log in</router-link>
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
            <p>This is our course project as a group of four developers who are passionate about building incredible web applications. .</p>
          </div>
          <div class="column is-4">
            <h2 class="title is-4">Contact Us</h2>
            <p>Feel free to reach out to us at:</p>
            <ul>
              <li><i class="fas fa-envelope"></i> <a href="edu.sharif.edu">edu.sharif.edu</a></li>
              <li><i class="fas fa-phone"></i> <a href="tel:+ 98 (76) 444 22299">+ 98 (76) 444 22299</a></li>
              <li><i class="fas fa-map-marker-alt"></i> Kish Island, Sharif University of Technology</li>
            </ul>
          </div>
          <div class="column is-4">
            <h2 class="title is-4">Follow Us</h2>
            <p>Stay up-to-date with the latest news and promotions:</p>
            <div class="social-icons">
              <a href="https://www.kish.ac.ir/IPPWebV1C041/Persian_WebUI/Default.aspx"><i class="fa fa-university"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="https://github.com/Makankn/VueDjango"><i class="fab fa-github"></i></a>
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

.navbar {
  background-color: #000000;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.navbar-item:hover {
  background-color: transparent !important;
}

.navbar-item.has-dropdown.is-active > a {
  background-color: transparent !important;
}

.navbar-link {
  color: #ffffff;
}

.navbar-dropdown {
  background-color: #ffffff;
}

.navbar-dropdown a {
  color: #363636;
}

.navbar-dropdown a:hover {
  background-color: #f5f5f5;
}

.navbar-burger {
  color: #ffffff;
}

.icon.has-badge-rounded {
  position: relative;
}

.icon.has-badge-rounded::after {
  position: absolute;
  top: -10px;
  right: -10px;
  content: attr(data-count);
  font-size: 10px;
  color: #ffffff;
  background-color: #4caf50;
  border-radius: 50%;
  padding: 2px 5px;
}

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
</style>


