<template>
  <b-col
    tag="section"
    id="content"
    class="pb-5 text-center"
    align-h="center"
    align-v="center"
  >
    <b-row class="text-justify p-0 pb-3">
      Ищет дом {{ animalCurrent.adjective }} {{ animalCurrent.title }}!
    </b-row>
    <b-row class="text-justify p-0 pb-3">
      {{ animalCurrent.pageText }}
    </b-row>
    <b-row>
      <ul class="text-justify bullets-none p-0 m-0">
        <li
          v-for="(item, dindex) in dictOrdered(animalCurrent.description)"
          :key="dindex"
        >
          <b class="text-custom-green-dark">{{ item.details.title }}:</b>
          {{ item.details.value }}
        </li>
      </ul>
    </b-row>
    <b-row class="text-justify pt-5 pb-5">
      <VueGallery
        :images="imageList"
        :index="openImageIndex"
        @close="openImageIndex = null"
        :options="galleryOptions"
      >
        <template v-slot:close>
          <font-awesome-icon :icon="['fa', 'times-circle']" />
        </template>
        <template v-slot:prev>
          <font-awesome-icon :icon="['fa', 'arrow-circle-left']" />
        </template>
        <template v-slot:next>
          <font-awesome-icon :icon="['fa', 'arrow-circle-right']" />
        </template>
      </VueGallery>
      <img
        class="image"
        v-lazy="image"
        v-for="(image, imageIndex) in imageList"
        :key="imageIndex"
        @click="openImageIndex = imageIndex"
      />
    </b-row>
    <b-row class="text-justify p-0 pb-3">
      <ul class="text-justify bullets-none p-0 pb-3 m-0">
        <li
          v-for="(item, deindex) in dictOrdered(
            animalCurrent.descriptionExtended
          )"
          :key="deindex"
        >
          <b class="text-custom-green-dark">{{ item.details.title }}:</b>
          {{ item.details.value }}
        </li>
      </ul>
    </b-row>
    <b-row class="text-justify p-0 pb-1">
      <span
        v-if="
          animalCurrent.address &&
            Object.keys(animalCurrent.address).length !== 0
        "
        class="ymaps-geolink line-height-normal"
        :data-description="animalCurrent.address.description"
        :data-bounds="animalCurrent.address.coordinates"
      >
        {{ animalCurrent.address.value }}
      </span>
      <template v-else>
        Узнать адрес можно связавшись с куратором.
      </template>
    </b-row>
    <b-row class="text-justify p-0 pb-3 pt-3" v-if="animalCurrent.contact">
      <ContactButton
        :name="animalCurrent.contact.name"
        :phone="animalCurrent.contact.phone"
        :hideTime="30"
      />
    </b-row>
    <b-row class="text-justify p-0 pb-5">
      Отдается строго по договору с возможностью отслеживать дальнейшую
      судьбу<template v-if="animalCurrent.conditions"
        >, в {{ animalCurrent.conditions.region }},
        {{ animalCurrent.conditions.keepIn }}</template
      >.
    </b-row>
    <b-row
      class="text-justify p-0 pb-5 text-warning footnote line-height-normal"
    >
      * Если вы позвонили, а животное уже пристроено, или у вас возникли
      сложности в общении с куратором, пожалуйста,
      <a href="#" class="text-warning ml-1"> свяжитесь с нами</a>.
    </b-row>
    <b-row class="text-justify p-0 pb-3">
      <b-col class="text-left">
        <template v-if="animalPrevious[0]">
          <router-link
            :to="{
              name: 'animal',
              params: { animal: animalPrevious[0].route }
            }"
          >
            <font-awesome-icon
              :icon="['fa', 'arrow-circle-left']"
              size="2x"
              fixed-width
            />
          </router-link>
        </template>
      </b-col>
      <b-col class="text-center">
        <router-link :to="{ name: 'animals' }">
          <font-awesome-icon :icon="['fa', 'th-list']" size="2x" fixed-width />
        </router-link>
      </b-col>
      <b-col class="text-right">
        <template v-if="animalNext[0]">
          <router-link
            :to="{
              name: 'animal',
              params: { animal: animalNext[0].route }
            }"
          >
            <font-awesome-icon
              :icon="['fa', 'arrow-circle-right']"
              size="2x"
              fixed-width
            />
          </router-link>
        </template>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { mapState } from "vuex";
import VueGallery from "vue-gallery";
import ContactButton from "@/components/ContactButton.vue";

export default {
  name: "animal",
  data() {
    return {
      openImageIndex: null,
      galleryOptions: {
        closeOnSlideClick: true,
        slideContentClass: "slide-content pt-5 pb-5"
      }
    };
  },
  components: { VueGallery, ContactButton },
  computed: mapState({
    animalPrevious: state => state.animalData.previous,
    animalCurrent: state => state.animalData.current,
    animalNext: state => state.animalData.next,
    imageList: function() {
      return _.map(this.animalCurrent.images, function(item) {
        return `http://192.168.0.105/media/animals/${item}.jpg`;
      });
    }
  }),
  methods: {
    dictOrdered: function(obj) {
      return _.chain(obj)
        .map(function(val, key) {
          return { character: key, details: val };
        })
        .sortBy(function(o) {
          return o.details.position;
        })
        .value();
    }
  },
  watch: {
    $route() {
      this.$store
        .dispatch("getAnimalData", {
          animal: this.$route.params.animal
        })
        .then(() => {
          document.title = this.animalCurrent.title;
        });
    }
  },
  beforeMount() {
    this.$store
      .dispatch("getAnimalData", {
        animal: this.$route.params.animal
      })
      .then(() => {
        document.title = this.animalCurrent.title;
      });
    this.$loadScript(
      "https://api-maps.yandex.ru/2.1/?apikey=7edf9d01-bbdf-4837-82ef-961e270f0337&lang=ru_RU&load=Geolink"
    )
      .then(() => {})
      .catch(() => {});
  }
};
</script>
