"use client"

import React, { useState, useEffect } from 'react'
import { useSpeech } from "react-text-to-speech";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


let myUrl = process.env.NEXT_PUBLIC_GOOGLE_AI_STUDIO_URL


function page() {
    const [aiReplaynew, setAiReplaynew] = useState("");


    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startListening = () =>

        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-US'
            // language: 'bn-BD'
        });
    if (!browserSupportsSpeechRecognition) {
        return (<span>Your browser does not support speech recognition.</span>)
    }
    ///////////////////////////////////

    const {
        Text, // Component that renders the processed text
        speechStatus, // Current speech status
        isInQueue, // Indicates whether the speech is currently playing or waiting in the queue
        start, // Starts or queues the speech
        pause, // Pauses the speech
        stop, // Stops or removes the speech from the queue
    } = useSpeech({ text: aiReplaynew ? aiReplaynew : "Hello, how are you?" });

    ////////////////////////////////////////

    const payLoad = {
        "contents": [{
            "parts": [
                { "text": transcript ? transcript : "Hello, how are you?" }
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
            setAiReplaynew(aiReplay)
            console.log("fROM ASKqUESTION fUNCTION :", aiReplaynew)
        };

        // setTextMy(data.candidates[0].output);
    }

    useEffect(() => {
        const senData = setTimeout(() => {

            askQuestion();
            console.log("Data Sent from useEffect")

        }, 1000);


        return () => clearTimeout(senData);

    }, [transcript]);








    return (
        <div className='flex flex-col items-center justify-center gap-7 min-h-screen bg-white text-black'>
            <h1 className='text-3xl font-bold'> Text to Speech </h1>
            <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
                <Text />
                <div style={{ display: "flex", columnGap: "0.5rem" }}>
                    {speechStatus !== "started" ? <button onClick={start}>Start</button> : <button onClick={pause}>Pause</button>}
                    <button onClick={stop}>Stop</button>
                </div>
            </div>

            ///////////////////////////////////////
            <h1 className='text-3xl font-bold'>Speech to Text</h1>

            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={startListening} className='bg-black text-white w-32 h-12 rounded '>Start</button>
            <button onClick={SpeechRecognition.stopListening} className='bg-black text-white w-32 h-12 rounded '>Stop</button>
            <button onClick={resetTranscript} className='bg-black text-white w-32 h-12 rounded '>Reset</button>
            <p>{transcript}</p>
            {/* <text >{transcript}</text> */}

        </div>
    )
}

export default page