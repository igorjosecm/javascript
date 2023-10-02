const char = createSorcerer("Igor");
const monster = createBigMonster();

stage.start(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);