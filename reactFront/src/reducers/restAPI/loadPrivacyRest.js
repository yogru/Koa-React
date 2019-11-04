import axiosCon from '../../module/axios';

export const loadPrivacyRest =()=>( 
     axiosCon.get(`/api/privacy/`)
)