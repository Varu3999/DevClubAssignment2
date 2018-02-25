var p = 0;
var k;

function a()
{

  var a = document.getElementById("add").value;
  var b = document.getElementById("list");
  if (a != "")
  {
    var tag = document.createElement("li");
    var span = document.createElement("span")
    var span2 = document.createElement("span")
    var btn = document.createElement("button")
    tag.id = "pl"+p;
    btn.id = "pb"+p;
    btn.className = "done";
    span2.className = "glyphicon glyphicon-ok";


    btn.appendChild(span2);
    tag.appendChild(span);
    tag.appendChild(btn);

    btn.addEventListener("click",function()
  {
    k = document.getElementById(tag.id);
    p = k;
    var t = document.getElementById(btn.id);
    t.innerHTML = "";
    console.log(t);
    var span3 = document.createElement("span");
    span3.className = "glyphicon glyphicon-remove";
    t.appendChild(span3);
    console.log(t);
    t.id = "del";
    t.addEventListener("click",function(){
    m = document.getElementById(tag.id);
	console.log(m);
    m.parentNode.removeChild(m);
   });

    k.parentNode.removeChild(k);
    var done = document.getElementById("donelist");
    done.appendChild(p);
  });
    span.innerHTML = a;
    document.getElementById("add").value = "";

    b.appendChild(tag);

    p++;
  }

}
