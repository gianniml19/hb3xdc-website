(function(root){'use strict';
const defaults={f:7,p:100,af:1,mf:1,cable:.46,other:.4,gain:.11,angle:0,building:0,reflection:1.6,distance:10.5,size:20};
const limits={f:[.1,300],p:[0,100000],af:[0,1],mf:[0,1],cable:[0,100],other:[0,100],gain:[-30,60],angle:[0,60],building:[0,60],reflection:[1,2],distance:[.1,100000],size:[.01,10000]};
function calculate(v){for(const [k,[min,max]] of Object.entries(limits)){if(typeof v[k]!=='number'||!Number.isFinite(v[k])||v[k]<min||v[k]>max)throw new RangeError('Ungültige Eingabe: '+k)}
const mean=v.p*v.af*v.mf,attenuation=10**(-(v.cable+v.other)/10),gainFactor=10**((v.gain-v.angle)/10),buildingFactor=10**(-v.building/10),eirp=mean*attenuation*gainFactor,erp=eirp/1.64;
const igw=v.f<1?87:v.f<10?87/Math.sqrt(v.f):28;
const numerator=v.reflection*Math.sqrt(30*eirp*buildingFactor),field=numerator/v.distance,limitDistance=numerator/igw,wavelength=299.792458/v.f;
// Deliberately conservative heuristic, never a certification of far-field validity.
const screeningDistance=Math.max(wavelength,2*v.size*v.size/wavelength);
return {mean,attenuation,gainFactor,buildingFactor,eirp,erp,igw,field,limitDistance,wavelength,screeningDistance,near:v.distance<screeningDistance,fieldRatio:field/igw,powerRatio:(field/igw)**2};}
const api={defaults,limits,calculate};if(typeof module!=='undefined')module.exports=api;else root.nisvModel=api;
})(typeof window!=='undefined'?window:globalThis);
