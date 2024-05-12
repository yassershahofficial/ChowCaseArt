//Refresh
var featured = document.getElementById("featured-photos");
var gap = 0;

window.onload = function() {
    let max = 6;
    for(let i=0; i<=max; i++){
        let temptopDifBot = (featured.children[i+3].offsetTop - (featured.children[i].height + featured.children[i].offsetTop));
        let topDifBot;
        if(temptopDifBot<50){
            topDifBot = 0.003*(temptopDifBot*temptopDifBot);
        }
        else if(temptopDifBot<90){
            topDifBot = 0.0054*(temptopDifBot*temptopDifBot);
        }
        else{
            topDifBot = 0.428*temptopDifBot;
        }
        featured.children[i+3].style.marginTop = -1*(topDifBot)+"%";

        //to check the placement formula
        console.log("before " + i + " : " +  temptopDifBot);
        console.log("after " + i + " : " + topDifBot);
    }
};
