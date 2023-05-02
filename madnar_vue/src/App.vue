<style src="C:\terme 8\project managment\vueDjango\madnar_vue\node_modules\bulma-social\css\all.min.css"></style>
.icon_start {
  font-size: 18px;
}
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
          
          <!-- <router-link to="/summer" class="navbar-item">Summer</router-link>
          <router-link to="/winter" class="navbar-item">Winter</router-link> -->

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/log-in" class="button is-light">Log in</router-link>

              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart</span>
              </router-link>

            </div>
          </div>
        </div>
      </div>
    </nav>

    <section class="section">
      <router-view/>
    </section>

    <!-- <footer class="footer">
      <p class="has-text-centered">SUTIC</p>
      <span class="icon"> 
        <i class ='is-instagram'></i>
      </span>
    </footer> -->
  <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
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
    }
  }
}
</script>




<style lang="scss">
@import '../node_modules/bulma';
@import '//node_modules/madnar_vue/node_modules/bulma-social/social-providers';
</style>
