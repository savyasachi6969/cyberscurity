import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  email: string = '';
  password: string = '';
  handleClick(){
    console.log(this.email)
    console.log(this.password)
    alert(this.email)
  }
   

  

}

