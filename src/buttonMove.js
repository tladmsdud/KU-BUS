var ifr;
var buttonParent;
var now = 2;
var buttons = [];
var pages = [];
var pre =

$(function(){
    ifr =  $("#Iframe");
    buttonParent = $("FrameSuffix");
    buttons = [ undefined , $("#ReservationHome"), $("#MapHome"), $("#NoticeHome"), $("#MyInfoHome") ]
    pages = [ undefined, "Reservation", "Map", "Alarm", "MyPage" ]
    pre = { "STUDENT" : "Student", "DRIVER" : "Driver"};
    buttons[1].on("click",() => Click(1));
    buttons[2].on("click",() => Click(2));
    buttons[3].on("click",() => Click(3));
    buttons[4].on("click",() => Click(4));
});

function Click(to){
    var src = pages[to] + ".html";
    if(to == 1 || to == 4){
        src = pre[arg["role"]] + "/" + src;
    }
    ifr.attr("src", src);
    buttons[to].addClass("select");
    buttons[now].removeClass("select");
    now = to;
}

/* Frame의 동적움직임을 정의 */