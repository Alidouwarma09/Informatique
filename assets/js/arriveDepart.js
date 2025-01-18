const btn1= document.getElementById('btn_form1');
const btn2= document.getElementById('btn_form2');
const form1= document.getElementById('form-arrive');
const form2= document.getElementById('form-depart');
btn1.addEventListener('click',()=>{
    form1.style.display='block';
    form2.style.display='none';
});
btn2.addEventListener('click',()=>{
    form2.style.display='block';
    form1.style.display='none';
})