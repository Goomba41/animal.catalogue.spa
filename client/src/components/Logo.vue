<script setup lang="ts"></script>

<template>
  <div class="py-5 align-middle text-center">
    <router-link
      to="/"
      class="logo-text text-primary-dark hover:text-primary-dark-hover transition-text duration-500"
    >
      Все ещё не все дома?
      <br />
      Возьми друга!
    </router-link>
  </div>
</template>

<style scoped>
.logo-text {
  font-family: "Amatic SC", cursive;
  font-weight: 900;
  font-size: 4rem;
}

@screen sm {
  .logo-text {
    font-size: 4rem;
  }
}
@screen md {
  .logo-text {
    font-size: 6rem;
  }
}
@screen lg {
  .logo-text {
    font-size: 6rem;
  }
}
@screen xl {
  .logo-text {
    font-size: 6rem;
  }
}
@screen 2xl {
  .logo-text {
    font-size: 8rem;
  }
}
</style>
