import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo-rocketseat.svg';

const Dashboard: React.FC = () => {
  return(
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore github repositories</Title>

      <Form>
        <input type="text" placeholder="Insert 'user/repository' to search" />
        <button>Search</button>
      </Form>

      <Repositories>
        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/5737266?s=400&u=f3872a7ea78aa29b754dfc3e69e4eba27f649b54&v=4" alt="User Avatar"/>
          <div>
            <strong>Development Repository 01</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sem malesuada nibh venenatis aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/5737266?s=400&u=f3872a7ea78aa29b754dfc3e69e4eba27f649b54&v=4" alt="User Avatar"/>
          <div>
            <strong>Development Repository 02</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sem malesuada nibh venenatis aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#">
          <img src="https://avatars1.githubusercontent.com/u/5737266?s=400&u=f3872a7ea78aa29b754dfc3e69e4eba27f649b54&v=4" alt="User Avatar"/>
          <div>
            <strong>Development Repository 03</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis sem malesuada nibh venenatis aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur a.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
