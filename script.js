var addList=document.getElementById('additem');
var addul=document.getElementById('list');
var count=0;
var ar=[];

addList.addEventListener('click',function(e){
    if(!document.getElementById('add').value)
    {
        return;
    }
        var item=document.getElementById('add').value;
        var elem=document.createElement("li");
        elem.innerHTML=item+"<span class='align'><button class='btn'>X</button></span>";
        addul.appendChild(elem);
        document.getElementById('add').value="";
        count++;
        elem.addEventListener('click',del);
        

        
    if(count===0)
    {
        return;
    }
    document.getElementById('tasks').innerHTML=count;
});


function del()
{
    var complete=this.parentNode.removeChild(this);
    count--;
    var str=complete.innerText;
    ar.push(str.substring(0,str.length-1));
    
    document.getElementById('tasks').innerHTML=count;
    if(count==0)
    {
        document.getElementById('tasks').innerHTML='No';

    }

}
var target=document.getElementById('completed');
target.addEventListener('click',function(){
    

    var completelist=document.getElementById('listcomplete');
    var final=document.getElementById('finale');
    final.style.display='block';

    
    for(var i=0;i<ar.length;i++)
    {
        var ele=document.createElement('li');
        ele.innerText=ar[i];
        completelist.appendChild(ele);

    }
   

});
var clear=document.getElementById('clr');
clear.addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById("listcomplete").innerHTML = "";

    var final=document.getElementById('finale');
    final.style.display='none';


    
});
