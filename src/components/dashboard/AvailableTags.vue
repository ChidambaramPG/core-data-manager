<template>
  <div>
    <span class="mt-0 header-title mb-4 mr-2">Tags :</span>
    <a
      href="#"
      @click.prevent="() => hangleTagsSelection(tag)"
      v-for="(tag, index) in getAvailableTags"
      :key="index"
      >
      <span class="badge badge-dark badge-pill mr-2 p-2 mb-2"
        v-if="tag.selected"
        ><i class="mdi mdi-checkbox-blank-circle text-success"></i>
        {{ tag.gid }}</span
      >

      <span class="badge badge-light badge-pill mr-2 p-2 mb-2"
        v-else
        ><i class="mdi mdi-checkbox-blank-circle text-success"></i>
        {{ tag.gid }}</span
      >
      
      </a
    >
  </div>
</template>

<script>
import store from "@/store/index.js";
// import firebase from "firebase";
// require("firebase/functions");

export default {
  name: "AvailableTags",
  data() {
    return {
      tagsSelected: []
    };
  },
  computed: {
    getAvailableTags() {
      return store.state.allTags;
    }
  },
  methods: {
    hangleTagsSelection(tag) {
      let tagPresent = this.tagsSelected.includes(tag);

      if (!tagPresent) {
        this.tagsSelected.push(tag);
      } else {
        this.tagsSelected = this.tagsSelected.filter(val => {
          return val != tag;
        });
      }
      // console.log(this.tagsSelected);
      if (this.tagsSelected.length < 1) {
        store.dispatch("fetchAllBusinessCards");
      } else {
        store.commit("setSelectedTags", tag.gid);
      }
    }
  }
};
</script>

<style></style>
