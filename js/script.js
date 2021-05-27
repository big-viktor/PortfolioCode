const burger = document.getElementById("burger"); 
const menuContent = document.querySelector('.menu_content');


let burgers = false;

  const  addSelect = () =>{
    if(burgers){
        burgers = false;
        menuContent.classList.remove("_active");
    }else {
        burgers = true;
        menuContent.classList.add("_active");
    };
};
burger.addEventListener("click",addSelect);