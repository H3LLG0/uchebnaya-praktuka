$('#get-form').on('submit', function(event){
    event.preventDefault();
    const APImethod = Object.fromEntries(new FormData(event.target).entries());

    fetch(`http://prb.sylas.ru/TransferSimulator/${APImethod.method}`,{
        mode: 'no-cors',
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin" : "*", 
            "Access-Control-Allow-Credentials" : true,
            "Content-Type": "application/json",
        },
        withCredentials: true,    
        crossorigin: true,    
      })
      .then((response) => {
        if (!response.ok) {
            $('.result').empty();
        $('.result').append(`HTTP error! Status: ${response.status}
            `);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        return response.blob();
      })
      .then((response) => {
        $('.result').empty();
        $('.result').append(`HTTP error! Status: ${response}`);
      });
})