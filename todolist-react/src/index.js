import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';

// 借助网页写手机app的功能
// 上线https协议的服务器上 断网了 第二次访问时依然可以访问 因为页面已经存储在浏览器了
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Todolist />, document.getElementById('root'));
