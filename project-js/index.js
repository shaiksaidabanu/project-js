function loadjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState === 4 && xhr.status =="200"){
            callback(xhr.responseText);
        }
    }
    xhr.send(null);
}    

loadjson("data.json",function(text){
    var data=JSON.parse(text);
        console.log(data);
        Display(data.cards);
    
});


//fun
function Display(mb){
    var deck=document.querySelector(".card-deck");

    for(var i in mb){
    // console.log(mb[i].name);
    var cad=document.createElement("div");
    cad.classList.add("card");
    deck.append(cad);

    var im=document.createElement("img");
    im.src=mb[i].img;
    cad.append(im);

    
var nam=document.createElement("h1");
nam.textContent=mb[i].name;
cad.append(nam);





    }
}