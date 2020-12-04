//create and adding close button to list items
//getting the list items
var myList = document.getElementsByTagName("LI");

//loop through each item and aadd it
for(var i=0; i <myList.length;i++) { 
    //create span 
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7"); //\u00D7 is unicode of x 

span.className = "close";
span.appendChild(txt); //add it
myList[i].appendChild(span);
var a = document.getElementsByClassName('close')[i];
console.log(a);
} 



//hide the item when close clicked

var close = document.getElementsByClassName("close"); 
var j;
//loop through each close item

for(j=0; j < close.length; j++) {
    close[j].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


//add checked when list item is clicked
var list = document.querySelector('ul');

list.addEventListener('click', function(e){
    
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
    }
}, false);


//create new list item when add button clicked

function newListItem(){
    var li = document.createElement("li");
    var value = document.getElementById("myInput").value;
    var item = document.createTextNode(value);
    
    li.appendChild(item);
    if(value=='') {
        alert("this field can not be empty");
    }
    else document.getElementById("myList").appendChild(li);

    document.getElementById("myInput").value = "";


    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    var k;
    for (k = 0; k < close.length; k++) {
        close[k].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }

}
}
