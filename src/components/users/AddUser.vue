<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card m-b-30">
        <div class="card-body">
          <h4 class="mt-0 header-title">User</h4>
          <p class="text-muted m-b-30">
            Add user image
          </p>

          <div class="">
            <a class="" :href="image">
              <img
                :src="image"
                class="img-fluid mx-auto d-block shadow"
                alt="Responsive image"
                id="cardImage"
                v-if="!imagePresent"
              />
              <img
                :src="image"
                class="img-fluid mx-auto d-block shadow"
                alt="Responsive image"
                id="cardImage"
                v-else
              />
            </a>
          </div>
          <div class="mt-2">
            <input
              class="form-control"
              type="file"
              value="Select File"
              id="cardImageSelect"
              @change="() => handleFileSelected()"
            />
          </div>
        </div>
      </div>
      <div class="card m-b-30">
        <div class="card-body">
          <h4 class="mt-0 header-title">Access Control</h4>

          <div class="row pt-2">
            <div class="col-md-12 mb-2 pb-2">
              <h5
                class="mt-0 header-title mb-4"
                style="font-size:13px;color:#b4b4b4"
              >
                State
              </h5>
              <div class="row">
                <div
                  class="col-md-3"
                  v-for="(state, index) in states"
                  :key="index"
                >
                  <input type="checkbox" class="states-filter" :id="state"  @click="() => addToSelectedStates(state)"/>
                  <span style="font-size:12px;"> {{ state }}</span>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-2 pb-2">
              <h5
                class="mt-0 header-title mb-4"
                style="font-size:13px;color:#b4b4b4"
              >
                Region
              </h5>
              <div class="row">
                <div
                  class="col-md-3"
                  v-for="(region, index) in regions"
                  :key="index"
                >
                  <input
                    type="checkbox"
                    class="regions-filter"
                    name="region-checkbox"
                    @click="event => deactivateAllOtherRegions(event, region)"
                    :id="region"
                  />
                  <span style="font-size:12px;"> {{ region }}</span>
                </div>
              </div>
            </div>
            <div class="col-md-12  mb-2 pb-2">
              <h5
                class="mt-0 header-title mb-4"
                style="font-size:13px;color:#b4b4b4"
              >
                Type
              </h5>
              <div class="row">
                <div
                  class="col-md-3"
                  v-for="(type, index) in types"
                  :key="index"
                >
                  <input type="checkbox" class="types-filter" :id="type" @click="() =>addToSelectedTypes(type)"/>
                  <span style="font-size:12px;"> {{ type }}</span>
                </div>
              </div>
            </div>
            <div class="col-md-12 pb-2">
              <h5
                class="mt-0 header-title mb-4"
                style="font-size:13px;color:#b4b4b4"
              >
                Category
              </h5>
              <div class="row">
                <div
                  class="col-md-3"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <input
                    type="checkbox"
                    class="categories-filter"
                    :id="category"
                    @click="() => addToSelectedCategories(category)"
                  />
                  <span style="font-size:12px;"> {{ category }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card m-b-30">
        <div class="card-body">
          <h4 class="mt-0 header-title">Personal Details</h4>
          <div class="form-group row">
            <div class="col-sm-12">
              <select class="custom-select" v-model="salutation">
                <option value="" disabled selected>Salutation</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="text"
                placeholder="Firstname"
                v-model="firstname"
                id="example-text-input"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="text"
                placeholder="Lastname"
                id="example-text-input"
                v-model="lastname"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="email"
                placeholder="Email"
                id="example-text-input"
                v-model="email"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="tel"
                placeholder="Phone"
                id="example-text-input"
                v-model="phone"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="tel"
                placeholder="Organization"
                id="example-text-input"
                v-model="organization"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="tel"
                placeholder="Department"
                id="example-text-input"
                v-model="department"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="tel"
                placeholder="Password"
                id="example-text-input"
                v-model="password"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <select class="custom-select" v-model="role">
                <option value="" disabled selected>Role</option>
                <option value="Admin">Admin</option>
                <option value="Sales">Sales</option>
                <option value="Data Entry">Data Entry</option>
                <option value="Management">Management</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1"
                  >Only Own Data</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineRadio2"
                  >Allow Export</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card m-b-30">
        <div class="card-body">
          <h4 class="mt-0 header-title">Allowed Tags</h4>

          <a
            href="#"
            @click.prevent="() => hangleTagAdded(tag)"
            v-for="(tag, index) in allTags"
            :key="index"
          >
            <span
              class="badge badge-dark badge-pill mr-2 p-2 mb-2"
              v-if="tag.selected"
              ><i class="mdi mdi-checkbox-blank-circle text-success"></i>
              {{ tag.gid }}</span
            >

            <span class="badge badge-light badge-pill mr-2 p-2 mb-2" v-else
              ><i class="mdi mdi-checkbox-blank-circle text-success"></i>
              {{ tag.gid }}</span
            >
          </a>

          <div class="form-group row">
            <div class="col-sm-9">
              <input
                class="form-control"
                type="text"
                placeholder="New Tag"
                id="example-text-input"
                v-model="newTag"
              />
            </div>
            <div class="col-sm-2">
              <button class="btn btn-success" @click="addNewTag">
                Add tag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/bus/EventBus.js";
import firebase from "firebase";
import store from "../../store/index.js";

export default {
  name: "AddUser",
  data() {
    return {
      image: "assets/images/small/img-1.jpg",
      states: [
        "Jammu and Kashmir",
        "Punjab",
        "Himachal Pradesh",
        "Haryana",
        "Delhi",
        "Rajasthan",
        "Uttar Pradesh",
        "Uttarakhand",
        "Madhya Pradesh",
        "Chattisgarh",
        "Gujarat",
        "Maharashtra",
        "Karnataka",
        "Goa",
        "Kerala",
        "Tamil nadu",
        "Andhra pr",
        "Telangana",
        "Orissa",
        "Bihar",
        "Jharkhand",
        "West Bengal",
        "Assam",
        "Arunach Pradesh",
        "Sikkim",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Tripura"
      ],
      regions: ["South", "North", "East", "West"],
      categories: ["Server", "Component"],
      types: ["End Customer", "OEM", "Reseller"],
      salutation: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      organization: "",
      department: "",
      selectedStates: [],
      selectedRegions: [],
      selectedCategories: [],
      selectedTypes: [],
      imagePresent: false,
      err: [],
      allTags: [],
      newTag: "",
      role:"",
      password:""
    };
  },
  methods: {
    addNewTag() {},
    deactivateAllOtherRegions(event,region){
      // regions-filter
      let regBoxes = document.getElementsByClassName('regions-filter');
        
        if(event.target.checked){
          regBoxes.forEach(item => {
            if(item.id != region){
              item.checked = false;
            }
            
          })
        }

        this.selectedRegions.push(region)
      
    },
    addToSelectedStates: function(state){
      console.log(state)
      let itemPresent = false;
      this.selectedStates.forEach(item => {
        if(item == state){
          itemPresent = true;
        }
      })

      if(!itemPresent){
        this.selectedStates.push(state)
      }else{
        let temp = this.selectedStates.filter(item => {
          return item != state;
        })
        this.selectedStates = temp;
      }

    },
    addToSelectedTypes: function(type){
      console.log(type)
      let itemPresent = false;
      this.selectedTypes.forEach(item => {
        if(item == type){
          itemPresent = true;
        }
      })

      if(!itemPresent){
        this.selectedTypes.push(type)
      }else{
        let temp = this.selectedTypes.filter(item => {
          return item != type;
        })
        this.selectedTypes = temp;
      }

    },
    addToSelectedCategories: function(category){
      console.log(category)
      let itemPresent = false;
      this.selectedCategories.forEach(item => {
        if(item == category){
          itemPresent = true;
        }
      })

      if(!itemPresent){
        this.selectedCategories.push(category)
      }else{
        let temp = this.selectedCategories.filter(item => {
          return item != category;
        })
        this.selectedCategories = temp;
      }

    },


  },
  created() {
    EventBus.$on("saveUserClicked", payload => {
      console.log("save clicked")

      if (payload) {
        this.err = [];
        if (this.salutation == "") {
          this.err.push("salutation is required");
        }
        if (this.firstname == "") {
          this.err.push("firstname is required");
        }
        if (this.lastname == "") {
          this.err.push("lastname is required");
        }
        if (this.email == "") {
          this.err.push("email is required");
        }
        if (this.phone == "") {
          this.err.push("phone is required");
        }
        if (this.organization == "") {
          this.err.push("organization is required");
        }
        if (this.department == "") {
          this.err.push("department is required");
        }
        // if (this.selectedStates.length < 1) {
        //   this.err.push("selectedStates is required");
        // }
        // if (this.selectedRegions.length < 1) {
        //   this.err.push("selectedRegions is required");
        // }
        // if (this.selectedCategories.length < 1) {
        //   this.err.push("selectedCategories is required");
        // }
        // if (this.selectedTypes.length < 1) {
        //   this.err.push("selectedType is required");
        // }
        if (this.password=="") {
          this.err.push("password is required");
        }

        

        if (this.err.length < 1) {
            let states = document.getElementsByClassName("states-filter");
            let regions = document.getElementsByClassName("regions-filter");
            let types = document.getElementsByClassName("types-filter");
            let categories = document.getElementsByClassName("categories-filter");

            states.forEach(item => {
            if (item.checked == true) {
                this.selectedStates.push(item.id);
            }
            });

            regions.forEach(item => {
            if (item.checked == true) {
                this.selectedRegions.push(item.id);
            }
            });
            types.forEach(item => {
            if (item.checked == true) {
                this.selectedTypes.push(item.id);
            }
            });
            categories.forEach(item => {
            if (item.checked == true) {
                this.selectedCategories.push(item.id);
            }
            });
          let userObj = {
            salutation: this.salutation,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phone: this.phone,
            organization: this.organization,
            department: this.department,
            selectedStates: this.selectedStates,
            selectedRegions: this.selectedRegions,
            selectedCategories: this.selectedCategories,
            selectedTypes: this.selectedTypes,
            role:this.role,
            password:this.password,
          };

          console.log(userObj);

          let addUser = firebase.functions().httpsCallable('handleUserAuthCreation');
          addUser({...userObj,
              emailVerified: true,
              phoneNumber: "+91"+userObj.phone,
              password: userObj.password,
              disabled: false  
          }).then(userCreateResult => {
            console.log(userCreateResult);
              console.log('adding profile now')
              var addUserProfile = firebase.functions().httpsCallable('handleUserProfileCreation');
              addUserProfile(
                {...userObj,
                "uid":userCreateResult.uid,
                }
              ).then(profileResult =>{
                console.log(profileResult.data.status)
                this.$swal.fire({
                  icon: 'success',
                  title: 'Success',
                  text: "Successfully added",
                })
                if(profileResult.data.status == 'profile created'){
                  store.commit("setActivePage",'users')
                }
              });
            // }
          }).catch(err => {
            console.log(err)
          })


        } else {
          console.log(this.err);
        }
      }
    });
  }
};
</script>

<style></style>
