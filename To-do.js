(function(){
    const todos=[];
    const todocontainer=document.getElementsByClassName("todo")[0];
    // console.log(todocontainer);
    const inputtask=document.createElement("input");
    inputtask.placeholder="Enter Task..."
    inputtask.type="text";
    const addbtn=document.createElement("button");
    addbtn.textContent="ADD";
    const todolist=document.createElement("div");
    todolist.style.border="2px solid black"; 
    todocontainer.append(inputtask,addbtn,todolist);
    function rendertask(task){
        const todoitem=document.createElement("div");
        todoitem.style.border="2px solid red";
        todoitem.style.margin="10px"
        const p=document.createElement("p");
        p.textContent=task;
        const deletebtn=document.createElement("button");
        deletebtn.textContent="Delete";
        const editbtn=document.createElement("button");
        editbtn.textContent="Edit";
        const completebtn=document.createElement("button");
        completebtn.textContent="Completed";
        var edit=true;

        completebtn.addEventListener("click",function(){
            todoitem.style.backgroundColor="green";
            completebtn.style.visibility="hidden";
        })

        editbtn.addEventListener("click",function(){
            if(edit){
                edit=false;
                const editinput=document.createElement("input");
            editinput.type="text";
            const oldtask=p.textContent;
            editinput.value=oldtask;
            
            const savebtn=document.createElement("button");
            savebtn.textContent="Save";
            todoitem.prepend(editinput,savebtn);
            editinput.focus();
            function savetask(){
                
                const updatedtask=editinput.value;
                const index=todos.indexOf(task);
                todos[index]=updatedtask;
                
                p.textContent=updatedtask;
                todoitem.style.backgroundColor="white";
                edit=true;
                editinput.remove();
                completebtn.style.visibility="visible";
                savebtn.remove();
            
            }
            savebtn.addEventListener("click",savetask)
            editinput.addEventListener("keydown",function(e){
                if(e.key==="Enter"){
                    savetask();
                }
            })
            }

        })
        deletebtn.addEventListener("click",function(){
            const index=todos.indexOf(task);
            todos.splice(index,1);
            todoitem.remove();
        })
        todoitem.append(p,deletebtn,editbtn,completebtn);
        todolist.prepend(todoitem);
    }
    function addtodo(){
        const task=inputtask.value;
        if(!task){
            return;
        }
        todos.unshift(task);
        console.log(todos);
        rendertask(task);
        inputtask.value="";
        inputtask.focus();
    }
    addbtn.addEventListener("click",addtodo)
    inputtask.addEventListener("keydown",function(e){
        // console.log(e);
        if(e.key==="Enter"){
            addtodo();
        }
    })
})()