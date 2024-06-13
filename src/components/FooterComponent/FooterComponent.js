import React from 'react';

const FooterComponent = () => {
    return(
        <div
        style={{
          backgroundColor: '#000000',
          bottom: 0, 
          width: '100%', 
          display: 'flex', // Flexbox 
          justifyContent: 'space-between', //
        }}
    >
        <div
          className='AppText'
          style={{
            color: '#DDDDDD',
            marginLeft: 20,
            marginBottom:5,
          }}
        >
            Powered By TGLIM
        </div>
        <div
            className='AppText'
            style={{
                color: '#DDDDDD',
                marginRight: 20,
                marginBottom:5,
            }}
        >
            github.com/dlawork9888
        </div>
      </div>
    )
}

export default FooterComponent