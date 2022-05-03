import React from 'react';
import ReactDomClient from 'react-dom/client';

import SimpleReactLibraryBoilerplate from '../../src/index.js';

ReactDomClient
	.createRoot(document.getElementById('app'))
	.render(<SimpleReactLibraryBoilerplate />);
