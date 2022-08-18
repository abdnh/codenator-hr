import { Breadcrumb ,Table} from 'antd';
import React from 'react';


export default function Com_breadcrumb(props) {
    return (
        <div className='card-body'>
            <Breadcrumb>
                <Table style={{width : "100%"}} dataSource={props.data} columns={props.columns}/>
            </Breadcrumb>
        </div>
    )
}
