<template>
  <div class="Connexion">
    <img
      class="Connexion__logo"
      alt="Vue logo"
      src="../assets/logo_large.png"
    />
    <InputText />
  </div>
</template>

<script>
// @ is an alias to /src
import InputText from "@/components/Input-text.vue";

export default {
  name: "Header",
  components: {
    InputText,
  },
};
</script>

<style>
.Connexion {
  margin: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
}
.Connexion__logo {
  margin-bottom: 35px;
}
</style>
