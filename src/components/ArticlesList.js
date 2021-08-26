import React, { Component } from 'react';
import '../static/ArticlesList.css';

import ContactUs from './ContactUs';
import FriendsListHome from './FriendsListHome';

import article1 from '../static/images/article1.png';
import article2 from '../static/images/article2.png';
import article3 from '../static/images/article3.png';
import article4 from '../static/images/article4.png';
import article5 from '../static/images/article5.png';
import article6 from '../static/images/article6.png';
import article7 from '../static/images/article7.png';
import article8 from '../static/images/article8.png';
import article9 from '../static/images/article9.png';
import article10 from '../static/images/article10.png';


export default class ArticlesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listArticles: [],
        }
    }

    componentDidMount(){
        this.props.fetchArticles();
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.listArticles !== this.props.articles) {
            this.setState({
                listArticles: this.props.articles
            })
        }
    }

    render() {
        const {listArticles} = this.state;
        const m = listArticles.length > 0 && listArticles[5].img;
        debugger;
        debugger;
        // const articles = [
        //     { 
        //         id: 'a1', 
        //         title: '5 Amusing Back Rank Checkmate Stories', 
        //         img: article1,
        //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
        //         link: 'https://www.chess.com/article/view/5-amusing-back-rank-checkmate-stories'
        //     },
        //     { 
        //         id: 'a2', 
        //         title: 'Coach Of The Month: James Canty III', 
        //         img: article2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        //         link: 'https://www.chess.com/article/view/coach-of-the-month-james-canty-iii'
        //     },
        //     { 
        //         id: 'a3', 
        //         title: '2021 FIDE World Cup: All The Information', 
        //         img: article3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        //         link: 'https://www.chess.com/article/view/fide-world-cup'
        //     },
        //     { 
        //         id: 'a4', 
        //         title: 'Chess Played Quick Bullet Edition: All The Information', 
        //         img: article4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        //         link: 'https://www.chess.com/article/view/chess-played-quick-bullet-edition-all-the-information'
        //     },
        //     { 
        //         id: 'a5', 
        //         title: 'How Nepomniachtchi Became The 2021 WCC Challenger', 
        //         img: article5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        //         link: 'https://www.chess.com/article/view/2020-2021-candidates-recap'
        //     },
        //     { 
        //         id: 'a6', 
        //         title: 'The 5 Worst World Chess Championship Games Of All Time', 
        //         img: article6, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        //         link: 'https://www.chess.com/article/view/worst-world-championship-chess-games'
        //     },
        //     { 
        //         id: 'a7', 
        //         title: 'Carlsen vs. Nepomniachtchi: What Do The Numbers Say?', 
        //         img: article7, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        //         link: 'https://www.chess.com/article/view/2021-world-chess-championship-smarterchess-predictions'
        //     },
        //     { 
        //         id: 'a8', 
        //         title: 'Do You Know Classic Chess Games Better Than Magnus Carlsen?', 
        //         img: article8, 
        //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        //         link: 'https://www.chess.com/article/view/classic-chess-games-magnus-carlsen'
        //     },
        //     { 
        //         id: 'a9', 
        //         title: "10 Positions Chess Engines Just Don't Understand", 
        //         img: article9, 
        //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        //         link: 'https://www.chess.com/article/view/10-positions-chess-engines-just-dont-understand'
        //     },
        //     { 
        //         id: 'a10', 
        //         title: 'Arena Kings Season 7 Leaderboard', 
        //         img: article10, 
        //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
        //         link: 'https://www.chess.com/article/view/arena-kings-season-7-leaderboard'
        //     },
        // ];
        return listArticles[0] !== undefined && <div className='articles-list row'>
            <div className='col-8'>
                <div className='main-articles-list'>
                    <div className='first-article row'>
                        <div className='col-7 first-img'>
                            <img src={listArticles[0].img} alt=""/>
                        </div>
                        <div className='first-title title-info col-5'>
                            <a href={listArticles[0].link}>
                                <p className='created-time'>Jun 29, 2021</p>
                                <h4 className='first-title-art'>
                                    {listArticles[0].title}
                                </h4>
                                <p className='description'>{listArticles[0].content}</p>
                            </a>
                        </div>
                    </div>

                    <div className='others-list row'>
                        {listArticles.length > 0 && listArticles.map((item, index) => {
                            if (index !== 0) {
                                return <div className='col-4 article-item'>
                                    <a href={item.link}>
                                        <img src={listArticles.length > 0 && item.img} alt="" />
                                        <div className='title-info'>
                                            <p className='created-time'>Jun 29, 2021</p>
                                            <h4 className='article-title'>
                                                {item.title}
                                            </h4>
                                            <p className='description'>{item.content}</p>
                                        </div>
                                    </a>
                                </div>
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <div className='article-rightcontent'>
                    <FriendsListHome />
                    <ContactUs />
                </div>
            </div>
        </div>
    }
}