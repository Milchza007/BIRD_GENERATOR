const BIRDC = document.querySelector("#BIRDC");
const bird = document.querySelector("#b");

const bMessage = () => {
    const total = Number(BIRDC.value);
    let i = 1;
    const batchSize = 100;

    bird.innerHTML = "";

    const fragment = document.createDocumentFragment();

    const addBatch = () => {
        const end = Math.min(i + batchSize - 1, total);

        for (; i <= end; i++) {
            let txt = document.createElement("p");
            txt.textContent = `${ i }. BIRD เบิร์ด`;
            fragment.appendChild(txt);
        }

        bird.appendChild(fragment);

        if (i <= total) {
            setTimeout(addBatch, 0); // เรียกรอบต่อไป
        }
    };

    addBatch();
}

const cMessage = () => {
    bird.innerHTML = "";
}