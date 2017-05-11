//table variables
var strat1Table = document.getElementById("strat1");
var strat2Table = document.getElementById("strat2");
var yearsTable = document.getElementById("year")
var sum1Table = document.getElementById("sum1");
var sum2Table = document.getElementById("sum2");

function doIt()
  {
    //create variables for all form inputs
    var savings1 = document.getElementById("savings1").value;
    var savings2 = document.getElementById("savings2").value;
    var interest1 = document.getElementById("interest1").value;
    var interest2 = document.getElementById("interest2").value;
    var years1 = document.getElementById("years1").value;
    var years2 = document.getElementById("years2").value;
    var start1 = document.getElementById("start1").value;
    var start2 = document.getElementById("start2").value;
    var stop1 = document.getElementById("stop1").value;
    var stop2 = document.getElementById("stop2").value;

    //calculate strat1 savings
    CalcSavings(savings1, interest1, years1, start1, stop1, strat1Table, sum1Table);

    //calculate strat2 savings
    CalcSavings(savings2, interest2, years2, start2, stop2, strat2Table, sum2Table);

    //update year table
    CalcYear(years1, years2, yearsTable)

    //disable the doit and default buttons
    document.getElementById("doit").disabled = true;
    document.getElementById("defaults").disabled = true;

    //disable input fields
    document.getElementById("savings1").disabled = true;
    document.getElementById("savings2").disabled = true;
    document.getElementById("interest1").disabled = true;
    document.getElementById("interest2").disabled = true;
    document.getElementById("years1").disabled = true;
    document.getElementById("years2").disabled = true;
    document.getElementById("start1").disabled = true;
    document.getElementById("start2").disabled = true;
    document.getElementById("stop1").disabled = true;
    document.getElementById("stop2").disabled = true;

  }

function CalcSavings(savings, interest, years, start, stop, table, summaryTable)
{
  //variables
  var curSav = 0;
  var curInt = 0;
  var endBal = 0;
  var totInt = 0;
  var totSav = 0;

  var row = "";
  var savingsRow = "";
  var interestRow = "";
  var balanceRow = "";
  var totSavRow = "";
  var totIntRow = "";
  var endBalRow = "";

  //loop until retirement year reached
  for (i = 0; i < years; i++)
  {

    //set savings amount
    if(i >= start && i <= stop)
    {
      curSav = savings;
    }
    else
    {
      curSav = 0;
    }
    //console.log(curSav);
    //update interest
    curInt = (+endBal + +curSav) * +interest;

    //update balance
    endBal = +endBal + +curSav + +curInt;

    //update total interest
    totInt = (+totInt + +curInt);

    //update total savings
    totSav = (+totSav + +curSav);

    //update html table
    row = table.insertRow(i);
    savingsRow = row.insertCell(0);
    interestRow = row.insertCell(1);
    balanceRow = row.insertCell(2);

    curInt = curInt.toFixed(0);
    endBal = endBal.toFixed(0);

    savingsRow.innerHTML = FormatNumberWithCommas(curSav);
    interestRow.innerHTML = FormatNumberWithCommas(curInt);
    balanceRow.innerHTML = FormatNumberWithCommas(endBal);
  }

  //generate summary
  totSav = totSav.toFixed(0);
  totInt = totInt.toFixed(0);

  row = summaryTable.insertRow(1);
  totSavRow = row.insertCell(0);
  totSavRow.innerHTML = FormatNumberWithCommas("Total Saved: $" + totSav);

  row = summaryTable.insertRow(2);
  totIntRow = row.insertCell(0);
  totIntRow.innerHTML = FormatNumberWithCommas("Total Interest: $" + totInt);

  row = summaryTable.insertRow(3);
  endBalRow = row.insertCell(0);
  endBalRow.innerHTML = FormatNumberWithCommas("Ending Balance: $" + endBal);
}

function CalcYear(strat1Years, strat2Years, table)
{
  var row = "";
  var yearRow = "";
  var numYears = 0;

  if(strat1Years > strat2Years)
  {
    numyears = strat1Years;
  }
  else
  {
    numYears = strat2Years;
  }
  for (i = 0; i < numYears; i++)
  {
    row = table.insertRow(i);
    yearRow = row.insertCell(0);
    yearRow.innerHTML = i + 1;
  }
}

function FormatNumberWithCommas(num)
{
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num))
  {
    num = num.replace(pattern, "$1,$2");
  }
  return num;
}

//reset form elements to their default values
function Defaults()
{
  document.getElementById("savings1").value="5000";
  document.getElementById("savings2").value="5000";
  document.getElementById("interest1").value="0.1";
  document.getElementById("interest2").value="0.1";
  document.getElementById("years1").value="45";
  document.getElementById("years2").value="45";
  document.getElementById("start1").value="1";
  document.getElementById("start2").value="11";
  document.getElementById("stop1").value="10";
  document.getElementById("stop2").value="45";
}

//clear form elements and reset the tables
function Clear()
{
  document.getElementById("savings1").value="";
  document.getElementById("savings2").value="";
  document.getElementById("interest1").value="";
  document.getElementById("interest2").value="";
  document.getElementById("years1").value="";
  document.getElementById("years2").value="";
  document.getElementById("start1").value="";
  document.getElementById("start2").value="";
  document.getElementById("stop1").value="";
  document.getElementById("stop2").value="";

  //reset strat1
  resetTable(strat1, 0);
  //reset strat2
  resetTable(strat2, 0);
  //reset yr table
  resetTable(yearsTable, 0);
  //reset sum1
  resetTable(sum1Table, 1);
  //reset sum2
  resetTable(sum2Table, 1)
  //enable doit and default buttons
  document.getElementById("doit").disabled = false;
  document.getElementById("defaults").disabled = false;
  //enable input fields
  document.getElementById("savings1").disabled = false;
  document.getElementById("savings2").disabled = false;
  document.getElementById("interest1").disabled = false;
  document.getElementById("interest2").disabled = false;
  document.getElementById("years1").disabled = false;
  document.getElementById("years2").disabled = false;
  document.getElementById("start1").disabled = false;
  document.getElementById("start2").disabled = false;
  document.getElementById("stop1").disabled = false;
  document.getElementById("stop2").disabled = false;


}

function resetTable(tableVar, numToDelete)
{
  while (tableVar.rows.length > numToDelete )
  {
    tableVar.deleteRow(numToDelete);
  }
}
