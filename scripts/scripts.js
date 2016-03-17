//crossroads variables 
var ascValCrossroads = 0; 
var chaValCrossroads = 0;
var ordValCrossroads = 0;
var priValCrossroads = 0;
var eldValCrossroads = 0;

//anvil variables
var anvil1Count = 0;
var anvil2Count = 0;
var anvil3Count = 0;
var anvil4Count = 0;
var anvil5Count = 0;

function btnProcess(btn, btnCode) {
	
	var ascVal = Number(document.getElementById('ascendant').innerHTML);
	var chaVal = Number(document.getElementById('chaos').innerHTML);
	var ordVal = Number(document.getElementById('order').innerHTML);
	var priVal = Number(document.getElementById('primordial').innerHTML);
	var eldVal = Number(document.getElementById('eldritch').innerHTML);

	if (btnCode === 0)
	{
		switch(btn) {
			case 'ascendantBtn':
				if (ascValCrossroads <= 0)
				{
					ascVal += 1;
					ascValCrossroads += 1;
					document.getElementById('ascendant').innerHTML = ascVal;
					document.getElementById('ascendantBtn').className += ' active';
					btnActive('ascendant');
					statValues('offense', 15);
					anvil.unlock();
				}
			break;
			
			case 'chaosBtn':
				if (chaValCrossroads <= 0)
				{
					chaVal += 1;
					chaValCrossroads += 1;
					document.getElementById('chaos').innerHTML = chaVal;
					document.getElementById('chaosBtn').className += ' active';
					btnActive('chaos');
					statValues('health', 5);
					anvil.unlock();					
				}
			break;
			
			case 'orderBtn':
				if (ordValCrossroads <= 0)
				{
					ordVal += 1;
					ordValCrossroads += 1;
					document.getElementById('order').innerHTML = ordVal;
					document.getElementById('orderBtn').className += ' active';
					btnActive('order');
					statValues('health', 5);
					anvil.unlock();					
				}
			break;
			
			case 'primordialBtn':
				if (priValCrossroads <= 0)
				{
					priVal += 1;
					priValCrossroads += 1;
					document.getElementById('primordial').innerHTML = priVal;
					document.getElementById('primordialBtn').className += ' active';
					btnActive('primordial');
					statValues('defense', 15);
					anvil.unlock();					
				}
			break;
			
			case 'eldritchBtn':
			if (eldValCrossroads <= 0)
				{
					eldVal += 1;
					eldValCrossroads += 1;
					document.getElementById('eldritch').innerHTML = eldVal;
					document.getElementById('eldritchBtn').className += ' active';
					btnActive('eldritch');
					statValues('offense', 15);
					anvil.unlock();					
				}
			break;
			
			default:
			alert('error');
		}
	}
	else if (btnCode === 2) {
		switch(btn) {
			case 'ascendantBtn':
				if (ascValCrossroads >= 1)
				{
					ascVal -= 1;
					ascValCrossroads -= 1;
					document.getElementById('ascendant').innerHTML = ascVal;
					document.getElementById('ascendantBtn').className = '';
					statValues('offense', -15);
					anvil.unlock();					
				}
			break;
			
			case 'chaosBtn':
				if (chaValCrossroads >= 1)
				{
					chaVal -= 1;
					chaValCrossroads -= 1;
					document.getElementById('chaos').innerHTML = chaVal;
					document.getElementById('chaosBtn').className = '';
					statValues('health', -5);
					anvil.unlock();					
				}
			break;
		
			case 'orderBtn':
				if (ordValCrossroads >= 1)
				{
					ordVal -= 1;
					ordValCrossroads -= 1;
					document.getElementById('order').innerHTML = ordVal;
					document.getElementById('orderBtn').className = '';
					statValues('health', -5);
					anvil.unlock();					
				}
			break;
			
			case 'primordialBtn':
				if (priValCrossroads >= 1)
				{
					priVal -= 1;
					priValCrossroads -= 1;
					document.getElementById('primordial').innerHTML = priVal;
					document.getElementById('primordialBtn').className = '';
					statValues('defense', -15);
					anvil.unlock();					
				}
			break;
			
			case 'eldritchBtn':
				if (eldValCrossroads >= 1)
				{
					eldVal -= 1;
					eldValCrossroads -= 1;
					document.getElementById('eldritch').innerHTML = eldVal;
					document.getElementById('eldritchBtn').className = '';
					statValues('offense', -15);
					anvil.unlock();					
				}
			break;
			
			default:
			alert('error');
		}
	}
	else {
		alert('Quit screwing around...');
	}
}

