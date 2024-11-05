//--------------------ref section
let ref_section=document.getElementById('ref')
let ref_btn=document.getElementById('ref_btn')

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
})

//--------------------exp section-------------------------

let exp_section=document.getElementById('experience')
let exp_btn =document.getElementById('exp_btn')

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
})

//---------------------print button 
let print_btn=document.getElementById('print_btn')

print_btn?.addEventListener('click', ()=>{
    window.print()
})