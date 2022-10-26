<template>
  <footer class="footer">
    <div class="footer__row container">
      <div class="footer__logo logo">QPICK</div>
      <div class="footer__col">
        <div class="footer__nav nav-footer">
          <ul class="nav-footer__list">
            <li class="nav-footer__item">
              <a href="#" class="nav-footer__link"> Избранное </a>
            </li>
            <li class="nav-footer__item">
              <a href="#" class="nav-footer__link"> Корзина </a>
            </li>
            <li class="nav-footer__item">
              <a href="#" class="nav-footer__link"> Контакты </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- /.footer__col -->
      <div class="footer__col">
        <a href="#" class="footer__link">Условия сервиса</a>
        <div class="footer__lang lang">
          <span class="lang__icon">
            <img src="@/assets/img/icons/Lang.svg" alt="" />
          </span>
          <div class="lang__button-group">
            <button class="lang__button lang__button--active">Рус</button>
            <button class="lang__button">Eng</button>
          </div>
        </div>
      </div>
      <div class="footer__social social">
        <ul class="social__list">
          <li class="social__item">
            <a href="#" class="social__link">
              <IconVK />
            </a>
          </li>
          <li class="social__item">
            <a href="#" class="social__link">
              <IconWhatsapp />
            </a>
          </li>
          <li class="social__item">
            <a href="#" class="social__link">
              <IconTelegram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import IconVK from '@/components/icons/IconVK'
import IconWhatsapp from '@/components/icons/IconWhatsapp'
import IconTelegram from '@/components/icons/IconTelegram'

export default {
  name: 'TheFooter',

  components: {
    IconVK, IconWhatsapp, IconTelegram
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 0;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0px 0px;
}

.footer__row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.footer__logo,
.footer__social {
  align-self: flex-start;
}

.footer__col {
  display: flex;
  flex-direction: column;
}

.nav-footer {}

.nav-footer__list {
  display: flex;
  flex-direction: column;
  list-style: none;

}

.nav-footer__item {

  &:not(:last-child) {
    margin: 0 0 10px 0;
  }
}

.nav-footer__link, .footer__link {
  color: #000;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  @media (any-hover: hover) {
    &:hover {
      color: #838383;
    }
  }
}

.lang {
  display: flex;
  margin-top: 34px;
}

.lang__button-group {
  margin-left: 20px;
}

.lang__button {
  background: transparent;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #101010;
  &:not(:last-child) {
    margin: 0 15px 0 0;
  }
  &--active {
    font-weight: 700;
    color: #FFA542;
  }
}

.social {}

.social__list {
  display: flex;
  align-items: center;
  list-style: none;
}

.social__item {
  &:not(:last-child) {
    margin: 0 18px 0 0;
  }
}

.social__link {
  display: flex;
}
</style>
