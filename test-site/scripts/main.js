// document.querySelector('html').onclick=function(){
// 	alert('别戳我，我怕疼。');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

// 获取标题元素
const myHeading = document.querySelector('h2');
// 获取按钮元素
const myButton = document.querySelector('button');

// 定义设置用户名的函数
function setUserName() {
  const myName = prompt('请输入你的名字：');
  if (!myName) {
    setUserName(); // 如果未输入，重新调用
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hi, ' + myName;
  }
}

// 检查本地存储是否有用户名
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi, ' + storedName;
}

// 点击按钮切换用户
myButton.onclick = function() {
  setUserName();
};

//********************************************

  function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }

  //*******************************************
  //*********从网站下载的代码**********
  //********************************************
  // 设置图片切换
// let myImage = document.querySelector('img');

// myImage.onclick = function() {
//   let mySrc = myImage.getAttribute('src');
//   if (mySrc === 'images/firefox-icon.png') {
//     myImage.setAttribute ('src','images/firefox2.png');
//   } else {
//     myImage.setAttribute ('src','images/firefox-icon.png');
//   }
// };

// // 设置个性化欢迎信息
// // 获取新按钮和标题的引用
// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// // 个性化欢迎信息设置函数
// function setUserName() {
//   let myName = prompt('请输入你的名字。');
//   if (!myName || myName === null) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
//   }
// }

// // 初始化代码：在页面初次读取时进行构造工作：
// if (!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
// }

// // 为按钮设置 onclick 事件处理器：
// myButton.onclick = function() {
//   setUserName();
// };