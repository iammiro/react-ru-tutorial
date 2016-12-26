const my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

const News = React.createClass({
    render: function() {
        return (
            <div className="news">
                К сожалению, новостей нет.
            </div>
        );
    }
});

const Comments = React.createClass({
    render: function() {
        return (
            <div className="comments">
                Нет новостей - комментировать нечего.
            </div>
        );
    }
});

const App = React.createClass({
    render: function() {
        return (
            <div className="app">
                Всем привет, я компонент App! Я умею отображать новости.
                <News data={my_news} /> {/*добавили свойство data */}
                <Comments />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);