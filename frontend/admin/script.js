let dashboard_btn = document.querySelector(".dashboard_btn");
let analytics_btn = document.querySelector(".analytics_btn");
let notification_btn = document.querySelector(".notification_btn");
let settings_btn = document.querySelector(".settings_btn");

let analytics_drop_down = document.querySelector(".analytics-drop-down");
let notification_drop_down = document.querySelector(".notification-drop-down");
let analytics_drop_down_icon = document.querySelector(
  ".analytics_drop_down_icon",
);
let notification_drop_down_icon = document.querySelector(
  ".notification_drop_down_icon",
);

let dashboard_window = document.querySelector(".dashboard-window");
let analytics_window_assets = document.querySelector(
  ".analytics-window-assets",
);
let analytics_window_riders = document.querySelector(
  ".analytics-window-riders",
);
let analytics_window_collections = document.querySelector(
  ".analytics-window-collections",
);
let notifications_window_general = document.querySelector(
  ".notifications-window-general",
);
let notifications_window_personal = document.querySelector(
  ".notifications-window-personal",
);
let settings_window = document.querySelector(".settings-window");
let all_windows = document.querySelectorAll(".windows");
let window_indicator_txt = document.querySelector("#window_indicator_txt");
let window_indicator_label = document.querySelector("#window_indicator_label");

function manageMainWindow(windowToDisplay, label, txt) {
  all_windows.forEach((window) => (window.style.display = "none"));
  window_indicator_label.innerHTML = label;
  window_indicator_txt.innerHTML = txt;
  windowToDisplay.style.display = "block";
}
function minimizeDropDowns() {}

dashboard_btn.addEventListener("click", () => {
  manageMainWindow(dashboard_window, "Dashboard", "");
  analytics_drop_down.style.height = "0px";
  analytics_drop_down_icon.style.transform = "rotate(0deg)";
  notification_drop_down.style.height = "0px";
  notification_drop_down_icon.style.transform = "rotate(0deg)";
  getDashBoardDataFunc();
  window_nav_indicator_txt.style.display = "";
});
analytics_btn.addEventListener("click", () => {
  notification_drop_down.style.height = "0px";
  notification_drop_down_icon.style.transform = "rotate(0deg)";
  if (analytics_drop_down.style.height == "0px") {
    analytics_drop_down.style.height = "94px";
    analytics_drop_down_icon.style.transform = "rotate(180deg)";
  } else {
    analytics_drop_down.style.height = "0px";
    analytics_drop_down_icon.style.transform = "rotate(0deg)";
  }
  window_nav_indicator_txt.style.display = "";
});
function analytics_assets_btn() {
  manageMainWindow(analytics_window_assets, "Analytics", " - Assets");
  getAllassetsDataFunc();
}
function analytics_riders_btn() {
  manageMainWindow(analytics_window_riders, "Analytics", " - Riders");
  getAllRiderssDataFunc();
}
function analytics_collections_btn() {
  manageMainWindow(analytics_window_collections, "Analytics", " - Collections");
  getAllassetCollectionsDataFunc();
}

notification_btn.addEventListener("click", () => {
  analytics_drop_down.style.height = "0px";
  analytics_drop_down_icon.style.transform = "rotate(0deg)";
  if (notification_drop_down.style.height == "0px") {
    notification_drop_down.style.height = "63px";
    notification_drop_down_icon.style.transform = "rotate(180deg)";
  } else {
    notification_drop_down.style.height = "0px";
    notification_drop_down_icon.style.transform = "rotate(0deg)";
  }
  window_nav_indicator_txt.style.display = "";
});
function notification_general_btn() {
  notification_general_func();
  manageMainWindow(notifications_window_general, "Notifications", " - General");
}
function notification_personal_btn() {
  manageMainWindow(
    notifications_window_personal,
    "Notifications",
    " - Personal",
  );
}

settings_btn.addEventListener("click", () => {
  manageMainWindow(settings_window, "Settings", "");
  analytics_drop_down.style.height = "0px";
  analytics_drop_down_icon.style.transform = "rotate(0deg)";
  notification_drop_down.style.height = "0px";
  notification_drop_down_icon.style.transform = "rotate(0deg)";
  window_nav_indicator_txt.style.display = "flex";
});

const sortDiv = document.getElementById("sortDiv");
const filterDiv = document.getElementById("filterDiv");
const filter_div = document.querySelector(".filter_div");
const riderSortDiv = document.getElementById("riderSortDiv");
const collectionSortDiv = document.getElementById("collectionSortDiv");
const collectionFilterDiv = document.getElementById("collectionFilterDiv");
const collectionFilterDiv_on_Pop = document.getElementById(
  "collectionFilterDiv_on_Pop",
);
const riderFilterDiv = document.getElementById("riderFilterDiv");
const notificationFilterDiv = document.getElementById("notificationFilterDiv");
const rider_search_dropdown = document.querySelector(".rider_search_dropdown");
const personalNotificationSortDiv = document.getElementById(
  "personalNotificationSortDiv",
);
const generalNotificationFilterDiv = document.getElementById(
  "generalNotificationFilterDiv",
);

function showFilterPop() {
  filterDiv.style.display = "block";
}
function showSortPop() {
  sortDiv.style.display = "block";
}
function sortAssetsBtns(e) {
  console.log(e.value);
  sortAssetsFunc(e.value);
}
function filterAssetsBtns(e) {
  console.log(e.value);
  sortAssetsFunc(e.value);
}
function sortRidersBtns(e) {
  console.log(e.value);
  sortRidersFunc(e.value);
}
function filterRidersBtns(e) {
  console.log(e.value);
  filterRidersFunc(e.value);
}
function sortCollectionsBtns(e) {
  console.log(e.value);
  sortCollectionsFunc(e.value);
}
function filterCollectionsBtns(e) {
  console.log(e.value);
  // filterCollectionsFunc(e.value)
}
sortDiv.addEventListener("click", () => [(sortDiv.style.display = "none")]);
filterDiv.addEventListener("click", () => [(filterDiv.style.display = "none")]);
filter_div.addEventListener("click", () => [
  (filter_div.style.display = "none"),
]);

// Rider Filter
function showRiderFilterPop() {
  riderFilterDiv.style.display = "block";
}
function showRiderSortPop() {
  riderSortDiv.style.display = "block";
}

riderFilterDiv.addEventListener("click", () => [
  (riderFilterDiv.style.display = "none"),
]);
riderSortDiv.addEventListener("click", () => [
  (riderSortDiv.style.display = "none"),
]);
// Collecy Filter
function showCollectionFilterPop() {
  collectionFilterDiv.style.display = "block";
}
function showCollectionSortPop() {
  collectionSortDiv.style.display = "block";
}
function showCollectionFilterPop_on_Pop() {
  collectionFilterDiv_on_Pop.style.display = "block";
}

collectionFilterDiv.addEventListener("click", () => [
  (collectionFilterDiv.style.display = "none"),
]);
collectionSortDiv.addEventListener("click", () => [
  (collectionSortDiv.style.display = "none"),
]);
collectionFilterDiv_on_Pop.addEventListener("click", () => [
  (collectionFilterDiv_on_Pop.style.display = "none"),
]);

const all_pops = document.querySelectorAll(".pop");
const add_asset_pop = document.querySelector(".add_asset_pop");
const view_asset_pop = document.querySelector(".view_asset_pop");
const edit_asset_pop = document.querySelector(".edit_asset_pop");
const view_rider_pop = document.querySelector(".view_rider_pop");
const edit_rider_pop = document.querySelector(".edit_rider_pop");
const pop_div = document.querySelector(".pop_div");
const view_collections_pop = document.querySelector(".view_collections_pop");

const add_user_pop = document.querySelector(".add_user_pop");
const edit_user_pop = document.querySelector(".edit_user_pop");
const view_user_pop = document.querySelector(".view_user_pop");
const user_info_dv = document.querySelector(".user_info");
let user_actions_cards = document.querySelector(".user_actions_cards");

let users_data_tbdy = document.querySelector("#users_data_tbdy");
let users_dv_btn = document.querySelector(".users_dv_btn");
let users_data_dv = document.querySelector(".users_data_dv");
let settings_tabs_dv = document.querySelector(".settings_tabs_dv");

const asset_cards = document.querySelectorAll(".asset_cards");
const asset_info_card = document.querySelector(".asset_info_card");
const asset_rider_card = document.querySelector(".asset_rider_card");
const asset_collections_card = document.querySelector(
  ".asset_collections_card",
);
const edit_asset_btns = document.querySelectorAll(".edit_asset_btns");

const assign_new_rider_btn = document.querySelector(".assign_new_rider_btn");
// const  view_rider_pop = document.querySelector('.view_rider_pop')
const send_general_notification_pop = document.querySelector(
  ".send_general_notification_pop",
);
const send_persona_notification_pop = document.querySelector(
  ".send_persona_notification_pop",
);
const search_for_rider_to_send_noti = document.querySelector(
  "#search_for_rider_to_send_noti",
);

let general_noti_type_txt = document.getElementById("general_noti_type_txt");
let general_noti_subject_txt = document.getElementById(
  "general_noti_subject_txt",
);
let general_noti_message_txt = document.getElementById(
  "general_noti_message_txt",
);

function managePopUpWindow(elements, element, display_state) {
  elements.forEach((elem) => (elem.style.display = "none"));
  element.style.display = display_state;
  pop_div.style.display = "flex";
}

const msg_pops_div = document.querySelector(".msg_pops_div");

function showMessagePopUpFunc(
  pop_type,
  pop_title,
  pop_img,
  pop_msg,
  pop_yes_btn_class,
) {
  let popUp = "";
  popUp = `
        <div class="msg_pop msg_pop_1">
                <div class="header ${pop_type}">
                    <span>${pop_title}</span>
                    <img src="../assets/icons/close.png" onclick="closePopBtn()" alt="">
                </div>
                <div class="body">
                    <img src="../assets/icons/${pop_img}" alt="">
                    <span>${pop_msg}</span>
                </div>
                <div class="footer">
                    <button onclick="closePopBtn()">Close</button>
                    <button class="${pop_yes_btn_class}" onclick="closePopBtn()">Yes</button>
                </div>
            </div>
    `;
  msg_pops_div.innerHTML = popUp;
  msg_pops_div.style.display = "flex";
}

function closePopBtn() {
  msg_pops_div.style.display = "none";
  pop_div.style.display = "none";
}

