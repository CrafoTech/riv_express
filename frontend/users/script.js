const pop_pups_div = document.querySelector('.pop_pups_div')
const all_pop_ups = document.querySelectorAll('.pop_up')
const all_add_trip_popups = document.querySelectorAll('.all_add_trip_popups')
const new_gig_pop = document.querySelector('.new_gig_pop')
const new_ride_pop = document.querySelector('.new_ride_pop')
const true_flase_pops = document.querySelector('.true_flase_pops')
const true_or_flase_pop = document.querySelector('.true_or_flase_pop')

let all_check_gig_div = document.querySelectorAll('.check_gig_div');
let pakage_delivery_gig = document.querySelector('.pakage_delivery_gig');
let client_gig = document.querySelector('.client_gig');
let both_gig = document.querySelector('.both_gig');
let all_gig_check_box = document.querySelectorAll('.gig_check_box');
let package_delivery_check = document.querySelector('.package_delivery_check');
let client_gig_check = document.querySelector('.client_gig_check');
let both_gig_check = document.querySelector('.both_gig_check');

let loading_screen = document.querySelector('.loading_screen')

// pakage_delivery_gig.addEventListener('click', (e) => {
//     console.log(e.target.textContent)
// })

let check_gig_flag = ''
function checkGigTypeFunc(flag,bg) {
    switch (flag) {
        case 'package_delivery': 
                 all_gig_check_box.forEach( check_box => {
                        check_box.style.background = 'none'
                })
                 package_delivery_check.style.background = bg;
                break;
        case 'client': 
                 all_gig_check_box.forEach( check_box => {
                        check_box.style.background = 'none'
                })
                 client_gig_check.style.background = bg;
                break;
        case 'both': 
                 all_gig_check_box.forEach( check_box => {
                        check_box.style.background = 'none'
                })
                 both_gig_check.style.background = bg;
                break;

    }
}

// all_check_gig_div.forEach( checked => {
//     checkGigTypeFunc(checked,'green')
// })

pakage_delivery_gig.addEventListener('click', () => {
    check_gig_flag ='package_delivery'
    checkGigTypeFunc(check_gig_flag,'gold')
})
client_gig.addEventListener('click', () => {
    check_gig_flag ='client'
    checkGigTypeFunc(check_gig_flag,'gold')
})
both_gig.addEventListener('click', () => {
    check_gig_flag ='both'
    checkGigTypeFunc(check_gig_flag,'gold')
})

// MENEU ACTIONS

const side_bar_div = document.querySelector('.side_bar_div');
const empty_sidebar_space = document.querySelector('.empty_sidebar_space');

function closeMenueBtn() {
    side_bar_div.style.width = ''
}
function openMenueBtn() {
    side_bar_div.style.width = '100%'

    let {rname,rtel} = riderArr[0]
    side_bar_user_name.innerText = `${rname}`
}
empty_sidebar_space.addEventListener('click', () => {
    side_bar_div.style.width = ''
})

// Handelling Cards
const user_trips_card = document.querySelector('.user_trips_card');
const user_history = document.querySelector('.user_history');
const user_profile = document.querySelector('.user_profile');
const user_notifications = document.querySelector('.user_notifications');
const user_faqs = document.querySelector('.user_faqs');
const contact_us = document.querySelector('.contact_us');
const all_user_cards = document.querySelectorAll('.main_card');

function displayACard(card_to_be_displayed,display_state) {
    all_user_cards.forEach( card => {
        card.style.display = ''
    })
    card_to_be_displayed.style.display = display_state 
    side_bar_div.style.width = ''
}

function displayPopDiv(elements,pop_to_show,display_state) {
    elements.forEach(element => {
        element.style.display = 'none'
    })
    pop_to_show.style.display = display_state
    pop_pups_div.style.display = 'flex'
}

const company_gig_section = document.querySelector('.company_gig_section')
const rider_gig_section = document.querySelector('.rider_gig_section')
const company_trips_history_div = document.querySelector('.company_trips_history_div')
const rider_trips_history_div = document.querySelector('.rider_trips_history_div')
const company_notifications_div = document.querySelector('.company_notifications_div')
const rider_notifications_div = document.querySelector('.rider_notifications_div')

const company_tirps_history_card = document.querySelector('.company_tirps_history_card')
const rider_tirps_history_card = document.querySelector('.rider_tirps_history_card')

const rider_notification_cards = document.querySelector('.rider_notification_cards')
const company_notification_cards = document.querySelector('.company_notification_cards')
const rider_notifications_btn = document.querySelector('.rider_notifications_btn')
const company_notifications_btn = document.querySelector('.company_notifications_btn')

let cash_payment_check_div = document.querySelector('.cash_payment_check_div')
let cash_payment_check_img = document.querySelector('#cash_payment_check_img')
let cash_payment_company_check_div = document.querySelector('.cash_payment_company_check_div')
let cash_payment_company_check_img = document.querySelector('#cash_payment_company_check_img')

let company_gig_start_point_txt = document.getElementById('company_gig_start_point_txt')
let company_gig_end_point_txt = document.getElementById('company_gig_end_point_txt')
let company_gig_amount_charged_txt = document.getElementById('company_gig_amount_charged_txt')

let rider_gig_start_point_txt = document.getElementById('rider_gig_start_point_txt')
let rider_gig_end_point_txt = document.getElementById('rider_gig_end_point_txt')
let rider_gig_amount_charged_txt = document.getElementById('rider_gig_amount_charged_txt')

const select_work_btns = document.querySelectorAll('.select_work_btns');
const company_work_btn = document.querySelector('.company_work_btn');
const rider_work_btn = document.querySelector('.rider_work_btn');
const select_company_work_btn = document.querySelector('.select_company_work_btn');
const select_rider_work_btn = document.querySelector('.rider_work_btn');

const compny_work_history_btn = document.querySelector('.compny_work_history_btn');
const rider_work_history_btn = document.querySelector('.rider_work_history_btn');

const user_name_plcholder = document.getElementById('user_name_plcholder');
const user_tel_plcholder = document.getElementById('user_tel_plcholder');
const side_bar_user_name = document.getElementById('side_bar_user_name');

const faqs_cards_section = document.querySelector('.faqs_cards_section')

// Handel cash payment checkbox
let cash_payment_check_flag = false
cash_payment_check_div.addEventListener('click', () => {
    if (cash_payment_check_flag) {
        cash_payment_check_img.style.display = 'none'
        cash_payment_check_flag = false
    } else {
        cash_payment_check_img.style.display = 'block'
        cash_payment_check_flag = true
    }
})
let cash_payment_company_check_div_flag = false
cash_payment_company_check_div.addEventListener('click', () => {
    if (cash_payment_company_check_div_flag) {
        cash_payment_company_check_img.style.display = 'none'
        cash_payment_company_check_div_flag = false
    } else {
        cash_payment_company_check_img.style.display = 'block'
        cash_payment_company_check_div_flag = true
    }
})

