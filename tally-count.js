import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class tallyCount extends LitElement{
      static styles = css `
        :root {
    --color-blue: #31a2c4;
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
    background-color: var(--color-blue)
   
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
    color: var(--color-blue);
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
   
}

.counter_button{
    background: none;
    width: 35%;
    color: var(--color-dark-grey);
    font-size: 4rem;
    transition: transform 0.3s;
    transform: translateY(0);

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
    justify-content: space-between;
    width: 100%;
}



.message{
   text-align: center;
   height: 50px;
   justify-content: center;
}

.reset_button{
   background: none;
   width: 30%;
   color: var(--color-dark-grey);
   font-size: 1.5rem;
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
        this.maxCount = 30;
     }

     increment(){ //This method increments the value shown when the "+" button is clicked.
        if(this.count < this.maxCount){ 
            this.count++;
        }
     }

     decrement(){ //This method decrements the value shown when the "-" button is clicked.
      if(this.count >= -5){
         this.count--;
      }
     }

     reset(){
      this.count = 0;
     }

     render(){// Messages that are displayed based on the value of the number displayed.
      let message = '';
      if(this.count === -5){
         message = 'Minimum reached';
      }else if(this.count === this.maxCount){
         message = 'Maximum reached';
      }else{
         message = '';
      }


      const isMaxCountReached = this.count === this.maxCount;
      const isMinCountReached = this.count === 0;

     return html`
   <header class="header">
        <h1>Tally Count</h1>
   </header>
     
    <main class="counter">
        <div class="counter_value">${this.count}</div>
      <div class="counter_actions">
       <sl-button data-key="add" class="counter_button counter_button_first" variant="primary" outline pill
        @click = ${this.increment} ?disabled =${isMaxCountReached}
        >+</sl-button>
       
        <sl-button data-reset class="counter_button" variant="primary" 
        @click = ${this.reset}
        >Reset</sl-button>
        
        <sl-button  data-key="subtract" class="counter_button" id="sl__button" variant="primary" outline pill
        @click = ${this.decrement} ?disabled =${isMinCountReached}
        >-</sl-button>
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