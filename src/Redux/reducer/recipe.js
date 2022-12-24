const initialState = {data: [], isLoading: false, isError: false}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
		case "GET_LIST_RECIPE_PENDING":
			return { ...state, isLoading: true };
		case "GET_LIST_RECIPE_FULFILLED":
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data.rows,
			};
		case "GET_LIST_USER_REJECTED":
			return { ...state, isLoading: false, isError: true };
		case "GET_ID_RECIPE_PENDING":
			return { ...state, isLoading: true };
		case "GET_ID_RECIPE_FULFILLED":
			return {
				...state,
				isLoading: false,
				data: action.payload.data,
			};
		case "GET_ID_USER_REJECTED":
			return { ...state, isLoading: false, isError: true };
		default:
			return state;
	}
}

export default recipeReducer;