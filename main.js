const item = document.querySelector('#item')
const todo = document.querySelector("#to-do")
const btn = document.querySelector("#Btn");
const li = document.querySelector("li")

btn.addEventListener("click", function() {
    addtodo(item.value)
  item.value = "";
});
item.addEventListener("keyup" , function(event){
    if(event.key == "Enter" ){
addtodo(this.value)
        this.value = ""
    }
});

const addtodo = (item)=>{
const listitem = document.createElement("li");
listitem.innerHTML = `
${item}
        <i class="fas fa-times"></i>


`
listitem.querySelector("i").addEventListener("click" , 
function(){
    listitem.remove()
})
todo.appendChild(listitem);

}