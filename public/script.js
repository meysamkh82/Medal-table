let btnEdits = document.querySelectorAll('.btn-edits');
let btnMinus = document.querySelectorAll('.btn-minus');
let btnPlus = document.querySelectorAll('.btn-plus');

btnMinus.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log(btn.nextElementSibling.textContent);
        if(btn.nextElementSibling.textContent !== '0') {
            btn.nextElementSibling.textContent = btn.nextElementSibling.textContent - 1;
        }
        btn.parentElement.parentElement.lastElementChild.disabled =false;

        btn.parentElement.parentElement.classList.remove('bg-team')
        btn.parentElement.parentElement.classList.add('bg-select')
    })
});
btnPlus.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        console.log(btn.previousElementSibling.textContent)
        btn.previousElementSibling.textContent = parseInt(btn.previousElementSibling.textContent)+1;
        btn.parentElement.parentElement.lastElementChild.disabled =false;

        btn.parentElement.parentElement.classList.remove('bg-team')
        btn.parentElement.parentElement.classList.add('bg-select')
    })

})
btnEdits.forEach((btn)=>{
    btn.addEventListener('click',async ()=> {
        let gold = btn.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.textContent;
        let silver = btn.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.textContent;
        let bronze = btn.previousElementSibling.firstElementChild.nextElementSibling.textContent;
        let response = await fetch(`/edit/${btn.dataset.id}?gold=${gold}&silver=${silver}&bronze=${bronze}`, {
            method: "post"
        })
        btn.disabled =true;

        btn.parentElement.classList.remove('bg-select')
        btn.parentElement.classList.add('bg-change')
        setTimeout(function(){
            btn.parentElement.classList.remove('bg-change')
            btn.parentElement.classList.add('bg-team')
        },1400)
    })
})



