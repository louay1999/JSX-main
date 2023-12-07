import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text><Description/></Card.Text>
        <Button variant="primary">buy<Price/></Button>
      </Card.Body>
    </Card>
  )
}