let work_kind_flag = 'company'
rider_work_btn.addEventListener('click', () => {
    work_kind_flag = 'rider'
})

let select_work_btn_bottom_border_color = 'teal'
let select_work_btn_color = 'whitesmoke'
let select_work_btn_background = '#10B981'
company_work_btn.style.background = select_work_btn_background
company_work_btn.style.color = select_work_btn_color
company_work_btn.style.borderBottomColor = select_work_btn_bottom_border_color
company_work_btn.addEventListener('click', () => {
    work_kind_flag = 'company'
})

function changeButtonSTyle(btns,elem,styles_1,styles_2) {
    styles_1 = {
        background:"",
        color:"",
        border_bottom_color: ""
    }
    styles_2 = {
        background: select_work_btn_background,
        color:select_work_btn_color,
        border_bottom_color:select_work_btn_bottom_border_color
    }
    select_work_btns.forEach(btn => {
        btn.style.background = styles_1.background
        btn.style.color = styles_1.color
        btn.style.borderBottomColor = styles_1.border_bottom_color
    })
    elem.style.background = styles_2.background
    elem.style.color = styles_2.color
    elem.style.borderBottomColor = styles_2.border_bottom_color
}

function displayCompanyWorkBtn(e) {
    changeButtonSTyle(select_work_btns,e)
    company_gig_section.style.display = 'block'
    rider_gig_section.style.display = 'none'
    // e.style.background = 'navy'
}
function displayRiderWorkBtn(e) {
    changeButtonSTyle(select_work_btns,e);
    company_gig_section.style.display = 'none'
    rider_gig_section.style.display = 'block'
    // e.style.background = 'navy'
}
function displayCompanyWorkHistoryBtn(e) {
    changeButtonSTyle(select_work_btns,e)
    displayCompanyHistoryCardFunc()
    company_trips_history_div.style.display = 'block'
    rider_trips_history_div.style.display = 'none'
    // e.style.background = 'navy'
}
function displayRiderWorkHistoryBtn(e) {
    changeButtonSTyle(select_work_btns,e);
    displayRiderHistoryCardFunc()
    company_trips_history_div.style.display = 'none'
    rider_trips_history_div.style.display = 'block'
    // e.style.background = 'navy'
}
// function displayCompanNotificationBtn(e) {
//     changeButtonSTyle(select_work_btns,e)
//     company_notifications_div.style.display = 'block'
//     rider_notifications_div.style.display = 'none'
//     // e.style.background = 'navy'
// }
// function displayRiderNotificationBtn(e) {
//     changeButtonSTyle(select_work_btns,e);
//     displayRiderNotificationsCardFunc()
//     company_notifications_div.style.display = 'none'
//     rider_notifications_div.style.display = 'block'
//     // e.style.background = 'navy'
// }

let section_identifier = document.getElementById('section_identifier');

function displayTripCardBtn() {
    displayACard(user_trips_card,'block')
    section_identifier.innerHTML = `Trips & Rides`
    logout_Btn.style.display = 'none'
    
}

function addNewGigBtn() {
    displayPopDiv(all_add_trip_popups,new_gig_pop,'flex');
}

function cancelGigCreationBtn() {
    cancelGigCreationFunc()
}

let new_gig_btn = document.querySelector('.new_gig_btn')
let company_new_gig_btn = document.querySelector('.company_new_gig_btn')
let rider_new_gig_btn = document.querySelector('.rider_new_gig_btn')
let start_company_btn = document.querySelectorAll('.start_company_btn')
let stop_company_btn = document.querySelectorAll('.stop_company_btn')

let trip_status_span = document.getElementById('trip_status_span')
let ride_status_span = document.getElementById('ride_status_span')

let tripCreatedFlag = false
let newRideCreatedFlag = false
let newGigBtnDisbaled = false
let startJourneyBtnDisabled = false 
let cancelTripBtnDisabled = false

start_company_btn[0].style.display = 'block'
start_company_btn[1].style.display = 'block'
function disableBtns() {
    switch (newGigBtnDisbaled) {
        case true: 
            new_gig_btn.setAttribute('disabled',true)
            break;
        case false: 
            new_gig_btn.removeAttribute('disabled')
            break;
    }
}

let status_TravellingBG = '#521629' 
let status_TravellingColor = '#FA8B3A' 
let status_TravellingTxt = 'travelling' 
let status_CreatedBG = '#521629' 
let status_CreatedColor = '#10B981' 
let status_CreatedTxt = 'Created' 
// let status_FinishedBG = 'gray' 
// let status_FinishedColor = 'blue' 
// let status_FinishedTxt = 'travelling' 

