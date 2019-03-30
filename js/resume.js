var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
  paravalue=parseInt(para[1]);
}
var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||window.webkitIndexedDB;
if(!idb in window)
{
  console.log("indexedDB is not supported");
}
//IndexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDB is created");

open.onupgradeneeded=function(e)
{
  request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("store is created");
}
open.onerror=function(error)
{
  console.log("Error occured");
}
open.onsuccess=function(e)
{
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
    store=transaction.objectStore("formdata");
    var info=store.get(paravalue);
    info.onsuccess=function(data){
      console.log(data);
      personalinfo(data.target.result);
      details(data.target.result);
    }
  }
  var left=document.querySelector(".left");
  function personalinfo(pi){
    var image=document.createElement("img");
    image.src="images/icon2.png";
    image.alt=pi.name;
    left.append(image);
    var name=document.createElement("h2");
    name.textContent=pi.name;
    left.append(name);
    var dob=document.createElement("h3");
    dob.textContent=pi.dob;
    left.append(dob);
    var email=document.createElement("h3");
    email.textContent=pi.email;
    left.append(email);
    var phnum=document.createElement("h3");
    phnum.textContent=pi.phnum;
    left.append(phnum);
    var address=document.createElement("h3");
    address.textContent=pi.address;
    left.append(address);
  }
    var right=document.querySelector(".right");
    function details(c){
    var career= document.createElement("h2");
    career.textContent=c.career;
    right.append(career);
    var hr= document.createElement("hr");
    right.append(hr);
    var edu= document.createElement("h2");
    edu.textContent="Educational Details";
    right.append(edu);

    var table=document.createElement("table");
    table.border="1";
    var tr1="<tr><td>institute</td><td>qualification</td><td>yop</td><td>perc</td></tr>";
    var tr2="";
    for(var i in c.details){
      tr2=tr2+"<tr><td>"+c.details[i].institute+"</td><td>"+c.details[i].qualification+"</td><td>"+c.details[i].yop+"</td><td>"+c.details[i].perc+"</td></tr>";
    }
    table.innerHTML=tr1+tr2;
    right.append(table);
    var h1=document.createElement("h2");
    h1.textContent="Skills";
    right.append(h1);
    var s=document.createElement("h3");
    s.textContent=c.skills;
    right.append(s);
    {


    }
  }
