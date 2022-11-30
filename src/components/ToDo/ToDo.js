import Card from 'react-bootstrap/Card'

const ToDo = () => {
    return (
        <Card style = {{width: '18rem'}}>
            <Card.Body>
                <Card.Title>
                    Judul
                </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Edit</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ToDo;