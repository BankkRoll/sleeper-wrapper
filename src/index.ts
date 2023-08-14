// Importing all the functions
import { getAllDraftsForLeague } from './endpoints/drafts/getAllDraftsForLeague';
import { getAllDraftsForUser } from './endpoints/drafts/getAllDraftsForUser';
import { getAllPicksInDraft } from './endpoints/drafts/getAllPicksInDraft';
import { getSpecificDraft } from './endpoints/drafts/getSpecificDraft';
import { getTradedPicksInDraft } from './endpoints/drafts/getTradedPicksInDraft';
import { getNFLState } from './endpoints/nflState/getNFLState';
import { fetchAllPlayers } from './endpoints/players/fetchAllPlayers';
import { getTrendingPlayers } from './endpoints/players/getTrendingPlayers';
import { getTradedPicks } from './endpoints/transactions/getTradedPicks';
import { getTransactions } from './endpoints/transactions/getTransactions';
import { fetchAvatarFullSizeUrl } from './endpoints/user/fetchAvatarFullSize';
import { fetchAvatarThumbnailUrl } from './endpoints/user/fetchAvatarThumbnail';
import { fetchUser } from './endpoints/user/fetchUser';
import { getLeaguesForUser } from './endpoints/user/getLeaguesForUser';
import { getMatchupsInLeague } from './endpoints/user/getMatchupsInLeague';
import { getPlayoffBracketLosers } from './endpoints/user/getPlayoffBracketLosers';
import { getPlayoffBracketWinners } from './endpoints/user/getPlayoffBracketWinners';
import { getRostersInLeague } from './endpoints/user/getRostersInLeague';
import { getSpecificLeague } from './endpoints/user/getSpecificLeague';
import { getUsersInLeague } from './endpoints/user/getUsersInLeague';

// Exporting all the functions
export {
  getAllDraftsForLeague,
  getAllDraftsForUser,
  getAllPicksInDraft,
  getSpecificDraft,
  getTradedPicksInDraft,
  getNFLState,
  fetchAllPlayers,
  getTrendingPlayers,
  getTradedPicks,
  getTransactions,
  fetchAvatarFullSizeUrl,
  fetchAvatarThumbnailUrl,
  fetchUser,
  getLeaguesForUser,
  getMatchupsInLeague,
  getPlayoffBracketLosers,
  getPlayoffBracketWinners,
  getRostersInLeague,
  getSpecificLeague,
  getUsersInLeague
};
