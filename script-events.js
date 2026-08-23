
function storeData(e) {
    e.preventDefault();

    //prevent repeated registeration
    if (sessionStorage.getItem("registered")) {
        alert("You have already registered in this session");
        return;

    }

    var studentName = document.getElementById("studentName").value;
    var selectedEvent = document.getElementById("eventSelect").value;

    if (typeof (Storage) !== "undefined") {
        //set status as "registered"
        sessionStorage.setItem("registered","true");


        localStorage.setItem("name", studentName);
        localStorage.setItem("event", selectedEvent);
        alert("Successfully Registered");
        window.location.href = "events.html";
    } 
}

