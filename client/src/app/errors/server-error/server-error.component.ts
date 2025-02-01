import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  standalone: true,
  imports: [],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.css'
})
export class ServerErrorComponent {
  error: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const errorString = navigation?.extras?.state?.['error'];

    if (errorString) { // Check if errorString exists
      try {
        this.error = JSON.parse(errorString); // Parse the string!
        console.log(this.error); // Now check the console
      } catch (e) {
        console.error("Error parsing error string:", e);
        this.error = { message: "An error occurred.", details: "Failed to parse error details." }; // Provide a fallback
      }
    } else {
        this.error = { message: "An error occurred.", details: "No error details provided." };
    }
  }
}
