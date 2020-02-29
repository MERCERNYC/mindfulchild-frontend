export function addEmail (data) {
    return (dispatch) => {
        fetch('https://projectmindfulchild.herokuapp.com/api/v1/newsletters', {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(email => dispatch({type:'ADD_EMAIL', payload:email}))
    }
 }
