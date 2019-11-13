var spreadsheet = "https://docs.google.com/spreadsheets/d/1gOIFQ1HUXtwfqxlUM6mf8ttpTxaoCxHkpxh3Eji0elI/edit#gid=0"

var beerMenu = Handlebars.compile($('#beer-menu').html());

$('#bol-menu').sheetrock({
  url: spreadsheet,
  query: "select A,B,C,D,E,F,G",
  fetchSize: 10,
  rowTemplate: beerMenu
});
