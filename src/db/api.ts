import { planosDeConta } from './planosDeConta';
import AsyncStorage from '@react-native-community/async-storage';

export const getPlans = () => {
    const item = AsyncStorage.getItem('@ucondo:plans');
    let plans = ''
    item.then(data => plans = data);
    if(plans){
        return JSON.parse(plans);
    } else {
        AsyncStorage.setItem('@ucondo:plans', JSON.stringify(planosDeConta));
        return planosDeConta;
    }
}