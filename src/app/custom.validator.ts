import { FormControl, FormGroup } from '@angular/forms';

export function passwordMatchValidator(pwdSet:FormGroup){
    var password1 = pwdSet.controls.passwordR.value;
    var password2 = pwdSet.controls.rePasswordR.value;
    if (!(password1 === password2)) return {'notmatch': true};
    return null;
}