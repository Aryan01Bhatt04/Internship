let initial = document.querySelector('#initial');
let final = null;
try
{
    initial.addEventListener('click',(event) => {
    document.querySelector('#heading').innerText = "Now this is a textarea";
    final = document.createElement('textarea');
    final.className = "final";
    final.value = initial.innerHTML;
    final.addEventListener('keydown',(event) => {
        if(event.key == 'Enter'){
            event.preventDefault
            this.blur();
            final.replaceWith(initial);
            initial.innerHTML = final.value;
        }
    });
    final.onblur = () => {
        final.replaceWith(initial);
        initial.innerHTML = final.value;
        document.querySelector('#heading').innerText = "Now this is a div";
    }
    initial.replaceWith(final);
});
}
catch(error){
    console.error(error);
}