import moment from 'moment';

//Color primary attribute
export const primaryRed = "#ED2E45";
export const primaryGray = "#8e8e8f"

//Get Top Anime currently Airing
export const GET_TOP_AIRING_ANIME = "https://api.jikan.moe/v3/top/anime/1/airing";

//Get Top Anime with status Upcoming
export const GET_TOP_UPCOMING_ANIME = "https://api.jikan.moe/v3/top/anime/1/upcoming";

//Get Top Movie Anime
export const GET_TOP_MOVIE_ANIME = "https://api.jikan.moe/v3/top/anime/1/movie";

//Get Episode of Anime
export const GET_EPISODES_ANIME = (item) => (item.episodes ? item.episodes : "TBC");

//Get Type of Anime
export const GET_TYPE_ANIME = (item) => (item.type ? item.type : "Unknown");

//Get Date of Aired Anime
export const GET_AIRED_ANIME = (item) => (item.start_date ? item.start_date : "TBC");

//Get Formatted Date of Aired Anime
export const GET_FORMATTED_DATE_ANIME = (item) => (item.start_date ? moment(item.start_date).format('MMMM YYYY') : "Unknown")

//Get Genre of Anime
export const GET_GENRE_ANIME = (item) => (item.genres[0] ? item.genres[0].name : "");

//Get Score of Anime
export const GET_SCORE_ANIME = (item) => (item.score ? item.score : "-");

//Anime per Season
export const YEAR = new Date().getFullYear();

export const GET_SEASON_ANIME =  `https://api.jikan.moe/v3/season/${YEAR}`;

//Get the Anime that airing today

export const TODAY = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][new Date().getDay()];

export const GET_TODAY_ANIME = `https://api.jikan.moe/v3/schedule/${TODAY}`;

export const GET_WEEKDAY_ANIME = `https://api.jikan.moe/v3/schedule`;