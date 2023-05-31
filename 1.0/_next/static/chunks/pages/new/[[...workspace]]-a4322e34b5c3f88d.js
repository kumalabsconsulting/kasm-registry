(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return l(5790)}])},5790:function(e,a,l){"use strict";l.r(a),l.d(a,{__N_SSG:function(){return u},default:function(){return p}});var t=l(5893),s=l(9008),r=l.n(s),n=l(7294),i=l(3162),o=l(8813),c=l(3157),d=l(1163),m=JSON.parse('{"wZ":[{"friendly_name":"KumaLabs Darktable Containerized","image_src":"jcu_icon_transparent_background.png","description":"Darktable photos editing","name":"redbeard28/kasm-darktable-workspace:0.0.1","cores":2,"memory":2768,"gpu_count":0,"cpu_allocation_method":"Inherit","docker_registry":"https://index.docker.io/v1/","categories":["Desktop","Multimedia"],"require_gpu":false,"enabled":true,"image_type":"Container","architecture":["amd64"],"compatibility":["1.13.x"],"sha":"ffff85f52f6d3352a62a040076515f3ad1900c20"},{"friendly_name":"KumaLabs Ubuntu Jammy","image_src":"jcu_icon_transparent_background.png","description":"Mon premier Desktop pour Kasm sous ubuntu jammy","name":"redbeard28/kasm-jammy-workspace:0.0.4.1","cores":2,"memory":2768,"gpu_count":0,"cpu_allocation_method":"Inherit","docker_registry":"https://index.docker.io/v1/","categories":["Desktop"],"require_gpu":false,"enabled":true,"image_type":"Container","architecture":["amd64"],"compatibility":["1.13.x"],"sha":"ad43c34e5b7017d9ec7660237b5eb222cb4218ea"},{"friendly_name":"KumaLabs Terminal Containerized","image_src":"jcu_icon_transparent_background.png","description":"Terminal with some extensions","name":"redbeard28/kasm-terminal-workspace:0.0.1","cores":2,"memory":2768,"gpu_count":0,"cpu_allocation_method":"Inherit","docker_registry":"https://index.docker.io/v1/","categories":["Development"],"require_gpu":false,"enabled":true,"image_type":"Container","architecture":["amd64"],"compatibility":["1.13.x"],"sha":"d59a936a95f1147839ece8c7082a356bd2d00827"},{"friendly_name":"KumaLabs VSCode Containerized","image_src":"jcu_icon_transparent_background.png","description":"Vscode with some extensions","name":"redbeard28/kasm-vscode-workspace:0.0.3","cores":2,"memory":2768,"gpu_count":0,"cpu_allocation_method":"Inherit","docker_registry":"https://index.docker.io/v1/","categories":["Desktop","Development"],"require_gpu":false,"enabled":true,"image_type":"Container","architecture":["amd64"],"compatibility":["1.13.x"],"sha":"ba3cef5320b432b3fda25a9bd2b791683e2fc7e7"}]}'),u=!0;function p(e){let{workspace:a}=e,s=(0,n.useRef)(null),u=(0,n.useRef)(null),p=(0,n.useRef)(null),[f,h]=(0,n.useState)(null),[x,g]=(0,n.useState)(null),[v,_]=(0,n.useState)(null),[y,j]=(0,n.useState)("png"),[w,k]=(0,n.useState)(null),N={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[C,S]=(0,n.useState)(N);(0,d.useRouter)(),(0,n.useEffect)(()=>{if(null===a)p.current.value="",s.current.value="",u.current.value="",h(null),g(null),_(null),S(N);else if(a&&a[0]){let e=m.wZ.find(e=>e.name===atob(a[0]));if(delete e.sha,p.current.value=e.description,s.current.value=e.name,u.current.value=e.friendly_name,e.categories){let l=[];e.categories.map(e=>l.push({label:e,value:e})),h(l)}if(e.architecture){let t=[];e.architecture.map(e=>t.push({label:e,value:e})),g(t)}k("../../icons/"+e.image_src),S({...C,...e})}},[a]);let D={control:(e,a)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,a){let{data:l}=a;return{...e,backgroundColor:"#dde6f1"}}};(0,n.useEffect)(()=>{if(C&&C.friendly_name){let e={...C};e.image_src=O(e.friendly_name)+"."+y,S(e)}},[y]);let I=e=>{let a={...C};a.categories=e.map(e=>e.value),S(a);let l=[];a.categories.map(e=>l.push({label:e,value:e})),h(l)},L=e=>{let a={...C};a.architecture=e.map(e=>e.value),S(a);let l=[];a.architecture.map(e=>l.push({label:e,value:e})),g(l)};function O(e){var a=e.toString().toLowerCase();return(a=(a=(a=a.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let E=()=>{var e=l(5733);let a=new e,t=a.folder(C.friendly_name);if(t.file("workspace.json",JSON.stringify(C,null,2)),v)t.file(C.image_src,v.file);else if(w){let s=fetch(w).then(e=>e.blob());t.file(C.image_src,s)}a.generateAsync({type:"blob"}).then(function(e){(0,i.saveAs)(e,O(C.friendly_name)+".zip")})},R=e=>{let a={...C};a[e.target.name]=e.target.value,"icon"===e.target.name&&(delete a.icon,_({value:e.target.value,file:e.target.files[0]}),j(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),k(null)),a.friendly_name&&(a.image_src=O(a.friendly_name)+"."+y),S(a)};return(0,t.jsxs)("div",{className:"",children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"Kasm Workspaces"}),(0,t.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,t.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,t.jsx)("input",{type:"file",name:"icon",onChange:R,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,t.jsx)("input",{ref:u,name:"friendly_name",onChange:R,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,t.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:I,styles:D,value:f}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,t.jsx)("input",{ref:p,name:"description",onChange:R,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,t.jsx)("input",{ref:s,name:"name",onChange:R,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,t.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,t.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,t.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,t.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:L,styles:D,value:x}),(0,t.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,t.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,t.jsx)(b,{workspace:C,icon:v,inlineImage:w}),(0,t.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...C},null,2)}),(0,t.jsx)("button",{onClick:E,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function b(e){let{workspace:a,icon:l,inlineImage:s}=e,[r,i]=(0,n.useState)(!1),o=null;if(l){let c=new Blob([l.file]);o=URL.createObjectURL(c),a.image_src=o}return(0,t.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,t.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,t.jsxs)("div",{onClick:()=>i(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,t.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:a.image_src,onError(e){null!==s&&(e.target.src=s)},alt:a.friendly_name}),(0,t.jsxs)("div",{className:"flex-col pl-28",children:[(0,t.jsx)("div",{className:"font-bold",children:a.friendly_name||"Friendly Name"}),(0,t.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Kuma Labs Workspaces"," ",(0,t.jsx)("span",{children:void 0})]}),(0,t.jsx)("div",{className:" h-8"})]}),(0,t.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[a.architecture&&a.architecture.map((e,a)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+a)),a.categories.map((e,a)=>(0,t.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+a))]}),!1]}),(0,t.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,t.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>i(!1),children:(0,t.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,t.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,t.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,t.jsx)("div",{className:"font-bold",children:a.friendly_name})," ",a.description]}),(0,t.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,t.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,t.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);