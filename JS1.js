const slidesData = [
    {
        src:"img/img1.jpg",
        title:"在藏东南遍地都是 “乔戈里峰”",
        desc:"卡甲乔是藏东南地区一座很典型的金字塔峰，有利剑般的峰顶，" +
            "等边三角形般的外形，海拔6447米，" +
            "比欧洲阿尔卑斯山的著名金字塔峰——马特洪峰还要高近2000米，" +
            "在山形、气势上更胜马特洪峰一筹。更为奇特的是，卡甲乔峰的旁边，" +
            "还有一座小型的金字塔峰——马纳卓（海拔6264米）",
    },
    {
        src:"img/img2.jpg",
        title: "加舒尔布鲁木Ⅰ和Ⅱ峰",
        desc:"巴尔托洛冰川由多条冰川汇聚而成，" +
            "长60余公里，是极地以外全世界最长的冰川之一，" +
            "周围还屹立着乔戈里峰（海拔8611米）、" +
            "布洛阿特峰（海拔8051米）等众多世界著名高山。"
    },
    {
        src:"img/img3.jpg",
        title: "天上的阿里",
        desc:"位于喜马拉雅山脉西段的边境小县普兰，" +
            "因为被众多的雪山环绕被称为“雪围”。这里冰川资源非常丰富，" +
            "从高空俯瞰景致壮观——挺立的角峰、柔美的刃脊、" +
            "奔涌而下的冰舌和冰川末端的冰碛湖，构成一种气势磅磗的雄浑之美。" +
            "这样的景观在喜马拉雅山脉有很多，景致不输名声在外的珠穆朗玛峰。"
    },
    {
        src:"img/img4.jpg",
        title:"萨普冰川",
        desc: "念青唐古拉山脉东段位于昌都、林芝和那曲交界地区，" +
            "向东南继续延伸，与横断山脉的伯舒拉岭相接。隐秘的群峰中，" +
            "萨普神山如皇冠上的那颗宝石，日照金山，神秘瑰丽。",
    },
    {
        src:"img/img5.jpg",
        title:"寻访滇西北的湖泊",
        desc:"无底湖（当地藏语称为沃迪错），位于云南迪庆藏族" +
            "自治州香格里拉市格咱乡，是中甸七大雪山之一迪隆雪山数十个湖泊中的一个。" +
            "这些湖泊大都水质清澈，与草甸、森林、雪山、飞瀑、湿地、花卉等相伴，共同绘就了一幅幅绝妙的人间奇观。"
    },
    {
        src:"img/img6.jpg",
        title:"寻味重庆最美“第一山”——江津四面山",
        desc: "江津四面山在重庆风景名胜评美中，得票最多，被列为重庆最美第一山。" +
            "看了《重庆日报》刊载的评选结果，喜如泉涌，也感概万千。我是江津人，家乡的山被评为最美的第一山，怎会不高兴。" +
            "感概的是江津人保护和打造四面山几十年的努力，终于得到了优厚的回报。"
    }
];

const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselContainer = document.getElementById("carousel");
let currentIndex = 0;
let intervalId;

function initCarousel() {
   for(let i = 0;i < slidesData.length; i++){
       const slide = slidesData[i];
       const slideDiv = document.createElement("div");
       slideDiv.classList.add("carousel-slide");
       slideDiv.innerHTML = `
          <img src="${slide.src}" alt="${slide.title}"> 
           <div class="slide-content">
           <h2 class="slide-title">${slide.title}</h2>
           <p class="slide-desc">${slide.desc}</p>
           </div>`;
       track.appendChild(slideDiv);
   }
}

function updateSlidePosition(){
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide(){
    if(currentIndex === slidesData.length-1){
        currentIndex = 0;
    }else{
        currentIndex = currentIndex+1;
    }
    updateSlidePosition();
}

function prevSlide(){
    if(currentIndex === 0){
        currentIndex = slidesData.length - 1;
    }else{
        currentIndex = currentIndex - 1;
    }
    updateSlidePosition();
}

function startAutoPlay()
{
    intervalId = setInterval(nextSlide, 5000);
}
function stopAutoPlay(){
    clearInterval(intervalId);
}
// 点击按钮
nextBtn.addEventListener("click", function(){
    stopAutoPlay()
    nextSlide();
});
prevBtn.addEventListener("click", function(){
    stopAutoPlay();
    prevSlide();
})
// 鼠标悬停
carouselContainer.addEventListener("mouseenter", stopAutoPlay);
carouselContainer.addEventListener("mouseleave", startAutoPlay);

// 3d卡片


initCarousel();
startAutoPlay();