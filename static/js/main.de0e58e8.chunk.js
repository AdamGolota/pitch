(this.webpackJsonppitch=this.webpackJsonppitch||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"name":"pitch","version":"1.1.5","private":true,"homepage":"http://adamgolota.github.io/pitch","dependencies":{"react":"^16.8.0","react-dom":"^16.8.0","react-ga":"^2.7.0","react-scripts":"3.4.1","styled-components":"^5.0.0"},"scripts":{"predeploy":"npm run build","deploy":"gh-pages -d build","start":"export NODE_OPTIONS=--openssl-legacy-provider && react-scripts start","build":"node update-build.js && export NODE_OPTIONS=--openssl-legacy-provider && react-scripts build","test":"export NODE_OPTIONS=--openssl-legacy-provider && react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^6.3.0"}}')},,,,,,function(e,t,n){e.exports=n.p+"static/media/g.acaa6129.svg"},function(e,t,n){e.exports=n.p+"static/media/sharp.51fa938a.svg"},function(e,t,n){e.exports=n.p+"static/media/flat.002288e7.svg"},function(e,t,n){e.exports=n.p+"static/media/note.155dc3c8.svg"},,,,function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){},,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),l=(n(22),n(1)),c=n(3),s=(n(25),n(10)),u=n.n(s),p=n(11),d=n.n(p),m=n(12),h=n.n(m),g=n(13),b=n.n(g),x=n(4);c.a.initialize("UA-138302548-2"),c.a.pageview("/homepage");const f=Math.pow(2,1/1200);document.body.style.backgroundColor="#f7e9a3";const v=[["A3",220],["B3b",233.0819],["A3#",233.08191],["B3",246.9417],["C4",261.6256],["D4b",277.1826],["C4#",277.18261],["D4",293.6648],["E4b",311.127],["D4#",311.12701],["E4",329.6276],["F4",349.2282],["G4b",369.9944],["F4#",369.99441],["G4",391.9954],["A4b",415.3047],["G4#",415.30471],["A4",440],["B4b",466.1638],["A4#",466.16381],["B4",493.8833],["C5",523.2511],["D5b",554.3653],["C5#",554.36531],["D5",587.3295],["E5b",622.254],["D5#",622.25401],["E5",659.2551],["F5",698.4565],["G5b",739.9888],["F5#",739.98881],["G5",783.9909],["A5b",830.6094],["G5#",830.60941],["A5",880],["B5b",932.3275],["A5#",932.32751],["B5",987.7666],["C6",1046.5023]],E=["A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6"];let y,w,k,O,$,j=null;const C=()=>{w.gain.value=0,w.gain.linearRampToValueAtTime(.3,j.currentTime+.05)},T=async()=>{w.gain.value=.3,w.gain.linearRampToValueAtTime(0,j.currentTime+.05)},A=async()=>{j||(j=new AudioContext,await j.resume(),y=j.createOscillator(),w=j.createGain(),w.gain.value=0,y.connect(w),w.connect(j.destination),y.start())};function D(e){let{onClick:t,note:n,frequency:a,disabled:r}=e;const i=()=>{T(),document.removeEventListener("mouseup",i),document.removeEventListener("touchend",i)},l=async e=>{e.cancelable&&e.preventDefault(),j||await A(),y.frequency.value=a,C(),document.addEventListener("mouseup",i),document.addEventListener("touchend",i)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(K,{onMouseUp:i,onMouseDown:l,onTouchEnd:i,onTouchStart:l,disabled:r},"Play"))}function S(e){let{note:t,disabled:n}=e;const a=t.slice(0,2),r=E.length-E.indexOf(a)-1;return E.reduce((e,n,a)=>{let i=ee;a<4&&r<=a||a>12&&r>=a?i=ae:a>=4&&a<=12&&(i=ne);const l=t[2]||"";let c=o.a.createElement(o.a.Fragment,null);"#"===l?c=o.a.createElement(le,null):"b"===l&&(c=o.a.createElement(ie,null));const s=e=>{let{isOnLine:t}=e;return o.a.createElement(o.a.Fragment,null,o.a.createElement(oe,{isOnLine:t},c))};let u=o.a.createElement(o.a.Fragment,null);return r===a?u=o.a.createElement(s,{isOnLine:!0}):r===a-1&&(u=o.a.createElement(s,null)),a%2===0?[...e,o.a.createElement(i,{key:`${t}-${a}`},u)]:e},[])}const F=()=>{O=null,$=null};F();const N=e=>{console.log("playing on "+e),y.frequency.value=e},B=()=>!!O,M=(e,t)=>e*Math.pow(f,t);function L(){const[e,t]=Object(a.useState)(null),[n,r]=Object(a.useState)(220),[i,l]=Object(a.useState)(null),[s,u]=Object(a.useState)(()=>{const e=localStorage.getItem("pitchHistory");return e?JSON.parse(e):[]});Object(a.useEffect)(()=>{localStorage.setItem("pitchHistory",JSON.stringify(s))},[s]);const p=Object(a.useRef)(),d=(e,t)=>e/(p.current.clientHeight/(2*t)),m=async e=>{if(i)return;e&&e.cancelable&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation();const a=e&&e.clientY||e&&e.changedTouches&&e.changedTouches.item(0).clientY||e&&e.touches&&e.touches.item(0).clientY;var o;F(),j||await A(),t(null),l(!0),O=a,$=Math.ceil(200*Math.random())-100,k=M(n,$),o=k,y.frequency.value=o,C()},h=async e=>{await m(e)},g=e=>{if(!i)return;e&&e.cancelable&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation();const a=e&&e.clientY||e&&e.changedTouches&&e.changedTouches.item(0).clientY,o=$+d(O-a,110);t(o);const r=v.find(e=>{let[,t]=e;return t===n}),s=r?r[0]:"Unknown";u(e=>[{timestamp:(new Date).toISOString(),note:s,deviation:o},...e]),c.a.event({category:"Training",action:"Finish Click",value:o}),O=null,T(),l(!1)},b=e=>{let t="";(e=Math.round(e))>0&&(t="+");let n="cents";return 1===Math.abs(e)&&(n="cent"),`${t}${e} ${n}`};return o.a.createElement("div",{className:"App"},o.a.createElement(q,{ref:p},o.a.createElement(J,null,v.map(e=>{let[a,l]=e;return o.a.createElement(R,{key:a},o.a.createElement(D,{disabled:i,note:a,frequency:l}),o.a.createElement(W,{disabled:i,chosen:l===n,onClick:()=>(e=>{t(null),r(e)})(l)},o.a.createElement(S,{note:a})))})),o.a.createElement(_,{onClick:g,onTouchEnd:e=>{g(e)},onMouseMove:e=>{let{clientY:t}=e;B()&&N(M(k,d(O-t,110)))},onTouchMove:e=>{e.cancelable&&e.preventDefault();const t=e.changedTouches&&e.changedTouches.item(0).clientY||e.touches&&e.touches.item(0).clientY;B()&&N(M(k,d(O-t,110)))},onTouchStart:h},o.a.createElement(se,{visible:i},o.a.createElement("p",null,"/\\"),o.a.createElement("p",null,"||"),o.a.createElement("p",null,"Find your note"),o.a.createElement("p",null,"||"),o.a.createElement("p",null,"\\/")),o.a.createElement(ce,{visible:!i,onClick:m,onTouchStart:h},o.a.createElement("span",{className:"desktop-text"},"Click here to start!"),o.a.createElement("span",{className:"mobile-text"},"Drag to find the note!")),null!==e&&o.a.createElement(ue,null,"Deviation: "+b(e))),s.length>0&&o.a.createElement(z,null,o.a.createElement(G,null,o.a.createElement("h3",null,"History"),o.a.createElement("div",null,o.a.createElement(H,{onClick:()=>{const e=s.map(e=>`${e.timestamp},${e.note},${e.deviation.toFixed(2)}`).join("\n"),t=new Blob(["Timestamp,Note,Deviation (cents)\n"+e],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(t),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download","pitch_trainer_history.csv"),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},"Export CSV"),o.a.createElement(U,{onClick:()=>{window.confirm("Are you sure you want to clear the history?")&&u([])}},"Clear"))),o.a.createElement(I,null,s.map((e,t)=>o.a.createElement(Y,{key:t},o.a.createElement("span",null,new Date(e.timestamp).toLocaleString()),o.a.createElement("span",null,e.note),o.a.createElement("span",{style:{color:Math.abs(e.deviation)<10?"green":"inherit"}},b(e.deviation))))))))}function P(){c.a.modalview("info");const[e,t]=Object(a.useState)(!1),n=()=>{t(!0)};if(e)return o.a.createElement(L,null);const r=()=>o.a.createElement(Q,{onClick:n},"Start the app!");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement(X,null,o.a.createElement(r,null))),o.a.createElement("main",null,o.a.createElement("h2",null,"See how this app works"),o.a.createElement("iframe",{title:"video",width:"560",height:"315",src:"https://www.youtube.com/embed/vA1o9gU0Oh8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),o.a.createElement("h2",null,"How to use this app"),o.a.createElement("p",null,o.a.createElement("strong",null,"Pick")," a note"),o.a.createElement("p",null,o.a.createElement("strong",null,"Imagine")," it"),o.a.createElement("p",null,o.a.createElement("strong",null,"Hear")," a sound"),o.a.createElement("p",null,o.a.createElement("strong",null,"Find")," your note"),o.a.createElement("p",{style:{color:"lightgray"}},"v",x.version))))}const z=l.a.div`
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
`,G=l.a.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    h3 {
        margin: 0;
    }
`,I=l.a.div`
    display: flex;
    flex-direction: column;
`,Y=l.a.div`
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
`,U=l.a.button`
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
`,_=l.a.div`
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
`,q=l.a.div`
    height: 80dvh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px 30% 0;
    
    @media (max-width: 768px) {
        margin: 10px 5% 0;
    }
`,J=l.a.div`
    position: relative;
    width: 50%;
    height: 100%;
    overflow-y: scroll;
`,R=l.a.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    height: ${131}px;
`,V=l.a.button`
    height: 100%;
