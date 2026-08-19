
function storeData(e) {
    e.preventDefault();
    var studentName = document.getElementById("studentName").value;
    var selectedEvent = document.getElementById("eventSelect").value;

    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("name", studentName);
        localStorage.setItem("event", selectedEvent);
        alert("Successfully Registered");
        window.location.href = "events.html";
    } 
}

