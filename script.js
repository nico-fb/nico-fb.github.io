
    function toggleNav () {      

        let navElems = document.getElementsByClassName("navbar-li-collapse");
        
        if (navElems[0].style.display == "none" ){
            for (var i=0;i<navElems.length;i+=1){
                navElems[i].style.display = "block";
            }
        } else {
            for (var i=0;i<navElems.length;i+=1){
                navElems[i].style.display = "none";
            }
        }
    }

    function windowResizeHandler () {

        let navElems = document.getElementsByClassName("navbar-li-collapse");

        if (window.innerWidth > 1000){
            for (var i=0;i<navElems.length;i+=1){
                navElems[i].style.display = "block";
            }
        } else {
            for (var i=0;i<navElems.length;i+=1){
                navElems[i].style.display = "none";
            }
        }
    }

    window.addEventListener("resize", windowResizeHandler);

    function toggleProjectsPopup(index) {
        let popups = document.getElementsByClassName("projects-popup");
        let popup = popups[popups.length - index];

        popup.classList.toggle("open-projects-popup");
        popup.scrollTop = 0;
        document.getElementsByClassName("popup-background")[0].classList.toggle("open-popup-background");
        document.getElementsByClassName("body")[0].classList.toggle("open-popup-body");

    }

    window.onclick = function(event) {
        if (event.target == document.getElementsByClassName("popup-background")[0]) {
            let popups = document.getElementsByClassName("projects-popup");
            for (let i = 0; i < popups.length; i++){
                popups[i].classList.remove("open-projects-popup");
            }
            document.getElementsByClassName("popup-background")[0].classList.remove("open-popup-background");
            document.getElementsByClassName("body")[0].classList.toggle("open-popup-body");
        }
    }
