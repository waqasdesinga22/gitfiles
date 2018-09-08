var div1=document.getElementById('inputdiv');
var img=document.createElement("input");
img.setAttribute("type","button")
img.setAttribute("class","img");
img.setAttribute('onClick','abc()')
img.setAttribute("src","plus button_new.png")
var text=document.createElement("input");

text.setAttribute("class","text");
text.setAttribute("id","t");
text.setAttribute("name","txt");

text.setAttribute("placeholder","Enter TodoList Items");

div1.appendChild(text);
div1.appendChild(img);




var div2=document.getElementById('list');
var ul=document.createElement('ul');
function abc()
{

    var li=document.createElement('li');
    
    var delet =document.createElement('input');
    var edit=document.createElement('input');
    delet.setAttribute("type","submit");
    edit.setAttribute("type","submit");
    delet.setAttribute("class","deletcss");
    edit.setAttribute("class","editcss");
    delet.setAttribute("value","");
    edit.setAttribute("value","");
    var text1=document.createTextNode(document.getElementById('t').value);
  if(document.getElementById('t').value!==""){
    
    
  
    li.appendChild(text1);
    li.appendChild(delet);
    li.appendChild(edit);
    ul.appendChild(li);
    div2.appendChild(ul);
  }
  else{
      alert("KINDLY FILL INPUT FIELD....");
  }

  delet.addEventListener('click',function(){
   delet.parentElement.remove();
  })
  edit.addEventListener('click',function(){
   var a=document.getElementById('div_rep');
   a.setAttribute("class","div_rep1");
    document.getElementById('rep_text').value=edit.parentElement.firstChild.nodeValue;
    var b=document.getElementById('replace').addEventListener('click',function()
    {
        edit.parentElement.firstChild.nodeValue= document.getElementById('rep_text').value;
        a.setAttribute("class","div_rep");

    })
    
   })
   document.getElementById('t').value="";

}

function clearall()
{
 var a=document.getElementById('clearitems');
 a.setAttribute("class","show");

}
function hide()
{
 var a=document.getElementById('clearitems');
 a.setAttribute("class","none");
 
}



function a(){
   var childs=div2.getElementsByTagName('ul');
   div2.removeChild(childs[0]);
}
