<template>
  <div class="topbar">
    <!-- LOGO -->
    <div class="topbar-left pt-2">
      <a href="index.html" class="logo">
        <span>
            <img src="assets/images/coredatalogo.png" alt="" height="50">
        </span>
      </a>
    </div>

    <nav class="navbar-custom" style="background-color:#3578e5;">
      <ul class="navbar-right d-flex list-inline float-right mb-0">
        <!-- <li class="dropdown notification-list">
          <a
            class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i class="mdi mdi-bell noti-icon"></i>
            <span class="badge badge-pill badge-info noti-icon-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg">
            <h6 class="dropdown-item-text">
              Notifications (37)
            </h6>
            <div class="slimscroll notification-item-list">
              <a
                href="javascript:void(0);"
                class="dropdown-item notify-item active"
              >
                <div class="notify-icon bg-success">
                  <i class="mdi mdi-cart-outline"></i>
                </div>
                <p class="notify-details">
                  Your order is placed<span class="text-muted"
                    >Dummy text of the printing and typesetting industry.</span
                  >
                </p>
              </a>
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <div class="notify-icon bg-warning">
                  <i class="mdi mdi-message"></i>
                </div>
                <p class="notify-details">
                  New Message received<span class="text-muted"
                    >You have 87 unread messages</span
                  >
                </p>
              </a>
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <div class="notify-icon bg-info">
                  <i class="mdi mdi-flag"></i>
                </div>
                <p class="notify-details">
                  Your item is shipped<span class="text-muted"
                    >It is a long established fact that a reader will</span
                  >
                </p>
              </a>
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <div class="notify-icon bg-primary">
                  <i class="mdi mdi-cart-outline"></i>
                </div>
                <p class="notify-details">
                  Your order is placed<span class="text-muted"
                    >Dummy text of the printing and typesetting industry.</span
                  >
                </p>
              </a>
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <div class="notify-icon bg-danger">
                  <i class="mdi mdi-message"></i>
                </div>
                <p class="notify-details">
                  New Message received<span class="text-muted"
                    >You have 87 unread messages</span
                  >
                </p>
              </a>
            </div>
            <a
              href="javascript:void(0);"
              class="dropdown-item text-center text-primary"
            >
              View all <i class="fi-arrow-right"></i>
            </a>
          </div>
        </li> -->
        <li class="dropdown notification-list">
          <div class="dropdown notification-list nav-pro-img">
            <a
              class="dropdown-toggle nav-link arrow-none waves-effect nav-user waves-light"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="assets/images/users/user-4.jpg"
                alt="user"
                class="rounded-circle"
              />
            </a>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
              <a class="dropdown-item" href="#"
                ><i class="mdi mdi-account-circle m-r-5"></i> Profile</a
              >
              <a class="dropdown-item" href="#"
                ><i class="mdi mdi-lock-open-outline m-r-5"></i> Lock screen</a
              >
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" href="#"
                ><i class="mdi mdi-power text-danger"></i> Logout</a
              >
            </div>
          </div>
        </li>
      </ul>

      <ul
        v-if="getActivePage == 'cards'"
        class="navbar-right d-flex list-inline float-right mb-0"
        >
        <li class="dropdown notification-list d-none d-sm-block">
          <form role="search" class="app-search">
            <div class="form-group mb-0">
              <input
                type="text"
                class="form-control tag-input"
                style="color:white;background:#4787ee;border-color:#4787ee"
                placeholder="Tag or Group name.."
                v-model="tagName"
              />
            </div>
          </form>
        </li>
        <li class="dropdown notification-list d-none d-sm-block">
          <button type="submit" class="btn btn-light mb-0 app-search" @click="emitTagCreationEvent">
            Add Tag
          </button>
        </li>
        <li class="dropdown notification-list d-none d-sm-block ml-2">
          <button type="submit" class="btn btn-dark mb-0 app-search" @click="emitGroupCreationEvent">
            Add Group
          </button>
        </li>
      </ul>

      <ul
        v-if="getActivePage == 'new-card'"
        class="navbar-right d-flex list-inline float-right mb-0"
        >
        <li class="dropdown notification-list d-none d-sm-block">
          <button
            type="submit"
            class="btn btn-light mb-0 app-search"
            @click="() => emitSaveCardClickEvent()"
          >
            Save Card
          </button>
        </li>
        <li class="dropdown notification-list d-none d-sm-block ml-2">
          <button type="submit" class="btn btn-dark mb-0 app-search">
            Cancel
          </button>
        </li>
      </ul>

      <ul
        v-if="getActivePage == 'new-user'"
        class="navbar-right d-flex list-inline float-right mb-0"
        >
        <li class="dropdown notification-list d-none d-sm-block">
          <button
            type="submit"
            class="btn btn-light mb-0 app-search"
            @click="() => emitSaveUserClickEvent()"
          >
            Save User
          </button>
        </li>
        <li class="dropdown notification-list d-none d-sm-block ml-2">
          <button type="submit" class="btn btn-dark mb-0 app-search">
            Cancel
          </button>
        </li>
      </ul>

      <ul class="list-inline menu-left mb-0">
        <li class="float-left" style="background-color:#3578e5;">
          <button class="button-menu-mobile open-left waves-effect waves-light" style="background-color:#3578e5;" @click="toggleMenu">
            <i class="mdi mdi-menu"></i>
          </button>
        </li>
        <li class=" d-sm-block">
          <div class="dropdown pt-3 d-inline-block">
            <a
              class="btn btn-header waves-effect waves-light dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Create New
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a
                class="dropdown-item"
                href="#"
                @click="() => setActivePage('new-card')"
                >Card</a
              >
              <a
                class="dropdown-item"
                href="#"
                @click="() => setActivePage('new-user')"
                >User</a
              >
              <a
                class="dropdown-item"
                href="#"
                @click="() => setActivePage('new-tag')"
                >Tag</a
              >
            </div>
          </div>
        </li>
      </ul>

      
    </nav>
    <nav class="navbar-custom d-lg-none " style="background-color:rgb(40, 116, 238);">
      <ul
        v-if="getActivePage == 'cards'"
        class="navbar-right d-flex list-inline float-right mb-0"
        >
        <li class="dropdown notification-list .d-none .d-sm-block .d-md-none d-sm-block">
          <form role="search" class="app-search">
            <div class="form-group mb-0">
              <input
                type="text"
                class="form-control tag-input"
                style="color:white;background:#4787ee;border-color:#4787ee"
                placeholder="Tag or Group name.."
                v-model="tagName"
              />
            </div>
          </form>
        </li>
        <li class="dropdown notification-list .d-none .d-sm-block .d-md-none d-sm-block">
          <button type="submit" class="btn btn-light mb-0 app-search" @click="emitTagCreationEvent">
            Add Tag
          </button>
        </li>
        <li class="dropdown notification-list .d-none .d-sm-block .d-md-none d-sm-block ml-2">
          <button type="submit" class="btn btn-dark mb-0 app-search" @click="emitGroupCreationEvent">
            Add Group
          </button>
        </li>
      </ul>

      <ul
        v-if="getActivePage == 'new-card'"
        class="navbar-right d-flex list-inline float-right mb-0"
        >
        <li class="dropdown notification-list .d-none .d-sm-block .d-md-none d-sm-block">
          <button
            type="submit"
            class="btn btn-light mb-0 app-search"
            @click="() => emitSaveCardClickEvent()"
          >
            Save Card
          </button>
        </li>
        <li class="dropdown notification-list .d-none .d-sm-block .d-md-none d-sm-block ml-2">
          <button type="submit" class="btn btn-dark mb-0 app-search">
            Cancel
          </button>
        </li>
      </ul>

      <ul
        v-if="getActivePage == 'new-user'"
        class="navbar-right d-flex list-inline float-right mb-0"
        >
        <li class="dropdown notification-list .d-none .d-sm-block .d-md-none d-sm-block">
          <button
            type="submit"
            class="btn btn-light mb-0 app-search"
            @click="() => emitSaveUserClickEvent()"
          >
            Save User
          </button>
        </li>
        <li class="dropdown notification-list .d-none .d-sm-block .d-md-none d-sm-block ml-2">
          <button type="submit" class="btn btn-dark mb-0 app-search">
            Cancel
          </button>
        </li>
      </ul>

    </nav>
    
  </div>
