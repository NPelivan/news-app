import React from "react";
import Navbar from "./navbar";
import Latesticon from "../assets/Latest.svg";

const ArticleItem = (props) => {
	const { article } = props;
	return (
		<div>
			<img src={article.urlToImage} alt="" />
			<h3>{article.title}</h3>
			<p>{article.author}</p>
		</div>
	);
};

const SideItems = (props) => {
	const { article } = props;
	return (
		<article className="side-articles">
			<span>
				{article.publishedAt
					.slice(11, 16)
					.split(":")
					.join(":")
					.replace("Z", "")}
			</span>
			<p>{article.title}</p>
		</article>
	);
};

const ArticleList = (props) => {
	return (
		<div className="news-container">
			<Navbar />

			<div className="news-content">
				<h3>News</h3>

				<div className="news-content-flex">
					<div className="latest-news">
						<h1>
							<img src={Latesticon} alt="" />
							Latest news
						</h1>

						{props.articles.map((article) => {
							return (
								<>
									<SideItems article={article}>{article.title}</SideItems>
								</>
							);
						})}
					</div>
					{props.articles.map((article) => {
						return (
							<>
								<ArticleItem article={article}>{article.title}</ArticleItem>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default ArticleList;
