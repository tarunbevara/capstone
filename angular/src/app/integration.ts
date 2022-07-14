import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Router } from "@angular/router";
import { BehaviorSubject, Subject } from "rxjs";
export class User {
    constructor(
        public username: string,
        public password: string,
        public accesstoken: string
    ) { }

}
@Injectable()
export class Integration {
    user = new BehaviorSubject<User>(null!);
    constructor(private http: HttpClient, private route: Router) { }
    postdata: any;

    chartsdata: any;
    postdata_flask(link: string, userdata: { username: string; password: string; }) {
        this.http.post(link, userdata).subscribe(data => {
            this.postdata = data;
            if (this.postdata.message != undefined) {
                alert(this.postdata.message);
            }
            else {
                const user = new User(userdata.username, userdata.password, this.postdata.access_token)
                this.user.next(user);
                localStorage.setItem('userData', JSON.stringify(user));
                this.route.navigate(["/dashboard"]);
                console.log(user);

            }
        },
            error => {
                console.log(error);
                alert(error.error.message || error.error.description);
            }

        )

    }
    
}