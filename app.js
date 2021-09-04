async function fetchData(){
    
    let data=new Array();
    for(let i=200;i<210;i++){
        let result=await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let formattedData=result.data;
        data.push(formattedData)
    }
    return data
    
    
  
          
    
}

async function asyncCalling(){
    let data=await fetchData();
    console.log(data);

    images(data)
}

asyncCalling();

function images(data){
    let eachDiv=document.querySelector(".each-poke");
    let section=document.querySelector(".pokemons");
    let fakeModal=document.querySelector(".fake-modal");
    let body=document.querySelector("body");
    let button=document.querySelector(".fake-modal-button")
 
    let i=1;
    for(let images of data){
        let newModal=fakeModal.cloneNode(true)
        newModal.id="exampleModal"+i;
        newModal.classList.remove("d-none");
        newModal.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText=images.forms[0].name;
        newModal.childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[1].innerHTML+=images.weight;
        newModal.childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[3].innerHTML+=images.base_experience;
        newModal.childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[5].innerHTML+=+images.height;
        let ulStats=newModal.childNodes[1].childNodes[1].childNodes[3].childNodes[3].childNodes[3].childNodes[3];
        for(stat of images.stats){
            let newli=document.createElement("li");
            let span1=document.createElement("span")
            span1.innerHTML=stat.base_stat;

            let span2=document.createElement("span")
            span2.innerHTML=stat.effort;
            let span3=document.createElement("span")
            span3.innerHTML=stat.stat.name;
            newli.appendChild(span3)
            newli.appendChild(span1)
            newli.appendChild(span2)
            
            ulStats.appendChild(newli)
        }
        body.insertBefore(newModal,fakeModal);
        let newDiv=eachDiv.cloneNode(true);
        newDiv.classList.remove("d-none")
        newDiv.childNodes[3].childNodes[1].src=images.sprites.front_default;
        newModal.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[1].src=images.sprites.front_default;        
        newDiv.childNodes[1].innerText=i;
        newDiv.childNodes[5].childNodes[1].innerText=images.forms[0].name;
        let newButton=button.cloneNode(true);
        newButton.classList.remove("d-none")
        newButton.setAttribute("data-bs-target","#exampleModal"+(i++));
        newDiv.childNodes[5].appendChild(newButton);

        
        
        section.appendChild(newDiv);
        
        

    }
    


   




    

  
}
function fillDownSearch(){
    
}














