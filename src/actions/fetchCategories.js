export function fetchAccounts() {

    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/categories')
      .then(resp => resp.json())
      .then(categories => dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: categories
        
      }))
    }
  }




