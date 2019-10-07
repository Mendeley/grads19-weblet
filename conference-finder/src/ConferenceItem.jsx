import React from 'react';

const ConferenceItem = (conferenceName, conferenceTopic, conferenceDateTime, city) => {
    return (
        <li>
            <div class="card">
                <h3>
                    {conferenceName}
                </h3>
                <p>
                    {conferenceTopic}
                    {conferenceDateTime}
                    {city}
                </p>
            </div>
        </li>
    )
}
export default ConferenceItem;