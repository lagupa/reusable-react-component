import React from 'react';
import axios from "axios";
import FormArticle from './Form'
import { Button } from 'react-bootstrap';

class ArticleList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            article: {}
        };

        console.log(this.props.btnid)
    }

    componentDidMount() {

        axios.get(`http://127.0.0.1:8000/api/4`)
            .then(res => {
                this.setState({
                    article: res.data
                });
            })
    }

    render() {

        return (
            <div className="pb-5">

                <div>
                    <h2>Artilcles</h2>
                    <Button onClick={this.props.switchMode}>
                        Back to List
                    </Button>
                    <hr />
                    <div>
                        {this.state.article.content}
                    </div>
                    <div className="pt-3 pb-3">
                        <h5>Posted on {this.state.article.date_created}</h5>
                    </div>
                    <span className="pr-3">
                        <Button >
                            Edit
                        </Button>
                    </span>

                    <span className="pl-3">
                        <Button>
                            Delete
                        </Button>
                    </span>
                    <hr />
                </div>



            </div>
        );
    }
}

export default ArticleList;