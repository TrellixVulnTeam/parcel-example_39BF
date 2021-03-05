// import { fromEvent } from "rxjs";

export const CounterPage = (render) => {

    let count = 0;

  const template = /*html*/ `
    <h1>
        Counter
    </h1>
    <span class="value" id="value"> 0 </span>
    <div class="button-container" id="buttons">
        <button class="btn-decrease">Decrease</button>
        <button class="btn-reset">Reset</button>
        <button class="btn-increase">Increase</button>
    </div>
       
  `;
  render(template);

const dbtn = document.querySelector(".btn-decrease");
const rbtn = document.querySelector(".btn-reset");
const ibtn = document.querySelector(".btn-increase");

const value = document.getElementById("value");

dbtn.addEventListener("click", () => {
    count--;
    if (count<0)
    {
        value.style.color="rgb(117, 0, 0)";
    }
    value.innerHTML=count;
    
});

rbtn.addEventListener("click", () => {
    count=0;
    value.style.color="#463F3A";
    value.innerHTML=count;
    
});

ibtn.addEventListener("click", () => {
    count++;
    if (count>0)
    {
        value.style.color="rgb(2, 75, 2)";
    }
    value.innerHTML=count;
    
});

};

// export const CounterPage = (render) => {

//     let count = 0;

//     const template = /*html*/ `
//         <h1>Counter</h1>
//         <div>${count}</div>
//         <button class="addButton">+</button>
//         <button class="subtractButton">-</button>
//     `
//     render(template);

//     return () => {
//         const add = document.querySelector('.addButton')
//         const subtract = document.querySelector('.subtractButton')

//         const subtractClick$ = fromEvent(subtract,'click');
//         const addClick$ = fromEvent(add,'click');

//         console.log(add,subtract)

//         add.addEventListener('click',() => console.log('YEEE'))

//         subtractClick$.subscribe(el => {
//             console.log('Hey')
//             count--;
//             render(template);
//         })

//         addClick$.subscribe(el => {
//             console.log('Hey2')
//             count++;
//             render(template);
//         })
//     }

// }

// export class CounterPage {
//     count = 0;

//     template = `
//         <h1>Counter</h1>
//         <div>${this.count}</div>
//         <button class="addButton">+</button>
//         <button class="subtractButton">-</button>
//     `

//     addButton = null;
//     subtractButton = null;
//     subscriptions = [];
//     renderer = null

//     constructor(renderer) {
//         this.renderer = renderer
//         this.renderer(this.template)
//         this.getButtonElements();
//         this.setupEvents();

//     }

//     getButtonElements() {
//         this.add = document.querySelector('.addButton')
//         this.subtract = document.querySelector('.subtractButton')
//     }

//     setupEvents() {
//         const subtractClick$ = fromEvent(this.subtract,'click').subscribe(el => {
//             this.count--;
//             this.renderer(this.template);
//         });
//         const addClick$ = fromEvent(this.add,'click').subscribe(el => {
//             console.log(el)
//             this.count++;
//             this.renderer(this.template);
//         });
//         this.subscriptions = [subtractClick$,addClick$]
//     }

//     destroy() {
//         this.subscriptions.forEach(sub => sub.unsubscribe())
//     }

// }
