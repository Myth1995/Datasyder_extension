var main = document.createElement("div");
main.style.position = "fixed";
main.style.top = "110px";
main.style.right = "50px";
var imgbtn = document.createElement("div");
var imageurl1 = chrome.runtime.getURL("images/logo.png");
var imagepath = imageurl1.slice(0, imageurl1.length - 15);
imgbtn.innerHTML =
  '<div id="showinfopage" >' + //showinfopage
  '<div id="logobtn" class="fade">' +
  '	<span id="verifynum" style="position:absolute;background-color:red;color:white;right:5px;top:5px;font-size:15px;border-radius:20px;padding:3px 9px 3px 9px" >0</span>' +
  '	<img src="images/logo.png" class="img" id="logoimg" style="width:90px;height:90px;shadow:grey 2px 2px"></div>' +
  '<div id="main" class=" fade" style="display:none;max-height:700px;overflow:auto">' +
  '<div id="closebutton" style="border-radius:30px;border:solid 1px rgba(0,0,0,0.2);position:absolute;top:20px;right:20px;padding:1px 6px 1px 6px "><img class="img" src="icons/iconclose.png" style="width:25px;vertical-align:middle"></div>' +
  '     <div id="text1" style="font-size: 19px;font-weight: bold;display:none;border-bottom: rgba(255,0,0,1) solid 4px;margin-bottom: 5px;">' +
  "      Mark Jordan" +
  "     </div>" +
  '  <table id="employeedetail" class="employeerinfo" style="font-size:15">' +
  '    <tr id="emailblock1">' +
  '      <td width="140"><img class="img" src="icons/iconemail.png"> Work Email</td>' +
  '      <td width="220">' +
  '        <span id="email1"> m*****@micosoft.com </span>' +
  "      </td>" +
  '		<td><div class="copybutton"><div class="popupcopytext">Copy Email</div><img class="img" id="copybutton1" src="icons/iconcopy.png" style="width:20px;vertical-align:middle"></div></td>' +
  "    </tr>" +
  '    <tr id="emailblock2">' +
  '      <td width="140"><img class="img" src="icons/iconemail.png"> Private Email</td>' +
  '      <td width="220">' +
  '        <span id="email2"> m*****@gmail.com </span>' +
  "      </td>" +
  '	<td ><div class="copybutton"><div class="popupcopytext">Copy Email</div><img class="img copybutton" id="copybutton2" src="icons/iconcopy.png" style="width:20px;vertical-align:middle"></div></td>' +
  "    </tr>" +
  '    <tr id="phoneblock1">' +
  '      <td width="140"><img class="img" src="icons/iconphone.png"> Phone 1</td>' +
  '      <td width="220">' +
  '        <span id="phone1"> +1.866. *** ***** </span>' +
  "      </td>" +
  '   	<td><div class="copybutton"><div class="popupcopytext">Copy phone1</div><img class="img" id="copybutton3" src="icons/iconcopy.png" style="width:20px;vertical-align:middle"></div></td>' +
  "    </tr>" +
  '    <tr  id="phoneblock2">' +
  '     <td width="140"><img class="img" src="icons/iconphone.png"> Phone 2</td>' +
  '     <td width="220">' +
  '        <span id="phone2"> +1.962. *** **** </span>' +
  "      </td>" +
  '   	<td ><div class="copybutton"><div class="popupcopytext">Copy Phone2</div><img class="img" id="copybutton4" src="icons/iconcopy.png" style="width:20px;vertical-align:middle"></div></td>' +
  "    </tr>" +
  "  </table>" +
  '  <button id="showdetail" style="display:none" >Show contact</button>' +
  '  <div id="companydetail">' +
  '  <p style="padding:10px 0px 0px 0px;font-size:13">' +
  '    <div><img class="img" src="icons/iconcompany.png"> Company Name</div>' +
  '    <div id="companyname" style="margin:0px 0px 0px 30px">Microsoft inc.</div>' +
  "  </p>" +
  '  <p class="companyinfo">' +
  '    <div><img class="img" src="icons/iconwebsite.png"> Company Website</div>' +
  '    <div style="margin:0px 0px 0px 30px"><a id="companywebsite" href="" target="_blank">www.microsoft.com</a></div>' +
  "  </p>" +
  '  <p class="companyinfo">' +
  '    <div><img class="img" src="icons/iconlocate.png"> HQ Address:</div>' +
  '    <div id="hqaddress" style="margin:0px 0px 0px 30px">2505 South Finaly Road,San Francisco,ll,60148</div>' +
  "  </p>" +
  '  <p class="companyinfo">' +
  '    <div><img class="img" src="icons/iconsession.png"> Primary Industr</div>' +
  '    <div id="primaryindustry" style="margin:0px 0px 0px 30px">Internet,Software</div>' +
  "  </p>" +
  '  <p class="companyinfo">' +
  '   <div><img class="img" src="icons/iconmony.png"> Company Revenue</div>' +
  '    <div id="companyrevenue" style="margin:0px 0px 0px 30px">$80B-$120B</div>' +
  "  </p>" +
  '  <p class="companyinfo">' +
  '    <div><img class="img" src="icons/iconuser.png"> Number of Employees</div>' +
  '    <div id="numberofemployees" style="margin:0px 0px 0px 30px">160,256</div>' +
  " </p>" +
  '  <p class="companyinfo">' +
  '    <div><img class="img" src="icons/iconcalenda.png"> Founded Year</div>' +
  '    <div id="foundedyear" style="margin:0px 0px 0px 30px">1986</div>' +
  "  </p>" +
  '  <p class="companyinfo">' +
  '    <div><img class="img"src="icons/iconbusiness.png"> Business Model</div>' +
  '    <div id="businessmodel" style="margin:0px 0px 0px 30px">B2B,B2C</div>' +
  "  </p>" +
  '  <p class="companyinfo">' +
  "    <div>Social media:</div>" +
  '    <div id="socialmedia" style="margin:5px 10px 5px 30px"> <img class="img" src="icons/socialmediaicon.png" style="width:25px;height:25px"></div>' +
  "  </p>" +
  "  </div>" +
  " </div>" +
  "</div>" +
  '<div id="loginpage" class="fade1" style="display:none;background-color:white;width:350px;padding:40px 30px" >' +
  'Email : <input type="text" id="useremailtext">' +
  '<div id="span"></div>' +
  '<button id="logincheck"> Log In </button>' +
  "</div>";
