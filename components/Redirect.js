import React, { useState } from 'react';
import axios from 'axios';

function Home() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleShorten = async () => {
        try {
            const response = await axios.post('localhost:3000/acortar', { original_url: originalUrl });
            setShortenedUrl(response.data);
        } catch (error) {
            console.error('Error al acortar la URL:', error);
        }
    };

    return (
        <div>
            <h1>Acortador de URL</h1>
            <input
                type="text"
                placeholder="Introduce la URL original"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <button onClick={handleShorten}>Acortar</button>
            {shortenedUrl && (
                <div>
                    <p>URL corta generada:</p>
                    <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                        {shortenedUrl}
                    </a>
                </div>
            )}
        </div>
    );
}

export default Home;
