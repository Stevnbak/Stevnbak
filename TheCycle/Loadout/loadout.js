//all:
let Weapons = ["Advocate","Gorgon","KOR-47","Manticore","AR-55 Phase Autorifle","Asp Flechette Gun","KM-9 Scrapper","S-576 PDW","Voltaic Brute","Lacerator","KBR Longshot","Phasic Lancer","Basilisk","C-32 Bolt Action","KARMA-1","Kinetic Arbiter","PKR Maelstrom","Shattergun","B9 Trench Gun","ICA Guarantee","KARLA","Zeus Beam","HAZE","FF4 Detonator","KOMRAD","Recall Teleporter","LPRT","Kheper Revitalizer"];
let Abilities = ["Shield Boost","Adrenaline Shot","Stand Your Ground","Triage Sphere","Healing Aura","Skirmish Sphere","Orbital Bombardment","Precision Strike","Orbital Barrage","Directional Warp","Warp Bomb","Cloaking Device","Evasion Cloak","Concealment Cloak","Kinetic Barrier","Protective Shell","Safe Guard","Shock Grenade","Snare Trap","Surveillance Ward","Heavy Turret","Energy Turret"];
let Suits = ["Aani QuickSuit","Augment","Boxer Warsuit","Dragonfly Flightsuit"];
let Pistols = ["Hammer","Bulldog","K-28","Scarab"];
//loadout
let W1;
let W2;
let W3;
let W4;
let A1;
let A2;
let A3;
let A4;
let S;
let P;

function Generate() {  
    let r;
    let W = [...Weapons];
    let A = [...Abilities];

    r = Math.floor(Math.random() * W.length);
    W1 = W[r];
    W.splice(r,1);
    r = Math.floor(Math.random() * W.length);
    W2 = W[r];
    W.splice(r,1);
    r = Math.floor(Math.random() * W.length);
    W3 = W[r];
    W.splice(r,1);
    r = Math.floor(Math.random() * W.length);
    W4 = W[r];
    W.splice(r,1);

    r = Math.floor(Math.random() * A.length);
    A1 = A[r];
    A.splice(r,1);
    r = Math.floor(Math.random() * A.length);
    A2 = A[r];
    A.splice(r,1);
    r = Math.floor(Math.random() * A.length);
    A3 = A[r];
    A.splice(r,1);
    r = Math.floor(Math.random() * A.length);
    A4 = A[r];
    A.splice(r,1);

    r = Math.floor(Math.random() * Suits.length);
    S = Suits[r];
    r = Math.floor(Math.random() * Pistols.length);
    P = Pistols[r];

    /*
    console.log("Weapons: " + W1 + " " + W2 + " " + W3 + " " + W4 + " ");
    console.log("Abilities: " + A1 + " " + A2 + " " + A3 + " " + A4 + " ");
    console.log("Suit: " + S);
    console.log("Pistol: " + P);
    */
   
    document.getElementById("W1").src = "Icons/" + W1 + ".png";
    document.getElementById("W2").src = "Icons/" + W2 + ".png";
    document.getElementById("W3").src = "Icons/" + W3 + ".png";
    document.getElementById("W4").src = "Icons/" + W4 + ".png";
    document.getElementById("A1").src = "Icons/" + A1 + ".png";
    document.getElementById("A2").src = "Icons/" + A2 + ".png";
    document.getElementById("A3").src = "Icons/" + A3 + ".png";
    document.getElementById("A4").src = "Icons/" + A4 + ".png";
    document.getElementById("S").src = "Icons/" + S + ".png";
    document.getElementById("P").src = "Icons/" + P + ".png";
}
