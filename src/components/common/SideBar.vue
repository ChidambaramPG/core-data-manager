<template>
  <div class="left side-menu">
    <div class="slimscroll-menu" id="remove-scroll">
      
      <div id="sidebar-menu">
        
        <ul class="metismenu" id="side-menu">
          <li class="menu-title">Main</li>
          

          <li>
            <a href="javascript:void(0);" class="waves-effect"
            @click.prevent="() => setContentLayout('cards')"
              ><i class="mdi mdi-email"></i
              ><span>
                Cards
                </span
            ></a>
          </li>

          <li>
            <a href="javascript:void(0);" class="waves-effect"
            @click.prevent="() => setContentLayout('lists')"
              ><i class="mdi mdi-buffer"></i>
              <span>
                Lists
               </span>
            </a>
          </li>

         <li>
            <a href="javascript:void(0);" class="waves-effect"
            @click.prevent="() => setContentLayout('users')"
              ><i class="mdi mdi-account"></i>
              <span>
                Users
               </span>
            </a>
          </li>

          <li>
            <input type="file" id="select-csv" style="display:none" @change="event => uploadCSV()">
            <a
              href="index.html"
              class="waves-effect"
              @click.prevent="() => importExcel()"
            >
              <i class="mdi mdi-upload"></i
              >
              <span>CSV</span>
            </a>
          </li>
        </ul>
      </div>
      
      <div class="clearfix"></div>
    </div>
    
  </div>
</template>

<script>
import store from "@/store/index.js";
import Papa from 'papaparse';
import firebase from "firebase";
export default {
  name: "SideBar",
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

  }
};
</script>

<style></style>
