<template>
  <div class="Entreprise2">
    <LeftSideNavEntreprise2 />
    <RightSideNav />
  </div>
</template>

<script>
// @ is an alias to /src
import RightSideNav from "@/components/Right-side-nav.vue";
import LeftSideNavEntreprise2 from "@/components/Left-side-nav-entreprise2.vue";

export default {
  name: "Entreprise2",
  components: {
    RightSideNav,
    LeftSideNavEntreprise2,
  },
};
</script>

<style scoped>
.Entreprise2 {
  display: flex;
}

::v-deep .Left-side-nav-entreprise2 form label:nth-child(2),
::v-deep .Left-side-nav-entreprise2 form label:nth-child(3) {
  width: 30% !important;
  margin-right: 34px;
}
::v-deep .Left-side-nav-entreprise2 form label:nth-child(4) {
  width: 30% !important;
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
  height: 84px;
}
::v-deep .right-side-nav__second-box .full-container:nth-child(1) ul li {
  color: #000033;
}
</style>
