function eggs(str) {
 let text =str[0];
    let regex = /[@#]+([a-z0-9]{3,})[^a-z0-9]*\/(\d+)\/[^a-z0-9]*/gi;
    
    let match;
    while ((match = regex.exec(text)) !== null) {
      const color = match[1];
      const amount = match[2];
      console.log(`You found ${amount} ${color} eggs!`);
    }
    
}

eggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);