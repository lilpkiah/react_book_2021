import React from 'react'; 
import axios from 'axios';
import SearchBook from '../components/SearchBook'; 
import "./Search.css";
import "../css/bootstrap.css";

class Search extends React.Component {
    state = {
        isLoading: true,
        books: [],
        value: ""
    };


    getSearchBook = async () => {
        const ID_KEY = '.';
        const SECRET_KEY = '.';
        const searchbook = this.state.value;
        try {
            if(searchbook === "") {
                this.setState({books: [], isLoading: false})
            } else {
                const { data: {
                    items
                }} = await axios.get('/v1/search/book.json', {
                    params: {
                        query: searchbook,
                        display: 20
                    },
                    headers: {
                        'X-Naver-Client-id': ID_KEY,
                        'X-Naver-Client-Secret': SECRET_KEY
                    }
                });

                this.setState({books: items, isLoading: false});
            }
        } catch(error) {
            console.log(error);
        }
    };

    componentDidMount() {
        this.getSearchBook();
    }

    handleChange = (e: any) => {
        this.setState({value: e.target.value});
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.getSearchBook();
    };

    render() {
        const {books, isLoading} = this.state;

        return (<section className="container_book">
            {
                isLoading
                ? (<div className="loader">
                    <span className="loader__text">Loading..</span>
                    </div>)
                    : (<form onSubmit={this.handleSubmit}>
                        <div>
                            <div className="form-group">
                                <h1>도서 검색</h1>
                                <input className="form-control form-control-lg" type="text" value={this.state.value} onChange={this.handleChange} placeholder="도서 검색하세요."/>
                            </div>
                                <div className="books">
                                    {books.map(book => (
                                        <SearchBook key={book.link} id={book.link} pubdate={book.pubdate} title={book.title} image={book.image} price={book.price} author={book.author} publisher={book.publisher} description={book.description} />
                                    ))
                                    }
                                </div>
                        
                        </div>
                        </form>
                        
                        )
            }
            </section>
            );
    }
}

export default Search;