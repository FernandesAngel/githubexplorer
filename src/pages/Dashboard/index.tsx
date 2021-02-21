import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53798926?s=460&u=05cdc463ee8ad8c97b819b1a894cb62e03dd10bf&v=4"
            alt="Angel Fernandes"
          />
          <div>
            <strong>rocketseat/unforms</strong>
            <p>Descrição aquizão</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53798926?s=460&u=05cdc463ee8ad8c97b819b1a894cb62e03dd10bf&v=4"
            alt="Angel Fernandes"
          />
          <div>
            <strong>rocketseat/unforms</strong>
            <p>Descrição aquizão</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/53798926?s=460&u=05cdc463ee8ad8c97b819b1a894cb62e03dd10bf&v=4"
            alt="Angel Fernandes"
          />
          <div>
            <strong>rocketseat/unforms</strong>
            <p>Descrição aquizão</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
