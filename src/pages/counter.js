import { fromEvent } from "rxjs";
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

export class CounterPage {
    count = 0;

    template = `
        <h1>Counter</h1>
        <div>${this.count}</div>
        <button class="addButton">+</button>
        <button class="subtractButton">-</button>
    `

    addButton = null;
    subtractButton = null;
    subscriptions = [];
    renderer = null

    constructor(renderer) {
        this.renderer = renderer
        this.renderer(this.template)
        this.getButtonElements();
        this.setupEvents();

    }

    getButtonElements() {
        this.add = document.querySelector('.addButton')
        this.subtract = document.querySelector('.subtractButton')
    }

    setupEvents() {
        const subtractClick$ = fromEvent(this.subtract,'click').subscribe(el => {
            this.count--;
            this.renderer(this.template);
        });
        const addClick$ = fromEvent(this.add,'click').subscribe(el => {
            console.log(el)
            this.count++;
            this.renderer(this.template);
        });
        this.subscriptions = [subtractClick$,addClick$]
    }

    destroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe())
    }
    
}