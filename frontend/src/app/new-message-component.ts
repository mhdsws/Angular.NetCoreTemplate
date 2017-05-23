import { Component } from '@angular/core'
import { WebService } from './web.service'

@Component({
    selector: 'new-message',
    template: ` 
    <md-card>
        <md-card-content>
            <md-input-container>
                <input [(ngModel)]="message.owner" mdInput placeholder="Owner">
            </md-input-container>
            <md-input-container>
                <textarea mdInput [(ngModel)]="message.text" placeholder="Message Text"></textarea>
            </md-input-container>
            <md-card-actions>
                <button (click)="post()" md-button color="primary">Post it!</button>
            </md-card-actions>
        </md-card-content>
    </md-card>
    `
})
export class NewMessageComponent {
    constructor(private webService: WebService) {} 
    message = {
        owner : "",
        message: ""
    };
    post() {
        this.webService.post(this.message);
    }
}