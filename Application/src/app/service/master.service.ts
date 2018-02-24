import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { Country } from '../model/country';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { State } from '../model/state';

@Injectable()
export class MasterService {
    hostURL: string;

    constructor(private http: HttpClient) {
    }

    public getCountryList() {
        // return [
        //     new Country('India', 1),
        //     new Country('USA', 2),
        //     new Country('Australia', 3),
        //     new Country('Brazil', 4)
        // ];
        return this.http.get(`api/master/colt`).pipe(map(response => response));
    }

    public getCityList() {
        return [
            new City('Namakkal', 1, 1),
            new City('Chennai', 2, 1),
            new City('Madurai', 3, 1),
            new City('Salem', 4, 1),
            new City('Bengaluru', 5, 2),
            new City('Mangalore', 6, 2),
            new City('Hubli', 7, 2),
            new City('Bijapur', 8, 2),
            new City('Thiruvanathapuram', 9, 3),
            new City('Kochi', 10, 3),
            new City('Kozhikode', 11, 3),
            new City('Thrissur', 12, 3),
        ];
        // return this.http.get(`api/master/cilt`).pipe(map(response => response));
        // return [
        //     new City('Namakkal', 1, 1),
        //     new City('Chennai', 2, 1),
        //     new City('Madurai', 3, 1),
        //     new City('Salem', 4, 1),
        //     new City('New York', 5, 2),
        //     new City('Washington D.C', 6, 2),
        //     new City('Chicago', 7, 2),
        //     new City('San Francisco', 8, 2),
        //     new City('Aydney', 9, 3),
        //     new City('Melbourne', 10, 3),
        //     new City('Adelaide', 11, 3),
        //     new City('Perth', 12, 3),
        // ];
    }

    public getStateList() {
        return [
            new State('Tamilnadu', 1),
            new State('Karnataka', 2),
            new State('Kerala', 3),
        ];
    }

}
