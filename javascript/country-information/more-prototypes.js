function PlaneInfo(pilot, copilot, fuelLevel){

	this.pilot = pilot;
	this.copilot = copilot;
	this.fuelLevel = fuelLevel;

}

PlaneInfo.prototype.isReady = function(){

	if(this.pilot.length > 0 && this.copilot.length > 0 && this.pilot !== this.copilot && this.fuelLevel > 95 && this.fuelLevel < 100){

		return true
	}

	else{

		return false
	}
}

var ryanAir = new PlaneInfo("Red Baron", "Snoopy", 98);
var KLM = new PlaneInfo("Alfred", "Alfred", 98);
var Delta = new PlaneInfo("A", "B", 50);

console.log(ryanAir.isReady())
console.log(KLM.isReady())
console.log(Delta.isReady())