window.onload = function() {
    const leftBtn = document.querySelector('.btn-left');
    const rightBtn = document.querySelector('.btn-right');

    // 1. ປຸ່ມທາງຊ້າຍ: ກົດແລ້ວໃຫ້ Alert ປົກກະຕິ
    leftBtn.onclick = function() {
        window.location.href = "thank.html"; 
    };

    // 2. ຟັງຊັນເຮັດໃຫ້ປຸ່ມແລ່ນໜີ (ແບບລັອກໃນໜ້າຈໍມືຖື)
    const moveButton = (e) => {
        // ຢຸດການເຮັດວຽກປົກກະຕິຂອງ Touch ເພື່ອບໍ່ໃຫ້ໜ້າເວັບເລື່ອນໄປມາ
        if (e.type === 'touchstart') e.preventDefault();

        // ຫາຂະໜາດໜ້າຈໍທີ່ "ໃຊ້ງານໄດ້ແທ້" (Viewport)
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

        // ຫາຂະໜາດຂອງປຸ່ມເອງ
        const btnWidth = rightBtn.offsetWidth;
        const btnHeight = rightBtn.offsetHeight;

        // ຕັ້ງຄ່າໄລຍະຫ່າງຈາກຂອບ (Padding) 15px ເພື່ອບໍ່ໃຫ້ມັນເບຍຂອບຈໍເກີນໄປ
        const pad = 15;

        // ຄິດໄລ່ຂອບເຂດສູງສຸດທີ່ປຸ່ມຈະໄປໄດ້ (Max X, Max Y)
        const maxX = vw - btnWidth - pad;
        const maxY = vh - btnHeight - pad;

        // ສຸ່ມຕຳແໜ່ງໃໝ່ ໂດຍໃຫ້ເລີ່ມຈາກ pad ເປັນຕົ້ນໄປ
        let randomX = Math.floor(Math.random() * (maxX - pad)) + pad;
        let randomY = Math.floor(Math.random() * (maxY - pad)) + pad;

        // ປ້ອງກັນບໍ່ໃຫ້ຄ່າຕິດລົບ (ໃນກໍລະນີໜ້າຈໍນ້ອຍຫຼາຍ)
        randomX = Math.max(pad, randomX);
        randomY = Math.max(pad, randomY);

        // ສັ່ງໃຫ້ປຸ່ມຍ້າຍໄປແບບ Fixed (ອ້າງອີງຕາມໜ້າຈໍ)
        rightBtn.style.position = 'fixed';
        rightBtn.style.left = randomX + 'px';
        rightBtn.style.top = randomY + 'px';
        rightBtn.style.margin = '0'; // ລ້າງ margin ເກົ່າອອກທັງໝົດ
        rightBtn.style.zIndex = '9999'; // ໃຫ້ຢູ່ເທິງສຸດສະເໝີ
    };

    // ເພີ່ມ Event ໃຫ້ທັງ PC (Mouse) ແລະ ມືຖື (Touch)
    rightBtn.addEventListener('mouseover', moveButton);
    rightBtn.addEventListener('touchstart', moveButton, { passive: false });

    // ຖ້າແຟນເຈົ້າກົດທັນແທ້ໆ
    rightBtn.onclick = function() {
        alert("ໂຫ! ເກັ່ງຫຼາຍທີ່ກົດທັນ 🎁");
        window.location.href = "https://www.facebook.com"; 
    };
};