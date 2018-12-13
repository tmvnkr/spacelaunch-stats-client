import React from 'react';

export default function Launchpad() {
  return (
    <div>
      <h1>Launchpad</h1>
    </div>
  );
}

// <Query query={GET_SINGLE_LAUNCH} variables={{ id }}>
//             {({ loading, error, data, refetch }) => {
//               if (loading) return <h1>Loading...</h1>;
//               if (error) return `Error!: ${error}`;
//               const {
//                 id,
//                 name,
//                 missionId,
//                 launchYear,
//                 launchDateUnix,
//                 launchDateUTC,
//                 launchDateLocal
//               } = data.singleLaunch;
//               return (
//                 <div>
//                   <h1>id: {id}</h1>
//                   <h1>name: {name}</h1>
//                   <h1>missionId: {missionId}</h1>
//                   <h1>launchYear: {launchYear}</h1>
//                   <h1>launchDateUnix: {launchDateUnix}</h1>
//                   <h1>launchDateUTC: {launchDateUTC}</h1>
//                   <h1>launchDateLocal: {launchDateLocal}</h1>
//                   <button onClick={() => refetch()}>Refetch!</button>
//                 </div>
//               );
//             }}
//           </Query>
