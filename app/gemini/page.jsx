"use client"
import { useState } from "react";

import { GoogleGenAI } from "@google/genai";


// The client gets the API key from the environment variable `GEMINI_API_KEY`.

let myUrl = process.env.NEXT_PUBLIC_GOOGLE_AI_STUDIO_URL



function page() {
    const [textMy, setTextMy] = useState("")
    const payLoad = {
        "contents": [{
            "parts": [
                { "text": "what is your age and name?" }
            ]
        }],
    }
    const askQuestion = async () => {


        const response = await fetch(myUrl, {
            method: "POST",

            body: JSON.stringify(payLoad)
        });

        const data = await response.json();
        let aiReplay = data.candidates[0].content.parts[0].text;
        if (aiReplay) {
            setTextMy(aiReplay)
            console.log(textMy)};
        
        // setTextMy(data.candidates[0].output);
    }







    return (
        <div>
            <text>Gemini Page</text>
          <p>{textMy?textMy: ""}</p>
            <button onClick={() => {

                askQuestion()
            }}>
                Click Me
            </button>
            {/* <button onClick={askQuestion()} className='bg-amber-800 text-white w-32 h-12 rounded '>Ask Question</button> */}
        </div>

    )
}

export default page