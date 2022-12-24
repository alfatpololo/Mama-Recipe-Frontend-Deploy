import React from "react";
import { Provider } from "react-redux";
import Router from "./Router";
import { store, persistor } from "./Redux/store";

import { PersistGate } from "redux-persist/integration/react";

const App = () => {
	return (
		<div>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Router />
				</PersistGate>
			</Provider>
		</div>
	);
};

export default App;