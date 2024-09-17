try{
    const balls = document.querySelectorAll(".ball");

    console.log(balls);
    
    document.addEventListener("mousemove", (event) => {
        let x = (event.clientX * 100)/ window.innerWidth + "%";
        let y = (event.clientY * 100) / window.innerHeight + "%";
        
        balls.forEach((ball) => {
            ball.style.left = x;
            ball.style.top = y;
            ball.style.transform = "traslate(-" + x + ",-" + y + ")";
        });
    
    });
}
catch (err){
    console.log(err);
}
