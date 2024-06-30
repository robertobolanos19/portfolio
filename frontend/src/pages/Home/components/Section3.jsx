import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Section3.css';

function Section3({ activeFilter, showAll }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/projects')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Function to chunk array into smaller arrays of a specific size
    const chunkArray = (array, size) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    };

    // Filter data based on the active filter
    const filteredData = data.filter(item => activeFilter === 'All' || item.class === activeFilter);

    // Determine the data to display based on showAll
    const dataToDisplay = showAll ? filteredData : filteredData.slice(0, 6);

    // Chunk data into rows of 3 and filter out incomplete rows
    const rows = chunkArray(dataToDisplay, 3).filter(row => row.length === 3);

    return (
        <section className="section section3">
            {rows.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map(item => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            ))}
        </section>
    );
}

export default Section3;
