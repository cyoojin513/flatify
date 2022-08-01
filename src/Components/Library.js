import React from 'react'

function Library() {
  return (
    <div>
        Library
        <div>
            Welcome, Static-User
            <div className='favorites'>
                Favorites go here:
                {/* Map over list of favorites for (static) user */}
            </div>
        </div>
    </div>
  )
}

export default Library