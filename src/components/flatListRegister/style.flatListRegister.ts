import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const ContainerList = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: #F0EDF5;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
`;

export const FlatListStyled = styled.FlatList`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 5px;
`;

export const ButtonItem = styled.TouchableOpacity`
    width: 90%;
    height: 56px;
    background-color: #fff;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    margin-top: 14px;
    padding: 18px;
`;

export const TextItem = styled.Text`
    width: 90%;
`;

export const DeleteItem = styled.TouchableOpacity``;

export const TextTitle = styled.Text`
    color: #3D3D4C;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    margin-left: 28px;
    margin-top: 18px;
`;

export const TextRegister = styled.Text`
    color: #A0A0B2;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    text-align: right;
    margin-top: 21px;
    margin-right: 28px;
`;

export const HeaderList = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const MainContainer = styled.View`
    flex: 1;
    background-color: #622490;
`;