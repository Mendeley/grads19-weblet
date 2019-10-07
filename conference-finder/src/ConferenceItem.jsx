import React from 'react';

const ConferenceItem = ({ conference }) => {
    return (
        <li>
            <div class="card">
                <h3>
                    {conference.conferenceName}
                </h3>
                <p>
                    {conference.conferenceTopic}
                    {conference.conferenceDateTime}
                    {conference.city}
                </p>
            </div>
        </li>
    )
}