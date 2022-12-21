import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Category {
  CAFE = "CAFE",
  FOOD = "FOOD",
  BEER = "BEER",
  GUITAR = "GUITAR"
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}



type EagerFollower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Follower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFollower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Follower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Follower = LazyLoading extends LazyLoadingDisabled ? EagerFollower : LazyFollower

export declare const Follower: (new (init: ModelInit<Follower>) => Follower) & {
  copyOf(source: Follower, mutator: (draft: MutableModel<Follower>) => MutableModel<Follower> | void): Follower;
}

type EagerFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uploader?: string | null;
  readonly shop?: string | null;
  readonly tag?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uploader?: string | null;
  readonly shop?: string | null;
  readonly tag?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Following = LazyLoading extends LazyLoadingDisabled ? EagerFollowing : LazyFollowing

export declare const Following: (new (init: ModelInit<Following>) => Following) & {
  copyOf(source: Following, mutator: (draft: MutableModel<Following>) => MutableModel<Following> | void): Following;
}

type EagerReply = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reply, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly name?: string | null;
  readonly content?: string | null;
  readonly isDelete?: boolean | null;
  readonly isLeave?: boolean | null;
  readonly commentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReply = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Reply, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly name?: string | null;
  readonly content?: string | null;
  readonly isDelete?: boolean | null;
  readonly isLeave?: boolean | null;
  readonly commentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Reply = LazyLoading extends LazyLoadingDisabled ? EagerReply : LazyReply

export declare const Reply: (new (init: ModelInit<Reply>) => Reply) & {
  copyOf(source: Reply, mutator: (draft: MutableModel<Reply>) => MutableModel<Reply> | void): Reply;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly name?: string | null;
  readonly isLeave?: boolean | null;
  readonly content?: string | null;
  readonly mediaID: string;
  readonly Replies?: (Reply | null)[] | null;
  readonly isDelete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly name?: string | null;
  readonly isLeave?: boolean | null;
  readonly content?: string | null;
  readonly mediaID: string;
  readonly Replies: AsyncCollection<Reply>;
  readonly isDelete?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uploader?: string | null;
  readonly fileNam?: string | null;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly poster?: string | null;
  readonly isHotOn?: boolean | null;
  readonly hotCount?: number | null;
  readonly isCommentOn?: boolean | null;
  readonly isFixed?: boolean | null;
  readonly viewCount?: number | null;
  readonly userID: string;
  readonly Comment?: (Comment | null)[] | null;
  readonly name?: string | null;
  readonly shopId?: string | null;
  readonly shopName?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Media, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uploader?: string | null;
  readonly fileNam?: string | null;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly poster?: string | null;
  readonly isHotOn?: boolean | null;
  readonly hotCount?: number | null;
  readonly isCommentOn?: boolean | null;
  readonly isFixed?: boolean | null;
  readonly viewCount?: number | null;
  readonly userID: string;
  readonly Comment: AsyncCollection<Comment>;
  readonly name?: string | null;
  readonly shopId?: string | null;
  readonly shopName?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Media = LazyLoading extends LazyLoadingDisabled ? EagerMedia : LazyMedia

export declare const Media: (new (init: ModelInit<Media>) => Media) & {
  copyOf(source: Media, mutator: (draft: MutableModel<Media>) => MutableModel<Media> | void): Media;
}

type EagerAvater = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Avater, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly prefix?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAvater = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Avater, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly prefix?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Avater = LazyLoading extends LazyLoadingDisabled ? EagerAvater : LazyAvater

export declare const Avater: (new (init: ModelInit<Avater>) => Avater) & {
  copyOf(source: Avater, mutator: (draft: MutableModel<Avater>) => MutableModel<Avater> | void): Avater;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly age?: number | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly instagram?: string | null;
  readonly shortsCount?: number | null;
  readonly followerCount?: number | null;
  readonly latitude?: string | null;
  readonly Avater?: Avater | null;
  readonly longitude?: string | null;
  readonly category?: Category | keyof typeof Category | null;
  readonly isShop?: boolean | null;
  readonly isPro?: boolean | null;
  readonly isTerm?: boolean | null;
  readonly isPrivacy?: boolean | null;
  readonly isPush?: boolean | null;
  readonly isWifi?: boolean | null;
  readonly businessNumber?: string | null;
  readonly Media?: (Media | null)[] | null;
  readonly Followings?: (Following | null)[] | null;
  readonly Followers?: (Follower | null)[] | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAvaterId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly age?: number | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly instagram?: string | null;
  readonly shortsCount?: number | null;
  readonly followerCount?: number | null;
  readonly latitude?: string | null;
  readonly Avater: AsyncItem<Avater | undefined>;
  readonly longitude?: string | null;
  readonly category?: Category | keyof typeof Category | null;
  readonly isShop?: boolean | null;
  readonly isPro?: boolean | null;
  readonly isTerm?: boolean | null;
  readonly isPrivacy?: boolean | null;
  readonly isPush?: boolean | null;
  readonly isWifi?: boolean | null;
  readonly businessNumber?: string | null;
  readonly Media: AsyncCollection<Media>;
  readonly Followings: AsyncCollection<Following>;
  readonly Followers: AsyncCollection<Follower>;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAvaterId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}