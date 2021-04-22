<template>
  <div class="LoadingPage">
    <img class="logo" src="../assets/logo.png" />
    <div class="container">
      <h2>C’est parfait ! 👌</h2>
      <p>Nous paramétrons votre application...</p>
      <div class="spinner">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
        ><i></i><i></i>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import RightSideNav from "@/components/Right-side-nav.vue";
// import LeftSideNavProfile1 from "@/components/Left-side-nav-profile1.vue";

export default {
  name: "LoadingPage",
  components: {},
};
</script>

<style scoped>
.logo {
  margin-top: 40px;
}
.container {
  margin: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
}
p {
  margin-top: 13px;
}

.spinner {
  height: 100px;
  width: 100px;
  display: inline-block;
  margin: 31px;
  animation: spin 1s steps(12, end) infinite;
}

.spinner i {
  height: 8px;
  width: 8px;
  margin-left: -4px;
  display: block;
  transition: height 1s;
  position: absolute;
  left: 50%;
  transform-origin: center 50px;
  background: #07d79c;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.7);
  border-radius: 10px;
}

.spinner :nth-child(1) i {
  height: 6px;
}
.spinner :hover i {
  height: 6px;
}

.spinner :hover :nth-child(1) i {
  height: 30px;
}

.spinner i:nth-child(1) {
  opacity: 0.08;
}
.spinner i:nth-child(2) {
  transform: rotate(30deg);
  opacity: 0.167;
}
.spinner i:nth-child(3) {
  transform: rotate(60deg);
  opacity: 0.25;
}
.spinner i:nth-child(4) {
  transform: rotate(90deg);
  opacity: 0.33;
}
.spinner i:nth-child(5) {
  transform: rotate(120deg);
  opacity: 0.4167;
}
.spinner i:nth-child(6) {
  transform: rotate(150deg);
  opacity: 0.5;
}
.spinner i:nth-child(7) {
  transform: rotate(180deg);
  opacity: 0.583;
}
.spinner i:nth-child(8) {
  transform: rotate(210deg);
  opacity: 0.67;
}
.spinner i:nth-child(9) {
  transform: rotate(240deg);
  opacity: 0.75;
}
.spinner i:nth-child(10) {
  transform: rotate(270deg);
  opacity: 0.833;
}
.spinner i:nth-child(11) {
  transform: rotate(300deg);
  opacity: 0.9167;
}
.spinner i:nth-child(12) {
  transform: rotate(330deg);
  opacity: 1;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