function addAssetBtn() {
  managePopUpWindow(all_pops, add_asset_pop, "block");
}
function viewAssetBtn(Index) {
  viewAssetFunc(Index);
  managePopUpWindow(all_pops, view_asset_pop, "block");
}
function editAssetBtn(Index) {
  save_Assets_Flag = "existing_rider";
  editAssetFunc(Index);
  managePopUpWindow(all_pops, edit_asset_pop, "block");
}
function deleteAssetBtn(Index) {
  let popUp = "";
  popUp = `
        <div class="msg_pop msg_pop_1">
                <div class="header n_waning_message">
                    <span>Deleting Asset</span>
                    <img src="../assets/icons/close.png" onclick="closePopBtn()" alt="">
                </div>
                <div class="body">
                    <img src="../assets/icons/n_warning" alt="">
                    <span>Aure sure you want to delete ${allAssetsDataArr[Index].asset_id}</span>
                </div>
                <div class="footer">
                    <button onclick="closePopBtn()">Close</button>
                    <button class="" onclick="deleteAssetFunc(${Index})">Yes</button>
                </div>
            </div>
    `;
  msg_pops_div.innerHTML = popUp;
  msg_pops_div.style.display = "flex";
  // deleteAssetFunc(Index);
}

function addUserBtn() {
  saveAddEditUserFlag = "add_user";

  managePopUpWindow(all_pops, add_user_pop, "block");
}
function viewUserBtn(Index) {
  viewUserFunc(Index);
  managePopUpWindow(all_pops, view_user_pop, "block");
}

function editUserBtn(Index) {
  saveAddEditUserFlag = "edit_user";
  let userData = allUsersDataArr[Index];
  activeUserDocIDFlag = userData._id;
  add_user_id_txt.value = userData.user_id;
  add_user_name_txt.value = userData.user_name;
  add_user_email_txt.value = userData.user_email;
  add_user_tel_txt.value = userData.user_tel;
  add_user_role_txt.value = userData.user_role;
  // add_user_pop.style.display = 'block'
  managePopUpWindow(all_pops, add_user_pop, "block");
}
function deleteUserBtn(Index) {
  let popUp = "";
  popUp = `
        <div class="msg_pop msg_pop_1">
                <div class="header n_waning_message">
                    <span>Deleting User</span>
                    <img src="../assets/icons/close.png" onclick="closePopBtn()" alt="">
                </div>
                <div class="body">
                    <img src="../assets/icons/n_warning" alt="">
                    <span>Aure sure you want to delete ${allUsersDataArr[Index].user_name}</span>
                </div>
                <div class="footer">
                    <button onclick="closePopBtn()">Close</button>
                    <button class="" onclick="deleteUserFunc(${Index})">Yes</button>
                </div>
            </div>
    `;
  msg_pops_div.innerHTML = popUp;
  msg_pops_div.style.display = "flex";
  // deleteUserFunc(Index);
}

function viewUserFunc(index) {
  let user = allUsersDataArr[index];
  let user_actions = allUsersDataArr[index].user_actions;
  let info_content = "";
  let actions_cards = "";
  info_content += `
        <div class="img">
                                <img src="../assets/icons/user.png" alt="">
                            </div>
                            <div class="dets user_info_dets">
                                <label>
                                    <span>UserID: </span>
                                    <span>${user.user_id}</span>
                                </label>
                                <label>
                                    <span>Name: </span>
                                    <span>${user.user_name}</span>
                                </label>
                                <label>
                                    <span>Email: </span>
                                    <span>${user.user_email}/span>
                                </label>
                                <label>
                                    <span>TelNo.: </span>
                                    <span>${user.user_tel}</span>
                                </label>
                                <label>
                                    <span>Role: </span>
                                    <span>${user.user_role}</span>
                                </label>
                            </div>
    `;
  if (user_actions.length > 0) {
    user_actions.forEach((action) => {
      actions_cards += `
                <div class="card">
                                        <div class="action_msg">
                                            <div class="title">
                                                <span>${action.type}</span>
                                                <span id="action_color_code" style="background: ${action.color_code};"></span>
                                                <span>${action.date} | ${action.time}</span>
                                            </div>
                                            <div class="body">
                                                <span>${action.desc}</span>
                                            </div>
                                        </div>
                                        <div class="action_btn">
                                            <img src="../assets/icons/delete.png" alt="">
                                        </div>
                                    </div>
            `;
    });
  } else {
    actions_cards = `<h3> There no actions yet </h3>`;
  }
  user_info_dv.innerHTML = info_content;
  user_actions_cards.innerHTML = actions_cards;
}

let settings_tabs_array = ["settings"];

function renderSettingsTabsElement() {
  let elems = "";
  settings_tabs_array.forEach((tab) => {
    elems += `
            <span onclick="goBackTo('${tab}')"> ${tab} ></span>
        `;
  });
  window_nav_indicator_txt.innerHTML = elems;
}
users_dv_btn.addEventListener("click", () => {
  if (loggedInUserData.user_role == "overall") {
    getAllUsersData();
    displayAllUsersData();

    settings_tabs_array.push("users");
    renderSettingsTabsElement();
    users_data_dv.style.display = "block";
    settings_tabs_dv.style.display = "none";
  } else {
    let errObj = {
      title: "Oops",
      name: "",
      msg: "Access Denied",
      img: "warning.png",
      type: "n_warning_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name}-${msg}`, btn_class);
  }
});

function goBackTo(flag) {
  switch (flag) {
    case "settings":
      users_data_dv.style.display = "none";
      settings_tabs_dv.style.display = "block";
      settings_tabs_array.pop();
      if (settings_tabs_array.length < 1) {
        settings_tabs_array = ["settings"];
      }
      renderSettingsTabsElement();
      break;
    case "users":
      users_data_dv.style.display = "block";
      settings_tabs_dv.style.display = "none";
      // settings_tabs_array.pop()
      // renderSettingsTabsElement()
      break;
  }
  console.log("hello" + flag);
}

let allUsersDataArr = [];
let saveAddEditUserFlag = "";
let activeUserDocIDFlag = "";

async function getAllUsersData() {
  let dbname = "data";
  let cname = "admin_data";
  try {
    loading_animation_div.style.display = "flex";
    const res = await fetch(`${baseUrl}/getall/${dbname}/${cname}`);
    const data = await res.json();
    allUsersDataArr = await data;
    displayAllUsersData();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Error",
      name: err.name,
      msg: err.message,
      img: "err.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name}-${msg}`, btn_class);
    console.log(`Oops While getting all usersData: ${err.name}_${err.message}`);
  }
}
function displayAllUsersData() {
  let td = "";
  allUsersDataArr.forEach((user, i) => [
    (td += `
            <tr>
                <td>${i + 1}</td>
                <td class="photo_td"><img src="../assets/icons/user.png" alt=""></td>
                <td class="id_td">${user.user_id}</td>
                <td>${user.user_name}</td>
                <td>${user.user_email}</td>
                <td>${user.user_tel}</td>
                <td>${user.user_role}</td>
                <td class="action_btns_td">
                    <img src="../assets/icons/view.png" onclick="viewUserBtn(${i})" alt="">
                    <img src="../assets/icons/edit.png" onclick="editUserBtn(${i})" alt="">
                    <img src="../assets/icons/delete.png" onclick="deleteUserBtn(${i})" alt="">
                 </td>
             </tr>
        `),
  ]);
  users_data_tbdy.innerHTML = td;
  users_data_dv.style.display = "block";
  // settings_tabs_dv.style.display = 'none'
}
function ClrAddUserInputsBtn() {
  add_user_id_txt.value = "";
  add_user_name_txt.value = "";
  add_user_email_txt.value = "";
  add_user_tel_txt.value = "";
  add_user_role_txt.value = "";
}

function saveAddEditUserBtn() {
  switch (saveAddEditUserFlag) {
    case "add_user":
      saveAddUserFunc();
      break;
    case "edit_user":
      editUserFunc();
      break;
  }
}
// closePopBtn
async function saveAddUserFunc() {
  let dbname = "data";
  let cname = "admin_data";
  try {
    let insertData = {
      user_id: add_user_id_txt.value,
      user_name: add_user_name_txt.value,
      user_email: add_user_email_txt.value,
      user_tel: add_user_tel_txt.value,
      user_role: add_user_role_txt.value,
      user_actions: [],
    };
    const res = await fetch(`${baseUrl}/insertone/${dbname}/${cname}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(insertData),
    });
    const data = await res.json();
    getAllUsersData();
    // displayAllUsersData()
    closePopBtn();
    // add_user_pop.style.display = 'none'
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Adding User",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    console.error(`Oops: While Adding User Data: ${err.name}_${err.message}`);
  }
}

async function editUserFunc() {
  let dbname = "data";
  let cname = "admin_data";
  try {
    let updates = {
      user_id: add_user_id_txt.value,
      user_name: add_user_name_txt.value,
      user_email: add_user_email_txt.value,
      user_tel: add_user_tel_txt.value,
      user_role: add_user_role_txt.value,
    };
    const res = await fetch(
      `${baseUrl}/updateonedoc_id/${dbname}/${cname}/${activeUserDocIDFlag}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(updates),
      },
    );
    const data = await res.json();
    console.log(await data);
    getAllUsersData();
    displayAllUsersData();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Editing user data",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    console.error(`Oops: While editing User Data: ${err.name}_${msg}`);
  }
}
async function deleteUserFunc(index) {
  let dbname = "data";
  let cname = "admin_data";
  let user_doc_id = allUsersDataArr[index]._id;
  try {
    const res = await fetch(
      `${baseUrl}/deleteonedoc_id/${dbname}/${cname}/${user_doc_id}`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "Application/json",
        },
      },
    );
    const data = await res.json();
    console.log(await data);
    getAllUsersData();
    displayAllUsersData();
    msg_pops_div.style.display = "";
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Deleting a user",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    console.error(`Oops: While editing User Data: ${err.name}_${err.message}`);
  }
}

// RIDER OPPS

let editRiderIndexFlag = "";
function SaveRiderUpdatesBtn() {
  saveEditRiderFunc(editRiderIndexFlag);
}
function clearRiderInputsBtn() {
  clearRiderInputsFunc();
}

function viewRidertBtn(Index) {
  viewRidertFunc(Index);
  managePopUpWindow(all_pops, view_rider_pop, "block");
}
function editRiderBtn(Index) {
  editRiderIndexFlag = Index;
  editRiderFunc(Index);
  managePopUpWindow(all_pops, edit_rider_pop, "block");
}

function deleteRiderBtn(Index) {
  let popUp = "";
  popUp = `
        <div class="msg_pop msg_pop_1">
                <div class="header n_waning_message">
                    <span>Deleting Rider</span>
                    <img src="../assets/icons/close.png" onclick="closePopBtn()" alt="">
                </div>
                <div class="body">
                    <img src="../assets/icons/n_warning" alt="">
                    <span>Aure sure you want to delete <b>${allRiderssDataArr[Index].rname}</b></span>
                </div>
                <div class="footer">
                    <button onclick="closePopBtn()">Close</button>
                    <button class="" onclick="deleteRiderFunc_2(${Index})">Yes</button>
                </div>
            </div>
    `;
  msg_pops_div.innerHTML = popUp;
  msg_pops_div.style.display = "flex";
}

