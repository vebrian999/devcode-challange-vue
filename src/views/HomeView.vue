<template>
  <div class="home">
    <WelcomeCard />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeCard from "@/components/WelcomeCard.vue";

export default {
  name: "HomeView",
  components: {
    WelcomeCard,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 15% 0 0;
  text-align: center;
}
</style>
