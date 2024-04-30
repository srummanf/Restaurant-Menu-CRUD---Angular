import { Menu } from './../../model/Menu';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss'],
})
export class MenuEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  MenuData: Menu[];
  MenuProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }
  ngOnInit() {
    this.updateMenu();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getMenu(id);
    this.editForm = this.fb.group({
      item: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      price: ['', [Validators.required]],
      cuisine: ['', [Validators.required]]
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getMenu(id) {
    this.apiService.getMenu(id).subscribe((data) => {
      this.editForm.setValue({
        name: data.data['name'],
        desc: data.data['desc'],
        price: data.data['price'],
        cuisine: data.data['cuisine'],
      });
    });
  }
  updateMenu() {
    this.editForm = this.fb.group({
      item: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      price: ['', [Validators.required]],
      cuisine: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateMenu(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/Menus-list');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
