






const config = ({

testDir:'./tests',
timeout: 40*1000,
expect:{
  timeout: 4*1000,
},
reporter:'html',
use:{
  browserName:"chromium",
  headless:false
}



});
module.exports = config
