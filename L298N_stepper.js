// MOJA 2015

function motorStep(mySteps){
  var stepperPins = [C6,C7,C8,C9]; // Change these to your pins (digital output)
  var stepBits = [0b0110,0b0101,0b1001,0b1010];

  if (mySteps<0) //reverse
  {
    stepBits.reverse();
    mySteps = -mySteps;
  }
  
  for (i=0; i< mySteps ; i++)
  {
    digitalWrite(stepperPins, stepBits[i % stepBits.length]);
    //then we need to wait before sending next command
    wait(3);
  }

}

function wait(ms){
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while(d2-d < ms);
}
