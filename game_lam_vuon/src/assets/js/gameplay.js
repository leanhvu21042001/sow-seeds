/**
 * Xử lý event chỉ đối với nút .plant-btn:
 */
// document.querySelector('.plant .plant-btn').addEventListener('click', function(e) {
//     e.stopPropagation();
//     alert("Đã thua họach!");
//     document.querySelector('.plant .plant-img').setAttribute('src', '');
//     document.querySelector('.plant .plant-img').classList.toggle('plant-img', true);
//     document.querySelector('.plant .plant-btn .plant-btn-img').setAttribute('src', './public/images/Garden/Tools/seeding.png');
// });

/**
 * Seed object:
 */
// let seed = {
//     seed_img: 'MorningGlory_Seeds.png',
//     plant_img_lv1: 'plant.png',
//     plant_img_lv2: 'MorningGlory.png',
//     tNayMam: 3,
//     tCayXanhThanhCayThuHoach: 5,
//     tCayThuHoachThanhCayXanh: 5,
//     soLanCoTheThuHoach: 0,
//     coTheThuHoach: false,
//     trangThaiHienTai: '',
//     viTriGieo: -1,
//     chet: false
// };


// Seeds in shop:
const seedProducts = [
    {
        price: 10000,
        seed_img: 'Eschscholzia_Seeds.png',
        plant_img_lv1: 'plant.png',
        plant_img_lv2: 'Eschscholzia.png',
        tNayMam: 3,
        tCayXanhThanhCayThuHoach: 5,
        tCayThuHoachThanhCayXanh: 5
    },
    {
        price: 20000,
        seed_img: 'MorningGlory_Seeds.png',
        plant_img_lv1: 'plant.png',
        plant_img_lv2: 'MorningGlory.png',
        tNayMam: 3,
        tCayXanhThanhCayThuHoach: 5,
        tCayThuHoachThanhCayXanh: 5
    },
    {
        price: 30000,
        seed_img: 'Pansy_Seeds.png',
        plant_img_lv1: 'plant.png',
        plant_img_lv2: 'Pansy.png',
        tNayMam: 3,
        tCayXanhThanhCayThuHoach: 5,
        tCayThuHoachThanhCayXanh: 5
    },
];

// The seeds you've just bought:
let bag = [];

// The seeds in your garden:
let seeds = [];

// Your money:
let money = 60000;



// Shopping:
const seedProduct_btns = document.querySelectorAll('.shop-section .seed-product');

for (let i = 0; i < seedProduct_btns.length; i++) {
    seedProduct_btns[i].addEventListener('click', () => {
        if (money >= seedProducts[i].price) {
            money = money - seedProducts[i].price;
            bag.push(seedProducts[i]);
        }
        else {
            alert("Không đủ tiền!");
        }
    });
}



// Planting;
const plants = document.querySelectorAll('.garden-plots .plant');
const plant_btns = document.querySelectorAll('.garden-plots .plant .plant-btn');

for (let i = 0; i < plant_btns.length; i++) {
    plant_btns[i].addEventListener('click', () => {
        // Kiểm tra trong túi có hạt vừa mua hay không. Nếu có thì tức là sẽ gieo hạt đó vào vườn:
        if (bag.length > 0) {
            seeds.push(bag[0]);
            seeds[seeds.length - 1].soLanCoTheThuHoach = 0;
            seeds[seeds.length - 1].coTheThuHoach = false;
            seeds[seeds.length - 1].trangThaiHienTai = '';
            seeds[seeds.length - 1].viTriGieo = i;
            seeds[seeds.length - 1].chet = false;
            bag.pop();
            gieoHat(i);
        }
        else {
            alert("Bạn phải mua hạt giống để gieo hạt!");
            return;
        }
    });
};



function gieoHat(viTriGieo) {
    let indexOfSeedObject = -1;
    for (let i = 0; i < seeds.length; i++) {
        if (seeds[i].viTriGieo == viTriGieo) {
            indexOfSeedObject = i;
            break;
        }
    }

    if (plants[viTriGieo].querySelector('.seed-or-plant').getAttribute('src') === '') {
        // Set up UI:
        plants[viTriGieo].querySelector('.seed-or-plant').classList.add('seed-img');
        plants[viTriGieo].querySelector('.seed-or-plant').setAttribute('src', `./public/images/Garden/Seeds/${seeds[indexOfSeedObject].seed_img}`);
        plants[viTriGieo].querySelector('.plant-btn .plant-btn-img').setAttribute('src', './public/images/Garden/Tools/spade.png');

        setTimeout(() => {
            plants[viTriGieo].querySelector('.seed-or-plant').classList.remove('seed-img');
            plants[viTriGieo].querySelector('.seed-or-plant').classList.add('plant-img');
            plants[viTriGieo].querySelector('.seed-or-plant').setAttribute('src', `./public/images/Garden/Plants/${seeds[indexOfSeedObject].plant_img_lv1}`);
            chuyenDoi_CayXanhVaCayThuHoach(seeds[indexOfSeedObject], plants[viTriGieo]);
        }, (seeds[indexOfSeedObject].tNayMam * 1000));
    }
    else {
        if (seeds[indexOfSeedObject].trangThaiHienTai === 'CayTruongThanh') {
            if (seeds[indexOfSeedObject].coTheThuHoach === true) {
                seeds[indexOfSeedObject].coTheThuHoach = false;
                alert("Đã thu hoạch!");
            }
            else {
                alert("Bạn đã thu hoạch cây này rồi!");
            }
        }
        else {
            alert("Phải chờ cây trưởng thành mới có thể thu hoạch!");
        }
    }
}



function chuyenDoi_CayXanhVaCayThuHoach(seedObject, plant) {
    // Cây xanh -> Cây thu hoạch:
    setTimeout(() => {
        seedObject.soLanCoTheThuHoach = seedObject.soLanCoTheThuHoach + 1;
        seedObject.trangThaiHienTai = 'CayTruongThanh';
        seedObject.coTheThuHoach = true;
        plant.querySelector('.seed-or-plant').setAttribute('src', `./public/images/Garden/Flowers/${seedObject.plant_img_lv2}`);

        // Cây thu hoạch -> Cây xanh:
        setTimeout(() => {
            if (seedObject.soLanCoTheThuHoach < 3) {
                plant.querySelector('.seed-or-plant').setAttribute('src', `./public/images/Garden/Plants/${seedObject.plant_img_lv1}`);
                chuyenDoi_CayXanhVaCayThuHoach(seedObject, plant);
                seedObject.trangThaiHienTai = 'CayXanh';
                seedObject.coTheThuHoach = false;
            }
            else {
                plant.querySelector('.seed-or-plant').setAttribute('src', '');
                plant.querySelector('.seed-or-plant').classList.remove('plant-img');
                seedObject.coTheThuHoach = true;
                seedObject.chet = true;
                // Đặt lại nút thu hoạch thành nút gieo hạt:
                plant.querySelector('.plant-btn .plant-btn-img').setAttribute('src', './public/images/Garden/Tools/seeding.png');
                return;
            }
        }, (seedObject.tCayThuHoachThanhCayXanh * 1000));

    }, (seedObject.tCayXanhThanhCayThuHoach * 1000));
}