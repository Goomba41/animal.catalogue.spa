<template>
  <b-alert
    v-model="showAlert"
    class="position-fixed fixed-bottom m-0 rounded-0 border-custom-green-dark-top cookie-alert"
    style="z-index: 2000;"
    variant="custom-white"
    dismissible
    fade
    @dismissed="CookieDismissed"
  >
    <h4 class="mt-3">На сайте используются файлы cookie</h4>
    <p>
      Во время посещения данного сайта, может использоваться общеотраслевая
      технология, называемая cookie. Файлы cookie представляют собой небольшие
      фрагменты данных, которые временно сохраняются на вашем компьютере или
      мобильном устройстве, и обеспечивают более эффективную работу сайта
      (<b-link
        target="_blank"
        class="text-warning attention"
        href="https://ru.wikipedia.org/wiki/Cookie"
        >подробнее о cookie</b-link
      >). Продолжая просматривать данный сайт, Вы соглашаетесь с
      <b-link
        target="_blank"
        class="text-warning attention"
        :to="{ name: 'cookie' }"
        >использованием файлов cookie</b-link
      >
      и принимаете условия.
    </p>
  </b-alert>
</template>

<script>
export default {
  name: "CookieWarning",
  data() {
    return {
      showAlert: false
    };
  },
  methods: {
    CookieDismissed: function() {
      this.$cookie.set("CookieAccepted", "1", { expires: "1M" });
    }
  },
  mounted() {
    const cookie = this.$cookie.get("CookieAccepted");
    if (!cookie) {
      this.showAlert = true;
    }
  }
};
</script>
