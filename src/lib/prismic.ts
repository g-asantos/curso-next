import Prismic from 'prismic-javascript';

export const apiEndpoint = //copiar do api do prismic

export const client = (req = null) => {

    const options = req ? {req} : null


    return Prismic.client(apiEndpoint, options)
};