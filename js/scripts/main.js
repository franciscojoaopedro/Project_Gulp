var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView:5,
    direction: 'vertical',
    spaceBetween:20,
    watchSlidesProgress:true
});

var slide_hero = new Swiper(".slide-principal", {
  effect: "fade",
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  }
});

const btnOpenModal = document.querySelector(".js-open-modal");
const jsClose = document.querySelector(".js-close");

const abriModal = (event) => {
  event.preventDefault();
  let html = document.documentElement;
  html.classList.add("show-modal");
};

const fecharModal = () => {
  let html = document.documentElement;
  html.classList.remove("show-modal");
};
btnOpenModal.addEventListener('click',abriModal)

jsClose.addEventListener('click',fecharModal)

const allfilter = document.querySelectorAll(".js-nav-game li a");
const tabPane = document.querySelectorAll(".tab-pane-games");
allfilter.forEach((filter,index)=>{
  filter.addEventListener('click',(event)=>{
    event.preventDefault();

    allfilter.forEach(item=>item.classList.remove('active'));

    tabPane.forEach(tab=>tab.classList.remove('active'))
    tabPane[index].classList.add('active');

    filter.classList.add('active');
  })

})