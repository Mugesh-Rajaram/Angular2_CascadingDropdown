import { Component, OnInit } from '@angular/core';
import { City } from './model/city';
import { Country } from './model/country';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MasterService]
})
export class AppComponent implements OnInit {
  private title = 'app';
  private selectedCountry: Country = new Country('India', 1);
  private countryList: Array<Country>;
  private selectedCity: City = new City('Namakkal', 1);
  private cityList: Array<City>;
  private panelHeading: string;

  constructor(private masterService: MasterService) {
  }

  ngOnInit() {
    this.panelHeading = ' Casding Dropdown';
    this.masterService.getCountryList().subscribe(response => {
      this.countryList = response as Country[];
    }, error => console.log(error));
    this.masterService.getCityList().subscribe(response => {
      this.cityList = response as City[];
    }, error => console.log(error));
  }

  private countryChange(countryId: any) {
    this.cityList = [];
    this.masterService.getCityList().subscribe(response => {
      const data = response as City[];
      this.cityList = data.filter(f => f.Id.toString() === countryId);
    });
  }
}
