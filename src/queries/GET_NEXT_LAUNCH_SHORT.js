import gql from 'graphql-tag';

export default gql`
  query singleLaunch($id: ID!) {
    singleLaunch(id: $id) {
      id
      name
      missionId
      launchYear
      launchDateUnix
      launchDateUTC
      launchDateLocal
    }
  }
`;

// ADD GET NEXT LAUNCH!
