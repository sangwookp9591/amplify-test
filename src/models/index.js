// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Category = {
  "CAFE": "CAFE",
  "FOOD": "FOOD",
  "BEER": "BEER",
  "GUITAR": "GUITAR"
};

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { Follower, Following, Reply, Comment, Media, Avater, User } = initSchema(schema);

export {
  Follower,
  Following,
  Reply,
  Comment,
  Media,
  Avater,
  User,
  Category,
  Gender
};