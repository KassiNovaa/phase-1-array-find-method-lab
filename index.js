
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
  
// //   const winningYear = superbowlWin(record);
// //   console.log(winningYear);

  
//   function superbowlWin(record) {
//     const winObject = record.find(game => game.result === "W");
//     if (winObject) {
//       return winObject.year;
//     }
//     else {
//         return undefined
//     }
    
//   }

//   console.log(superbowlWin(record));

  
  function game(record){
    return record.result === "W"
  }

  function superbowlWin(record){
    const winObject = record.find(game)
    if (winObject) {
        return winObject.year
    }
    else {
        return undefined
    }
  }

  console.log(superbowlWin(record));