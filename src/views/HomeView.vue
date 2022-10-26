<template>
  <Showcase :products="headphones" title="Наушники" />
  <Showcase :products="wirelessHeadphones" title="Беспроводные наушники" />
</template>

<script>
import Showcase from '@/components/showcase/Showcase'
import structure from '@/structure'

export default {
  name: 'HomeView',

  data () {
    return {
      headphones: structure.headphones,
      wirelessHeadphones: structure.wirelessHeadphones
    }
  },

  components: { Showcase }
}
</script>
