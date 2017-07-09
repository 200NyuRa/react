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

const Article = React.createClass({
	propTypes: {
		data: React.PropTypes.shape({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired
		})
	},

	render(){
		const {author, text} = [this.props.data.author, this.props.data.text];

		return (
			<div className="article">
				<h4 className="article__name">{author}</h4>
				<p className="article__name">{text}</p>
			</div>
		)
	}
});

const News = React.createClass({
	render(){
		const {news} = this.props;
		let template;
		if (news.length > 0){
			template = news.map((item, key) => {
					return <Article key={key} data={item} />
				});
		} else {
			template = <div className="news__caption">Новостей нет</div>
		}

		return (
			<div className="news">
				{template}
				<strong className={`news__num ${(news.length > 0) ? '' : 'none'}`}>Количество новостей: {news.length}</strong>
			</div>
		)
	}
});

const App = React.createClass({
	render() {
		return (
			<div className="app">
				<h2>Новости:</h2>
				<News news={my_news}/>
				<Comments />
			</div>
		)
	}
});

const Comments = React.createClass({
	render() {
		return (
			<div className="comments">
				Ой, так как нет новостей и комментраиев тоже нет
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);