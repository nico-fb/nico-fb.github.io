
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
