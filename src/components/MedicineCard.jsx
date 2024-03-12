import PropTypes from 'prop-types';

const MedicineCard = ({ name, imageUrl, price }) => {
	return (
		<div className="medicine-card">
			<img
				src={imageUrl}
				alt="medicine_image"
				className="medicine-image"
			/>
			<h3 style={{ color: 'grey' }}>{name}</h3>
			<h4 style={{ color: 'brown' }}>MRP Price: {price}</h4>
		</div>
	);
};
MedicineCard.propTypes = {
	name: PropTypes.string,
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.string,
};

MedicineCard.defaultProps = {
	name: 'Paracetamol',
};

export default MedicineCard;
