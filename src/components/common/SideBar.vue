<template>
  <div class="left side-menu">
      <admin-sidebar v-if="usertype=='Admin'"/>
      <sales-sidebar v-if="usertype=='Sales'" />
      <data-entry-sidebar v-if="usertype=='Data Entry'"/>
  </div>
</template>

<script>
import store from "@/store/index.js";
import Papa from 'papaparse';
import firebase from "firebase";
import SalesSidebar from "./sidebars/SalesSidebar.vue";
import DataEntrySidebar from "./sidebars/DataEntrySidebar.vue";
import AdminSidebar from "./sidebars/AdminSidebar.vue";

export default {
  name: "SideBar",
  components:{
    SalesSidebar,
    DataEntrySidebar,
    AdminSidebar
  },
  methods: {
    setContentLayout: page => {
      store.commit("setActivePage", page);
    },
    importExcel(){
      // console.log("upload initiating") 
      document.getElementById("select-csv").click();
    },
    uploadCSV(){
      // console.log("uploading csv",event)
      // // console.log(event)
      let fileInput = document.getElementById('select-csv')
      let singleFile = fileInput.files[0]

      const filereader = new FileReader();
      filereader.readAsText(singleFile);
      filereader.onload = function() {
          let cards = Papa.parse(filereader.result).data
          cards.forEach(card => {

            if(card[0] != ''){
              let name = card[0].split(' ')
              let firstname = '';
              let lastname = '';
              if(name.length > 1){
                firstname = name[0]
                name.shift()
                lastname = name.join()
              }else{
                firstname = card[0]
              }
              let cardObj = {
                addedBy: firebase.auth().currentUser.uid,
                addedOn: new Date(),
                converted: "pending",
                tags: [card[5],card[6],card[7]],
                firstname: firstname,
                lastname: lastname,
                organization: card[2],
                designation: card[1],
                personal_email: card[4],
                personal_phone: card[3],
                status:"active",
                type:card[8],
                category:card[9],
                region:card[10]
              };

              // console.log(cardObj)

              firebase
              .firestore()
              .collection("Cards")
              .add(cardObj)
              .then(() => {
                // // console.log(res)             
              })
              .catch(() => {
                // // console.log(err)
              });
            }

            
          })
         

      };
      // Print the error incase there is one
      filereader.onerror = function() {
          alert("Error: ", filereader.error);
      };
    }

  },
  computed:{
    usertype(){
      return store.state.userType
    }
  }
};
</script>

<style></style>
