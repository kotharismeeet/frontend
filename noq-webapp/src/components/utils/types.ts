export interface Component {
    [props: string]: object
}

export interface ComponentWithoutProps {

}

export interface buttonWithLinksProps  {
    label: string,
    prefix: string,
    suffix: string
    id: string
}

export interface payloadParams {
    url: string,
    body: object
}

export interface useAxiosPromise {
    //Awaited<Promise<[response: object,error: object]>>
}

export interface vendorObj {
    _id: string,
    restauarant_official_name: string,
    display_name: string,
    city: string,
    registered_email: string,
    description: string,
    address: string,
    country: string,
    postal_code: string,
    contact_no: number,
    serviceTypes: [string],
    location: object
}
