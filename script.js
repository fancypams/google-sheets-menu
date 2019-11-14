var spreadsheet = "https://docs.google.com/spreadsheets/d/1gOIFQ1HUXtwfqxlUM6mf8ttpTxaoCxHkpxh3Eji0elI/edit#gid=0"

var beerMenu = Handlebars.compile($('#beer-menu').html());
var punchMenu = Handlebars.compile($('#draft-menu').html());
var wineMenu = Handlebars.compile($('#wino-menu').html());

$('#bol-menu').sheetrock({
  url: spreadsheet,
  query: "select B,C,D,E,F,G,H where A = 'Section 1'",
  fetchSize: 6,
  rowTemplate: beerMenu
});

$('#bol-menu-1').sheetrock({
  url: spreadsheet,
  query: "select B,C,D,E,F,G,H where A = 'Section 2'",
  fetchSize: 11,
  rowTemplate: beerMenu
});

$('#bol-menu-2').sheetrock({
  url: spreadsheet,
  query: "select B,C,D,E,F,G,H where A = 'Section 3'",
  num: 21,
  fetchSize: 11,
  rowTemplate: beerMenu
});

$('#bol-menu-3').sheetrock({
  url: spreadsheet,
  query: "select B,C,D,E,F,G,H where A = 'Section 4'",
  fetchSize: 6,
  rowTemplate: beerMenu,
  num: 31
});

$('#punch-menu').sheetrock({
  url: spreadsheet,
  query: "select B,C,D,E,F,G,H where K = 'punch'",
  fetchSize: 5,
  rowTemplate: punchMenu
})

$('#wine-menu').sheetrock({
  url: spreadsheet,
  query: "select B,C,D,E,F,G,H where K = 'wine'",
  fetchSize: 5,
  rowTemplate: wineMenu
})
