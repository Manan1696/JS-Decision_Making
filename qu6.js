//question6
//You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the table corresponding to an input character and return it.
// | P or p - PrepBytes |
// | Z or z - Zenith |
// | E or e - Expert Coder |
// | D or d - Data Structure |
// Note: You have to complete getValue function. No need to take any input.


const getValue = (a) => {
    if(a == "p"||a == "P"){
      return "PrepBytes";
    }
    else if(a == "z"||a == "Z"){
      return ("Zenith");
    }
    else if(a == "E"||a == "e"){
      return ("Expert Coder");
    }
    else if(a == "D"||a == "d"){
      return ("Data Structure");
    }
    else{
      return ("Value Not Found")
  }
  };