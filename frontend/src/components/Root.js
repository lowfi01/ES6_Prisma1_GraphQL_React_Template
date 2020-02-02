import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

const GET_JOBS = gql`
  query fetchJobs {
    fetchJobs {
      id
      title
    }
  }
`;

const GET_FETCHUSERS = gql`
  query fetchUsers {
    fetchUsers {
      id
      name
      email
      posts {
        id
        title
      }
      jobs {
        title
      }
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const Root = () => {
  const { data: userData } = useQuery(GET_FETCHUSERS);
  const { data: getJobs, loading, error } = useQuery(GET_JOBS);

  useEffect(() => {
    console.log(userData);
    console.log(getJobs);
  });

  return (
    <Wrapper>
      <h1>Hello World!</h1>
      <pre>{JSON.stringify(userData)}</pre>
    </Wrapper>
  );
};

export default Root;
