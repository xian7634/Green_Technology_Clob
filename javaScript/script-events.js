
function storeData(e) {
    e.preventDefault();

    //prevent repeated registeration

    var studentName = document.getElementById("studentName").value;
    var selectedEvent = document.getElementById("eventSelect").value;

    if (typeof (Storage) !== "undefined") {
        var eventKey = "registered_" + selectedEvent;
        //set status as "registered"

        if (sessionStorage.getItem(eventKey)) {
            alert("You have already registered for this event in this session.");
            return;
        }

        sessionStorage.setItem(eventKey,"true");


        localStorage.setItem("name", studentName);
        localStorage.setItem("event", selectedEvent);
        alert("Successfully Registered");
        window.location.href = "events.html";
    } 
}

