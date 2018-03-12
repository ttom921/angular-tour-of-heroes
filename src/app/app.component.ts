import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

<<<<<<< HEAD
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
=======

>>>>>>> cbccfe241967e093a4628c766483901d5225cd23

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
<<<<<<< HEAD
  heroes = HEROES;
=======
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
>>>>>>> cbccfe241967e093a4628c766483901d5225cd23
}




