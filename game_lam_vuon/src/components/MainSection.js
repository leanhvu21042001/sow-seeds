import Plot from './Plot';

function MainSection() {
    return (
        <div className="main-section">
            <div className="garden">
                <div className="garden-plots">
                    <Plot></Plot>
                    <Plot></Plot>
                    <Plot></Plot>
                    <Plot></Plot>
                    <Plot></Plot>
                    <Plot></Plot>
                </div>
            </div>
        </div>
    );
}

export default MainSection;