</template>
<script>
import store from "@/store/index.js";
import EventBus from "@/bus/EventBus.js";
export default {
  name: "TopBar",
  data(){
    return{
      tagName:""
    }
  },
  methods: {
    toggleMenu(){
      let body = document.getElementById('app-body');
      // console.log(body)
      if(body.classList.contains('enlarged')){
        body.classList.remove('enlarged')
      }else{
        body.classList.add('enlarged')
      }
    },
    setActivePage(page) {
      store.commit("setActivePage", page);
    },
    emitSaveCardClickEvent() {
      EventBus.$emit("saveCardClicked", true);
    },
    emitSaveUserClickEvent(){
      EventBus.$emit("saveUserClicked", true);
    },
    emitTagCreationEvent(){
      if(this.tagName == ""){
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You need to add tag name"
        });
      }else{
        // console.log(this.tagName)
        EventBus.$emit("createTagClicked", this.tagName);
      }
      
    },
    emitGroupCreationEvent(){
      if(this.tagName == ""){
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You need to add group name"
        });
      }else{
        // console.log(this.tagName)
        EventBus.$emit("createGroupClicked", this.tagName);
      }
    }
  },
  computed: {
    getActivePage() {
      return store.state.activePage;
    }
  }
};
</script>
<style scoped>
.tag-input::placeholder {
  color: white;
  opacity: 1;
}
.btn {
  border-radius: 25px;
}
.topbar .topbar-left .logo {
  line-height: 30px;
}
</style>
