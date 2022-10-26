<template>
  <section class="showcase">
    <div class="showcase__wrapper container">
      <h2> {{ title }} </h2>
      <div class="showcase__grid">
        <ShowcaseCard
          v-for="item in products"
          :key="item.id"
          :product="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ShowcaseCard from '@/components/showcase/ShowcaseCard'

export default {
  name: 'Sohowcase',

  components: {
    ShowcaseCard
  },

  props: {
    title: {
      type: String
    },

    products: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.showcase {
  margin-bottom: 20px;
}

.showcase__grid {
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 30px;
}
</style>
