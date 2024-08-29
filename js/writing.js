window.addEventListener("load", async()=>{
   const template = document.querySelector("template").content.querySelector(".li");
   const ul = document.querySelector("#ul");
   
   const response = await fetch(
      "https://api.github.com/repos/theroggio/theroggio.github.io/git/tree/main/writing?recursive=1"
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