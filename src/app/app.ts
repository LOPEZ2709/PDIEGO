import { Component, signal } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Services } from './components/services/services';



@Component({
  selector: 'app-root',
  imports: [
    About,
    Contact,
    Footer,
    Hero,
    Navbar,
    Projects,
    Services],
      
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('PDIEGO');
}
