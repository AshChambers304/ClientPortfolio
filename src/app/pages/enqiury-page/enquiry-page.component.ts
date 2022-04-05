import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormsService } from 'src/app/services/netlify-forms.service';
import { fade } from 'src/app/shared/animations/fade';

@Component({
  selector: 'app-enquiry-page',
  templateUrl: './enquiry-page.component.html',
  styleUrls: ['./enquiry-page.component.scss'],
  animations: [fade],
})
export class EnquiryPageComponent implements OnInit {
  enquiryForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    contactNumber: ['', Validators.pattern('^[0-9]*$')],
    howDidYouHearAboutUs: ['', Validators.required],
    projects: new FormArray([], Validators.required),
  });

  projects = [
    { label: 'Materials Sourcing', value: 'materials-sourcing' },
    { label: 'Commercial Styling', value: 'commercial-styling' },
    { label: 'Design Consultancy', value: 'design-consultancy' },
    { label: 'Workshop Project Day', value: 'workshop-project-day' },
  ];

  constructor(
    private fb: FormBuilder,
    private formService: NetlifyFormsService,
    private router: Router
  ) {}

  errorMsg = '';

  public onCheckChange(event): void {
    const formArray: FormArray = this.enquiryForm.get('projects') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i = 0;
      formArray.controls.forEach((control: FormControl) => {
        if (control.value === event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  public closeError(): void {
    this.errorMsg = '';
  }

  public onSubmit(): void {
    if (this.enquiryForm.valid) {
      const formArray: FormArray = this.enquiryForm.get(
        'projects'
      ) as FormArray;
      let projects = formArray.value.join(' & ') as string;
      projects = projects.replace(new RegExp('-', 'g'), ' ');
      const payload = this.enquiryForm.value;
      payload.projects = projects;
      this.formService.submitEnquiry(payload).subscribe(
        () => {
          this.enquiryForm.reset();
          this.router.navigateByUrl('/enquiry-success');
        },
        (err) => {
          this.errorMsg = err;
        }
      );
    } else {
      this.enquiryForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {}
}
