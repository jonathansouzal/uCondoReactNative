import React from 'react';
import {
  MainContainer,
  AddIcon,
  TitleBar,
  IconAdd,
  TitleSearch,
  SearchBar,
  SearchIcon,
  SearchInput,
} from './style.search';

export default function Search() {
  const iconAdd = <IconAdd name="plus" color="#C4C4D1" />;
  const iconSearch = <SearchIcon name="search" color="#C4C4D1" />;

  return (
    <MainContainer>
      <TitleBar>
        <TitleSearch>Plano de Contas</TitleSearch>
        <AddIcon>{iconAdd}</AddIcon>
      </TitleBar>
      <SearchBar>
        {iconSearch}
        <SearchInput placeholder="Pesquisar conta"/>
      </SearchBar>
    </MainContainer>
  );
}