`,W=Object(l.a)(V)`
  background-image: url(${u.a});
  background-size: auto ${99}px;
  background-position: -24px 71%;
  background-repeat: no-repeat;
  background-color: ${e=>{let{chosen:t,disabled:n}=e;return t?"lightgrey":"white"}};
  width: 70%;
  padding-right: 16%;
  user-select: none;
`,K=Object(l.a)(V)`
    width: 30%;
    touch-action: none;
    user-select: none;
`,Q=l.a.button`
  font-size: 18px;
  border-radius: 20px;
  height: 32px;
  min-width: 256px;
`,X=l.a.div`
  margin: 48px 0;
`,Z=l.a.div`
    height: ${10}px;
`,ee=Object(l.a)(Z)`
    padding-left: ${80}px;
`,te=Object(l.a)(Z)`
    border-bottom: solid 1px;
`,ne=Object(l.a)(te)`
    width: calc(100% - 42px);
    padding-left: ${80}px;
`,ae=Object(l.a)(te)`
    width: ${24}px;
    margin-left: ${78}px;
    padding-left: 2px;
`,oe=l.a.div`
    width: ${20}px;
    height: 15px;
    position: relative;
    left: 1px;
    background-repeat: no-repeat;
    background-image: url(${b.a});
    background-size: ${20}px;
    bottom: ${e=>{let{isOnLine:t}=e;return(t?-1:5)+"px"}};
`,re=l.a.div`
    position: absolute;
    background-repeat: no-repeat;
    right: ${22}px;
`,ie=Object(l.a)(re)`
    background-image: url(${h.a});
    width: 10px;
    height: 26px;
    background-size: 12px;
    bottom: -2px;
`,le=Object(l.a)(re)`
    background-image: url(${d.a});
    width: 10px;
    height: 38px;
    background-size: 9px;
    bottom: -18px;

`,ce=l.a.div`
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
`,se=l.a.div`
    margin: auto;
    height: 210px;
    display: ${e=>{let{visible:t}=e;return t?"block":"none"}};
`,ue=l.a.div`
    margin-top: 110%;
    margin-left: 25px;
    height: 30px;
    position: absolute;
`;var pe=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e){let{children:t}=e;Object(a.useEffect)(()=>{fetch("/meta.json").then(e=>e.json()).then(e=>{e.version!==x.version&&n()})},[]);const n=async()=>{if(caches){const e=await caches.keys();await Promise.all(e.map(e=>caches.delete(e)))}};return t}i.a.render(o.a.createElement(de,null,o.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[17,1,2]]]);
//# sourceMappingURL=main.de0e58e8.chunk.js.map