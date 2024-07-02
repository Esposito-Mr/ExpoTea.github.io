// Google Apps Script to handle form submission and write to Google Sheets
function doPost(e) {
  const sheet = SpreadsheetApp.openById('1q7qW1E8T34Z_52ZZ58tdhDvbMqWaQSeFkO-fOSWs1pA').getSheetByName('Sheet1');
  const data = e.parameter;
  sheet.appendRow([data.name, data.email]);
  return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
}