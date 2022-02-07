import React from 'react';
import Request from '../../Data/Requests';

function TableSistema() {

    const request = new Request();
    
    return ( 
        <div>
            {console.log(request.svc())}
        </div>
     );
}

export default TableSistema;