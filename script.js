var gb = [
  "v",
  "n",
  "s",
  "c"
]
var linguisy = {
  v:[

    "a",
    "e",
    "i",
    "o",
    "u",
    "ae",
    "ai",
    "ao",
    "au",
    "ea",
    "ei",
    "eo",
    "eu",
    "ia",
    "ia",
    "io",
    "iu",
    "oa",
    "oe",
    "oi",
    "ou",
    "ua",
    "ue",
    "ui",
    "uo"

  ],
  n:[
    
    "m",
    "mh",
    "n",
    "nh",
    "ng",
    "ngh",

    "w",
    "hw",
    "l",
    "lh",
    "r",
    "rh",
    "y",
    "yh"

  ],
  s:[

    "f",
    "s",
    "sh",
    "th",
    "kh",
    "χ"

  ],
  c:[

    "p",
    "t",
    "k",
    "q",
    "'",

    "ch",
    "pf",
    "ts",
    "qχ"

  ],
  syllableTypes: [

    "v",
    "cv",
    "cvc",
    "cvn",
    "vc",
    "vn",
    "scv",
    "scvc",
    "cvsc",
    "scvsc"

  ]
}
function html() {
  return document.getElementById("a");
}


function culture(count, seed) {
  

  var syls = (seed * (count * 10)).toString().charAt(2), ii = 0, type = [], ret = "", 
  typs = [];



  
  console.log(syls)
  if (syls <= 2) {
    syls = 2;
  } if (syls >= 8) {
    syls = 8;
  }

  var v = [], n = [], s = [], c = [];

  while (ii < syls) {
    typs.push(linguisy.syllableTypes[ii])
    ii++;
  }

  var ret = {
    syllables:typs,
    v:linguisy.v,
    n:linguisy.n,
    s:linguisy.s,
    c:linguisy.c
  }

  console.log(ii + " of " + syls + "(" + a.charAt(ii) + ") from " + a + " : " + typs + "     here: " + ret)
  return ret;
}

function world(seed, options) {

  var seed = seed.toString().replace("1", "123").replace("2", "234").replace("3", "345").replace("4", "456").replace("5", "567").replace("6", "678").replace("7", "789").replace("8", "899").replace("9", "999").replace("0", "192"),
    culn = options[0], //(seed.substr(2, 3) * (seed * "1" + "0".repeat(seed.length))) / 4,
    civn = culn * 5, //seed.toString().charAt(3),
    stan = options[1],
    culs = [],
    civs = [],
    stas = [],
    i = 0;
  console.log(culn);
  culn = Math.round(culn);
  civn = Math.round(civn);

  var generate = seed.toString().charAt(seed.toString().charAt(1));

  // culture generation
  while (i < culn) {

    culs.push(

      culture(i, seed)

    );
    i++;
    console.log(i + " of " + culn);

  }

  // civilization generation
  for (a in culs) {



  }

  return {

    culs: culs,
    civs: civs

  }

}






function begin() {
  seed = document.getElementById("seedin").value
  if (seed == "" || seed == "seed here (numbers only)") {

    seed = Math.random() * 420;

  }



  campaign = {

    turn: {

      count: 0,
      era: "Planet"

    },

    seed: seed,

    empire: {

      name: world(seed, [50, 500]).civs[0]

    }

  };




  html().innerHTML = 
    `<smaller>welcome to the empire of...</smaller><br>
    <big>${campaign.empire.name}</big>
    <>
  
    <txt border med>Reselect</txt>`
  ;

}


function turn() {

  console.log("End Turn #" + campaign.turn.count)
  campaign.turn.count += 1

}

function checkInput(ob) {
  var invalidChars = /[^0-9]/gi
  if (invalidChars.test(ob.value)) {
    ob.value = ob.value.replace(invalidChars, "");
  }
}