function manuPulateJurneyStatusSpan(work,status) {
    if (work == 'company') {
        switch (status) {
            case 'created': 
            console.log("WORKKINDD: "+work)
            console.log("STATUSUUU: "+status)
                trip_status_span.innerHTML = status_CreatedTxt
                trip_status_span.style.background = status_CreatedBG
                trip_status_span.style.color = status_CreatedColor
                break;
            case 'started': 
                trip_status_span.innerHTML = status_TravellingTxt
                trip_status_span.style.background = status_TravellingBG
                trip_status_span.style.color = status_TravellingColor
                break
            // case 'finished': 
            //     trip_status_span.innerHTML = 'No Trip'
            //     trip_status_span.style.background = 'black'
            //     trip_status_span.style.color = 'lime'
            //     break
            default:
                trip_status_span.innerHTML = 'No f Trip'
                trip_status_span.style.background = ''
                trip_status_span.style.color = ''
                break
        }
    } else if (work == 'rider') {
        switch (status) {
            case 'created':
                ride_status_span.innerHTML = status_CreatedTxt
                ride_status_span.style.background = status_CreatedBG
                ride_status_span.style.color = status_CreatedColor
                break;
            case 'started': 
                ride_status_span.innerHTML = status_TravellingTxt
                ride_status_span.style.background = status_TravellingBG
                ride_status_span.style.color = status_TravellingColor
                break
            // case 'finished': 
            //     ride_status_span.innerHTML = 'No Trip'
            //     ride_status_span.style.background = 'black'
            //     ride_status_span.style.color = 'lime'
            //     break
            default:
                ride_status_span.innerHTML = 'No f Trip'
                ride_status_span.style.background = ''
                ride_status_span.style.color = ''
                break
        }
    }
}
function startTripBtn() {
    let pop_body = ''
    if (tripCreatedFlag) {
        pop_body = `
        <div class="true_or_flase_pop .pop_up">
                        <div class="title n_warning_message">
                            <span>Start the journey</span>
                            <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                        </div>
                        <div class="body">
                            <div class="img">
                                <img src="../assets/icons/n_warning.png" alt="" >
                            </div>
                            <div class="txt">
                                <span>Click Yes to start</span>
                            </div>
                        </div>
                        <div class="footer">
                            <button onclick="closePopUpBtn()">No</button>
                            <button onclick="startGigFunc()">Yes</button>
                        </div>
                </div>
                `
    } else {
        pop_body = `
        <div class="true_or_flase_pop .pop_up">
                        <div class="title warning_message">
                            <span>Warning</span>
                            <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                        </div>
                        <div class="body">
                            <div class="img">
                                <img src="../assets/icons/warning.png" alt="" >
                            </div>
                            <div class="txt">
                                <span>You can't start before creating a <b>New Gig</b>
                                </span>
                            </div>
                        </div>
                        <div class="footer">
                            <button onclick="closePopUpBtn()">No</button>
                        </div>
                </div>
                `

    }
    true_flase_pops.innerHTML = pop_body
    true_flase_pops.style.display = 'flex'
}
function stopTripBtn() {
    
    let pop_body = `
    <div class="true_or_flase_pop .pop_up">
                    <div class="title">
                        <span>Finishing the journey</span>
                        <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                    </div>
                    <div class="body">
                        <div class="img">
                            <img src="../assets/icons/n_warning.png" alt="" >
                        </div>
                        <div class="txt">
                            <span>Click Yes to Finiish</span>
                        </div>
                    </div>
                    <div class="footer">
                        <button onclick="closePopUpBtn()">No</button>
                        <button onclick="finishingGigFuc()">Yes</button>
                    </div>
            </div>
            `
    true_flase_pops.innerHTML = pop_body
    true_flase_pops.style.display = 'flex'
}
function cancelTripBtn() {

    let pop_body = ''
    if (tripCreatedFlag) {
        pop_body = `
        <div class="true_or_flase_pop .pop_up">
                        <div class="title warning_message">
                            <span>Cancel the Journey</span>
                            <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                        </div>
                        <div class="body">
                            <div class="img">
                                <img src="../assets/icons/n_warning.png" alt="" >
                            </div>
                            <div class="txt">
                                <span>Click Yes to Cancel Journey</span>
                            </div>
                        </div>
                        <div class="footer">
                            <button onclick="closePopUpBtn()">No</button>
                            <button onclick="deleteGigFunc()">Yes</button>
                        </div>
                </div>
                `
                
    } else {
         pop_body = `
        <div class="true_or_flase_pop .pop_up">
                        <div class="title warning_message">
                            <span>No Trip Created</span>
                            <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                        </div>
                        <div class="body">
                            <div class="img">
                                <img src="../assets/icons/warning.png" alt="" >
                            </div>
                            <div class="txt">
                                <span>There is no any <b>trip</b> created</span>
                            </div>
                        </div>
                        <div class="footer">
                            <button onclick="closePopUpBtn()">No</button>
                        </div>
                </div>
                `
        
    }
    true_flase_pops.innerHTML = pop_body
    true_flase_pops.style.display = 'flex'
}


function addNewRideBtn() {
    displayPopDiv(all_add_trip_popups,new_ride_pop,'flex');
    
}


function submitGigCreationBtn() {
    // true_flase_pops.style.display = 'flex'
    submitGigCreationFunc()
    cancelGigCreationFunc()
}
function cancelGigCreationFunc() {
    company_gig_start_point_txt.value = ''
    company_gig_end_point_txt.value = ''
    company_gig_amount_charged_txt.value = ''
    cash_payment_company_check_img.display = 'none'

    rider_gig_start_point_txt.value = ''
    rider_gig_end_point_txt.value = ''
    rider_gig_amount_charged_txt.value = ''
    cash_payment_check_img.display = 'none'

    pop_pups_div.style.display = ''
}

function startRideTripBtn() {
    let pop_body = ''
    if ( newRideCreatedFlag ) {
         pop_body = `
        <div class="true_or_flase_pop .pop_up">
                        <div class="title n_warning_message">
                            <span>Start the Ride</span>
                            <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                        </div>
                        <div class="body">
                            <div class="img">
                                <img src="../assets/icons/n_warning.png" alt="" >
                            </div>
                            <div class="txt">
                                <span>Click Yes to start</span>
                            </div>
                        </div>
                        <div class="footer">
                            <button onclick="closePopUpBtn()">No</button>
                            <button onclick="startGigFunc()">Yes</button>
                        </div>
                </div>
                `

    }  else {
        pop_body = `
       <div class="true_or_flase_pop .pop_up">
                       <div class="title warning_message">
                           <span>No Ride Created</span>
                           <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                       </div>
                       <div class="body">
                           <div class="img">
                               <img src="../assets/icons/warning.png" alt="" >
                           </div>
                           <div class="txt">
                               <span>You can't start before creating a  <b>New Ride</b></span>
                           </div>
                       </div>
                       <div class="footer">
                           <button onclick="closePopUpBtn()">No</button>
                       </div>
               </div>
               `
    }
    true_flase_pops.innerHTML = pop_body
    true_flase_pops.style.display = 'flex'
}
function stopRideTripBtn() {
   let pop_body = `
    <div class="true_or_flase_pop .pop_up">
                    <div class="title n_warning">
                        <span>Finishing the journey</span>
                        <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                    </div>
                    <div class="body">
                        <div class="img">
                            <img src="../assets/icons/n_warning.png" alt="" >
                        </div>
                        <div class="txt">
                            <span>Click Yes to Finiish</span>
                        </div>
                    </div>
                    <div class="footer">
                        <button onclick="closePopUpBtn()">No</button>
                        <button onclick="finishingGigFuc()">Yes</button>
                    </div>
            </div>
            `
    true_flase_pops.innerHTML = pop_body
    true_flase_pops.style.display = 'flex'
}
function cancelRideTripBtn() {
    let pop_body = ''
    if ( newRideCreatedFlag ) {
         pop_body = `
        <div class="true_or_flase_pop .pop_up">
                        <div class="title waning">
                            <span>Warning</span>
                            <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                        </div>
                        <div class="body">
                            <div class="img">
                                <img src="../assets/icons/warning.png" alt="" >
                            </div>
                            <div class="txt">
                                <span>Would you want to cancle the trip</span>
                            </div>
                        </div>
                        <div class="footer">
                            <button onclick="closePopUpBtn()">No</button>
                            <button onclick="deleteGigFunc()">Yes</button>
                        </div>
                </div>
                `
    } else {
        pop_body = `
       <div class="true_or_flase_pop .pop_up">
                       <div class="title warning_message">
                           <span>No Ride Created</span>
                           <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                       </div>
                       <div class="body">
                           <div class="img">
                               <img src="../assets/icons/warning.png" alt="" >
                           </div>
                           <div class="txt">
                               <span>There is no <b>Ride</b> Created</span>
                           </div>
                       </div>
                       <div class="footer">
                           <button onclick="closePopUpBtn()">No</button>
                       </div>
               </div>
               `

    }
    true_flase_pops.innerHTML = pop_body
    true_flase_pops.style.display = 'flex'
}


