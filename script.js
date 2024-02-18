var xhr =new XMLHttpRequest();
xhr.open("GET","");

xhr.onreadystatechange=function(){
  if( xhr.readyState==4 && xhr.status==200) {
   var json= JSON.parse(xhr.responseText);
  }
}