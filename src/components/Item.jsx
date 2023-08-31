import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Item = ({product}) => (
    <Card key = {product.id} style={{ width: '18rem', margin: '2vh 2vw' }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Minimum players: {product.min_players}</ListGroup.Item>
            <ListGroup.Item>Maximum players: {product.max_players}</ListGroup.Item>
            <ListGroup.Item>Competitiveness: {product.competitiveness}</ListGroup.Item>
          </ListGroup>
          <Link to={`/item/${product.id}`}>
          <Button variant="dark">Add to cart</Button>
          </Link>
        </Card>
)