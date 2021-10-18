chrome.runtime.onInstalled.addListener(function () {});
// var url;
var data;
// chrome.webNavigation.onBeforeNavigate.addListener(function () {
//   chrome.tabs.query(
//     {
//       active: true,
//       currentWindow: true,
//     },
//     function (tabs) {
//       // alert(JSON.stringify(tabs[0]))
//       document.cookie = "csrftoken=; expires=" ;
//       var url = tabs[0].url;
//       var url1 = new URL(url);
//       var path = url1.hostname + url1.pathname;
//       if (path[0] == "w") path = path.slice(4, path.length - 1);
//       path = "linkedin.com/in/kennarddbrown";
//       var request = new XMLHttpRequest();
//       // alert('http://datasyder.com/plugininfo.php?hosturl=' + path)
//       request.open(
//         "GET",
//         "http://datasyder.com/plugininfo.php?hosturl=" + path,
//         true
//       );
//       request.send();

//       request.onload = function () {
//         data = JSON.parse(this.response);
//         chrome.tabs.query(
//           { active: true, currentWindow: true },
//           function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {
//               greeting: "senddata",
//               farewell: data,
//             });
//           }
//         );
//         if (data["CompanyName"] == "") {
//         }
//       };
//     }
//   );
// });
chrome.runtime.onMessage.addListener(function (
  requestdata,
  sender,
  sendResponse
) {
  var request = new XMLHttpRequest();
  if (requestdata.greeting == "checksign") {
    
    //request.open('GET', 'http://datasyder.com/plugininfosession.php?useremail=' +requestdata.farewell, true);
    request.open("GET", "http://datasyder.com/plugininfosession.php", true);
    request.send();
    request.onload = function () {
      data = JSON.parse(this.response);
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          greeting: "loginstate",
          farewell: data,
        });
      });
    };
  }
  else if(requestdata.greeting == "senddata") {
      // alert('http://datasyder.com/plugininfo.php?hosturl=' + path)
      request.open(
        "GET",
        "http://datasyder.com/plugininfo.php?hosturl=" + requestdata.path,
        true
      );
      request.send();

      request.onload = function () {
        data = JSON.parse(this.response);
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
              greeting: "senddata",
              farewell: data,
            });
          }
        );
        if (data["CompanyName"] == "") {
        }
      };
  }
});