function btnActive(devotion) {
	
	if (ascValCrossroads === 0)
	{
		//default
	}
	else if(ascValCrossroads === 1)
	{
		//active
	}
	else 
	{
		alert('btnActive error');
	}
}

function display(event, devotion) {
	
	
	var tooltip = document.getElementById('popup');
	var x = event.clientX;
	var y = event.clientY;
	
	tooltip.style.display = 'block';
	tooltip.style.top = (y + 20) + 'px';
	tooltip.style.left = (x + 20) + 'px';

	tooltip.style.display = 'block';

	switch (devotion) {
		case 'ascendant':
			tooltip.innerHTML = '+15 Offensive Ability <br /> 1 <img src="img/Ascendant_Icon.png" />';
		break;
		
		case 'chaos':
			tooltip.innerHTML = '+5% Health <br /> 1 <img src="img/Chaos_Icon.png" />';
		break;
		
		case 'order':
			tooltip.innerHTML = '+5% Health <br /> 1 <img src="img/Order_Icon.png" />';
		break;
		
		case 'primordial':
			tooltip.innerHTML = '+15 Defensive Ability <br /> 1 <img src="img/Primordial_Icon.png" />';
		break;
		
		case 'eldritch':
			tooltip.innerHTML = '+15 Offensive Ability <br /> 1 <img src="img/Eldritch_Icon.png" />';
		break;
	}
}

function hide() {
	
	
	var div = document.getElementById('popup');
	
	div.style.display = 'none';
}

