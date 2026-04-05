function showLove() {
    alert("ຊໍ່ດອກໄມ້ນີ້ມອບໃຫ້ເຈົ້າຄົນດຽວເລີຍ! 💐💖");
}

function surprise() {
    // ປ່ຽນ Link ນີ້ເປັນ Link ຂອງຂວັນ ຫຼື ຮູບພາບທີ່ເຈົ້າຢາກໃຫ້ເຫັນ
    alert("ຊື່ເຟສຂອງຂ້ອຍ ✨");
    window.location.href = "https://web.facebook.com/profile.php?id=61574682746629"; 
}

// ເພີ່ມເອັບເຟັກຫົວໃຈລອຍ (Optional)
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-5vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.opacity = Math.random();
    heart.style.transition = "all 3s linear";
    heart.style.zIndex = "1000";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = `translateY(-110vh) rotate(${Math.random() * 360}deg)`;
    }, 100);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}, 500);