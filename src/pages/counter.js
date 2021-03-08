
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