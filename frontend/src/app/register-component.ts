import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register-component.html',
  styles: [`
    .error {
            background-color: #fff0f0
    } 
  `]
})
export class RegisterComponent  {
    form:any; 
    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            firstName: ['', Validators.required ],
            lastName: ['', Validators.required ],
            email: ['', Validators.required ],
            password: ['', Validators.required ],
            confirmPassword: ['', Validators.required ]
        },
        {validator: matchingFields("password", "confirmPassword")})
    }

    onSubmit() {
        console.log(this.form.errors);
    }

    isValid(controlName:string) {
            return this.form.controls[controlName].invalid && this.form.controls[controlName].touched;
    }   
}
function matchingFields(field1:string, field2:string)
{
    return form => {
        if(form.controls[field1].value !== form.controls[field2].value)
            return {misMatchFields: true};
    }
}