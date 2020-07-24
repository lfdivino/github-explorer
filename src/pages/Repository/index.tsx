import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo-rocketseat.svg';

import { Header, RepositoryInfo, RepositoryIssues } from './styles';

const Repository: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>
        <a href="#">
          <FiChevronLeft size={16} />
          Voltar
        </a>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/5737266?s=400&u=f3872a7ea78aa29b754dfc3e69e4eba27f649b54&v=4" alt="User Avatar"/>
          <div>
            <strong>Development Repository 01</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sem malesuada nibh venenatis aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>4235</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>14</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>312</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <RepositoryIssues>
        <a href="#">
          <div>
            <strong>Issue 01</strong>
            <p>Luiz Felipe</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <div>
            <strong>Issue 02</strong>
            <p>Luiz Felipe</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <div>
            <strong>Issue 03</strong>
            <p>Luiz Felipe</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <div>
            <strong>Issue 04</strong>
            <p>Luiz Felipe</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <div>
            <strong>Issue 05</strong>
            <p>Luiz Felipe</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <div>
            <strong>Issue 06</strong>
            <p>Luiz Felipe</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </RepositoryIssues>
    </>
  )
}

export default Repository;
