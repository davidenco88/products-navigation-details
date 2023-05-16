import PropTypes from 'prop-types';
import TimeRender from './TimeRender';

function ProductCard (props) {

  const {
    id,
    title,
    image,
    price,
  } = props 
  return (
    <>
      <div className="card">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <section className="details">
          <div className="min-details">
            <h1>{title}<span className="price">{`$ ${price}`}</span></h1> 
          </div>
          <TimeRender id={id}/>
        </section>
      </div>
    </>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
}

export default ProductCard