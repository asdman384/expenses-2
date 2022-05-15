import { Component, OnInit } from '@angular/core';
import { SheetsService } from '../services/sheets.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  constructor(private sheets: SheetsService) {}

  ngOnInit(): void {}

  test() {
    this.sheets.getCategories().then(console.log);

    // var params = {
    //     // The ID of the spreadsheet to update.
    //     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder value.

    //     // The A1 notation of the values to update.
    //     range: 'my-range',  // TODO: Update placeholder value.

    //     // How the input data should be interpreted.
    //     valueInputOption: '',  // TODO: Update placeholder value.
    // };

    // var valueRangeBody = {
    //     // TODO: Add desired properties to the request body. All existing properties
    //     // will be replaced.
    // };

    // var request = gapi.client.sheets.spreadsheets.values.update(params, valueRangeBody);
    // request.then(function (response) {
    //     // TODO: Change code below to process the `response` object:
    //     console.log(response.result);
    // }, function (reason) {
    //     console.error('error: ' + reason.result.error.message);
    // });
  }
}
