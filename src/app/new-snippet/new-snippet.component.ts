import { Component } from '@angular/core';
import { CodeEditorComponent } from '../features/code-editor/code-editor.component';

@Component({
  selector: 'app-new-snippet',
  standalone: true,
  imports: [ CodeEditorComponent],
  templateUrl: './new-snippet.component.html',
  styleUrl: './new-snippet.component.css'
})
export class NewSnippetComponent {

}
