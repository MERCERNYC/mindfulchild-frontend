export function fetchCategories () {

    return (dispatch) => {
      fetch('https://projectmindfulchild.herokuapp.com/api/v1/categories')
      .then(resp => resp.json())
      .then(categories => dispatch({
        type: 'FETCH_CATEGORIES',
        payload: categories

      }))
    }
  }

  



