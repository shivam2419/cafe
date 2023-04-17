
sub = () => {
  // Chai section
  let chai1 = parseInt(document.getElementById("chai1").value);
  let chai2 = parseInt(document.getElementById("chai2").value);
  let chai3 = parseInt(document.getElementById("chai3").value);
  let chai4 = parseInt(document.getElementById("chai4").value);

  chai1p = 20;
  chai2p = 25;
  chai3p = 25;
  chai4p = 25;
  chai_total =
    chai1 * chai1p + chai2 * chai2p + chai3 * chai3p + chai4 * chai4p;
  console.log("Chai", chai_total);

  // Burger section
  let bug1 = parseInt(document.getElementById("bug1").value);
  let bug2 = parseInt(document.getElementById("bug2").value);
  let bug3 = parseInt(document.getElementById("bug3").value);
  let bug4 = parseInt(document.getElementById("bug4").value);
  let bug5 = parseInt(document.getElementById("bug5").value);

  bug1p = 55;
  bug2p = 70;
  bug3p = 70;
  bug4p = 80;
  bug5p = 80;
  bug_total =
    bug1 * bug1p + bug2 * bug2p + bug3 * bug3p + bug4 * bug4p + bug5 * bug5p;
  console.log("Burger", bug_total);

  // Momo section
  let momo1 = parseInt(parseInt(document.getElementById("momo1").value));
  let momo2 = parseInt(parseInt(document.getElementById("momo2").value));
  let momo3 = parseInt(parseInt(document.getElementById("momo3").value));
  let momo4 = parseInt(parseInt(document.getElementById("momo4").value));

  momo1p = 70;
  momo2p = 80;
  momo3p = 100;
  momo4p = 110;
  momo_total =
    momo1 * momo1p + momo2 * momo2p + momo3 * momo3p + momo4 * momo4p;
  console.log("Momo", momo_total);

  // Sandwich section
  let sand1 = parseInt(document.getElementById("sand1").value);
  let sand2 = parseInt(document.getElementById("sand2").value);
  let sand3 = parseInt(document.getElementById("sand3").value);
  let sand4 = parseInt(document.getElementById("sand4").value);
  let sand5 = parseInt(document.getElementById("sand5").value);

  sand1p = 70;
  sand2p = 70;
  sand3p = 70;
  sand4p = 80;
  sand5p = 100;

  sand_total =
    sand1 * sand1p +
    sand2 * sand2p +
    sand3 * sand3p +
    sand4 * sand4p +
    sand5 * sand5p;
  console.log(sand_total);

  // Pasta section
  let pasta1 = parseInt(document.getElementById("pasta1").value);
  let pasta2 = parseInt(document.getElementById("pasta2").value);
  let pasta3 = parseInt(document.getElementById("pasta3").value);

  pasta1p = 120;
  pasta2p = 120;
  pasta3p = 140;

  pasta_total = pasta1 * pasta1p + pasta2 * pasta2p + pasta3 * pasta3p;
  console.log(pasta_total);

  // Roll section
  let roll1 = parseInt(document.getElementById("roll1").value);
  let roll2 = parseInt(document.getElementById("roll2").value);

  roll1p = 70;
  roll2p = 80;

  roll_total = roll1 * roll1p + roll2 * roll2p;
  console.log(roll_total);

  // Maggie section
  let mag1 = parseInt(document.getElementById("mag1").value);
  let mag2 = parseInt(document.getElementById("mag2").value);
  let mag3 = parseInt(document.getElementById("mag3").value);
  let mag4 = parseInt(document.getElementById("mag4").value);
  let mag5 = parseInt(document.getElementById("mag5").value);

  mag1p = 60;
  mag2p = 50;
  mag3p = 60;
  mag4p = 60;
  mag5p = 60;

  mag_total =
    mag1 * mag1p + mag2 * mag2p + mag3 * mag3p + mag4 * mag4p + mag5 * mag5p;
  console.log(mag_total);

  // Drink section
  let drink1 = parseInt(document.getElementById("drink1").value);
  let drink2 = parseInt(document.getElementById("drink2").value);
  let drink3 = parseInt(document.getElementById("drink3").value);
  let drink4 = parseInt(document.getElementById("drink4").value);
  let drink5 = parseInt(document.getElementById("drink5").value);
  let drink6 = parseInt(document.getElementById("drink6").value);

  drink1p = 60;
  drink2p = 50;
  drink3p = 60;
  drink4p = 60;
  drink5p = 60;
  drink6p = 60;

  drink_total =
    drink1 * drink1p +
    drink2 * drink2p +
    drink3 * drink3p +
    drink4 * drink4p +
    drink5 * drink5p +
    drink6 * drink6p;
  console.log(drink_total);

  // Paratha section
  let par1 = parseInt(document.getElementById("par1").value);
  let par2 = parseInt(document.getElementById("par2").value);
  let par3 = parseInt(document.getElementById("par3").value);
  let par4 = parseInt(document.getElementById("par4").value);
  let par5 = parseInt(document.getElementById("par5").value);
  let par6 = parseInt(document.getElementById("par6").value);
  let par7 = parseInt(document.getElementById("par7").value);

  par1p = 70;
  par2p = 70;
  par3p = 70;
  par4p = 80;
  par5p = 100;
  par6p = 110;
  par7p = 110;

  par_total =
    par1 * par1p +
    par2 * par2p +
    par3 * par3p +
    par4 * par4p +
    par5 * par5p +
    par6p * par6 +
    par7 * par7p;
  console.log("Paratha ", par_total);

  // Chinese section
  let chin1 = parseInt(document.getElementById("chin1").value);
  let chin2 = parseInt(document.getElementById("chin2").value);
  let chin3 = parseInt(document.getElementById("chin3").value);
  let chin4 = parseInt(document.getElementById("chin4").value);
  let chin5 = parseInt(document.getElementById("chin5").value);
  let chin6 = parseInt(document.getElementById("chin6").value);
  let chin7 = parseInt(document.getElementById("chin7").value);
  let chin8 = parseInt(document.getElementById("chin8").value);
  let chin9 = parseInt(document.getElementById("chin9").value);
  let chin10 = parseInt(document.getElementById("chin10").value);

  chin1p = 80;
  chin2p = 100;
  chin3p = 110;
  chin4p = 110;
  chin5p = 120;
  chin6p = 140;
  chin7p = 140;
  chin8p = 150;
  chin9p = 150;
  chin10p = 200;

  chin_total =
    chin1 * chin1p +
    chin2 * chin2p +
    chin3 * chin3p +
    chin4 * chin4p +
    chin5 * chin5p +
    chin6 * chin6p +
    chin7 * chin7p +
    chin8 * chin8p +
    chin9 * chin9p +
    chin10 * chin10p;
  console.log("Chinese ", chin_total);

  // Pizza section
  let pizz1 = parseInt(document.getElementById("pizz1").value);
  let pizz2 = parseInt(document.getElementById("pizz2").value);
  let pizz3 = parseInt(document.getElementById("pizz3").value);
  let pizz4 = parseInt(document.getElementById("pizz4").value);
  let pizz5 = parseInt(document.getElementById("pizz5").value);
  let pizz6 = parseInt(document.getElementById("pizz6").value);
  let pizz7 = parseInt(document.getElementById("pizz7").value);
  let pizz8 = parseInt(document.getElementById("pizz8").value);

  pizz1p = 110;
  pizz2p = 110;
  pizz3p = 110;
  pizz4p = 110;
  pizz5p = 120;
  pizz6p = 140;
  pizz7p = 150;
  pizz8p = 160;

  pizz_total =
    pizz1 * pizz1p +
    pizz2 * pizz2p +
    pizz3 * pizz3p +
    pizz4 * pizz4p +
    pizz5 * pizz5p +
    pizz6 * pizz6p +
    pizz7 * pizz7p+
  pizz8 * pizz8p;
  console.log("pizz", pizz_total);

  let sp1 = document.getElementById("sp1");
  let sp2 = document.getElementById("sp2");
  let sp3 = document.getElementById("sp3");
  let sp4 = document.getElementById("sp4");
  let sp5 = document.getElementById("sp5");
  let sp6 = document.getElementById("sp6");
  let sp7 = document.getElementById("sp7");
  let sp8 = document.getElementById("sp8");
  let sp9 = document.getElementById("sp9");
  let sp10 = document.getElementById("sp10");
  sp1.innerHTML = "Chai : " + chai_total;
  sp2.innerHTML = "Burger : " + bug_total;
  sp3.innerHTML = "Sandwich : " + sand_total;
  sp4.innerHTML = "Pasta : " + pasta_total;
  sp5.innerHTML = "Roll :  " + roll_total;
  sp6.innerHTML = "Drinks : " + drink_total;
  sp7.innerHTML = "Paratha : " + par_total;
  sp8.innerHTML = "Chinese : " + chin_total;
  sp9.innerHTML = "Pizza : " + pizz_total;
  sp10.innerHTML = "Maggie : " + mag_total;
  sp11.innerHTML = "Momos : " + momo_total;

  let total1 =
    chai_total +
    bug_total +
    sand_total +
    pasta_total +
    roll_total +
    drink_total +
    par_total +
    chin_total +
    pizz_total +
    mag_total +
    momo_total;
    console.log(total1);
    openForm(total1);
};

// javscript area

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root@shivam2419"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

function openForm(total) {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("txtarea").innerHTML = "Total : "+total;
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
