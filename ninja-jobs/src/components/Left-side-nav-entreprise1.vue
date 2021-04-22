<template>
  <div class="Left-side-nav-entreprise1">
    <p class="pre-title">Vérification de votre compte</p>
    <h1 class="title">Votre entreprise</h1>
    <p class="after-title">Tous les champs sont obligatoires.</p>
    <form action="">
      <label for="raison"
        >Raison sociale
        <input
          type="text"
          id="raison"
          name="raison"
          placeholder="Tre Entreprise"
      /></label>
      <label for="forme"
        >Forme juridique
        <!-- <input type="text" id="forme" name="forme" placeholder="SAS"
      /> -->
        <div class="select_box">
          <select name="forme" id="forme">
            <option value="SAS">SAS</option>
          </select>
        </div>
      </label>
      <label for="SIREN"
        >SIREN
        <input type="text" id="SIREN" name="SIREN" placeholder="84920242323" />
      </label>
      <label for="Capital"
        >Capital
        <input type="text" id="Capital" name="Capital" placeholder="23 300€" />
      </label>
      <label for="Date"
        >Date de création
        <input type="date" id="Date" name="Date" />
      </label>
      <div class="cta-buttons">
        <a @click="Entreprise2()">Continuer plus tard</a>
        <input type="submit" value="Confirmer" @click="Entreprise2()" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    Entreprise2() {
      this.$router.push("/Entreprise2");
    },
  },
};
</script>

<style scoped>
.Left-side-nav-entreprise1 {
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
  margin-top: 20px;
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
  margin-top: -36px;
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
</style>
