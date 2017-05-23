"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const web_service_1 = require('./web.service');
let NewMessageComponent = class NewMessageComponent {
    constructor(webService) {
        this.webService = webService;
        this.message = {
            owner: "",
            message: ""
        };
    }
    post() {
        this.webService.post(this.message);
    }
};
NewMessageComponent = __decorate([
    core_1.Component({
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
    }), 
    __metadata('design:paramtypes', [web_service_1.WebService])
], NewMessageComponent);
exports.NewMessageComponent = NewMessageComponent;
//# sourceMappingURL=new-message-component.js.map