class Spaceship {
constructor(name,crew,phasers,shields){
  this.name=name
  this.crew=crew
  this.phasers=phasers
  this.shields=shields
  this.warpDrive= 'disengaged'
  if(this.crew.length>0){
    this.crew.forEach((member)=>{member.currentShip=this})
    this.docked=false
  }
  else{this.docked= true}
  this.phasersCharge='uncharged'
  this.cloaked=false;
  }


}
