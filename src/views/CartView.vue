<template>
  <div class="cart">
    <div class="cart__container container">
      <h2 class="cart__title">Корзина</h2>
      <div class="cart__wrapper">
        <div class="cart__product-col">
          <CartItem
            v-for="item in itemsCart"
            :key="item.id"
            :product="item"
          />
          <p v-show="$store.state.itemsCart.length === 0" class="cart__empty">
            в вашей корзине пусто
          </p>
        </div>
        <div class="cart__col">
          <div class="total-sum">
            <div class="total-sum__row">
              <p class="total-sum__title">итого</p>
              <div class="total-sum__price">₽  {{ result }} </div>
            </div>
            <button type="button" class="total-sum__button">
              Перейти к оформлению
            </button>
          </div>
          <!-- /.total-sum -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem'

import { mapState } from 'vuex'

import { localDB } from '@/localDB'

export default {
  name: 'CartView',

  components: {
    CartItem
  },

  data () {
    return {
      localDB
    }
  },

  computed: {
    ...mapState(['itemsCart']),

    cartTotal () {
      return this.itemsCart.map(
        product => product.price * product.quantity
      )
    },

    result () {
      return this.cartTotal.reduce(
        (sum, current) => sum + current, 0
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {}

.cart__title {
  color: #1C1C27;
  margin-bottom: 14px;
}

.cart__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cart__product-col {
  flex: 0 1 636px;
}

.cart__empty {
  text-transform: uppercase;
}

// total-sum

.cart__col {
  flex-basis: 349px;
}

.total-sum {
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
}

.total-sum__row {
  display: flex;
  justify-content: space-between;
  padding: 22px 22px 15px;
}

.total-sum__title,
.total-sum__price {
  font-size: 15px;
  line-height: 18px;
  color: #000000;
}

.total-sum__title {
  text-transform: uppercase;
}

.total-sum__button {
  width: 100%;
  padding: 22px 0;
  color: #FFFFFF;
  background: #101010;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  transition: background 0.3s ease-in-out;
  @media (any-hover: hover) {
    &:hover {
      background: #FFA542;
    }
  }
}
</style>
