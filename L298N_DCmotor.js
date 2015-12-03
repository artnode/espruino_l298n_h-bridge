// MOJA 2015 - control DC MOTOR via L298n*/

/* MOJA 2015 - control DC MOTOR via L298n*/

function motorDC(motorCmd)
{
  var enablePin = C6; // Change this to fit your pins (must be PWM)
  var controlPins = [C7,C8]; // Change these to fit your pins
  

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
   analogWrite(enablePin,motorCmd); //PWM speed control
 }
