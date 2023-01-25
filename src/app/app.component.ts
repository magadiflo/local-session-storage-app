import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface IForm {
  names: '';
  claim: '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  miFormulario: FormGroup = this._fb.nonNullable.group({
    names: [''],
    claim: ['']
  });

  formDataInStorage?: IForm;

  constructor(private _fb: FormBuilder) { }

  clickSend(): void {
    localStorage.setItem('form', JSON.stringify(this.miFormulario.value));
    const formStorage = localStorage.getItem('form');
  }

}