main.style.zIndex = "100";
main.appendChild(imgbtn);
var bodys = document.getElementsByTagName("body");

let contentbefore = document.getElementById("aplication-outlet");
bodys[0].insertBefore(main, contentbefore);

var imgs = document.getElementsByClassName("img");
for (var i = 0; i < imgs.length; i++) {
  var imagename = imgs[i].src.split("/");
  var wordlength = imagename.length;
  imgs[i].src =
    imagepath + imagename[wordlength - 2] + "/" + imagename[wordlength - 1];
}

/////////////////

let showdatabody = document.getElementById("main");
let fullname = document.getElementById("text1");
let email1 = document.getElementById("email1");
let email2 = document.getElementById("email2");
let phone1 = document.getElementById("phone1");
let phone2 = document.getElementById("phone2");
let companyname = document.getElementById("companyname");
let companywebsite = document.getElementById("companywebsite");
let hqaddress = document.getElementById("hqaddress");
let primaryindustry = document.getElementById("primaryindustry");
let companyrevenue = document.getElementById("companyrevenue");
let numberofemployees = document.getElementById("numberofemployees");
let foundedyear = document.getElementById("foundedyear");
let businessmodel = document.getElementById("businessmodel");
let socialmedia = document.getElementById("socialmedia");

let showbutton = document.getElementById("showdetail");
let logobtn = document.getElementById("logobtn");
let closebutton = document.getElementById("closebutton");

let showdatabody1 = document.getElementById("employeedetail");
let showdatabody2 = document.getElementById("companydetail");
let useremailtext = document.getElementById("useremailtext");

/////////////////////

let copybutton1 = document.getElementById("copybutton1");
let copybutton2 = document.getElementById("copybutton2");
let copybutton3 = document.getElementById("copybutton3");
let copybutton4 = document.getElementById("copybutton4");

/////////////////////

copybutton1.onclick = function (element) {
  var copyText = document.getElementById("email1").innerHTML;
  var temp = document.createElement("INPUT");
  temp.value = copyText;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  temp.remove();
};
copybutton2.onclick = function (element) {
  var copyText = document.getElementById("email2").innerHTML;
  var temp = document.createElement("INPUT");
  temp.value = copyText;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  temp.remove();
};
copybutton3.onclick = function (element) {
  var copyText = document.getElementById("phone1").innerHTML;
  var temp = document.createElement("INPUT");
  temp.value = copyText;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  temp.remove();
};
copybutton4.onclick = function (element) {
  var copyText = document.getElementById("phone2").innerHTML;
  var temp = document.createElement("INPUT");
  temp.value = copyText;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  temp.remove();
};