function displayHistoryCardBtn() {
    displayACard(user_history,'block');
    section_identifier.innerHTML = `Trips history`
    logout_Btn.style.display = 'none'
    getRidersData()
    

    displayHistoryCardFunc()
    // displayCompanyWorkBtn(e)

}
function displayProfileCardBtn() {
    displayACard(user_profile,'block')
    section_identifier.innerHTML = `My Profile`
    logout_Btn.style.display = 'none'
    displayUserProfile()
}
function displayNotificationsCardBtn() {
    displayACard(user_notifications,'block');
    section_identifier.innerHTML = `Notifications`
    // displayRiderNotificationsCardFunc()
    getGenralNotifications()
    logout_Btn.style.display = 'none'
}
function displayFaqsCardBtn() {
    displayACard(user_faqs,'block');
    section_identifier.innerHTML = `FaQs`
    logout_Btn.style.display = 'none'
    displayFaqsFunc()
}
function displayContactUSCardBtn() {
    displayACard(contact_us,'block');
    let {rname} = riderArr[0]
    contact_intro_user_name.innerHTML = `Hey ${rname}`
    section_identifier.innerHTML = `Contact Us`
    logout_Btn.style.display = 'block'
}

function closePopUpBtn() {
    true_flase_pops.style.display = 'none'
}

// Handelling Data and Server

// let baseUrl = `http://127.0.0.1:8080`
let baseUrl = `https://riv-express.onrender.com`
let allAssetsDataArr = []
let allRidersDataArr = []

let rider_creds = {
    rider_ID: '',
    rider_Name: "",
    rider_Email: "",
    asset_ID: ''
}
let used_info = {
    t_id: '',
    current_date: '',
    history_filter_date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
}

async function getAllAssetsData() {
    try {
        loading_screen.style.display = 'block'
        const res = await fetch(`${baseUrl}/getall/data/asset_data`);
        const data = await res.json();
        allAssetsDataArr = await data;
        console.log('\n ------------------ ASSETS DATA -----------------\n')
        console.log(allAssetsDataArr[0].collections)
        loading_screen.style.display = 'none'
    } catch (err) {
        
        let errObj = {
            name: `${err.name}`,
            msg: `While Getting all assets Data`,
            desc: ` - ${err.message}`,
            img: '../assets/icons/error.png',
            type: 'error'
        }
        let {name,msg,desc,img,type} = errObj
        displayErrorMessage(name,msg,desc,img,type)
        console.log(`Oops - ${errObj.type} : ${errObj.name}__${errObj.message}`);
    }
}
async function getAllRiderssData() {
    try {
        loading_screen.style.display = 'block'
        const res = await fetch(`${baseUrl}/getall/data/rider_data`);
        const data = await res.json();
        allRidersDataArr = await data;
        console.log('\n ------------------ RIDERS DATA -----------------\n')
        console.log(allRidersDataArr[0])
        loading_screen.style.display = 'none'
    } catch (err) {
        let errObj = {
            name: `${err.name}`,
            msg: `While getting Data for all Riders`,
            desc: ` - ${err.message}`,
            img: '../assets/icons/error.png',
            type: 'error'
        }
        let {name,msg,desc,img,type} = errObj
        displayErrorMessage(name,msg,desc,img,type)
        
        console.log(`Oops - ${errObj.type} : ${errObj.name}__${errObj.message}`);
    }
}

let riderArr = []
let global_trip_amount = ''
let global_company_rider_trip_amount = ''
let global_rider_trip_amount = ''
async function getRidersData() {
    let {rider_ID} = rider_creds
    try {
        loading_screen.style.display = 'block'
        
        const res = await fetch(`${baseUrl}/getonerider_id/data/rider_data/${rider_ID}`);
        const data = await res.json();
        riderArr = await data;
        console.log(`\n ------------------ RIDERS ${rider_ID} DATA -----------------\n`)
        console.log(riderArr)

        rider_creds.asset_ID = riderArr[0].asset.asset_id
        rider_creds.rider_Name = riderArr[0].rname
        rider_creds.rider_Email = riderArr[0].remail
        rider_creds.rider_Email = riderArr[0].remail
        let collections = riderArr[0].collections
        let n = collections.length
        used_info.history_filter_date = collections[n-1].cdate
        company_history_filter_date_inp.value = used_info.history_filter_date
        rider_history_filter_date_inp.value = used_info.history_filter_date

        loading_screen.style.display = 'none'
        // displayCompanyNotificationsCardFunc()
    } catch (err) {
        let {name,message} = err
        let errObj = {
            type: `While Getting Riders ${rider_ID} Data`,
            name,
            message,
        }
        console.log(`Oops - ${errObj.type} : ${errObj.name}__${errObj.message}`);
    }
}




