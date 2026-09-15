






const config = ({

testDir:'./tests',
testIgnore: '**/sampletests/**',
timeout: 10*1000,
expect:{
  timeout: 4*1000,
},
reporter:'html',
use:{
  browserName:"chromium",
  headless:true
}



});
export default config;
