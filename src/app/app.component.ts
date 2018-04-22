import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    url = 'https://html.art-craft.xyz/testServer/db.json';
    data;
    id;
    name;
    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getServer();
        // this.getData();
    }

    getServer() {
        this.http.get(this.url).subscribe(data => {
            console.log(data);
        });
    }

    getData() {
        this.http.get(this.url + '/somedata').subscribe(data => {
            this.data = data;
            console.log(data);
        });
    }
    pushData() {
        const _data = {
            'id': this.id,
            'name': this.name
        };
        return this.http.post(this.url + '/somedata', _data).subscribe(data => {
            console.log(data);
            this.getData();
        });
    }
}
