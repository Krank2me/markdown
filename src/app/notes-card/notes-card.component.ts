import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../markdown-editor/markdown-editor.model';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss']
})
export class NotesCardComponent implements OnInit {

  notes: Note[] = [];
  isDisplay = false;

  constructor() { }

  ngOnInit(): void {
  }

  addNewNote(event: any) {
    this.notes = [...event];
  }

  get icon() {
    return this.isDisplay ? 'fa-minus' : 'fa-plus';
  }

  show() {
    this.isDisplay = !this.isDisplay;
  }

}
