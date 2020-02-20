<template>
  <div class="row">
    <div class="col-xl-3 col-md-6">
      <div class="card bg-primary mini-stat position-relative">
        <div class="card-body">
          <div class="mini-stat-desc">
            <h6 class="text-uppercase verti-label text-white-50">Cards</h6>
            <div class="text-white">
              <h6 class="text-uppercase mt-0 text-white-50">Cards</h6>
              <h3 class="mb-3 mt-0">{{ cards.length }}</h3>
              <div class="">
                <span class="badge badge-light text-info"> +11% </span>
                <span class="ml-2">From previous period</span>
              </div>
            </div>
            <div class="mini-stat-icon">
              <i class="mdi mdi-cube-outline display-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card bg-primary mini-stat position-relative">
        <div class="card-body">
          <div class="mini-stat-desc">
            <h6 class="text-uppercase verti-label text-white-50">Lists</h6>
            <div class="text-white">
              <h6 class="text-uppercase mt-0 text-white-50">Lists</h6>
              <h3 class="mb-3 mt-0">{{ groups.length }}</h3>
              <div class="">
                <span class="badge badge-light text-danger"> -29% </span>
                <span class="ml-2">From previous period</span>
              </div>
            </div>
            <div class="mini-stat-icon">
              <i class="mdi mdi-buffer display-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card bg-primary mini-stat position-relative">
        <div class="card-body">
          <div class="mini-stat-desc">
            <h6 class="text-uppercase verti-label text-white-50">Users</h6>
            <div class="text-white">
              <h6 class="text-uppercase mt-0 text-white-50">Users</h6>
              <h3 class="mb-3 mt-0">{{ users.length }}</h3>
              <div class="">
                <span class="badge badge-light text-primary"> 0% </span>
                <span class="ml-2">From previous period</span>
              </div>
            </div>
            <div class="mini-stat-icon">
              <i class="mdi mdi-tag-text-outline display-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card bg-primary mini-stat position-relative">
        <div class="card-body">
          <div class="mini-stat-desc">
            <h6 class="text-uppercase verti-label text-white-50">Tags</h6>
            <div class="text-white">
              <h6 class="text-uppercase mt-0 text-white-50">Tags</h6>
              <h3 class="mb-3 mt-0">{{ tags.length }}</h3>
              <div class="">
                <span class="badge badge-light text-info"> +89% </span>
                <span class="ml-2">From previous period</span>
              </div>
            </div>
            <div class="mini-stat-icon">
              <i class="mdi mdi-briefcase-check display-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: "cardsStats",
  data() {
    return {
      cards: [],
      tags: [],
      groups: [],
      users: []
    };
  },
  created() {
    this.fetchAllBusinessCards();
    this.fetchAllUsers();
    this.fetchCategoriesList();
    this.fetchAllTags();
  },
  methods: {
    fetchAllBusinessCards() {
      firebase
        .firestore()
        .collection("Cards")
        .where("status", "==", "active")
        .onSnapshot(resp => {
          let cards = [];
          resp.forEach(item => {
            cards.push({ ...item.data(), cid: item.id, selected: false });
          });
          this.cards = cards;
        });
    },
    fetchAllUsers() {
      firebase
        .firestore()
        .collection("Users")
        .onSnapshot(resp => {
          let users = [];
          resp.forEach(item => {
            users.push({ ...item.data(), uid: item.id });
          });
          this.users = users;
        });
    },

    fetchCategoriesList() {
      let temp = [];
      firebase
        .firestore()
        .collection("Groups")
        .where("addedBy", "==", firebase.auth().currentUser.uid)
        .get()
        .then(resp => {
          resp.forEach(item => {
            temp.push({ ...item.data(), gid: item.id, selected: false });
          });
        });
      this.groups = temp;
    },
    fetchAllTags() {
      firebase
        .firestore()
        .collection("Tags")
        .onSnapshot(resp => {
          // temp = [];
          let temp = [];
          //// console.log("fetched again")
          resp.forEach(item => {
            temp.push({ ...item.data(), gid: item.id, selected: false });
          });
          //// console.log("fetched tags:",temp)
          this.tags = temp;
        });
    }
  }
};
</script>

<style scoped>
.bg-primary {
  background-color: #f16c69 !important;
}
</style>
