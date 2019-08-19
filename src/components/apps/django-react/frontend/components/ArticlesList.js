import React from 'react';
import axios from "axios";
import FormArticle from './Form'
import { Button } from 'react-bootstrap';

const MAX_LENGTH = 120;

class ArticleList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }


    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });

                console.log(res.data)
            })

    }


    render() {

        return (
            <div>

                <h2>Create Articles</h2>
                <FormArticle btnText="Create" />
                <hr />

                <h2>Latest Artilcles</h2>

                <span>
                    {this.state.articles.map((article) =>
                        <div key={article.id}>

                            <h5>{article.title} {article.id}</h5>
                            {article.content.length > MAX_LENGTH ? (
                                <div >
                                    {`${article.content.substring(0, MAX_LENGTH)}...`}<a href={`api/${article.id}`}>Read more</a>
                                </div>

                            ) : (
                                    <div>
                                        <p>{article.content}</p>
                                        <hr />
                                    </div>
                                )
                            }
                            <div className="pt-2 pb-2">
                                <h6 >  ___ Posted on... {article.date_created} </h6>
                            </div>

                            <Button onClick={this.props.switchMode} onMouseOver={this.getId} btnid={article.id}>Details</Button>
                        </div>
                    )}
                </span>
            </div>
        );
    }
}

export default ArticleList;