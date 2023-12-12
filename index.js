// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocksTravelled = Math.abs(destinationBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  function calculatesFarePrice(startBlock, destinationBlock) {
    const distance = distanceTravelledInFeet(startBlock, destinationBlock);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      // Price for distance between 400 and 2000 feet
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      // Flat fare for distance over 2000 feet and under 2500 feet
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  