import{readFileSync as a,writeFileSync as b,mkdirSync as c}from'fs'
let{MAKEFUN_INPUT_DIR:i='/input',MAKEFUN_OUTPUT_DIR:o='/output'}=process.env,T='0Aq46:;?xxxxxxxx999999959995999x999xxxxxxxxxxxxxPTTP0xxxxxxxxxxx58xxxxxxxxxxxxxx4414'
function run(P,N){let D=[],C=[],m=[],O=new Uint8Array(1<<16),L=0,j=0,t=0,p=0,X=c=>[O.slice(0,L),c]
for(;;){if(t++==1e6)return X(10)
if(p>>>0>=P.length)return X(9)
let o=P[p],q=T.charCodeAt(o)-48
if(o>83|q>71)return X(5)
let im=q>>4,pp=q>>2&3,pu=q&3,l=D.length-1
if(p+1+im>P.length)return X(9)
if(l<pp-1)return X(2)
if(l-pp+pu>255)return X(3)
let u=P[p+1]|P[p+2]<<8,s=u<<16>>16
p+=1+im
if(o==0)return X(0)
else if(o==1)D.push(u<<24>>24)
else if(o==2)D.push(u|P[p-2]<<16|P[p-1]<<24)
else if(o==3)D.pop()
else if(o==4)D.push(D[l])
else if(o==5){[D[l],D[l-1]]=[D[l-1],D[l]]}
else if(o==6)D.push(D[l-1])
else if(o==7){[D[l-2],D[l-1],D[l]]=[D[l-1],D[l],D[l-2]]}
else if(o-16<19&&o-23&&o-27){let b=D.pop(),a=D.pop(),A=a>>>0,B=b>>>0
if(o>18&o<23&&!b)return X(4)
D.push([a+b,a-b,Math.imul(a,b),a/b,a%b,A/B,A%B,0,a&b,a|b,a^b,0,a<<b,a>>b,a>>>b,0,a==b,a<b,A<B][o-16]|0)}
else if(o-23<5)D[l]=o<24?-D[l]|0:~D[l]
else if(o==48)p+=s
else if(o-49<2){let v=D.pop();if((v==0)==(o<50))p+=s}
else if(o==51){if(C.length>63)return X(7);C.push(p);p=u}
else if(o==52){if(!C.length)return X(8);p=C.pop()}
else if(o-64<2){let a=D[l];if((a>>>0)>255)return X(6);if(o<65)D[l]=m[a]|0;else{m[a]=D[l-1];D.length-=2}}
else if(o==80){let b=Buffer.from(''+D.pop());if(L+b.length>65536)return X(11);O.set(b,L);L+=b.length}
else if(o==81){if(L>65535)return X(11);O[L++]=D.pop()&255}
else if(o==82)D.push(N[j++]??-1)
else if(o==83)return X(D.pop()&255)}}
for(let k=0;++k<41;){let g='/i'+('00'+k).slice(-3),[O,e]=run(a(i+g+'/program.bin'),a(i+g+'/input.bin'));c(o+g,{recursive:!0});b(o+g+'/stdout.bin',O);b(o+g+'/exit.txt',''+e)}
