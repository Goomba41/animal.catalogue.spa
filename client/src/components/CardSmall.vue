<template>
  <b-card no-body class="grid-cell" style="max-width: 555px; min-width: 555px">
    <b-link
      :to="
        this.$route.params.category
          ? { name: 'animal', params: { animal: item.route } }
          : { name: 'animals', params: { category: item.route } }
      "
    >
      <b-row
        no-gutters
        v-bind:class="[!(rowIndex % 2) ? 'flex-row-reverse left' : 'right']"
      >
        <b-col md="6" height="450" width="450">
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
        </b-col>
        <b-col md="6">
          <b-card-body
            class="h-100 text-center d-flex flex-column justify-content-center"
          >
            <b-card-title>{{ item.title }}</b-card-title>
            <hr />
            <template v-if="item.description instanceof Object">
              <ul vertical class="text-left card-small-description">
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
        </b-col>
      </b-row>
    </b-link>
  </b-card>
</template>

<script>
export default {
  name: "CardSmall",
  data() {
    return {
      offset: 0,
    };
  },
  props: {
    item: Object,
    rowIndex: Number,
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
