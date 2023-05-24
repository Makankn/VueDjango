<template>
    <div class="page-product">
        <div class="columns is-multiline">
            <div class="column is-9">
                <figure class="resize image mb-6">
                    <img v-bind:src="product.get_image">
                </figure>

               
            </div>

            <div class="column is-3">
                <div class = "arrange">
                    <h1 class="title">{{ product.name }}</h1>

                    <p class="text"> {{ product.description }}</p>
                    <br>
                    <h2>Information :</h2>
                    <h1> Relish in an elevated take on a workwear staple with this blazer from Acne Studios. The design has an elongated single-breasted silhouette and two flap pockets in the front.</h1>
                    <li> Care instructions: dry clean </li>
                    <li> Closure: buttoned front </li>
                    <li>Lining: 100% viscose, fully lined</li>
                    <li>Material: 55% polyester, 45% wool</li>
                </div>
                <br>
                <p><strong>Price: </strong>{{ product.price }}T</p>
                <br>
                <h2> Size </h2>
                <div class="control">
                    <div class="select">
                      <select v-model="selectedSize">
                        <option value="small">Small</option>
                        <option value="large">Large</option>
                        <option value="xlarge">X-Large</option>
                      </select>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <p class="product-colors">Available Colors
                    <span class="black active" data-color-primary="#000" data-color-sec="#212121" data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"></span>
                    <span class="red" data-color-primary="#7E021C" data-color-sec="#bd072d" data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true"></span>
                    <span class="orange" data-color-primary="#CE5B39" data-color-sec="#F18557" data-pic="https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true"></span>
                </p>
                <div class="field has-addons mt-6">
                    <div class="control">
                        <input type="number" class="input" min="1" v-model="quantity">
    
                    </div>
                    

                    <div class="control">
                        <a class="button is-dark" @click="addToCart">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {toast} from 'bulma-toast'
export default {
    name: 'Product',
    data () {
        return {
            product : {},
            quantity : 1
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            this.$store.commit('setIsLoading', true)

            const category_slug = this.$route.params.category_slug
            const product_slug = this.$route.params.product_slug
            await axios
                .get(`/api/v1/products/${category_slug}/${product_slug}`)
                .then(response => {
                    this.product = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            this.$store.commit('setIsLoading', false)
        },
        addToCart(){
            if (isNaN(this.quantity) || this.quantity <1){
                this.quantity=1
            }
            const item ={
                product :this.product, 
                quantity:this.quantity
            }
            this.$store.commit('addToCart', item)
            toast({
                message : 'Item was added to your shopping bag',
                type: 'is-success',
                dismissible: true,
                pauseOnHover: true,
                duration:5000,
                position: 'bottom-right'
            })
        }
    }
}
</script>





<style scoped>

.resize {
    margin-left:auto;
    margin-right:auto;
    width: 400px;
    height: auto;
}
.text{
    position: relative;
    margin-left:auto;
    margin-right:auto;
}
.control a:hover {
    background-color: black;
    color: #fff;
    
}
.button{
    background-color: rgba(72, 199, 142, 0.7);;
}
.button ,.input{
    border-radius: 20px;
}
.product-colors span {
    width: 26px;
    height: 26px;
    top: 7px;
    margin-right: 12px;
    left: 10px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    display: inline-block;
}
.black {
    background: #000;
}

.red {
    background: #D5212E;
}

.orange {
    background: #F18557;
}

.product-colors .active:after{
    content: "";
    width: 36px;
    height: 36px;
    border: 2px solid #000;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    left: -5px;
    top: -5px;
}
@media (max-width: 1080px) {
    .container {
        height: auto;
    }
    .container .imgBx {
        padding: 40px;
        box-sizing: border-box;
        width: 100% !important;
        height: auto;
        text-align: center;
        overflow: hidden;
    }
    .container .imgBx img {
        left: initial;
        max-width: 100%;
        transform: rotate(0deg);
    }
    .details {
        width: 100% !important;
        height: auto;
        padding: 20px;
    }
    .container .details p {
        margin-left: 0;
        max-width: 100%;
    }
}

</style>