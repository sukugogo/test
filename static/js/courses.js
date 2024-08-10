function changeCourseClass(id){
    const instrument = ["Guitar"];
    for (let i = 0; i < instrument.length; i++) {
        if (instrument[i] != id) {
            document.getElementById(instrument[i]).setAttribute("style", "display:none;");
        }
    }
    document.getElementById(id).setAttribute("style", "display:block;");
}

document.getElementById("instrumentOptionButton").click();