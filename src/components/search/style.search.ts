import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Feather';

export const MainContainer = styled.View`
   flex-direction: column;
   background-color: #622490;
`;

export const TitleBar = styled.View`
   justify-content: space-between;
   align-items: center;
   flex-direction: row;
   padding-top: 11px;
   padding-bottom: 25px;
`;

export const TitleSearch = styled.Text`
   margin-left: 22px;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 26px;
   color: #FFFFFF;
`;

export const AddIcon = styled.TouchableOpacity``;

export const IconAdd = styled(Icon)`
   margin-right: 17px;
   font-style: normal;
   font-weight: 300;
   font-size: 36px;
   line-height: 42px;
   color: #FFFFFF;
`;

export const SearchBar = styled.View`
   background: #FFFFFF;
   border-radius: 100px;
   margin-left: 21px;
   margin-right: 20px;
   margin-bottom: 32px;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
`;

export const SearchIcon = styled(Icon)`
   width: 20px;
   height: 20px;
   font-size: 20px;
   margin-left: 24px;
   margin-top: 18px;
   margin-bottom: 18px;
   margin-right: 16px;
`;

export const SearchInput = styled.TextInput`
   font-style: normal;
   font-weight: normal;
   font-size: 15px;
   line-height: 18px;
   color: #C4C4D1;
`;