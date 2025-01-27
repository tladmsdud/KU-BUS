// import ../src/url-parameter.js

const query = queryToObject();
const studentLocation = new UserLocation(sessionStorage.getItem("kubus_member_id"));
let driverID = query["driverid"];
let studentID = sessionStorage.getItem("kubus_member_id");

let clicked = 0;

$(document).ready(function () {
  window.onbeforeunload = cancelCall;

  startMap(() => {
    studentLocation.awakeInterval(1000, pos => pinUpdate(pos, "STUDENT"));
  });

  traceAnother(driverID, "DRIVER");

  $("#cancel-reservation").on("click", cancelCall);
  $("#send-message").on("click", function (e) {
    //for use debug
    //e.preventDefault();
    clicked = clicked + 1;
  });
});

function cancelCall() {
  $.ajax({
    url: "../node/call-cancel",
    data: {
      id: query["callNo"],
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error");
    },
    success: function (data, textStatus, jqXHR) {
      alert("취소가 완료되었습니다.");
      console.log("Move to first-page");
      window.location.href = "first-page.html";
    },
  });
}
