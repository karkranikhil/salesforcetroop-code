import { LightningElement } from "lwc";

export default class GetterDemo extends LightningElement {
  title = "This is a Getter power";
  selectedBtn = "OFF";
  get getTitle() {
    return this.title.toUpperCase();
  }

  get boxStatus() {
    return `box ${this.selectedBtn === 'ON' ? 'green':'red'}`
    // return this.selectedBtn === "ON" ? "box green" : "box red";
  }
  clickHandler(event) {
    console.log(event.currentTarget.innerText);
    this.selectedBtn = event.currentTarget.innerText;
  }
}
