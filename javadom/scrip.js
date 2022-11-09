

// ------------------------container-one----------------------------//
function changeparagraph(){
    let getdata = document.getElementById("p-line1-id").innerHTML = "CHANGE RIGHT NOW ! SER";
    getdata = document.getElementById("p-line1-id").style.color = "purple";
    console.log(getdata);
}


// -----------------------container-two----------------------------//


    document.getElementById("username").tabIndex = "2";
    document.getElementById("password").tabIndex = "1";
    document.getElementById("son2").focus();
    document.getElementById("son2").tabIndex = "3";
    document.getElementById("son1").tabIndex = "4";


// ---------------------container-three----------------------------//

function aleartmeplz(){
    alert("THANKS GRILS!")
}


// --------------------container-four------------------------------//

function getdatatextarray(){
    const getdatatext = document.getElementById("container-four-id");
    console.log(getdatatext);
    const showdatatext = getdatatext.getElementsByTagName("p");
    console.log(showdatatext);
    // Use data 
    document.getElementById("datatext").innerHTML = "This is data ? : " + showdatatext[0].innerHTML;
    document.getElementById("datatext").style.color = "#fff";
}
function cleardata(){
    document.getElementById("datatext").innerHTML = "";
}

// ---------------------container-five----------------------------//

function changedatacolor(){
    var count = document.getElementById("placenumber").value;

    let x = document.querySelectorAll("p.query");
    document.getElementById("text-query").innerHTML = 
    "This is a Query selector : " + x[count].innerHTML;


}

// --------------------container-six------------------------------//

 function correctnumber(){
    let hookdata = document.getElementById("hookdata").value;
    let text;
    
    if(isNaN(hookdata) || hookdata<1 || hookdata > 3){
        text = "Not Correct !";
        
    }else {
        text = "Correct !";
    }

    if(hookdata == 1 || hookdata == 2 || hookdata == 3){
        document.getElementById("box-hidden").style.display ="block";
    }else{
        document.getElementById("box-hidden").style.display ="none";
    }
    document.getElementById("numberforcorrect").innerHTML = text;
 }   

// ---------------------container-seven--------------------------//


// ----------------------container-eight--------------------------//

const wrapdata = document.querySelector("#demo");
console.log(wrapdata);

function darkmode(){
    wrapdata.setAttribute('id','darkmode');
    console.log(wrapdata);
}
function lightmode(){
    wrapdata.setAttribute('id','lightmode');
}