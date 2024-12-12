import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { PRIMARY_OUTLET } from '@angular/router';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-sql'; 

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent {
  sqlCode:string = '';
  highligtedCode:string = "";

  onCodeChange(event:Event,highligtedCode:string):void {
    let element = event.target as HTMLElement;
    this.highligtedCode = element.innerText || '';
    console.log(this.highligtedCode);
    this.highlightCode();
  }
  highlightCode() :void {
    let text = Prism.highlight(
      this.sqlCode,
      Prism.languages["sql"],
      'sql'
    );
    console.log("text",text);
    this.highligtedCode = text;
    // let element = document.querySelector("code.language-sql");
    // if(element != null) {
    //   let text = Prism.highlight(
    //     this.highligtedCode,
    //     Prism.languages["sql"],
    //     'sql',
    //   )
    //   console.log("highlight",text);
    //   // console.log("highlight code",text);
    //   if(text && text.includes('<span class="token')) {
    //     console.log("heree");
    //     console.log(text);
    //     this.highligtedCode = text;
    //     // element.innerHTML = text;
    //     // element.appendChild(text);
    //     return 1;
    //   }

    // }
    // return 0;      
  }
}
