import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import  'rxjs/add/operator/toPromise'
import { MdSnackBar } from '@angular/material'
import { Subject } from 'rxjs/subject'
@Injectable()
export class WebService {
    base_url = 'http://localhost:64285/api';

    private messageStore: any[];
    private messageSubject = new Subject(); 
    messages = this.messageSubject.asObservable();

    constructor(private http: Http, private snb:MdSnackBar) {
        this.getMessages();
    }
    getMessages(owner:any)
    {
            owner = owner ? '/' + owner : ''; 
            this.http.get(this.base_url + '/messages' + owner).subscribe(response => {
                this.messageStore = response.json();
                this.messageSubject.next(this.messageStore);
            }, error=> {
                this.handle_error("Unable to get messages");
            });      
    }

    async post(message:any)
    {
            this.http.post(this.base_url + '/messages', message).subscribe(response => {
                this.messageStore.push(response.json());
                this.messageSubject.next(this.messageStore);
            }, error => {
                this.handle_error("Unable to post messages");
            });     
    }

    private handle_error(error_message:any) {
        console.log(error_message);
        this.snb.open(error_message, 'close', {duration: 2000});
    }
}