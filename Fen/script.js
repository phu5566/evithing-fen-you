window.onload = function() {
    var elem = document.getElementById("myBar");
    var message = document.getElementById("message");
    var width = 0;
    
    // ຟັງຊັນສ້າງການໂຫລດ
    var id = setInterval(frame, 50); // ປ່ຽນເລກ 50 ໃຫ້ຫຼາຍຂຶ້ນຖ້າຢາກໃຫ້ໂຫລດຊ້າລົງ
    
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            elem.innerHTML = "100%";
            message.style.display = "block"; // ສະແດງຂໍ້ຄວາມເມື່ອໂຫລດແລ້ວ
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width + '%';
        }
    }
};

window.onload = function() {
    let fillBar = document.getElementById("fillBar");
    let finishMsg = document.getElementById("finish-msg");
    let width = 0;
    
    // ຕັ້ງເວລາໃຫ້ມັນຄ່ອຍໆໂຫລດ
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            fillBar.innerHTML = "100%";
            finishMsg.classList.remove("hide"); // ສະແດງຂໍ້ຄວາມຕອນຈົບ
        } else {
            width++;
            fillBar.style.width = width + '%';
            fillBar.innerHTML = width + '%';
        }
    }, 60); // 60ms ຕໍ່ 1% (ປະມານ 6 ວິນາທີກໍເຕັມ)
};

// ສ່ວນນີ້ຢູ່ລຸ່ມສຸດຂອງ script.js
let nextBtn = document.getElementById("nextPageBtn");

nextBtn.onclick = function() {
    // ປ່ຽນ 'https://www.google.com' ເປັນ Link ເວັບໄຊ ຫຼື ໜ້າທີ່ເຈົ້າຕ້ອງການໃຫ້ໄປ
    // ຕົວຢ່າງ: 'page2.html' (ຖ້າມີໄຟລ໌ອີກໜ້າໜຶ່ງ) ຫຼື Link Facebook/Instagram ຂອງເຈົ້າ
    window.location.href = "about.html"; 
};