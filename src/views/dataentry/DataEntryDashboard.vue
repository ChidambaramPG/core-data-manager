<template>
  <div id="wrapper">
    <!-- Top Bar Start -->
    <top-bar />
    <!-- Top Bar End -->

    <!-- ========== Left Sidebar Start ========== -->
    <side-bar />
    <!-- Left Sidebar End -->

    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="content-page">
      <!-- Start content -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="page-title-box">
                <h4 class="page-title">{{ headerizeText(getActivePage) }}</h4>
                <ol class="breadcrumb">
                  <li
                    class="breadcrumb-item active"
                    v-if="getActivePage == 'dashboard'"
                  >
                    An overvew of the latest additons and changes
                  </li>
                  <li
                    class="breadcrumb-item active"
                    v-if="getActivePage == 'cards'"
                  >
                    All availble cads. Sort, filter, add tags and create groups
                  </li>
                  <li
                    class="breadcrumb-item active"
                    v-if="getActivePage == 'new-card'"
                  >
                    Add new card. Upload Image. Add tags.
                  </li>
                  <li
                    class="breadcrumb-item active"
                    v-if="getActivePage == 'users'"
                  >
                    All users registeres in the system. Edit access permissions. Activate and Deavtivate user
                  </li>
                  <li
                    class="breadcrumb-item active"
                    v-if="getActivePage == 'new-user'"
                  >
                    Add new user with acess permissions
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <!-- end row -->

          <div class="page-content-wrapper">
            <!-- <cards-stats/> -->
            <!-- end row -->

            <latest-cards v-if="getActivePage == 'dashboard'" />
            <cards-table v-else-if="getActivePage == 'cards'" />
          </div>
          <!-- end page content-->
        </div>
        <!-- container-fluid -->
      </div>
      <!-- content -->
    </div>
  </div>
</template>
<script>
import store from "@/store/index.js";
import TopBar from "@/components/common/TopBar.vue";
import SideBar from "@/components/common/SideBar.vue";
// import CardsStats from "@/components/dashboard/CardsStats.vue";
import LatestCards from "@/components/dashboard/LatestCards.vue";
import CardsTable from "@/components/dashboard/CardsTable.vue";
import AddNewCard from "@/components/cards/AddNewCard.vue";
import ListsTable from "@/components/lists/ListsTable.vue";
import AddUser from "@/components/users/AddUser.vue";
import AllUsers from "@/components/users/AllUsers.vue";

export default {
  name: "DataEntryDashboard",
  components: {
    TopBar,
    SideBar,
    // CardsStats,
    LatestCards,
    CardsTable,
    AddNewCard,
    ListsTable,
    AddUser,
    AllUsers
  },
  computed: {
    getActivePage() {
      return store.state.activePage;
    }
  },
  methods: {
    headerizeText(str) {
      let header = str.split("-").join(" ");
      return header.charAt(0).toUpperCase() + header.slice(1);
    }
  }
};
</script>
<style></style>
