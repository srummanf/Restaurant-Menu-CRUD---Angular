import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.scss'],
})
export class MenuCreateComponent implements OnInit {
  submitted = false;
  MenuForm: FormGroup;
  MenuProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }
  ngOnInit() { }
  mainForm() {
    this.MenuForm = this.fb.group({
      item: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      price: ['', [Validators.required]],
      cuisine: ['', [Validators.required]]
    });
  }
  
  // Getter to access form control
  get myForm() {
    return this.MenuForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.MenuForm.valid) {
      return false;
    } else {
      return this.apiService.createMenu(this.MenuForm.value).subscribe({
        complete: () => {
          console.log('Menu successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/Menus-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
