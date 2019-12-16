import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const GameProgress = ({ progress: {
    patientName,
    game,
    observations,
    treatmentgoals,
    from,
    to,
    description


} }) =>
    <div>
        <h3 className="text-dark">{patientName}</h3>
        <p>
            <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
            {!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
        </p>
        <p >
            <strong className="text-primaryADMN">Game Played:</strong> {game}
        </p>
        <p>
            <strong className="text-primaryADMN">Treatment Goals:</strong> {treatmentgoals}
        </p>
        <p>
            <strong className="text-primaryADMN">Observations:
                <br />
            </strong> {observations}
        </p>
        <p>
            <strong className="text-primaryADMN">Description:
                <br />
            </strong> {description}
        </p>
    </div>


GameProgress.propTypes = {
    progress: PropTypes.array.isRequired,

}

export default GameProgress