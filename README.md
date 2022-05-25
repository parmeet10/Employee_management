1 .End point - /employee/signup -> (payload) -> {
    "Ename":"tanuj",
    "Eaddress":"Delhi",
    "designation":"Sr.dev",
    "doj":"01/04/2002"
}
OUTPUT => {
    "data": {
        "id": "628e07418c6ee52ed6b2b43d",
        "name": "tanuj"
    },
    "message": "Employee saved successfully"
}
--------------------------------------------------------------------------
2.End point - /employee/details -> (payload) -> {
    
}
OUTPUT => {
    "data": [
        {
            "_id": "628e0359cf77d3daa738b923",
            "Ename": "karan",
            "Eaddress": "delhi",
            "designation": "sr.dev",
            "doj": "2002-01-03T18:30:00.000Z",
            "dor": "2015-01-03T18:30:00.000Z",
            "__v": 0
        },
        {
            "_id": "628e07418c6ee52ed6b2b43d",
            "Ename": "tanuj",
            "Eaddress": "delhi",
            "designation": "sr.dev",
            "doj": "2002-01-03T18:30:00.000Z",
            "dor": null,
            "__v": 0
        }
    ],
    "message": "employee detailed fetched successfully"
}
--------------------------------------------------------------------------

3.End point - /employee/delete -> (payload) -> {
    "Ename":"karan",
    "Eaddress":"delhi",
    "dor":"01/04/2015"
}
OUTPUT => {
    "data": {
        "_id": "628e0359cf77d3daa738b923",
        "Ename": "karan",
        "Eaddress": "delhi",
        "designation": "sr.dev",
        "doj": "2002-01-03T18:30:00.000Z",
        "dor": "2015-01-03T18:30:00.000Z",
        "__v": 0
    },
    "message": "employee deleted successfully"
}

--------------------------------------------------------------------------
4. End point - /employee/delete -> (payload) -> {
    "Ename":"karan",
    "Eaddress":"delhi",
    "dor":"01/04/2015"
}
OUTPUT => {
    "data": {
        "_id": "628e0359cf77d3daa738b923",
        "Ename": "karan",
        "Eaddress": "delhi",
        "designation": "sr.dev",
        "doj": "2002-01-03T18:30:00.000Z",
        "dor": "2015-01-03T18:30:00.000Z",
        "__v": 0
    },
    "message": "employee deleted successfully"
}

--------------------------------------------------------------------------
5. End point - /employee/address/update -> (payload) -> {
    "Ename":"parmeet",
    "currentEaddress":"uttar pradesh",
    "newEaddress": "punjab"
}
OUTPUT =>{
    "data": [
        {
            "_id": "628de12e852d44741725d435",
            "Ename": "parmeet",
            "Eaddress": "punjab",
            "designation": "p manager",
            "doj": "2002-01-03T18:30:00.000Z",
            "__v": 0
        }
    ],
    "message": "employee adress updated successfully"
}
--------------------------------------------------------------------------
6.End point - /employee/removal-> (payload) -> {}
OUTPUT =>{
    "data": [
        {}
    ],
    "message": "employee removed successfully"
}
--------------------------------------------------------------------------
7. End point - /employee/promotion -> (payload) -> {
    "Ename":"karan",
    "currentDesignation":"director",
    "newDesignation":"sr.dev"
}
OUTPUT =>{
    "data": [
        {
            "_id": "628e0359cf77d3daa738b923",
            "Ename": "karan",
            "Eaddress": "delhi",
            "designation": "sr.dev",
            "doj": "2002-01-03T18:30:00.000Z",
            "dor": "2015-01-03T18:30:00.000Z",
            "__v": 0
        },
        {
            "_id": "628e07418c6ee52ed6b2b43d",
            "Ename": "tanuj",
            "Eaddress": "delhi",
            "designation": "sr.dev",
            "doj": "2002-01-03T18:30:00.000Z",
            "dor": null,
            "__v": 0
        }
    ],
    "message": "employee detailed fetched successfully"
}
--------------------------------------------------------------------------
8. End point - /employee/count -> (payload) -> {}
OUTPUT =>{
    "data": 2,
    "message": "operation successful"
}


