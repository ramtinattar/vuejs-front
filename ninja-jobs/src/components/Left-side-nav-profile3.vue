<template>
  <div class="Left-side-nav-profil3">
    <p class="pre-title">Vérification de votre compte</p>
    <h1 class="title">Vos informations</h1>
    <form action="">
      <div>
        <label for="entreprise"
          >Entrez nom d’entreprise ou adresse postale
          <input
            type="text"
            id="entreprise"
            name="entreprise"
            placeholder="15bis avenue Convention"
          />
        </label>
      </div>
      <div>
        <label for="Code"
          >Code postal
          <input type="text" id="Code" name="Code" placeholder="75015" />
        </label>
        <label for="Ville"
          >Ville de naissance*
          <input type="text" id="Ville" name="Ville" placeholder="Paris" />
        </label>
        <label for="Pays"
          >Pays*
          <input type="text" id="Pays" name="Pays" placeholder="France" />
        </label>
      </div>
      <div>
        <label for="img">
          <svg
            width="28"
            height="23"
            viewBox="0 0 28 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.5113 4.90979L24.7026 18.4507C24.6139 18.8646 24.2592 19.1602 23.8452 19.1602C23.7861 19.1602 23.727 19.1602 23.6678 19.1307C23.1948 19.042 22.8696 18.5689 22.9878 18.0959L25.6192 5.44196L8.64872 1.98283L8.23481 3.87501C8.11655 4.34805 7.6435 4.6437 7.17046 4.55501C6.69742 4.43675 6.40176 3.9637 6.49046 3.49066L7.11133 0.741095C7.22959 0.268052 7.67307 -0.0276006 8.14611 0.0610951L26.8313 3.84544C27.0678 3.90457 27.2748 4.02283 27.3931 4.22979C27.5113 4.43675 27.5409 4.67327 27.5113 4.90979ZM21.9826 21.0524C21.9826 21.7028 21.4505 22.235 20.8 22.235H1.58263C0.932198 22.235 0.400024 21.7028 0.400024 21.0524V6.56544C0.400024 5.91501 0.932198 5.38283 1.58263 5.38283H20.8C21.4505 5.38283 21.9826 5.91501 21.9826 6.56544V21.0524ZM2.76524 15.0507V7.74805H19.2922V14.9915L18.3165 13.9863C17.9322 13.6611 17.4887 13.6611 17.1044 13.9863L14.7687 15.9967L9.15133 11.0298C8.76698 10.675 8.14611 10.675 7.76176 11.0002L2.76524 15.0507ZM19.3218 19.8698V17.7115L17.6661 16.1446L15.4192 18.155C15.0348 18.4802 14.4731 18.4802 14.0887 18.155L8.38263 13.1585L2.76524 17.7411V19.8698H19.3218ZM16.2174 10.7637C16.2174 11.7689 15.4192 12.5672 14.4139 12.5672C13.4087 12.5672 12.5809 11.7394 12.6105 10.7637C12.6105 9.75849 13.4087 8.96023 14.4139 8.96023C15.3896 8.96023 16.2174 9.75849 16.2174 10.7637Z"
              fill="#000033"
            />
          </svg>
          Uploader une attestation d’hebergement
          <span> PDF, JPG, JPEG2000, PNG <br />max 1mo </span>
        </label>
        <input type="file" id="img" name="img" accept="image/*" />
        <p>Le justificatif de domicile doit:</p>
        <ul>
          <li>Mentionner l’adresse à laquelle vous résidez.</li>
          <li>Être à votre nom (sauf si vous êtes hébergé).</li>
          <li>Être daté de moins de 3 mois</li>
        </ul>
      </div>
      <div class="cta-buttons">
        <a @click="LoadingPage()">Continuer plus tard</a>
        <input type="submit" value="Confirmer" @click="LoadingPage()" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    LoadingPage() {
      this.$router.push("/LoadingPage");
    },
  },
};
</script>

<style scoped>
.Left-side-nav-profil3 {
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
  margin-top: 26px;
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

/*form label:nth-child(2),
form label:nth-child(3),
form label:nth-child(4),
form label:nth-child(5) {
   width: 50%;
  display: inline-block; 
}*/
/* form label:nth-child(4) input {
  width: 91% !important;
  position: relative;
  z-index: 99;
  background: none;
} */

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

.select_box2:after {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #07d79c;
  position: absolute;
  margin-top: -3vh;
  margin-left: 196px;
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

label[for="Monsieur"],
label[for="Madame"] {
  /* width: 100% !important;
  position: relative;
  top: -48px;
  padding: 30px 0 30px 45px;
  border: 1px solid #dfe1e6;
  border-radius: 20px; */
  margin-right: 12px;
  margin-left: 5px;
}
/* input[type="radio"] {
  margin-left: 20px;
} */
/* form div:nth-child(1) input {
  margin: 0;
} */

form div:nth-child(2) {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
form div:nth-child(2) label {
  width: 30%;
}

/* form div:nth-child(4) {
  display: flex;
  justify-content: space-between;
}
form div:nth-child(4) label:first-child,
form div:nth-child(4) label:nth-child(3) {
  width: 32%;
} */
.select_box2 {
  display: block !important;
  margin-top: 0 !important;
  width: 32%;
}

input#img {
  /* display: inline-block;
  position: relative;
  z-index: 1;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  height: 138px;
  top: -138px; */
  position: relative;
  z-index: 1;
  width: 810px;
  /* opacity: 0; */
  cursor: pointer;
  padding-top: 148px;
  top: -142px;
  left: -119px;
}

form div:nth-child(3) {
  overflow: hidden;
  margin-top: 20px;
}

form div:nth-child(3) p {
  font-weight: 500;
  font-size: 15px;
  color: #a3a4a8;
  margin-top: -120px;
}

label[for="img"] {
  width: 99%;
  height: 138px;
  display: flex;
  flex-direction: column;
  border: 1px dashed #a3a4a8;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  color: #000033;
}

label[for="img"] span {
  color: #a3a4a8;
  display: block;
  margin-top: 9px;
  line-height: 150%;
}

label[for="img"] svg {
  margin: 19px auto 12px auto;
}
ul {
  margin-top: 20px;
  line-height: 26px;
  color: #a3a4a8;
  list-style-type: disc;
}
li {
  margin-left: 20px;
}
</style>
