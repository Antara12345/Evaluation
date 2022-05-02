// write js code here corresponding to matches.html
var MatchArr=JSON.parse(localStorage.getItem("schedule"));
display(MatchArr)

function venuesort(){
    var selected=document.getElementById("filterVenue").value;
    var filterlist=MatchArr.filter(function(elem){
       return elem.matchvenue==selected;
   })
   display(filterlist)
   
}

var FavArr=JSON.parse(localStorage.getItem("favourites"))||[]

function display(data)
{
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(elem){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.matchnumber

        var td2=document.createElement("td");
        td2.innerText=elem.TeamA

        var td3=document.createElement("td");
        td3.innerText=elem.TeamB

        var td4=document.createElement("td");
        td4.innerText=elem.Date

        var td5=document.createElement("td");
        td5.innerText=elem.matchvenue

        var td6=document.createElement("td");
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            favfunction(elem)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function favfunction(elem)
{
    FavArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(FavArr))
    
}