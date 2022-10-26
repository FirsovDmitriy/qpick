<template>
  <header class="header">
    <div class="header__row container">
      <router-link class="header__logo logo" to="/">QPICK</router-link>
      <div class="actions">
        <ul class="actions__list">
          <li class="actions__item">
            <a href="#" class="actions__favorite">
              <IconHeart class="actions__icon" />
              <span class="actions__label">4</span>
            </a>
          </li>
          <li class="actions__item">
            <router-link class="actions__cart" to="/cart">
              <IconCart class="actions__icon" />
              <span v-show="quantity" class="actions__label">
                {{ quantity }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import IconCart from '@/components/icons/IconCart'
import IconHeart from '@/components/icons/IconHeart'

export default {
  name: 'TheHeader',

  components: {
    IconCart, IconHeart
  },

  computed: {
    quantity () {
      return this.$store.state.itemsCart.length
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  padding: 15px 0;
  margin: 0 0 30px 0;
}

.header__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  text-decoration: none;
  color: inherit;
}

.actions {
  display: flex;
}

.actions__list {
  list-style: none;
  display: flex;
  align-items: center;
}

.actions__item {
  position: relative;
  padding: 0 20px;
}

.actions__favorite,
.actions__cart {
  display: flex;
  transition: all 0.3s ease-in-out;
  @media (any-hover: hover) {
    &:hover {
      .actions__icon {
        fill: #000;
      }
    }
  }
}

.actions__label {
  position: absolute;
  top: -5px;
  left: 40px;
  width: 16px;
  height: 16px;
  background: #FFA542;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
}
</style>
