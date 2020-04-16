import React from 'react';

export default ({ input, label, meta: { touched, error }, children }) => (
	<>
		<label>{label}</label>
		<select multiple="" className="ui fluid dropdown" {...input}>
			{children}
		</select>
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
