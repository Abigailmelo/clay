/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const ClayTableBody: React.FunctionComponent<
	React.TableHTMLAttributes<HTMLTableSectionElement>
> = ({children, ...otherProps}) => {
	return <tbody {...otherProps}>{children}</tbody>;
};

export default ClayTableBody;
