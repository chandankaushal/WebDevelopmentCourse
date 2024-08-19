let inp = document.querySelector('input');

inp.addEventListener("keydown",function(el)
{
   let h2heading = document.querySelector('.h2heading')
    

    const allowedKeys = /^[a-zA-Z\s]$/;

    if(!(allowedKeys.test(el.key)&& !(el.key === 'Backspace' || el.key === 'Tab')))
    {
        el.preventDefault();

    }
    
})