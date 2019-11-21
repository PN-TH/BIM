import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Necklace } from '../shared/necklace';
import { NECKLACES, NECKLACESBLUE, NECKLACESPURPLE } from '../shared/necklace-mock';

@Component({
  selector: 'app-necklace-gen',
  templateUrl: './necklace-gen.component.html',
  styleUrls: ['./necklace-gen.component.css']
})
export class NecklaceGenComponent implements OnInit {
  necklacesList: Necklace[] = NECKLACES;
  @Output() necklaceEvent = new EventEmitter<Necklace>();

  constructor() { }

  ngOnInit() {
  }

  onNecklaceClicked(necklace: Necklace) {
    this.necklaceEvent.emit(necklace);
  }
  onColorClickedRed(){
    this.necklacesList = NECKLACES;
  }
  onColorClickedBlue(){
    this.necklacesList = NECKLACESBLUE;
  }
  onColorClickedPurple(){
    this.necklacesList = NECKLACESPURPLE;
  }
}