function deleteRiderFunc_2(Index) {
  let rid_name = allRiderssDataArr[Index].rname;
  let rid_status = allRiderssDataArr[Index].rstatus;
  deleteRiderFunc(Index);
  // switch (allRiderssDataArr[Index].rstatus) {
  //     case 'active':
  //         alert(`Ooh no ${rid_name} is still ${rid_status}`)
  //         break;
  //     case 'blocked':
  //         deleteRiderFunc(Index)
  //         break;
  // }
}

function viewCollectionBtn(Index) {
  managePopUpWindow(all_pops, view_collections_pop, "block");
  collections_asset_index_Flag = Index;
  viewCollectionFunc(collections_asset_index_Flag);
}

// Inputs Handleling

let editAssetDataFlag = "asset";
let editAssetDataIDFlag = "";

function ClrEditAssetInputsBtn() {
  ClrEditAssetInputsFunc(editAssetDataFlag);
}
function SaveAssetUpdatesBtn() {
  switch (save_Assets_Flag) {
    case "existing_rider":
      saveEditAssetFunc(editAssetDataIDFlag, editAssetDataFlag);
      break;
    case "assign_rider":
      saveAssignNewRiderFunc(editAssetDataIDFlag, editAssetDataRiderIDFlag);
  }
}
function saveAddAssetBtn() {
  saveAddAssetFunc();
}

// Updating asset

function editAssetBtnStyles(btns, btn, bg, color) {
  btns.forEach((bt) => {
    bt.style.background = "gray";
    bt.style.color = "green";
  });
  btn.style.background = bg;
  btn.style.color = color;
}

function editAsset_info(e) {
  editAssetDataFlag = "asset";
  managePopUpWindow(asset_cards, asset_info_card, "block");
  editAssetBtnStyles(edit_asset_btns, e, "navy", "whitesmoke");
  assign_new_rider_btn.style.display = "none";
}
function editAsset_rider(e) {
  editAssetDataFlag = "rider";
  managePopUpWindow(asset_cards, asset_rider_card, "block");
  editAssetBtnStyles(edit_asset_btns, e, "navy", "whitesmoke");
  assign_new_rider_btn.style.display = "block";
}
function editAsset_collections(e) {
  editAssetDataFlag = "collection";
  managePopUpWindow(asset_cards, asset_collections_card, "block");
  editAssetBtnStyles(edit_asset_btns, e, "navy", "whitesmoke");
  assign_new_rider_btn.style.display = "none";
}

save_Assets_Flag = "existing_rider";
assign_new_rider_btn.addEventListener("click", () => {
  save_Assets_Flag = "assign_rider";
  // asset_cards.forEach( card => {
  //     card.style.display = 'none'
  // })
  // asset_rider_card.style.display = ''
  edit_asset_btns.forEach((btn) => {
    btn.style.display = "none";
  });
  edit_asset_btns[1].style.display = "";
});

function sendNotificationBtn() {
  managePopUpWindow(all_pops, send_general_notification_pop, "block");
}
function sendPersonalNotificationBtn() {
  save_General_Noti_Flag = "new_noti";
  managePopUpWindow(all_pops, send_persona_notification_pop, "block");
}

function showPersonalNotificationSortPop() {
  personalNotificationSortDiv.style.display = "block";
}
personalNotificationSortDiv.addEventListener("click", () => [
  (personalNotificationSortDiv.style.display = "none"),
]);
function showGeneralNotificationFilterPop() {
  generalNotificationFilterDiv.style.display = "block";
}
generalNotificationFilterDiv.addEventListener("click", () => [
  (generalNotificationFilterDiv.style.display = "none"),
]);

search_for_rider_to_send_noti.addEventListener("click", () => {
  rider_search_dropdown.style.display = "flex";
  // alert("hh")
});
rider_search_dropdown.addEventListener("mouseleave", () => {
  rider_search_dropdown.style.display = "";
});

// HANDELING DATA FROM SERVER

let loading_animation_div = document.querySelector(".loading_animation_div");

let asset_data_tbody = document.getElementById("asset_data_tbody");
let view_asset_info_cards = document.querySelector(".view_asset_info_cards");

let riders_data_tbdy = document.getElementById("riders_data_tbdy");
let view_rider_info_cards = document.querySelector(".view_rider_info_cards");

let collections_data_tbdy = document.getElementById("collections_data_tbdy");

let asset_pic_inp = document.getElementById("asset_pic_inp");
let asset_id_txt = document.getElementById("asset_id_txt");
let asset_modal_txt = document.getElementById("asset_modal_txt");
let asset_distributor_txt = document.getElementById("asset_distributor_txt");
let asset_type_txt = document.getElementById("asset_type_txt");
let asset_state_txt = document.getElementById("asset_state_txt");
let asset_rider_id_txt = document.getElementById("asset_rider_id_txt");
let asset_rider_name_txt = document.getElementById("asset_rider_name_txt");
let asset_rider_email_txt = document.getElementById("asset_rider_email_txt");
let asset_rider_tel_txt = document.getElementById("asset_rider_tel_txt");
let asset_rider_status_txt = document.getElementById("asset_rider_status_txt");
let asset_todays_amount_txt = document.getElementById(
  "asset_todays_amount_txt",
);
let asset_amount_recieved_txt = document.getElementById(
  "asset_amount_recieved_txt",
);
let asset_payment_date_txt = document.getElementById("asset_payment_date_txt");

const add_asset_pic_inp = document.getElementById("add_asset_pic_inp");
const add_asset_id_txt = document.getElementById("add_asset_id_txt");
const add_asset_modal_txt = document.getElementById("add_asset_modal_txt");
const add_asset_distributor_txt = document.getElementById(
  "add_asset_distributor_txt",
);
const add_asset_type_txt = document.getElementById("add_asset_type_txt");
const add_asset_state_txt = document.getElementById("add_asset_state_txt");

let rider_pic_inp = document.getElementById("rider_pic_inp");
let rider_id_txt = document.getElementById("rider_id_txt");
let rider_name_txt = document.getElementById("rider_name_txt");
let rider_email_txt = document.getElementById("rider_email_txt");
let rider_tel_txt = document.getElementById("rider_tel_txt");
let rider_status_txt = document.getElementById("rider_status_txt");

let total_bikes_span = document.getElementById("total_bikes_span");
let total_cars_span = document.getElementById("total_cars_span");
let total_riders_and_drivers_span = document.getElementById(
  "total_riders_and_drivers_span",
);
let total_income_span = document.getElementById("total_income_span");

const add_user_pic_inp = document.getElementById("add_user_pic_inp");
const add_user_role_txt = document.getElementById("add_user_role_txt");
const add_user_tel_txt = document.getElementById("add_user_tel_txt");
const add_user_email_txt = document.getElementById("add_user_email_txt");
const add_user_name_txt = document.getElementById("add_user_name_txt");
const add_user_id_txt = document.getElementById("add_user_id_txt");

// let baseUrl = `http://127.0.0.1:8080`;
let baseUrl = `https://riv-express.onrender.com`;

let allAssetsDataArr = [];
let allRiderssDataArr = [];
let allGeneralNotifications = [];
let allPersonalNotifications = [];