function statValues(stat, value) {
	
	var val;  //stores the innerHTML string

//Attribute Variables
var physique = document.getElementById('physique');
var cunning = document.getElementById('cunning');
var spirit = document.getElementById('spirit');
var health = document.getElementById('health');
var energy = document.getElementById('energy');

//Combat Stat Variables
var offense = document.getElementById('offense');
var defense = document.getElementById('defense');
var armor = document.getElementById('armor');

//Resist Variables
var fireRes = document.getElementById('fireRes');
var coldRes = document.getElementById('coldRes');
var lightningRes = document.getElementById('lightningRes');
var poisonRes = document.getElementById('poisonRes');
var piercingRes = document.getElementById('piercingRes');
var bleedingRes = document.getElementById('bleedingRes');
var vitalityRes = document.getElementById('vitalityRes');
var aetherRes = document.getElementById('aetherRes');
var stunRes = document.getElementById('stunRes');
var chaosRes = document.getElementById('chaosRes');

//Character variables
var attackSpeed = document.getElementById('attackSpeed');
var critDamage = document.getElementById('critDamage');
var healthRegen = document.getElementById('healthRegen');
var energyRegen = document.getElementById('energyRegen');
var energyAbsorb = document.getElementById('energyAbsorb');
var constitution = document.getElementById('constitution');

//Physical variables
var physMod = document.getElementById('physMod');
var pierceMod = document.getElementById('pierceMod');
var bleedMod = document.getElementById('bleedMod');
var bleedDur = document.getElementById('bleedDur');
var traumaMod = document.getElementById('traumaMod');
var traumaDur = document.getElementById('traumaDur');
var lifeSteal = document.getElementById('lifeSteal');

//Magic variables
var castSpeed = document.getElementById('castSpeed');
var coolReduct = document.getElementById('coolReduct');
var energyCost = document.getElementById('energyCost');
var healthDmg = document.getElementById('healthDmg');
var fireMod = document.getElementById('fireMod');
var coldMod = document.getElementById('coldMod');
var lightningMod = document.getElementById('lightningMod');
var acidMod = document.getElementById('acidMod');
var vitalityMod = document.getElementById('vitalityMod');
var aetherMod = document.getElementById('aetherMod');
var chaosMod = document.getElementById('chaosMod');
var burnMod = document.getElementById('burnMod');
var burnDur = document.getElementById('burnDur');
var frostMod = document.getElementById('frostMod');
var frostDur = document.getElementById('frostDur');
var electMod = document.getElementById('electMod');
var electDur = document.getElementById('electDur');
var poisonMod = document.getElementById('poisonMod');
var poisonDur = document.getElementById('poisonDur');
var vitDecayMod = document.getElementById('vitDecayMod');
var vitDecayDur = document.getElementById('vitDecayDur');

//Pet variables
var petLife = document.getElementById('petLife');
var petDmg = document.getElementById('petDmg');
var petAttackSpeed = document.getElementById('petAttackSpeed');
var petRunSpeed = document.getElementById('petRunSpeed');
var petOffense = document.getElementById('petOffense');
var petDefense = document.getElementById('petDefense');
var petFireRes = document.getElementById('petFireRes');
var petColdRes = document.getElementById('petColdRes');
var petLightRes = document.getElementById('petLightRes');
var petPoisonRes = document.getElementById('petPoisonRes');
var petPierceRes = document.getElementById('petPierceRes');
var petBleedRes = document.getElementById('petBleedRes');
var petVitalityRes = document.getElementById('petVitalityRes');
var petAetherRes = document.getElementById('petAetherRes');
var petChaosRes = document.getElementById('petChaosRes');

//Defense variables
var ctb = document.getElementById('ctb');
var dmgBlk = document.getElementById('dmgBlk');
var blkRecovery = document.getElementById('blkRecovery');
var dodge = document.getElementById('dodge');
var deflect = document.getElementById('deflect');
var physResist = document.getElementById('physResist');
var disruptResist = document.getElementById('disruptResist');
var lifeLeechRes = document.getElementById('lifeLeechRes');
var energyLeechRes = document.getElementById('energyLeechRes');
var trapRes = document.getElementById('trapRes');
var petrifyRes = document.getElementById('petrifyRes');
var freezeRes = document.getElementById('freezeRes');
var sleepRes = document.getElementById('sleepRes');
var slowRes = document.getElementById('slowRes');

//Retaliation variables
var dmgReflect = document.getElementById('dmgReflect');
var lifeRetal = document.getElementById('lifeRetal');
var physRetal = document.getElementById('physRetal');
var pierceRetal = document.getElementById('pierceRetal');
var bleedRetal = document.getElementById('bleedRetal');
var traumaRetal = document.getElementById('traumaRetal');
var fireRetal = document.getElementById('fireRetal');
var coldRetal = document.getElementById('coldRetal');
var lightningRetal = document.getElementById('lightningRetal');
var acidRetal = document.getElementById('acidRetal');
var vitalityRetal = document.getElementById('vitalityRetal');
var aetherRetal = document.getElementById('aetherRetal');
var chaosRetal = document.getElementById('chaosRetal');
var burnRetal = document.getElementById('burnRetal');
var frostRetal = document.getElementById('frostRetal');
var electRetal = document.getElementById('electRetal');
var poisonRetal = document.getElementById('poisonRetal');
var vitDecayRetal = document.getElementById('vitDecayRetal');


	switch (stat) {
		case 'physique':
			val = physique.innerHTML;
			val = Number(val) + value;
			physique.innerHTML = val;	
		break;
		
		case 'cunning':
			val = cunning.innerHTML;
			val = Number(val) + value;
			cunning.innerHTML = val;	
		break;
		 
		case 'spirit':
			val = spirit.innerHTML;
			val = Number(val) + value;
			spirit.innerHTML = val;	
		break;
		
		case 'health':
			val = health.innerHTML;
			val = Number(val) + value;
			health.innerHTML = val;	
		break;
		
		case 'energy':
			val = energy.innerHTML;
			val = Number(val) + value;
			energy.innerHTML = val;	
		break;
		
		case 'offense':
			val = offense.innerHTML;
			val = Number(val) + value;
			offense.innerHTML = val;	
		break;

		case 'defense':
			val = defense.innerHTML;
			val = Number(val) + value;
			defense.innerHTML = val;	
		break;
		
		case 'armor':
			val = armor.innerHTML;
			val = Number(val) + value;
			armor.innerHTML = val;	
		break;
		
		case 'fireRes':
			val = fireRes.innerHTML;
			val = Number(val) + value;
			fireRes.innerHTML = val;	
		break;
		
		case 'coldRes':
			val = coldRes.innerHTML;
			val = Number(val) + value;
			coldRes.innerHTML = val;	
		break;
		
		case 'lightningRes':
			val = lightningRes.innerHTML;
			val = Number(val) + value;
			lightningRes.innerHTML = val;	
		break;
		
		case 'poisonRes':
			val = poisonRes.innerHTML;
			val = Number(val) + value;
			poisonRes.innerHTML = val;	
		break;
		
		case 'piercingRes':
			val = piercingRes.innerHTML;
			val = Number(val) + value;
			piercingRes.innerHTML = val;	
		break;
		
		case 'bleedingRes':
			val = bleedingRes.innerHTML;
			val = Number(val) + value;
			bleedingRes.innerHTML = val;	
		break;
		
		case 'vitalityRes':
			val = vitalityRes.innerHTML;
			val = Number(val) + value;
			vitalityRes.innerHTML = val;	
		break;
		
		case 'aetherRes':
			val = aetherRes.innerHTML;
			val = Number(val) + value;
			aetherRes.innerHTML = val;	
		break;
		
		case 'stunRes':
			val = stunRes.innerHTML;
			val = Number(val) + value;
			stunRes.innerHTML = val;	
		break;
		
		case 'chaosRes':
			val = chaosRes.innerHTML;
			val = Number(val) + value;
			chaosRes.innerHTML = val;	
		break;
		
		case 'attackSpeed':
			val = attackSpeed.innerHTML;
			val = Number(val) + value;
			attackSpeed.innerHTML = val;	
		break;
		
		case 'critDamage':
			val = critDamage.innerHTML;
			val = Number(val) + value;
			critDamage.innerHTML = val;	
		break;
		
		case 'healthRegen':
			val = healthRegen.innerHTML;
			val = Number(val) + value;
			healthRegen.innerHTML = val;	
		break;
		
		case 'energyRegen':
			val = energyRegen.innerHTML;
			val = Number(val) + value;
			energyRegen.innerHTML = val;	
		break;
		
		case 'energyAbsorb':
			val = energyAbsorb.innerHTML;
			val = Number(val) + value;
			energyAbsorb.innerHTML = val;	
		break;
		
		case 'constitution':
			val = constitution.innerHTML;
			val = Number(val) + value;
			constitution.innerHTML = val;	
		break;
		
		case 'physMod':
			val = physMod.innerHTML;
			val = Number(val) + value;
			physMod.innerHTML = val;	
		break;
		
		case 'pierceMod':
			val = pierceMod.innerHTML;
			val = Number(val) + value;
			pierceMod.innerHTML = val;	
		break;
		
		case 'bleedMod':
			val = bleedMod.innerHTML;
			val = Number(val) + value;
			bleedMod.innerHTML = val;	
		break;
		
		case 'bleedDur':
			val = bleedDur.innerHTML;
			val = Number(val) + value;
			bleedDur.innerHTML = val;	
		break;
		
		case 'traumaMod':
			val = traumaMod.innerHTML;
			val = Number(val) + value;
			traumaMod.innerHTML = val;	
		break;
		
		case 'traumaDur':
			val = traumaDur.innerHTML;
			val = Number(val) + value;
			traumaDur.innerHTML = val;	
		break;
		
		case 'lifeSteal':
			val = lifeSteal.innerHTML;
			val = Number(val) + value;
			lifeSteal.innerHTML = val;	
		break;
		
		case 'castSpeed':
			val = castSpeed.innerHTML;
			val = Number(val) + value;
			castSpeed.innerHTML = val;	
		break;
		
		case 'coolReduct':
			val = coolReduct.innerHTML;
			val = Number(val) + value;
			coolReduct.innerHTML = val;	
		break;
		
		case 'energyCost':
			val = energyCost.innerHTML;
			val = Number(val) + value;
			energyCost.innerHTML = val;	
		break;
		
		case 'healthDmg':
			val = healthDmg.innerHTML;
			val = Number(val) + value;
			healthDmg.innerHTML = val;	
		break;
		
		case 'fireMod':
			val = fireMod.innerHTML;
			val = Number(val) + value;
			fireMod.innerHTML = val;	
		break;
		
		case 'coldMod':
			val = coldMod.innerHTML;
			val = Number(val) + value;
			coldMod.innerHTML = val;	
		break;
		
		case 'lightningMod':
			val = lightningMod.innerHTML;
			val = Number(val) + value;
			lightningMod.innerHTML = val;	
		break;
		
		case 'acidMod':
			val = acidMod.innerHTML;
			val = Number(val) + value;
			acidMod.innerHTML = val;	
		break;
		
		case 'vitalityMod':
			val = vitalityMod.innerHTML;
			val = Number(val) + value;
			vitalityMod.innerHTML = val;	
		break;
		
		case 'aetherMod':
			val = aetherMod.innerHTML;
			val = Number(val) + value;
			aetherMod.innerHTML = val;	
		break;
		
		case 'chaosMod':
			val = chaosMod.innerHTML;
			val = Number(val) + value;
			chaosMod.innerHTML = val;	
		break;
		
		case 'burnMod':
			val = burnMod.innerHTML;
			val = Number(val) + value;
			burnMod.innerHTML = val;	
		break;
		
		case 'burnDur':
			val = burnDur.innerHTML;
			val = Number(val) + value;
			burnDur.innerHTML = val;	
		break;
		
		case 'frostMod':
			val = frostMod.innerHTML;
			val = Number(val) + value;
			frostMod.innerHTML = val;	
		break;
		
		case 'frostDur':
			val = frostDur.innerHTML;
			val = Number(val) + value;
			frostDur.innerHTML = val;	
		break;
		
		case 'electMod':
			val = electMod.innerHTML;
			val = Number(val) + value;
			electMod.innerHTML = val;	
		break;
		
		case 'electDur':
			val = electDur.innerHTML;
			val = Number(val) + value;
			electDur.innerHTML = val;	
		break;
		
		case 'poisonMod':
			val = poisonMod.innerHTML;
			val = Number(val) + value;
			poisonMod.innerHTML = val;	
		break;
		
		case 'poisonDur':
			val = poisonDur.innerHTML;
			val = Number(val) + value;
			poisonDur.innerHTML = val;	
		break;
		
		case 'vitDecayMod':
			val = vitDecayMod.innerHTML;
			val = Number(val) + value;
			vitDecayMod.innerHTML = val;	
		break;
		
		case 'vitDecayDur':
			val = vitDecayDur.innerHTML;
			val = Number(val) + value;
			vitDecayDur.innerHTML = val;	
		break;
		
		case 'petLife':
			val = petLife.innerHTML;
			val = Number(val) + value;
			petLife.innerHTML = val;	
		break;
		
		case 'petDmg':
			val = petDmg.innerHTML;
			val = Number(val) + value;
			petDmg.innerHTML = val;	
		break;
		
		case 'petAttackSpeed':
			val = petAttackSpeed.innerHTML;
			val = Number(val) + value;
			petAttackSpeed.innerHTML = val;	
		break;
		
		case 'petRunSpeed':
			val = petRunSpeed.innerHTML;
			val = Number(val) + value;
			petRunSpeed.innerHTML = val;	
		break;
		
		case 'petOffense':
			val = petOffense.innerHTML;
			val = Number(val) + value;
			petOffense.innerHTML = val;	
		break;
		
		case 'petDefense':
			val = petDefense.innerHTML;
			val = Number(val) + value;
			petDefense.innerHTML = val;	
		break;
		
		case 'petFireRes':
			val = petFireRes.innerHTML;
			val = Number(val) + value;
			petFireRes.innerHTML = val;	
		break;
		
		case 'petColdRes':
			val = petColdRes.innerHTML;
			val = Number(val) + value;
			petColdRes.innerHTML = val;	
		break;
		
		case 'petLightRes':
			val = petLightRes.innerHTML;
			val = Number(val) + value;
			petLightRes.innerHTML = val;	
		break;
		
		case 'petPoisonRes':
			val = petPoisonRes.innerHTML;
			val = Number(val) + value;
			petPoisonRes.innerHTML = val;	
		break;
		
		case 'petPierceRes':
			val = petPierceRes.innerHTML;
			val = Number(val) + value;
			petPierceRes.innerHTML = val;	
		break;
		
		case 'petBleedRes':
			val = petBleedRes.innerHTML;
			val = Number(val) + value;
			petBleedRes.innerHTML = val;	
		break;
		
		case 'petVitalityRes':
			val = petVitalityRes.innerHTML;
			val = Number(val) + value;
			petVitalityRes.innerHTML = val;	
		break;
		
		case 'petAetherRes':
			val = petAetherRes.innerHTML;
			val = Number(val) + value;
			petAetherRes.innerHTML = val;	
		break;
		
		case 'petChaosRes':
			val = petChaosRes.innerHTML;
			val = Number(val) + value;
			petChaosRes.innerHTML = val;	
		break;
		
		case 'ctb':
			val = ctb.innerHTML;
			val = Number(val) + value;
			ctb.innerHTML = val;	
		break;
		
		case 'dmgBlk':
			val = dmgBlk.innerHTML;
			val = Number(val) + value;
			dmgBlk.innerHTML = val;	
		break;
		
		case 'blkRecovery':
			val = blkRecovery.innerHTML;
			val = Number(val) + value;
			blkRecovery.innerHTML = val;	
		break;
		
		case 'dodge':
			val = dodge.innerHTML;
			val = Number(val) + value;
			dodge.innerHTML = val;	
		break;
		
		case 'deflect':
			val = deflect.innerHTML;
			val = Number(val) + value;
			deflect.innerHTML = val;	
		break;
		
		case 'physResist':
			val = physResist.innerHTML;
			val = Number(val) + value;
			physResist.innerHTML = val;	
		break;
		
		case 'disruptResist':
			val = disruptResist.innerHTML;
			val = Number(val) + value;
			disruptResist.innerHTML = val;	
		break;
		
		case 'lifeLeechRes':
			val = lifeLeechRes.innerHTML;
			val = Number(val) + value;
			lifeLeechRes.innerHTML = val;	
		break;
		
		case 'energyLeechRes':
			val = energyLeechRes.innerHTML;
			val = Number(val) + value;
			energyLeechRes.innerHTML = val;	
		break;
		
		case 'trapRes':
			val = trapRes.innerHTML;
			val = Number(val) + value;
			trapRes.innerHTML = val;	
		break;
		
		case 'petrifyRes':
			val = petrifyRes.innerHTML;
			val = Number(val) + value;
			petrifyRes.innerHTML = val;	
		break;
		
		case 'freezeRes':
			val = freezeRes.innerHTML;
			val = Number(val) + value;
			freezeRes.innerHTML = val;	
		break;
		
		case 'sleepRes':
			val = sleepRes.innerHTML;
			val = Number(val) + value;
			sleepRes.innerHTML = val;	
		break;
		
		case 'slowRes':
			val = slowRes.innerHTML;
			val = Number(val) + value;
			slowRes.innerHTML = val;	
		break;
		
		case 'dmgReflect':
			val = dmgReflect.innerHTML;
			val = Number(val) + value;
			dmgReflect.innerHTML = val;	
		break;
		
		case 'lifeRetal':
			val = lifeRetal.innerHTML;
			val = Number(val) + value;
			lifeRetal.innerHTML = val;	
		break;
		
		case 'physRetal':
			val = physRetal.innerHTML;
			val = Number(val) + value;
			physRetal.innerHTML = val;	
		break;
		
		case 'pierceRetal':
			val = pierceRetal.innerHTML;
			val = Number(val) + value;
			pierceRetal.innerHTML = val;	
		break;
		
		case 'bleedRetal':
			val = bleedRetal.innerHTML;
			val = Number(val) + value;
			bleedRetal.innerHTML = val;	
		break;
		
		case 'traumaRetal':
			val = traumaRetal.innerHTML;
			val = Number(val) + value;
			traumaRetal.innerHTML = val;	
		break;
		
		case 'fireRetal':
			val = fireRetal.innerHTML;
			val = Number(val) + value;
			fireRetal.innerHTML = val;	
		break;
		
		case 'coldRetal':
			val = coldRetal.innerHTML;
			val = Number(val) + value;
			coldRetal.innerHTML = val;	
		break;
		
		case 'lightningRetal':
			val = lightningRetal.innerHTML;
			val = Number(val) + value;
			lightningRetal.innerHTML = val;	
		break;
		
		case 'acidRetal':
			val = acidRetal.innerHTML;
			val = Number(val) + value;
			acidRetal.innerHTML = val;	
		break;
		
		case 'vitalityRetal':
			val = vitalityRetal.innerHTML;
			val = Number(val) + value;
			vitalityRetal.innerHTML = val;	
		break;
		
		case 'aetherRetal':
			val = aetherRetal.innerHTML;
			val = Number(val) + value;
			aetherRetal.innerHTML = val;	
		break;
		
		case 'chaosRetal':
			val = chaosRetal.innerHTML;
			val = Number(val) + value;
			chaosRetal.innerHTML = val;	
		break;
		
		case 'burnRetal':
			val = burnRetal.innerHTML;
			val = Number(val) + value;
			burnRetal.innerHTML = val;	
		break;
		
		case 'frostRetal':
			val = frostRetal.innerHTML;
			val = Number(val) + value;
			frostRetal.innerHTML = val;	
		break;
		
		case 'electRetal':
			val = electRetal.innerHTML;
			val = Number(val) + value;
			electRetal.innerHTML = val;	
		break;
		
		case 'poisonRetal':
			val = poisonRetal.innerHTML;
			val = Number(val) + value;
			poisonRetal.innerHTML = val;	
		break;
		
		case 'vitDecayRetal':
			val = vitDecayRetal.innerHTML;
			val = Number(val) + value;
			vitDecayRetal.innerHTML = val;
		break;
		
		default:
			alert('error');
		break;
	}
}

