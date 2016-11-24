import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default (props) => {
    return (
        <div>
          <Sparklines height={120} width={180} data={props.data}>
             <sparklinesLine color={props.color}/>
          </Sparklines>
        </div>
        );
}