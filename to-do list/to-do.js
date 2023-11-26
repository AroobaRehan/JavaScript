<script>
function addTask () {
    var input = document.getElementById("input");
    var newTask = input.value;
    if (newTask != "") {
      var item = document.createElement("li");
      item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" class="important" value="!" onlcick="important(this.parentNode)"/>' +
      newTask;
      
      document.getElementById("tasks").appendChild(item);  
      
      function important(item){
        item.className='important';
      }
      
      input.value="";
      input.placeholder="enter new task...";
    }
  }
  function markDone (item) { 
      item.className = 'finished';
  }
  
  function remove (item) {
    if(item.className=='finished'){
         item.remove();
    }
  }
  
  function doAbout() {
    var textAbout =document.getElementById("divabout");
    textAbout.innerHTML="Author name is Arooba Rehan";
    }
    
  function clearAbout() {
      var textAbout = document.getElementById("divabout");
      textAbout.innerHTML = "";
  }
  </script>