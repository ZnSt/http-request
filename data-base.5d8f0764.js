const e={formRef:document.querySelector(".search-form"),resultRef:document.querySelector(".result"),errorRef:document.querySelector(".error")};e.formRef.addEventListener("submit",(function(t){t.preventDefault();const n=t.currentTarget.elements.userId.value.trim();if(!n)return void alert("Enter ID!");(r=n,fetch(`https://jsonplaceholder.typicode.com/users/${r}`).then((e=>e.ok?e.json():Promise.reject(new Error("Not found"))))).then((t=>function(t){const n=function({id:e,name:t,company:n}){return`<table>\n        <tbody>\n            <tr>\n                <th>User ID: &emsp;</th>\n                <td>${e}</td>\n            </tr>\n            <tr>\n                <th>User name: &emsp;</th>\n                <td>${t}</td>\n            </tr>\n            <tr>\n                <th>Company: &emsp;</th>\n                <td>${n.name}</td>\n            </tr>\n        </tbody>\n    </table>`}(t);e.resultRef.innerHTML=n}(t))).catch((t=>function(t){e.errorRef.textContent=t.message}(t)));var r}));
//# sourceMappingURL=data-base.5d8f0764.js.map
