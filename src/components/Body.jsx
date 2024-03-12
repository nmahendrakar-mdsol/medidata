import MedicineCard from './MedicineCard';
import { medicinesList } from '../utils/medicinesList';
import './Body.css';
const Body = () => (
	<div className="body-container">
		{medicinesList.map((medicine, index) => (
			<MedicineCard
				name={medicine.name}
				imageUrl={medicine.damImages[0].url}
				price={medicine.mrpDecimal}
				key={medicine.productId}
			/>
		))}
	</div>
);

export default Body;
