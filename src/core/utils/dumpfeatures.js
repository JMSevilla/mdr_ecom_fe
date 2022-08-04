import { SSP_Feature1, SSP_Feature2 } from "../../components/__dump__/__field_dump"

export const projectbreakdown = [
    {
        field_id : 1,
        field_name : 'ssp_login',
        field_type : 'ssp',
        joinedSys : [
            'POS_INV',
            'ECOM',
            'INV',
            'PYRLL',
            'DFS',
            'PSB',
            'ES'
        ],
        field : <SSP_Feature1 />
    },
    {
        field_id : 2,
        field_name : 'ssp_customer_registration',
        field_type : 'ssp',
        joinedSys : [
            'ECOM',
            'PSB'
        ],
        field : <SSP_Feature2 />
    }
]