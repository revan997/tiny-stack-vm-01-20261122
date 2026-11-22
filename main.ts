import{readFileSync as R,writeFileSync as W,mkdirSync as M}from'node:fs'
const I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output',G='0Aq46:;?xxxxxxxx999999959995999x999xxxxxxxxxxxxxPTTP0xxxxxxxxxxx58xxxxxxxxxxxxxx4414'
const V=(P,N)=>{
let D=new Int32Array(256),C=new Int32Array(64),m=new Int32Array(256),u=new Uint8Array(65536),l=0,s=0,c=0,p=0,t=0,j=0,n=P.length
const T=e=>[u.slice(0,l),e]
for(;;){
if(t==1e6)return T(10)
if(p<0||p>=n)return T(9)
let o=P[p],g=G[o]
if(!g||g=='x')return T(5)
let v=g.charCodeAt(0)-48,im=v>>4,pp=(v>>2)&3,pu=v&3
if(p+im>=n)return T(9)
t++
let x=p+1+im
if(s<pp)return T(2)
if(s-pp+pu>256)return T(3)
p=x
if(o==0)return T(0)
if(o==1)D[s++]=(P[x-1]<<24)>>24
else if(o==2)D[s++]=P[x-4]|P[x-3]<<8|P[x-2]<<16|P[x-1]<<24
else if(o==3)s--
else if(o==4){D[s]=D[s-1];s++}
else if(o==5){let w=D[s-1];D[s-1]=D[s-2];D[s-2]=w}
else if(o==6){D[s]=D[s-2];s++}
else if(o==7){let w=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=w}
else if(o==23)D[s-1]=-D[s-1]|0
else if(o==27)D[s-1]=~D[s-1]
else if(o>=16&&o<=34){
let a=D[s-2],d=D[s-1],r
if(o>=19&&o<=22&&!d)return T(4)
r=o==16?(a+d)|0:o==17?(a-d)|0:o==18?Math.imul(a,d):o==19?(a/d)|0:o==20?a%d|0:o==21?Math.floor((a>>>0)/(d>>>0))|0:o==22?(a>>>0)%(d>>>0)|0:o==24?a&d:o==25?a|d:o==26?a^d:o==28?a<<(d&31):o==29?a>>(d&31):o==30?(a>>>(d&31))|0:o==32?a==d?1:0:o==33?a<d?1:0:(a>>>0)<(d>>>0)?1:0
s-=2;D[s++]=r
}
else if(o>=48&&o<=50){
let y=((P[x-2]|P[x-1]<<8)<<16)>>16
if(o==48||(o==49?D[--s]==0:D[--s]!=0))p=x+y
}
else if(o==51){if(c==64)return T(7);C[c++]=x;p=P[x-2]|P[x-1]<<8}
else if(o==52){if(c==0)return T(8);p=C[--c]}
else if(o==64){let a=D[s-1];if(a<0||a>255)return T(6);D[s-1]=m[a]}
else if(o==65){let a=D[s-1],z=D[s-2];if(a<0||a>255)return T(6);s-=2;m[a]=z}
else if(o==80){let q=String(D[s-1]);if(l+q.length>65536)return T(11);s--;for(let i=0;i<q.length;i++)u[l++]=q.charCodeAt(i)}
else if(o==81){if(l+1>65536)return T(11);u[l++]=D[--s]&255}
else if(o==82)D[s++]=j<N.length?N[j++]:-1
else if(o==83)return T(D[--s]&255)
}
}
for(let k=1;k<=40;k++){
let d='i'+String(k).padStart(3,'0'),r=V(R(I+'/'+d+'/program.bin'),R(I+'/'+d+'/input.bin'))
M(O+'/'+d,{recursive:true})
W(O+'/'+d+'/stdout.bin',r[0])
W(O+'/'+d+'/exit.txt',r[1]+'\n')
}
