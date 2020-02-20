<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card m-b-30">
        <div class="card-body">
          <h4 class="mt-0 header-title">Card</h4>
          <p class="text-muted m-b-30">
            Upload the card image
          </p>

          <div class="">
            <a class="image-popup-no-margins" :href="image">
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
                v-model="personal_email"
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
                v-model="personal_phone"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <select class="custom-select" v-model="type">
                <option value="" disabled selected>Type</option>
                <option value="End Customer">End Customer</option>
                <option value="Reseller">Reseller</option>
                <option value="OEM">OEM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="card m-b-30">
        <div class="card-body">
          <h4 class="mt-0 header-title">Organization Details</h4>

          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="text"
                placeholder="Organization"
                id="example-text-input"
                v-model="organization"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <select class="custom-select" v-model="tier">
                <option value="" disabled selected>Category</option>
                <option value="Commercial">Commercial</option>
                <option value="Consumer">Consumer</option>
                <option value="Component">Component</option>
                <option value="Server">Server</option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="text"
                placeholder="Designation"
                id="example-text-input"
                v-model="designation"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="email"
                placeholder="Office Email"
                id="example-text-input"
                v-model="office_email"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="text"
                placeholder="Office Phone"
                id="example-text-input"
                v-model="office_phone"
              />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="text"
                placeholder="Address"
                id="example-text-input"
                v-model="office_address"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="text"
                placeholder="City"
                id="example-text-input"
                v-model="city"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="test"
                placeholder="Pincode"
                id="example-text-input"
                v-model="pincode"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <select class="custom-select" v-model="state">
                <option value="" disabled selected>State</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Punjab">Punjab</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Haryana">Haryana</option>
                <option value="Delhi">Delhi</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Chattisgarh">Chattisgarh</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Goa">Goa</option>
                <option value="Kerala">Kerala</option>
                <option value="Tamil nadu">Tamil nadu</option>
                <option value="Andhra pr">Andhra pr</option>
                <option value="Telangana">Telangana</option>
                <option value="Orissa">Orissa</option>
                <option value="Bihar">Bihar</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Assam">Assam</option>
                <option value="Arunach Pradesh">Arunach Pradesh</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Tripura">Tripura</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <input
                class="form-control"
                type="tel"
                placeholder="Country"
                id="example-text-input"
                v-model="country"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-12">
              <select class="custom-select" v-model="region">
                <option value="" disabled selected>Region</option>
                <option value="South">South</option>
                <option value="East">East</option>
                <option value="North">North</option>
                <option value="West">West</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="card m-b-30">
        <div class="card-body">
          <h4 class="mt-0 header-title">Available Tags</h4>

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
// import store from "@/store/index.js";
import firebase from "firebase";
import EventBus from "@/bus/EventBus.js";

export default {
  name: "AddNewCard",
  mounted() {
    // let parent = this;
    
  },
  created() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "assets/pages/lightbox.js");
    document.head.appendChild(recaptchaScript);

    firebase
      .firestore()
      .collection("Tags")
      .onSnapshot(resp => {
        // temp = [];
        let temp = [];
        // console.log("fetched again")
        resp.forEach(item => {
          temp.push({ ...item.data(), gid: item.id, selected: false });
        });
        // console.log("fetched tags:",temp)
        this.allTags = temp;
        this.unselectedTags = temp;
      });

    EventBus.$on("saveCardClicked", payload => {
      if (payload) {
        if (this.imagePresent) {
          let newCard = {
            tags: this.tagsSelected,
            image: this.image,
            salutation: this.salutation,
            firstname: this.firstname,
            lastname: this.lastname,
            personal_email: this.personal_email,
            personal_phone: this.personal_phone,
            type: this.type,
            organization: this.organization,
            category: this.tier,
            designation: this.designation,
            office_email: this.office_email,
            office_phone:this.office_phone,
            office_address: this.office_address,
            city: this.city,
            pincode: this.pincode,
            state: this.state,
            country: this.country,
            region: this.region,
            addedBy: firebase.auth().currentUser.uid,
            addedOn: new Date(),
            converted: "pending",
            status: "active"
          };

        //   console.log(newCard);

          firebase
            .firestore()
            .collection("Cards")
            .add(newCard)
            .then(() => {
              this.$swal.fire(
                "Successfully Added!",
                "New card added to database!",
                "success"
              );
            })
            .catch(error => {
              this.$swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message
              });
            });
        }else{
            this.$swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'You need to add a card image before saving it.'
              });
        }
      }
    });
  },
  computed: {
    //   getAllTags(){
    //       return store.state.allTags;
    //   }
  },
  data() {
    return {
      tagsSelected: [],
      allTags: [],
      unselectedTags: [],
      image: "assets/images/small/img-2.jpg",
      imagePresent: false,
      newTag: "",
      salutation: "",
      firstname: "",
      lastname: "",
      personal_email: "",
      personal_phone: "",
      type: "",
      organization: "",
      tier: "",
      designation: "",
      office_email: "",
      office_phone:'',
      office_address: "",
      city: "",
      pincode: "",
      state: "",
      country: "",
      region: ""
    };
  },
  methods: {
    addNewTag() {
      if (this.newTag.length > 0 && this.newTag != "") {
        firebase
          .firestore()
          .collection("Tags")
          .doc(this.newTag)
          .set({ status: "active" });
      }
    },
    handleFileSelected() {
      let inpt = document.getElementById("cardImageSelect");
    //   console.log(inpt);
      var imgFileReader = new FileReader();
      imgFileReader.readAsDataURL(inpt.files[0]);
      let parent = this;
      imgFileReader.onload = function(oFREvent) {
        document.getElementById("cardImage").src = oFREvent.target.result;
        parent.setImageData(oFREvent.target.result);
      };
    },
    setImageData(data) {
      if (data != "") {
        this.resizedataURL(data, 400, 400);
        this.imagePresent = true;
      }
    },
    resizedataURL(datas, wantedWidth, wantedHeight) {
      // We create an image to receive the Data URI
      var img = document.createElement("img");
      let parent = this;
      img.onload = function() {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = wantedWidth;
        canvas.height = wantedHeight;

        ctx.drawImage(this, 0, 0, wantedWidth, wantedHeight);

        var dataURI = canvas.toDataURL("image/jpeg", 1);

        // console.log(dataURI)
        parent.image = dataURI;
      };
      img.src = datas;
    },
    hangleTagAdded(tag) {
      let tagAdded = this.tagsSelected.filter(item => {
        return item.gid == tag.gid;
      });

      if (tagAdded.length > 0) {
        let temp = this.tagsSelected.filter(item => {
          return item.gid != tag.gid;
        });
        this.tagsSelected = temp;
      } else {
        this.tagsSelected.push(tag.gid);
      }

      let tempTags = [];
      this.allTags.forEach(item => {
        let itemAdded = false;
        this.tagsSelected.forEach(item2 => {
          if (item.gid == item2) {
            itemAdded = true;
          }
        });
        if (itemAdded) {
          tempTags.push({ ...item, selected: true });
        } else {
          tempTags.push({ ...item, selected: false });
        }
      });

      this.allTags = tempTags;
    }
  }
};
</script>

<style></style>
