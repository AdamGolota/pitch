(this.webpackJsonppitch=this.webpackJsonppitch||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"name":"pitch","version":"1.1.5","private":true,"homepage":"http://adamgolota.github.io/pitch","dependencies":{"react":"^16.8.0","react-dom":"^16.8.0","react-ga4":"^3.0.1","react-scripts":"3.4.1","styled-components":"^5.0.0"},"scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","start":"export NODE_OPTIONS=--openssl-legacy-provider && react-scripts start","build":"node update-build.js && export NODE_OPTIONS=--openssl-legacy-provider && react-scripts build","test":"export NODE_OPTIONS=--openssl-legacy-provider && react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^6.3.0"}}')},,,,,,function(e,t,n){e.exports=n.p+"static/media/g.acaa6129.svg"},function(e,t,n){e.exports=n.p+"static/media/sharp.51fa938a.svg"},function(e,t,n){e.exports=n.p+"static/media/flat.002288e7.svg"},function(e,t,n){e.exports=n.p+"static/media/note.155dc3c8.svg"},,,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=(n(20),n(1)),c=(n(21),n(8)),s=n.n(c),u=n(9),p=n.n(u),d=n(10),m=n.n(d),g=n(11),h=n.n(g),b=n(2);const x=e=>{window.gtag&&window.gtag("event","page_view",e)},v=e=>{window.gtag&&window.gtag("event",e.action,{event_category:e.category,value:e.value,...e})};x({page:"/homepage"});const f=Math.pow(2,1/1200);document.body.style.backgroundColor="#f7e9a3";const E=[["A3",220],["B3b",233.0819],["A3#",233.08191],["B3",246.9417],["C4",261.6256],["D4b",277.1826],["C4#",277.18261],["D4",293.6648],["E4b",311.127],["D4#",311.12701],["E4",329.6276],["F4",349.2282],["G4b",369.9944],["F4#",369.99441],["G4",391.9954],["A4b",415.3047],["G4#",415.30471],["A4",440],["B4b",466.1638],["A4#",466.16381],["B4",493.8833],["C5",523.2511],["D5b",554.3653],["C5#",554.36531],["D5",587.3295],["E5b",622.254],["D5#",622.25401],["E5",659.2551],["F5",698.4565],["G5b",739.9888],["F5#",739.98881],["G5",783.9909],["A5b",830.6094],["G5#",830.60941],["A5",880],["B5b",932.3275],["A5#",932.32751],["B5",987.7666],["C6",1046.5023]],w=["A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6"];let y,k,O,$,j,C=null;const T=()=>{k.gain.value=0,k.gain.linearRampToValueAtTime(.3,C.currentTime+.05)},D=async()=>{k.gain.value=.3,k.gain.linearRampToValueAtTime(0,C.currentTime+.05)},S=async()=>{C||(C=new AudioContext,await C.resume(),y=C.createOscillator(),k=C.createGain(),k.gain.value=0,y.connect(k),k.connect(C.destination),y.start())};function A(e){let{onClick:t,note:n,frequency:a,disabled:r}=e;const i=()=>{D(),document.removeEventListener("mouseup",i),document.removeEventListener("touchend",i)},l=async e=>{e.cancelable&&e.preventDefault(),C||await S(),y.frequency.value=a,T(),document.addEventListener("mouseup",i),document.addEventListener("touchend",i)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q,{onMouseUp:i,onMouseDown:l,onTouchEnd:i,onTouchStart:l,disabled:r},"Play"))}function F(e){let{note:t,disabled:n}=e;const a=t.slice(0,2),r=w.length-w.indexOf(a)-1;return w.reduce((e,n,a)=>{let i=te;a<4&&r<=a||a>12&&r>=a?i=oe:a>=4&&a<=12&&(i=ae);const l=t[2]||"";let c=o.a.createElement(o.a.Fragment,null);"#"===l?c=o.a.createElement(ce,null):"b"===l&&(c=o.a.createElement(le,null));const s=e=>{let{isOnLine:t}=e;return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,{isOnLine:t},c))};let u=o.a.createElement(o.a.Fragment,null);return r===a?u=o.a.createElement(s,{isOnLine:!0}):r===a-1&&(u=o.a.createElement(s,null)),a%2===0?[...e,o.a.createElement(i,{key:`${t}-${a}`},u)]:e},[])}const N=()=>{$=null,j=null};N();const B=e=>{console.log("playing on "+e),y.frequency.value=e},M=()=>!!$,L=(e,t)=>e*Math.pow(f,t);function P(){const[e,t]=Object(a.useState)(null),[n,r]=Object(a.useState)(220),[i,l]=Object(a.useState)(null),[c,s]=Object(a.useState)(()=>{const e=localStorage.getItem("pitchHistory");return e?JSON.parse(e):[]});Object(a.useEffect)(()=>{localStorage.setItem("pitchHistory",JSON.stringify(c))},[c]);const u=Object(a.useRef)(),p=(e,t)=>e/(u.current.clientHeight/(2*t)),d=async e=>{if(i)return;e&&e.cancelable&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation();const a=e&&e.clientY||e&&e.changedTouches&&e.changedTouches.item(0).clientY||e&&e.touches&&e.touches.item(0).clientY;var o;N(),C||await S(),t(null),l(!0),$=a,j=Math.ceil(200*Math.random())-100,O=L(n,j),o=O,y.frequency.value=o,T()},m=async e=>{await d(e)},g=e=>{if(!i)return;e&&e.cancelable&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation();const a=e&&e.clientY||e&&e.changedTouches&&e.changedTouches.item(0).clientY,o=j+p($-a,110);t(o);const r=E.find(e=>{let[,t]=e;return t===n}),c=r?r[0]:"Unknown";s(e=>[{timestamp:(new Date).toISOString(),note:c,deviation:o},...e]),v({category:"Training",action:"Finish Click",value:o}),$=null,D(),l(!1)},h=e=>{let t="";(e=Math.round(e))>0&&(t="+");let n="cents";return 1===Math.abs(e)&&(n="cent"),`${t}${e} ${n}`};return o.a.createElement("div",{className:"App"},o.a.createElement(R,{ref:u},o.a.createElement(U,null,E.map(e=>{let[a,l]=e;return o.a.createElement(V,{key:a},o.a.createElement(A,{disabled:i,note:a,frequency:l}),o.a.createElement(K,{disabled:i,chosen:l===n,onClick:()=>(e=>{t(null),r(e)})(l)},o.a.createElement(F,{note:a})))})),o.a.createElement(J,{onClick:g,onTouchEnd:e=>{g(e)},onMouseMove:e=>{let{clientY:t}=e;M()&&B(L(O,p($-t,110)))},onTouchMove:e=>{e.cancelable&&e.preventDefault();const t=e.changedTouches&&e.changedTouches.item(0).clientY||e.touches&&e.touches.item(0).clientY;M()&&B(L(O,p($-t,110)))},onTouchStart:m},o.a.createElement(ue,{visible:i},o.a.createElement("p",null,"/\\"),o.a.createElement("p",null,"||"),o.a.createElement("p",null,"Find your note"),o.a.createElement("p",null,"||"),o.a.createElement("p",null,"\\/")),o.a.createElement(se,{visible:!i,onClick:d,onTouchStart:m},o.a.createElement("span",{className:"desktop-text"},"Click here to start!"),o.a.createElement("span",{className:"mobile-text"},"Drag to find the note!")),null!==e&&o.a.createElement(pe,null,"Deviation: "+h(e))),c.length>0&&o.a.createElement(z,null,o.a.createElement(I,null,o.a.createElement("h3",null,"History"),o.a.createElement("div",null,o.a.createElement(H,{onClick:()=>{const e=c.map(e=>`${e.timestamp},${e.note},${e.deviation.toFixed(2)}`).join("\n"),t=new Blob(["Timestamp,Note,Deviation (cents)\n"+e],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(t),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download","pitch_trainer_history.csv"),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},"Export CSV"),o.a.createElement(q,{onClick:()=>{window.confirm("Are you sure you want to clear the history?")&&s([])}},"Clear"))),o.a.createElement(Y,null,c.map((e,t)=>o.a.createElement(_,{key:t},o.a.createElement("span",null,new Date(e.timestamp).toLocaleString()),o.a.createElement("span",null,e.note),o.a.createElement("span",{style:{color:Math.abs(e.deviation)<10?"green":"inherit"}},h(e.deviation))))))))}function G(){x({hitType:"pageview",page:"info"});const[e,t]=Object(a.useState)(!1),n=()=>{t(!0)};if(e)return o.a.createElement(P,null);const r=()=>o.a.createElement(X,{onClick:n},"Start the app!");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(Z,null,o.a.createElement(r,null))),o.a.createElement("main",null,o.a.createElement("h2",null,"See how this app works"),o.a.createElement("iframe",{title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/vA1o9gU0Oh8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),o.a.createElement("h2",null,"How to use this app"),o.a.createElement("p",null,o.a.createElement("strong",null,"Pick")," a note"),o.a.createElement("p",null,o.a.createElement("strong",null,"Imagine")," it"),o.a.createElement("p",null,o.a.createElement("strong",null,"Hear")," a sound"),o.a.createElement("p",null,o.a.createElement("strong",null,"Find")," your note"),o.a.createElement("p",{style:{color:"lightgray"}},"v",b.version))))}const z=l.a.div`
    width: 100%;
    margin-top: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    max-height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`,I=l.a.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    h3 {
        margin: 0;
    }
`,Y=l.a.div`
    display: flex;
    flex-direction: column;
`,_=l.a.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    &:last-child {
        border-bottom: none;
    }