async function submitGigCreationFunc() {
    // global_company_trip_amount = company_gig_amount_charged_txt.value
    // global_rider_trip_amount = rider_gig_amount_charged_txt.value
    let g = 0
    
    // console.log("AMOUNTRider: "+global_rider_trip_amount)
    let dbname = 'data'
    let cname = 'asset_data'
    let {rider_ID,asset_ID} = rider_creds
    let total_collections = 0

    let DD = `${new Date().getDate()}`;
    let MM = `${new Date().getMonth() + 1}`;
    let YYYY = `${new Date().getFullYear()}`;
    if (DD.length < 2) {
        DD = `0${DD}`
    }
    if (MM.length < 2) {
        MM = `0${MM}`
    }
    let current_date = `${YYYY}-${MM}-${DD}`
    used_info.current_date = current_date

    let hrs = new Date().getHours()
    let mins = new Date().getMinutes()

    let trip_from = ''
    let trip_to = ''
    let trip_amount = ''
    


    try {
        loading_screen.style.display = 'block'
        let cash_flag = ''
        switch (work_kind_flag) {
            case 'company': 
                cash_flag = cash_payment_company_check_div_flag;
                trip_from = company_gig_start_point_txt.value;
                trip_to = company_gig_end_point_txt.value;
                trip_amount = company_gig_amount_charged_txt.value
                global_trip_amountt = company_gig_amount_charged_txt.value
                global_company_rider_trip_amount = company_gig_amount_charged_txt.value
                break;
                case 'rider': 
                cash_flag = cash_payment_check_flag;
                trip_from = rider_gig_start_point_txt.value;
                trip_to = rider_gig_end_point_txt.value;
                trip_amount = rider_gig_amount_charged_txt.value 
                global_company_rider_trip_amount = rider_gig_amount_charged_txt.value
                global_trip_amount = rider_gig_amount_charged_txt.value 
            break;
            default: 
                cash_flag = cash_payment_company_check_div_flag;
                trip_from = company_gig_start_point_txt.value;
                trip_to = company_gig_end_point_txt.value;
                trip_amount = company_gig_amount_charged_txt.value
            break;
        }
        let randomTripId = Math.floor(Math.random() * 1999)
        used_info.t_id = `T_${randomTripId}`
        let updates = {
            info: {
                crider:rider_ID,
                cmoney:0,
                amount_expected: "",
                amount_recieved: "",
                balance_due: "",
                wallet: ""
            },
            trip: {
                tid: `T_${randomTripId}`,
                ttype: check_gig_flag,
                work: work_kind_flag,
                tfrom: trip_from,
                tto: trip_to,
                tamount: Number(trip_amount),
                cash: cash_flag,
                t_start_time:`${hrs}:${mins}`,
                t_end_time: '',
                tmins: '',
                status: "started"
            }
        }

        const res = await fetch(`${baseUrl}/createtrip/${dbname}/${cname}/${asset_ID}/${current_date}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        })
        const data = await res.json()
        console.log("Updating Asset-Collections: ",asset_ID," - ", data) 
        
        const res2 = await fetch(`${baseUrl}/update_rider_collection/${dbname}/${cname}/${asset_ID}/${rider_ID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data2 = await res2.json();
        console.log("Updating Rider-Collections: ",rider_ID," - ", data2)
        switch (work_kind_flag) {
            case 'company':
                console.log('WorkKind COMPANY : '+work_kind_flag)
                select_rider_work_btn.setAttribute('disabled',true)
                company_new_gig_btn.setAttribute('disabled',true)
                select_rider_work_btn.style.background = ''
                company_new_gig_btn.style.background = ''
                company_new_gig_btn.innerText += ' 🚫'
                select_rider_work_btn.innerText += ' 🚫'
                manuPulateJurneyStatusSpan('company','created')
                break;
                case 'rider':
                    select_company_work_btn.setAttribute('disabled',true)
                    rider_new_gig_btn.setAttribute('disabled',true)
                    select_company_work_btn.style.background = ''
                    rider_new_gig_btn.style.background = ''
                    rider_new_gig_btn.innerText += ' 🚫'
                    select_company_work_btn.innerText += ' 🚫'
                    manuPulateJurneyStatusSpan('rider','created')
                    console.log('WorkKind RIDER : '+work_kind_flag)
                break;
        }
        tripCreatedFlag = true
        newRideCreatedFlag = true
        loading_screen.style.display = ''
    } catch (err) {
        
        let errObj = {
                        name: `${err.name}`,
                        msg: `While saving new trip`,
                        desc: ` - ${err.message}`,
                        img: '../assets/icons/error.png',
                        type: 'error'
                    }
        let {name,msg,desc,img,type} = errObj
        displayErrorMessage(name,msg,desc,img,type)

        console.log(`Oops - ${errObj.type} : ${errObj.name}__${errObj.message}`);
    }
    // console.log("AMOUNTCompany: "+global_company_rider_trip_amount)
}

let gig_Start_Mins = 0
let gig_End_Mins = 0
async function startGigFunc() {

    let dbname = 'data'
    let cname = 'asset_data'
    let {rider_ID,asset_ID} = rider_creds
    let {t_id,current_date} = used_info
    gig_Start_Mins = ((new Date().getHours()*60) + new Date().getMinutes())
    // console.log(t_id)
    // console.log("STart MINS: ",gig_Start_Mins)

    try {
        true_flase_pops.style.display = ''
        loading_screen.style.display = 'block'

        let updates = {
            status: 'pending'
        }

        const res = await fetch(`${baseUrl}/starttrip/${dbname}/${cname}/${asset_ID}/${current_date}/${t_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        })
        let data = await res.json()
        console.log(data) 
        const res2 = await fetch(`${baseUrl}/update_rider_collection/${dbname}/${cname}/${asset_ID}/${rider_ID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data2 = await res2.json();
        console.log("Updating Rider-Collections: ",rider_ID," - ", data2)
        true_flase_pops.style.display = ''
        loading_screen.style.display = ''
        start_company_btn[0].style.display = 'none'
        start_company_btn[1].style.display = 'none'
        stop_company_btn[0].style.display = 'block'
        stop_company_btn[1].style.display = 'block'
        newGigBtnDisbaled = true
        disableBtns()
        switch (work_kind_flag) {
            case 'company':
                manuPulateJurneyStatusSpan('company','started')
                break;
            case 'rider':
                manuPulateJurneyStatusSpan('rider','started')
                break;
        }
        
        
    } catch (err) {
        let errObj = {
                        name: `${err.name}`,
                        msg: `While Starting a GIG a new trip`,
                        desc: ` - ${err.message}`,
                        img: '../assets/icons/error.png',
                        type: 'error'
                    }
        let {name,msg,desc,img,type} = errObj
        displayErrorMessage(name,msg,desc,img,type)

        console.log(`Oops - ${errObj.type} : ${errObj.name}__${errObj.message}`);
    }
}
async function finishingGigFuc() {

    let dbname = 'data'
    let cname = 'asset_data'
    let {rider_ID,asset_ID} = rider_creds
    let {t_id,current_date} = used_info

    let hrs = new Date().getHours()
    let mins = new Date().getMinutes()
    gig_End_Mins = ((hrs*60) + new Date().getMinutes()) 
    let mins_taken = gig_End_Mins - gig_Start_Mins
    // console.log("GIG START TIME: ",gig_Start_Mins)
    // console.log("GIG END TIME: ",gig_End_Mins)
    // console.log("GIG MiNS TIME: ",mins)
    // let trip_amount = global_compony_trip_amount

    try {
        true_flase_pops.style.display = ''
        loading_screen.style.display = 'block'

        let updates = {
            t_end_time: `${hrs}:${mins}`,
            tmins: `${mins_taken}`,
            status: 'finished',
            trip_amount:global_company_rider_trip_amount
        }
        // console.log('@@ Trip AMOUNT: '+global_company_rider_trip_amount)

        const res = await fetch(`${baseUrl}/finishtrip/${dbname}/${cname}/${asset_ID}/${current_date}/${t_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        })
        let data = await res.json()
        console.log(data)
        const res2 = await fetch(`${baseUrl}/update_rider_collection/${dbname}/${cname}/${asset_ID}/${rider_ID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data2 = await res2.json();
        console.log("Updating Rider-Collections: ",rider_ID," - ", data2)

        true_flase_pops.style.display = ''
        loading_screen.style.display = ''
        start_company_btn[0].style.display = 'block'
        start_company_btn[1].style.display = 'block'
        stop_company_btn[0].style.display = 'none'
        stop_company_btn[1].style.display = 'none'
        newGigBtnDisbaled = false
        disableBtns()
        select_rider_work_btn.removeAttribute('disabled')
        company_new_gig_btn.removeAttribute('disabled')
        select_rider_work_btn.style.background = ''
        company_new_gig_btn.style.background = ''
        company_new_gig_btn.innerText = '+ New Gig'
        select_rider_work_btn.innerText = 'My Work'
        select_company_work_btn.removeAttribute('disabled')
        rider_new_gig_btn.removeAttribute('disabled')
        select_company_work_btn.style.background = ''
        rider_new_gig_btn.style.background = ''
        rider_new_gig_btn.innerText = '+ New Ride'
        select_company_work_btn.innerText = 'Company'

        switch (work_kind_flag) {
            case 'company': 
                company_work_btn.style.background = select_work_btn_background
                company_work_btn.style.color = select_work_btn_color
                company_work_btn.style.borderBottomColor = select_work_btn_bottom_border_color
                manuPulateJurneyStatusSpan('company','finished')
                break;
            case 'rider': 
                rider_work_btn.style.background = select_work_btn_background
                rider_work_btn.style.color = select_work_btn_color
                rider_work_btn.style.borderBottomColor = select_work_btn_bottom_border_color
                manuPulateJurneyStatusSpan('rider','finished')
                break;
        }
        tripCreatedFlag = false
        newRideCreatedFlag = false
    } catch (err) {
        let errObj = {
            name: `${err.name}`,
            msg: `While Fnishing a GIG`,
            desc: ` - ${err.message}`,
            img: '../assets/icons/error.png',
            type: 'error'
        }
        let {name,msg,desc,img,type} = errObj
        displayErrorMessage(name,msg,desc,img,type)

        console.log(`Oops - ${errObj.type} : ${errObj.name}__${errObj.message}`);
    }
}
async function deleteGigFunc() {

    let dbname = 'data'
    let cname = 'asset_data'
    let {rider_ID,asset_ID} = rider_creds
    let {t_id,current_date} = used_info

    try {
        true_flase_pops.style.display = ''
        loading_screen.style.display = 'block'

        const res = await fetch(`${baseUrl}/deletetrip/${dbname}/${cname}/${asset_ID}/${current_date}/${t_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await res.json()
        console.log(data) 
        const res2 = await fetch(`${baseUrl}/update_rider_collection/${dbname}/${cname}/${asset_ID}/${rider_ID}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data2 = await res2.json();
        // console.log("Updating Rider-Collections: ",rider_ID," - ", data2)

        true_flase_pops.style.display = ''
        loading_screen.style.display = ''
        start_company_btn[0].style.display = 'block'
        start_company_btn[1].style.display = 'block'
        stop_company_btn[0].style.display = 'none'
        stop_company_btn[1].style.display = 'none'
        newGigBtnDisbaled = false
        disableBtns()

        select_rider_work_btn.removeAttribute('disabled')
        company_new_gig_btn.removeAttribute('disabled')
        select_rider_work_btn.style.background = ''
        company_new_gig_btn.style.background = ''
        company_new_gig_btn.innerText = '+ New Gig'
        select_rider_work_btn.innerText = 'My Work'
        select_company_work_btn.removeAttribute('disabled')
        rider_new_gig_btn.removeAttribute('disabled')
        select_company_work_btn.style.background = ''
        rider_new_gig_btn.style.background = ''
        rider_new_gig_btn.innerText = '+ New Ride'
        select_company_work_btn.innerText = 'Company'

        switch (work_kind_flag) {
            case 'company': 
                company_work_btn.style.background = select_work_btn_background
                company_work_btn.style.color = select_work_btn_color
                manuPulateJurneyStatusSpan('company','delete')
                company_work_btn.style.borderBottomColor = select_work_btn_bottom_border_color
                break;
            case 'rider': 
                rider_work_btn.style.background = select_work_btn_background
                rider_work_btn.style.color = select_work_btn_color
                rider_work_btn.style.borderBottomColor = select_work_btn_bottom_border_color
                manuPulateJurneyStatusSpan('rider','delete')
                break;
        }
        tripCreatedFlag = false
        newRideCreatedFlag = false
    } catch (err) {
        
        let errObj = {
            name: `${err.name}`,
            msg: `While Deleting a Trip`,
            desc: ` - ${err.message}`,
            img: '../assets/icons/error.png',
            type: 'error'
        }
        let {name,msg,desc,img,type} = errObj
        displayErrorMessage(name,msg,desc,img,type)
        
        console.log(`Oops - ${errObj.type} : ${errObj.name}__${errObj.message}`);
    }
}

function displayErrorMessage (errName,errMessage,errDesc,image,errType) {
    let pop_body = ''
    pop_body = `
                    <div class="true_or_flase_pop .pop_up">
                        <div class="title ${errType}_message">
                            <span>${errName}</span>
                            <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                        </div>
                        <div class="body">
                            <div class="img">
                                <img src="${image}" alt="" >
                            </div>
                            <div class="txt">
                                <span>${errDesc} ${errMessage}</span>
                            </div>
                        </div>
                        <div class="footer">
                            <button onclick="closePopUpBtn()">Okay</button>
                        </div>
                </div>
                    `
        true_flase_pops.innerHTML = pop_body
        true_flase_pops.style.display = 'flex'
}

let riderDataArray = []
async function displayHistoryCardFunc() {
    let {rider_ID} = rider_creds
    try {
        loading_screen.style.display = 'block'
        
        const res = await fetch(`${baseUrl}/getonerider_id/data/rider_data/${rider_ID}`);
        const data = await res.json();
        riderDataArray = await data;
        console.log(`\n ------------------ RIDERS ${rider_ID} DATA -----------------\n`)
        console.log(riderDataArray)

        loading_screen.style.display = 'none'
        displayCompanyHistoryCardFunc()
    } catch (err) {

        let errObj = {
            name: `${err.name}`,
            msg: `While getting all rider's ${rider_ID} Data`,
            desc: ` - ${err.message}`,
            img: '../assets/icons/error.png',
            type: 'error'
        }
        let {name,msg,desc,img,type} = errObj
        displayErrorMessage(name,msg,desc,img,type)
        console.log(`Oops - ${errObj.type} : ${errObj.name}__${errObj.message}`);
    }
}

let company_trips_collected_amount_span = document.getElementById('company_trips_collected_amount_span')
let company_total_trips_span = document.getElementById('company_total_trips_span')
let rider_trips_collected_amount_span = document.getElementById('rider_trips_collected_amount_span')
let rider_total_trips_span = document.getElementById('rider_total_trips_span')
let company_history_filter_date_inp = document.getElementById('company_history_filter_date_inp')
let rider_history_filter_date_inp = document.getElementById('rider_history_filter_date_inp')

function displayCompanyHistoryCardFunc() {
    let collections = riderDataArray[0].collections
    let {history_filter_date} = used_info
    
    let elem = ''
    let company_histroy_collections = []

    let total_trips_money = 0
    let total_trips_count = 1
    collections.forEach((collection,i) => {
        if (collection.cdate == history_filter_date) {
            collection.trips.forEach((trip,j) => {
                if (trip.work == 'company') {
                    company_histroy_collections.push(collection)
                    total_trips_money += trip.tamount
                    total_trips_count += j
                    let trip_from = trip.tfrom
                    let trip_to = trip.tto
                    let trip_amount = trip.tamount
                    let trip_start_time = trip.t_start_time
                    let trip_end_time = trip.t_end_time
                    let trip_status = trip.status
                    let trip_mins = trip.tmins
                    elem += `
                        <div class="card">
                            <div class="sec_1 sec">
                                <span class="htxt">From</span>
                                <span class="txt">${trip_from}</span>
                                <span class="time">${trip_start_time}</span>
                            </div>
                            <div class="sec_2 sec">
                                <span class="htxt">To</span>
                                <span class="txt">${trip_to}</span>
                                <span class="time">${trip_end_time}</span>
                            </div>
                            <div class="sec_1 sec">
                                <span class="htxt">Time</span>
                                <span class="txt">${trip_mins} mins</span>
                                <span class="time">---</span>
                            </div>
                            <div class="sec_1 sec">
                                <span class="htxt">Amount</span>
                                <span class="txt">${trip_amount}</span>
                                <span class="time">---</span>
                            </div>
                        </div>
                    `
                }
            })
        }
    }) 
    total_trips_count = company_histroy_collections.length

    company_trips_collected_amount_span.innerText = total_trips_money
    company_total_trips_span.innerText = total_trips_count

    // company_tirps_history_card.innerHTML = elem
    if (company_histroy_collections.length < 1) {
        company_tirps_history_card.innerHTML = `
        <div class='no_history_div'> 
        <img src='../assets/icons/refresh_clock.png'>
        <span> There are no trips for date : <b>${history_filter_date}</b> <span>
        </div>
        `
    } else {
        company_tirps_history_card.innerHTML = elem
    }
    company_gig_section.style.display = 'block'
    rider_gig_section.style.display = 'none'
    changeButtonSTyle(select_work_btns,compny_work_history_btn)
    company_trips_history_div.style.display = 'block'
    rider_trips_history_div.style.display = 'none'
}
function displayRiderHistoryCardFunc() {
    let collections = riderDataArray[0].collections
    let {history_filter_date} = used_info
    let elem = ''
    let rider_histroy_collections = []
    let total_trips_money = 0
    let total_trips_count = 1
    collections.forEach((collection,i) => {
        if (collection.cdate == history_filter_date) {
            collection.trips.forEach((trip,j) => {
                if (trip.work == 'rider') {
                    rider_histroy_collections.push(collection)
                    total_trips_money += trip.tamount
                    total_trips_count += j
                    let trip_from = trip.tfrom
                    let trip_to = trip.tto
                    let trip_amount = trip.tamount
                    let trip_start_time = trip.t_start_time
                    let trip_end_time = trip.t_end_time
                    let trip_status = trip.status
                    let trip_mins = trip.tmins
                    let startHrs = trip_start_time.slice(0,2) 
                    let startMins = trip_start_time.slice(3,2) 
                    let endHrs = trip_end_time.slice(0,2) 
                    let endMins = trip_end_time.slice(3,2)
                    // let MinsTaken Number() 
                    console.log(`-------------- TRIP ${i+1} ------------`)
                    console.log('STart Hrs: ',startHrs)
                    console.log('STart Mins: ',startMins)
                    console.log('End Mins: ',endHrs)
                    console.log('End Mins: ',endMins)
                    // console.log('End Mins: ',MinsTaken)
                    console.log(`-------------- TRIP ${i+1} ------------\n`)
                    elem += `
                        <div class="card">
                            <div class="sec_1 sec">
                                <span class="htxt">From</span>
                                <span class="txt">${trip_from}</span>
                                <span class="time">${trip_start_time}</span>
                            </div>
                            <div class="sec_2 sec">
                                <span class="htxt">To</span>
                                <span class="txt">${trip_to}</span>
                                <span class="time">${trip_end_time}</span>
                            </div>
                            <div class="sec_1 sec">
                                <span class="htxt">Time</span>
                                <span class="txt">${trip_mins} mins</span>
                                <span class="time">---</span>
                            </div>
                            <div class="sec_1 sec">
                                <span class="htxt">Amount</span>
                                <span class="txt">${trip_amount}</span>
                                <span class="time">---</span>
                            </div>
                        </div>
                    `
                }
            })
        }
    }) 
    total_trips_count = rider_histroy_collections.length

    rider_trips_collected_amount_span.innerHTML = total_trips_money
    rider_total_trips_span.innerHTML = total_trips_count

    if (rider_histroy_collections.length < 1) {
        rider_tirps_history_card.innerHTML = `
        <div class='no_history_div'> 
        <img src='../assets/icons/refresh_clock.png'>
        <span> There are no trips for date : <b>${history_filter_date}</b> <span>
        </div>
        `
    } else {
        rider_tirps_history_card.innerHTML = elem
    }
    company_gig_section.style.display = 'none'
    rider_gig_section.style.display = 'block'
    changeButtonSTyle(select_work_btns,rider_work_history_btn)
    company_trips_history_div.style.display = 'none'
    rider_trips_history_div.style.display = 'block'
}

company_history_filter_date_inp.addEventListener('change', () => {
    used_info.history_filter_date = company_history_filter_date_inp.value
    rider_history_filter_date_inp.value = company_history_filter_date_inp.value
    displayCompanyHistoryCardFunc()
})
rider_history_filter_date_inp.addEventListener('change', () => {
    used_info.history_filter_date = rider_history_filter_date_inp.value
    company_history_filter_date_inp.value = rider_history_filter_date_inp.value
    displayRiderHistoryCardFunc()
})

let allGeneralNotifications = []
async function getGenralNotifications() {
    try {
        loading_screen.style.display = 'block'
        const res = await fetch(`${baseUrl}/getall/communication/notifications`)
        const nots = await res.json()
         allGeneralNotifications = nots
         displayRiderNotificationsCardFunc()
         loading_screen.style.display = 'none'
    } catch (err) {
        console.error(`Oops - While getting General notifications: ${err.name}_${err.message}`)
    }
}


function displayRiderNotificationsCardFunc() {

    let notifications = allGeneralNotifications;
    console.log(riderArr[0].notifications)
    let elem = ''
    notifications.forEach((notification,i) => {
        elem += `
            <section>
                <div class="card">
                    <div class="one">
                        <div class="subject">
                            <span>${notification.nsubject}</span>
                        </div>
                        <div class="message">
                            <span>${notification.nmessage}</span>
                        </div>
                    </div>
                    <div class="two">
                        <div class="time">
                            <span>${notification.ndate}</span>
                            <span>${notification.ntime}</span>
                        </div>
                        <div class="img">
                            <img src="../assets/icons/delete.png" alt="">
                        </div>
                    </div>
                </div>
            </section>
        `
    })
    rider_notification_cards.innerHTML = elem
    company_notifications_div.style.display = 'none'
    rider_notifications_div.style.display = 'block'
}

function displayUserProfile() {
    let {rname,rtel} = riderArr[0]
    
    user_name_plcholder.innerText = `${rname}`
    side_bar_user_name.innerText = `${rname}`
    user_tel_plcholder.innerText = `${rtel}`
}

let allFaqs = []
async function getFaqsFunc() {
     try {
        loading_screen.style.display = 'block'
        
        const res = await fetch(`${baseUrl}/getall/communication/faqs`);
        const data = await res.json();
        allFaqs = await data;
        console.log(allFaqs)

        loading_screen.style.display = 'none'
    } catch (err) {

        let errObj = {
            name: `${err.name}`,
            msg: `While getting all faqs`,
            desc: ` - ${err.message}`,
            img: '../assets/icons/error.png',
            type: 'error'
        }
        let {name,msg,desc,img,type} = errObj
        displayErrorMessage(name,msg,desc,img,type)
        
        console.log(`Oops - ${errObj.type} : ${errObj.name}__${errObj.message}`);
    }
}
     
function displayFaqsFunc() {
    let elem = ''
    allFaqs.forEach( (faq,i) => {
        elem += `
            <div class="card">
                <div class="one">
                    <div class="subject">
                        <span>${faq.nsubject}</span>
                    </div>
                    <div class="message">
                        <span>${faq.nmessage}</span>
                    </div>
                </div>
            </div>
        `
    })
    faqs_cards_section.innerHTML = elem
}


// LOGIN FUNCTIONALITY

let login_user_id_txt = document.getElementById('login_user_id_txt')
let login_user_email_txt = document.getElementById('login_user_email_txt')
let login_screen = document.querySelector('.login_screen')
let view_hide_password_img = document.querySelector('#view_hide_password_img')
function logInBtn() {
    logInFunc()
}
async function logInFunc() {
    let userEmail = login_user_id_txt.value.trim()
    let userId = login_user_email_txt.value.trim()
    let loginCreds = {}
    let pop_body = ''
    let errObj = {}
    if (userEmail && userId) {
        try {
            loading_screen.style.display = 'block'
            load_login_img.style.display = 'block'
            loginCreds = {
                rid: userEmail,
                remail: userId,
            }
            const res = await fetch(`${baseUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(loginCreds)
            })
            const data = await res.json()
            console.log('\n Login  Data')
            console.log(data)
            loading_screen.style.display = ''

            switch(data) {
                case true:
                    login_screen.style.display = 'none'
                    rider_creds.rider_ID = loginCreds.rid
                    rider_creds.rider_Email = loginCreds.remail
                    errObj = {
                        name: `Success`,
                        msg: `Yure successfully Logged in`,
                        desc: '',
                        img: '../assets/icons/success.png',
                        type: 'success'
                    }
                    let {name,msg,desc,img,type} = errObj
                    displayErrorMessage(name,msg,desc,img,type)

                    localStorage.removeItem('logged_in_user');
                    let logged_in_user_obj = {
                        logged_in_user_email: login_user_email_txt.value.trim(),
                        logged_in_user_id: login_user_id_txt.value.trim()
                    }
                    localStorage.setItem('logged_in_user',JSON.stringify(logged_in_user_obj))

                    getAllAssetsData();
                    getAllRiderssData();
                    getRidersData()
                    getFaqsFunc()
                    displayTripCardBtn()
                    
                    break;
                case false:
                    errObj = {
                        name2: `Login Failed`,
                        msg2: `Please enter correct Credentials`,
                        desc2: '',
                        img2: '../assets/icons/error.png',
                        type2: 'warning'
                    }
                    let {name2,msg2,desc2,img2,type2} = errObj
                    displayErrorMessage(name2,msg2,desc2,img2,type2)
                    
                    login_screen.style.display = ''
                    break;
                    
                }
                true_flase_pops.style.display = 'flex'
                load_login_img.style.display = ''
            } catch (err) {
                load_login_img.style.display = ''
               let errObjj = {
                        name: `Error`,
                        msg: `${err.name}`,
                        desc: ` - ${err.message}`,
                        img: '../assets/icons/error.png',
                        type: 'error'
                    }
                    let {name,msg,desc,img,type} = errObjj
                    displayErrorMessage(name,msg,desc,img,type)
                console.log(`Error Logging in : ${err.name} _ ${err.message}`)
        }
    } else {
        let errObj = {
                        name: `Empty Fields`,
                        msg: `Please make sure non of the fields is empty`,
                        desc: '',
                        img: '../assets/icons/warning.png',
                        type: 'warning'
                    }
        let {name,msg,desc,img,type} = errObj
        displayErrorMessage(name,msg,desc,img,type)
    }
}

function showUserIdBtn(e) {
    login_user_id_txt.type = 'text'
    view_hide_password_img.src = `../assets/icons/view-hide.png`
    e.setAttribute('onclick','hideUserIdBtn(this)') 
}

function hideUserIdBtn(e) {
    login_user_id_txt.type = 'password'
    view_hide_password_img.src = `../assets/icons/view-show.png`
    e.setAttribute('onclick','showUserIdBtn(this)') 
}
     
let intro_screen = document.querySelector('.intro_screen') 
let intro_screen_box = document.querySelector('.intro_screen_box') 
function initialScreenAnimationFunc() {
    intro_screen_box.style.transform = 'translateY(-70px)'
    intro_screen.style.display = ''
    let opacityFlag = 1
    setInterval(() => {
        opacityFlag -= 0.2
        intro_screen.style.opacity = opacityFlag
    },400)
    setTimeout(() => {
        opacityFlag = 0
        intro_screen.style.opacity = opacityFlag
        intro_screen.style.display = 'none'

    },1500)
}

let logout_Btn = document.getElementById('logout_Btn');

logout_Btn.addEventListener('click', () => {
    confirmLogOutFunc()
})

function confirmLogOutFunc() {
   let  pop_body = `
        <div class="true_or_flase_pop .pop_up">
                        <div class="title n_warning_message">
                            <span>Logging out</span>
                            <img src="../assets/icons/close.png" alt="" onclick="closePopUpBtn()">
                        </div>
                        <div class="body">
                            <div class="img">
                                <img src="../assets/icons/n_warning.png" alt="" >
                            </div>
                            <div class="txt">
                                <span>Are you sure you want to <b>LogOut</b></span>
                            </div>
                        </div>
                        <div class="footer">
                            <button onclick="closePopUpBtn()">No</button>
                            <button onclick="logout_Func()">Yes</button>
                        </div>
                </div>
                `
    true_flase_pops.innerHTML = pop_body
    true_flase_pops.style.display = 'flex'
}
function logout_Func() {
    localStorage.removeItem('logged_in_user')
    location.reload()
}

let savedLoggedInUser = ''
function checkForLoggedInUser() {
    savedLoggedInUser = JSON.parse(localStorage.getItem('logged_in_user')) || ''
    if (!(savedLoggedInUser == '') ) {
        login_user_email_txt.value = savedLoggedInUser.logged_in_user_email
        login_user_id_txt.value = savedLoggedInUser.logged_in_user_id
    } else {
        login_user_email_txt.value = ''
        login_user_id_txt.value = ''
    }
}

function reloadAppBtn() {
    location.reload();
}

window.addEventListener('load', () => {
    initialScreenAnimationFunc()
    checkForLoggedInUser()
})