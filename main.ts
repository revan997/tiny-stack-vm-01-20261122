import{readFileSync as r,writeFileSync as w,mkdirSync as m,readdirSync as q}from'node:fs';
const T=`!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%"%`,A=Int32Array;
for(const d of q('/input')){
const h='/input/'+d,j='/output/'+d,P=r(h+'/program.bin'),I=r(h+'/input.bin'),n=P.length;
const D=new A(256),C=new A(64),M=new A(256),O=Buffer.alloc(1<<16);
let s=0,c=0,o=0,ip=0,pc=0,st=0,ex=0;
V:for(;;){
if(++st>1e6){ex=10;break V}
if(pc>>>0>=n){ex=9;break V}
const b=P[pc],v=T.charCodeAt(b)-33;
if(!(v>=0)){ex=5;break V}
const im=v>>4,po=(v>>2)&3,pu=v&3;
if(pc+im>=n){ex=9;break V}
if(s<po|s-po+pu>256){ex=s<po?2:3;break V}
pc+=1+im;
if(b<8){
if(b==0){ex=0;break V}
if(b<3)D[s++]=b==1?P.readInt8(pc-1):P.readInt32LE(pc-4);
else if(b==3)s--;
else if(b==4||b==6){D[s]=D[s-2+(b==4)];s++}
else if(b==5)[D[s-1],D[s-2]]=[D[s-2],D[s-1]];
else[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];
}else if(b>47&&b<53){
const g=P[pc-2]|P[pc-1]<<8;
if(b<51){
if(b==48||(b==49)==!D[--s])pc+=g<<16>>16;
}else if(b==51){
if(c>63){ex=7;break V}
C[c++]=pc;pc=g;
}else{
if(!c){ex=8;break V}
pc=C[--c];
}
}else if(b>63&&b<66){
const a=D[s-1];
if(a>>>0>255){ex=6;break V}
if(b==64)D[s-1]=M[a];
else M[a]=D[s-2],s-=2;
}else if(b>79){
if(b==80){
const g=''+D[s-1];
if(o+g.length>65536){ex=11;break V}
s--;o+=O.write(g,o);
}else if(b==81){
if(o>65535){ex=11;break V}
O[o++]=D[--s]&255;
}else if(b==82)D[s++]=I[ip++]??-1;
else{ex=D[--s]&255;break V}
}else{
const y=D[s-1],a=D[s-2],u=b==23|b==27,U=a>>>0,V=y>>>0,k=y&31;
if(b>18&&b<23&&y==0){ex=4;break V}
const R=[a+y|0,a-y|0,Math.imul(a,y),a/y|0,a%y|0,U/V|0,U%V|0,~y+1,a&y,a|y,a^y,~y,a<<k,a>>k,a>>>k|0,0,a==y?1:0,a<y?1:0,U<V?1:0][b-16];
D[s-1-!u]=R;s-=!u;
}
}
m(j,{recursive:true});
w(j+'/stdout.bin',O.subarray(0,o));
w(j+'/exit.txt',''+ex);
}
