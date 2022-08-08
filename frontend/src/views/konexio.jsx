import {useState, useEffect} from 'react';
function Konexio(){
    const [userName, setUserName] = useState("");
    useEffect(() => {
        addUser();
      }, []);

    const addUser = () => {
        fetch("http://localhost:8000/konexio", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: userName,
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
              console.log(response);  
          });
      };

    return (
      <>
        <form className="m-auto col-4 mt-5">
          <div className="mb-3">
            <label className="form-label">
              Entrez votre nom pour vous inscrire :
            </label>
            <input
              type="text"
              className="form-control"
              name = "nom"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <button onClick={addUser} type="submit" className="btn btn-primary">
            Inscription
          </button >
        </form>
      </>
    );
}

export default Konexio;