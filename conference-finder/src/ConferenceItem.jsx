import React from 'react';

const ConferenceItem = ({ conference }) => {
    return (
        <li>
            <div class="card">
                <h3>
                    {conference.name}
                </h3>
                <p>
                    {conference.topic}
                    {conference.date}
                    {conference.city}
                </p>
            </div>
        </li>
    )
}