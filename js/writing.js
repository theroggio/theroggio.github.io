window.addEventListener("load", async()=>{
   const template = document.querySelector("template").content.querySelector(".li");
   const ul = document.querySelector("#ul");
   
   const url = "https://api.github.com/repos/theroggio/theroggio.github.io/contents/writing/"
   const response = await fetch(url);

   if(response.ok){
       const files = await response.json();
       for(let i = 0; i < files.length; i++){
            createList(files[i]);
       }
   }
   
   function createList(file){
       const li = template.cloneNode(true);
       li.addEventListener("click",e=>{
           li.classList.toggle("active");
       });
       fetch(file.url).then(r=>{
           if(!r.ok) return;
           r.json().then(t=>li.querySelector("div").innerHTML = atob(t.content))
        });
       ul.appendChild(li);
   }
   
   });