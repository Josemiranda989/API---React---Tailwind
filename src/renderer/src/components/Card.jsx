import PropTypes from "prop-types";

const Card = ({ data }) => {
  const { title, img, description } = data;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-96 w-80 md:w-60 mt-5">
      <img
        className="w-full h-64 object-cover"
        src={img}
        alt="Imagen del producto"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
