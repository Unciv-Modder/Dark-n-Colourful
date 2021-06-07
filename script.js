function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}

]var gb = [
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
function html(html) {
  document.getElementById("a").innerHTML = a;
  return document.getElementById("a");
}


function culture(count, seed) {
  
  a = eToNumber(seed * 4353427895736790765765756765765765765765756756765765765765756756756765765587342753985673498536987563897562375346598732659837265987324659857).toString();

  var syls = a.charAt(count), ii = 0, type = [], ret = "", 
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

  ii = 0
  while (ii < a.charAt(count + 5)) {
    v.push(linguisy.v[parseInt(a.charAt(ii + count + 9))])
    ii++;
  }

  ii = 0
  while (ii < a.charAt(count + 6)) {
    n.push(linguisy.n[parseInt(a.charAt(ii + count + 9))])
    ii++;
  }

  ii = 0
  while (ii < a.charAt(count + 7)) {
    s.push(linguisy.s[parseInt(a.charAt(ii + count + 9))])
    ii++;
  }

  ii = 0
  while (ii < a.charAt(count + 8)) {
    c.push(linguisy.c[parseInt(a.charAt(ii + count + 9))])
    ii++;
  }

  var ret = {
    syllables:typs,
    v:v,
    n:n,
    s:s,
    c:c
  }

  console.log(ii + " of " + syls + "(" + a.charAt(ii) + ") from " + a + " : " + typs + "     here: " + ret)
  return ret;
}

function world(seed, options) {

  var seed = (seed * 12345665734985064564565465464565465465465465654654646546452973019287453975347892356387483450).toString(),
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




  html(`
    <smaller>welcome to the empire of...</smaller><br>
    <big>${campaign.empire.name}</big>
    <>
  
    <txt border med>Reselect</txt>
  `);

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
