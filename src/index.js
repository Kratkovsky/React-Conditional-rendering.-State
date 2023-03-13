import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/*
Создать компонент Message.

Он принимает в качестве пропсов:
- Отправителя;
- Текст сообщения;

У Message должно быть состояние, в котором хранится информация, прочитано ли оно.
Это состояние изменяется по нажатию на кнопку.

Bonus Tasks:
* После того как сообщение становится помечено как прочитанное, на кнопку больше нельзя нажать.
*/