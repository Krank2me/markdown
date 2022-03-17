import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MarkdownParserService } from '../services/markdown-parser.service';
import '@github/markdown-toolbar-element';
import { Note } from './markdown-editor.model';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
})
export class MarkdownEditorComponent implements OnInit {
  previewContentMD: string = '';
  previewContentHTML: string = '';
  toogleEditPreview: boolean = false;
  contentNote: string = '';
  notes: Note[] = [];
  noteObj!: Note ;
  prueba = '';

  @Output() addNote = new EventEmitter<Note[]>()

  constructor(private fb: FormBuilder, private md: MarkdownParserService) {}

  editorForm: FormGroup = this.fb.group({
    description: [''],
  });

  ngOnInit(): void {}

  preview() {
    this.previewContentMD = this.editorForm.get('description')?.value;
    this.previewContentHTML = this.md.convert(this.previewContentMD); // parser
    this.toogleEditPreview = !this.toogleEditPreview;
  }

  saveNote() {
    this.contentNote = this.previewContentHTML;
    this.noteObj = {
      createAt: Date.now(),
      note: this.contentNote
    };
    this.notes.push(this.noteObj);
    this.addNote.emit(this.notes);
  }
}
