import React from 'react';

export default ({ input, label, type, meta: { error, touched } }) => {
	return (
		<>
			<label>{label}</label>
			<input autoComplete="off" placeholder={label} type={type} {...input} />
			{touched && error ? (
				<div
					className="ui pointing red basic label"
					style={{ marginBottom: '1px' }}
				>
					{error}
				</div>
			) : (
				<></>
			)}
		</>
	);
};
