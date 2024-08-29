window.addEventListener("load", async()=>{
   const template = document.querySelector("template").content.querySelector(".li");
   const ul = document.querySelector("#ul");
   
   const thing = await octokit.request('GET /repos/theroggio/theroggio.github.io/contents/writing', {
      owner: 'theroggio',
      repo: 'theroggio.github.io',
      path: 'writing',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
   });
   console.log(thing);
   const response = await fetch(
      "https://api.github.com/repos/theroggio/theroggio.github.io/git/tree/main/writing");
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