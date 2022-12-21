/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMediaInput = {
  id?: string | null,
  uploader?: string | null,
  name?: string | null,
  description?: string | null,
  thumbnail?: string | null,
  poster?: string | null,
  isHotOn?: boolean | null,
  hotCount?: number | null,
  isCommentOn?: boolean | null,
  isFixed?: boolean | null,
  viewCount?: number | null,
  userID: string,
  _version?: number | null,
};

export type ModelMediaConditionInput = {
  uploader?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  isHotOn?: ModelBooleanInput | null,
  hotCount?: ModelIntInput | null,
  isCommentOn?: ModelBooleanInput | null,
  isFixed?: ModelBooleanInput | null,
  viewCount?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMediaConditionInput | null > | null,
  or?: Array< ModelMediaConditionInput | null > | null,
  not?: ModelMediaConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Media = {
  __typename: "Media",
  id: string,
  uploader?: string | null,
  name?: string | null,
  description?: string | null,
  thumbnail?: string | null,
  poster?: string | null,
  isHotOn?: boolean | null,
  hotCount?: number | null,
  isCommentOn?: boolean | null,
  isFixed?: boolean | null,
  viewCount?: number | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMediaInput = {
  id: string,
  uploader?: string | null,
  name?: string | null,
  description?: string | null,
  thumbnail?: string | null,
  poster?: string | null,
  isHotOn?: boolean | null,
  hotCount?: number | null,
  isCommentOn?: boolean | null,
  isFixed?: boolean | null,
  viewCount?: number | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteMediaInput = {
  id: string,
  _version?: number | null,
};

export type CreateAvaterInput = {
  id?: string | null,
  name?: string | null,
  prefix?: string | null,
  _version?: number | null,
};

export type ModelAvaterConditionInput = {
  name?: ModelStringInput | null,
  prefix?: ModelStringInput | null,
  and?: Array< ModelAvaterConditionInput | null > | null,
  or?: Array< ModelAvaterConditionInput | null > | null,
  not?: ModelAvaterConditionInput | null,
};

export type Avater = {
  __typename: "Avater",
  id: string,
  name?: string | null,
  prefix?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAvaterInput = {
  id: string,
  name?: string | null,
  prefix?: string | null,
  _version?: number | null,
};

export type DeleteAvaterInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  age?: number | null,
  gender?: Gender | null,
  phone?: string | null,
  instagram?: string | null,
  email?: string | null,
  shortsCount?: number | null,
  followerCount?: number | null,
  latitude?: string | null,
  longitude?: string | null,
  category?: Category | null,
  isShop?: boolean | null,
  isPro?: boolean | null,
  isTerm?: boolean | null,
  isPrivacy?: boolean | null,
  isPush?: boolean | null,
  isWifi?: boolean | null,
  businessNumber?: string | null,
  _version?: number | null,
  userAvaterId?: string | null,
};

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}


export enum Category {
  CAFE = "CAFE",
  FOOD = "FOOD",
  BEER = "BEER",
  GUITAR = "GUITAR",
}


export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  phone?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  email?: ModelStringInput | null,
  shortsCount?: ModelIntInput | null,
  followerCount?: ModelIntInput | null,
  latitude?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  category?: ModelCategoryInput | null,
  isShop?: ModelBooleanInput | null,
  isPro?: ModelBooleanInput | null,
  isTerm?: ModelBooleanInput | null,
  isPrivacy?: ModelBooleanInput | null,
  isPush?: ModelBooleanInput | null,
  isWifi?: ModelBooleanInput | null,
  businessNumber?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userAvaterId?: ModelIDInput | null,
};

export type ModelGenderInput = {
  eq?: Gender | null,
  ne?: Gender | null,
};

export type ModelCategoryInput = {
  eq?: Category | null,
  ne?: Category | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  age?: number | null,
  gender?: Gender | null,
  phone?: string | null,
  instagram?: string | null,
  email?: string | null,
  shortsCount?: number | null,
  followerCount?: number | null,
  latitude?: string | null,
  Avater?: Avater | null,
  longitude?: string | null,
  category?: Category | null,
  isShop?: boolean | null,
  isPro?: boolean | null,
  isTerm?: boolean | null,
  isPrivacy?: boolean | null,
  isPush?: boolean | null,
  isWifi?: boolean | null,
  businessNumber?: string | null,
  Media?: ModelMediaConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userAvaterId?: string | null,
};

export type ModelMediaConnection = {
  __typename: "ModelMediaConnection",
  items:  Array<Media | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  age?: number | null,
  gender?: Gender | null,
  phone?: string | null,
  instagram?: string | null,
  email?: string | null,
  shortsCount?: number | null,
  followerCount?: number | null,
  latitude?: string | null,
  longitude?: string | null,
  category?: Category | null,
  isShop?: boolean | null,
  isPro?: boolean | null,
  isTerm?: boolean | null,
  isPrivacy?: boolean | null,
  isPush?: boolean | null,
  isWifi?: boolean | null,
  businessNumber?: string | null,
  _version?: number | null,
  userAvaterId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTodoInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  status: PostStatus,
  rating?: number | null,
  content?: string | null,
  _version?: number | null,
};

export enum PostStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  rating?: ModelIntInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelPostStatusInput = {
  eq?: PostStatus | null,
  ne?: PostStatus | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  status: PostStatus,
  rating?: number | null,
  content?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  status?: PostStatus | null,
  rating?: number | null,
  content?: string | null,
  _version?: number | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateVideoInput = {
  id?: string | null,
  name?: string | null,
  uri?: string | null,
  owner?: string | null,
  file?: S3ObjectInput | null,
  _version?: number | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelVideoConditionInput = {
  name?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelVideoConditionInput | null > | null,
  or?: Array< ModelVideoConditionInput | null > | null,
  not?: ModelVideoConditionInput | null,
};

export type Video = {
  __typename: "Video",
  id: string,
  name?: string | null,
  uri?: string | null,
  owner?: string | null,
  file?: S3Object | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateVideoInput = {
  id: string,
  name?: string | null,
  uri?: string | null,
  owner?: string | null,
  file?: S3ObjectInput | null,
  _version?: number | null,
};

export type DeleteVideoInput = {
  id: string,
  _version?: number | null,
};

export type ModelMediaFilterInput = {
  id?: ModelIDInput | null,
  uploader?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  isHotOn?: ModelBooleanInput | null,
  hotCount?: ModelIntInput | null,
  isCommentOn?: ModelBooleanInput | null,
  isFixed?: ModelBooleanInput | null,
  viewCount?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMediaFilterInput | null > | null,
  or?: Array< ModelMediaFilterInput | null > | null,
  not?: ModelMediaFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAvaterFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  prefix?: ModelStringInput | null,
  and?: Array< ModelAvaterFilterInput | null > | null,
  or?: Array< ModelAvaterFilterInput | null > | null,
  not?: ModelAvaterFilterInput | null,
};

export type ModelAvaterConnection = {
  __typename: "ModelAvaterConnection",
  items:  Array<Avater | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelGenderInput | null,
  phone?: ModelStringInput | null,
  instagram?: ModelStringInput | null,
  email?: ModelStringInput | null,
  shortsCount?: ModelIntInput | null,
  followerCount?: ModelIntInput | null,
  latitude?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  category?: ModelCategoryInput | null,
  isShop?: ModelBooleanInput | null,
  isPro?: ModelBooleanInput | null,
  isTerm?: ModelBooleanInput | null,
  isPrivacy?: ModelBooleanInput | null,
  isPush?: ModelBooleanInput | null,
  isWifi?: ModelBooleanInput | null,
  businessNumber?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userAvaterId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  status?: ModelPostStatusInput | null,
  rating?: ModelIntInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVideoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  uri?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelVideoFilterInput | null > | null,
  or?: Array< ModelVideoFilterInput | null > | null,
  not?: ModelVideoFilterInput | null,
};

export type ModelVideoConnection = {
  __typename: "ModelVideoConnection",
  items:  Array<Video | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionMediaFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  uploader?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionStringInput | null,
  poster?: ModelSubscriptionStringInput | null,
  isHotOn?: ModelSubscriptionBooleanInput | null,
  hotCount?: ModelSubscriptionIntInput | null,
  isCommentOn?: ModelSubscriptionBooleanInput | null,
  isFixed?: ModelSubscriptionBooleanInput | null,
  viewCount?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMediaFilterInput | null > | null,
  or?: Array< ModelSubscriptionMediaFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionAvaterFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  prefix?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAvaterFilterInput | null > | null,
  or?: Array< ModelSubscriptionAvaterFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  gender?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  instagram?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  shortsCount?: ModelSubscriptionIntInput | null,
  followerCount?: ModelSubscriptionIntInput | null,
  latitude?: ModelSubscriptionStringInput | null,
  longitude?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  isShop?: ModelSubscriptionBooleanInput | null,
  isPro?: ModelSubscriptionBooleanInput | null,
  isTerm?: ModelSubscriptionBooleanInput | null,
  isPrivacy?: ModelSubscriptionBooleanInput | null,
  isPush?: ModelSubscriptionBooleanInput | null,
  isWifi?: ModelSubscriptionBooleanInput | null,
  businessNumber?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionIntInput | null,
  content?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionVideoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  uri?: ModelSubscriptionStringInput | null,
  owner?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVideoFilterInput | null > | null,
  or?: Array< ModelSubscriptionVideoFilterInput | null > | null,
};

export type CreateMediaMutationVariables = {
  input: CreateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type CreateMediaMutation = {
  createMedia?:  {
    __typename: "Media",
    id: string,
    uploader?: string | null,
    name?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    poster?: string | null,
    isHotOn?: boolean | null,
    hotCount?: number | null,
    isCommentOn?: boolean | null,
    isFixed?: boolean | null,
    viewCount?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMediaMutationVariables = {
  input: UpdateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type UpdateMediaMutation = {
  updateMedia?:  {
    __typename: "Media",
    id: string,
    uploader?: string | null,
    name?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    poster?: string | null,
    isHotOn?: boolean | null,
    hotCount?: number | null,
    isCommentOn?: boolean | null,
    isFixed?: boolean | null,
    viewCount?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMediaMutationVariables = {
  input: DeleteMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type DeleteMediaMutation = {
  deleteMedia?:  {
    __typename: "Media",
    id: string,
    uploader?: string | null,
    name?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    poster?: string | null,
    isHotOn?: boolean | null,
    hotCount?: number | null,
    isCommentOn?: boolean | null,
    isFixed?: boolean | null,
    viewCount?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAvaterMutationVariables = {
  input: CreateAvaterInput,
  condition?: ModelAvaterConditionInput | null,
};

export type CreateAvaterMutation = {
  createAvater?:  {
    __typename: "Avater",
    id: string,
    name?: string | null,
    prefix?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAvaterMutationVariables = {
  input: UpdateAvaterInput,
  condition?: ModelAvaterConditionInput | null,
};

export type UpdateAvaterMutation = {
  updateAvater?:  {
    __typename: "Avater",
    id: string,
    name?: string | null,
    prefix?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAvaterMutationVariables = {
  input: DeleteAvaterInput,
  condition?: ModelAvaterConditionInput | null,
};

export type DeleteAvaterMutation = {
  deleteAvater?:  {
    __typename: "Avater",
    id: string,
    name?: string | null,
    prefix?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: Gender | null,
    phone?: string | null,
    instagram?: string | null,
    email?: string | null,
    shortsCount?: number | null,
    followerCount?: number | null,
    latitude?: string | null,
    Avater?:  {
      __typename: "Avater",
      id: string,
      name?: string | null,
      prefix?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    longitude?: string | null,
    category?: Category | null,
    isShop?: boolean | null,
    isPro?: boolean | null,
    isTerm?: boolean | null,
    isPrivacy?: boolean | null,
    isPush?: boolean | null,
    isWifi?: boolean | null,
    businessNumber?: string | null,
    Media?:  {
      __typename: "ModelMediaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userAvaterId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: Gender | null,
    phone?: string | null,
    instagram?: string | null,
    email?: string | null,
    shortsCount?: number | null,
    followerCount?: number | null,
    latitude?: string | null,
    Avater?:  {
      __typename: "Avater",
      id: string,
      name?: string | null,
      prefix?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    longitude?: string | null,
    category?: Category | null,
    isShop?: boolean | null,
    isPro?: boolean | null,
    isTerm?: boolean | null,
    isPrivacy?: boolean | null,
    isPush?: boolean | null,
    isWifi?: boolean | null,
    businessNumber?: string | null,
    Media?:  {
      __typename: "ModelMediaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userAvaterId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: Gender | null,
    phone?: string | null,
    instagram?: string | null,
    email?: string | null,
    shortsCount?: number | null,
    followerCount?: number | null,
    latitude?: string | null,
    Avater?:  {
      __typename: "Avater",
      id: string,
      name?: string | null,
      prefix?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    longitude?: string | null,
    category?: Category | null,
    isShop?: boolean | null,
    isPro?: boolean | null,
    isTerm?: boolean | null,
    isPrivacy?: boolean | null,
    isPush?: boolean | null,
    isWifi?: boolean | null,
    businessNumber?: string | null,
    Media?:  {
      __typename: "ModelMediaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userAvaterId?: string | null,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    status: PostStatus,
    rating?: number | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    status: PostStatus,
    rating?: number | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    status: PostStatus,
    rating?: number | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateVideoMutationVariables = {
  input: CreateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type CreateVideoMutation = {
  createVideo?:  {
    __typename: "Video",
    id: string,
    name?: string | null,
    uri?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateVideoMutationVariables = {
  input: UpdateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type UpdateVideoMutation = {
  updateVideo?:  {
    __typename: "Video",
    id: string,
    name?: string | null,
    uri?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteVideoMutationVariables = {
  input: DeleteVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type DeleteVideoMutation = {
  deleteVideo?:  {
    __typename: "Video",
    id: string,
    name?: string | null,
    uri?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetMediaQueryVariables = {
  id: string,
};

export type GetMediaQuery = {
  getMedia?:  {
    __typename: "Media",
    id: string,
    uploader?: string | null,
    name?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    poster?: string | null,
    isHotOn?: boolean | null,
    hotCount?: number | null,
    isCommentOn?: boolean | null,
    isFixed?: boolean | null,
    viewCount?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMediaQueryVariables = {
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMediaQuery = {
  listMedia?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      uploader?: string | null,
      name?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      poster?: string | null,
      isHotOn?: boolean | null,
      hotCount?: number | null,
      isCommentOn?: boolean | null,
      isFixed?: boolean | null,
      viewCount?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMediaQueryVariables = {
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMediaQuery = {
  syncMedia?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      uploader?: string | null,
      name?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      poster?: string | null,
      isHotOn?: boolean | null,
      hotCount?: number | null,
      isCommentOn?: boolean | null,
      isFixed?: boolean | null,
      viewCount?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MediaByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MediaByUserIDQuery = {
  mediaByUserID?:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      uploader?: string | null,
      name?: string | null,
      description?: string | null,
      thumbnail?: string | null,
      poster?: string | null,
      isHotOn?: boolean | null,
      hotCount?: number | null,
      isCommentOn?: boolean | null,
      isFixed?: boolean | null,
      viewCount?: number | null,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAvaterQueryVariables = {
  id: string,
};

export type GetAvaterQuery = {
  getAvater?:  {
    __typename: "Avater",
    id: string,
    name?: string | null,
    prefix?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAvatersQueryVariables = {
  filter?: ModelAvaterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAvatersQuery = {
  listAvaters?:  {
    __typename: "ModelAvaterConnection",
    items:  Array< {
      __typename: "Avater",
      id: string,
      name?: string | null,
      prefix?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAvatersQueryVariables = {
  filter?: ModelAvaterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAvatersQuery = {
  syncAvaters?:  {
    __typename: "ModelAvaterConnection",
    items:  Array< {
      __typename: "Avater",
      id: string,
      name?: string | null,
      prefix?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: Gender | null,
    phone?: string | null,
    instagram?: string | null,
    email?: string | null,
    shortsCount?: number | null,
    followerCount?: number | null,
    latitude?: string | null,
    Avater?:  {
      __typename: "Avater",
      id: string,
      name?: string | null,
      prefix?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    longitude?: string | null,
    category?: Category | null,
    isShop?: boolean | null,
    isPro?: boolean | null,
    isTerm?: boolean | null,
    isPrivacy?: boolean | null,
    isPush?: boolean | null,
    isWifi?: boolean | null,
    businessNumber?: string | null,
    Media?:  {
      __typename: "ModelMediaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userAvaterId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      age?: number | null,
      gender?: Gender | null,
      phone?: string | null,
      instagram?: string | null,
      email?: string | null,
      shortsCount?: number | null,
      followerCount?: number | null,
      latitude?: string | null,
      longitude?: string | null,
      category?: Category | null,
      isShop?: boolean | null,
      isPro?: boolean | null,
      isTerm?: boolean | null,
      isPrivacy?: boolean | null,
      isPush?: boolean | null,
      isWifi?: boolean | null,
      businessNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAvaterId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      age?: number | null,
      gender?: Gender | null,
      phone?: string | null,
      instagram?: string | null,
      email?: string | null,
      shortsCount?: number | null,
      followerCount?: number | null,
      latitude?: string | null,
      longitude?: string | null,
      category?: Category | null,
      isShop?: boolean | null,
      isPro?: boolean | null,
      isTerm?: boolean | null,
      isPrivacy?: boolean | null,
      isPush?: boolean | null,
      isWifi?: boolean | null,
      businessNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userAvaterId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    status: PostStatus,
    rating?: number | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      status: PostStatus,
      rating?: number | null,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      status: PostStatus,
      rating?: number | null,
      content?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVideoQueryVariables = {
  id: string,
};

export type GetVideoQuery = {
  getVideo?:  {
    __typename: "Video",
    id: string,
    name?: string | null,
    uri?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListVideosQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideosQuery = {
  listVideos?:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      name?: string | null,
      uri?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVideosQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVideosQuery = {
  syncVideos?:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      name?: string | null,
      uri?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnCreateMediaSubscription = {
  onCreateMedia?:  {
    __typename: "Media",
    id: string,
    uploader?: string | null,
    name?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    poster?: string | null,
    isHotOn?: boolean | null,
    hotCount?: number | null,
    isCommentOn?: boolean | null,
    isFixed?: boolean | null,
    viewCount?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnUpdateMediaSubscription = {
  onUpdateMedia?:  {
    __typename: "Media",
    id: string,
    uploader?: string | null,
    name?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    poster?: string | null,
    isHotOn?: boolean | null,
    hotCount?: number | null,
    isCommentOn?: boolean | null,
    isFixed?: boolean | null,
    viewCount?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMediaSubscriptionVariables = {
  filter?: ModelSubscriptionMediaFilterInput | null,
};

export type OnDeleteMediaSubscription = {
  onDeleteMedia?:  {
    __typename: "Media",
    id: string,
    uploader?: string | null,
    name?: string | null,
    description?: string | null,
    thumbnail?: string | null,
    poster?: string | null,
    isHotOn?: boolean | null,
    hotCount?: number | null,
    isCommentOn?: boolean | null,
    isFixed?: boolean | null,
    viewCount?: number | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAvaterSubscriptionVariables = {
  filter?: ModelSubscriptionAvaterFilterInput | null,
};

export type OnCreateAvaterSubscription = {
  onCreateAvater?:  {
    __typename: "Avater",
    id: string,
    name?: string | null,
    prefix?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAvaterSubscriptionVariables = {
  filter?: ModelSubscriptionAvaterFilterInput | null,
};

export type OnUpdateAvaterSubscription = {
  onUpdateAvater?:  {
    __typename: "Avater",
    id: string,
    name?: string | null,
    prefix?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAvaterSubscriptionVariables = {
  filter?: ModelSubscriptionAvaterFilterInput | null,
};

export type OnDeleteAvaterSubscription = {
  onDeleteAvater?:  {
    __typename: "Avater",
    id: string,
    name?: string | null,
    prefix?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: Gender | null,
    phone?: string | null,
    instagram?: string | null,
    email?: string | null,
    shortsCount?: number | null,
    followerCount?: number | null,
    latitude?: string | null,
    Avater?:  {
      __typename: "Avater",
      id: string,
      name?: string | null,
      prefix?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    longitude?: string | null,
    category?: Category | null,
    isShop?: boolean | null,
    isPro?: boolean | null,
    isTerm?: boolean | null,
    isPrivacy?: boolean | null,
    isPush?: boolean | null,
    isWifi?: boolean | null,
    businessNumber?: string | null,
    Media?:  {
      __typename: "ModelMediaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userAvaterId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: Gender | null,
    phone?: string | null,
    instagram?: string | null,
    email?: string | null,
    shortsCount?: number | null,
    followerCount?: number | null,
    latitude?: string | null,
    Avater?:  {
      __typename: "Avater",
      id: string,
      name?: string | null,
      prefix?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    longitude?: string | null,
    category?: Category | null,
    isShop?: boolean | null,
    isPro?: boolean | null,
    isTerm?: boolean | null,
    isPrivacy?: boolean | null,
    isPush?: boolean | null,
    isWifi?: boolean | null,
    businessNumber?: string | null,
    Media?:  {
      __typename: "ModelMediaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userAvaterId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    age?: number | null,
    gender?: Gender | null,
    phone?: string | null,
    instagram?: string | null,
    email?: string | null,
    shortsCount?: number | null,
    followerCount?: number | null,
    latitude?: string | null,
    Avater?:  {
      __typename: "Avater",
      id: string,
      name?: string | null,
      prefix?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    longitude?: string | null,
    category?: Category | null,
    isShop?: boolean | null,
    isPro?: boolean | null,
    isTerm?: boolean | null,
    isPrivacy?: boolean | null,
    isPush?: boolean | null,
    isWifi?: boolean | null,
    businessNumber?: string | null,
    Media?:  {
      __typename: "ModelMediaConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userAvaterId?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    status: PostStatus,
    rating?: number | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    status: PostStatus,
    rating?: number | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    status: PostStatus,
    rating?: number | null,
    content?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateVideoSubscriptionVariables = {
  filter?: ModelSubscriptionVideoFilterInput | null,
};

export type OnCreateVideoSubscription = {
  onCreateVideo?:  {
    __typename: "Video",
    id: string,
    name?: string | null,
    uri?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateVideoSubscriptionVariables = {
  filter?: ModelSubscriptionVideoFilterInput | null,
};

export type OnUpdateVideoSubscription = {
  onUpdateVideo?:  {
    __typename: "Video",
    id: string,
    name?: string | null,
    uri?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteVideoSubscriptionVariables = {
  filter?: ModelSubscriptionVideoFilterInput | null,
};

export type OnDeleteVideoSubscription = {
  onDeleteVideo?:  {
    __typename: "Video",
    id: string,
    name?: string | null,
    uri?: string | null,
    owner?: string | null,
    file?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
