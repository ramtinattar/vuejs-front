<template>
  <div class="Left-side-nav-profil1">
    <p class="pre-title">Vérification de votre compte</p>
    <h1 class="title">Quel est votre poste actuel ?</h1>
    <form action="">
      <input type="radio" id="Directeur" name="choose1" value="Directeur" />
      <label for="Directeur">Je suis le Directeur</label>
      <input type="radio" id="salarié" name="choose1" value="salarié" />
      <label for="salarié">Je suis salarié</label>
      <div class="cta-buttons">
        <a @click="Profile2()">Continuer plus tard</a>
        <input type="submit" value="Confirmer" @click="Profile2()" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    Profile2() {
      this.$router.push("/Profile2");
    },
  },
};
</script>

<style scoped>
.Left-side-nav-profil1 {
  margin: auto;
  width: 692px;
  text-align: left;
}
.pre-title {
  color: #07d79c;
  font-weight: 500;
  font-size: 15px;
}
.title {
  margin-top: 5px;
}
.after-title {
  color: #a3a4a8;
  margin-top: 10px;
}
form {
  margin-top: 51px;
}
input[type="text"],
input[type="date"],
select {
  display: block;
  margin: 14px 0;
  text-align: left;
  width: -webkit-fill-available;
  height: 40px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgb(0 0 0 / 10%);
  border-radius: 2px;
  padding-left: 14px;
  outline: none;
  -moz-appearance: none;
  /* -webkit-appearance: none; */
  appearance: none;
}

form label:nth-child(2),
form label:nth-child(3),
form label:nth-child(4),
form label:nth-child(5) {
  width: 50%;
  display: inline-block;
}
form label:nth-child(4) input {
  width: 91% !important;
  position: relative;
  z-index: 99;
  background: none;
}

select[id="forme"] {
  width: 96% !important;
  position: relative;
  z-index: 99;
  background: none;
}

.select_box:after {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #07d79c;
  position: absolute;
  margin-top: -3vh;
  margin-left: 310px;
  content: "";
  z-index: 98;
}

input[type="date"] {
  padding-right: 10px;
}
input[type="submit"] {
  background: #07d79c;
  border: none;
  width: 99px;
  height: 36px;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;
}
.cta-buttons {
  position: absolute;
  right: 514px;
  bottom: 20px;
}

.cta-buttons a {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  color: #07d79c;
  text-decoration: none;
  cursor: pointer;
}

label {
  width: 100% !important;
  position: relative;
  top: -48px;
  padding: 30px 0 30px 45px;
  border: 1px solid #dfe1e6;
  border-radius: 20px;
  cursor: pointer;
}
input[type="radio"] {
  margin-left: 20px;
}
</style>