`,H=l.a.button`
    background-color: #f0f0f0;
    color: #333;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    margin-right: 5px;
    transition: background-color 0.2s;
    &:hover {
        background-color: #e0e0e0;
    }
`,q=l.a.button`
    background-color: #f0f0f0;
    color: #d32f2f;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.2s;
    &:hover {
        background-color: #ffebee;
    }
`,J=l.a.div`
    background-color: gray;
    position: relative;
    display: flex;
    width: 50%;
    user-select: none;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    cursor: default;
    touch-action: none;
`,R=l.a.div`
    height: 80dvh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px 30% 0;
    
    @media (max-width: 768px) {
        margin: 10px 5% 0;
    }
`,U=l.a.div`
    position: relative;
    width: 50%;
    height: 100%;
    overflow-y: scroll;
`,V=l.a.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    height: ${131}px;
`,W=l.a.button`
    height: 100%;
`,K=Object(l.a)(W)`
  background-image: url(${s.a});
  background-size: auto ${99}px;
  background-position: -24px 71%;
  background-repeat: no-repeat;
  background-color: ${e=>{let{chosen:t,disabled:n}=e;return t?"lightgrey":"white"}};
  width: 70%;
  padding-right: 16%;
  user-select: none;
`,Q=Object(l.a)(W)`
    width: 30%;
    touch-action: none;
    user-select: none;
`,X=l.a.button`
  font-size: 18px;
  border-radius: 20px;
  height: 32px;
  min-width: 256px;
`,Z=l.a.div`
  margin: 48px 0;
`,ee=l.a.div`
    height: ${10}px;
`,te=Object(l.a)(ee)`
    padding-left: ${80}px;
`,ne=Object(l.a)(ee)`
    border-bottom: solid 1px;
`,ae=Object(l.a)(ne)`
    width: calc(100% - 42px);
    padding-left: ${80}px;
`,oe=Object(l.a)(ne)`
    width: ${24}px;
    margin-left: ${78}px;
    padding-left: 2px;
`,re=l.a.div`
    width: ${20}px;
    height: 15px;
    position: relative;
    left: 1px;
    background-repeat: no-repeat;
    background-image: url(${h.a});
    background-size: ${20}px;
    bottom: ${e=>{let{isOnLine:t}=e;return(t?-1:5)+"px"}};
`,ie=l.a.div`
    position: absolute;
    background-repeat: no-repeat;
    right: ${22}px;
`,le=Object(l.a)(ie)`
    background-image: url(${m.a});
    width: 10px;
    height: 26px;
    background-size: 12px;
    bottom: -2px;
`,ce=Object(l.a)(ie)`
    background-image: url(${p.a});
    width: 10px;
    height: 38px;
    background-size: 9px;
    bottom: -18px;

`,se=l.a.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin: auto;
    background-color: ghostwhite;
    display: ${e=>{let{visible:t}=e;return t?"block":"none"}};
    user-select: none;
    
    .mobile-text {
        display: none;
    }
    
    @media (max-width: 768px) {
        .desktop-text {
            display: none;
        }
        .mobile-text {
            display: inline;
        }
    }
`,ue=l.a.div`
    margin: auto;
    height: 210px;
    display: ${e=>{let{visible:t}=e;return t?"block":"none"}};
`,pe=l.a.div`
    margin-top: 110%;
    margin-left: 25px;
    height: 30px;
    position: absolute;
`;var de=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e){let{children:t}=e;Object(a.useEffect)(()=>{fetch("/meta.json").then(e=>e.json()).then(e=>{e.version!==b.version&&n()})},[]);const n=async()=>{if(caches){const e=await caches.keys();await Promise.all(e.map(e=>caches.delete(e)))}};return t}i.a.render(o.a.createElement(me,null,o.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.90bb31fb.chunk.js.map