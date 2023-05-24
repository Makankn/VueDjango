<template>
  <div class="home">
    <section class="hero is-medium mb-6">
      <div class="text hero-body has-text-centered">
        <p class="title has-text-light">
          <span class="first">Welcome to MadNar</span>
        </p>
        <p class="subtitle">
          Experience the best quality with us!
        </p>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest products</h2>
      </div>

      <div
        class="column is-3"
        v-for="product in latestProducts"
        :key="product.id">
    
      <div class="box">
        <div class="container">
          <figure class="image">
            <img v-bind:src="product.get_thumbnail">
          </figure>

          <div class="product-details">
            <h3 class="is-size-4">{{ product.name }}</h3>
            <p class="is-size-6 has-text-grey">{{ product.price }}T</p>
          </div>
        </div>
          <router-link :to="product.get_absoulute_url" class="button is-dark">View Details</router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HomeView',
  data() {
    return {
      latestProducts: []
    }
  },
  components: {
  
  },
  mounted() {
    this.getLatestProducts()
  },
  methods: {
    getLatestProducts() {
      axios
        .get('/api/v1/latest-products/')
        .then(response => {
          this.latestProducts = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>


<style scoped>
.home .hero::before {
  content: "";
  background-image: url('https://img.rawpixel.com/private/static/images/website/2022-05/upwk61843118-wikimedia-image-kowc5fl7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=fa1fe774ca2208773517b43dfd2b4f46');
  background-size: cover;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%;
}
  
  .text {
    position: relative;
    z-index: 1;
  }
  
  .first {
    color: rgb(15, 15, 15);
    position: relative;
    bottom: 70px;
    opacity: 1;
  }
  
  .columns {
    margin-top: 50px;
  }


  .container{
    padding: 0 auto;
    margin-top: 20px;
    margin-left: 20px;
  }
  .box{
    padding: 0;
    display: block;
    width: 250px;
    height: 350px;
  }

  .image {
    width: 180px;
    height: 240px;
  }

  .button{
    margin-top: 0px;
  }

</style>

