const fse = require('fs-extra');

console.log('--Copying assets folder--');
fse.copySync('public/assets', 'server/dist/assets', { overwrite: true } ,(err) => {
  if (err) {
    console.error('--fail to copy--');
    console.log(err)
  } else {
    console.log('--successfully copied files--');
  }
});
console.log('--Finish copying assets folder--')