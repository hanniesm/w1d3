var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//helper function that calculates the total sales.
function total(arr) {
  var total = 0;

  arr.forEach(function(element) {
    total += element;
  })
  return total;
}

//helper function that works out the tax given the province and the total sales
function tax(province, total) {
  var taxrate = 0;
  if (province === "AB") {
    taxrate = salesTaxRates["AB"]
  } else if (province === "BC") {
    taxrate = salesTaxRates["BC"]
  } else if (province === "SK") {
    taxrate = salesTaxRates["SK"]
  } else {
    console.log("There is no tax rate for that province")
  }
  var tax = taxrate * total;
  return tax;
}

function companyTax(data) {
  for (var company in data) {
    var companyInfo = {};
    var eachCompany = data[company];
    var companyName = eachCompany.name;
    var companySales = eachCompany.sales;
    var companyProvince = eachCompany.province;
    var companyTotal = total(companySales);
    var companyTax = tax(companyProvince, companyTotal);
    companyInfo[companyName] = {};
    companyInfo[companyName]["totalSales"] = companyTotal;
    companyInfo[companyName]["totalTaxes"] = companyTax;


    console.log(companyInfo);
  }
}

companyTax(companySalesData);


// /* Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }
// */