async function getDashBoardDataFunc() {
  let dbname = "data";
  let cname = "asset_data";
  try {
    loading_animation_div.style.display = "flex";
    const asset_res = await fetch(`${baseUrl}/getall/${dbname}/${cname}`);
    const rider_res = await fetch(
      `${baseUrl}/getall/${dbname}/${"rider_data"}`,
    );
    const asset_res_data = await asset_res.json();
    const rider_res_data = await rider_res.json();
    allAssetsDataArr = await asset_res_data;
    allRiderssDataArr = await rider_res_data;
    // console.log(data)
    // displayAssetDataFunc()
    displayDashboardDataFunc();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Getting Dashboard Data",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

function displayDashboardDataFunc() {
  let totalBikesFlag = 0;
  let totalCarsFlag = 0;
  let totalRidersAndDriverFlag = 0;
  let tottalIncomeFlag = 0;
  let d = "";
  let current_date = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-0${new Date().getDate()}`;

  allAssetsDataArr.forEach((asset, i) => {
    if (asset.asset_type == "bike") {
      totalBikesFlag += 1;
    } else if (asset.asset_type == "car") {
      console.log(`${i} Asset ${asset.asset_id}`);
      totalCarsFlag += 1;
    }
  });
  allRiderssDataArr.forEach((rider, i) => {
    totalRidersAndDriverFlag += 1;
    rider.collections.forEach((collection) => {
      if (collection.cdate == current_date) {
        d = collection.cdate;
        tottalIncomeFlag += Number(collection.amount_recieved);
      }
    });
  });

  total_bikes_span.innerText = totalBikesFlag;
  total_cars_span.innerText = totalCarsFlag;
  total_riders_and_drivers_span.innerText = totalRidersAndDriverFlag;
  total_income_span.innerText = tottalIncomeFlag;
  console.log("TOTBIKES: " + totalBikesFlag);
  console.log("RIDERDRIVERS: " + totalBikesFlag);
  console.log("D: " + d);
  console.log("Date: " + current_date);
  console.log("Income: " + tottalIncomeFlag);
}

async function saveAddAssetFunc() {
  let dbname = "data";
  let cname = "asset_data";

  if (
    add_asset_id_txt.value.trim() &&
    add_asset_modal_txt.value.trim() &&
    add_asset_distributor_txt.value.trim() &&
    add_asset_type_txt.value.trim() &&
    add_asset_state_txt.value.trim()
  ) {
    try {
      loading_animation_div.style.display = "flex";
      let assetData_ = {
        asset_id: add_asset_id_txt.value,
        modal: add_asset_modal_txt.value,
        distributor: add_asset_distributor_txt.value,
        bought_on: "",
        asset_pic: "../assets/icons/bike.png",
        asset_type: add_asset_type_txt.value,
        asset_state: add_asset_state_txt.value,
      };
      const res = await fetch(`${baseUrl}/insertoneasset/${dbname}/${cname}`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(assetData_),
      });
      const data = await res.json();
      console.log("After adding Data: \n", data);
      console.log("------\n");
      getAllassetsDataFunc();
      loading_animation_div.style.display = "";
    } catch (err) {
      let errObj = {
        title: "Adding new Asset",
        name: err.name,
        msg: err.message,
        img: "error.png",
        type: "error_msg_pop",
        btn_class: "btn_disp_none",
      };
      let { title, name, msg, img, type, btn_class } = errObj;
      showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    }
  } else {
    let errObj = {
      title: "Empty Fields",
      name: "",
      msg: "Please make sure none of the fields is empty",
      img: "warning.png",
      type: "warning_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
  }
}

async function getAllassetsDataFunc() {
  let dbname = "data";
  let cname = "asset_data";
  try {
    loading_animation_div.style.display = "flex";
    const res = await fetch(`${baseUrl}/getall/${dbname}/${cname}`);
    const data = await res.json();
    allAssetsDataArr = await data;
    // console.log(data)
    displayAssetDataFunc();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Getting Asset Data",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

function displayAssetDataFunc() {
  let td = "";

  let Asset_Id = "";
  let Asset_Modal = "";
  let Asset_Distributor = "";
  let Asset_Buying_Date = "";
  let Asset_Pic = "";
  let Asset_Type = "";
  let Asset_State = "";
  let Asset_Rider = "";
  let Asset_Rider_Amount_Expected = "";
  let Asset_Rider_Amount_Recieved = "";
  let Asset_Rider_Balance_Due = "";
  let Asset_Rider_Wallet = "";
  let Asset_Rider_Payment_Date = "";
  allAssetsDataArr.forEach((asset, i) => {
    try {
      // console.log(asset)
      Asset_Id = asset.asset_id;
      Asset_Modal = asset.modal;
      Asset_Distributor = asset.distributor;
      Asset_Buying_Date = asset.bought_on;
      Asset_Pic = asset.asset_pic;
      Asset_Type = asset.asset_type;
      Asset_State = asset.asset_state;
      Asset_Rider = asset.rider.rname;
      Asset_Rider_Amount_Expected =
        asset.collections[asset.collections.length - 1].amount_expected;
      Asset_Rider_Amount_Recieved =
        asset.collections[asset.collections.length - 1].amount_recieved;
      Asset_Rider_Balance_Due =
        asset.collections[asset.collections.length - 1].balance_due;
      Asset_Rider_Wallet =
        asset.collections[asset.collections.length - 1].wallet;
      Asset_Rider_Payment_Date =
        asset.collections[asset.collections.length - 1].cdate;

      // console.log(Asset_Rider_Amount_Expected)
    } catch (err) {
      let errObj = {
        title: "Displaying Asset Data",
        name: err.name,
        msg: err.message,
        img: "error.png",
        type: "error_msg_pop",
        btn_class: "btn_disp_none",
      };
      let { title, name, msg, img, type, btn_class } = errObj;
      showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    }

    td += `
            <tr>
                <td>${i + 1}</td>
                <td>${Asset_Id}</td>
                <td>${Asset_Type}</td>
                <td>${Asset_Rider}</td>
                <td>${Asset_State}</td>
                <td>${Asset_Rider_Amount_Expected}</td>
                <td>${Asset_Rider_Amount_Recieved}</td>
                <td>${Asset_Rider_Balance_Due}</td>
                <td>${Asset_Rider_Wallet}</td>
                <td>${Asset_Rider_Payment_Date}</td>
                <td>
                    <img src="../assets/icons/view.png" onclick="viewAssetBtn(${i})">
                    <img src="../assets/icons/edit.png" onclick="editAssetBtn(${i})">
                    <img src="../assets/icons/delete.png" onclick="deleteAssetBtn(${i})">
                </td>
            </tr>
        `;
  });
  asset_data_tbody.innerHTML = td;
}

function ClrEditAssetInputsFunc(edit_flag) {
  switch (edit_flag) {
    case "asset":
      asset_id_txt.value = "";
      asset_modal_txt.value = "";
      asset_distributor_txt.value = "";
      asset_type_txt.value = "";
      asset_state_txt.value = "";
      break;
    case "rider":
      asset_rider_id_txt.value = "";
      // rpic:"../assets/icons/user.png",
      asset_rider_name_txt.value = "";
      asset_rider_email_txt.value = "";
      asset_rider_tel_txt.value = "";
      asset_rider_status_txt.value = "";
      break;
    case "collection":
      asset_payment_date_txt.value = "";
      break;
  }
}

function viewAssetFunc(index) {
  let cards = "";
  let asset = allAssetsDataArr[index];

  let Asset_Id = asset.asset_id;
  let Asset_Pic = asset.asset_pic;
  let Asset_Modal = asset.modal;
  let Asset_Distributor = asset.distributor;
  let Asset_Rider_Id = asset.rider.rid;
  let Asset_Rider_Name = asset.rider.rname;
  let Asset_Rider_Pic = asset.rider.rpic;
  let Asset_Rider_Email = asset.rider.remail;
  let Asset_Rider_Tel = asset.rider.rtel;
  let Asset_Rider_Residence = asset.rider.rresidence;
  let Asset_Rider_Guaranter_Name = asset.rider.guaranter.gname;
  let Asset_Rider_Guaranter_Tel = asset.rider.guaranter.gtel;
  let Asset_Rider_Guaranter_Residence = asset.rider.guaranter.gresidence;

  cards = `
    <div class="cards">
         <div class="card_1 card">
             <div class="head">
                 <span>Asset Information</span>
                 <img src="${Asset_Pic}" alt="">
             </div>
             <div class="body">
                 <div class="txt">
                     <span>AssetID</span>
                     <span>${Asset_Id}</span>
                 </div>
                 <div class="txt">
                     <span>Modal</span>
                     <span>${Asset_Modal}</span>
                 </div>
                 <div class="txt">
                     <span>Distributor</span>
                     <span>${Asset_Distributor}</span>
                 </div>
             </div>
         </div>
         <div class="card_2 card">
             <div class="head">
                 <span>Rider Information</span>
                 <img src="${Asset_Rider_Pic}" alt="">
             </div>
             <div class="body">
                 <div class="txt">
                     <span>ID</span>
                     <span>${Asset_Rider_Id}</span>
                 </div>
                 <div class="txt">
                     <span>Name</span>
                     <span>${Asset_Rider_Name}</span>
                 </div>
                 <div class="txt">
                     <span>Email</span>
                     <span>${Asset_Rider_Email}</span>
                 </div>
                 <div class="txt">
                     <span>TelNo.</span>
                     <span>${Asset_Rider_Tel}</span>
                 </div>
                 <div class="txt">
                     <span>Residence.</span>
                     <span>${Asset_Rider_Residence}</span>
                 </div>
             </div>
         </div>
         <div class="card_3 card">
             <div class="head">
                 <span>Gurranter Information</span>
                 <img src="../assets/icons/user.png" alt="">
             </div>
             <div class="body">
                 <div class="txt">
                     <span>Name</span>
                     <span>${Asset_Rider_Guaranter_Name} H</span>
                 </div>
                 <div class="txt">
                     <span>TelNo.</span>
                     <span>${Asset_Rider_Guaranter_Tel}</span>
                 </div>
                 <div class="txt">
                     <span>Residence</span>
                     <span>${Asset_Rider_Guaranter_Residence}</span>
                 </div>
             </div>
         </div>
     </div>
    `;
  view_asset_info_cards.innerHTML = cards;
}

function generateAssetRiderIdBtn() {
  let ID = `R-0${Math.floor(Math.random() * 1999)}`;
  asset_rider_id_txt.value = ID;
}
function generateRiderIdBtn() {
  let ID = `R-0${Math.floor(Math.random() * 1999)}`;
  rider_id_txt.value = ID;
}
function generateUserIdBtn() {
  let ID = `A-0${Math.floor(Math.random() * 1999)}`;
  add_user_id_txt.value = ID;
}

function editAssetFunc(index) {
  edit_asset_btns.forEach((btn) => {
    btn.style.display = "";
  });
  try {
    let asset = allAssetsDataArr[index];
    editAssetDataIDFlag = asset.asset_id;
    editAssetDataRiderIDFlag = asset.rider.rid;

    asset_id_txt.value = asset.asset_id;
    asset_modal_txt.value = asset.modal;
    asset_distributor_txt.value = asset.distributor;
    asset_type_txt.value = asset.asset_type;
    asset_state_txt.value = asset.asset_state;

    asset_rider_id_txt.value = asset.rider.rid;
    asset_rider_name_txt.value = asset.rider.rname;
    asset_rider_email_txt.value = asset.rider.remail;
    asset_rider_tel_txt.value = asset.rider.rtel;
    asset_rider_status_txt.value = asset.rider.rstatus;

    asset_todays_amount_txt.value = "";
    let n = asset.collections.length;
    asset_todays_amount_txt.value = asset.collections[n - 1].amount_expected;
    asset_amount_recieved_txt.value = //asset.collections[n-1].amount_recieved
      asset_payment_date_txt.value = asset.collections[n - 1].cdate;
    console.log(asset.collections[n - 1].amount_expected);
    console.log(asset_amount_recieved_txt.value);
    console.log(
      "Editing: ",
      asset.asset_id,
      " Recieved: ",
      asset.collections[n - 1].amount_recieved,
    );
  } catch (err) {
    console.log(err.message);
  }
}
async function saveEditAssetFunc(asset_id, edit_flag) {
  console.log("ASSET: ", asset_id, " FLAG: ", edit_flag);
  let dbname = "data";
  let cname = "asset_data";
  let asset = "";
  allAssetsDataArr.forEach((asset_) => {
    if (asset_.asset_id == asset_id) {
      asset = asset_;
    }
  });
  let riderID = asset.rider.rid;
  let updates = {};
  let updates_2 = {};
  let empty = false;
  try {
    loading_animation_div.style.display = "flex";
    switch (edit_flag) {
      case "asset":
        if (
          asset_id_txt.value.trim() &&
          asset_modal_txt.value.trim() &&
          asset_distributor_txt.value.trim() &&
          asset_type_txt.value.trim() &&
          asset_state_txt.value.trim()
        ) {
          updates = {
            asset_id: asset_id_txt.value,
            modal: asset_modal_txt.value,
            distributor: asset_distributor_txt.value,
            asset_type: asset_type_txt.value,
            asset_state: asset_state_txt.value,
          };
        } else {
          empty = true;
          let errObj = {
            title: "Empty Fields",
            name: "",
            msg: "Please make Sure none of the fields is empty",
            img: "warning.png",
            type: "warning_msg_pop",
            btn_class: "btn_disp_none",
          };
          let { title, name, msg, img, type, btn_class } = errObj;
          showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
        }
        break;
      case "rider":
        if (
          asset_rider_id_txt.value.trim() &&
          asset_rider_name_txt.value.trim() &&
          asset_rider_email_txt.value.trim() &&
          asset_rider_tel_txt.value.trim() &&
          asset_rider_status_txt.value.trim()
        ) {
          updates = {
            rider: {
              rid: asset_rider_id_txt.value,
              rpic: "../assets/icons/user.png",
              rname: asset_rider_name_txt.value,
              remail: asset_rider_email_txt.value,
              rtel: asset_rider_tel_txt.value,
              rstatus: asset_rider_status_txt.value,
              rtype: asset.rider.rtype,
              entry_date: asset.rider.entry_date,
              resignatio_date: asset.rider.resignatio_date,
              rresidence: asset.rider.rresidence,
              guaranter: asset.rider.guaranter, //{gname:"Tom T",gtel:"0754889346",gresidence:"Kajansi"},
              notifications: asset.rider.notifications,
            },
            rider_id: riderID,
          };
          updates_2 = {
            rid: asset_rider_id_txt.value,
            rpic: "../assets/icons/user.png",
            rname: asset_rider_name_txt.value,
            remail: asset_rider_email_txt.value,
            rtel: asset_rider_tel_txt.value,
            rstatus: asset_rider_status_txt.value,
            // rtype:asset.rider.rtype,
            entry_date: asset.rider.entry_date,
            resignatio_date: asset.rider.resignatio_date,
            // rresidence: asset.rider.rresidence,
            // guaranter: asset.rider.guaranter,//{gname:"Tom T",gtel:"0754889346",gresidence:"Kajansi"},
            notifications: asset.rider.notifications,
            rider_id: riderID,
          };
          const res2 = await fetch(
            `${baseUrl}/updateone_rider_rider_id/${dbname}/rider_data/${riderID}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "Application/json",
              },
              body: JSON.stringify(updates_2),
            },
          );
          const data2 = await res2.json();
          console.log(`Res2: `, await data2);
        } else {
          empty = true;
          let errObj = {
            title: "Empty Fields",
            name: "",
            msg: "Please make Sure none of the fields is empty",
            img: "warning.png",
            type: "warning_msg_pop",
            btn_class: "btn_disp_none",
          };
          let { title, name, msg, img, type, btn_class } = errObj;
          showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
        }
        break;
      case "collection":
        if (
          asset_amount_recieved_txt.value.trim() &&
          !(asset_payment_date_txt.value == "")
        ) {
          let n = asset.collections.length;
          // let collection_Money = asset.collections[n-1].cmoney
          let Amount_Recieved = Number(asset_amount_recieved_txt.value);
          let Expected_Amount = Number(
            asset.collections[n - 1].amount_expected,
          );
          let Balance_Due = 0; //Expected_Amount>Amount_Recieved  ? (Expected_Amount - Amount_Recieved) : 0
          let Current_Wallet = Number(asset.collections[n - 1].wallet);
          let Wallet =
            Amount_Recieved > Expected_Amount
              ? Current_Wallet + (Amount_Recieved - Expected_Amount)
              : 0;

          let new_Collection_Money = (asset.collections[n - 1].cmoney = 0);
          if (Expected_Amount > Amount_Recieved && Current_Wallet > 0) {
            Balance_Due = Expected_Amount - Amount_Recieved - Current_Wallet;
          } else if (Expected_Amount > Amount_Recieved && Current_Wallet <= 0) {
            Balance_Due = Expected_Amount - Amount_Recieved;
          }
          Expected_Amount = Balance_Due;

          asset.collections[n - 1].cdate = asset_payment_date_txt.value;
          asset.collections[n - 1].amount_recieved = Amount_Recieved;
          asset.collections[n - 1].amount_expected = Expected_Amount;
          asset.collections[n - 1].balance_due = Balance_Due;
          asset.collections[n - 1].wallet = Wallet;

          let updatedCollection = asset.collections;

          updates = {
            asset_collection: {
              collections: updatedCollection,
            },
            rider_collection_data: {
              collection_id: asset.collections[n - 1].cid,
              rider_id: asset.collections[n - 1].crider,
              cmoney: new_Collection_Money,
              amount_expected: Expected_Amount,
              amount_recieved: Amount_Recieved,
              balance_due: Balance_Due,
              wallet: Wallet,
            },
            rider_id: asset.collections[n - 1].crider,
          };
        } else {
          empty = true;
          let errObj = {
            title: "Empty Fields",
            name: "",
            msg: "Please make Sure none of the fields is empty",
            img: "warning.png",
            type: "warning_msg_pop",
            btn_class: "btn_disp_none",
          };
          let { title, name, msg, img, type, btn_class } = errObj;
          showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
        }
        break;
      default:
        updates = {};
        break;
    }
    if (!empty) {
      const res = await fetch(
        `${baseUrl}/updateoneasset_id/${dbname}/${cname}/${asset_id}/${edit_flag}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(updates),
        },
      );
      const data = await res.json();

      console.log(data);
      getAllassetsDataFunc();
    } else {
      let errObj = {
        title: "Empty Fields",
        name: "",
        msg: "Please make Sure none of the fields is empty",
        img: "warning.png",
        type: "warning_msg_pop",
        btn_class: "btn_disp_none",
      };
      let { title, name, msg, img, type, btn_class } = errObj;
      showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    }
    msg_pops_div.style.display = "";
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Editing Asset",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

async function saveAssignNewRiderFunc(assetID, riderID) {
  let dbname = "data";
  let cname = "asset_data";
  let asset = "";
  allAssetsDataArr.forEach((asset_) => {
    if (asset_.asset_id == assetID) {
      asset = asset_;
    }
  });
  let updates = {};
  let riderData = {};
  console.log(`Asiging ${riderID} to ${assetID}`);
  try {
    loading_animation_div.style.display = "flex";
    updates = {
      rider: {
        rid: asset_rider_id_txt.value,
        rpic: "../assets/icons/user.png",
        rname: asset_rider_name_txt.value,
        remail: asset_rider_email_txt.value,
        rtel: asset_rider_tel_txt.value,
        rstatus: asset_rider_status_txt.value,
        rtype: asset.rider.rtype,
        entry_date: asset.rider.entry_date,
        resignatio_date: asset.rider.resignatio_date,
        rresidence: asset.rider.rresidence,
        guaranter: asset.rider.guaranter, //{gname:"Tom T",gtel:"0754889346",gresidence:"Kajansi"},
        notifications: asset.rider.notifications,
      },
    };
    riderData = {
      asset: {
        asset_id: assetID,
        modal: asset.modal,
        distributor: asset.distributor,
      },
      rid: asset_rider_id_txt.value,
      rpic: "../assets/icons/user.png",
      rname: asset_rider_name_txt.value,
      remail: asset_rider_email_txt.value,
      rtel: asset_rider_tel_txt.value,
      rstatus: asset_rider_status_txt.value,
      rtype: "",
      entry_date: new Date().getDate(),
      balance_due: 0,
      wallet: 0,
      resignatio_date: "",
      rresidence: "",
      guaranter: { gname: "", gtel: "", gresidence: "" },
      collections: [],
      notifications: [],
      guaranter: { gname: "", gtel: "", gresidence: "" },
    };
    const res = await fetch(
      `${baseUrl}/updateoneasset_id/${dbname}/${cname}/${assetID}/rider`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(updates),
      },
    );
    const data = await res.json();
    const res2 = await fetch(`${baseUrl}/insertone/${dbname}/rider_data`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(riderData),
    });
    const data2 = await res2.json();
    console.log(`Res2: `, await data2);
    console.log(data);
    getAllassetsDataFunc();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Assiging a Rider",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

async function deleteAssetFunc(index) {
  let asset_id = allAssetsDataArr[index].asset_id;
  let dbname = "data";
  let cname = "asset_data";
  try {
    loading_animation_div.style.display = "flex";
    const res = await fetch(
      `${baseUrl}/deleteoneasset_id/${dbname}/${cname}/${asset_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
        },
      },
    );
    let data = await res.json();
    console.log(await data);
    getAllassetsDataFunc();
    msg_pops_div.style.display = "";
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Deleting an Asset",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

