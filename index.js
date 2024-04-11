
var h1 = document.getElementById("true count")

document.getElementById("form").onsubmit = function() {
    var percent = document.getElementById("percent").value
    var count = document.getElementById("count").value
    let counting = 0
    h1.innerText=0

    if(!percent || !count) {
        return false;
    }

    for(let i = 0; i<count; i++) {
        var random = Math.floor((Math.random()*(percent)+1))
        console.log(random)

        if(random==1) {
            counting+=1
            h1.innerText=counting
        }
    }

    return false;
}
