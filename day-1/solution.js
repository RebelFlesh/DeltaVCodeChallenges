function abbrevName(name){

  var I1=name.charAt(0).toUpperCase();
  var I2=name.charAt(name.indexOf(" ")+1).toUpperCase();
  return I1+"."+I2;

}