<template>
  <Content v-if="$route.name === 'animals'" :data="animals" ref="content" />
  <router-view v-else />
</template>

<script>
import Content from "@/components/Content.vue";
import { mapState } from "vuex";

export default {
  name: "animals",
  components: { Content },
  computed: mapState({
    animals: (state) => state.animalsCategory,
  }),
  watch: {
    $route() {
      this.$store
        .dispatch("getAnimalsCategory", {
          category: this.$route.params.category,
        })
        .then(this.$refs.content.resetInfiniteLoading());
    },
  },
  beforeMount() {
    this.$store.dispatch("getAnimalsCategory", {
      category: this.$route.params.category,
    });
  },
};
</script>
