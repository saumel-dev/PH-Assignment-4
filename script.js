function selectedBtn(id) {
    const allButtons = document.querySelectorAll('.btns button');

    allButtons.forEach(button => {
        button.classList.remove('bg-[#3b82f6FF]', 'text-white');
        button.classList.add('shadow', 'text-[#64748bFF]');
    })
    
    const selected = document.getElementById(id);
    selected.classList.add('bg-[#3b82f6FF]', 'text-white');
    selected.classList.remove('shadow', 'text-[#64748bFF]');
}