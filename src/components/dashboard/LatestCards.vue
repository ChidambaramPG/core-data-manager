<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">
          <h4 class="mt-0 header-title mb-4">Latest Cards</h4>
          <div class="table-responsive order-table">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Organization</th>
                  <th scope="col">Email</th>
                  <th scope="col" colspan="2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(card, index) in allCards" :Key="index">
                  <th scope="row">
                    <div>
                      <img
                        src="assets/images/users/user-4.jpg"
                        alt=""
                        class="thumb-md rounded-circle mr-2"
                      />
                    </div>
                  </th>
                  <td>
                    {{ card.cFirstname }}
                  </td>
                  <td>
                    {{ card.cLastname }}
                  </td>
                  <td>
                    {{ card.cOrganization }}
                    <p class="font-13 text-muted mb-0">
                      {{ card.cDesignation }}
                    </p>
                  </td>
                  <td>{{ card.cEmail }}</td>
                  <td>
                    <span class="badge badge-success badge-pill"
                      ><i
                        class="mdi mdi-checkbox-blank-circle text-success"
                      ></i>
                      Active</span
                    >
                  </td>
                  <td>
                    <div>
                      <a href="#" class="btn btn-primary btn-sm">Edit</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "LatestCards",
  data() {
    return {
      allCards: []
    };
  },
  created() {
    firebase
      .firestore()
      .collection("Cards")
      .where("status", "==", "active")
      .limit(5)
      .onSnapshot(resp => {
        let cards = [];
        resp.forEach(item => {
          cards.push({ ...item.data(), cid: item.id, selected: false });
        });

        this.allCards = cards;
      });
  }
};
</script>

<style></style>
