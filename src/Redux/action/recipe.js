import axios from "axios";

export const insertRecipe = (addForm) => {
    return new Promise ((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/recipe`, addForm)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

export const updateRecipe = (id, form) => {
    return new Promise ((resolve, reject) => {
        axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/recipe/update/${id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
    })
}

export const deleteRecipe = (id) => {
    return new Promise ((resolve, reject) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/recipe/image/${id}`)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export const getRecipe = () => {
  return {
		type: "GET_LIST_RECIPE",
		payload: axios({
			url: `${process.env.REACT_APP_BACKEND_URL}/recipe`,
			method: "GET",
		}),
	}
}

export const getIdRecipe = (id) => {
  return {
    type: "GET_ID_RECIPE",
    payload: axios({
			url: `${process.env.REACT_APP_BACKEND_URL}/recipe/${id}`,
			method: "GET",
		}),
  }
}

export const getDetailRecipe = () => {
  return {
		type: "GET_LIST_RECIPE",
		payload: axios({
			url: `${process.env.REACT_APP_BACKEND_URL}/detail`,
			method: "GET",
		}),
	}
}