export function MoodBoardItem({color, image, description}) {
    return(
        <div className="mood-board-item" style={{ backgroundColor: color }}>
            <img src={image} className="mood-board-image"/>
            <h3 className="mood-board-text">{description}</h3>
        </div>
    );
}

export function MoodBoard() {
    return(
        <div>
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <div className="mood-board">
                <MoodBoardItem
                    color="#2fbabeff"
                    image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
                    description="Pathway"
                />
                <MoodBoardItem
                    color="#2dda2dff"
                    image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
                    description="Shore"
                />
                <MoodBoardItem
                    color="#312941ff"
                    image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
                    description="Santorini"
                />
            </div>
        </div>
    );
}