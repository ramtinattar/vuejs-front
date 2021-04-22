<template>
  <div class="Input-text">
    <form action="">
      <label for="name">Nom d’entreprise</label>
      <input type="text" id="name" name="name" placeholder="Ex : Antoine" />
      <label for="mail">E-mail</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Ex : antoinedoe@gmail.com"
      />
      <label for="password">Mot de passe</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="*****************"
      />
      <input type="submit" value="SE CONNECTER" @click="Entreprise1()" />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    Entreprise1() {
      this.$router.push("/Entreprise1");
    },
  },
};
</script>

<style lang="css" scoped>
form {
  width: 280px;
  margin: auto;
  text-align: left;
}
input[type="text"],
input[type="password"] {
  display: block;
  margin: 10px auto 20px auto;
  text-align: left;
  width: -webkit-fill-available;
  height: 40px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding-left: 14px;
  outline: none;
}
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: #bdbdbd;
}

input[type="submit"] {
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 25px;
  border: none;
  background: #07d79c;
  border-radius: 2px;
  width: 118px;
  height: 36px;
  color: white;
  font-weight: bold;
  font-size: 11px;
  outline: none;
  cursor: pointer;
}
</style>
