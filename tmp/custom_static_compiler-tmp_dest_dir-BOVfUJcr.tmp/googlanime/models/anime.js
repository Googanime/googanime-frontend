import DS from 'ember-data';
import App from 'ember';

let Anime = DS.Model.extend({
  slug: DS.attr('string'),
  canonicalTitle: DS.attr('string'),
  englishTitle: DS.attr('string'),
  romajiTitle: DS.attr('string'),
  japaneseTitle: DS.attr('string'),
  synopsis: DS.attr('string'),
  startedAiringDate: DS.attr('string'),
  finishedAiringDate: DS.attr('string'),
  youtubeVideoId: DS.attr('string'),
  ageRating: DS.attr('string'),
  episodeCount: DS.attr('string'),
  episodeLength: DS.attr('string'),
  showType: DS.attr('string'),
  posterImage: DS.attr('string'),
  coverImage: DS.attr('string'),
  communityRating: DS.attr('string'),
  genres: DS.hasMany('genre'),
  links: DS.attr('string')
});

export default Anime;
