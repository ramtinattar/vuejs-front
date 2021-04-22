<template>
  <div class="Entreprise1">
    <LeftSideNavEntreprise1 />
    <RightSideNav />
  </div>
</template>

<script>
// @ is an alias to /src
import RightSideNav from "@/components/Right-side-nav.vue";
import LeftSideNavEntreprise1 from "@/components/Left-side-nav-entreprise1.vue";

export default {
  name: "Entreprise1",
  components: {
    RightSideNav,
    LeftSideNavEntreprise1,
  },
};
</script>

<style scoped>
.Entreprise1 {
  display: flex;
}
::v-deep .right-side-nav__second-box .full-container:first-child .circle {
  background: #07d79c;
  border: none;
}
::v-deep .right-side-nav__second-box .full-container:first-child path {
  fill: white;
}
::v-deep .right-side-nav__second-box .full-container:first-child h2 {
  color: #000033;
}
::v-deep .right-side-nav__second-box .full-container:nth-child(2) ul,
::v-deep .right-side-nav__second-box .full-container:nth-child(2) .empty-fill,
::v-deep .right-side-nav__second-box .full-container:nth-child(2) br {
  display: none;
}
::v-deep .right-side-nav__second-box .full-container:nth-child(2) .small-fill {
  display: block;
}
::v-deep .right-side-nav__second-box .full-container:nth-child(1) .full-fill {
  height: 42px;
}
::v-deep
  .right-side-nav__second-box
  .full-container:nth-child(1)
  ul
  li:first-child {
  color: #000033;
}
</style>
