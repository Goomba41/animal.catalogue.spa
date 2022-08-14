<template>
  <b-row
    tag="section"
    id="content"
    class="pb-5 text-center"
    align-h="center"
    lign-v="center"
  >
    <template v-if="data.length">
      <template v-for="(row, index) in data">
        <template v-if="row.length % 2 === 0">
          <CardSmall
            v-for="item in row"
            :item="item"
            :rowIndex="index"
            v-bind:key="item._id.$oid"
          />
        </template>
        <template v-else>
          <b-row
            v-bind:key="index"
            v-bind:class="[!(index % 2) ? 'flex-row-reverse left' : 'right']"
          >
            <template v-for="(part, indexPart) in _.chunk(row, 2)">
              <b-col class="p-0" v-if="indexPart == 0" v-bind:key="indexPart">
                <template v-for="item in part">
                  <CardSmall
                    :item="item"
                    :rowIndex="index"
                    v-bind:key="item._id.$oid"
                  />
                </template>
              </b-col>
              <b-col class="p-0" v-bind:key="indexPart" v-else>
                <template v-for="item in part">
                  <CardLarge :item="item" v-bind:key="item._id.$oid" />
                </template>
              </b-col>
            </template>
          </b-row>
        </template>
      </template>
      <infinite-loading
        v-if="this.$route.name != 'home' && data.length"
        @infinite="infiniteHandler"
        :identifier="infiniteId"
      >
        <b-col
          slot="spinner"
          class="pb-5 pt-5"
          align-h="center"
          align-v="center"
        >
          <b-spinner label="Ищем хвостиков..."></b-spinner>
        </b-col>
        <b-col
          slot="no-more"
          class="pb-5 pt-5"
          align-h="center"
          align-v="center"
        >
          Поздравляем! Вы посмотрели всех питомцев здесь (●ᴗ●)
        </b-col>
        <div slot="no-results"></div>
      </infinite-loading>
    </template>
    <template v-else>
      Ура! Все хвостики в этой категории нашли дом! ◖⚆ᴥ⚆◗
    </template>
  </b-row>
</template>

<script>
import CardLarge from "@/components/CardLarge.vue";
import CardSmall from "@/components/CardSmall.vue";

export default {
  name: "Content",
  data() {
    return {
      offset: 0,
      infiniteId: +new Date(),
    };
  },
  components: { CardLarge, CardSmall },
  props: {
    data: Array,
  },
  methods: {
    infiniteHandler($state) {
      if (this.$route.name != "home") {
        this.offset += 11;
        setTimeout(() => {
          this.$store
            .dispatch("getNewAnimalsCategory", {
              category: this.$route.params.category,
              offset: this.offset,
            })
            .then(() => {
              $state.loaded();
              if (this.$store.state.loadingComplete) {
                $state.complete();
              }
            });
        }, 1000);
      }
    },
    resetInfiniteLoading() {
      this.infiniteId += 1;
      this.offset = 0;
    },
  },
};
</script>
