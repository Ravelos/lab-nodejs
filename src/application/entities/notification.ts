/* eslint-disable prettier/prettier */

export class Notificacion {
  private content: string;
  private category: string;

  constructor() {
    this.content = ''; 
    }

  public setContent(content: string) {
    if(content.length <5){
        throw new Error;
    }
    this.content = content;
  }

}


