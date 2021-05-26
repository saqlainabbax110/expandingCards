const pannels = document.querySelectorAll('.pannel');

pannels.forEach((pannel)=>{
    pannel.addEventListener('click', () =>{
        // console.log(123);
        removeClasslist()
        pannel.classList.add('active');
    });
});
function removeClasslist(){
    pannels.forEach((pannel)=>{
         pannel.classList.remove('active');
        });
    } 
