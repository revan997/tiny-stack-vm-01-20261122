import{readFileSync as a,writeFileSync as b,mkdirSync as c}from'fs'
let{MAKEFUN_INPUT_DIR:i='/input',MAKEFUN_OUTPUT_DIR:o='/output'}=process.env,T='0Aq46:;?xxxxxxxx999999959995999x999xxxxxxxxxxxxxPTTP0xxxxxxxxxxx58xxxxxxxxxxxxxx4414'
function run(P,N){let D=[],C=[],m=[],O=new Uint8Array(65536),L=0,j=0,t=0,p=0,X=c=>[O.subarray(0,L),c]
for(;;){if(t++==1e6)return X(10)
if(p>>>0>=P.length)return X(9)
let o=P[p],c=T.charCodeAt(o)
if(o>83|c>119)return X(5)
let q=c-48,im=q>>4,pp=q%16>>2,pu=q&3
if(p+1+im>P.length)return X(9)
if(D.length<pp)return X(2)
if(D.length-pp+pu>256)return X(3)
let u=P[p+1]|P[p+2]<<8,s=u<<16>>16
p+=1+im
if(o==0)return X(0)
else if(o==1)D.push(u<<24>>24)
else if(o==2)D.push(u|P[p-2]<<16|P[p-1]<<24)
else if(o==3)D.pop()
else if(o==4)D.push(D[D.length-1])
else if(o==5){let l=D.length-1;[D[l],D[l-1]]=[D[l-1],D[l]]}
else if(o==6)D.push(D[D.length-2])
else if(o==7){let l=D.length-1;[D[l-2],D[l-1],D[l]]=[D[l-1],D[l],D[l-2]]}
else if(o-16<19&&o-23&&o-27){let b=D.pop(),a=D.pop(),r
if(o>18&&o<23&&!b)return X(4)
r=[a+b,a-b,Math.imul(a,b),a/b,a%b,(a>>>0)/(b>>>0),(a>>>0)%(b>>>0),0,a&b,a|b,a^b,0,a<<b,a>>b,a>>>b,0,+(a==b),+(a<b),+((a>>>0)<(b>>>0))][o-16]
D.push(r|0)}
else if(o==23||o==27){let l=D.length-1;D[l]=o==23?-D[l]|0:~D[l]}
else if(o==48)p+=s
else if(o==49||o==50){let v=D.pop();if((v==0)==(o==49))p+=s}
else if(o==51){if(C.length==64)return X(7);C.push(p);p=u}
else if(o==52){if(!C.length)return X(8);p=C.pop()}
else if(o==64||o==65){let a=D[D.length-1];if((a>>>0)>255)return X(6);if(o==64)D[D.length-1]=m[a]|0;else{m[a]=D[D.length-2];D.length-=2}}
else if(o==80){let b=Buffer.from(''+D.pop());if(L+b.length>65536)return X(11);O.set(b,L);L+=b.length}
else if(o==81){if(L>65535)return X(11);O[L++]=D.pop()&255}
else if(o==82)D.push(N[j++]??-1)
else if(o==83)return X(D.pop()&255)}}
for(let k=1;k<41;k++){let d='i'+('00'+k).slice(-3),g='/'+d,[O,e]=run(a(i+g+'/program.bin'),a(i+g+'/input.bin'));c(o+g,{recursive:!0});b(o+g+'/stdout.bin',O);b(o+g+'/exit.txt',''+e)}
