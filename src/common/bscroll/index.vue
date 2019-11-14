<template>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "Bscroll",
  mounted() {
   new Bscroll(this.$refs.wrapper)
  },
};
</script>

<style>
.wrapper {
  height: 100%;
}
</style>