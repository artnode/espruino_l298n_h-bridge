# espruino_l298n_h-bridge
Espruino: Driving two DC motors or one stepper motor using the l298n h-brige

---------------------------------------------------------------

USAGE (DC-motor):
https://cloud.githubusercontent.com/assets/5136950/11588689/a887d2ee-9a82-11e5-9123-d8ca89ff642c.png

motorDC(1); //full speed

motorDC(-1); //reverse full speed

motorDC(0.5); //half speed

motorDC(0); //stop

---

USAGE (stepper-motor):

motorStep(100);

motorStep(-350); //350 steps reverse
