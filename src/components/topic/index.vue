<template>
  <div>
    <div class="hero">
      <v-touch class="hero_topic" tag="div" @tap="handleShow(index)"  
      v-for="(item,index) in topicList"
      :key="index"
    >
        <img :src="item.checkedImage" />
      </v-touch>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Topic",
  computed: {
    ...mapState({
      topicList: state => state.city.topicList
    })
  },
  created() {
    this.$store.dispatch("city/handleAsyncTopic");
  },
  methods: {
    handleShow(index) {
     
      this.$store.commit("city/handleShowMutations", index);
    }
  }
  
};
</script>

<style >
.hero {
  height: 1.27rem;
  background: #0f0;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.hero img {
  width: 0.47rem;
  height: 0.47rem;
  border-radius: 50%;
}
</style>