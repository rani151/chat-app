

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
		<div className='flex'>

			<div className='form-control'>

            <label className="cursor-pointer  gap-2 label">
            <span className="label-text">Male</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-md" />
            </label>
                
			</div>


			<div className='form-control'>

            <label className="cursor-pointer  gap-2 label">
            <span className="label-text">Female</span>
            <input type="checkbox" defaultChecked className="checkbox checkbox-md" />
             </label>

			</div>
		</div>
	);
};

export default GenderCheckbox
