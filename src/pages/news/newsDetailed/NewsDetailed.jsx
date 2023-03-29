import React from 'react';
import PocketBase from 'pocketbase';
import urlData from '../../../url.json'

const NewsDetailed = async() => {
    
    const pb = new PocketBase(urlData['SERVER_URL']);
 
    
    const record = await pb.collection('news').getOne('RECORD_ID', {
        expand: 'relField1,relField2.subRelField',
    });
console.log(record)
    return (
        <div>

        </div>  
    );
};

export default NewsDetailed;