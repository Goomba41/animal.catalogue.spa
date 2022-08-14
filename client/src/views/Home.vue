<template>
  <b-col id="wrapper">
    <Logo />
    <Navigation />
    <Content v-if="$route.name === 'home'" :data="categories" />
    <router-view v-else />
    <Footer />
    <CookieWarning />
    <back-to-top>
      <font-awesome-icon
        :icon="['fa', 'arrow-circle-up']"
        size="3x"
        fixed-width
      />
    </back-to-top>
  </b-col>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Logo from "@/components/Logo.vue";
import Footer from "@/components/Footer.vue";
import Content from "@/components/Content.vue";
import CookieWarning from "@/components/CookieWarning.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    Navigation,
    Logo,
    Footer,
    Content,
    CookieWarning,
  },
  computed: mapState({
    categories: (state) => state.categories,
  }),
  beforeMount() {
    this.$store.dispatch("getCategories");
  },
};
</script>

<style lang="scss">
@import "../assets/outer.scss";
</style>
