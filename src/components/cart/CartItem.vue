<template>
  <article class="cart-item">
    <div class="cart-item__row">
      <div class="cart-item__img-wrapper">
        <img
          :src="product.img"
          width="146"
          height="136"
          alt=""
          class="cart-item__img"
        />
      </div>
      <div>
        <p class="cart-item__title"> {{ product.title }} </p>
        <p class="cart-item__price"> {{ product.price }} ₽</p>
      </div>
    </div>
    <div class="cart-item__row cart-item__row--2">
      <div class="cart-item__counter">
        <button
          @click="minus"
          class="cart-item__minus"
          :disabled="product.quantity === 1"
        >
          <img src="@/assets/img/icons/minus.svg" alt="" class="">
        </button>
        <span class="cart-item__number"> {{ product.quantity }} </span>
        <button @click="plus" class="cart-item__plus">
          <img src="@/assets/img/icons/plus.svg" alt="">
        </button>
      </div>
      <div class="cart-item__total-sum">
        {{ product.price * product.quantity }} ₽
      </div>
    </div>
    <!-- /.cart-item__row -->
    <button @click="removeCard" class="cart-item__delete">
      <img src="@/assets/img/icons/red-cart.svg" alt="">
    </button>
  </article>
  <!-- /.cart-item -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CartItem',

  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  computed: {},

  methods: {
    ...mapActions(['removeFromCart', 'incrementItem', 'decrementItem']),

    removeCard () {
      this.removeFromCart(this.product.id)
    },

    minus () {
      this.decrementItem(this.product.id)
    },

    plus () {
      this.incrementItem(this.product.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  position: relative;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  &:not(:last-child) {
    margin: 0 0 20px 0;
  }
}

.cart-item__row {
  display: flex;
  align-items: center;
  & + & {
    margin-top: 18px;
  }
  &--2 {
    justify-content: space-between;
  }
}

.cart-item__img-wrapper {
  margin: 0 25px 0 0;
}

.cart-item__title {
  font-weight: 500;
  margin-bottom: 12px;
}

.cart-item__price {
  font-size: 15px;
  line-height: 18px;
  color: #AAAAAA;
}

.cart-item__counter {
  display: flex;
  align-items: center;
  width: 125px;
  justify-content: space-between;
}

.cart-item__minus,
.cart-item__plus {
  width: 35px;
  height: 30px;
  background: #FFCE7F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-in-out;
  @media (any-hover: hover) {
    &:hover {
      background: #FFA542;
    }
  }
}

.cart-item__minus {
  &:disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
}

.cart-item__total-sum {
  font-size: 15px;
  line-height: 18px;
  color: #1C1C27;
}

.cart-item__delete {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  display: flex;
}
</style>
