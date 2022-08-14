<template>
  <b-link
    :to="
      this.$route.params.category
        ? { name: 'animal', params: { animal: item.route } }
        : { name: 'animals', params: { category: item.route } }
    "
  >
    <b-card
      no-body
      v-bind:key="item._id.$oid"
      class="grid-cell overlay animated fadeInDownBig"
      style="
        max-width: 555px;
        min-width: 555px;
        max-height: 555px;
        min-height: 555px;
      "
      text-variant="white"
    >
      <b-carousel
        id="carousel-1"
        :interval="randomInterval()"
        background="#ababab"
        img-width="450"
        img-height="450"
        style="text-shadow: 1px 1px 2px #333"
      >
        <template v-if="item.images.length">
          <b-carousel-slide
            v-for="(image, index) in item.images"
            v-bind:key="index"
            :img-src="`http://192.168.0.105/media/thumbnails/${image}.jpg`"
          >
          </b-carousel-slide>
        </template>
        <template v-else>
          <b-carousel-slide img-blank></b-carousel-slide>
        </template>
      </b-carousel>
      <b-card-body
        :overlay="true"
        class="text-center d-flex flex-column justify-content-center"
      >
        <b-card-title tag="h4">
          {{ item.title }}
        </b-card-title>
        <hr />
        <template v-if="item.description instanceof Object">
          <ul vertical class="text-left card-big-description">
            <li
              v-for="ditem in dictOrdered(item.description)"
              v-bind:key="ditem.details.position"
              link-classes="p-0"
            >
              <b>{{ ditem.details.title }}:</b> {{ ditem.details.value }}
            </li>
          </ul>
        </template>
        <template v-else>
          {{ item.description }}
        </template>
      </b-card-body>
    </b-card>
  </b-link>
</template>

<script>
export default {
  name: "CardLarge",
  data() {
    return {
      offset: 0,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    randomInterval() {
      return Math.floor(Math.random() * (10000 - 5000 + 1000) + 5000);
    },
    dictOrdered: function (obj) {
      return this.lodash
        .chain(obj)
        .map(function (val, key) {
          return { character: key, details: val };
        })
        .sortBy(function (o) {
          return o.details.position;
        })
        .value();
    },
  },
};
</script>
