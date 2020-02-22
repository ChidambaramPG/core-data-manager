import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

function removeInitialC(str) {
  if (str[0] === "c" && str[1] === str[1].toUpperCase()) {
    return str.slice(1);
  } else {
    return str;
  }
}

export default new Vuex.Store({
  state: {
    userType:"",
    brochureCount: 150,
    businessCardsCount: 100,
    categoriesCount: 40,
    usersCount: 20,
    brochures: [],
    businessCards: [],
    filteredBusinessCards: [],
    categories: [],
    allUsers: [],
    categoriesList: [],
    allTags: [],
    cardCategoryList: [],

    sidebarVisible: false,

    // page views
    activePage: "cards",
    categorySubTag: "all",
    cardsSecton: "table",
    usersSection: "table",
    categorySection: "table",

    // modal views
    newBrochureModalVisible: false,
    editBrochureModalVisible: false,
    deleteBrochureModalVisible: false,
    newCardsModalVisible: false,
    editCardsModalVisible: false,
    deleteCardsModalVisible: false,
    newCategoryModalVisible: false,

    // pagnation
    cardsListPage: 1,

    // selected items
    selectedCard: [],
    selectedCardTags: [],
    selectedCategory: [],
    isItemSelected: false,
    selectedcardGroupItems: [],
    selectedGroupId: "",
    tagFilterItems: [],
    bulkSelectedCards: [],
    filteredTableCards: [],
    isLoading: false,
    tableColumns: [
      "cFirstname",
      "cLastname",
      "cDesignation",
      "cOrganization",
      "cEmail",
      "cPhone",
      "Actions"
    ],

    allColumns: [
      
      
      { field: "salutation", label: "Salutation", numerc: false, html: false },
      { field: "firstname", label: "Firstname", numerc: false, html: false },
      { field: "lastname", label: "Lastname", numerc: false, html: false },
      {
        field: "organization",
        label: "Organization",
        numerc: false,
        html: false
      },
      
      { field: "tier", label: "Tier", numerc: false, html: false },
      {
        field: "designation",
        label: "Designation",
        numerc: false,
        html: false
      },
      { field: "personal_mail", label: "Email", numerc: false, html: false },
      { field: "personal_phone", label: "Phone", numerc: false, html: false },
      { field: "office_phone", label: "Office Phone", numerc: false, html: false },
      { field: "type", label: "Type", numerc: false, html: false },
      { field: "role", label: "Role", numerc: false, html: false },
      { field: "address", label: "Address", numerc: false, html: false },
      { field: "city", label: "City", numerc: false, html: false },
      { field: "pincode", label: "Pincode", numerc: false, html: false },
      { field: "country", label: "Country", numerc: false, html: false },
      { field: "state", label: "State", numerc: false, html: false },
      { field: "region", label: "Region", numerc: false, html: false },
      { field: "category", label: "Category", numerc: false, html: false },
      { field: "tags", label: "Tags", numerc: false, html: false },
    ],
    defaultColumns: [
      { label: "Firstname", field: "firstname", numeric: false, html: false },
      { label: "Lastname", field: "lastname", numeric: false, html: false },
      {
        label: "Designation",
        field: "designation",
        numeric: false,
        html: false
      },
      {
        label: "Organization",
        field: "organization",
        numeric: false,
        html: false
      },
      { label: "Email", field: "personal_email", numeric: false, html: false },
      { label: "Phone", field: "personal_phone", numeric: false, html: false }
    ]
  },
  mutations: {
    setUserType:(state,payload) => {
      state.userType = payload;
    },
    filterCards: (state, payload) => {
      let selectedStates = payload.selectedStates;
      let selectedRegions = payload.selectedRegions;
      let selectedTypes = payload.selectedTypes;
      let selectedCategories = payload.selectedCategories;
      let temp = [];

      let cards = state.businessCards;

      if (selectedStates.length < 1) {
        temp = cards;
      } else {
        let filState = cards.filter(card => {
          return selectedStates.includes(card.state);
        });
        temp = filState;
      }

      if (selectedRegions.length > 0) {
        let filRegion = temp.filter(card => {
          return selectedRegions.includes(card.region);
        });
        temp = filRegion;
      }

      if (selectedTypes.length > 0) {
        let filType = temp.filter(card => {
          return selectedTypes.includes(card.type);
        });
        temp = filType;
      }

      if (selectedCategories.length > 0) {
        let filCategory = temp.filter(card => {
          return selectedCategories.includes(card.category);
        });
        temp = filCategory;
      }

      state.filteredBusinessCards = Array.from(new Set(temp));
    },
    reColumizeTable: (state, payload) => {
      state.defaultColumns = payload;
    },
    setTableColumns: (state, payload) => {
      state.tableColumns.push(payload);
    },
    setLoadingStatus: (state, payload) => {
      state.isLoading = payload;
    },
    setActivePage: (state, payload) => {
      state.activePage = payload;
    },
    toggleNewBrochureModal: state => {
      state.newBrochureModalVisible = !state.newBrochureModalVisible;
    },
    toggleNewCardModal: state => {
      state.newCardsModalVisible = !state.newCardsModalVisible;
    },
    toggleEditBrochureModal: state => {
      state.editBrochureModalVisible = !state.editBrochureModalVisible;
    },
    toggleDeleteBrochureModal: state => {
      state.deleteBrochureModalVisible = !state.deleteBrochureModalVisible;
    },
    toggleEditCardModal: state => {
      state.editCardsModalVisible = !state.editCardsModalVisible;
    },
    toggleDeleteCardModal: state => {
      state.deleteCardsModalVisible = !state.deleteCardsModalVisible;
    },
    toggleNewCategoryModal: state => {
      state.newCategoryModalVisible = !state.newCategoryModalVisible;
    },
    toggleNewCardSection: state => {
      state.cardsSecton = "add";
    },
    toggleEditCard: state => {
      state.cardsSecton = "edit";
    },
    setCardsSection: (state, payload) => {
      state.cardsSecton = payload;
    },
    setUsersSection: (state, payload) => {
      state.usersSection = payload;
    },
    setCategorySection: (state, payload) => {
      state.categorySection = payload;
    },
    setBusinessCards: (state, payload) => {
      state.filteredBusinessCards = payload;
      state.businessCards = payload;
    },
    setSelectedCard: (state, payload) => {
      state.selectedCard = payload;
      state.selectedCardTags = [];
      state.selectedCardTags = payload.tags;
    },
    addTagsToCard: (state, payload) => {
      state.selectedCardTags.push(payload);
    },
    setCategoriesList: (state, payload) => {
      state.categoriesList = payload;
    },
    setSelectedCategory: (state, payload) => {
      state.selectedCategory = state.categoriesList[payload];
      state.categorySubTag = state.selectedCategory.name;
    },
    setTagsList: (state, payload) => {
      state.allTags = [];
      state.allTags = payload;
      //// console.log("tags:",state.allTags)
    },
    setSelectedTags: (state, payload) => {
      // state.isLoading = true;
      if (state.tagFilterItems.length < 1) {
        //// console.log('adding first tag')
        state.tagFilterItems.push(payload);
      } else {
        //// console.log('tags are present ')
        // let tempSelTags = []
        let tagPresent = state.tagFilterItems.includes(payload);

        if (!tagPresent) {
          state.tagFilterItems.push(payload);
        } else {
          state.tagFilterItems = state.tagFilterItems.filter(val => {
            return val != payload;
          });
        }
        //// console.log(state.tagFilterItems)
      }

      state.allTags.forEach(item => {
        if (item.gid == payload) {
          if (item.selected == false) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        }
      });

      let selectedItems = [];
      state.filteredBusinessCards.forEach(item => {
        let tagPresent = false;

        state.tagFilterItems.forEach(gid => {
          //// console.log(item.tags,gid)
          var regex = new RegExp(item.tags.join("|"), "i");
          if (regex.test(gid)) {
            //// console.log("tag present ==> ",item.tags.includes(gid))
            tagPresent = true;
          }
          //// console.log(tag)
        });
        if (tagPresent) {
          //// console.log("adding item")
          selectedItems.push(item);
        }
      });
      //// console.log(new Set(selectedItems));
      if (state.tagFilterItems.length < 1) {
        state.filteredBusinessCards = state.businessCards;
      } else {
        state.filteredBusinessCards = Array.from(new Set(selectedItems));
      }
      // state.isLoading = false;
    },
    setSelectedCardList: (state, payload) => {
      let temp = state.filteredBusinessCards;
      state.isLoading = true;
      state.businessCards.forEach(item => {
        if (item.cid == payload) {
          if (item.selected == false) {
            item.selected = true;
            temp.push(item);
          } else {
            item.selected = false;
            temp.pop();
          }
        }
      });
      state.filteredBusinessCards = temp;
      state.isLoading = false;
    },
    setSelectedCardListManually: (state, payload) => {
      //// console.log("inside setSelectedCardListManually")
      state.isLoading = true;
      let temp = [];
      state.isItemSelected = false;
      state.filteredBusinessCards.forEach(item => {
        //// console.log(item.selected)
        if (item.cid == payload.cid) {
          if (item.selected == true) {
            item.selected = false;
          } else {
            state.isItemSelected = true;
            item.selected = true;
          }
        }
        temp.push(item);
      });
      //// console.log("isItemSelected",state.isItemSelected)
      state.filteredBusinessCards = [];
      state.filteredBusinessCards = temp;
      state.isLoading = false;
    },
    setBulkSelectedCardList: (state, payload) => {
      if (payload.status) {
        state.isItemSelected = true;
        state.bulkSelectedCards = payload.items;
      } else {
        state.isItemSelected = false;
        state.bulkSelectedCards = [];
      }
    },
    getSelectedItems: state => {
      let temp = [];
      state.filteredBusinessCards.forEach(item => {
        if (item.selected == true) {
          temp.push(item);
        }
      });

      return temp;
    },
    setSelectedGroup: (state, payload) => {
      //// console.log(payload)
      let temp = [];
      state.categoriesList.forEach(item => {
        //// console.log(item)
        if (item.gid == payload.gid) {
          temp = item.items;
        }
      });

      // temp = state.categoriesList.filter(item => {
      //   return item.gid == payload.gid : item
      // })

      //// console.log(temp)
      let temp2 = [];
      temp.forEach(cid => {
        //// console.log(cid)
        state.businessCards.forEach(card => {
          //// console.log(card.cid)
          if (cid == card.cid) {
            temp2.push({ ...card, selected: true });
          }
        });
      });
      //// console.log(temp2)
      state.selectedcardGroupItems = temp2;
      state.selectedGroupId = payload.gid;
    },
    exportSelectedGroup: (state, payload) => {
      function ConvertToCSV(objArray) {
        var array =
          typeof objArray != "object" ? JSON.parse(objArray) : objArray;
        var str = "";

        for (var i = 0; i < array.length; i++) {
          var line = "";
          for (var index in array[i]) {
            if (line != "") line += ",";

            line += array[i][index];
          }

          str += line + "\r\n";
        }

        return str;
      }
      if (state.selectedcardGroupItems.length > 0) {
        if (payload == "csv") {
          var jsonObject = JSON.stringify(state.selectedcardGroupItems);
          let csvFile = ConvertToCSV(jsonObject);
          //// console.log(csvFile)
          var hiddenElement = document.createElement("a");
          hiddenElement.href =
            "data:text/csv;charset=utf-8," + encodeURI(csvFile);
          hiddenElement.target = "_blank";
          hiddenElement.download = "people.csv";
          hiddenElement.click();
        }
      }
    },
    updateCategoryListItems: (state, payload) => {
      let itemFound = false;
      if (payload.checked) {
        state.selectedcardGroupItems.forEach(item => {
          if (item.cid == payload.cid) {
            itemFound = true;
          }
        });
        if (!itemFound) {
          state.selectedcardGroupItems.push(payload);
        }
      } else {
        let temp = [];
        state.selectedcardGroupItems.forEach(item => {
          if (item.cid == payload.cid) {
            itemFound = true;
          } else {
            temp.push(item);
          }
        });
        state.selectedcardGroupItems = temp;
      }
    },

    searchStringForTable: (state, payload) => {
      const toLower = text => {
        return text.toString().toLowerCase();
      };

      const searchByName = (items, term) => {
        if (term) {
          return items.filter(item =>
            toLower(
              item.cFirstname +
                " " +
                item.cLastname +
                " " +
                item.cOrganizaton +
                " " +
                item.cDesignation +
                " " +
                item.cEmail +
                " " +
                item.cPhone
            ).includes(toLower(term))
          );
        }

        return items;
      };

      let searched = searchByName(state.businessCards, payload);

      state.filteredBusinessCards = searched;
    }
    // addColumnToData:(state,payload) => {
    ////   console.log(payload)
    // }
  },
  actions: {
    fetchAllBusinessCards: ({ state }) => {
      firebase
        .firestore()
        .collection("Cards")
        .where("status", "==", "active")
        .onSnapshot(resp => {
          let cards = [];
          resp.forEach(item => {
            cards.push({ ...item.data(), cid: item.id, selected: false });
          });
          state.filteredBusinessCards = cards;
          state.businessCards = cards;
          state.filteredTableCards = cards;
          if (state.filteredBusinessCards[0] != undefined) {
            let keys = Object.keys(state.filteredBusinessCards[0]);
            let temp = [];
            keys.slice(2).forEach(item => {
              // if(state.tableColumns.includes(item)){
              temp.push({
                label: removeInitialC(item),
                field: item,
                numeric: false,
                html: false
              });
              // }
            });
            // console.log(temp)
            state.tableColumns = temp;
          }
        });
    },
    fetchAllUsers: ({ state }) => {
      firebase
        .firestore()
        .collection("Users")
        .onSnapshot(resp => {
          let users = [];
          resp.forEach(item => {
            users.push({ ...item.data(), uid: item.id });
          });
          state.allUsers = users;
        });
    },

    fetchCategoriesList: ({ commit }) => {
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
        });
      commit("setCategoriesList", temp);
    },
    fetchAllTags: ({ commit }) => {
      firebase
        .firestore()
        .collection("Tags")
        .onSnapshot(resp => {
          // temp = [];
          let temp = [];
          //// console.log("fetched again")
          resp.forEach(item => {
            temp.push({ ...item.data(), gid: item.id, selected: false });
          });
          //// console.log("fetched tags:",temp)
          commit("setTagsList", temp);
        });
    },
    removeTagfromItem: ({ state }, payload) => {
      //// console.log("payload:",payload)
      let temp = [];
      state.selectedCardTags.forEach(item => {
        //// console.log(item)
        if (item != payload) {
          temp.push(item);
        }
      });
      state.selectedCardTags = temp;
      //// console.log(state.selectedCard)
      firebase
        .firestore()
        .collection("Cards")
        .doc(state.selectedCard.cid)
        .update({
          tags: temp
        });
    },
    setSelectedTagsAsync: ({ commit, state }, payload) => {
      // state.isLoading = true;
      commit("setLoadingStatus", true);
      //// console.log(state.isLoading)
      let promise = new Promise(resolve => {
        if (state.tagFilterItems.length < 1) {
          //// console.log('adding first tag')
          state.tagFilterItems.push(payload);
        } else {
          //// console.log('tags are present ')
          // let tempSelTags = []
          let tagPresent = state.tagFilterItems.includes(payload);

          if (!tagPresent) {
            state.tagFilterItems.push(payload);
          } else {
            state.tagFilterItems = state.tagFilterItems.filter(val => {
              return val != payload;
            });
          }
          //// console.log(state.tagFilterItems)
        }

        state.allTags.forEach(item => {
          if (item.gid == payload) {
            if (item.selected == false) {
              item.selected = true;
            } else {
              item.selected = false;
            }
          }
        });

        let selectedItems = [];
        state.businessCards.forEach(item => {
          let tagPresent = false;

          state.tagFilterItems.forEach(gid => {
            //// console.log(item.tags,gid)
            var regex = new RegExp(item.tags.join("|"), "i");
            if (regex.test(gid)) {
              //// console.log("tag present ==> ",item.tags.includes(gid))
              tagPresent = true;
            }
            //// console.log(tag)
          });
          if (tagPresent) {
            //// console.log("adding item")
            selectedItems.push(item);
          }
        });
        //// console.log(new Set(selectedItems));
        if (state.tagFilterItems.length < 1) {
          state.filteredBusinessCards = state.businessCards;
        } else {
          state.filteredBusinessCards = new Set(selectedItems);
        }
        resolve();
      });

      // state.isLoading = false;
      promise.then(() => {
        commit("setLoadingStatus", false);
        //// console.log(state.isLoading)
      });
    },

    handleRemoteFetchSelectedTagsCards: ({ state, dispatch }, payload) => {
      // let t1 = new Date()

      if (state.tagFilterItems.length < 1) {
        //// console.log('adding first tag')
        state.tagFilterItems.push(payload);
      } else {
        //// console.log('tags are present ')
        // let tempSelTags = []
        let tagPresent = state.tagFilterItems.includes(payload);

        if (!tagPresent) {
          state.tagFilterItems.push(payload);
        } else {
          state.tagFilterItems = state.tagFilterItems.filter(val => {
            return val != payload;
          });
        }
        //// console.log(state.tagFilterItems)
      }

      state.allTags.forEach(item => {
        if (item.gid == payload) {
          if (item.selected == false) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        }
      });

      // let t2 = new Date()

      //console.log(t2-t1)

      if (state.tagFilterItems.length < 1) {
        dispatch("fetchAllBusinessCards");
      } else {
        //console.log(state.tagFilterItems)
        // let t3 = new Date()
        let filterCards = firebase
          .functions()
          .httpsCallable("handleCardsFilterUsingTags");

        filterCards({ tags: state.tagFilterItems }).then(response => {
          //console.log('response:', response)
          let temp = [];
          if (response.data.data == undefined) {
            temp = [];
          } else {
            response.data.data.forEach(item => {
              temp.push({ cid: item[0], ...item[1], selected: false });
            });
          }

          //console.log(temp)
          state.filteredBusinessCards = temp;
          // let t4 = new Date()
          //console.log("fetch time:",t4-t3)
        });
      }
    }
  },
  modules: {}
});