function constellation (name, starCount, needA, needC, needE, needO, needP, giveA, giveC, giveE, giveO, giveP) {
	this.locked = true;
		
	//Definitions
	this.name = name;
	this.starCount = starCount;
	this.needA = needA;
	this.needC = needC;
	this.needE = needE;
	this.needO = needO;
	this.needP = needP;
	this.giveA = giveA;
	this.giveC = giveC;
	this.giveE = giveE;
	this.giveO = giveO;
	this.giveP = giveP;

	//Methods
	this.unlock = function(count) {
		var asc = Number(document.getElementById('ascendant').innerHTML);
		var cha = Number(document.getElementById('chaos').innerHTML);
		var eld = Number(document.getElementById('eldritch').innerHTML);
		var ord = Number(document.getElementById('order').innerHTML);
		var pri = Number(document.getElementById('primordial').innerHTML);

		if (this.needA <= asc && this.needC <= cha && this.needE <= eld && this.needO <= ord && this.needP <= pri) {
			this.locked = false;
			document.getElementById(this.name + 'Title').className = 'unlocked';
			document.getElementById(this.name + '1').className = 'unlocked';
		}
		else {
			this.locked = true;
			document.getElementById(this.name + 'Title').className = 'locked';
			document.getElementById(this.name + '1').className = 'locked';		
		}
	};
	
	this.award = function(op) {
			var asc = document.getElementById('ascendant');
			var cha = document.getElementById('chaos');
			var eld = document.getElementById('eldritch');
			var ord = document.getElementById('order');
			var pri = document.getElementById('primordial');
			
			var ascNum = Number(asc.innerHTML);
			var chaNum = Number(cha.innerHTML);
			var eldNum = Number(eld.innerHTML);
			var ordNum = Number(ord.innerHTML);
			var priNum = Number(pri.innerHTML);
			
			if ( op === 'give' ) {
				ascNum += this.giveA;
				chaNum += this.giveC;
				eldNum += this.giveE;
				ordNum += this.giveO;
				priNum += this.giveP;
			}
			else {
				ascNum -= this.giveA;
				chaNum -= this.giveC;
				eldNum -= this.giveE;
				ordNum -= this.giveO;
				priNum -= this.giveP;
			}
			
			asc.innerHTML = ascNum;
			cha.innerHTML = chaNum;
			eld.innerHTML = eldNum;
			ord.innerHTML = ordNum;
			pri.innerHTML = priNum;
	};
}