async function getAllRiderssDataFunc() {
  let dbname = "data";
  let cname = "rider_data";
  try {
    loading_animation_div.style.display = "flex";
    const res = await fetch(`${baseUrl}/getall/${dbname}/${cname}`);
    const data = await res.json();
    allRiderssDataArr = await data;
    console.log(data);
    displayRiderstDataFunc();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Getting Rider Data",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}
function displayRiderstDataFunc() {
  let td = "";

  let Rider_Asset_Id = "";
  let Rider_Asset_Modal = "";
  let Rider_Asset_Distributor = "";
  let Rider_id = "";
  let Rider_pic = "";
  let Rider_name = "";
  let Rider_email = "";
  let Rider_tel = "";
  let Rider_status = "";
  let Rider_entry_date = "";
  let Rider_resignatio_date = "";
  let Rider_notifications = "";
  let Rider_balance_due = "";
  let Rider_wallet = "";
  allRiderssDataArr.forEach((rider, i) => {
    try {
      // console.log(asset)
      Rider_Asset_Id = rider.asset.asset_id;
      Rider_Asset_Modal = rider.asset.modal;
      Rider_Asset_Distributor = rider.asset.distributor;
      Rider_id = rider.rid;
      Rider_pic = rider.rpic;
      Rider_name = rider.rname;
      Rider_email = rider.remail;
      Rider_tel = rider.rtel;
      Rider_status = rider.rstatus;
      Rider_entry_date = rider.entry_date;
      Rider_resignatio_date = rider.resignatio_date;
      Rider_notifications = rider.notifications;
      Rider_balance_due = rider.balance_due;
      Rider_wallet = rider.wallet;

      // console.log(Asset_Rider_Amount_Expected)
    } catch (err) {
      let errObj = {
        title: "Displaying Rider Data",
        name: err.name,
        msg: err.message,
        img: "error.png",
        type: "error_msg_pop",
        btn_class: "btn_disp_none",
      };
      let { title, name, msg, img, type, btn_class } = errObj;
      showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
    }

    td += `
            <tr>
                <td>1</td>
                <td><img src="../assets/icons/user.png" alt=""></td>
                <td>${Rider_id}</td>
                <td>${Rider_name}</td>
                <td>${Rider_tel}</td>
                <td>${Rider_email}</td>
                <td>${Rider_entry_date}</td>
                <td>${Rider_status}</td>
                <td>${Rider_balance_due}</td>
                <td>${Rider_wallet}</td>
                <td>
                    <img src="../assets/icons/view.png" onclick="viewRidertBtn(${i})">
                    <img src="../assets/icons/edit.png" onclick="editRiderBtn(${i})">
                    <img src="../assets/icons/delete.png" onclick="deleteRiderBtn(${i})">
                </td>
                
            </tr>
        `;
  });
  riders_data_tbdy.innerHTML = td;
}

function clearRiderInputsFunc() {
  rider_pic_inp.value = "";
  rider_id_txt.value = "";
  rider_name_txt.value = "";
  rider_email_txt.value = "";
  rider_tel_txt.value = "";
  rider_status_txt.value = "";
}
function viewRidertFunc(index) {
  let cards = "";
  let rider = allRiderssDataArr[index];

  let Rider_pic = rider.rpic;
  let Rider_id = rider.rid;
  let Rider_name = rider.rname;
  let Rider_email = rider.remail;
  let Rider_tel = rider.rtel;
  let Rider_emp_date = rider.entry_date;
  let Rider_status = rider.rstatus;
  let Rider_balance_due = rider.balance_due;
  let Rider_wallet = rider.wallet;

  cards = `
        <section>
            <div class="sec_1">
                <span>${Rider_name}</span>
            </div>
            <div class="sec_2">
                <div class="card_1 card">
            <img src="${Rider_pic}" alt="">
                </div>
                <div class="card_2 card">
            <div class="head">
                <span>Details</span>
            </div>
            <div class="body">
                <div class="txt">
            <span>ID</span>
            <span>${Rider_id}</span>
                </div>
                <div class="txt">
            <span>Name</span>
            <span>J${Rider_name}</span>
                </div>
                <div class="txt">
            <span>Email</span>
            <span>${Rider_email}</span>
                </div>
                <div class="txt">
            <span>TelNo</span>
            <span>${Rider_tel}</span>
                </div>
                <div class="txt">
            <span>Emp Date</span>
            <span>${Rider_emp_date}</span>
                </div>
                <div class="txt">
            <span>Status</span>
            <span>${Rider_status}</span>
                </div>
                <div class="txt">
            <span>Balance Due</span>
            <span>${Rider_balance_due}</span>
                </div>
                <div class="txt">
            <span>Wallet</span>
            <span>${Rider_wallet}</span>
                </div>
            </div>
                </div>
            </div>
        </section>
    `;
  view_rider_info_cards.innerHTML = cards;
}
function editRiderFunc(index) {
  let rider = allRiderssDataArr[index];

  rider_pic_inp.value = ""; //rider.rpic
  rider_id_txt.value = rider.rid;
  rider_name_txt.value = rider.rname;
  rider_email_txt.value = rider.remail;
  rider_tel_txt.value = rider.rtel;
  rider_status_txt.value = rider.rstatus;
}

async function saveEditRiderFunc(index) {
  // console.log("ASSET: ",asset_id," FLAG: ",edit_flag)
  let dbname = "data";
  let cname = "rider_data";
  let riderId = allRiderssDataArr[index].rid;
  if (
    rider_id_txt.value.trim() &&
    rider_name_txt.value.trim() &&
    rider_email_txt.value.trim() &&
    rider_tel_txt.value.trim()
  ) {
    let updates = {
      rid: rider_id_txt.value,
      rpic: rider_pic_inp.value,
      rname: rider_name_txt.value,
      remail: rider_email_txt.value,
      rtel: rider_tel_txt.value,
      rstatus: rider_status_txt.value,
    };
    try {
      loading_animation_div.style.display = "flex";
      const res = await fetch(
        `${baseUrl}/updateone_rider_rider_id/${dbname}/${cname}/${riderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(updates),
        },
      );
      const data = await res.json();

      console.log(await data);
      getAllRiderssDataFunc();
      msg_pops_div.style.display = "";
      loading_animation_div.style.display = "";
    } catch (err) {
      let errObj = {
        title: "Editing Rider",
        name: err.name,
        msg: err.message,
        img: "error.png",
        type: "error_msg_pop",
        btn_class: "btn_disp_none",
      };
      let { title, name, msg, img, type, btn_class } = errObj;
      showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
      console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
    }
  } else {
    let errObj = {
      title: "Empty Field",
      name: "",
      msg: "Please make sure none of the fields is empty",
      img: "warning.png",
      type: "warning_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
  }
}
async function deleteRiderFunc(index) {
  let dbname = "data";
  let cname = "rider_data";
  let riderId = allRiderssDataArr[index].rid;

  try {
    loading_animation_div.style.display = "flex";
    const res = await fetch(
      `${baseUrl}/deleteone_rider_rider_id/${dbname}/${cname}/${riderId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
        },
      },
    );
    const data = await res.json();

    console.log(await data);
    getAllRiderssDataFunc();
    msg_pops_div.style.display = "";
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Deleting Rider",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${err.name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

// function getAllassetCollectionsDataFunc() {

// }

let collection_viewed_rider_id_select_inp = document.getElementById(
  "collection_viewed_rider_id_select_inp",
);
let collection_date_inp = document.getElementById("collection_date_inp");
let collection_trips_cards = document.querySelector(".collection_trips_cards");
let view_collections_rider_name = document.querySelector(
  "#view_collections_rider_name",
);
let view_collections_trips_money = document.querySelector(
  "#view_collections_trips_money",
);
let view_collections_trips_count = document.querySelector(
  "#view_collections_trips_count",
);
let collection_payment_infomation_parent = document.querySelector(
  ".collection_payment_infomation_parent",
);

let collection_viewed_rider_id_Flag = false;
let collections_asset_index_Flag = "";
let collections_asset_id_Flag = false;
let collection_viewed_rider_id_select = "current";
let collection_viewed_rider_id = "";

let view_asset_collection_no = 0;
let collection_date_flag = 0;
let allAssetDataCollections = [];

async function getAllassetCollectionsDataFunc() {
  let dbname = "data";
  let cname = "asset_data";
  try {
    loading_animation_div.style.display = "flex";
    const res = await fetch(`${baseUrl}/getall/${dbname}/${cname}`);
    const data = await res.json();
    allAssetsDataArr = await data;
    // console.log(data)
    displayassetCollectionsDataFun();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Getting CollectionData",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${err.name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}
function displayassetCollectionsDataFun() {
  let td = "";

  let Asset_Id = "";
  let Asset_Modal = "";
  let Asset_Distributor = "";
  let Asset_Buying_Date = "";
  let Asset_Pic = "";
  let Asset_Type = "";
  let Asset_State = "";
  let Asset_Rider = "";
  let Asset_Rider_Amount_Expected = "";
  let Asset_Rider_Amount_Recieved = "";
  let Asset_Rider_Balance_Due = "";
  let Asset_Rider_Wallet = "";
  let Asset_Rider_Payment_Date = "";
  allAssetsDataArr.forEach((asset, i) => {
    try {
      // console.log(asset)
      // allAssetDataCollections = asset.collections
      Asset_Id = asset.asset_id;
      Asset_Modal = asset.modal;
      Asset_Distributor = asset.distributor;
      Asset_Buying_Date = asset.bought_on;
      Asset_Pic = asset.asset_pic;
      Asset_Type = asset.asset_type;
      Asset_State = asset.asset_state;
      Asset_Rider = asset.rider.rname;
      Asset_Rider_Collection_Money =
        asset.collections[asset.collections.length - 1].cmoney;
      Asset_Rider_Amount_Expected =
        asset.collections[asset.collections.length - 1].amount_expected;
      Asset_Rider_Amount_Recieved =
        asset.collections[asset.collections.length - 1].amount_recieved;
      Asset_Rider_Balance_Due =
        asset.collections[asset.collections.length - 1].balance_due;
      Asset_Rider_Wallet =
        asset.collections[asset.collections.length - 1].wallet;
      Asset_Rider_Payment_Date =
        asset.collections[asset.collections.length - 1].cdate;

      // console.log(Asset_Rider_Amount_Expected)
    } catch (err) {
      let errMsg =
        "Cannot read properties of undefined (reading 'amount_expected')";
      if (err.message == errMsg) {
      } else {
        let errObj = {
          title: "Displaying Collection Data",
          name: err.name,
          msg: err.message,
          img: "error.png",
          type: "error_msg_pop",
          btn_class: "btn_disp_none",
        };
        let { title, name, msg, img, type, btn_class } = errObj;
        showMessagePopUpFunc(type, title, img, `${name} ${msg}`, btn_class);
      }
    }

    td += `<tr>
                <td>${i + 1}</td>
                <td>${Asset_Id}</td>
                <td>${Asset_Rider}</td>
                <td>${Asset_Rider_Payment_Date}</td>
                <td>${Asset_Rider_Collection_Money}</td>
                <td>${Asset_Rider_Amount_Expected}</td>
                <td>${Asset_Rider_Amount_Recieved}</td>
                <td>${Asset_Rider_Balance_Due}</td>
                <td>${Asset_Rider_Wallet}</td>
                <td>
                    <button onclick="viewCollectionBtn(${i})">View Trips</button>
                </td>
            </tr>`;
  });
  collections_data_tbdy.innerHTML = td;
}

collection_viewed_rider_id_select_inp.addEventListener("change", () => {
  collection_viewed_rider_id_select =
    collection_viewed_rider_id_select_inp.value;
  viewCollectionFunc(collections_asset_index_Flag);
  // collection_viewed_rider_id_Flag = true
});
collection_date_inp.addEventListener("change", () => {
  collection_date_flag = collection_date_inp.value;
  viewCollectionFunc(collections_asset_index_Flag);
  // collection_viewed_rider_id_Flag = true
});

function correctDate() {
  let DD = `${new Date().getDate()}`;
  let MM = `${new Date().getMonth() + 1}`;
  let YYYY = new Date().getFullYear();

  if (DD.length < 2) {
    DD = `0${DD}`;
  }
  if (MM.length < 2) {
    MM = `0${MM}`;
  }

  collection_date_flag = `${YYYY}-${MM}-${DD}`;
  collection_date_inp.value = collection_date_flag;
}
correctDate();

let currentCollectionTrips = [];

function viewCollectionFunc(index) {
  let asset_id = allAssetsDataArr[index].asset_id;
  let asset_collections = allAssetsDataArr[index].collections;
  let rider_name = allAssetsDataArr[index].rider.rname;
  let n = asset_collections.length;
  let rider_id = "";
  if (collection_viewed_rider_id_select == "current") {
    rider_id = asset_collections[n - 1].crider;
  } else {
    rider_id = collection_viewed_rider_id_select;
  }
  // console.log(asset_collections)
  console.log("Current Rider: " + rider_id);

  let cn = view_asset_collection_no;
  let collection_date = collection_date_flag;
  let current_viewed_collection = [];
  let collection_trips = [];
  let cards = "";
  let pay_info = "";
  try {
    asset_collections.forEach((collection, i) => {
      if (collection.cdate == collection_date) {
        console.log("DATE: " + collection_date);
        current_viewed_collection = collection;
        console.log("COLLIDL: " + collection.cid);
      } else {
        console.log(`Ther are no collections for the date: ${collection_date}`);
      }
    });
    console.log(current_viewed_collection);
    console.log(current_viewed_collection.trips);

    let collections_trips_count_flag = 0;
    let collections_trips_money_flag = 0;

    if (!(current_viewed_collection.trips == undefined)) {
      collection_trips = current_viewed_collection.trips;
      currentCollectionTrips = collection_trips;
      collection_trips.forEach((trip, i) => {
        collections_trips_count_flag = i + 1;
        collections_trips_money_flag += trip.tamount;
        cards += `
                    <section>
                        <div class="txt">
                            <span>From</span>
                            <span>${trip.tfrom}</span>
                        </div>
                        <div class="txt">
                            <span>To</span>
                            <span>${trip.tto}</span>
                        </div>
                        <div class="txt">
                            <span>Start Time</span>
                            <span>${trip.t_start_time}</span>
                        </div>
                        <div class="txt">
                            <span>End Time</span>
                            <span>${trip.t_end_time}</span>
                        </div>
                        <div class="txt">
                            <span>Amount</span>
                            <span>${trip.tamount}</span>
                        </div>
                        <div class="txt">
                            <span>Work</span>
                            <span>${trip.work}</span>
                        </div>
                        <div class="txt">
                            <span>Action</span>
                            <span>
                                <button onclick="editTripBtn(${i})">Edit</button>
                                <button onclick="deleteTripBtn(${i})">Delete</button>
                            </span>
                        </div>
                    </section>
                `;
      });

      pay_info = `
            <div class="collection_payment_infomation_parent">
                <div class="labels">
                    <span>Total Collected</span>
                    <span>${current_viewed_collection.cmoney}</span>
                </div>
                <div class="labels">
                    <span>Amount Expected</span>
                    <span>${current_viewed_collection.amount_expected}</span>
                </div>
                <div class="labels">
                    <span>T.Amount Recieved</span>
                    <span>${current_viewed_collection.amount_recieved}</span>
                </div>
                <div class="labels">
                    <span>Balance Due</span>
                    <span>${current_viewed_collection.balance_due}</span>
                </div>
                <div class="labels">
                    <span>Wallet Due</span>
                    <span>${current_viewed_collection.wallet}</span>
                </div>
            </div>
        `;
    } else {
      cards = `<h4> There are no trips for the date: <mark>${collection_date}</mark>`;
      pay_info = `<h4> There are no Payments made for the date: <mark>${collection_date}</mark>`;
    }
    // pay_info = `
    //     <div class="collection_payment_infomation_parent">
    //         <div class="labels">
    //             <span>Total Collected</span>
    //             <span>${current_viewed_collection.cmoney}</span>
    //         </div>
    //         <div class="labels">
    //             <span>Amount Expected</span>
    //             <span>${current_viewed_collection.amount_expected}</span>
    //         </div>
    //         <div class="labels">
    //             <span>T.Amount Recieved</span>
    //             <span>${current_viewed_collection.amount_recieved}</span>
    //         </div>
    //         <div class="labels">
    //             <span>Balance Due</span>
    //             <span>${current_viewed_collection.balance_due}</span>
    //         </div>
    //         <div class="labels">
    //             <span>Wallet Due</span>
    //             <span>${current_viewed_collection.wallet}</span>
    //         </div>
    //     </div>
    // `
    view_collections_rider_name.innerHTML = rider_name;
    view_collections_trips_count.innerHTML = collections_trips_count_flag;
    view_collections_trips_money.innerHTML = collections_trips_money_flag;
    collection_trips_cards.innerHTML = cards;
    collection_payment_infomation_parent.innerHTML = pay_info;
  } catch (err) {
    let errObj = {
      title: "Viewing Collections",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${err.name} ${msg}`, btn_class);
  }

  // try
}

function deleteTripBtn(index) {
  alert("Deleting trip" + currentCollectionTrips[index].ttype);
}

// NOTIFICATIONS OPPS

let all_general_notications_cards = document.querySelector(
  ".all_general_notications_cards",
);
let all_personal_notications_cards = document.querySelector(
  ".all_personal_notications_cards",
);

let save_General_Noti_Flag = "new_noti";
let general_noti_index_flag = "";
function savegeneralNotificationBtn() {
  switch (save_General_Noti_Flag) {
    case "new_noti":
      savegeneralNotificationFunc();
      break;
    case "updating_noti":
      updategeneralNotificationFunc(general_noti_index_flag);
      break;
  }
}

async function notification_general_func() {
  let dbname = "communication";
  let cname = "notifications";
  try {
    loading_animation_div.style.display = "flex";
    const res = await fetch(`${baseUrl}/getall/${dbname}/${cname}`);
    const data = await res.json();
    allGeneralNotifications = await data;
    console.log(data);
    displayGenralNotifcationsFunc();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Getting G- Notifications",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${err.name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.message}`);
  }
}

function displayGenralNotifcationsFunc() {
  let cards = "";
  allGeneralNotifications.forEach((noti, i) => {
    cards += `
            <div class="card_1 card">
                                    <div class="txt">
                                        <div class="head">
                                            <span>${noti.nsubject}</span>
                                        </div>
                                        <div class="body">
                                            <span>${noti.nmessage}</span>
                                        </div>
                                    </div>
                                    <div class="icons">
                                        <img src="../assets/icons/edit.png" onclick="editgeneralNotificationBtn(${i})">
                                        <img src="../assets/icons/delete.png" onclick="deletegeneralNotificationBtn(${i})">
                                    </div>
                                </div>
        `;
  });
  all_general_notications_cards.innerHTML = cards;
}

function editgeneralNotificationBtn(Index) {
  save_General_Noti_Flag = "updating_noti";
  general_noti_index_flag = Index;
  console.log("Editing: " + allGeneralNotifications[Index].nsubject);
  // send_general_notification_pop.style.display = 'block'
  general_noti_type_txt.value = allGeneralNotifications[Index].ntype;
  general_noti_subject_txt.value = allGeneralNotifications[Index].nsubject;
  general_noti_message_txt.value = allGeneralNotifications[Index].nmessage;
  managePopUpWindow(all_pops, send_general_notification_pop, "block");
}
function deletegeneralNotificationBtn(Index) {
  deletegeneralNotificationFunc(Index);
  console.log("Deleting: " + allGeneralNotifications[Index].nsubject);
}

async function savegeneralNotificationFunc() {
  let dbname = "communication";
  let cname = "notifications";
  let noti_data = {};
  try {
    loading_animation_div.style.display = "flex";
    noti_data = {
      nsubject: general_noti_subject_txt.value,
      nmessage: general_noti_message_txt.value,
      ntype: general_noti_type_txt.value,
    };
    const res = await fetch(`${baseUrl}/insertone/${dbname}/${cname}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(noti_data),
    });
    const data = await res.json();
    console.log(data);
    notification_general_func();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Adding G-Notification",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${err.name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

async function updategeneralNotificationFunc(index) {
  let dbname = "communication";
  let cname = "notifications";
  let noti_id = allGeneralNotifications[index]._id;
  let updates = {};
  try {
    loading_animation_div.style.display = "flex";
    updates = {
      nsubject: general_noti_subject_txt.value,
      nmessage: general_noti_message_txt.value,
      ntype: general_noti_type_txt.value,
    };
    const res = await fetch(
      `${baseUrl}/updateonedoc_id/${dbname}/${cname}/${noti_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(updates),
      },
    );
    const data = await res.json();
    console.log(data);
    notification_general_func();
    msg_pops_div.style.display = "";
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Updating G-Notification",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${err.name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

async function notification_personal_func() {
  let dbname = "communication";
  let cname = "notifications";
  try {
    loading_animation_div.style.display = "flex";
    const res = await fetch(`${baseUrl}/getall/${dbname}/${cname}`);
    const data = await res.json();
    allPersonalNotifications = await data;
    console.log(allPersonalNotifications);
    displayRiderstDataFunc();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Getting P-Notifications",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${err.name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

async function deletegeneralNotificationFunc(index) {
  let dbname = "communication";
  let cname = "notifications";
  let noti_id = allGeneralNotifications[index]._id;

  try {
    loading_animation_div.style.display = "flex";
    const res = await fetch(
      `${baseUrl}/deleteonedoc_id/${dbname}/${cname}/${noti_id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
        },
      },
    );
    const data = await res.json();
    console.log(data);
    notification_general_func();
    loading_animation_div.style.display = "";
  } catch (err) {
    let errObj = {
      title: "Deleting Notification",
      name: err.name,
      msg: err.message,
      img: "error.png",
      type: "error_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${err.name} ${msg}`, btn_class);
    console.log(`Oops - ${errObj.type} :: ${errObj.name} __ ${errObj.msg}`);
  }
}

// SEARCH FUNCTIONALITY
let search_asset_inp = document.getElementById("search_asset_inp");
let search_rider_inp = document.getElementById("search_rider_inp");
let search_collection_inp = document.getElementById("search_collection_inp");
let search_in_users_inp = document.getElementById("search_in_users_inp");
let selectSortQuery = document.getElementById("selectSortQuery");

search_asset_inp.addEventListener("input", () => {
  searchInTables(search_asset_inp, asset_data_tbody);
});
search_rider_inp.addEventListener("input", () => {
  searchInTables(search_rider_inp, riders_data_tbdy);
});
search_collection_inp.addEventListener("input", () => {
  searchInTables(search_collection_inp, collections_data_tbdy);
});
search_in_users_inp.addEventListener("input", () => {
  searchInTables(search_in_users_inp, users_data_tbdy);
});

// SORTING FUNCTIONALITY
// displayAssetDataFunc
// allAssetsDataArr
function sortAssetsFunc(flag) {
  switch (flag) {
    case "normal":
      getAllassetsDataFunc();
      break;
    case "alphabets_az":
      allAssetsDataArr.sort((a, b) => {
        return a.rider.rname.localeCompare(b.rider.rname);
      });
      displayAssetDataFunc();
      break;
    case "alphabets_za":
      allAssetsDataArr.sort((a, b) => {
        return b.rider.rname.localeCompare(a.rider.rname);
      });
      displayAssetDataFunc();
      break;
    case "alphabets_za":
      allAssetsDataArr.sort((a, b) => {
        return b.rider.rname.localeCompare(a.rider.rname);
      });
      displayAssetDataFunc();
      break;
    case "balance_high":
      // let n = allAssetsDataArr.c
      // allAssetsDataArr.sort((a,b) => {
      //     return Number(a.collections[n-1].balance_due) - Number(b.collections[n-1].balance_due)
      // })
      displayAssetDataFunc();
      break;
    case "asset_type":
      allAssetsDataArr.sort((a, b) => {
        return a.asset_type.localeCompare(b.asset_type);
      });
      displayAssetDataFunc();
      break;
    case "asset_state":
      allAssetsDataArr.sort((a, b) => {
        return b.asset_state.localeCompare(a.asset_state);
      });
      displayAssetDataFunc();
      break;
  }
}
function sortRidersFunc(flag) {
  switch (flag) {
    case "normal":
      getAllRiderssDataFunc();
      break;
    case "name_az":
      allRiderssDataArr.sort((a, b) => {
        return a.rname.localeCompare(b.rname);
      });
      displayRiderstDataFunc();
      break;
    case "name_za":
      allRiderssDataArr.sort((a, b) => {
        return b.rname.localeCompare(a.rname);
      });
      displayRiderstDataFunc();
      break;
    case "status_active":
      allRiderssDataArr.sort((a, b) => {
        return a.rstatus.localeCompare(b.rstatus);
      });
      displayRiderstDataFunc();
      break;
    case "status_blocked":
      allRiderssDataArr.sort((a, b) => {
        return b.rstatus.localeCompare(a.rstatus);
      });
      displayRiderstDataFunc();
      break;
    case "empdate_first":
      // let n = allRiderssDataArr.c
      allRiderssDataArr.sort((a, b) => {
        return a.entry_date.localeCompare(b.entry_date);
      });
      displayRiderstDataFunc();
      break;
    case "empdate_last":
      // let n = allRiderssDataArr.c
      allRiderssDataArr.sort((a, b) => {
        return b.entry_date.localeCompare(a.entry_date);
      });
      displayRiderstDataFunc();
      break;
    case "balance":
      allRiderssDataArr.sort((a, b) => {
        return b.balance_due - a.balance_due;
      });
      displayRiderstDataFunc();
      break;
    case "wallet":
      allRiderssDataArr.sort((a, b) => {
        return b.wallet - a.wallet;
      });
      displayRiderstDataFunc();
      break;
      allRiderssDataArr.sort((a, b) => {
        return b.asset_state.localeCompare(a.asset_state);
      });
      displayRiderstDataFunc();
      break;
  }
}
function filterRidersFunc(flag) {
  // switch (flag) {
  //     case 'normal':
  //         getAllRiderssDataFunc()
  //         break;
  //     case 'name_az':
  //         allRiderssDataArr.sort((a,b) => {
  //             return a.rname.localeCompare(b.rname)
  //         })
  //         displayRiderstDataFunc()
  //         break
  //     case 'name_za':
  //         allRiderssDataArr.sort((a,b) => {
  //             return b.rname.localeCompare(a.rname)
  //         })
  //         displayRiderstDataFunc()
  //         break
  //     case 'alphabets_za':
  //         allRiderssDataArr.sort((a,b) => {
  //             return b.rider.rname.localeCompare(a.rider.rname)
  //         })
  //         displayRiderstDataFunc()
  //         break
  //     case 'balance_high':
  //         // let n = allRiderssDataArr.c
  //         // allRiderssDataArr.sort((a,b) => {
  //         //     return Number(a.collections[n-1].balance_due) - Number(b.collections[n-1].balance_due)
  //         // })
  //         displayRiderstDataFunc()
  //         break
  //     case 'asset_type':
  //         allRiderssDataArr.sort((a,b) => {
  //             return a.asset_type.localeCompare(b.asset_type)
  //         })
  //         displayRiderstDataFunc()
  //         break
  //     case 'asset_state':
  //         allRiderssDataArr.sort((a,b) => {
  //             return b.asset_state.localeCompare(a.asset_state)
  //         })
  //         displayRiderstDataFunc()
  //         break
  // }
  console.log("Filtering Riders by: " + flag);
}

function sortCollectionsFunc(flag) {
  switch (flag) {
    case "normal":
      getAllRiderssDataFunc();
      break;
    case "name_az":
      allRiderssDataArr.sort((a, b) => {
        return a.rname.localeCompare(b.rname);
      });
      displayRiderstDataFunc();
      break;
    case "name_za":
      allRiderssDataArr.sort((a, b) => {
        return b.rname.localeCompare(a.rname);
      });
      displayRiderstDataFunc();
      break;
    case "status_active":
      allRiderssDataArr.sort((a, b) => {
        return a.rstatus.localeCompare(b.rstatus);
      });
      displayRiderstDataFunc();
      break;
    case "status_blocked":
      allRiderssDataArr.sort((a, b) => {
        return b.rstatus.localeCompare(a.rstatus);
      });
      displayRiderstDataFunc();
      break;
    case "empdate_first":
      // let n = allRiderssDataArr.c
      allRiderssDataArr.sort((a, b) => {
        return a.entry_date.localeCompare(b.entry_date);
      });
      displayassetCollectionsDataFun();
      // displayRiderstDataFunc()
      break;
    case "empdate_last":
      // let n = allRiderssDataArr.c
      allRiderssDataArr.sort((a, b) => {
        return b.entry_date.localeCompare(a.entry_date);
      });
      displayRiderstDataFunc();
      break;
    case "balance":
      allRiderssDataArr.forEach((rider) => {
        rider.collections.sort((a, b) => {
          return b.balance_due - a.balance_due;
        });
      });
      displayassetCollectionsDataFun();
      // allRiderssDataArr.collections.sort((a,b) => {
      //     return b.balance_due - a.balance_due
      // })
      // displayRiderstDataFunc()
      break;
    case "wallet":
      allRiderssDataArr.forEach((rider) => {
        console.log(rider);
        // let n = rider.collections.length
        // rider.collections[n-1].sort((a,b) => {
        //     return b.wallet - a.wallet
        // })
      });
      //         allRiderssDataArr.sort((a,b) => {
      //             return b.wallet - a.wallet
      // })
      // displayassetCollectionsDataFun()
      // displayRiderstDataFunc()
      break;
      allRiderssDataArr.sort((a, b) => {
        return b.asset_state.localeCompare(a.asset_state);
      });
      displayRiderstDataFunc();
      break;
  }
}

function searchInTables(search_input, tbody) {
  let text = search_input.value.toLowerCase();
  let rows = tbody.children;
  let match;
  for (let row of rows) {
    let cells = row.children;
    match = false;
    for (let cell of cells) {
      if (cell.textContent.toLowerCase().includes(text)) {
        match = true;
      }
    }
    if (match) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

selectSortQuery.addEventListener("change", () => {
  sortUsersDataFunc(selectSortQuery.value);
});
function sortUsersDataFunc(flag) {
  console.log(flag);
  switch (flag) {
    case "normal":
      getAllUsersData();
      break;
    case "name_az":
      allUsersDataArr.sort((a, b) => {
        return a.user_name.localeCompare(b.user_name);
      });
      displayAllUsersData();
      break;
    case "name_za":
      allUsersDataArr.sort((a, b) => {
        return b.user_name.localeCompare(a.user_name);
      });
      displayAllUsersData();
      break;
    default:
      getAllUsersData();
      break;
  }
}

let user_log_in_email_txt = document.getElementById("user_log_in_email_txt");
let user_log_in_id_txt = document.getElementById("user_log_in_id_txt");
let user_login_rotate_img = document.getElementById("user_login_rotate_img");
let login_screen = document.querySelector(".login_screen");

let loggedind_user_name_span = document.getElementById(
  "loggedind_user_name_span",
);
let logged_in_user_role_span = document.getElementById(
  "logged_in_user_role_span",
);

function userLoginBtn() {
  userLoginFunc();
}
function userLogOutButton() {
  location.reload();
}

let loggedInUserData = {};
async function userLoginFunc() {
  if (user_log_in_id_txt.value.trim() && user_log_in_email_txt.value.trim()) {
    try {
      user_login_rotate_img.style.visibility = "visible";
      let logins = {
        user_id: user_log_in_id_txt.value,
        user_email: user_log_in_email_txt.value,
      };
      const res = await fetch(`${baseUrl}/user_login`, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(logins),
      });
      const rslt = await res.json();
      let login_status = await Boolean(rslt);
      // console.log("STATUS: "+rslt)
      if (login_status) {
        console.log("Logged in successfully ! " + logins.user_id);
        getDashBoardDataFunc();
        getAllUsersData();
        const res2 = await fetch(`${baseUrl}/getall/data/admin_data`);
        const data = await res2.json();
        console.log(loggedInUserData);
        // display
        await data.forEach((user) => {
          if (
            user.user_email == logins.user_email &&
            user.user_id == logins.user_id
          ) {
            loggedInUserData = user;
          }
        });

        let errObj = {
          title: "Success",
          name: "",
          msg: "Successfully Logged in!",
          img: "success.png",
          type: "success_msg_pop",
          btn_class: "btn_disp_none",
        };
        let { title, name, msg, img, type, btn_class } = errObj;
        showMessagePopUpFunc(type, title, img, `${msg}`, btn_class);
        login_screen.style.display = "none";
        loggedind_user_name_span.innerHTML = loggedInUserData.user_name;
        logged_in_user_role_span.innerHTML =
          loggedInUserData.user_role == "overall"
            ? `${loggedInUserData.user_role} Admin`
            : loggedInUserData.user_role;
      } else {
        let errObj = {
          title: "Incorrect Details",
          name: "",
          msg: "Please enter correct Credentials",
          img: "warning.png",
          type: "warning_msg_pop",
          btn_class: "btn_disp_none",
        };
        let { title, name, msg, img, type, btn_class } = errObj;
        showMessagePopUpFunc(type, title, img, `${msg}`, btn_class);
        console.log("enter correct creds" + rslt.login_status);
        // }
      }
      user_login_rotate_img.style.visibility = "";
    } catch (err) {
      let errObj = {
        title: "Error",
        name: err.name,
        msg: err.message,
        img: "error.png",
        type: "error_msg_pop",
        btn_class: "btn_disp_none",
      };
      let { title, name, msg, img, type, btn_class } = errObj;
      // showMessagePopUpFunc(type,title,img,`${name}-${msg}`,btn_class)
      console.error(`Oops while Logiing in: ${err.name} - ${err.message}`);
      user_login_rotate_img.style.visibility = "";
    }
  } else {
    let errObj = {
      title: "Empyt Fields",
      name: "",
      msg: "Please Make sure none of the Fields is empyt",
      img: "warning.png",
      type: "warning_msg_pop",
      btn_class: "btn_disp_none",
    };
    let { title, name, msg, img, type, btn_class } = errObj;
    showMessagePopUpFunc(type, title, img, `${msg}`, btn_class);
  }
}
// displayAllUsersData

window.addEventListener("load", () => {
  analytics_drop_down.style.height = "0px";
  notification_drop_down.style.height = "0px";
  manageMainWindow(dashboard_window, "Dashboard", "");
  analytics_drop_down.style.height = "0px";
  analytics_drop_down_icon.style.transform = "rotate(0deg)";
  notification_drop_down.style.height = "0px";
  notification_drop_down_icon.style.transform = "rotate(0deg)";
});
