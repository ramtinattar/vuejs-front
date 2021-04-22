<template>
  <div class="Profile3">
    <LeftSideNavProfile3 />
    <RightSideNav />
  </div>
</template>

<script>
// @ is an alias to /src
import RightSideNav from "@/components/Right-side-nav.vue";
import LeftSideNavProfile3 from "@/components/Left-side-nav-profile3.vue";

export default {
  name: "Profile3",
  components: {
    RightSideNav,
    LeftSideNavProfile3,
  },
};
</script>

<style scoped>
.Profile3 {
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

::v-deep .right-side-nav__second-box .full-container:nth-child(2) .circle {
  background: #07d79c;
  border: none;
}
::v-deep .right-side-nav__second-box .full-container:nth-child(2) path {
  fill: white;
}
::v-deep .right-side-nav__second-box .full-container:nth-child(1) path,
::v-deep .right-side-nav__second-box .full-container:nth-child(1) .circle {
  fill: #07d79c;
  border-color: #07d79c;
}
::v-deep .right-side-nav__second-box .full-container:first-child h2,
::v-deep .right-side-nav__second-box .full-container:nth-child(2) h2 {
  color: #000033;
}

::v-deep .right-side-nav__second-box .full-container:nth-child(1) ul,
::v-deep .right-side-nav__second-box .full-container:nth-child(1) .empty-fill,
::v-deep .right-side-nav__second-box .full-container:nth-child(1) br {
  display: none;
}
::v-deep .right-side-nav__second-box .full-container:nth-child(1) .small-fill {
  display: block;
  background-color: #07d79c;
}
::v-deep .right-side-nav__second-box .full-container:nth-child(2) .full-fill {
  height: 84px;
}
::v-deep .right-side-nav__second-box .full-container:nth-child(2) ul li {
  color: #000033;
}
</style>
