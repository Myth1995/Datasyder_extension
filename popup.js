let fullname = document.getElementById("text1");
let email1 = document.getElementById("email1");
let email2 = document.getElementById("email2");
let phone1 = document.getElementById("phone1");
let phone2 = document.getElementById("phone2");
let companyname = document.getElementById("companyname");
let companywebsite = document.getElementById("companywebsite");
let hqaddress = document.getElementById("hqaddress");
let locatecountry = document.getElementById("lcountry");
let primaryindustry = document.getElementById("primaryindustry");
let companyrevenue = document.getElementById("companyrevenue");
let numberofemployees = document.getElementById("numberofemployees");
let foundedyear = document.getElementById("foundedyear");
let businessmodel = document.getElementById("businessmodel");
let socialmedia = document.getElementById("socialmedia");

let showbutton = document.getElementById("showdetail");
let logobtn = document.getElementById("logobtn");

chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  function (tabs) {
    var url = tabs[0].url;
    var url1 = new URL(url);
    var flagnum = 0;

    var path = url1.hostname + url1.pathname;
    if (path[0] == "w") path = path.slice(4, path.length - 1);
    var request = new XMLHttpRequest();
    request.open(
      "GET",
      "http://datasyder.com/plugininfo.php?hosturl=" + path,
      true
    );
    request.send();

    request.onload = function () {
      var data = JSON.parse(this.response);
      if (data["CompanyName"] == "") {
      } else {
        if (data["phone_number"] != "") flagnum += 1;
        if (data["direct_phone"] != "") flagnum += 1;
        if (data["email_address"] != "") flagnum += 1;
        document.getElementById("verifynum").innerHTML = flagnum;
      }
    };
  }
);

logobtn.onclick = function (element) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      var url = tabs[0].url;
      var url1 = new URL(url);

      var path = url1.hostname + url1.pathname;
      if (path[0] == "w") path = path.slice(4, path.length - 1);
      var request = new XMLHttpRequest();
      request.open(
        "GET",
        "http://datasyder.com/plugininfo.php?hosturl=" + path,
        true
      );
      request.send();

      request.onload = function () {
        var data = JSON.parse(this.response);
        if (data["CompanyName"] == "") {
        } else {
          logobtn.style.display = "none";
          document.getElementById("main").style.padding = "20px 25px 10px 25px";
          document.getElementById("main").style.display = "block";
          document.getElementById("body").style.display = "block";
          document.getElementById("text1").style.display = "inline-block";
          document.getElementById("employeedetail").style.display = "block";
          document.getElementById("companydetail").style.display = "block";
          showbutton.style.display = "block";
          var emailaddress = data["email_address"].split("@");
          email1.innerHTML =
            emailaddress[0].slice(0, 2) + "********@" + emailaddress[1];
          email2.innerHTML = "";
          phone1.innerHTML = data["direct_phone"].slice(0, 4) + "**********";
          phone2.innerHTML = data["phone_number"].slice(0, 4) + "**********";
          fullname.innerHTML = data["first_name"] + " " + data["last_name"];
          companyname.innerHTML = data["company_name"];
          companywebsite.innerHTML = data["company_website"];
          hqaddress.innerHTML = data["address1"];
          locatecountry.innerHTML = data["country"];
          primaryindustry.innerHTML = data["industries"];
          companyrevenue.innerHTML = data["revenue"];
          numberofemployees.innerHTML = data["employees"];
          foundedyear.innerHTML = data["year_founded"];
          businessmodel.innerHTML = data["business_model"];
        }
      };
    }
  );
};
showbutton.onclick = function (element) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      var url = tabs[0].url;
      var url1 = new URL(url);

      var path = url1.hostname + url1.pathname;
      if (path[0] == "w") path = path.slice(4, path.length - 1);
      var request = new XMLHttpRequest();
      request.open(
        "GET",
        "http://datasyder.com/plugininfo.php?hosturl=" + path,
        true
      );
      request.send();

      request.onload = function () {
        var data = JSON.parse(this.response);
        if (data["CompanyName"] == "");
        else {
          email1.innerHTML = data["email_address"];
          //email2.innerHTML=data["email_address"];
          phone1.innerHTML = data["direct_phone"];
          phone2.innerHTML = data["phone_number"];
        }
      };
    }
  );
};
