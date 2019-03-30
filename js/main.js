function submitdata(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
    var dob=document.querySelector("#dob").value;
    var email=document.querySelector("#email").value;
    var phnum=document.querySelector("#phnum").value;
    var address=document.querySelector("#address").value;
    var institute=document.querySelector("#institute").value;
    var dept=document.querySelector("#dept").value;
    var gyop=document.querySelector("#gyop").value;
    var cgpa=document.querySelector("#cgpa").value;
    var clgname=document.querySelector("#clgname").value;
    var iboard=document.querySelector("#iboard").value;
    var perc=document.querySelector("#perc").value;
    var iyop=document.querySelector("#iyop").value;
    var sname=document.querySelector("#sname").value;
    var sboard=document.querySelector("#sboard").value;
    var sperc=document.querySelector("#sperc").value;
    var syop=document.querySelector("#syop").value;
    var skills=document.querySelector("#skills").value;
    // indexed db implementation
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
      store.put({
        career:career,
        name:name,
        dob:dob,
        email:email,
        phnum:phnum,
        address:address,
        details:[
          {
        institute:institute,
        qualification:dept,
        yop:gyop,
        perc:cgpa
      },
      {
        institute:clgname,
        qualification:iboard,
        yop:iyop,
        perc:perc
      },
      {
        institute:sname,
        qualification:sboard,
        yop:syop,
        perc:sperc

      }
    ],
    skills:skills


      });
    }


    window.open("index.html");
}
