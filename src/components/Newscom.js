import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import Typewriter from "typewriter-effect";
import Logo from '../images/logo.png'
import '../App.css';
import '../Responsive.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class Newscom extends Component {
    static defaultProps = {
        country: 'in',
        category: 'General',
        pagesize: 9
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pagesize: PropTypes.number
    }
    constructor() {
        super()

        this.state = ({
            articles: [],
            page: 1,
            loading: false,
            currentIndex: 0,
            totalResults: 0,
        })
    }
    async updatePage() {
        this.props.progressbar(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=896dbfc92c7447ebab11c2cae77ed79d&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parseddata = await data.json()
        this.props.progressbar(60);
        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false
        })
        this.props.progressbar(100);
    }
    async componentDidMount() {
        this.updatePage()
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                currentIndex: (prevState.currentIndex + 1) % this.state.articles.length,
            }));
        }, 1000);
        document.title = `NewsElephant - ${this.props.category} News`
    }


    fetchMoreData = async () => {

        this.setState({
            page: this.state.page + 1,
        });

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=896dbfc92c7447ebab11c2cae77ed79d&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parseddata = await data.json();

        this.setState(() => ({
            articles: this.state.articles.concat(parseddata.articles),
            totalResults: parseddata.totalResults,
        }));

    }

    render() {
        const { articles } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000, // Adjust the speed as needed
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000, // Adjust the autoplay speed as needed
        };

        return (
            <>
                <div className="menu d-flex justify-content-center align-items-center" >
                    <h3 className='text-center h3 display-6'>NewsElephant <img src={Logo} alt="" /><br /> <span className='d-flex flex-row justify-content-center'> Get Your daily&nbsp;<span id='type'> <Typewriter

                        onInit={(typewriter) => {
                            setInterval(() => {

                                typewriter
                                    .typeString("News")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Headlines")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Hot Topics")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start();
                            }, 1000);
                        }}
                    /></span></span> </h3>
                </div>
                <div className="slider">
                    <h3 className='qrv'>Quick Headlines</h3>
                    <Slider {...settings}>
                        {articles.map((article) => (
                            <div key={article.url} className="slider-item">
                                <h6>{article.title}</h6>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='mainbg'>
                    <div className="container newscom-con my-5">
                        {this.state.loading && <Loading/>}
                        <InfiniteScroll style={{ overflow: 'hidden' }}
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Loading />}
                        >
                            <div className="row ">
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4 d-flex justify-content-center for-dark" key={element.title}>
                                        <Newsitem author={element.author} source={element.source.name} date={element.publishedAt ? element.publishedAt : 'Date is not Available'} image={element.urlToImage ? element.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"} title={element.title} description={element.description ? element.description.slice(0, 80) : 'Description is Not Available'} url={element.url} />
                                    </div>
                                })
                                }
                            </div>
                        </InfiniteScroll>

                    </div>
                </div>
            </>
        )
    }
}

export default Newscom