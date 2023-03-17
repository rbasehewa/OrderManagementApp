import { AgGridReact } from 'ag-grid-react';
import React, { useState, useMemo} from 'react';
import { Customer, Order } from '../../../graphql/generated/schema';
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

interface OrderListProps{
    orders: Order[]
}


export default function OrderList({orders} : OrderListProps){

    const [columnDefs] = useState(
        [
            {
                field: 'id',
                width: 50,
                suppressSizeToFit: true
            },
            {
                field: 'customer',
                cellRenderer: function(params : any){
                    const customer = params.value as Customer;
                    return customer.firstname + ' ' + customer.lastname;
                }
            },
            {
                field: 'orderDate'
            },
            {
                field: 'description'
            },
            {
                field: 'status'
            },
        
        ]

    );


    const defaultColDef  = useMemo(() => ({
        sortable: true,
        filter: true,
        resizeable: true
    }), []);

    return (
        <div className="ag-theme-alpine" style={{height: 500, width: '100%'}}>
            <AgGridReact
            
            rowData={orders}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}

            />

        
        </div>
    )
}