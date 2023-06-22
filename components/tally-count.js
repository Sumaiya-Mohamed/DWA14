import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class tallyCount extends LitElement{
      static styles = css `
        :root {
    --color-green: #31c48d;
    --color-white: #ffffff;
    --color-dark-grey: #33333d;
    --color-medium-grey: #424250;
    --color-light-grey: #d2d6dc;
}


* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background: var(--color-medium-grey);
    color: var(--color-white);
    display: flex;
    flex-direction: column;
}

.header{
    text-align: center;
    background-color: rgb(236, 199, 205);
   
}
 header h1{
    font-size: 3.5rem;
    color:  var(--color-dark-grey);
 }

 .footer{
    font-size: 1.3rem;
    text-align: center;
    background: var(--color-dark-grey);
    color: var(--color-light-grey);
    justify-self: flex-end;
 }

 .footer a {
    color: var(--color-white);
 }
/* controls */

.controls{
    background: yellow;
    display: flex;
    justify-content: space-around;
    color: black;
}








/* counter */
.counter{
    background: var(--color-dark-grey);
}

.counter_value{
    width: 100%;
    height: 18rem;
    text-align: center;
    font-size: 5rem;
    font-weight: 900;
    background: none; /* This makes the background see through */
    color: var(--color-white);
    border-width: 0;
    border-bottom: 1px solid var(--color-light-grey);
}

.counter_button{
    background: none;
    width: 50%;
    border-style: groove;
    border-color: #d2d6dc;
    border-width: 5px;
    color: var(--color-dark-grey);
    font-size: 5rem;
    height: 10rem;
    transition: transform 0.3s;
    transform: translateY(0);
    background-color: rgb(236, 199, 205);

}

.counter_button:active{
  background: var(--color-medium-grey);
  transform: translateY(2%);
}

.counter_button:disabled {
   opacity: 0.2;
}
.counter_actions{
    display: flex;
}

.counter_button_first{
    border-right: 1px solid var(--color-light-grey);
}

.message{
   text-align: center;
   height: 50px;
   justify-content: center;
}

.reset_button{
   background: none;
   width: 10%;
   border-style: groove;
   border-color: #d2d6dc;
   border-width: 5px;
   color: var(--color-dark-grey);
   font-size: 2rem;
   height: 10rem;
   transition: transform 0.3s;
   transform: translateY(0);
   background-color: rgb(236, 199, 205);
}
      `
     
     static properties = {
          count: {type: Number},
          maxCount: {type: Number}
     }

     constructor(){
        super(),
        this.count = 0;
        this.maxCount = 15;
     }

     increment(){
        if(this.count < this.maxCount){
            this.count++;
        }
     }

     decrement(){
      if(this.count >= -5){
         this.count--;
      }
     }

     reset(){
      this.count = 0;
     }

     render(){
      let message = '';
      if(this.count === -5){
         message = 'Minimum reached';
      }else if(this.count === this.maxCount){
         message = 'Maximum reached';
      }else{
         message = 'Normal';
      }


      const isMaxCountReached = this.count === this.maxCount;
      const isMinCountReached = this.count === -5;

     return html`
   <header class="header">
        <h1>Tally Count</h1>
   </header>
     
    <main class="counter">
        <div class="counter_value">${this.count}</div>
      <div class="counter_actions">
        <button data-key="subtract" class="counter_button" 
        @click = ${this.increment} ?disabled =${isMaxCountReached}
        >+</button>
        <button class="reset_button" @click = ${this.reset}>Reset</button>
        <button data-key="add" class="counter_button  counter_button_first"
        @click = ${this.decrement} ?disabled =${isMinCountReached}
        >-</button>
       
       </div> 
       <br>
       <div class="message">${message}</div>

    </main>
    <footer class="footer">
      <p>Inspired by <a href="https://tallycount.app/">Tally Count</a>. Note that this is merely a practice project for learning JavaScript</p>
    </footer>
     `
   }
}

 customElements.define('tally-count', tallyCount)