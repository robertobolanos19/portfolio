import React from 'react';
import './Section3.css';
import { Link } from 'react-router-dom';

const Section3 = ({ data, showAll }) => {
    const maxCards = showAll ? data.length : 6;

    const chunkArray = (arr, size) => {
        const numChunks = Math.ceil(arr.length / size);
        const chunks = Array.from({ length: numChunks }, (_, index) => {
            const start = index * size;
            return arr.slice(start, start + size);
        });
        return chunks;
    };

    const rows = chunkArray(data.slice(0, maxCards), 3);

    return (
        <section className="section3">
            <div className="section3Container">
                {rows.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((item, index) => (
                            <Link to={`/project/${item.id}`} className="card-link" key={index}>
                                <div className="card">
                                    <div className="image">
                                        <img src={item.image[0]} alt={item.title} />
                                    </div>
                                    <div className="content">
                                        <h2>{item.title}</h2>
                                        <div className="year">{item.year}</div>
                                        <div className="software">{item.software}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section3;
