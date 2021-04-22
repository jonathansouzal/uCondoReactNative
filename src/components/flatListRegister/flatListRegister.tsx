import React, {useState, useEffect} from 'react';
import {
  MainContainer,
  FlatListStyled,
  ButtonItem,
  TextItem,
  DeleteItem,
  ContainerList,
  TextTitle,
  HeaderList,
  TextRegister
} from './style.flatListRegister';
import Icon from 'react-native-vector-icons/Feather';
import {getPlans} from '../../db/api';

export default function FlatListRegister() {
  const myIcon = <Icon name="trash" size={20} color="#C4C4D1" />;
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    if(plans.length > 0)
      return;
      setPlans(getPlans());
  }, [])

  const renderItem = ({item}: any) => (
    <ButtonItem>
      <TextItem>
        {item.codigo} - {item.nomeDaConta}
      </TextItem>
      <DeleteItem>{myIcon}</DeleteItem>
    </ButtonItem>
  );

  return (
    <MainContainer>
      <ContainerList>
        <HeaderList>
          <TextTitle>Listagem</TextTitle>
          <TextRegister>{plans.length} registros</TextRegister>
        </HeaderList>
        <FlatListStyled
          data={plans}
          renderItem={renderItem}
          keyExtractor={(item: any, index: number) =>
            item.codigo.concat(String(index))
          }
        />
      </ContainerList>
    </MainContainer>
  );
}
