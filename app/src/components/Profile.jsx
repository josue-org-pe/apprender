import React from "react"

function Profile ( {imgProfileSrc, username} ) {

    return(

        <div  className="profile">
            <div>
                <img src={imgProfileSrc} alt="Img_profile" />
            </div>
            <div>
                <h3>{username}</h3>
            </div>
        </div>

    )

}

export default Profile;