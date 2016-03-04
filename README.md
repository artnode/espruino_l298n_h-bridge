# espruino_l298n_h-bridge
Espruino: Driving two DC motors or one stepper motor using the l298n h-brige
---------------------------------------------------------------
SEE WIKI FOR WIRING
---------------------------------------------------------------

USAGE (DC-motor):

motorDC(1); //full speed

motorDC(-1); //reverse full speed

motorDC(0.5); //half speed

motorDC(0); //stop

---

USAGE (stepper-motor):

motorStep(100);

motorStep(-350); //350 steps reverse
