<!-- <template>
    <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Cart</h1>
            </div>

            <div class="column is-12 box">
                <table class="table is-fullwidth" v-if="cartTotalLength">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <CartItem
                            v-for="item in cart.items"
                            v-bind:key="item.product.id"
                            v-bind:initialItem="item"
                            v-on:removeFromCart="removeFromCart" />
                    </tbody>
                </table>

                <p v-else>You don't have any products in your cart...</p>
            </div>

            <div class="column is-12 box">
                <h2 class="subtitle">Summary</h2>

                <strong>{{ cartTotalPrice.toFixed(2) }} T</strong>, {{ cartTotalLength }} items

                <hr>

                <router-link to="/cart/checkout" class="button is-dark">Proceed to checkout</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import CartItem from '@/components/CartItem.vue'

export default {
    name: 'Cart',
    components: {
        CartItem
    },
    data() {
        return {
            cart: {
                items: []
            }
        }
    },
    mounted() {
        this.cart = this.$store.state.cart
    },
    methods: {
        removeFromCart(item) {
            this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
        }
    },
    computed: {
        cartTotalLength() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
        cartTotalPrice() {
            return this.cart.items.reduce((acc, curVal) => {
                return acc += curVal.product.price * curVal.quantity
            }, 0)
        },
    }
}
</script> -->

<template>
    <div class="cart-page">
      <h1 class="title">Cart</h1>
  
      <div v-if="cartTotalLength > 0">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr class="cart-content" v-for="item in cart.items" :key="item.product.id">
              <td>{{ item.product.name }}</td>
              <td>{{ item.product.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.product.price * item.quantity }}</td>
              <td>
                <button class="remove" @click="removeFromCart(item)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
  
        <div class="cart-summary">
          <h2 class="subtitle">Summary</h2>
          <p>
            Total Price: <strong>{{ cartTotalPrice.toFixed(2) }}</strong>
          </p>
          <p>
            Total Items: <strong>{{ cartTotalLength }}</strong>
          </p>
          <button class="checkout-button" @click="checkout">Proceed to Checkout</button>
        </div>
      </div>
  
      <p v-else>You don't have any products in your cart.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cart',
    data() {
      return {
        cart: {
          items: []
        }
      };
    },
    mounted() {
        this.cart = this.$store.state.cart
      // Fetch the cart items from the API or Vuex store
      // and assign them to this.cart.items
    },
    methods: {
      removeFromCart(item) {
        this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
        // Remove the item from the cart
        // using the provided item.product.id
      },
      checkout() {
        // Redirect the user to the checkout page
        // using the router or window.location
      }
    },
    computed: {
      cartTotalLength() {
        // Calculate and return the total number of items in the cart
        return this.cart.items.reduce((acc, curVal) => acc + curVal.quantity, 0);
      },
      cartTotalPrice() {
        // Calculate and return the total price of items in the cart
        return this.cart.items.reduce((acc, curVal) => acc + curVal.product.price * curVal.quantity, 0);
      },
    }
  };
  </script>
  
  <style scoped>
.cart-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cart-content {
  justify-content:space-between;
}

.cart-table {
  width: 60%;
  margin-bottom: 20px;
}

.cart-summary {
  width: 35%;
  margin-top: 50px;
}

.summary-info {
  text-align: right;
  margin-bottom: 10px;
}

.checkout-button {
    border:  none;
    border-radius: 25px;
    font-size: 15px;
    height: 45px;
    width: 100%;
    outline: none;
    background: rgba(72, 199, 142, 0.7);
    cursor: pointer;
    transition: 0.3s;
    border-radius: 20px;
    margin-top: 20px;
}

.checkout-button:hover {
    box-shadow: 1px 5px 7px 1px rgba(0, 0, 0, 0.2);
}

.remove{
    border: none;
    height: 25px;
    border-radius: 20px;
    background: rgba(72, 199, 142, 0.7);
}
</style>