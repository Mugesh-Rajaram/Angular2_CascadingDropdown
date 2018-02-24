import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { City } from './model/city';
import { Country } from './model/country';
import { MasterService } from './service/master.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [`
  // .heading{
  //   color:red !important;
  // }
  // `],
  providers: [MasterService]
})
export class AppComponent implements OnInit, OnChanges {
  private title = 'app';
  private selectedCountry: Country = new Country('India', 1);
  private countryList: Array<Country>;
  private selectedCity: City = new City('Namakkal', 1);
  private cityList: Array<City>;
  private panelHeading: string;
  private canShowTemplatedata: boolean;
  private myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold'
  }
  private showPanel: boolean;
  private lifeCycleInput: any;
  private showLifecycle: boolean;
  private gridData: any;

  constructor(private masterService: MasterService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    this.showPanel = true;
    this.panelHeading = ' Casding Dropdown';
    this.lifeCycleInput = {
      name: 'Mugesh',
      address: 'Namakkal'
    }
    this.showLifecycle = true;
    // this.masterService.getCountryList().subscribe(response => {
    //   this.countryList = response as Country[];
    // }, error => console.log(error));
    // this.masterService.getCityList().subscribe(response => {
    //   this.cityList = response as City[];
    // }, error => console.log(error));
    this.canShowTemplatedata = true;
    forkJoin(
      // this.masterService.getCountryList().pipe(map(response => response)),
      // this.masterService.getCityList().pipe(map(resp => resp)),
    ).subscribe(resp => {
      this.countryList = resp[0] as Country[];
      this.cityList = resp[1] as City[];
    }, error => console.log(error));
    this.gridData = [];
    this.gridData.push({ name: 'Mugesh', gender: 'Male' });
    this.gridData.push({ name: 'Arun', gender: 'Male' });
    this.gridData.push({ name: 'Sarathy', gender: 'Male' });
    this.gridData.push({ name: 'Priya', gender: 'Female' });
    console.log(this.gridData);
  }

  private countryChange(countryId: any) {
    this.cityList = [];
    // this.masterService.getCityList().subscribe(response => {
    //   const data = response as City[];
    //   this.cityList = data.filter(f => f.Id.toString() === countryId);
    // });
  }

  private changeValue(valid: boolean) {
    this.canShowTemplatedata = valid;
  }

  private setMyStyles() {
    const styles = {
      'background-color': 'red',
    };
    return styles;
  }

  private setMyClasses() {
    const classes = {
      'background-color': 'green'
    };
    return classes;
  }

  canShowLifeCycle() {
    if (this.showLifecycle) {
      this.showLifecycle = false;
    } else {
      this.showLifecycle = true;
    }
  }
}
