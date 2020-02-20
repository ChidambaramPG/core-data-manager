<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">
          <h4 class="mt-0 header-title mb-4">Lists</h4>
          <a
            href="#"
            @click.prevent="() => handleListSelection(list)"
            v-for="(list, index) in lists"
            :key="index"
            >
            <span class="badge badge-dark badge-pill mr-2 p-2 mb-2"
              v-if="list.selected"
              ><i class="mdi mdi-checkbox-blank-circle text-success"></i>
              {{ list.name }}</span
            >

            <span class="badge badge-light badge-pill mr-2 p-2 mb-2"
              v-else
              ><i class="mdi mdi-checkbox-blank-circle text-success"></i>
              {{ list.name }}</span
            >
            
            </a
          >
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h4 class="mt-0 header-title mb-4">Lists Items</h4>

          <div class="table-responsive order-table">
            <table class="table table-hover mb-0">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      @click="event => addAllCards(event)"
                    />
                  </th>
                  <th>Profile</th>
                  <th
                    scope="col"
                    v-for="(col, index) in getDefaultColumns"
                    :key="index"
                  >
                    {{ col.label }}
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(card, index) in selectedListItems" :Key="index">
                  <td>
                    <input
                      type="checkbox"
                      class="card-checkbox"
                      @click="event => addCard(event, card)"
                    />
                  </td>
                  <th scope="row">
                    <div>
                      <img
                        src="assets/images/users/user-4.jpg"
                        alt=""
                        class="thumb-md rounded-circle mr-2"
                      />
                    </div>
                  </th>
                  <td v-for="(col, index) in getDefaultColumns" :key="index">
                    {{ card[col.field] }}
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
import store from "@/store/index.js";
import firebase from "firebase"
export default {
  name: "ListsTable",
  data() {
    return {
      lists: [],
      selectedListItems:[]
    };
  },
  computed: {
    getDefaultColumns() {
      return store.state.defaultColumns;
    }
  },
  methods:{
    handleListSelection(list){
      // console.log(list)
      let temp = [];
      this.lists.forEach(item => {
        if(item.name == list.name){
          temp.push({...item,selected:true})
        }else{
          temp.push({...item,selected:false})
        }
      })
      this.lists = temp;
      if(list.items.length>0){
        this.selectedListItems = []
        let db = firebase.firestore();
        list.items.forEach(item => {
          db.collection("Cards").doc(item).get().then(resp => {
            this.selectedListItems.push(resp.data())
          })
        });
      }
    }
  },
  created() {
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
        this.lists = temp;

        if(this.lists.length > 0){
          this.handleListSelection(this.lists[0])
        }
      });
  }
};
</script>

<style></style>
