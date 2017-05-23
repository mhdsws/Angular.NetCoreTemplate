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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const http_1 = require('@angular/http');
const core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
const material_1 = require('@angular/material');
const subject_1 = require('rxjs/subject');
let WebService = class WebService {
    constructor(http, snb) {
        this.http = http;
        this.snb = snb;
        this.base_url = 'http://localhost:64285/api';
        this.messageSubject = new subject_1.Subject();
        this.messages = this.messageSubject.asObservable();
        this.getMessages();
    }
    getMessages(owner) {
        owner = owner ? '/' + owner : '';
        this.http.get(this.base_url + '/messages' + owner).subscribe(response => {
            this.messageStore = response.json();
            this.messageSubject.next(this.messageStore);
        }, error => {
            this.handle_error("Unable to get messages");
        });
    }
    post(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this.http.post(this.base_url + '/messages', message).subscribe(response => {
                this.messageStore.push(response.json());
                this.messageSubject.next(this.messageStore);
            }, error => {
                this.handle_error("Unable to post messages");
            });
        });
    }
    handle_error(error_message) {
        console.log(error_message);
        this.snb.open(error_message, 'close', { duration: 2000 });
    }
};
WebService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, material_1.MdSnackBar])
], WebService);
exports.WebService = WebService;
//# sourceMappingURL=web.service.js.map