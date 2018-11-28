import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { createGlobalStyle } from 'styled-components';

const GET_LAUNCHES = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        id
        rocket {
          id
          name
        }
        mission {
          name
          missionPatch
        }
      }
    }
  }
`;

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      id
      site
      isBooked
      rocket {
        id
        name
        type
      }
      mission {
        name
        missionPatch
      }
    }
  }
`;

// Styled components - Global style
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #171c1f;
    color: white;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Query query={GET_LAUNCHES}>
        {({ data, loading, error, fetchMore }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <p>ERROR</p>;

          return (
            <>
              {data.launches &&
                data.launches.launches &&
                data.launches.launches.map(launch => (
                  <LaunchTile key={launch.id} launch={launch} />
                ))}
              <LaunchDetail {...data.launch} />

              {data.launches && data.launches.hasMore && (
                <button
                  onClick={() =>
                    fetchMore({
                      variables: {
                        after: data.launches.cursor
                      },
                      updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                        if (!fetchMoreResult) return prev;
                        return {
                          ...fetchMoreResult,
                          launches: {
                            ...fetchMoreResult.launches,
                            launches: [
                              ...prev.launches.launches,
                              ...fetchMoreResult.launches.launches
                            ]
                          }
                        };
                      }
                    })
                  }>
                  Load More
                </button>
              )}
            </>
          );
        }}
      </Query>
    </>
  );
}

const LaunchTile = ({ launch }) => {
  let {
    id,
    mission: { missionPatch, name },
    rocket
  } = launch;
  const patch =
    missionPatch === null ? (
      <img src="https://i.imgur.com/R7Qp8PY.png" alt="patch" width="100px" />
    ) : (
      <img src={missionPatch} alt="patch" width="100px" />
    );
  return (
    <>
      <h3>{name}</h3>

      {patch}
      <h5>{rocket.name}</h5>
      <h5>{id}</h5>
    </>
  );
};

const LaunchDetail = ({ id, site, rocket }) => (
  <>
    {rocket.name} {rocket.type}
    <h5>{site}</h5>
  </>
);

export default App;
