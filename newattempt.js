const vecka =["Söndag" ,"måndag", "Tisdag","onsdag","torsdag","fredag","Lördag"];
const Månader=["Jan","Feb","Mar","apr","Maj","Jun","Juli","Aug","Sep","Okt","Nov","Dec"]
//var kostnadPerMin =new Date(prompt("ange det datum du will se"));  
//alert(new Date())
//alert(kostnadPerMin.getFullYear());


function showtime(){
    document.getElementById('time').innerHTML=new Date().toLocaleTimeString();
}


function dagMånadÅr(){
    let today=new Date();
    document.getElementById('idag').innerHTML= vecka[today.getDay()] +" den "
    +today.getDate()+" "+Månader[today.getMonth()]+" "+today.getFullYear();
}

