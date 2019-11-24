function loadJSON(path, callback) {   

    let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', path, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function test() { 
    let json;
    loadJSON("../../data/db.json", function(response) {
        json = JSON.parse(response);
        // Call another function with json that is now filled with data
        triggered(json);
    });
}

function triggered(json) {
    console.log(json[0]);
    // Do your work on json
}