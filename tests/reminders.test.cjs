const {test}=require('node:test'), assert=require('node:assert/strict'), vm=require('node:vm'), fs=require('node:fs');
const source=fs.readFileSync('public/index.html','utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
class E {
 constructor(){this.children=[];this.handlers={};this.value='';this.files=[];this.textContent='';this.className='';}
 get classList(){return {contains:n=>this.className.split(' ').includes(n),add:n=>this.className+=' '+n,remove:n=>this.className=this.className.split(' ').filter(x=>x!==n).join(' '),toggle:(n,on)=>on?this.classList.add(n):this.classList.remove(n)};}
 append(...x){this.children.push(...x);} replaceChildren(){this.children=[];} setAttribute(){} addEventListener(n,f){this.handlers[n]=f;} querySelector(){return this.save??=new E();} querySelectorAll(){return this.children;} focus(){} scrollIntoView(){} reset(){} click(){} remove(){}
}
function app(raw=null,fail=false){const els=new Map(),blobs=[];let saved=raw;const document={hidden:false,body:new E(),querySelector:id=>{if(!els.has(id))els.set(id,new E());return els.get(id);},createElement:()=>new E(),addEventListener(){}};
 const c=vm.createContext({document,localStorage:{getItem:()=>saved,setItem:(k,v)=>{if(fail)throw Error('full');saved=v;}},confirm:()=>false,setTimeout:()=>1,clearTimeout(){},setInterval:()=>1,Intl,Date,crypto:require('node:crypto'),Blob,URL:{createObjectURL:b=>{blobs.push(b);return 'blob:test';},revokeObjectURL(){}}});vm.runInContext(source,c);
 return {els,blobs,read:()=>saved,run:s=>vm.runInContext(s,c),async import(data){const e=document.querySelector('#backup-file');e.files=[{size:100,text:async()=>JSON.stringify(data)}];await e.handlers.change();}};
}
const r={id:'one',petName:'Milo',task:'Feed',customTask:null,dateTime:'2030-01-01T12:00:00.000Z'};
test('corrupt storage loads safely and cannot be overwritten without consent',()=>{const a=app('{bad');assert.match(a.els.get('#status').textContent,/could not be read/);assert.equal(a.run('saveReminders()'),false);assert.equal(a.read(),'{bad');a.els.get('#export-backup').handlers.click();assert.equal(a.blobs.length,1);});
test('import merges, deduplicates and persists on restart',async()=>{const a=app(JSON.stringify([r]));await a.import({version:1,reminders:[r,{...r,petName:'Luna'}]});assert.equal(JSON.parse(a.read()).length,2);await a.import([r]);assert.equal(JSON.parse(a.read()).length,2);assert.equal(app(a.read()).run('reminders.length'),2);});
test('invalid import does not partially save',async()=>{const raw=JSON.stringify([r]),a=app(raw);await a.import([{...r,petName:'Luna'},{...r,task:'bad'}]);assert.equal(a.read(),raw);assert.match(a.els.get('#status').textContent,/Import failed/);});
test('failed storage write rolls back imported reminders',async()=>{const a=app(JSON.stringify([r]),true);await a.import([{...r,petName:'Luna'}]);assert.equal(a.run('reminders.length'),1);assert.match(a.els.get('#status').textContent,/Could not save/);});
test('overdue status changes without editing',()=>{const a=app(JSON.stringify([r]));assert.equal(a.els.get('#reminder-list').children[0].classList.contains('overdue'),false);a.run('reminders[0].dateTime="2000-01-01T12:00:00Z";refreshOverdue()');assert.equal(a.els.get('#reminder-list').children[0].classList.contains('overdue'),true);});
test('backup export contains version and reminders',async()=>{const a=app(JSON.stringify([r]));a.els.get('#export-backup').handlers.click();const b=JSON.parse(await a.blobs[0].text());assert.equal(b.version,1);assert.equal(b.reminders[0].petName,'Milo');});
