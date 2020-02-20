<template>
  <div class="row">
    <div class="col-12">
      <div class="m-b-20">
        <cards-data-table />
      </div>
    </div>
    <!-- end col -->

    <div class="col-12">
      <div class="m-b-20">
        <available-tags />
      </div>
    </div>
  </div>
</template>

<script>
// import DataTable from "vue-materialize-datatable";
import CardsDataTable from "./CardsDataTable.vue"
import AvailableTags from "./AvailableTags.vue";
// import firebase from "firebase";
import store from "@/store/index.js";
// import CardsDataTableVue from './CardsDataTable.vue';
export default {
  name: "CardsTable",
  data() {
    return {
      
      allCards: [],
      tags:[],
      
    };
  },

  components: {
    // datatable: DataTable,
    AvailableTags,
    CardsDataTable

  },
  methods: {
    removeInitialC(str) {
      if (str[0] === "c" && str[1] === str[1].toUpperCase()) {
        return str.slice(1);
      } else {
        return str;
      }
    }
  },
  computed:{
    
  },
  created() {
    store.dispatch("fetchAllBusinessCards");
    store.dispatch("fetchAllTags")
  }
};
</script>

<style></style>
