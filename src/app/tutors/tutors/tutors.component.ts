import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent implements OnInit {
  tutors = [
    { avatar: "assets/female.svg", country: "Morocco", flag: "https://www.countryflags.io/ma/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat."},
    { avatar: "assets/male.svg", country: "Japan", flag: "https://www.countryflags.io/jp/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat."},
    { avatar: "assets/female.svg", country: "France", flag: "https://www.countryflags.io/fr/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat."},
    { avatar: "assets/male.svg", country: "Turkey", flag: "https://www.countryflags.io/tr/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat."},
    { avatar: "assets/female.svg", country: "Argentina", flag: "https://www.countryflags.io/ar/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat."},
    { avatar: "assets/female.svg", country: "Brazil", flag: "https://www.countryflags.io/br/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat."},
    { avatar: "assets/male.svg", country: "Switzerland", flag: "https://www.countryflags.io/ch/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat."},
    { avatar: "assets/male.svg", country: "Ivory Coast", flag: "https://www.countryflags.io/ci/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat."},
    { avatar: "assets/male.svg", country: "Chile", flag: "https://www.countryflags.io/cl/flat/64.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis lobortis urna nec placerat."},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