//////////////////////
var data, data1;
var flagnum = 0;
var signed = false;
var useremail = "davidmcu18@gmail.com";
//////////////////
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // alert(msg.greeting)
  if (msg.greeting == "senddata") {
    data = msg.farewell;
    if (data["CompanyName"] == "") {
      document.getElementById("verifynum").innerHTML = flagnum;
    } else {
      flagnum = 0;
      if (data["phone_number"] != "") flagnum += 1;
      if (data["direct_phone"] != "") flagnum += 1;
      if (data["email_address"] != "") flagnum += 1;
      document.getElementById("verifynum").innerHTML = flagnum;
    }
  } else if (msg.greeting == "loginstate") {
    data1 = msg.farewell;
    if (data1["logininfo"] != "false") signed = true;
    else {
      window.open("https://datasyder.com/frontlogin");
    }
  }
});
/////////////////
useremailtext.onchange = function (element) {
  useremail = useremailtext.value;
};
function ValidateEmail(mail) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.match(mailformat)) {
    return false;
  }
  return true;
}

/////////////////
document.getElementById("logincheck").onclick = function () {
  if (ValidateEmail(useremail)) {
    document.getElementById("span").innerHTML = "Please Enter Invalid Email";
  } else {
    document.getElementById("span").innerHTML = "";
    document.getElementById("loginpage").style.display = "none";
    logobtn.style.display = "block";
    chrome.runtime.sendMessage(
      { greeting: "checksign", farewell: useremail },
      function (response) {}
    );
  }
};
//////////////////
// chrome.runtime.onMessage.addListener(
// 		(msg, sender, sendResponse) =>{
// 			if(msg.greeting=="loginstate"){
// 				data1=msg.farewell;
// 				if (data1["logininfo"] != 'false')signed=true;
// 				else {
// 				window.open("https://datasyder.com/frontlogin");
// 				}

// 			}
// 		});
//////////////////
closebutton.onclick = function (element) {
  showdatabody.style.display = "none";
  logobtn.style.display = "block";
  showbutton.innerText = "Show contact";
  document.getElementById("companydetail").style.display = "none";
};
//////////////////
logobtn.onclick = function (element) {
  // alert(signed)
  if (signed == false) {
    // chrome.runtime.reload();
    chrome.runtime.sendMessage(
      { greeting: "checksign" },
      function (response) {}
    );
    /*	logobtn.style.display='none';
			document.getElementById("loginpage").style.display="block";
		*/
  } else {
    if (data["CompanyName"] == "") {
    } else {
      logobtn.style.display = "none";
      document.getElementById("main").style.padding = "20px 25px 10px 25px";
      document.getElementById("main").style.display = "block";
      // alert(document.getElementById("main").style.display)
      document.getElementById("text1").style.display = "inline-block";
      document.getElementById("employeedetail").style.display = "block";
      showbutton.style.display = "block";
      ///email and phone
      var emailaddress = data["email_address"].split("@");
      email1.innerHTML =
        emailaddress[0].slice(0, 2) + "********@" + emailaddress[1];
      if (email1.innerHTML == "")
        document.getElementById("emailblock1").style.display = "none";
      email2.innerHTML = "";
      if (email2.innerHTML == "")
        document.getElementById("emailblock2").style.display = "none";

      phone1.innerHTML = data["direct_phone"].slice(0, 4) + "**********";

      if (phone1.innerHTML == "")
        document.getElementById("phoneblock1").style.display = "none";

      phone2.innerHTML = data["phone_number"].slice(0, 4) + "**********";
      if (phone2.innerHTML == "")
        document.getElementById("phoneblock2").style.display = "none";
      // alert(JSON.stringify(data))
      fullname.innerHTML = data["first_name"] + " " + data["last_name"];
      companyname.innerHTML = data["company_name"];
      companywebsite.innerHTML = data["company_website"];
      companywebsite.href = data["company_website"];
      hqaddress.innerHTML =
        data["address1"] +
        "," +
        data["city"] +
        ",<br>" +
        data["zipcode"] +
        "," +
        data["state"] +
        "," +
        data["country"];
      primaryindustry.innerHTML = data["industries"];
      companyrevenue.innerHTML = data["revenue"];
      numberofemployees.innerHTML = data["employees"];
      foundedyear.innerHTML = data["year_founded"];
      businessmodel.innerHTML = data["business_model"];
    }
  }
};

showbutton.onclick = function (element) {
  if (signed) {
    document.getElementById("companydetail").style.display = "block";
    if (data["CompanyName"] == "");
    else {
      showbutton.innerText = "Save contact";
      email1.innerHTML = data["email_address"];
      if (email1.innerHTML == "")
        document.getElementById("emailblock1").style.display = "none";
      //email2.innerHTML=data["email_address"];
      if (email2.innerHTML == "")
        document.getElementById("emailblock2").style.display = "none";
      phone1.innerHTML = data["direct_phone"];
      if (phone1.innerHTML == "")
        document.getElementById("phoneblock1").style.display = "none";
      phone2.innerHTML = data["phone_number"];
      if (phone2.innerHTML == "")
        document.getElementById("phoneblock2").style.display = "none";
    }
  }
};

socialmedia.onclick = function (element) {
  if (data["clink"] != "")
    // alert(data["clink"]);
    window.open(data["clink"]);
};
