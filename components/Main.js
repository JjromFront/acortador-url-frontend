'use client';

import React, { useState } from 'react';
import axios from 'axios';

function Main() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleShorten = async () => {
        try {
            const response = await axios.post('http://localhost:3000/acortar', { original_url: originalUrl });
            const shortenedUrl = `http://localhost:3000/${response.data}`;
            setShortenedUrl(shortenedUrl);
        } catch (error) {
            console.error('Error al acortar la URL:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-blue">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md md:w-[408px] text-center">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-10">Acortador de URL</h1>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
                    <input
                        type="text"
                        placeholder="Introduce la URL original"
                        value={originalUrl}
                        onChange={(e) => setOriginalUrl(e.target.value)}
                        className="border rounded-md px-4 py-2 w-full md:w-auto focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                        onClick={handleShorten}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full md:w-auto"
                    >
                        Acortar
                    </button>
                </div>
                {shortenedUrl && (
                    <div className="mt-4">
                        <p className="font-semibold">URL corta generada:</p>
                        <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            {shortenedUrl}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Main;



