function djoser(base, step) {

    let pyramidFloorBase = Number(base);
    let pyramidStep = Number(step);
    let pyramidHeight = Number(step);
    let pyramidFloor = 1;

    let usedStoneBlocks = 0;
    let usedMarbleBlocks = 0;
    let usedLapisBlocks = 0;
    let usedGoldBlocks = 0;

    let numOfStone = 0;
    let numOfMarbles = 0;
    let numOfLapis = 0;


    while (pyramidFloorBase >= 3) {
        numOfStone = (pyramidFloorBase - 2) * (pyramidFloorBase - 2);
        if (pyramidFloor % 5 == 0) {
            numOfLapis = pyramidFloorBase * pyramidFloorBase - numOfStone;
            usedLapisBlocks += numOfLapis * pyramidStep;
        } else {
            numOfMarbles = pyramidFloorBase * pyramidFloorBase - numOfStone;
            usedMarbleBlocks += numOfMarbles * pyramidStep;
        }

        usedStoneBlocks += numOfStone * pyramidStep;

        pyramidFloorBase -= 2;
        pyramidHeight += step;
        pyramidFloor += 1;
    }

    usedGoldBlocks += (pyramidFloorBase * pyramidFloorBase) * pyramidStep;

    console.log(`Stone required: ${Math.ceil(usedStoneBlocks)}`);
    console.log(`Marble required: ${Math.ceil(usedMarbleBlocks)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(usedLapisBlocks)}`);
    console.log(`Gold required: ${Math.ceil(usedGoldBlocks)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`);
}