function constProcess(constName, event) {
	var count = Number(document.getElementById(constName).innerHTML);
	constName.unlock(count);	
}

function star(constName, name, stats, values, place, last) {
	this.name = name;
	this.stats = stats;
	this.values = values;
	this.place = place;
	this.last = last;
	constName = constName;
	
	this.starProcess = function(name, stats, values, event) 
		{
			var btnCode = event;
			var str = name;
			str = str.slice(0, -1);	
			var cnt = str + 'Count';
			var ugh = Number(document.getElementById(cnt).innerHTML);
			var title = str + 'Title';
			//add or subtract to <constellation>Count
			//unlock further stars based on <constellation>Count
			if (btnCode === 0) {
				document.getElementById(this.name).className = 'selected';
				ugh += 1;
				document.getElementById(cnt).innerHTML = ugh;
				document.getElementById(title).className = 'selected';
			}
			else if ( btnCode === 2){
				document.getElementById(this.name).className = 'unlocked';
				ugh -= 1;
				document.getElementById(cnt).innerHTML = ugh;
				document.getElementById(title).className = 'unlocked';
			}
			else {
				alert('error');
			}
		};
		
		this.countCheck = function(name, stats, values, event)
		{
			var btnCode = event;
			var str = name;
			str = str.slice(0, -1);
			var	nextStar = str + (this.place + 1);
			var afterStar = str + (this.place + 2);
			var count = str + 'Count';
			
			count = Number(document.getElementById(count).innerHTML);
			if (btnCode === 0 && count === (this.place - 1)) {
				this.starProcess(name, stats, values, event);
				if (this.last === 1) {
					window[constName].award('give');
				}
				else {
					document.getElementById(nextStar).className = 'unlocked';
				}
			}
			else if (btnCode === 2 && count === (this.place)) {
				if (this.last === 1) {
					this.starProcess(name, stats, values, event);
					window[constName].award('take');
				}
				else {
					this.starProcess(name, stats, values, event);
					document.getElementById(nextStar).className = 'locked';
				}

			}
			else {
			}
		};
}

var anvil = new constellation('anvil', 5, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0);
var anvil1 = new star('anvil', 'anvil1', ['defense'], [10], 1, 0); 
var anvil2 = new star('anvil', 'anvil2', ['physique'], [10], 2, 0);
var anvil3 = new star('anvil', 'anvil3', ['armorAbsorb'], [5], 3, 0);
var anvil4 = new star('anvil', 'anvil4', ['defense', 'constitution'], [15, 20], 4, 0);
var anvil5 = new star('anvil', 'anvil5', ['test'],['test'], 5, 1);