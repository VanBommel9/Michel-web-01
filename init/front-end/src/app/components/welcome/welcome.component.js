
import template from "../welcome/welcome.component.html";
import { Component } from "../../scripts/component";

import "./welcome.component.scss";
 
  export class  WelcomeComponent extends Component{
    constructor(){
      super(template)
      
      
    }
    
    

    init(){
      let form = document.querySelector("form.form-signin");

      form.addEventListener("submit", (event) => {
      
     
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          let name = event.srcElement.querySelector("#nickname").value;
          let size = parseInt(event.srcElement.querySelector("#size").value);

          this._startGame(name, size);
        }
      
      },false
    );

    return this;
    }

    _startGame(name,size){
      this.name = name;
      this.size = size;
      let gamePage = "./#game";
    
      window.location = `${gamePage}?name=${name}&size=${size}`;
    }
  }

  
  

