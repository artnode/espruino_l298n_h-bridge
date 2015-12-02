// MOJA 2015 - control DC MOTOR via L298n*/

function L298dc(motorCmd)
{
  var enablePin = C6; // Change these two lines to fit your pins
  var controlPins = [C7,C8]; 
  

  if (motorCmd<0)
  {
    digitalWrite(controlPins[0],0);
    digitalWrite(controlPins[1],1);
  }
  else
  {
    digitalWrite(controlPins[0],1);
    digitalWrite(controlPins[1],0);
  }
    
  motorCmd=Math.abs(motorCmd);
  digitalWrite(enablePin,motorCmd);
 }
