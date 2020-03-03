//Add buttom
const addbtn=document.querySelector('.add_btn')
addbtn.addEventListener('click', function(){
    
    let txt_value=document.querySelector('.txt_input').value
    if(txt_value.trim()==='')
    {
        alert('write something');
    }
    else{
       
        let item=document.createElement("li")
        item.setAttribute("class" ,"d-flex align-items-baseline")
        let paragraph=document.createElement("p")  
        
        let completeButton=document.createElement("button");
        let txt=document.createTextNode(txt_value)
	    
        let deleteButton=document.createElement("button");
//complete buttom
        completeButton.innerText="Complete";
        completeButton.className="complete btn btn-light mr-3";

        completeButton.addEventListener('click', function()
        {
            if(completeButton.innerHTML==="Complete")
            {
                completeButton.innerHTML="Undo";
                completeButton.parentElement.lastElementChild.style.textDecoration='line-through'
            }
            else
            {
                completeButton.innerHTML="Complete";
                completeButton.parentElement.lastElementChild.style.textDecoration='none'
            }
        })
//delete buttom
	    deleteButton.innerText="Delete";
        deleteButton.className="delete btn btn-light mr-3";
        deleteButton.addEventListener('click', function()
        {
            
                completeButton.parentElement.remove();
            
        })

    
        paragraph.appendChild(txt)
        item.appendChild(completeButton)
        
        item.appendChild(deleteButton)
        item.appendChild(paragraph)
        document.querySelector('.u_list').appendChild(item)
        document.querySelector('.txt_input').value = ""
     }
     
})

