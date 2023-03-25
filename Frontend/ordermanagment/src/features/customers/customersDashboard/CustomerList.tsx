import React, { useState } from "react";
import OmGrid from "../../../components/elements/OmGrid";
import { Address, Customer } from "../../../graphql/generated/schema";



interface CustomerListProps{
    customers: Customer[]
}


export default function CustomerList({customers}: CustomerListProps){

    const [columnDefs] = useState(
        [
            {
                field: 'id',
                width: 50,
                suppressSizeToFit: true
            },
            {
                field: 'firstname'
            },
            {
                field: 'Lastname'
            },
            {
                field: 'contactNumber'
            },
            {
                field: 'address',
                cellRenderer: function(params: any){
                    const address = params.value as Address
                    return address.addressLine1
                    + ', ' + address.addressLine2
                    + ', ' + address.city
                    + ', ' + address.state
                    + ', ' + address.country

                }
            },
            {
                field: 'email'
            }
        ]

    );



    return (
        <OmGrid columnDefs={columnDefs} rowData={customers} />
    )
}