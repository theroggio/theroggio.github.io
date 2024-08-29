window.addEventListener("load", async()=>{
   const template = document.querySelector("template").content.querySelector(".li");
   const ul = document.querySelector("#ul");
   
   const response = await fetch(
       "https://github.com/theroggio/theroggio.github.io/tree/main/writing"
   );
   if(response.ok){
       const files = await response.json();
       const html = files.tree.filter(f=>/.html$/.test(f.path));
       html.forEach(f=>createList(f))
   }
   
   function createList(file){
       const li = template.cloneNode(true);
       li.addEventListener("click",e=>{
           li.classList.toggle("active");
       });
       li.querySelector("span").innerText = file.path;
       fetch(file.url).then(r=>{
           if(!r.ok) return;
           r.json().then(t=>li.querySelector("div").innerText = atob(t.content))
       });
       ul.appendChild(li);
       console.log(li);
   }
   
   });