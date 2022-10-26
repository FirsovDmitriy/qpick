<template>
  <TheHeader />
  <main class="page-content">
    <router-view />
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',

  components: {
    TheHeader, TheFooter
  }
}
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100%;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  background-color: #EAEAEA;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex: auto;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

h2 {
  font-size: 20px;
  line-height: 24px;
  color: #838383;
  margin: 0 0 20px 0;
}

.logo {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #101010;
}
</style>
