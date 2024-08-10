<template>
  <div class="hello">
    <!-- TODO: Uncomment elemen img di bawah ini dan tambahkan source dari gambar logo devcode yang ada di dalam folder assets -->
    <img data-cy="devcode-logo" src="../assets/devcode-logo.png" alt="devcode logo" />
    <div data-cy="devcode-title">
      <!-- TODO: Tambahkan elemen heading 1 di bawah ini dengan berisi kalimat I'm ready
      for the next challenge! -->
      <h1>I'm ready for the next challenge!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin: 15% 0 0;
  text-align: center;

  img {
    width: 15%;
    height: 15%;
  }
}
</style>
