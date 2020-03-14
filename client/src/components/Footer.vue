<template>
  <b-row tag="footer" id="footer" class="pb-5">
    <b-col id="wrapper">
      <b-row id="socials" align-h="center" align-v="center" class="pb-3">
        <b-link href="https://vk.com/public181634653" class="pr-2 link-vk">
          <font-awesome-icon :icon="['fab', 'vk']" size="2x" fixed-width />
        </b-link>
        <b-link
          href="https://instagram.com/dog_smile_kirov/"
          class="pr-2 link-instagram"
        >
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            size="2x"
            fixed-width
          />
        </b-link>
      </b-row>
      <b-row id="contacts" align-h="center" align-v="center">
        <b-nav align="center">
          <b-nav-item target="_blank" href="https://vk.com/goomba41">
            Ⓒ {{ startYear }} {{ currentYear }}
          </b-nav-item>
          <b-nav-item target="_blank" href="tel:+79229471982"
            >+7 (922) 947-19-82</b-nav-item
          >
          <b-nav-item target="_blank" href="mailto:ask@nevsedoma.ru">
            ask@nevsedoma.ru
          </b-nav-item>
        </b-nav>
      </b-row>
      <b-row id="services" align-h="center" align-v="center">
        <b-nav align="center">
          <b-nav-item
            target="_blank"
            href="https://forms.yandex.ru/u/5e4b6aad3775d6014ccbec1c/"
            >Заказать фотосессию</b-nav-item
          >
          <b-nav-item :to="{ name: 'publication' }"
            >Размещение в каталоге</b-nav-item
          >
        </b-nav>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      startYear: 2019
    };
  },
  computed: {
    currentYear: function() {
      const currentYear = new Date().getFullYear();
      if (currentYear !== this.startYear) {
        return ` - ${currentYear}`;
      }
      return null;
    }
  }
};
</script>
