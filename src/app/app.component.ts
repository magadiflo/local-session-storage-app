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
    /**
     * * Forma nativa de trabajar con local/session Storage
     * * **************************************************
     * * Forma tradicional de trabajar con un localStorage o sessionStorage, usando la API nativa de JavaScript.
     * * Nos ofrece métodos ya definidos como el .setItem(...) o getItem(...)
     */
    localStorage.setItem('form', JSON.stringify(this.miFormulario.value));
    const formStorage = JSON.parse(localStorage.getItem('form')!) as IForm;
    this.formDataInStorage = formStorage;
  }

}
