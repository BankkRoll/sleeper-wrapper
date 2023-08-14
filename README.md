# Sleeper Wrapper

Sleeper Wrapper is an NPM package that offers a seamless integration with the Sleeper Fantasy Football API. This package encompasses all available endpoints related to drafts, players, transactions, user information, NFL states, and more. Whether you're building a fantasy football dashboard, a statistical analysis tool, or a custom league management system, Sleeper Wrapper simplifies your interaction with the Sleeper platform and helps you turn ideas into reality with ease.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [User Information](#user-information)
  - [Drafts](#drafts)
  - [Players](#players)
  - [Transactions](#transactions)
  - [NFL State](#nfl-state)
- [Example](#example)
- [File Directory](#file-directory)
- [Errors](#errors)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install sleeper-wrapper
```

## Usage

### User Information

| Function                      | Description                                              | Example Usage                                       |
|-------------------------------|----------------------------------------------------------|----------------------------------------------------|
| `fetchUser`                   | Retrieves user information.                              | `const user = await fetchUser('usernameOrId');`    |
| `fetchAvatarFullSizeUrl`      | Gets the full-size avatar.                               | `const url = fetchAvatarFullSizeUrl('avatarId');`  |
| `fetchAvatarThumbnailUrl`     | Gets the thumbnail of the avatar.                        | `const url = fetchAvatarThumbnailUrl('avatarId');` |
| `getLeaguesForUser`           | Retrieves all leagues for a user.                        | `const leagues = await getLeaguesForUser('userId', 'sport', 'season');` |
| `getSpecificLeague`           | Retrieves specific league information.                   | `const league = await getSpecificLeague('leagueId');` |
| `getRostersInLeague`          | Retrieves all rosters in a league.                       | `const rosters = await getRostersInLeague('leagueId');` |
| `getUsersInLeague`            | Retrieves all users in a league.                         | `const users = await getUsersInLeague('leagueId');` |
| `getMatchupsInLeague`         | Retrieves all matchups in a league for a given week.     | `const matchups = await getMatchupsInLeague('leagueId', 'week');` |
| `getPlayoffBracketWinners`    | Retrieves the winners' playoff bracket.                  | `const winners = await getPlayoffBracketWinners('leagueId');` |
| `getPlayoffBracketLosers`     | Retrieves the losers' playoff bracket.                   | `const losers = await getPlayoffBracketLosers('leagueId');` |

### Drafts

| Function                      | Description                                              | Example Usage                                           |
|-------------------------------|----------------------------------------------------------|--------------------------------------------------------|
| `getAllDraftsForUser`         | Retrieves all drafts by a user.                          | `const drafts = await getAllDraftsForUser('userId');`  |
| `getAllDraftsForLeague`       | Retrieves all drafts for a league.                       | `const drafts = await getAllDraftsForLeague('leagueId');` |
| `getSpecificDraft`            | Retrieves a specific draft.                              | `const draft = await getSpecificDraft('draftId');`     |
| `getAllPicksInDraft`          | Retrieves all picks in a draft.                          | `const picks = await getAllPicksInDraft('draftId');`   |
| `getTradedPicksInDraft`       | Retrieves all traded picks in a draft.                   | `const tradedPicks = await getTradedPicksInDraft('draftId');` |

### Players

| Function                      | Description                                              | Example Usage                                       |
|-------------------------------|----------------------------------------------------------|----------------------------------------------------|
| `fetchAllPlayers`             | Fetches all players (intended to be used once per day).  | `const players = await fetchAllPlayers();`         |
| `getTrendingPlayers`          | Gets a list of trending players based on add/drop activity.| `const trendingPlayers = await getTrendingPlayers('sport', 'type');` |

### Transactions

| Function                      | Description                                              | Example Usage                                           |
|-------------------------------|----------------------------------------------------------|--------------------------------------------------------|
| `getTransactions`             | Retrieves all free agent transactions, waivers, and trades. | `const transactions = await getTransactions('leagueId', 'round');` |
| `getTradedPicks`              | Retrieves all traded picks in a league, including future picks. | `const tradedPicks = await getTradedPicks('leagueId');` |

### NFL State

| Function                      | Description                                              | Example Usage                       |
|-------------------------------|----------------------------------------------------------|-------------------------------------|
| `getNFLState`                 | Returns information about the current state for any sport. | `const state = await getNFLState();` |


## Example

```ts
import { useState, useEffect } from 'react';
import { fetchUser, fetchAvatarFullSizeUrl, fetchAvatarThumbnailUrl, getLeaguesForUser } from 'sleeper-wrapper';
import { UserResponse } from 'sleeper-wrapper/dist/endpoints/user/fetchUser';

interface UserData {
  username: string;
  user_id: string;
  displayName: string;
  avatar: string;
}

interface LeagueData {
  league_id: string;
  name: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [leagues, setLeagues] = useState<LeagueData[]>([]);
  const username = 'INPUT_YOUR_USERNAME_HERE';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData: UserResponse = await fetchUser(username);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUserData();
  }, [username]);

  useEffect(() => {
    const fetchUserLeagues = async () => {
      try {
        if (user) {
          const fetchedLeagues = await getLeaguesForUser(user.user_id, 'nfl', '2023');
          setLeagues(fetchedLeagues);
        }
      } catch (error) {
        console.error('Error fetching leagues:', error);
      }
    };

    if (user) {
      fetchUserLeagues();
    }
  }, [user]);

  return (
    <div>
      {user ? (
        <div>
          <p>Display Name: {user.displayName}</p>
          <p>Username: {user.username}</p>
          <p>User ID: {user.user_id}</p>
          <img src={fetchAvatarFullSizeUrl(user.avatar)} alt="Avatar" />
          <img src={fetchAvatarThumbnailUrl(user.avatar)} alt="Avatar" />
          <p>Leagues:</p>
          {leagues.map((league) => (
            <p key={league.league_id}>{league.name}</p>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
```


## File Directory

```plaintext
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── endpoints
│   │   ├── drafts
│   │   ├── nflState
│   │   ├── players
│   │   ├── transactions
│   │   └── user
│   ├── errors
│   │   └── ApiErrors.ts
│   └── index.ts
└── tsconfig.json
```

## Errors

- **400:** Bad Request
- **404:** Not Found
- **429:** Too Many Requests
- **500:** Internal Server Error
- **503:** Service Unavailable

## Contributing

Feel free to fork the repository, make changes, and submit pull requests. If you find any bugs or have suggestions, please open an issue.

## License

This project is licensed under the MIT [License](./license).
