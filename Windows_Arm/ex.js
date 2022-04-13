const Module = module.constructor;
const rawCompile = Module.prototype._compile;
const replaceTable = [
    ["await J()", `s=true,await J()`],
    ["if(!document.querySelector(\".${ie}\")) {" +
    "const pos = Math.round(Math.random() * document.body.children.length);" +
    "const dom = document.createElement(\"DIV\");" +
    "dom.innerText = \"${p.getPanelString(\"UNREGISTERED\")} ×\";" +
    "dom.classList.add(\"${ie}\");" +
    "dom.style = \"position: fixed !important;bottom: 2px !important; display: block !important; opacity: 1 !important; height: auto !important; width: auto !important; z-index: 9999 !important;\";" +
    "dom.setAttribute(\"role\", \"button\");" +
    "dom.addEventListener(\"click\", () => {" +
    "dom.remove();" +
    "reqnode(\"electron\").ipcRenderer.invoke(\"license.show\");" +
    "});" +
    "document.body.insertBefore(dom, document.body.children[pos]);" +
    "}", ``],

    /*[/\.getHasLicense=\(\)=>\w+,/, ".getHasLicense=()=>true,"],
    [/get\("SLicense"\);/, `get("SLicense");return{deviceId:'1',fingerprint:'1',email:'1',license:'1',version:'1',date:'1',failCounts:0, lastRetry: new Date()};`]*/
];
Module.prototype._compile = function (content, filename) {
    for (const [regex, replace] of replaceTable) {
        content = content.replace(regex, replace);
    }
    return rawCompile.call(this, content, filename);
}