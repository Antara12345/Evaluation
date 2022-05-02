// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",Match)
var MatchArr=JSON.parse(localStorage.getItem("schedule"))||[]

function Match(){
 event.preventDefault()

 var object={
     matchnumber:masaiForm.matchNum.value,
     TeamA:masaiForm.teamA.value,
     TeamB:masaiForm.teamB.value,
     Date:masaiForm.date.value,
     matchvenue:masaiForm.venue.value,
 }
 MatchArr.push(object)
 localStorage.setItem("schedule",JSON.stringify(MatchArr))
 window.location.href="matches.html"
}
