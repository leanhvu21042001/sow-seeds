import img_seeding from '../assets/images/Garden/Tools/seeding.png';
// import img_spade from '../assets/images/Garden/Tools/spade.png';

function Plant() {
    return (
        <div className="plant">
            <img className="seed-or-plant" src="" alt=""></img>
            <div className="plant-btn">
                <img className="plant-btn-img" src={img_seeding} alt="plant-btn-img"></img>
            </div>
            <div className="countdown-timer">00:00</div>
        </div>
    );
}

export default Plant;