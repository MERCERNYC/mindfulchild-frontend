export function addEmail (data) {
    console.log('C');
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/newsletters', {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(email => {
            console.log('D');
            dispatch({type:'ADD_EMAIL', payload:email})})
    }
  
 }
