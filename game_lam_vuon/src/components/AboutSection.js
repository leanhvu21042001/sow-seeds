import { Link } from 'react-router-dom';
function AboutSection() {
    return (
        <div className="about-section">
            <div className="game-name">GARDENING GAME</div>
            <div className="intro">This game is made by Nguyễn Phúc Linh and Lê Anh Vũ.</div>
            <Link to={"/"}>How to Play tutorial video</Link>
        </div>
    );
}

export default AboutSection;