import axiosCon from '../../module/axios';


export const getCounter = (add=0)=>(axiosCon.get(`/api/counter/${add}`))