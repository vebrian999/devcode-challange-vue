<template>
  <div>
    <h1>Selamat datang di Devcode!</h1>
    <h2>
      Silahkan klik tombol di bawah ini untuk melihat hasil akhir dari perubahan
      yang kamu lakukan.
    </h2>
    <div data-cy="router-button">
      <router-link class="router__btn" to="/hello">Lihat hasil</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeCard",
};
</script>
