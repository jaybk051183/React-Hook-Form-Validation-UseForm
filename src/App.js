import React from "react";
import {useForm} from "react-hook-form";
import './App.css';

function App() {
    const {register, handleSubmit, formState:{errors} } = useForm();

  function onFormSubmit(data){
      console.log(data)
  }
  console.log("ERRORS", errors);
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
        <fieldset>
            <legend>Gegevens</legend>
            <label htmlFor="details-name">
                Naam:
                <input
                type="text"
                id="details-name"
                {...register("name", {
                    required:"Naam is verplicht",
                    minLength:{
                        value:3,
                        message:"Naam moet minimaal 3 karakters hebben"
                    },
                })}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </label>
            <label htmlFor="details-age">
                Leeftijd:
                <input
                type="number"
                id="details-age"
                {...register("age", {
                    max:{
                        value:80,
                        message:"Je mag maximaal 80 jaar oud zijn"
                    },
                })}
                />
                {errors.age && <p>{errors.age.message}</p>}
            </label>
        </fieldset>
        <fieldset>
            <legend>Jouw review</legend>
            <label htmlFor="recipe-comments">
                Opmerkingen:
                <textarea
                    {...register("comments", {
                        maxLength:{
                            value:50,
                            message:"Hier maximaal 50 woorden"
                        },
                    })}
                    id="recipe-comments"
                    rows="4"
                    cols="40"
                    placeholder="Wat vond je van het recept?"
                >
          </textarea>
                {errors.comments && <p>{errors.comments.message}</p>}
            </label>
            <label htmlFor="recipe-newsletter">
                <input
                    type="checkbox"
                    {...register("newsletter")}
                />
                Ik schrijf me in voor de nieuwsbrief
            </label>
            <button type="submit">
                Versturen
            </button>
        </fieldset>
    </form>
  );
}

export default App;
