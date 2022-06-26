const fs = require('fs');

const User = {
  fileName: './database/userOwner.json',
  
  findAll: function () {
    return JSON.parse(fs.readFileSync(this.fileName, 'utf8'));
  }


}
console.log(User.findAll());