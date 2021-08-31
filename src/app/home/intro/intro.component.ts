import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  languages = [ 
    "Arabic", 
    "French", 
    "Spanish", 
    "Japanese", 
    "Russian", 
    "Turkish", 
    "Portuguese", 
    "Korean", 
    "Italian", 
    "German", 
    "Dutch",
    "Mandarin",
    "Swedish",
    "Icelandic",
    "Thai",
    "Vietnamese",
    "Polish"
  ]
  language: string = "Arabic";
  lang = document.querySelector('#lang')
  constructor() { }

  myTimer() {
    //console.log("here")
    this.languages.forEach((l, i) => {
      setTimeout(() => {
        this.language = l
      }, i * 1500);
    });
  }

  ngOnInit(): void {
    //setInterval(this.myTimer(), 1000);
    this.myTimer()
  }

}
