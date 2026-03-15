// Read More
const btn = document.querySelector(".read_more");
const moreText = document.querySelector(".more_text");

btn.addEventListener("click", function(e){
    e.preventDefault();

    moreText.classList.toggle("active");

    if(moreText.classList.contains("active")){
        btn.textContent = "- Show less";
    }else{
        btn.textContent = "- Continue reading";
    }
});


// Radio Boxes for support
const boxes = document.querySelectorAll(".support_box");

boxes.forEach(box => {

    box.addEventListener("click", function(e){

        // prevent clicking radio from toggling box repeatedly
        if(e.target.tagName === "INPUT") return;

        boxes.forEach(b => b.classList.remove("active"));

        box.classList.add("active");

    });

});