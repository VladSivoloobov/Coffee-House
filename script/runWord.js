async function runWord(el, time, timeout = 0){
    let text = el.innerHTML;
    el.innerHTML = "";
    if(timeout)
        await new Promise(resolve => setTimeout(() => resolve(1), timeout))
    for(let i = 0; i < text.length; i++){
        await new Promise(resolve => setTimeout(() => resolve(1), time));
        el.innerHTML += text[i];
        console.log(text[i]);
    }
}