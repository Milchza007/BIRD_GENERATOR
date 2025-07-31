const BIRDC = document.querySelector("#BIRDC");
const bird = document.querySelector("#b");

const bMessage = () => {
    for (let i = 1; i <= BIRDC.value; i++) {
        let txt = document.createElement("p");
        bird.appendChild(txt);
        txt.textContent = `${ i }. BIRD เบิร์ด`;
    }
}