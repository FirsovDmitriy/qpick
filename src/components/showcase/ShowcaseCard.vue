<template>
  <article class="card">
    <div class="card__img-wrapper">
      <img
        class="card__img"
        :src="product.img"
        width="219"
        alt=""
      />
    </div>
    <div class="card__content-wrapper">
      <div class="card__row">
        <p class="card__title"> {{ product.title }} </p>
        <p class="card__price"> {{ product.price }} ₽</p>
        <p v-if="product.old_price" class="card__price card__price--old"> {{ product.old_price }} ₽</p>
      </div>
      <div class="card__row">
        <p class="card__rating">
          <img src="@/assets/img/icons/star.svg" alt="" class="card__rating-icon">
          {{ product.rate }}
        </p>
        <button
          @click="addToProduct"
          class="card__button"
        >
          Купить
        </button>
      </div>
    </div>
  </article>
  <!-- /.card -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ShowcaseCard',

  props: {
    product: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  methods: {
    ...mapActions([
      'addToCart'
    ]),

    addToProduct () {
      this.addToCart(this.product)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 15px 20px 26px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card__img-wrapper {
  align-self: center;
  margin: auto 0 55px 0;
}

.card__img {
  display: flex;
  max-width: 100%;
}

.card__row {
  position: relative;
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin: 0 0 25px 0;
  }
}

.card__title {
  color: #1C1C27;
}

.card__price {
  color: #FFA542;
  &--old {
    position: absolute;
    top: 100%;
    right: 0;
    font-size: 13px;
    line-height: 16px;
    text-decoration-line: line-through;
    color: #FFCE7F;

  }
}

.card__rating {
  display: flex;
  align-items: center;
  color: #838383;
}

.card__rating-icon {
  margin: 0 10px 0 0;
}

.card__button {
  font-weight: 600;
  color: #000000;
  background: transparent;
  transition: color 0.3s ease-in-out;
  @media (any-hover: hover) {
    &:hover {
      color: #838383;
    }
  }
}
</style>
