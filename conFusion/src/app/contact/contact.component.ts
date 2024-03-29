import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import { flyInOut } from '../animations/app.animation';

import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm!: FormGroup;
  feedback!: Feedback;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective;

  errorMessage!: string;
  feedbackConfirm!: Feedback;
  submitFlag = false;
  confirmFlag = false;

  visibility = 'shown';

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
      'maxlength': 'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    },
  };

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe({
        next: data => this.onValueChanged(data),
      error: errmess => this.errorMessage = errmess});

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {
    this.submitFlag = true;
    this.feedback = this.feedbackForm.value;
    this.feedbackService.submitFeedback(this.feedback).subscribe({
      next: confirm => { this.feedbackConfirm = confirm; this.confirmFlag = true;},
      error: errmess => { this.feedback = null as any; this.feedbackConfirm = null as any; this.errorMessage = <any>errmess; }
    });
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });

    setTimeout(() => {this.submitFlag = false; this.confirmFlag = false; }, 5000);
    this.feedbackFormDirective.resetForm();
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
   
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  

}


