function saveTask(){
    console.log("saveTask");
    // get the values
    const title = $("#txtTile").val();
    const description = $("#txtDescription").val();
    const color = $("selColor").val();
    const date = $("selDate").val();
    const status = $("selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, description, color, date, status, budget);

    //build an object
    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave);

    //save to server

    $.ajax({
        type: "POST",
        url:"http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(res){
            console.log(res);
        },
        error: function(error){
            console.log(error);
        }
    })

    //display the task
}


function testRequest(){

    $.ajax({
        type: "GET",
        url:"http://fsdiapi.azurewebsites.net/api/tasks",
        success:function(response)
        {
            data = JSON.parse(response);
            console.log(response);
            console.log(data);
        },
        error: function(error){
            console.log(error);
        }
    });
}

function init(){

    //load the data

    //hook events
    //this is JQuery
    $("#btnAdd").click(saveTask);
    //document.getElementbyId("btnAdd").addEventLsitener
}
window.onload = init;