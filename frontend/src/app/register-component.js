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
const forms_1 = require('@angular/forms');
let RegisterComponent = class RegisterComponent {
    constructor(fb) {
        this.fb = fb;
        this.form = fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: matchingFields("password", "confirmPassword") });
    }
    onSubmit() {
        console.log(this.form.errors);
    }
    isValid(controlName) {
        return this.form.controls[controlName].invalid && this.form.controls[controlName].touched;
    }
};
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'register',
        templateUrl: 'register-component.html',
        styles: [`
    .error {
            background-color: #fff0f0
    } 
  `]
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
function matchingFields(field1, field2) {
    return form => {
        if (form.controls[field1].value !== form.controls[field2].value)
            return { misMatchFields: true };
    };
}
//# sourceMappingURL=register-component.js.map