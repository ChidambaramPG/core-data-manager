<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-8">
              <h4 class="mt-0 header-title mb-4">All Cards</h4>
            </div>
            <div class="col-md-6 col-sm-3" style="text-align:left;">
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
                        v-for="(column, index) in getAllColumns"
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
            </div>
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
                    v-for="(col, index) in getDefaultColumns"
                    :key="index"
                  >
                    {{ col.label }}
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(card, index) in getPaginatedCards" :Key="index">
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
        <div class="card-footer">
          <nav aria-label="...">
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
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import store from "@/store/index.js";
import EventBus from "@/bus/EventBus.js";
export default {
  name: "CardsDataTable",
  data() {
    return {
      allCards: [],
      curentPage: 1,
      pageItemCount: 25,
      selectedCards: [],
      showFilter: false,
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
      selectedColumns: []
    };
  },
  created() {
    EventBus.$on("createTagClicked", payload => {
      // console.log(payload);
      firebase
        .firestore()
        .collection("Tags")
        .doc(payload)
        .set({ status: "active" });
      if (this.selectedCards.length > 0) {
        let batch = firebase.firestore().batch();
        let db = firebase.firestore();
        this.selectedCards.forEach(item => {
          // console.log(item.cid);
          let tempRef = db.collection("Cards").doc(item.cid);
          let tempTags = item.tags;
          if (!tempTags.includes(payload)) {
            tempTags.push(payload);
          }

          // console.log(tempTags, item.tags);
          batch.update(tempRef, {
            tags: tempTags
          });
        });
      }
    });
    EventBus.$on("createGroupClicked", payload => {
      // console.log(payload);

      if (this.selectedCards.length > 0) {
        let temp = [];
        this.selectedCards.forEach(card => {
          temp.push(card.cid);
        });
        firebase
          .firestore()
          .collection("Groups")
          .add({
            items: temp,
            name: payload,
            addedBy: firebase.auth().currentUser.uid,
            addedOn: new Date(),
            status: "active"
          })
          .then(() => {
            store.commit("setActivePage", "lists");
          });
      }
    });
  },
  methods: {
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
      
    },
    filterCards() {
      let states = document.getElementsByClassName("states-filter");
      let regions = document.getElementsByClassName("regions-filter");
      let types = document.getElementsByClassName("types-filter");
      let categories = document.getElementsByClassName("categories-filter");

      let selectedStates = [];
      states.forEach(item => {
        if (item.checked == true) {
          selectedStates.push(item.id);
        }
      });

      let selectedRegions = [];
      regions.forEach(item => {
        if (item.checked == true) {
          selectedRegions.push(item.id);
        }
      });
      let selectedTypes = [];
      types.forEach(item => {
        if (item.checked == true) {
          selectedTypes.push(item.id);
        }
      });
      let selectedCategories = [];
      categories.forEach(item => {
        if (item.checked == true) {
          selectedCategories.push(item.id);
        }
      });

      store.commit("filterCards", {
        selectedStates: selectedStates,
        selectedRegions: selectedRegions,
        selectedTypes: selectedTypes,
        selectedCategories: selectedCategories
      });
    },
    reInitialiseColumns() {
      let cols = document.getElementsByClassName("column-checkbox");
      this.selectedColumns = [];
      cols.forEach(elem => {
        if (elem.checked) {
          // console.log(elem.id)
          this.getAllColumns.forEach(col => {
            if (col.field == elem.id) {
              this.selectedColumns.push(col);
            }
          });
        }
      });
      // console.log(this.selectedColumns)
      store.commit("reColumizeTable", this.selectedColumns);
    },
    addColumnToSelected(event, column) {
      // console.log(column)

      let tempCol = this.selectedColumns.filter(item => {
        return item.field == column.field;
      });
      // console.log(column.field,tempCol.length)
      if (event.target.checked) {
        if (tempCol.length < 1) {
          // console.log('adding to array')
          this.selectedColumns.push(column);
          // console.log(this.selectedColumns)
        }
      } else {
        if (tempCol.length > 0) {
          // console.log('removing from array')
          let tempColAbs = this.selectedColumns.filter(item => {
            return item.field != column.field;
          });
          this.selectedColumns = tempColAbs;
          // console.log(this.selectedColumns)
        }
      }

      // { label: 'Firstname', field:"firstname", numeric: false, html: false },
    },
    toggleFilters() {
      this.showFilter = !this.showFilter;
    },
    incrPageNum() {
      if (this.curentPage <= this.maxPages) {
        this.curentPage++;
      }
    },
    decrPageNum() {
      if (this.curentPage > 1) {
        this.curentPage--;
      }
    },
    setPageNum(page) {
      this.curentPage = page;
    },
    addCard(event, card) {
      let tempCard = this.selectedCards.filter(item => {
        return item.cid == card.cid;
      });
      if (event.target.checked) {
        if (tempCard.length == 0) {
          this.selectedCards.push(card);
        }
      } else {
        if (tempCard.length > 0) {
          let temp = this.selectedCards.filter(item => {
            return item.cid != card.cid;
          });
          this.selectedCards = temp;
        }
      }
    },
    addAllCards(event) {
      if (event.target.checked) {
        this.selectedCards = this.getAllCards;
        let elems = document.getElementsByClassName("card-checkbox");
        elems.forEach(element => {
          // console.log(element);
          element.checked = true;
        });
      } else {
        this.selectedCards = [];
        let elems = document.getElementsByClassName("card-checkbox");
        elems.forEach(element => {
          element.checked = false;
        });
      }
    }
  },
  computed: {
    getAllCards() {
      // // console.log(store.state.filteredBusinessCards.splice(this.curentPage*10-10,10))
      return store.state.filteredBusinessCards;
    },
    getPaginatedCards() {
      let temp = [...store.state.filteredBusinessCards];
      return temp.splice(
        this.curentPage * this.pageItemCount - this.pageItemCount,
        this.pageItemCount
      );
    },
    getAllColumns() {
      let allCols = store.state.allColumns;
      let temp = [];

      allCols.forEach(col1 => {
        let selected = false;
        this.getDefaultColumns.forEach(col2 => {
          if (col1.field == col2.field) {
            // console.log('selected',col1.field)
            selected = true;
          }
        });
        if (selected) {
          temp.push({ ...col1, selected: true });
        } else {
          temp.push({ ...col1, selected: false });
        }
      });
      return temp;
    },
    getDefaultColumns() {
      return store.state.defaultColumns;
    },
    maxPages() {
      return Math.ceil(this.getAllCards.length / this.pageItemCount);
    }
  }
};
</script>

<style></style>
