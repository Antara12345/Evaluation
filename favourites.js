// write js code here corresponding to favourites.html
var FavArr=JSON.parse(localStorage.getItem("favourites"))||[]
display(FavArr)

function display(data)
{
    
    data.forEach(function(elem,index){
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
        td6.innerText="DELETE"
        td6.style.color="red"
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            deleteItem(elem,index)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function deleteItem(elem,index)
{
    FavArr.splice(index,1)
    localStorage.setItem("favourites",JSON.stringify(FavArr))
    window.location.reload()
}