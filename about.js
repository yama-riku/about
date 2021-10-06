document.addEventListener('DOMContentLoaded',function(){
    //↑ドキュメント、イベントを追加してい、htmlが読み込まれたら機能がはたらくという意味。
    document.getElementById("menuicon").addEventListener("click",function(){
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
    })
    const targetElement = document.querySelectorAll(".animation");
        console.log("画面の高さ",window.innerHeight)
        document.addEventListener("scroll",function(){
            for(let i = 0;i < targetElement.length; i++) {
                const getElementDistance = targetElement[i].
                getBoundingClientRect().top + targetElement[i].clientHeight * .6
            if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
        
    }
})
});