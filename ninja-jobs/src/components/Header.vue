<template>
  <div class="header">
    <img class="header__logo" alt="Vue logo" src="../assets/logo.png" />
    <div class="identifiant__box dropdown">
      <div class="dropbtn">
        <img class="header__profile-picture" src="../assets/profile.png" />
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.50022 6.64142C5.29696 6.64142 5.11218 6.56751 4.96435 6.41968L0.344787 1.61533C0.0676128 1.31968 0.0676128 0.857724 0.363265 0.562072C0.658917 0.284898 1.12087 0.284898 1.41653 0.58055L5.50022 4.83055L9.58392 0.58055C9.86109 0.284898 10.3415 0.284898 10.6372 0.562072C10.9328 0.839246 10.9328 1.31968 10.6557 1.61533L6.03609 6.41968C5.88826 6.56751 5.70348 6.64142 5.50022 6.64142Z"
            fill="#07D79C"
          />
        </svg>
      </div>
      <div class="dropdown-content">
        <div class="dropdown__profile-box">
          <img class="header__profile-picture" src="../assets/profile.png" />
          <p class="header__profile-name">Chistian Joallier</p>
        </div>
        <a href="#">Changer d’entreprise</a>
        <a href="#">Équipe</a>
        <a href="#">Société</a>
        <a href="#">Abonnement</a>
        <Triangle />
        <a href="#">Comptes bancaires</a>
        <a href="#">Intégrations</a>
        <Triangle />
        <a href="#">Mes informations</a>
        <a href="#">Parrainer</a>
        <a href="#">Voir les CGU</a>
        <a href="#">Se déconnecter</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Triangle from "@/components/Triangle.vue";

export default {
  name: "Header",
  components: {
    Triangle,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
}

.dropbtn {
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.dropbtn {
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 186px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 10px;
  padding: 20px;
  border-radius: 10px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 10px;
  text-align: left;
}

.dropdown-content a:last-child {
  color: red;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}

.dropdown-content a:hover {
  background-color: #f5f8f7;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown__profile-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}

.header__profile-name {
  margin-left: 6px;
}
</style>
