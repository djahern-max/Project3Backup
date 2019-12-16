import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
    profile: {
        specialty,
        goals,
        name
    }
}) =>

    // <div>
    <div className="profileAboutADMN">
        {goals && (
            <Fragment>
                <h2 class="text-primary">{name.trim().split(' ')[0]}'s Goals</h2>
                <p>
                    {goals}
                </p>
                <div class="line"></div>
            </Fragment>
        )}
    </div>



ProfileAbout.propTypes = {

}

export default ProfileAbout
