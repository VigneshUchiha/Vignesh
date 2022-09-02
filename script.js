function newTask(event){
    if event.keyCode==13{
        event.prevent
        var li = document.createElement("li")
        var ip = document.getElementById("input").value
        var t = document.createTextNode(ip)
        li.append(t)
        if (ip==""){
            alert("Can't be empty")

        }
        else{
            document.getElementById("so").appendChild(li)

        }
        document.getElementById("input")="";
        var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }}}}
