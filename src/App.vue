<template>
  <div id="app">
    <Header v-if="$route.meta.flag"/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from "@common/header"
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
 * {
  margin: 0;
  padding: 0;
}
li,ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: #000;
}
img {
  vertical-align: middle;
  border: none;
}
html,body {
  height: 100%;
}
html {
  font-size: 32vw;
}
body {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}
</style>
