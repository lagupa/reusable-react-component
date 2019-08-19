import React from 'react';
import { Form, Button } from 'react-bootstrap';


class FormArticle extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content)
    }

    render() {

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" name="title" placeholder="Enter Article's Title" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" name="content" rows="5" placeholder="Enter Article's Content" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {this.props.btnText}
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FormArticle;