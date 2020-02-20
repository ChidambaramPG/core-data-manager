<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-8">
              <h4 class="mt-0 header-title mb-4">All Users</h4>
            </div>
            <!-- <div class="col-md-6 col-sm-3" style="text-align:left;">
              <a
                href="#"
                class=""
                id="columnsDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                dropdown-toggle
                @click.prevent="toggleFilters"
                ><h5
                  class="mt-0 header-title mb-4 "
                  style="font-size:13px;color:#b4b4b4"
                >
                  Columns
                </h5></a
              >
              <div class="dropdown-menu p-4" aria-labelledby="columnsDropdown">
                <div class="row pt-2">
                  <div class="col-md-12 border-bottom mb-2 pb-2">
                    <h5
                      class="mt-0 header-title mb-4"
                      style="font-size:13px;color:#b4b4b4"
                    >
                      State
                    </h5>
                    <div class="row">
                      <div
                        class="col-md-3"
                        v-for="(column, index) in users"
                        :key="index"
                      >
                        <input
                          type="checkbox"
                          :id="column.field"
                          class="column-checkbox"
                          v-if="column.selected == true"
                          checked
                          @click="event => addColumnToSelected(event, column)"
                        />
                        <input
                          type="checkbox"
                          :id="column.field"
                          class="column-checkbox"
                          v-else
                          @click="event => addColumnToSelected(event, column)"
                        />
                        <span style="font-size:12px;"> {{ column.label }}</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <button
                      class="btn btn-success"
                      @click="reInitialiseColumns"
                    >
                      Show Columns
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-3" style="text-align:right;">
              <a
                href="#"
                class=""
                id="filterDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                dropdown-toggle
                @click.prevent="toggleFilters"
                ><h5
                  class="mt-0 header-title mb-4 "
                  style="font-size:13px;color:#b4b4b4"
                >
                  Filters
                </h5></a
              >
              <div class="dropdown-menu p-4" aria-labelledby="filterDropdown">
                <div class="row pt-2">
                  <div class="col-md-12 border-bottom mb-2 pb-2">
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
                        <input
                          type="checkbox"
                          class="states-filter"
                          :id="state"
                        />
                        <span style="font-size:12px;"> {{ state }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12  border-bottom mb-2 pb-2">
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
                          @click="(event) => deactivateAllOtherRegions(event,region)"
                          :id="region"
                        />
                        <span style="font-size:12px;"> {{ region }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12  border-bottom mb-2 pb-2">
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
                        <input
                          type="checkbox"
                          class="types-filter"
                          :id="type"
                        />
                        <span style="font-size:12px;"> {{ type }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 border-bottom mb-2 pb-2">
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
                        />
                        <span style="font-size:12px;"> {{ category }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button class="btn btn-success" @click="filterCards">
                      Apply Filter
                    </button>
                  </div>
                </div>
              </div>
            </div> -->
          </div>

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
                    v-for="(col, index) in userColumns"
                    :key="index"
                  >
                    {{ col }}
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :Key="index">
                  <td>
                    <input
                      type="checkbox"
                      class="card-checkbox"
                      @click="event => addCard(event, user)"
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
                  <td v-for="(col, index) in userColumns" :key="index">
                    {{ user[col] }}
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
        <div class="card-footer">
          <!-- <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled" v-if="curentPage == 1">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
              </li>
              <li class="page-item" v-else>
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  @click.prevent="decrPageNum"
                  >Previous</a
                >
              </li>
              <div v-for="page in maxPages" :key="page">
                <li class="page-item " v-if="curentPage != page">
                  <a
                    class="page-link"
                    href="#"
                    @click.prevent="() => setPageNum(page)"
                    >{{ page }}</a
                  >
                </li>
                <li class="page-item active" v-else>
                  <a class="page-link" href="#"
                    >{{ page }}<span class="sr-only">(current)</span></a
                  >
                </li>
              </div>

              <li class="page-item">
                <a class="page-link" href="#" @click.prevent="incrPageNum"
                  >Next</a
                >
              </li>
            </ul>
          </nav> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
    name:"AllUsers",
    data(){
      return {
        users:[],
        userColumns:[
          'salutation',
          'firstname',
          'lastname',
          'email',
          'phone',
          'organization',
          'department',
          // 'selectedStates',
          // 'selectedRegions',
          // 'selectedCategories',
          // 'selectedTypes',
          'role',
        ]
      }
    },
    created(){
      firebase.firestore().collection("Users").onSnapshot(snap => {
        snap.forEach(item => {
          console.log(item.data())
          if(item.data().role == "Admin"){

          }else{
            this.users.push(item.data())
          }
        })
      })
    }
}
</script>

<style>

</style>