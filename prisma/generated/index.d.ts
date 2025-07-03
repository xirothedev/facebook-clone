
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Reaction
 * 
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>
/**
 * Model Relation
 * 
 */
export type Relation = $Result.DefaultSelection<Prisma.$RelationPayload>
/**
 * Model Email
 * 
 */
export type Email = $Result.DefaultSelection<Prisma.$EmailPayload>
/**
 * Model Phone
 * 
 */
export type Phone = $Result.DefaultSelection<Prisma.$PhonePayload>
/**
 * Model SocialLinkeds
 * 
 */
export type SocialLinkeds = $Result.DefaultSelection<Prisma.$SocialLinkedsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Scope: {
  EVERYONE: 'EVERYONE',
  FRIENDS_ONLY: 'FRIENDS_ONLY',
  PRIVATE: 'PRIVATE'
};

export type Scope = (typeof Scope)[keyof typeof Scope]


export const ResourceType: {
  image: 'image',
  video: 'video',
  raw: 'raw',
  auto: 'auto'
};

export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType]


export const CommentStatus: {
  DISPLAY: 'DISPLAY',
  HIDDEN: 'HIDDEN',
  DELETED: 'DELETED',
  PENDING: 'PENDING'
};

export type CommentStatus = (typeof CommentStatus)[keyof typeof CommentStatus]


export const PostStatus: {
  DISPLAY: 'DISPLAY',
  DELETED: 'DELETED',
  STORAGED: 'STORAGED',
  SUSPENDED: 'SUSPENDED',
  HIDDEN: 'HIDDEN'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const UserFlag: {
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED',
  ACTIVE: 'ACTIVE',
  OFFLINE: 'OFFLINE',
  HIDDEN: 'HIDDEN'
};

export type UserFlag = (typeof UserFlag)[keyof typeof UserFlag]


export const RelationType: {
  FARTHER: 'FARTHER',
  MORTHER: 'MORTHER',
  DAUGHTER: 'DAUGHTER',
  SON: 'SON',
  YOUNG_SISTER: 'YOUNG_SISTER',
  YOUNG_BROTHER: 'YOUNG_BROTHER',
  SISTER: 'SISTER',
  BROTHER: 'BROTHER'
};

export type RelationType = (typeof RelationType)[keyof typeof RelationType]


export const Status: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  BLOCKED: 'BLOCKED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Platform: {
  GITHUB: 'GITHUB',
  INSTAGRAM: 'INSTAGRAM',
  TIKTOK: 'TIKTOK',
  YOUTUBE: 'YOUTUBE',
  THREADS: 'THREADS',
  X: 'X',
  SNAPCHAT: 'SNAPCHAT',
  TWITCH: 'TWITCH',
  WHATSAPP: 'WHATSAPP',
  LINE: 'LINE',
  WECHAT: 'WECHAT',
  KIK: 'KIK',
  PINTEREST: 'PINTEREST',
  TUMBLR: 'TUMBLR',
  ASK_FM: 'ASK_FM',
  SOUNDCLOUD: 'SOUNDCLOUD',
  SPOTIFY: 'SPOTIFY',
  LINKEDIN: 'LINKEDIN',
  SKYPE: 'SKYPE',
  QQ: 'QQ',
  KAKAO_TALK: 'KAKAO_TALK',
  VK: 'VK',
  OK: 'OK',
  OCULUS: 'OCULUS'
};

export type Platform = (typeof Platform)[keyof typeof Platform]

}

export type Scope = $Enums.Scope

export const Scope: typeof $Enums.Scope

export type ResourceType = $Enums.ResourceType

export const ResourceType: typeof $Enums.ResourceType

export type CommentStatus = $Enums.CommentStatus

export const CommentStatus: typeof $Enums.CommentStatus

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type UserFlag = $Enums.UserFlag

export const UserFlag: typeof $Enums.UserFlag

export type RelationType = $Enums.RelationType

export const RelationType: typeof $Enums.RelationType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Media
 * const media = await prisma.media.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Media
   * const media = await prisma.media.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.ReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relation`: Exposes CRUD operations for the **Relation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relations
    * const relations = await prisma.relation.findMany()
    * ```
    */
  get relation(): Prisma.RelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phone`: Exposes CRUD operations for the **Phone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phones
    * const phones = await prisma.phone.findMany()
    * ```
    */
  get phone(): Prisma.PhoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLinkeds`: Exposes CRUD operations for the **SocialLinkeds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinkeds
    * const socialLinkeds = await prisma.socialLinkeds.findMany()
    * ```
    */
  get socialLinkeds(): Prisma.SocialLinkedsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Media: 'Media',
    Post: 'Post',
    Comment: 'Comment',
    Reaction: 'Reaction',
    User: 'User',
    Friendship: 'Friendship',
    Relation: 'Relation',
    Email: 'Email',
    Phone: 'Phone',
    SocialLinkeds: 'SocialLinkeds'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "media" | "post" | "comment" | "reaction" | "user" | "friendship" | "relation" | "email" | "phone" | "socialLinkeds"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>
        fields: Prisma.ReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReaction>
          }
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
          }
        }
      }
      Relation: {
        payload: Prisma.$RelationPayload<ExtArgs>
        fields: Prisma.RelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          findFirst: {
            args: Prisma.RelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          findMany: {
            args: Prisma.RelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          create: {
            args: Prisma.RelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          createMany: {
            args: Prisma.RelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          delete: {
            args: Prisma.RelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          update: {
            args: Prisma.RelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          deleteMany: {
            args: Prisma.RelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          upsert: {
            args: Prisma.RelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          aggregate: {
            args: Prisma.RelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelation>
          }
          groupBy: {
            args: Prisma.RelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationCountArgs<ExtArgs>
            result: $Utils.Optional<RelationCountAggregateOutputType> | number
          }
        }
      }
      Email: {
        payload: Prisma.$EmailPayload<ExtArgs>
        fields: Prisma.EmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findFirst: {
            args: Prisma.EmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findMany: {
            args: Prisma.EmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          create: {
            args: Prisma.EmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          createMany: {
            args: Prisma.EmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          delete: {
            args: Prisma.EmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          update: {
            args: Prisma.EmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          deleteMany: {
            args: Prisma.EmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          upsert: {
            args: Prisma.EmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          aggregate: {
            args: Prisma.EmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail>
          }
          groupBy: {
            args: Prisma.EmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailCountArgs<ExtArgs>
            result: $Utils.Optional<EmailCountAggregateOutputType> | number
          }
        }
      }
      Phone: {
        payload: Prisma.$PhonePayload<ExtArgs>
        fields: Prisma.PhoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          findFirst: {
            args: Prisma.PhoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          findMany: {
            args: Prisma.PhoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>[]
          }
          create: {
            args: Prisma.PhoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          createMany: {
            args: Prisma.PhoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>[]
          }
          delete: {
            args: Prisma.PhoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          update: {
            args: Prisma.PhoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          deleteMany: {
            args: Prisma.PhoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>[]
          }
          upsert: {
            args: Prisma.PhoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhonePayload>
          }
          aggregate: {
            args: Prisma.PhoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhone>
          }
          groupBy: {
            args: Prisma.PhoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneCountAggregateOutputType> | number
          }
        }
      }
      SocialLinkeds: {
        payload: Prisma.$SocialLinkedsPayload<ExtArgs>
        fields: Prisma.SocialLinkedsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkedsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkedsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkedsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkedsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload>
          }
          findMany: {
            args: Prisma.SocialLinkedsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload>[]
          }
          create: {
            args: Prisma.SocialLinkedsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload>
          }
          createMany: {
            args: Prisma.SocialLinkedsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinkedsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload>[]
          }
          delete: {
            args: Prisma.SocialLinkedsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload>
          }
          update: {
            args: Prisma.SocialLinkedsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkedsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkedsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialLinkedsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload>[]
          }
          upsert: {
            args: Prisma.SocialLinkedsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkedsPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkedsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLinkeds>
          }
          groupBy: {
            args: Prisma.SocialLinkedsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkedsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinkedsCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkedsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    media?: MediaOmit
    post?: PostOmit
    comment?: CommentOmit
    reaction?: ReactionOmit
    user?: UserOmit
    friendship?: FriendshipOmit
    relation?: RelationOmit
    email?: EmailOmit
    phone?: PhoneOmit
    socialLinkeds?: SocialLinkedsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    reactions: number
    comments: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactions?: boolean | PostCountOutputTypeCountReactionsArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
    reations: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
    reations?: boolean | CommentCountOutputTypeCountReationsArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountReationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subEmails: number
    subPhones: number
    socialLinkeds: number
    sentRelations: number
    receivedRelations: number
    sentFriendRequests: number
    receivedFriendRequests: number
    posts: number
    comments: number
    reactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subEmails?: boolean | UserCountOutputTypeCountSubEmailsArgs
    subPhones?: boolean | UserCountOutputTypeCountSubPhonesArgs
    socialLinkeds?: boolean | UserCountOutputTypeCountSocialLinkedsArgs
    sentRelations?: boolean | UserCountOutputTypeCountSentRelationsArgs
    receivedRelations?: boolean | UserCountOutputTypeCountReceivedRelationsArgs
    sentFriendRequests?: boolean | UserCountOutputTypeCountSentFriendRequestsArgs
    receivedFriendRequests?: boolean | UserCountOutputTypeCountReceivedFriendRequestsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubPhonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSocialLinkedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkedsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaAvgAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type MediaSumAggregateOutputType = {
    width: number | null
    height: number | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    originalName: string | null
    url: string | null
    secure_url: string | null
    width: number | null
    height: number | null
    format: string | null
    resourceType: $Enums.ResourceType | null
    createdAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    originalName: string | null
    url: string | null
    secure_url: string | null
    width: number | null
    height: number | null
    format: string | null
    resourceType: $Enums.ResourceType | null
    createdAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    originalName: number
    url: number
    secure_url: number
    width: number
    height: number
    format: number
    resourceType: number
    createdAt: number
    _all: number
  }


  export type MediaAvgAggregateInputType = {
    width?: true
    height?: true
  }

  export type MediaSumAggregateInputType = {
    width?: true
    height?: true
  }

  export type MediaMinAggregateInputType = {
    id?: true
    originalName?: true
    url?: true
    secure_url?: true
    width?: true
    height?: true
    format?: true
    resourceType?: true
    createdAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    originalName?: true
    url?: true
    secure_url?: true
    width?: true
    height?: true
    format?: true
    resourceType?: true
    createdAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    originalName?: true
    url?: true
    secure_url?: true
    width?: true
    height?: true
    format?: true
    resourceType?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _avg?: MediaAvgAggregateInputType
    _sum?: MediaSumAggregateInputType
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    originalName: string
    url: string
    secure_url: string
    width: number
    height: number
    format: string
    resourceType: $Enums.ResourceType
    createdAt: Date
    _count: MediaCountAggregateOutputType | null
    _avg: MediaAvgAggregateOutputType | null
    _sum: MediaSumAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    url?: boolean
    secure_url?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resourceType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    url?: boolean
    secure_url?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resourceType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalName?: boolean
    url?: boolean
    secure_url?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resourceType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    originalName?: boolean
    url?: boolean
    secure_url?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resourceType?: boolean
    createdAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalName" | "url" | "secure_url" | "width" | "height" | "format" | "resourceType" | "createdAt", ExtArgs["result"]["media"]>

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalName: string
      url: string
      secure_url: string
      width: number
      height: number
      format: string
      resourceType: $Enums.ResourceType
      createdAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly originalName: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly secure_url: FieldRef<"Media", 'String'>
    readonly width: FieldRef<"Media", 'Int'>
    readonly height: FieldRef<"Media", 'Int'>
    readonly format: FieldRef<"Media", 'String'>
    readonly resourceType: FieldRef<"Media", 'ResourceType'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    createdAt: Date | null
    updateAt: Date | null
    scope: $Enums.Scope | null
    status: $Enums.PostStatus | null
    content: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    createdAt: Date | null
    updateAt: Date | null
    scope: $Enums.Scope | null
    status: $Enums.PostStatus | null
    content: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    authorId: number
    createdAt: number
    updateAt: number
    scope: number
    status: number
    content: number
    medias: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    authorId?: true
    createdAt?: true
    updateAt?: true
    scope?: true
    status?: true
    content?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    authorId?: true
    createdAt?: true
    updateAt?: true
    scope?: true
    status?: true
    content?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    authorId?: true
    createdAt?: true
    updateAt?: true
    scope?: true
    status?: true
    content?: true
    medias?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    authorId: string
    createdAt: Date
    updateAt: Date
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias: string[]
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    scope?: boolean
    status?: boolean
    content?: boolean
    medias?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    reactions?: boolean | Post$reactionsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    scope?: boolean
    status?: boolean
    content?: boolean
    medias?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    scope?: boolean
    status?: boolean
    content?: boolean
    medias?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    authorId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    scope?: boolean
    status?: boolean
    content?: boolean
    medias?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "createdAt" | "updateAt" | "scope" | "status" | "content" | "medias", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    reactions?: boolean | Post$reactionsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      createdAt: Date
      updateAt: Date
      scope: $Enums.Scope
      status: $Enums.PostStatus
      content: string
      medias: string[]
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reactions<T extends Post$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Post$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updateAt: FieldRef<"Post", 'DateTime'>
    readonly scope: FieldRef<"Post", 'Scope'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly content: FieldRef<"Post", 'String'>
    readonly medias: FieldRef<"Post", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.reactions
   */
  export type Post$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    postId: string | null
    parentId: string | null
    createdAt: Date | null
    updateAt: Date | null
    deletedAt: Date | null
    status: $Enums.CommentStatus | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    postId: string | null
    parentId: string | null
    createdAt: Date | null
    updateAt: Date | null
    deletedAt: Date | null
    status: $Enums.CommentStatus | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    authorId: number
    postId: number
    parentId: number
    createdAt: number
    updateAt: number
    deletedAt: number
    updateHistories: number
    status: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
    parentId?: true
    createdAt?: true
    updateAt?: true
    deletedAt?: true
    status?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
    parentId?: true
    createdAt?: true
    updateAt?: true
    deletedAt?: true
    status?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
    parentId?: true
    createdAt?: true
    updateAt?: true
    deletedAt?: true
    updateHistories?: true
    status?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    authorId: string
    postId: string
    parentId: string | null
    createdAt: Date
    updateAt: Date
    deletedAt: Date | null
    updateHistories: string[]
    status: $Enums.CommentStatus
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    postId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    updateHistories?: boolean
    status?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    reations?: boolean | Comment$reationsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    postId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    updateHistories?: boolean
    status?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    postId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    updateHistories?: boolean
    status?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    authorId?: boolean
    postId?: boolean
    parentId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    deletedAt?: boolean
    updateHistories?: boolean
    status?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "postId" | "parentId" | "createdAt" | "updateAt" | "deletedAt" | "updateHistories" | "status", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    reations?: boolean | Comment$reationsArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
      reations: Prisma.$ReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      postId: string
      parentId: string | null
      createdAt: Date
      updateAt: Date
      deletedAt: Date | null
      updateHistories: string[]
      status: $Enums.CommentStatus
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reations<T extends Comment$reationsArgs<ExtArgs> = {}>(args?: Subset<T, Comment$reationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updateAt: FieldRef<"Comment", 'DateTime'>
    readonly deletedAt: FieldRef<"Comment", 'DateTime'>
    readonly updateHistories: FieldRef<"Comment", 'String[]'>
    readonly status: FieldRef<"Comment", 'CommentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment.reations
   */
  export type Comment$reationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    postId: string | null
    commentId: string | null
  }

  export type ReactionMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    postId: string | null
    commentId: string | null
  }

  export type ReactionCountAggregateOutputType = {
    id: number
    authorId: number
    postId: number
    commentId: number
    _all: number
  }


  export type ReactionMinAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
    commentId?: true
  }

  export type ReactionMaxAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
    commentId?: true
  }

  export type ReactionCountAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
    commentId?: true
    _all?: true
  }

  export type ReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithAggregationInput | ReactionOrderByWithAggregationInput[]
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum
    having?: ReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }

  export type ReactionGroupByOutputType = {
    id: string
    authorId: string
    postId: string | null
    commentId: string | null
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type ReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    postId?: boolean
    commentId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Reaction$postArgs<ExtArgs>
    comment?: boolean | Reaction$commentArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    postId?: boolean
    commentId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Reaction$postArgs<ExtArgs>
    comment?: boolean | Reaction$commentArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    postId?: boolean
    commentId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Reaction$postArgs<ExtArgs>
    comment?: boolean | Reaction$commentArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectScalar = {
    id?: boolean
    authorId?: boolean
    postId?: boolean
    commentId?: boolean
  }

  export type ReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "postId" | "commentId", ExtArgs["result"]["reaction"]>
  export type ReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Reaction$postArgs<ExtArgs>
    comment?: boolean | Reaction$commentArgs<ExtArgs>
  }
  export type ReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Reaction$postArgs<ExtArgs>
    comment?: boolean | Reaction$commentArgs<ExtArgs>
  }
  export type ReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    post?: boolean | Reaction$postArgs<ExtArgs>
    comment?: boolean | Reaction$commentArgs<ExtArgs>
  }

  export type $ReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reaction"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      post: Prisma.$PostPayload<ExtArgs> | null
      comment: Prisma.$CommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      postId: string | null
      commentId: string | null
    }, ExtArgs["result"]["reaction"]>
    composites: {}
  }

  type ReactionGetPayload<S extends boolean | null | undefined | ReactionDefaultArgs> = $Result.GetResult<Prisma.$ReactionPayload, S>

  type ReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: ReactionCountAggregateInputType | true
    }

  export interface ReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reaction'], meta: { name: 'Reaction' } }
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionFindUniqueArgs>(args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionFindFirstArgs>(args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionWithIdOnly = await prisma.reaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionFindManyArgs>(args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
     */
    create<T extends ReactionCreateArgs>(args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionCreateManyArgs>(args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
     */
    delete<T extends ReactionDeleteArgs>(args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionUpdateArgs>(args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionDeleteManyArgs>(args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionUpdateManyArgs>(args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions and returns the data updated in the database.
     * @param {ReactionUpdateManyAndReturnArgs} args - Arguments to update many Reactions.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
     */
    upsert<T extends ReactionUpsertArgs>(args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): Prisma.PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reaction model
   */
  readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends Reaction$postArgs<ExtArgs> = {}>(args?: Subset<T, Reaction$postArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comment<T extends Reaction$commentArgs<ExtArgs> = {}>(args?: Subset<T, Reaction$commentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reaction model
   */
  interface ReactionFieldRefs {
    readonly id: FieldRef<"Reaction", 'String'>
    readonly authorId: FieldRef<"Reaction", 'String'>
    readonly postId: FieldRef<"Reaction", 'String'>
    readonly commentId: FieldRef<"Reaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reaction createManyAndReturn
   */
  export type ReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
  }

  /**
   * Reaction updateManyAndReturn
   */
  export type ReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number
  }

  /**
   * Reaction.post
   */
  export type Reaction$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
  }

  /**
   * Reaction.comment
   */
  export type Reaction$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    createdAt: Date | null
    updateAt: Date | null
    primaryEmailId: string | null
    primaryPhoneId: string | null
    hashedPassword: string | null
    displayName: string | null
    username: string | null
    gender: $Enums.Gender | null
    pronoun: string | null
    birthday: Date | null
    biography: string | null
    language: string | null
    deletedAt: Date | null
    avatarUrl: string | null
    bannerUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    createdAt: Date | null
    updateAt: Date | null
    primaryEmailId: string | null
    primaryPhoneId: string | null
    hashedPassword: string | null
    displayName: string | null
    username: string | null
    gender: $Enums.Gender | null
    pronoun: string | null
    birthday: Date | null
    biography: string | null
    language: string | null
    deletedAt: Date | null
    avatarUrl: string | null
    bannerUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    profileId: number
    createdAt: number
    updateAt: number
    flags: number
    primaryEmailId: number
    primaryPhoneId: number
    hashedPassword: number
    displayName: number
    username: number
    gender: number
    pronoun: number
    birthday: number
    biography: number
    websites: number
    language: number
    deletedAt: number
    avatarUrl: number
    bannerUrl: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    profileId?: true
    createdAt?: true
    updateAt?: true
    primaryEmailId?: true
    primaryPhoneId?: true
    hashedPassword?: true
    displayName?: true
    username?: true
    gender?: true
    pronoun?: true
    birthday?: true
    biography?: true
    language?: true
    deletedAt?: true
    avatarUrl?: true
    bannerUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    profileId?: true
    createdAt?: true
    updateAt?: true
    primaryEmailId?: true
    primaryPhoneId?: true
    hashedPassword?: true
    displayName?: true
    username?: true
    gender?: true
    pronoun?: true
    birthday?: true
    biography?: true
    language?: true
    deletedAt?: true
    avatarUrl?: true
    bannerUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    profileId?: true
    createdAt?: true
    updateAt?: true
    flags?: true
    primaryEmailId?: true
    primaryPhoneId?: true
    hashedPassword?: true
    displayName?: true
    username?: true
    gender?: true
    pronoun?: true
    birthday?: true
    biography?: true
    websites?: true
    language?: true
    deletedAt?: true
    avatarUrl?: true
    bannerUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    profileId: string
    createdAt: Date
    updateAt: Date
    flags: $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId: string | null
    hashedPassword: string
    displayName: string
    username: string | null
    gender: $Enums.Gender
    pronoun: string | null
    birthday: Date
    biography: string | null
    websites: string[]
    language: string | null
    deletedAt: Date | null
    avatarUrl: string | null
    bannerUrl: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    flags?: boolean
    primaryEmailId?: boolean
    primaryPhoneId?: boolean
    hashedPassword?: boolean
    displayName?: boolean
    username?: boolean
    gender?: boolean
    pronoun?: boolean
    birthday?: boolean
    biography?: boolean
    websites?: boolean
    language?: boolean
    deletedAt?: boolean
    avatarUrl?: boolean
    bannerUrl?: boolean
    primaryEmail?: boolean | EmailDefaultArgs<ExtArgs>
    subEmails?: boolean | User$subEmailsArgs<ExtArgs>
    primaryPhone?: boolean | User$primaryPhoneArgs<ExtArgs>
    subPhones?: boolean | User$subPhonesArgs<ExtArgs>
    socialLinkeds?: boolean | User$socialLinkedsArgs<ExtArgs>
    sentRelations?: boolean | User$sentRelationsArgs<ExtArgs>
    receivedRelations?: boolean | User$receivedRelationsArgs<ExtArgs>
    sentFriendRequests?: boolean | User$sentFriendRequestsArgs<ExtArgs>
    receivedFriendRequests?: boolean | User$receivedFriendRequestsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    flags?: boolean
    primaryEmailId?: boolean
    primaryPhoneId?: boolean
    hashedPassword?: boolean
    displayName?: boolean
    username?: boolean
    gender?: boolean
    pronoun?: boolean
    birthday?: boolean
    biography?: boolean
    websites?: boolean
    language?: boolean
    deletedAt?: boolean
    avatarUrl?: boolean
    bannerUrl?: boolean
    primaryEmail?: boolean | EmailDefaultArgs<ExtArgs>
    primaryPhone?: boolean | User$primaryPhoneArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    flags?: boolean
    primaryEmailId?: boolean
    primaryPhoneId?: boolean
    hashedPassword?: boolean
    displayName?: boolean
    username?: boolean
    gender?: boolean
    pronoun?: boolean
    birthday?: boolean
    biography?: boolean
    websites?: boolean
    language?: boolean
    deletedAt?: boolean
    avatarUrl?: boolean
    bannerUrl?: boolean
    primaryEmail?: boolean | EmailDefaultArgs<ExtArgs>
    primaryPhone?: boolean | User$primaryPhoneArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    profileId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    flags?: boolean
    primaryEmailId?: boolean
    primaryPhoneId?: boolean
    hashedPassword?: boolean
    displayName?: boolean
    username?: boolean
    gender?: boolean
    pronoun?: boolean
    birthday?: boolean
    biography?: boolean
    websites?: boolean
    language?: boolean
    deletedAt?: boolean
    avatarUrl?: boolean
    bannerUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "createdAt" | "updateAt" | "flags" | "primaryEmailId" | "primaryPhoneId" | "hashedPassword" | "displayName" | "username" | "gender" | "pronoun" | "birthday" | "biography" | "websites" | "language" | "deletedAt" | "avatarUrl" | "bannerUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryEmail?: boolean | EmailDefaultArgs<ExtArgs>
    subEmails?: boolean | User$subEmailsArgs<ExtArgs>
    primaryPhone?: boolean | User$primaryPhoneArgs<ExtArgs>
    subPhones?: boolean | User$subPhonesArgs<ExtArgs>
    socialLinkeds?: boolean | User$socialLinkedsArgs<ExtArgs>
    sentRelations?: boolean | User$sentRelationsArgs<ExtArgs>
    receivedRelations?: boolean | User$receivedRelationsArgs<ExtArgs>
    sentFriendRequests?: boolean | User$sentFriendRequestsArgs<ExtArgs>
    receivedFriendRequests?: boolean | User$receivedFriendRequestsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryEmail?: boolean | EmailDefaultArgs<ExtArgs>
    primaryPhone?: boolean | User$primaryPhoneArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryEmail?: boolean | EmailDefaultArgs<ExtArgs>
    primaryPhone?: boolean | User$primaryPhoneArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      primaryEmail: Prisma.$EmailPayload<ExtArgs>
      subEmails: Prisma.$EmailPayload<ExtArgs>[]
      primaryPhone: Prisma.$PhonePayload<ExtArgs> | null
      subPhones: Prisma.$PhonePayload<ExtArgs>[]
      socialLinkeds: Prisma.$SocialLinkedsPayload<ExtArgs>[]
      sentRelations: Prisma.$RelationPayload<ExtArgs>[]
      receivedRelations: Prisma.$RelationPayload<ExtArgs>[]
      sentFriendRequests: Prisma.$FriendshipPayload<ExtArgs>[]
      receivedFriendRequests: Prisma.$FriendshipPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      createdAt: Date
      updateAt: Date
      flags: $Enums.UserFlag[]
      primaryEmailId: string
      primaryPhoneId: string | null
      hashedPassword: string
      displayName: string
      username: string | null
      gender: $Enums.Gender
      pronoun: string | null
      birthday: Date
      biography: string | null
      websites: string[]
      language: string | null
      deletedAt: Date | null
      avatarUrl: string | null
      bannerUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    primaryEmail<T extends EmailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmailDefaultArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subEmails<T extends User$subEmailsArgs<ExtArgs> = {}>(args?: Subset<T, User$subEmailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    primaryPhone<T extends User$primaryPhoneArgs<ExtArgs> = {}>(args?: Subset<T, User$primaryPhoneArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subPhones<T extends User$subPhonesArgs<ExtArgs> = {}>(args?: Subset<T, User$subPhonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    socialLinkeds<T extends User$socialLinkedsArgs<ExtArgs> = {}>(args?: Subset<T, User$socialLinkedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentRelations<T extends User$sentRelationsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedRelations<T extends User$receivedRelationsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentFriendRequests<T extends User$sentFriendRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentFriendRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedFriendRequests<T extends User$receivedFriendRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedFriendRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly profileId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly flags: FieldRef<"User", 'UserFlag[]'>
    readonly primaryEmailId: FieldRef<"User", 'String'>
    readonly primaryPhoneId: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly pronoun: FieldRef<"User", 'String'>
    readonly birthday: FieldRef<"User", 'DateTime'>
    readonly biography: FieldRef<"User", 'String'>
    readonly websites: FieldRef<"User", 'String[]'>
    readonly language: FieldRef<"User", 'String'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly bannerUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.subEmails
   */
  export type User$subEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * User.primaryPhone
   */
  export type User$primaryPhoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    where?: PhoneWhereInput
  }

  /**
   * User.subPhones
   */
  export type User$subPhonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    where?: PhoneWhereInput
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    cursor?: PhoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneScalarFieldEnum | PhoneScalarFieldEnum[]
  }

  /**
   * User.socialLinkeds
   */
  export type User$socialLinkedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    where?: SocialLinkedsWhereInput
    orderBy?: SocialLinkedsOrderByWithRelationInput | SocialLinkedsOrderByWithRelationInput[]
    cursor?: SocialLinkedsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialLinkedsScalarFieldEnum | SocialLinkedsScalarFieldEnum[]
  }

  /**
   * User.sentRelations
   */
  export type User$sentRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    cursor?: RelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * User.receivedRelations
   */
  export type User$receivedRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    cursor?: RelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * User.sentFriendRequests
   */
  export type User$sentFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.receivedFriendRequests
   */
  export type User$receivedFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipMinAggregateOutputType = {
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    requesterId: string | null
    addresseeId: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    requesterId: number
    addresseeId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FriendshipMinAggregateInputType = {
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendshipMaxAggregateInputType = {
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FriendshipCountAggregateInputType = {
    requesterId?: true
    addresseeId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    requesterId: string
    addresseeId: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: FriendshipCountAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    requesterId?: boolean
    addresseeId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"requesterId" | "addresseeId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    addressee?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      addressee: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      requesterId: string
      addresseeId: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `requesterId`
     * const friendshipWithRequesterIdOnly = await prisma.friendship.findMany({ select: { requesterId: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `requesterId`
     * const friendshipWithRequesterIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { requesterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `requesterId`
     * const friendshipWithRequesterIdOnly = await prisma.friendship.updateManyAndReturn({
     *   select: { requesterId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    addressee<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly requesterId: FieldRef<"Friendship", 'String'>
    readonly addresseeId: FieldRef<"Friendship", 'String'>
    readonly status: FieldRef<"Friendship", 'Status'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
    readonly updatedAt: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
  }


  /**
   * Model Relation
   */

  export type AggregateRelation = {
    _count: RelationCountAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  export type RelationMinAggregateOutputType = {
    sourceUserId: string | null
    targetUserId: string | null
    type: $Enums.RelationType | null
    status: $Enums.Status | null
    scope: $Enums.Scope | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelationMaxAggregateOutputType = {
    sourceUserId: string | null
    targetUserId: string | null
    type: $Enums.RelationType | null
    status: $Enums.Status | null
    scope: $Enums.Scope | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RelationCountAggregateOutputType = {
    sourceUserId: number
    targetUserId: number
    type: number
    status: number
    scope: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RelationMinAggregateInputType = {
    sourceUserId?: true
    targetUserId?: true
    type?: true
    status?: true
    scope?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelationMaxAggregateInputType = {
    sourceUserId?: true
    targetUserId?: true
    type?: true
    status?: true
    scope?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RelationCountAggregateInputType = {
    sourceUserId?: true
    targetUserId?: true
    type?: true
    status?: true
    scope?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relation to aggregate.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relations
    **/
    _count?: true | RelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationMaxAggregateInputType
  }

  export type GetRelationAggregateType<T extends RelationAggregateArgs> = {
        [P in keyof T & keyof AggregateRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelation[P]>
      : GetScalarType<T[P], AggregateRelation[P]>
  }




  export type RelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithAggregationInput | RelationOrderByWithAggregationInput[]
    by: RelationScalarFieldEnum[] | RelationScalarFieldEnum
    having?: RelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationCountAggregateInputType | true
    _min?: RelationMinAggregateInputType
    _max?: RelationMaxAggregateInputType
  }

  export type RelationGroupByOutputType = {
    sourceUserId: string
    targetUserId: string
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt: Date
    updatedAt: Date
    _count: RelationCountAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  type GetRelationGroupByPayload<T extends RelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationGroupByOutputType[P]>
            : GetScalarType<T[P], RelationGroupByOutputType[P]>
        }
      >
    >


  export type RelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sourceUserId?: boolean
    targetUserId?: boolean
    type?: boolean
    status?: boolean
    scope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>

  export type RelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sourceUserId?: boolean
    targetUserId?: boolean
    type?: boolean
    status?: boolean
    scope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>

  export type RelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sourceUserId?: boolean
    targetUserId?: boolean
    type?: boolean
    status?: boolean
    scope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>

  export type RelationSelectScalar = {
    sourceUserId?: boolean
    targetUserId?: boolean
    type?: boolean
    status?: boolean
    scope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sourceUserId" | "targetUserId" | "type" | "status" | "scope" | "createdAt" | "updatedAt", ExtArgs["result"]["relation"]>
  export type RelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
    targetUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relation"
    objects: {
      sourceUser: Prisma.$UserPayload<ExtArgs>
      targetUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sourceUserId: string
      targetUserId: string
      type: $Enums.RelationType
      status: $Enums.Status
      scope: $Enums.Scope
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["relation"]>
    composites: {}
  }

  type RelationGetPayload<S extends boolean | null | undefined | RelationDefaultArgs> = $Result.GetResult<Prisma.$RelationPayload, S>

  type RelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: RelationCountAggregateInputType | true
    }

  export interface RelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relation'], meta: { name: 'Relation' } }
    /**
     * Find zero or one Relation that matches the filter.
     * @param {RelationFindUniqueArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationFindUniqueArgs>(args: SelectSubset<T, RelationFindUniqueArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelationFindUniqueOrThrowArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindFirstArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationFindFirstArgs>(args?: SelectSubset<T, RelationFindFirstArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindFirstOrThrowArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relations
     * const relations = await prisma.relation.findMany()
     * 
     * // Get first 10 Relations
     * const relations = await prisma.relation.findMany({ take: 10 })
     * 
     * // Only select the `sourceUserId`
     * const relationWithSourceUserIdOnly = await prisma.relation.findMany({ select: { sourceUserId: true } })
     * 
     */
    findMany<T extends RelationFindManyArgs>(args?: SelectSubset<T, RelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relation.
     * @param {RelationCreateArgs} args - Arguments to create a Relation.
     * @example
     * // Create one Relation
     * const Relation = await prisma.relation.create({
     *   data: {
     *     // ... data to create a Relation
     *   }
     * })
     * 
     */
    create<T extends RelationCreateArgs>(args: SelectSubset<T, RelationCreateArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relations.
     * @param {RelationCreateManyArgs} args - Arguments to create many Relations.
     * @example
     * // Create many Relations
     * const relation = await prisma.relation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationCreateManyArgs>(args?: SelectSubset<T, RelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relations and returns the data saved in the database.
     * @param {RelationCreateManyAndReturnArgs} args - Arguments to create many Relations.
     * @example
     * // Create many Relations
     * const relation = await prisma.relation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relations and only return the `sourceUserId`
     * const relationWithSourceUserIdOnly = await prisma.relation.createManyAndReturn({
     *   select: { sourceUserId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelationCreateManyAndReturnArgs>(args?: SelectSubset<T, RelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relation.
     * @param {RelationDeleteArgs} args - Arguments to delete one Relation.
     * @example
     * // Delete one Relation
     * const Relation = await prisma.relation.delete({
     *   where: {
     *     // ... filter to delete one Relation
     *   }
     * })
     * 
     */
    delete<T extends RelationDeleteArgs>(args: SelectSubset<T, RelationDeleteArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relation.
     * @param {RelationUpdateArgs} args - Arguments to update one Relation.
     * @example
     * // Update one Relation
     * const relation = await prisma.relation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationUpdateArgs>(args: SelectSubset<T, RelationUpdateArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relations.
     * @param {RelationDeleteManyArgs} args - Arguments to filter Relations to delete.
     * @example
     * // Delete a few Relations
     * const { count } = await prisma.relation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationDeleteManyArgs>(args?: SelectSubset<T, RelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relations
     * const relation = await prisma.relation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationUpdateManyArgs>(args: SelectSubset<T, RelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relations and returns the data updated in the database.
     * @param {RelationUpdateManyAndReturnArgs} args - Arguments to update many Relations.
     * @example
     * // Update many Relations
     * const relation = await prisma.relation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relations and only return the `sourceUserId`
     * const relationWithSourceUserIdOnly = await prisma.relation.updateManyAndReturn({
     *   select: { sourceUserId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelationUpdateManyAndReturnArgs>(args: SelectSubset<T, RelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relation.
     * @param {RelationUpsertArgs} args - Arguments to update or create a Relation.
     * @example
     * // Update or create a Relation
     * const relation = await prisma.relation.upsert({
     *   create: {
     *     // ... data to create a Relation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relation we want to update
     *   }
     * })
     */
    upsert<T extends RelationUpsertArgs>(args: SelectSubset<T, RelationUpsertArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationCountArgs} args - Arguments to filter Relations to count.
     * @example
     * // Count the number of Relations
     * const count = await prisma.relation.count({
     *   where: {
     *     // ... the filter for the Relations we want to count
     *   }
     * })
    **/
    count<T extends RelationCountArgs>(
      args?: Subset<T, RelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelationAggregateArgs>(args: Subset<T, RelationAggregateArgs>): Prisma.PrismaPromise<GetRelationAggregateType<T>>

    /**
     * Group by Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationGroupByArgs['orderBy'] }
        : { orderBy?: RelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relation model
   */
  readonly fields: RelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Relation model
   */
  interface RelationFieldRefs {
    readonly sourceUserId: FieldRef<"Relation", 'String'>
    readonly targetUserId: FieldRef<"Relation", 'String'>
    readonly type: FieldRef<"Relation", 'RelationType'>
    readonly status: FieldRef<"Relation", 'Status'>
    readonly scope: FieldRef<"Relation", 'Scope'>
    readonly createdAt: FieldRef<"Relation", 'DateTime'>
    readonly updatedAt: FieldRef<"Relation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Relation findUnique
   */
  export type RelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where: RelationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Relation findUniqueOrThrow
   */
  export type RelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where: RelationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Relation findFirst
   */
  export type RelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Relation findFirstOrThrow
   */
  export type RelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Relation findMany
   */
  export type RelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relations to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Relation create
   */
  export type RelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The data needed to create a Relation.
     */
    data: XOR<RelationCreateInput, RelationUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Relation createMany
   */
  export type RelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relations.
     */
    data: RelationCreateManyInput | RelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relation createManyAndReturn
   */
  export type RelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * The data used to create many Relations.
     */
    data: RelationCreateManyInput | RelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relation update
   */
  export type RelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The data needed to update a Relation.
     */
    data: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
    /**
     * Choose, which Relation to update.
     */
    where: RelationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Relation updateMany
   */
  export type RelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relations.
     */
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyInput>
    /**
     * Filter which Relations to update
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to update.
     */
    limit?: number
  }

  /**
   * Relation updateManyAndReturn
   */
  export type RelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * The data used to update Relations.
     */
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyInput>
    /**
     * Filter which Relations to update
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relation upsert
   */
  export type RelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The filter to search for the Relation to update in case it exists.
     */
    where: RelationWhereUniqueInput
    /**
     * In case the Relation found by the `where` argument doesn't exist, create a new Relation with this data.
     */
    create: XOR<RelationCreateInput, RelationUncheckedCreateInput>
    /**
     * In case the Relation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Relation delete
   */
  export type RelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter which Relation to delete.
     */
    where: RelationWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Relation deleteMany
   */
  export type RelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relations to delete
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to delete.
     */
    limit?: number
  }

  /**
   * Relation without action
   */
  export type RelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
  }


  /**
   * Model Email
   */

  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailMinAggregateOutputType = {
    id: string | null
    value: string | null
    scope: $Enums.Scope | null
    subEmailsUserId: string | null
  }

  export type EmailMaxAggregateOutputType = {
    id: string | null
    value: string | null
    scope: $Enums.Scope | null
    subEmailsUserId: string | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    value: number
    scope: number
    subEmailsUserId: number
    _all: number
  }


  export type EmailMinAggregateInputType = {
    id?: true
    value?: true
    scope?: true
    subEmailsUserId?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    value?: true
    scope?: true
    subEmailsUserId?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    value?: true
    scope?: true
    subEmailsUserId?: true
    _all?: true
  }

  export type EmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Email to aggregate.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithAggregationInput | EmailOrderByWithAggregationInput[]
    by: EmailScalarFieldEnum[] | EmailScalarFieldEnum
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }

  export type EmailGroupByOutputType = {
    id: string
    value: string
    scope: $Enums.Scope
    subEmailsUserId: string | null
    _count: EmailCountAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    scope?: boolean
    subEmailsUserId?: boolean
    primaryEmailUser?: boolean | Email$primaryEmailUserArgs<ExtArgs>
    subEmailsUser?: boolean | Email$subEmailsUserArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    scope?: boolean
    subEmailsUserId?: boolean
    subEmailsUser?: boolean | Email$subEmailsUserArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    scope?: boolean
    subEmailsUserId?: boolean
    subEmailsUser?: boolean | Email$subEmailsUserArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>

  export type EmailSelectScalar = {
    id?: boolean
    value?: boolean
    scope?: boolean
    subEmailsUserId?: boolean
  }

  export type EmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "scope" | "subEmailsUserId", ExtArgs["result"]["email"]>
  export type EmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryEmailUser?: boolean | Email$primaryEmailUserArgs<ExtArgs>
    subEmailsUser?: boolean | Email$subEmailsUserArgs<ExtArgs>
  }
  export type EmailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subEmailsUser?: boolean | Email$subEmailsUserArgs<ExtArgs>
  }
  export type EmailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subEmailsUser?: boolean | Email$subEmailsUserArgs<ExtArgs>
  }

  export type $EmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Email"
    objects: {
      primaryEmailUser: Prisma.$UserPayload<ExtArgs> | null
      subEmailsUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      scope: $Enums.Scope
      subEmailsUserId: string | null
    }, ExtArgs["result"]["email"]>
    composites: {}
  }

  type EmailGetPayload<S extends boolean | null | undefined | EmailDefaultArgs> = $Result.GetResult<Prisma.$EmailPayload, S>

  type EmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: EmailCountAggregateInputType | true
    }

  export interface EmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Email'], meta: { name: 'Email' } }
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailFindUniqueArgs>(args: SelectSubset<T, EmailFindUniqueArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailFindFirstArgs>(args?: SelectSubset<T, EmailFindFirstArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailFindManyArgs>(args?: SelectSubset<T, EmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
     */
    create<T extends EmailCreateArgs>(args: SelectSubset<T, EmailCreateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailCreateManyArgs>(args?: SelectSubset<T, EmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emails and returns the data saved in the database.
     * @param {EmailCreateManyAndReturnArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
     */
    delete<T extends EmailDeleteArgs>(args: SelectSubset<T, EmailDeleteArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailUpdateArgs>(args: SelectSubset<T, EmailUpdateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailDeleteManyArgs>(args?: SelectSubset<T, EmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailUpdateManyArgs>(args: SelectSubset<T, EmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails and returns the data updated in the database.
     * @param {EmailUpdateManyAndReturnArgs} args - Arguments to update many Emails.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emails and only return the `id`
     * const emailWithIdOnly = await prisma.email.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
     */
    upsert<T extends EmailUpsertArgs>(args: SelectSubset<T, EmailUpsertArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): Prisma.PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Email model
   */
  readonly fields: EmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    primaryEmailUser<T extends Email$primaryEmailUserArgs<ExtArgs> = {}>(args?: Subset<T, Email$primaryEmailUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subEmailsUser<T extends Email$subEmailsUserArgs<ExtArgs> = {}>(args?: Subset<T, Email$subEmailsUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Email model
   */
  interface EmailFieldRefs {
    readonly id: FieldRef<"Email", 'String'>
    readonly value: FieldRef<"Email", 'String'>
    readonly scope: FieldRef<"Email", 'Scope'>
    readonly subEmailsUserId: FieldRef<"Email", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Email findUnique
   */
  export type EmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Email findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Email findFirst
   */
  export type EmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Email findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Email findMany
   */
  export type EmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Email create
   */
  export type EmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to create a Email.
     */
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Email createMany
   */
  export type EmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Email createManyAndReturn
   */
  export type EmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email update
   */
  export type EmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to update a Email.
     */
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     */
    where: EmailWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Email updateManyAndReturn
   */
  export type EmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Email upsert
   */
  export type EmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The filter to search for the Email to update in case it exists.
     */
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     */
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Email delete
   */
  export type EmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter which Email to delete.
     */
    where: EmailWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to delete
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to delete.
     */
    limit?: number
  }

  /**
   * Email.primaryEmailUser
   */
  export type Email$primaryEmailUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Email.subEmailsUser
   */
  export type Email$subEmailsUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Email without action
   */
  export type EmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
  }


  /**
   * Model Phone
   */

  export type AggregatePhone = {
    _count: PhoneCountAggregateOutputType | null
    _min: PhoneMinAggregateOutputType | null
    _max: PhoneMaxAggregateOutputType | null
  }

  export type PhoneMinAggregateOutputType = {
    id: string | null
    value: string | null
    scope: $Enums.Scope | null
    subPhonesUserId: string | null
  }

  export type PhoneMaxAggregateOutputType = {
    id: string | null
    value: string | null
    scope: $Enums.Scope | null
    subPhonesUserId: string | null
  }

  export type PhoneCountAggregateOutputType = {
    id: number
    value: number
    scope: number
    subPhonesUserId: number
    _all: number
  }


  export type PhoneMinAggregateInputType = {
    id?: true
    value?: true
    scope?: true
    subPhonesUserId?: true
  }

  export type PhoneMaxAggregateInputType = {
    id?: true
    value?: true
    scope?: true
    subPhonesUserId?: true
  }

  export type PhoneCountAggregateInputType = {
    id?: true
    value?: true
    scope?: true
    subPhonesUserId?: true
    _all?: true
  }

  export type PhoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phone to aggregate.
     */
    where?: PhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phones to fetch.
     */
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phones
    **/
    _count?: true | PhoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneMaxAggregateInputType
  }

  export type GetPhoneAggregateType<T extends PhoneAggregateArgs> = {
        [P in keyof T & keyof AggregatePhone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhone[P]>
      : GetScalarType<T[P], AggregatePhone[P]>
  }




  export type PhoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneWhereInput
    orderBy?: PhoneOrderByWithAggregationInput | PhoneOrderByWithAggregationInput[]
    by: PhoneScalarFieldEnum[] | PhoneScalarFieldEnum
    having?: PhoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneCountAggregateInputType | true
    _min?: PhoneMinAggregateInputType
    _max?: PhoneMaxAggregateInputType
  }

  export type PhoneGroupByOutputType = {
    id: string
    value: string
    scope: $Enums.Scope
    subPhonesUserId: string | null
    _count: PhoneCountAggregateOutputType | null
    _min: PhoneMinAggregateOutputType | null
    _max: PhoneMaxAggregateOutputType | null
  }

  type GetPhoneGroupByPayload<T extends PhoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneGroupByOutputType[P]>
        }
      >
    >


  export type PhoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    scope?: boolean
    subPhonesUserId?: boolean
    primaryPhoneUser?: boolean | Phone$primaryPhoneUserArgs<ExtArgs>
    subPhonesUser?: boolean | Phone$subPhonesUserArgs<ExtArgs>
  }, ExtArgs["result"]["phone"]>

  export type PhoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    scope?: boolean
    subPhonesUserId?: boolean
    subPhonesUser?: boolean | Phone$subPhonesUserArgs<ExtArgs>
  }, ExtArgs["result"]["phone"]>

  export type PhoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    scope?: boolean
    subPhonesUserId?: boolean
    subPhonesUser?: boolean | Phone$subPhonesUserArgs<ExtArgs>
  }, ExtArgs["result"]["phone"]>

  export type PhoneSelectScalar = {
    id?: boolean
    value?: boolean
    scope?: boolean
    subPhonesUserId?: boolean
  }

  export type PhoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "scope" | "subPhonesUserId", ExtArgs["result"]["phone"]>
  export type PhoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primaryPhoneUser?: boolean | Phone$primaryPhoneUserArgs<ExtArgs>
    subPhonesUser?: boolean | Phone$subPhonesUserArgs<ExtArgs>
  }
  export type PhoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subPhonesUser?: boolean | Phone$subPhonesUserArgs<ExtArgs>
  }
  export type PhoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subPhonesUser?: boolean | Phone$subPhonesUserArgs<ExtArgs>
  }

  export type $PhonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phone"
    objects: {
      primaryPhoneUser: Prisma.$UserPayload<ExtArgs> | null
      subPhonesUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      scope: $Enums.Scope
      subPhonesUserId: string | null
    }, ExtArgs["result"]["phone"]>
    composites: {}
  }

  type PhoneGetPayload<S extends boolean | null | undefined | PhoneDefaultArgs> = $Result.GetResult<Prisma.$PhonePayload, S>

  type PhoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: PhoneCountAggregateInputType | true
    }

  export interface PhoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phone'], meta: { name: 'Phone' } }
    /**
     * Find zero or one Phone that matches the filter.
     * @param {PhoneFindUniqueArgs} args - Arguments to find a Phone
     * @example
     * // Get one Phone
     * const phone = await prisma.phone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneFindUniqueArgs>(args: SelectSubset<T, PhoneFindUniqueArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneFindUniqueOrThrowArgs} args - Arguments to find a Phone
     * @example
     * // Get one Phone
     * const phone = await prisma.phone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneFindFirstArgs} args - Arguments to find a Phone
     * @example
     * // Get one Phone
     * const phone = await prisma.phone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneFindFirstArgs>(args?: SelectSubset<T, PhoneFindFirstArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneFindFirstOrThrowArgs} args - Arguments to find a Phone
     * @example
     * // Get one Phone
     * const phone = await prisma.phone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phones
     * const phones = await prisma.phone.findMany()
     * 
     * // Get first 10 Phones
     * const phones = await prisma.phone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneWithIdOnly = await prisma.phone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneFindManyArgs>(args?: SelectSubset<T, PhoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phone.
     * @param {PhoneCreateArgs} args - Arguments to create a Phone.
     * @example
     * // Create one Phone
     * const Phone = await prisma.phone.create({
     *   data: {
     *     // ... data to create a Phone
     *   }
     * })
     * 
     */
    create<T extends PhoneCreateArgs>(args: SelectSubset<T, PhoneCreateArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phones.
     * @param {PhoneCreateManyArgs} args - Arguments to create many Phones.
     * @example
     * // Create many Phones
     * const phone = await prisma.phone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneCreateManyArgs>(args?: SelectSubset<T, PhoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phones and returns the data saved in the database.
     * @param {PhoneCreateManyAndReturnArgs} args - Arguments to create many Phones.
     * @example
     * // Create many Phones
     * const phone = await prisma.phone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phones and only return the `id`
     * const phoneWithIdOnly = await prisma.phone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Phone.
     * @param {PhoneDeleteArgs} args - Arguments to delete one Phone.
     * @example
     * // Delete one Phone
     * const Phone = await prisma.phone.delete({
     *   where: {
     *     // ... filter to delete one Phone
     *   }
     * })
     * 
     */
    delete<T extends PhoneDeleteArgs>(args: SelectSubset<T, PhoneDeleteArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phone.
     * @param {PhoneUpdateArgs} args - Arguments to update one Phone.
     * @example
     * // Update one Phone
     * const phone = await prisma.phone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneUpdateArgs>(args: SelectSubset<T, PhoneUpdateArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phones.
     * @param {PhoneDeleteManyArgs} args - Arguments to filter Phones to delete.
     * @example
     * // Delete a few Phones
     * const { count } = await prisma.phone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneDeleteManyArgs>(args?: SelectSubset<T, PhoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phones
     * const phone = await prisma.phone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneUpdateManyArgs>(args: SelectSubset<T, PhoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phones and returns the data updated in the database.
     * @param {PhoneUpdateManyAndReturnArgs} args - Arguments to update many Phones.
     * @example
     * // Update many Phones
     * const phone = await prisma.phone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Phones and only return the `id`
     * const phoneWithIdOnly = await prisma.phone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhoneUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Phone.
     * @param {PhoneUpsertArgs} args - Arguments to update or create a Phone.
     * @example
     * // Update or create a Phone
     * const phone = await prisma.phone.upsert({
     *   create: {
     *     // ... data to create a Phone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phone we want to update
     *   }
     * })
     */
    upsert<T extends PhoneUpsertArgs>(args: SelectSubset<T, PhoneUpsertArgs<ExtArgs>>): Prisma__PhoneClient<$Result.GetResult<Prisma.$PhonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneCountArgs} args - Arguments to filter Phones to count.
     * @example
     * // Count the number of Phones
     * const count = await prisma.phone.count({
     *   where: {
     *     // ... the filter for the Phones we want to count
     *   }
     * })
    **/
    count<T extends PhoneCountArgs>(
      args?: Subset<T, PhoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhoneAggregateArgs>(args: Subset<T, PhoneAggregateArgs>): Prisma.PrismaPromise<GetPhoneAggregateType<T>>

    /**
     * Group by Phone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneGroupByArgs['orderBy'] }
        : { orderBy?: PhoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phone model
   */
  readonly fields: PhoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    primaryPhoneUser<T extends Phone$primaryPhoneUserArgs<ExtArgs> = {}>(args?: Subset<T, Phone$primaryPhoneUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subPhonesUser<T extends Phone$subPhonesUserArgs<ExtArgs> = {}>(args?: Subset<T, Phone$subPhonesUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Phone model
   */
  interface PhoneFieldRefs {
    readonly id: FieldRef<"Phone", 'String'>
    readonly value: FieldRef<"Phone", 'String'>
    readonly scope: FieldRef<"Phone", 'Scope'>
    readonly subPhonesUserId: FieldRef<"Phone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Phone findUnique
   */
  export type PhoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phone to fetch.
     */
    where: PhoneWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Phone findUniqueOrThrow
   */
  export type PhoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phone to fetch.
     */
    where: PhoneWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Phone findFirst
   */
  export type PhoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phone to fetch.
     */
    where?: PhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phones to fetch.
     */
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phones.
     */
    cursor?: PhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phones.
     */
    distinct?: PhoneScalarFieldEnum | PhoneScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Phone findFirstOrThrow
   */
  export type PhoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phone to fetch.
     */
    where?: PhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phones to fetch.
     */
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phones.
     */
    cursor?: PhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phones.
     */
    distinct?: PhoneScalarFieldEnum | PhoneScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Phone findMany
   */
  export type PhoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter, which Phones to fetch.
     */
    where?: PhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phones to fetch.
     */
    orderBy?: PhoneOrderByWithRelationInput | PhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phones.
     */
    cursor?: PhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phones.
     */
    skip?: number
    distinct?: PhoneScalarFieldEnum | PhoneScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Phone create
   */
  export type PhoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Phone.
     */
    data: XOR<PhoneCreateInput, PhoneUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Phone createMany
   */
  export type PhoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phones.
     */
    data: PhoneCreateManyInput | PhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Phone createManyAndReturn
   */
  export type PhoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * The data used to create many Phones.
     */
    data: PhoneCreateManyInput | PhoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phone update
   */
  export type PhoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Phone.
     */
    data: XOR<PhoneUpdateInput, PhoneUncheckedUpdateInput>
    /**
     * Choose, which Phone to update.
     */
    where: PhoneWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Phone updateMany
   */
  export type PhoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phones.
     */
    data: XOR<PhoneUpdateManyMutationInput, PhoneUncheckedUpdateManyInput>
    /**
     * Filter which Phones to update
     */
    where?: PhoneWhereInput
    /**
     * Limit how many Phones to update.
     */
    limit?: number
  }

  /**
   * Phone updateManyAndReturn
   */
  export type PhoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * The data used to update Phones.
     */
    data: XOR<PhoneUpdateManyMutationInput, PhoneUncheckedUpdateManyInput>
    /**
     * Filter which Phones to update
     */
    where?: PhoneWhereInput
    /**
     * Limit how many Phones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phone upsert
   */
  export type PhoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Phone to update in case it exists.
     */
    where: PhoneWhereUniqueInput
    /**
     * In case the Phone found by the `where` argument doesn't exist, create a new Phone with this data.
     */
    create: XOR<PhoneCreateInput, PhoneUncheckedCreateInput>
    /**
     * In case the Phone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneUpdateInput, PhoneUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Phone delete
   */
  export type PhoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
    /**
     * Filter which Phone to delete.
     */
    where: PhoneWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Phone deleteMany
   */
  export type PhoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phones to delete
     */
    where?: PhoneWhereInput
    /**
     * Limit how many Phones to delete.
     */
    limit?: number
  }

  /**
   * Phone.primaryPhoneUser
   */
  export type Phone$primaryPhoneUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Phone.subPhonesUser
   */
  export type Phone$subPhonesUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Phone without action
   */
  export type PhoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phone
     */
    select?: PhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phone
     */
    omit?: PhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneInclude<ExtArgs> | null
  }


  /**
   * Model SocialLinkeds
   */

  export type AggregateSocialLinkeds = {
    _count: SocialLinkedsCountAggregateOutputType | null
    _min: SocialLinkedsMinAggregateOutputType | null
    _max: SocialLinkedsMaxAggregateOutputType | null
  }

  export type SocialLinkedsMinAggregateOutputType = {
    id: string | null
    platform: $Enums.Platform | null
    userId: string | null
  }

  export type SocialLinkedsMaxAggregateOutputType = {
    id: string | null
    platform: $Enums.Platform | null
    userId: string | null
  }

  export type SocialLinkedsCountAggregateOutputType = {
    id: number
    platform: number
    userId: number
    _all: number
  }


  export type SocialLinkedsMinAggregateInputType = {
    id?: true
    platform?: true
    userId?: true
  }

  export type SocialLinkedsMaxAggregateInputType = {
    id?: true
    platform?: true
    userId?: true
  }

  export type SocialLinkedsCountAggregateInputType = {
    id?: true
    platform?: true
    userId?: true
    _all?: true
  }

  export type SocialLinkedsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinkeds to aggregate.
     */
    where?: SocialLinkedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinkeds to fetch.
     */
    orderBy?: SocialLinkedsOrderByWithRelationInput | SocialLinkedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinkeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinkeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinkeds
    **/
    _count?: true | SocialLinkedsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkedsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkedsMaxAggregateInputType
  }

  export type GetSocialLinkedsAggregateType<T extends SocialLinkedsAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLinkeds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLinkeds[P]>
      : GetScalarType<T[P], AggregateSocialLinkeds[P]>
  }




  export type SocialLinkedsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkedsWhereInput
    orderBy?: SocialLinkedsOrderByWithAggregationInput | SocialLinkedsOrderByWithAggregationInput[]
    by: SocialLinkedsScalarFieldEnum[] | SocialLinkedsScalarFieldEnum
    having?: SocialLinkedsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkedsCountAggregateInputType | true
    _min?: SocialLinkedsMinAggregateInputType
    _max?: SocialLinkedsMaxAggregateInputType
  }

  export type SocialLinkedsGroupByOutputType = {
    id: string
    platform: $Enums.Platform
    userId: string
    _count: SocialLinkedsCountAggregateOutputType | null
    _min: SocialLinkedsMinAggregateOutputType | null
    _max: SocialLinkedsMaxAggregateOutputType | null
  }

  type GetSocialLinkedsGroupByPayload<T extends SocialLinkedsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkedsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkedsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkedsGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkedsGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkedsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLinkeds"]>

  export type SocialLinkedsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLinkeds"]>

  export type SocialLinkedsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLinkeds"]>

  export type SocialLinkedsSelectScalar = {
    id?: boolean
    platform?: boolean
    userId?: boolean
  }

  export type SocialLinkedsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "userId", ExtArgs["result"]["socialLinkeds"]>
  export type SocialLinkedsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SocialLinkedsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SocialLinkedsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SocialLinkedsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLinkeds"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platform: $Enums.Platform
      userId: string
    }, ExtArgs["result"]["socialLinkeds"]>
    composites: {}
  }

  type SocialLinkedsGetPayload<S extends boolean | null | undefined | SocialLinkedsDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkedsPayload, S>

  type SocialLinkedsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinkedsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SocialLinkedsCountAggregateInputType | true
    }

  export interface SocialLinkedsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLinkeds'], meta: { name: 'SocialLinkeds' } }
    /**
     * Find zero or one SocialLinkeds that matches the filter.
     * @param {SocialLinkedsFindUniqueArgs} args - Arguments to find a SocialLinkeds
     * @example
     * // Get one SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkedsFindUniqueArgs>(args: SelectSubset<T, SocialLinkedsFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkedsClient<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLinkeds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinkedsFindUniqueOrThrowArgs} args - Arguments to find a SocialLinkeds
     * @example
     * // Get one SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkedsFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkedsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkedsClient<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLinkeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkedsFindFirstArgs} args - Arguments to find a SocialLinkeds
     * @example
     * // Get one SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkedsFindFirstArgs>(args?: SelectSubset<T, SocialLinkedsFindFirstArgs<ExtArgs>>): Prisma__SocialLinkedsClient<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLinkeds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkedsFindFirstOrThrowArgs} args - Arguments to find a SocialLinkeds
     * @example
     * // Get one SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkedsFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkedsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkedsClient<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinkeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkedsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.findMany()
     * 
     * // Get first 10 SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkedsWithIdOnly = await prisma.socialLinkeds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkedsFindManyArgs>(args?: SelectSubset<T, SocialLinkedsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLinkeds.
     * @param {SocialLinkedsCreateArgs} args - Arguments to create a SocialLinkeds.
     * @example
     * // Create one SocialLinkeds
     * const SocialLinkeds = await prisma.socialLinkeds.create({
     *   data: {
     *     // ... data to create a SocialLinkeds
     *   }
     * })
     * 
     */
    create<T extends SocialLinkedsCreateArgs>(args: SelectSubset<T, SocialLinkedsCreateArgs<ExtArgs>>): Prisma__SocialLinkedsClient<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinkeds.
     * @param {SocialLinkedsCreateManyArgs} args - Arguments to create many SocialLinkeds.
     * @example
     * // Create many SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkedsCreateManyArgs>(args?: SelectSubset<T, SocialLinkedsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinkeds and returns the data saved in the database.
     * @param {SocialLinkedsCreateManyAndReturnArgs} args - Arguments to create many SocialLinkeds.
     * @example
     * // Create many SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinkeds and only return the `id`
     * const socialLinkedsWithIdOnly = await prisma.socialLinkeds.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinkedsCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinkedsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialLinkeds.
     * @param {SocialLinkedsDeleteArgs} args - Arguments to delete one SocialLinkeds.
     * @example
     * // Delete one SocialLinkeds
     * const SocialLinkeds = await prisma.socialLinkeds.delete({
     *   where: {
     *     // ... filter to delete one SocialLinkeds
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkedsDeleteArgs>(args: SelectSubset<T, SocialLinkedsDeleteArgs<ExtArgs>>): Prisma__SocialLinkedsClient<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLinkeds.
     * @param {SocialLinkedsUpdateArgs} args - Arguments to update one SocialLinkeds.
     * @example
     * // Update one SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkedsUpdateArgs>(args: SelectSubset<T, SocialLinkedsUpdateArgs<ExtArgs>>): Prisma__SocialLinkedsClient<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinkeds.
     * @param {SocialLinkedsDeleteManyArgs} args - Arguments to filter SocialLinkeds to delete.
     * @example
     * // Delete a few SocialLinkeds
     * const { count } = await prisma.socialLinkeds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkedsDeleteManyArgs>(args?: SelectSubset<T, SocialLinkedsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinkeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkedsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkedsUpdateManyArgs>(args: SelectSubset<T, SocialLinkedsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinkeds and returns the data updated in the database.
     * @param {SocialLinkedsUpdateManyAndReturnArgs} args - Arguments to update many SocialLinkeds.
     * @example
     * // Update many SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialLinkeds and only return the `id`
     * const socialLinkedsWithIdOnly = await prisma.socialLinkeds.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialLinkedsUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialLinkedsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialLinkeds.
     * @param {SocialLinkedsUpsertArgs} args - Arguments to update or create a SocialLinkeds.
     * @example
     * // Update or create a SocialLinkeds
     * const socialLinkeds = await prisma.socialLinkeds.upsert({
     *   create: {
     *     // ... data to create a SocialLinkeds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLinkeds we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkedsUpsertArgs>(args: SelectSubset<T, SocialLinkedsUpsertArgs<ExtArgs>>): Prisma__SocialLinkedsClient<$Result.GetResult<Prisma.$SocialLinkedsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLinkeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkedsCountArgs} args - Arguments to filter SocialLinkeds to count.
     * @example
     * // Count the number of SocialLinkeds
     * const count = await prisma.socialLinkeds.count({
     *   where: {
     *     // ... the filter for the SocialLinkeds we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkedsCountArgs>(
      args?: Subset<T, SocialLinkedsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkedsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLinkeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkedsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialLinkedsAggregateArgs>(args: Subset<T, SocialLinkedsAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkedsAggregateType<T>>

    /**
     * Group by SocialLinkeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkedsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialLinkedsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkedsGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkedsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialLinkedsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkedsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLinkeds model
   */
  readonly fields: SocialLinkedsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLinkeds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkedsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialLinkeds model
   */
  interface SocialLinkedsFieldRefs {
    readonly id: FieldRef<"SocialLinkeds", 'String'>
    readonly platform: FieldRef<"SocialLinkeds", 'Platform'>
    readonly userId: FieldRef<"SocialLinkeds", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SocialLinkeds findUnique
   */
  export type SocialLinkedsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinkeds to fetch.
     */
    where: SocialLinkedsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialLinkeds findUniqueOrThrow
   */
  export type SocialLinkedsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinkeds to fetch.
     */
    where: SocialLinkedsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialLinkeds findFirst
   */
  export type SocialLinkedsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinkeds to fetch.
     */
    where?: SocialLinkedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinkeds to fetch.
     */
    orderBy?: SocialLinkedsOrderByWithRelationInput | SocialLinkedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinkeds.
     */
    cursor?: SocialLinkedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinkeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinkeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinkeds.
     */
    distinct?: SocialLinkedsScalarFieldEnum | SocialLinkedsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialLinkeds findFirstOrThrow
   */
  export type SocialLinkedsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinkeds to fetch.
     */
    where?: SocialLinkedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinkeds to fetch.
     */
    orderBy?: SocialLinkedsOrderByWithRelationInput | SocialLinkedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinkeds.
     */
    cursor?: SocialLinkedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinkeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinkeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinkeds.
     */
    distinct?: SocialLinkedsScalarFieldEnum | SocialLinkedsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialLinkeds findMany
   */
  export type SocialLinkedsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinkeds to fetch.
     */
    where?: SocialLinkedsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinkeds to fetch.
     */
    orderBy?: SocialLinkedsOrderByWithRelationInput | SocialLinkedsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinkeds.
     */
    cursor?: SocialLinkedsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinkeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinkeds.
     */
    skip?: number
    distinct?: SocialLinkedsScalarFieldEnum | SocialLinkedsScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialLinkeds create
   */
  export type SocialLinkedsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialLinkeds.
     */
    data: XOR<SocialLinkedsCreateInput, SocialLinkedsUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialLinkeds createMany
   */
  export type SocialLinkedsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinkeds.
     */
    data: SocialLinkedsCreateManyInput | SocialLinkedsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLinkeds createManyAndReturn
   */
  export type SocialLinkedsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * The data used to create many SocialLinkeds.
     */
    data: SocialLinkedsCreateManyInput | SocialLinkedsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLinkeds update
   */
  export type SocialLinkedsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialLinkeds.
     */
    data: XOR<SocialLinkedsUpdateInput, SocialLinkedsUncheckedUpdateInput>
    /**
     * Choose, which SocialLinkeds to update.
     */
    where: SocialLinkedsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialLinkeds updateMany
   */
  export type SocialLinkedsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinkeds.
     */
    data: XOR<SocialLinkedsUpdateManyMutationInput, SocialLinkedsUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinkeds to update
     */
    where?: SocialLinkedsWhereInput
    /**
     * Limit how many SocialLinkeds to update.
     */
    limit?: number
  }

  /**
   * SocialLinkeds updateManyAndReturn
   */
  export type SocialLinkedsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * The data used to update SocialLinkeds.
     */
    data: XOR<SocialLinkedsUpdateManyMutationInput, SocialLinkedsUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinkeds to update
     */
    where?: SocialLinkedsWhereInput
    /**
     * Limit how many SocialLinkeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLinkeds upsert
   */
  export type SocialLinkedsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialLinkeds to update in case it exists.
     */
    where: SocialLinkedsWhereUniqueInput
    /**
     * In case the SocialLinkeds found by the `where` argument doesn't exist, create a new SocialLinkeds with this data.
     */
    create: XOR<SocialLinkedsCreateInput, SocialLinkedsUncheckedCreateInput>
    /**
     * In case the SocialLinkeds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkedsUpdateInput, SocialLinkedsUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialLinkeds delete
   */
  export type SocialLinkedsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
    /**
     * Filter which SocialLinkeds to delete.
     */
    where: SocialLinkedsWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialLinkeds deleteMany
   */
  export type SocialLinkedsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinkeds to delete
     */
    where?: SocialLinkedsWhereInput
    /**
     * Limit how many SocialLinkeds to delete.
     */
    limit?: number
  }

  /**
   * SocialLinkeds without action
   */
  export type SocialLinkedsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLinkeds
     */
    select?: SocialLinkedsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLinkeds
     */
    omit?: SocialLinkedsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkedsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MediaScalarFieldEnum: {
    id: 'id',
    originalName: 'originalName',
    url: 'url',
    secure_url: 'secure_url',
    width: 'width',
    height: 'height',
    format: 'format',
    resourceType: 'resourceType',
    createdAt: 'createdAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const PostScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    scope: 'scope',
    status: 'status',
    content: 'content',
    medias: 'medias'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    postId: 'postId',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    deletedAt: 'deletedAt',
    updateHistories: 'updateHistories',
    status: 'status'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ReactionScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    postId: 'postId',
    commentId: 'commentId'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    flags: 'flags',
    primaryEmailId: 'primaryEmailId',
    primaryPhoneId: 'primaryPhoneId',
    hashedPassword: 'hashedPassword',
    displayName: 'displayName',
    username: 'username',
    gender: 'gender',
    pronoun: 'pronoun',
    birthday: 'birthday',
    biography: 'biography',
    websites: 'websites',
    language: 'language',
    deletedAt: 'deletedAt',
    avatarUrl: 'avatarUrl',
    bannerUrl: 'bannerUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    requesterId: 'requesterId',
    addresseeId: 'addresseeId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


  export const RelationScalarFieldEnum: {
    sourceUserId: 'sourceUserId',
    targetUserId: 'targetUserId',
    type: 'type',
    status: 'status',
    scope: 'scope',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RelationScalarFieldEnum = (typeof RelationScalarFieldEnum)[keyof typeof RelationScalarFieldEnum]


  export const EmailScalarFieldEnum: {
    id: 'id',
    value: 'value',
    scope: 'scope',
    subEmailsUserId: 'subEmailsUserId'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const PhoneScalarFieldEnum: {
    id: 'id',
    value: 'value',
    scope: 'scope',
    subPhonesUserId: 'subPhonesUserId'
  };

  export type PhoneScalarFieldEnum = (typeof PhoneScalarFieldEnum)[keyof typeof PhoneScalarFieldEnum]


  export const SocialLinkedsScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    userId: 'userId'
  };

  export type SocialLinkedsScalarFieldEnum = (typeof SocialLinkedsScalarFieldEnum)[keyof typeof SocialLinkedsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ResourceType'
   */
  export type EnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType'>
    


  /**
   * Reference to a field of type 'ResourceType[]'
   */
  export type ListEnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Scope'
   */
  export type EnumScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Scope'>
    


  /**
   * Reference to a field of type 'Scope[]'
   */
  export type ListEnumScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Scope[]'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostStatus[]'
   */
  export type ListEnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus[]'>
    


  /**
   * Reference to a field of type 'CommentStatus'
   */
  export type EnumCommentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentStatus'>
    


  /**
   * Reference to a field of type 'CommentStatus[]'
   */
  export type ListEnumCommentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentStatus[]'>
    


  /**
   * Reference to a field of type 'UserFlag[]'
   */
  export type ListEnumUserFlagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserFlag[]'>
    


  /**
   * Reference to a field of type 'UserFlag'
   */
  export type EnumUserFlagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserFlag'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'RelationType'
   */
  export type EnumRelationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationType'>
    


  /**
   * Reference to a field of type 'RelationType[]'
   */
  export type ListEnumRelationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RelationType[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    originalName?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    secure_url?: StringFilter<"Media"> | string
    width?: IntFilter<"Media"> | number
    height?: IntFilter<"Media"> | number
    format?: StringFilter<"Media"> | string
    resourceType?: EnumResourceTypeFilter<"Media"> | $Enums.ResourceType
    createdAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resourceType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    secure_url?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    originalName?: StringFilter<"Media"> | string
    width?: IntFilter<"Media"> | number
    height?: IntFilter<"Media"> | number
    format?: StringFilter<"Media"> | string
    resourceType?: EnumResourceTypeFilter<"Media"> | $Enums.ResourceType
    createdAt?: DateTimeFilter<"Media"> | Date | string
  }, "id" | "url" | "secure_url">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resourceType?: SortOrder
    createdAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _avg?: MediaAvgOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
    _sum?: MediaSumOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    originalName?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    secure_url?: StringWithAggregatesFilter<"Media"> | string
    width?: IntWithAggregatesFilter<"Media"> | number
    height?: IntWithAggregatesFilter<"Media"> | number
    format?: StringWithAggregatesFilter<"Media"> | string
    resourceType?: EnumResourceTypeWithAggregatesFilter<"Media"> | $Enums.ResourceType
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    authorId?: UuidFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updateAt?: DateTimeFilter<"Post"> | Date | string
    scope?: EnumScopeFilter<"Post"> | $Enums.Scope
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    content?: StringFilter<"Post"> | string
    medias?: StringNullableListFilter<"Post">
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    reactions?: ReactionListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    content?: SortOrder
    medias?: SortOrder
    author?: UserOrderByWithRelationInput
    reactions?: ReactionOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    authorId?: UuidFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updateAt?: DateTimeFilter<"Post"> | Date | string
    scope?: EnumScopeFilter<"Post"> | $Enums.Scope
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    content?: StringFilter<"Post"> | string
    medias?: StringNullableListFilter<"Post">
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    reactions?: ReactionListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    content?: SortOrder
    medias?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    authorId?: UuidWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    scope?: EnumScopeWithAggregatesFilter<"Post"> | $Enums.Scope
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    content?: StringWithAggregatesFilter<"Post"> | string
    medias?: StringNullableListFilter<"Post">
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    authorId?: UuidFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updateAt?: DateTimeFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    updateHistories?: StringNullableListFilter<"Comment">
    status?: EnumCommentStatusFilter<"Comment"> | $Enums.CommentStatus
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    reations?: ReactionListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updateHistories?: SortOrder
    status?: SortOrder
    author?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
    reations?: ReactionOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    authorId?: UuidFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updateAt?: DateTimeFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    updateHistories?: StringNullableListFilter<"Comment">
    status?: EnumCommentStatusFilter<"Comment"> | $Enums.CommentStatus
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
    reations?: ReactionListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updateHistories?: SortOrder
    status?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: UuidWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
    updateHistories?: StringNullableListFilter<"Comment">
    status?: EnumCommentStatusWithAggregatesFilter<"Comment"> | $Enums.CommentStatus
  }

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    id?: StringFilter<"Reaction"> | string
    authorId?: UuidFilter<"Reaction"> | string
    postId?: StringNullableFilter<"Reaction"> | string | null
    commentId?: StringNullableFilter<"Reaction"> | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }

  export type ReactionOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
    post?: PostOrderByWithRelationInput
    comment?: CommentOrderByWithRelationInput
  }

  export type ReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    authorId?: UuidFilter<"Reaction"> | string
    postId?: StringNullableFilter<"Reaction"> | string | null
    commentId?: StringNullableFilter<"Reaction"> | string | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    post?: XOR<PostNullableScalarRelationFilter, PostWhereInput> | null
    comment?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
  }, "id">

  export type ReactionOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    _count?: ReactionCountOrderByAggregateInput
    _max?: ReactionMaxOrderByAggregateInput
    _min?: ReactionMinOrderByAggregateInput
  }

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    OR?: ReactionScalarWhereWithAggregatesInput[]
    NOT?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reaction"> | string
    authorId?: UuidWithAggregatesFilter<"Reaction"> | string
    postId?: StringNullableWithAggregatesFilter<"Reaction"> | string | null
    commentId?: StringNullableWithAggregatesFilter<"Reaction"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    profileId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    flags?: EnumUserFlagNullableListFilter<"User">
    primaryEmailId?: UuidFilter<"User"> | string
    primaryPhoneId?: UuidNullableFilter<"User"> | string | null
    hashedPassword?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    pronoun?: StringNullableFilter<"User"> | string | null
    birthday?: DateTimeFilter<"User"> | Date | string
    biography?: StringNullableFilter<"User"> | string | null
    websites?: StringNullableListFilter<"User">
    language?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bannerUrl?: StringNullableFilter<"User"> | string | null
    primaryEmail?: XOR<EmailScalarRelationFilter, EmailWhereInput>
    subEmails?: EmailListRelationFilter
    primaryPhone?: XOR<PhoneNullableScalarRelationFilter, PhoneWhereInput> | null
    subPhones?: PhoneListRelationFilter
    socialLinkeds?: SocialLinkedsListRelationFilter
    sentRelations?: RelationListRelationFilter
    receivedRelations?: RelationListRelationFilter
    sentFriendRequests?: FriendshipListRelationFilter
    receivedFriendRequests?: FriendshipListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    flags?: SortOrder
    primaryEmailId?: SortOrder
    primaryPhoneId?: SortOrderInput | SortOrder
    hashedPassword?: SortOrder
    displayName?: SortOrder
    username?: SortOrderInput | SortOrder
    gender?: SortOrder
    pronoun?: SortOrderInput | SortOrder
    birthday?: SortOrder
    biography?: SortOrderInput | SortOrder
    websites?: SortOrder
    language?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    primaryEmail?: EmailOrderByWithRelationInput
    subEmails?: EmailOrderByRelationAggregateInput
    primaryPhone?: PhoneOrderByWithRelationInput
    subPhones?: PhoneOrderByRelationAggregateInput
    socialLinkeds?: SocialLinkedsOrderByRelationAggregateInput
    sentRelations?: RelationOrderByRelationAggregateInput
    receivedRelations?: RelationOrderByRelationAggregateInput
    sentFriendRequests?: FriendshipOrderByRelationAggregateInput
    receivedFriendRequests?: FriendshipOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    primaryEmailId?: string
    primaryPhoneId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    profileId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    flags?: EnumUserFlagNullableListFilter<"User">
    hashedPassword?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    pronoun?: StringNullableFilter<"User"> | string | null
    birthday?: DateTimeFilter<"User"> | Date | string
    biography?: StringNullableFilter<"User"> | string | null
    websites?: StringNullableListFilter<"User">
    language?: StringNullableFilter<"User"> | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    bannerUrl?: StringNullableFilter<"User"> | string | null
    primaryEmail?: XOR<EmailScalarRelationFilter, EmailWhereInput>
    subEmails?: EmailListRelationFilter
    primaryPhone?: XOR<PhoneNullableScalarRelationFilter, PhoneWhereInput> | null
    subPhones?: PhoneListRelationFilter
    socialLinkeds?: SocialLinkedsListRelationFilter
    sentRelations?: RelationListRelationFilter
    receivedRelations?: RelationListRelationFilter
    sentFriendRequests?: FriendshipListRelationFilter
    receivedFriendRequests?: FriendshipListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    reactions?: ReactionListRelationFilter
  }, "id" | "primaryEmailId" | "primaryPhoneId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    flags?: SortOrder
    primaryEmailId?: SortOrder
    primaryPhoneId?: SortOrderInput | SortOrder
    hashedPassword?: SortOrder
    displayName?: SortOrder
    username?: SortOrderInput | SortOrder
    gender?: SortOrder
    pronoun?: SortOrderInput | SortOrder
    birthday?: SortOrder
    biography?: SortOrderInput | SortOrder
    websites?: SortOrder
    language?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bannerUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    profileId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    flags?: EnumUserFlagNullableListFilter<"User">
    primaryEmailId?: UuidWithAggregatesFilter<"User"> | string
    primaryPhoneId?: UuidNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    pronoun?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthday?: DateTimeWithAggregatesFilter<"User"> | Date | string
    biography?: StringNullableWithAggregatesFilter<"User"> | string | null
    websites?: StringNullableListFilter<"User">
    language?: StringNullableWithAggregatesFilter<"User"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bannerUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    requesterId?: UuidFilter<"Friendship"> | string
    addresseeId?: UuidFilter<"Friendship"> | string
    status?: EnumStatusFilter<"Friendship"> | $Enums.Status
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeFilter<"Friendship"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requester?: UserOrderByWithRelationInput
    addressee?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: FriendshipIdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    requesterId?: UuidFilter<"Friendship"> | string
    addresseeId?: UuidFilter<"Friendship"> | string
    status?: EnumStatusFilter<"Friendship"> | $Enums.Status
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeFilter<"Friendship"> | Date | string
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    addressee?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FriendshipOrderByWithAggregationInput = {
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    requesterId?: UuidWithAggregatesFilter<"Friendship"> | string
    addresseeId?: UuidWithAggregatesFilter<"Friendship"> | string
    status?: EnumStatusWithAggregatesFilter<"Friendship"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type RelationWhereInput = {
    AND?: RelationWhereInput | RelationWhereInput[]
    OR?: RelationWhereInput[]
    NOT?: RelationWhereInput | RelationWhereInput[]
    sourceUserId?: UuidFilter<"Relation"> | string
    targetUserId?: UuidFilter<"Relation"> | string
    type?: EnumRelationTypeFilter<"Relation"> | $Enums.RelationType
    status?: EnumStatusFilter<"Relation"> | $Enums.Status
    scope?: EnumScopeFilter<"Relation"> | $Enums.Scope
    createdAt?: DateTimeFilter<"Relation"> | Date | string
    updatedAt?: DateTimeFilter<"Relation"> | Date | string
    sourceUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RelationOrderByWithRelationInput = {
    sourceUserId?: SortOrder
    targetUserId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceUser?: UserOrderByWithRelationInput
    targetUser?: UserOrderByWithRelationInput
  }

  export type RelationWhereUniqueInput = Prisma.AtLeast<{
    id?: RelationIdCompoundUniqueInput
    AND?: RelationWhereInput | RelationWhereInput[]
    OR?: RelationWhereInput[]
    NOT?: RelationWhereInput | RelationWhereInput[]
    sourceUserId?: UuidFilter<"Relation"> | string
    targetUserId?: UuidFilter<"Relation"> | string
    type?: EnumRelationTypeFilter<"Relation"> | $Enums.RelationType
    status?: EnumStatusFilter<"Relation"> | $Enums.Status
    scope?: EnumScopeFilter<"Relation"> | $Enums.Scope
    createdAt?: DateTimeFilter<"Relation"> | Date | string
    updatedAt?: DateTimeFilter<"Relation"> | Date | string
    sourceUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    targetUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RelationOrderByWithAggregationInput = {
    sourceUserId?: SortOrder
    targetUserId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RelationCountOrderByAggregateInput
    _max?: RelationMaxOrderByAggregateInput
    _min?: RelationMinOrderByAggregateInput
  }

  export type RelationScalarWhereWithAggregatesInput = {
    AND?: RelationScalarWhereWithAggregatesInput | RelationScalarWhereWithAggregatesInput[]
    OR?: RelationScalarWhereWithAggregatesInput[]
    NOT?: RelationScalarWhereWithAggregatesInput | RelationScalarWhereWithAggregatesInput[]
    sourceUserId?: UuidWithAggregatesFilter<"Relation"> | string
    targetUserId?: UuidWithAggregatesFilter<"Relation"> | string
    type?: EnumRelationTypeWithAggregatesFilter<"Relation"> | $Enums.RelationType
    status?: EnumStatusWithAggregatesFilter<"Relation"> | $Enums.Status
    scope?: EnumScopeWithAggregatesFilter<"Relation"> | $Enums.Scope
    createdAt?: DateTimeWithAggregatesFilter<"Relation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Relation"> | Date | string
  }

  export type EmailWhereInput = {
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    id?: UuidFilter<"Email"> | string
    value?: StringFilter<"Email"> | string
    scope?: EnumScopeFilter<"Email"> | $Enums.Scope
    subEmailsUserId?: UuidNullableFilter<"Email"> | string | null
    primaryEmailUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subEmailsUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subEmailsUserId?: SortOrderInput | SortOrder
    primaryEmailUser?: UserOrderByWithRelationInput
    subEmailsUser?: UserOrderByWithRelationInput
  }

  export type EmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    value?: StringFilter<"Email"> | string
    scope?: EnumScopeFilter<"Email"> | $Enums.Scope
    subEmailsUserId?: UuidNullableFilter<"Email"> | string | null
    primaryEmailUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subEmailsUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subEmailsUserId?: SortOrderInput | SortOrder
    _count?: EmailCountOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    OR?: EmailScalarWhereWithAggregatesInput[]
    NOT?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Email"> | string
    value?: StringWithAggregatesFilter<"Email"> | string
    scope?: EnumScopeWithAggregatesFilter<"Email"> | $Enums.Scope
    subEmailsUserId?: UuidNullableWithAggregatesFilter<"Email"> | string | null
  }

  export type PhoneWhereInput = {
    AND?: PhoneWhereInput | PhoneWhereInput[]
    OR?: PhoneWhereInput[]
    NOT?: PhoneWhereInput | PhoneWhereInput[]
    id?: UuidFilter<"Phone"> | string
    value?: StringFilter<"Phone"> | string
    scope?: EnumScopeFilter<"Phone"> | $Enums.Scope
    subPhonesUserId?: UuidNullableFilter<"Phone"> | string | null
    primaryPhoneUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subPhonesUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PhoneOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subPhonesUserId?: SortOrderInput | SortOrder
    primaryPhoneUser?: UserOrderByWithRelationInput
    subPhonesUser?: UserOrderByWithRelationInput
  }

  export type PhoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhoneWhereInput | PhoneWhereInput[]
    OR?: PhoneWhereInput[]
    NOT?: PhoneWhereInput | PhoneWhereInput[]
    value?: StringFilter<"Phone"> | string
    scope?: EnumScopeFilter<"Phone"> | $Enums.Scope
    subPhonesUserId?: UuidNullableFilter<"Phone"> | string | null
    primaryPhoneUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    subPhonesUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PhoneOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subPhonesUserId?: SortOrderInput | SortOrder
    _count?: PhoneCountOrderByAggregateInput
    _max?: PhoneMaxOrderByAggregateInput
    _min?: PhoneMinOrderByAggregateInput
  }

  export type PhoneScalarWhereWithAggregatesInput = {
    AND?: PhoneScalarWhereWithAggregatesInput | PhoneScalarWhereWithAggregatesInput[]
    OR?: PhoneScalarWhereWithAggregatesInput[]
    NOT?: PhoneScalarWhereWithAggregatesInput | PhoneScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Phone"> | string
    value?: StringWithAggregatesFilter<"Phone"> | string
    scope?: EnumScopeWithAggregatesFilter<"Phone"> | $Enums.Scope
    subPhonesUserId?: UuidNullableWithAggregatesFilter<"Phone"> | string | null
  }

  export type SocialLinkedsWhereInput = {
    AND?: SocialLinkedsWhereInput | SocialLinkedsWhereInput[]
    OR?: SocialLinkedsWhereInput[]
    NOT?: SocialLinkedsWhereInput | SocialLinkedsWhereInput[]
    id?: StringFilter<"SocialLinkeds"> | string
    platform?: EnumPlatformFilter<"SocialLinkeds"> | $Enums.Platform
    userId?: UuidFilter<"SocialLinkeds"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SocialLinkedsOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SocialLinkedsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialLinkedsWhereInput | SocialLinkedsWhereInput[]
    OR?: SocialLinkedsWhereInput[]
    NOT?: SocialLinkedsWhereInput | SocialLinkedsWhereInput[]
    platform?: EnumPlatformFilter<"SocialLinkeds"> | $Enums.Platform
    userId?: UuidFilter<"SocialLinkeds"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SocialLinkedsOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
    _count?: SocialLinkedsCountOrderByAggregateInput
    _max?: SocialLinkedsMaxOrderByAggregateInput
    _min?: SocialLinkedsMinOrderByAggregateInput
  }

  export type SocialLinkedsScalarWhereWithAggregatesInput = {
    AND?: SocialLinkedsScalarWhereWithAggregatesInput | SocialLinkedsScalarWhereWithAggregatesInput[]
    OR?: SocialLinkedsScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkedsScalarWhereWithAggregatesInput | SocialLinkedsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialLinkeds"> | string
    platform?: EnumPlatformWithAggregatesFilter<"SocialLinkeds"> | $Enums.Platform
    userId?: UuidWithAggregatesFilter<"SocialLinkeds"> | string
  }

  export type MediaCreateInput = {
    id: string
    originalName: string
    url: string
    secure_url: string
    width: number
    height: number
    format: string
    resourceType: $Enums.ResourceType
    createdAt?: Date | string
  }

  export type MediaUncheckedCreateInput = {
    id: string
    originalName: string
    url: string
    secure_url: string
    width: number
    height: number
    format: string
    resourceType: $Enums.ResourceType
    createdAt?: Date | string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    resourceType?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    resourceType?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id: string
    originalName: string
    url: string
    secure_url: string
    width: number
    height: number
    format: string
    resourceType: $Enums.ResourceType
    createdAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    resourceType?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    resourceType?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
    author: UserCreateNestedOneWithoutPostsInput
    reactions?: ReactionCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    authorId: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    reactions?: ReactionUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    authorId: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
  }

  export type CommentCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    author: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    reations?: ReactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    authorId: string
    postId: string
    parentId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    reations?: ReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    reations?: ReactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    reations?: ReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    authorId: string
    postId: string
    parentId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
  }

  export type ReactionCreateInput = {
    id?: string
    author: UserCreateNestedOneWithoutReactionsInput
    post?: PostCreateNestedOneWithoutReactionsInput
    comment?: CommentCreateNestedOneWithoutReationsInput
  }

  export type ReactionUncheckedCreateInput = {
    id?: string
    authorId: string
    postId?: string | null
    commentId?: string | null
  }

  export type ReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutReactionsNestedInput
    post?: PostUpdateOneWithoutReactionsNestedInput
    comment?: CommentUpdateOneWithoutReationsNestedInput
  }

  export type ReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReactionCreateManyInput = {
    id?: string
    authorId: string
    postId?: string | null
    commentId?: string | null
  }

  export type ReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FriendshipCreateInput = {
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutSentFriendRequestsInput
    addressee: UserCreateNestedOneWithoutReceivedFriendRequestsInput
  }

  export type FriendshipUncheckedCreateInput = {
    requesterId: string
    addresseeId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput
    addressee?: UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    requesterId: string
    addresseeId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    requesterId?: StringFieldUpdateOperationsInput | string
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationCreateInput = {
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceUser: UserCreateNestedOneWithoutSentRelationsInput
    targetUser: UserCreateNestedOneWithoutReceivedRelationsInput
  }

  export type RelationUncheckedCreateInput = {
    sourceUserId: string
    targetUserId: string
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationUpdateInput = {
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUser?: UserUpdateOneRequiredWithoutSentRelationsNestedInput
    targetUser?: UserUpdateOneRequiredWithoutReceivedRelationsNestedInput
  }

  export type RelationUncheckedUpdateInput = {
    sourceUserId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationCreateManyInput = {
    sourceUserId: string
    targetUserId: string
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationUpdateManyMutationInput = {
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationUncheckedUpdateManyInput = {
    sourceUserId?: StringFieldUpdateOperationsInput | string
    targetUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateInput = {
    id?: string
    value: string
    scope?: $Enums.Scope
    primaryEmailUser?: UserCreateNestedOneWithoutPrimaryEmailInput
    subEmailsUser?: UserCreateNestedOneWithoutSubEmailsInput
  }

  export type EmailUncheckedCreateInput = {
    id?: string
    value: string
    scope?: $Enums.Scope
    subEmailsUserId?: string | null
    primaryEmailUser?: UserUncheckedCreateNestedOneWithoutPrimaryEmailInput
  }

  export type EmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    primaryEmailUser?: UserUpdateOneWithoutPrimaryEmailNestedInput
    subEmailsUser?: UserUpdateOneWithoutSubEmailsNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    subEmailsUserId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmailUser?: UserUncheckedUpdateOneWithoutPrimaryEmailNestedInput
  }

  export type EmailCreateManyInput = {
    id?: string
    value: string
    scope?: $Enums.Scope
    subEmailsUserId?: string | null
  }

  export type EmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    subEmailsUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneCreateInput = {
    id?: string
    value: string
    scope: $Enums.Scope
    primaryPhoneUser?: UserCreateNestedOneWithoutPrimaryPhoneInput
    subPhonesUser?: UserCreateNestedOneWithoutSubPhonesInput
  }

  export type PhoneUncheckedCreateInput = {
    id?: string
    value: string
    scope: $Enums.Scope
    subPhonesUserId?: string | null
    primaryPhoneUser?: UserUncheckedCreateNestedOneWithoutPrimaryPhoneInput
  }

  export type PhoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    primaryPhoneUser?: UserUpdateOneWithoutPrimaryPhoneNestedInput
    subPhonesUser?: UserUpdateOneWithoutSubPhonesNestedInput
  }

  export type PhoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    subPhonesUserId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryPhoneUser?: UserUncheckedUpdateOneWithoutPrimaryPhoneNestedInput
  }

  export type PhoneCreateManyInput = {
    id?: string
    value: string
    scope: $Enums.Scope
    subPhonesUserId?: string | null
  }

  export type PhoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type PhoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    subPhonesUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialLinkedsCreateInput = {
    id?: string
    platform: $Enums.Platform
    user: UserCreateNestedOneWithoutSocialLinkedsInput
  }

  export type SocialLinkedsUncheckedCreateInput = {
    id?: string
    platform: $Enums.Platform
    userId: string
  }

  export type SocialLinkedsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    user?: UserUpdateOneRequiredWithoutSocialLinkedsNestedInput
  }

  export type SocialLinkedsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialLinkedsCreateManyInput = {
    id?: string
    platform: $Enums.Platform
    userId: string
  }

  export type SocialLinkedsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
  }

  export type SocialLinkedsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resourceType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resourceType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    originalName?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resourceType?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeFilter<$PrismaModel> | $Enums.Scope
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput
    some?: ReactionWhereInput
    none?: ReactionWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    content?: SortOrder
    medias?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    content?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    content?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeWithAggregatesFilter<$PrismaModel> | $Enums.Scope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScopeFilter<$PrismaModel>
    _max?: NestedEnumScopeFilter<$PrismaModel>
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumCommentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusFilter<$PrismaModel> | $Enums.CommentStatus
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    updateHistories?: SortOrder
    status?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    status?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    deletedAt?: SortOrder
    status?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCommentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentStatusFilter<$PrismaModel>
    _max?: NestedEnumCommentStatusFilter<$PrismaModel>
  }

  export type PostNullableScalarRelationFilter = {
    is?: PostWhereInput | null
    isNot?: PostWhereInput | null
  }

  export type ReactionCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type ReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type ReactionMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    commentId?: SortOrder
  }

  export type EnumUserFlagNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.UserFlag[] | ListEnumUserFlagFieldRefInput<$PrismaModel> | null
    has?: $Enums.UserFlag | EnumUserFlagFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.UserFlag[] | ListEnumUserFlagFieldRefInput<$PrismaModel>
    hasSome?: $Enums.UserFlag[] | ListEnumUserFlagFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EmailScalarRelationFilter = {
    is?: EmailWhereInput
    isNot?: EmailWhereInput
  }

  export type EmailListRelationFilter = {
    every?: EmailWhereInput
    some?: EmailWhereInput
    none?: EmailWhereInput
  }

  export type PhoneNullableScalarRelationFilter = {
    is?: PhoneWhereInput | null
    isNot?: PhoneWhereInput | null
  }

  export type PhoneListRelationFilter = {
    every?: PhoneWhereInput
    some?: PhoneWhereInput
    none?: PhoneWhereInput
  }

  export type SocialLinkedsListRelationFilter = {
    every?: SocialLinkedsWhereInput
    some?: SocialLinkedsWhereInput
    none?: SocialLinkedsWhereInput
  }

  export type RelationListRelationFilter = {
    every?: RelationWhereInput
    some?: RelationWhereInput
    none?: RelationWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type EmailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialLinkedsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    flags?: SortOrder
    primaryEmailId?: SortOrder
    primaryPhoneId?: SortOrder
    hashedPassword?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    pronoun?: SortOrder
    birthday?: SortOrder
    biography?: SortOrder
    websites?: SortOrder
    language?: SortOrder
    deletedAt?: SortOrder
    avatarUrl?: SortOrder
    bannerUrl?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    primaryEmailId?: SortOrder
    primaryPhoneId?: SortOrder
    hashedPassword?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    pronoun?: SortOrder
    birthday?: SortOrder
    biography?: SortOrder
    language?: SortOrder
    deletedAt?: SortOrder
    avatarUrl?: SortOrder
    bannerUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    primaryEmailId?: SortOrder
    primaryPhoneId?: SortOrder
    hashedPassword?: SortOrder
    displayName?: SortOrder
    username?: SortOrder
    gender?: SortOrder
    pronoun?: SortOrder
    birthday?: SortOrder
    biography?: SortOrder
    language?: SortOrder
    deletedAt?: SortOrder
    avatarUrl?: SortOrder
    bannerUrl?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type FriendshipIdCompoundUniqueInput = {
    requesterId: string
    addresseeId: string
  }

  export type FriendshipCountOrderByAggregateInput = {
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    requesterId?: SortOrder
    addresseeId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumRelationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationType | EnumRelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationTypeFilter<$PrismaModel> | $Enums.RelationType
  }

  export type RelationIdCompoundUniqueInput = {
    sourceUserId: string
    targetUserId: string
    type: $Enums.RelationType
  }

  export type RelationCountOrderByAggregateInput = {
    sourceUserId?: SortOrder
    targetUserId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelationMaxOrderByAggregateInput = {
    sourceUserId?: SortOrder
    targetUserId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RelationMinOrderByAggregateInput = {
    sourceUserId?: SortOrder
    targetUserId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRelationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationType | EnumRelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationTypeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subEmailsUserId?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subEmailsUserId?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subEmailsUserId?: SortOrder
  }

  export type PhoneCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subPhonesUserId?: SortOrder
  }

  export type PhoneMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subPhonesUserId?: SortOrder
  }

  export type PhoneMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    scope?: SortOrder
    subPhonesUserId?: SortOrder
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type SocialLinkedsCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
  }

  export type SocialLinkedsMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
  }

  export type SocialLinkedsMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    userId?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumResourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResourceType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostCreatemediasInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type ReactionCreateNestedManyWithoutPostInput = {
    create?: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput> | ReactionCreateWithoutPostInput[] | ReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput | ReactionCreateOrConnectWithoutPostInput[]
    createMany?: ReactionCreateManyPostInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput> | ReactionCreateWithoutPostInput[] | ReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput | ReactionCreateOrConnectWithoutPostInput[]
    createMany?: ReactionCreateManyPostInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EnumScopeFieldUpdateOperationsInput = {
    set?: $Enums.Scope
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type PostUpdatemediasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ReactionUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput> | ReactionCreateWithoutPostInput[] | ReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput | ReactionCreateOrConnectWithoutPostInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutPostInput | ReactionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReactionCreateManyPostInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutPostInput | ReactionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutPostInput | ReactionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput> | ReactionCreateWithoutPostInput[] | ReactionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput | ReactionCreateOrConnectWithoutPostInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutPostInput | ReactionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ReactionCreateManyPostInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutPostInput | ReactionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutPostInput | ReactionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentCreateupdateHistoriesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutCommentInput = {
    create?: XOR<ReactionCreateWithoutCommentInput, ReactionUncheckedCreateWithoutCommentInput> | ReactionCreateWithoutCommentInput[] | ReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutCommentInput | ReactionCreateOrConnectWithoutCommentInput[]
    createMany?: ReactionCreateManyCommentInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<ReactionCreateWithoutCommentInput, ReactionUncheckedCreateWithoutCommentInput> | ReactionCreateWithoutCommentInput[] | ReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutCommentInput | ReactionCreateOrConnectWithoutCommentInput[]
    createMany?: ReactionCreateManyCommentInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CommentUpdateupdateHistoriesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumCommentStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommentStatus
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutCommentNestedInput = {
    create?: XOR<ReactionCreateWithoutCommentInput, ReactionUncheckedCreateWithoutCommentInput> | ReactionCreateWithoutCommentInput[] | ReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutCommentInput | ReactionCreateOrConnectWithoutCommentInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutCommentInput | ReactionUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: ReactionCreateManyCommentInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutCommentInput | ReactionUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutCommentInput | ReactionUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<ReactionCreateWithoutCommentInput, ReactionUncheckedCreateWithoutCommentInput> | ReactionCreateWithoutCommentInput[] | ReactionUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutCommentInput | ReactionCreateOrConnectWithoutCommentInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutCommentInput | ReactionUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: ReactionCreateManyCommentInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutCommentInput | ReactionUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutCommentInput | ReactionUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedOneWithoutReactionsInput = {
    create?: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutReationsInput = {
    create?: XOR<CommentCreateWithoutReationsInput, CommentUncheckedCreateWithoutReationsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutReationsInput
    connect?: CommentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type PostUpdateOneWithoutReactionsNestedInput = {
    create?: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutReactionsInput
    upsert?: PostUpsertWithoutReactionsInput
    disconnect?: PostWhereInput | boolean
    delete?: PostWhereInput | boolean
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutReactionsInput, PostUpdateWithoutReactionsInput>, PostUncheckedUpdateWithoutReactionsInput>
  }

  export type CommentUpdateOneWithoutReationsNestedInput = {
    create?: XOR<CommentCreateWithoutReationsInput, CommentUncheckedCreateWithoutReationsInput>
    connectOrCreate?: CommentCreateOrConnectWithoutReationsInput
    upsert?: CommentUpsertWithoutReationsInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutReationsInput, CommentUpdateWithoutReationsInput>, CommentUncheckedUpdateWithoutReationsInput>
  }

  export type UserCreateflagsInput = {
    set: $Enums.UserFlag[]
  }

  export type UserCreatewebsitesInput = {
    set: string[]
  }

  export type EmailCreateNestedOneWithoutPrimaryEmailUserInput = {
    create?: XOR<EmailCreateWithoutPrimaryEmailUserInput, EmailUncheckedCreateWithoutPrimaryEmailUserInput>
    connectOrCreate?: EmailCreateOrConnectWithoutPrimaryEmailUserInput
    connect?: EmailWhereUniqueInput
  }

  export type EmailCreateNestedManyWithoutSubEmailsUserInput = {
    create?: XOR<EmailCreateWithoutSubEmailsUserInput, EmailUncheckedCreateWithoutSubEmailsUserInput> | EmailCreateWithoutSubEmailsUserInput[] | EmailUncheckedCreateWithoutSubEmailsUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutSubEmailsUserInput | EmailCreateOrConnectWithoutSubEmailsUserInput[]
    createMany?: EmailCreateManySubEmailsUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type PhoneCreateNestedOneWithoutPrimaryPhoneUserInput = {
    create?: XOR<PhoneCreateWithoutPrimaryPhoneUserInput, PhoneUncheckedCreateWithoutPrimaryPhoneUserInput>
    connectOrCreate?: PhoneCreateOrConnectWithoutPrimaryPhoneUserInput
    connect?: PhoneWhereUniqueInput
  }

  export type PhoneCreateNestedManyWithoutSubPhonesUserInput = {
    create?: XOR<PhoneCreateWithoutSubPhonesUserInput, PhoneUncheckedCreateWithoutSubPhonesUserInput> | PhoneCreateWithoutSubPhonesUserInput[] | PhoneUncheckedCreateWithoutSubPhonesUserInput[]
    connectOrCreate?: PhoneCreateOrConnectWithoutSubPhonesUserInput | PhoneCreateOrConnectWithoutSubPhonesUserInput[]
    createMany?: PhoneCreateManySubPhonesUserInputEnvelope
    connect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
  }

  export type SocialLinkedsCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialLinkedsCreateWithoutUserInput, SocialLinkedsUncheckedCreateWithoutUserInput> | SocialLinkedsCreateWithoutUserInput[] | SocialLinkedsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialLinkedsCreateOrConnectWithoutUserInput | SocialLinkedsCreateOrConnectWithoutUserInput[]
    createMany?: SocialLinkedsCreateManyUserInputEnvelope
    connect?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
  }

  export type RelationCreateNestedManyWithoutSourceUserInput = {
    create?: XOR<RelationCreateWithoutSourceUserInput, RelationUncheckedCreateWithoutSourceUserInput> | RelationCreateWithoutSourceUserInput[] | RelationUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutSourceUserInput | RelationCreateOrConnectWithoutSourceUserInput[]
    createMany?: RelationCreateManySourceUserInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type RelationCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<RelationCreateWithoutTargetUserInput, RelationUncheckedCreateWithoutTargetUserInput> | RelationCreateWithoutTargetUserInput[] | RelationUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutTargetUserInput | RelationCreateOrConnectWithoutTargetUserInput[]
    createMany?: RelationCreateManyTargetUserInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput> | ReactionCreateWithoutAuthorInput[] | ReactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput | ReactionCreateOrConnectWithoutAuthorInput[]
    createMany?: ReactionCreateManyAuthorInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput = {
    create?: XOR<EmailCreateWithoutSubEmailsUserInput, EmailUncheckedCreateWithoutSubEmailsUserInput> | EmailCreateWithoutSubEmailsUserInput[] | EmailUncheckedCreateWithoutSubEmailsUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutSubEmailsUserInput | EmailCreateOrConnectWithoutSubEmailsUserInput[]
    createMany?: EmailCreateManySubEmailsUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput = {
    create?: XOR<PhoneCreateWithoutSubPhonesUserInput, PhoneUncheckedCreateWithoutSubPhonesUserInput> | PhoneCreateWithoutSubPhonesUserInput[] | PhoneUncheckedCreateWithoutSubPhonesUserInput[]
    connectOrCreate?: PhoneCreateOrConnectWithoutSubPhonesUserInput | PhoneCreateOrConnectWithoutSubPhonesUserInput[]
    createMany?: PhoneCreateManySubPhonesUserInputEnvelope
    connect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
  }

  export type SocialLinkedsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialLinkedsCreateWithoutUserInput, SocialLinkedsUncheckedCreateWithoutUserInput> | SocialLinkedsCreateWithoutUserInput[] | SocialLinkedsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialLinkedsCreateOrConnectWithoutUserInput | SocialLinkedsCreateOrConnectWithoutUserInput[]
    createMany?: SocialLinkedsCreateManyUserInputEnvelope
    connect?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
  }

  export type RelationUncheckedCreateNestedManyWithoutSourceUserInput = {
    create?: XOR<RelationCreateWithoutSourceUserInput, RelationUncheckedCreateWithoutSourceUserInput> | RelationCreateWithoutSourceUserInput[] | RelationUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutSourceUserInput | RelationCreateOrConnectWithoutSourceUserInput[]
    createMany?: RelationCreateManySourceUserInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type RelationUncheckedCreateNestedManyWithoutTargetUserInput = {
    create?: XOR<RelationCreateWithoutTargetUserInput, RelationUncheckedCreateWithoutTargetUserInput> | RelationCreateWithoutTargetUserInput[] | RelationUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutTargetUserInput | RelationCreateOrConnectWithoutTargetUserInput[]
    createMany?: RelationCreateManyTargetUserInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutAddresseeInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput> | ReactionCreateWithoutAuthorInput[] | ReactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput | ReactionCreateOrConnectWithoutAuthorInput[]
    createMany?: ReactionCreateManyAuthorInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type UserUpdateflagsInput = {
    set?: $Enums.UserFlag[]
    push?: $Enums.UserFlag | $Enums.UserFlag[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdatewebsitesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput = {
    create?: XOR<EmailCreateWithoutPrimaryEmailUserInput, EmailUncheckedCreateWithoutPrimaryEmailUserInput>
    connectOrCreate?: EmailCreateOrConnectWithoutPrimaryEmailUserInput
    upsert?: EmailUpsertWithoutPrimaryEmailUserInput
    connect?: EmailWhereUniqueInput
    update?: XOR<XOR<EmailUpdateToOneWithWhereWithoutPrimaryEmailUserInput, EmailUpdateWithoutPrimaryEmailUserInput>, EmailUncheckedUpdateWithoutPrimaryEmailUserInput>
  }

  export type EmailUpdateManyWithoutSubEmailsUserNestedInput = {
    create?: XOR<EmailCreateWithoutSubEmailsUserInput, EmailUncheckedCreateWithoutSubEmailsUserInput> | EmailCreateWithoutSubEmailsUserInput[] | EmailUncheckedCreateWithoutSubEmailsUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutSubEmailsUserInput | EmailCreateOrConnectWithoutSubEmailsUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutSubEmailsUserInput | EmailUpsertWithWhereUniqueWithoutSubEmailsUserInput[]
    createMany?: EmailCreateManySubEmailsUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutSubEmailsUserInput | EmailUpdateWithWhereUniqueWithoutSubEmailsUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutSubEmailsUserInput | EmailUpdateManyWithWhereWithoutSubEmailsUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput = {
    create?: XOR<PhoneCreateWithoutPrimaryPhoneUserInput, PhoneUncheckedCreateWithoutPrimaryPhoneUserInput>
    connectOrCreate?: PhoneCreateOrConnectWithoutPrimaryPhoneUserInput
    upsert?: PhoneUpsertWithoutPrimaryPhoneUserInput
    disconnect?: PhoneWhereInput | boolean
    delete?: PhoneWhereInput | boolean
    connect?: PhoneWhereUniqueInput
    update?: XOR<XOR<PhoneUpdateToOneWithWhereWithoutPrimaryPhoneUserInput, PhoneUpdateWithoutPrimaryPhoneUserInput>, PhoneUncheckedUpdateWithoutPrimaryPhoneUserInput>
  }

  export type PhoneUpdateManyWithoutSubPhonesUserNestedInput = {
    create?: XOR<PhoneCreateWithoutSubPhonesUserInput, PhoneUncheckedCreateWithoutSubPhonesUserInput> | PhoneCreateWithoutSubPhonesUserInput[] | PhoneUncheckedCreateWithoutSubPhonesUserInput[]
    connectOrCreate?: PhoneCreateOrConnectWithoutSubPhonesUserInput | PhoneCreateOrConnectWithoutSubPhonesUserInput[]
    upsert?: PhoneUpsertWithWhereUniqueWithoutSubPhonesUserInput | PhoneUpsertWithWhereUniqueWithoutSubPhonesUserInput[]
    createMany?: PhoneCreateManySubPhonesUserInputEnvelope
    set?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    disconnect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    delete?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    connect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    update?: PhoneUpdateWithWhereUniqueWithoutSubPhonesUserInput | PhoneUpdateWithWhereUniqueWithoutSubPhonesUserInput[]
    updateMany?: PhoneUpdateManyWithWhereWithoutSubPhonesUserInput | PhoneUpdateManyWithWhereWithoutSubPhonesUserInput[]
    deleteMany?: PhoneScalarWhereInput | PhoneScalarWhereInput[]
  }

  export type SocialLinkedsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialLinkedsCreateWithoutUserInput, SocialLinkedsUncheckedCreateWithoutUserInput> | SocialLinkedsCreateWithoutUserInput[] | SocialLinkedsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialLinkedsCreateOrConnectWithoutUserInput | SocialLinkedsCreateOrConnectWithoutUserInput[]
    upsert?: SocialLinkedsUpsertWithWhereUniqueWithoutUserInput | SocialLinkedsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialLinkedsCreateManyUserInputEnvelope
    set?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
    disconnect?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
    delete?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
    connect?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
    update?: SocialLinkedsUpdateWithWhereUniqueWithoutUserInput | SocialLinkedsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialLinkedsUpdateManyWithWhereWithoutUserInput | SocialLinkedsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialLinkedsScalarWhereInput | SocialLinkedsScalarWhereInput[]
  }

  export type RelationUpdateManyWithoutSourceUserNestedInput = {
    create?: XOR<RelationCreateWithoutSourceUserInput, RelationUncheckedCreateWithoutSourceUserInput> | RelationCreateWithoutSourceUserInput[] | RelationUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutSourceUserInput | RelationCreateOrConnectWithoutSourceUserInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutSourceUserInput | RelationUpsertWithWhereUniqueWithoutSourceUserInput[]
    createMany?: RelationCreateManySourceUserInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutSourceUserInput | RelationUpdateWithWhereUniqueWithoutSourceUserInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutSourceUserInput | RelationUpdateManyWithWhereWithoutSourceUserInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type RelationUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<RelationCreateWithoutTargetUserInput, RelationUncheckedCreateWithoutTargetUserInput> | RelationCreateWithoutTargetUserInput[] | RelationUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutTargetUserInput | RelationCreateOrConnectWithoutTargetUserInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutTargetUserInput | RelationUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: RelationCreateManyTargetUserInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutTargetUserInput | RelationUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutTargetUserInput | RelationUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutRequesterInput | FriendshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutRequesterInput | FriendshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutRequesterInput | FriendshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutAddresseeInput | FriendshipUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutAddresseeInput | FriendshipUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutAddresseeInput | FriendshipUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput> | ReactionCreateWithoutAuthorInput[] | ReactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput | ReactionCreateOrConnectWithoutAuthorInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutAuthorInput | ReactionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReactionCreateManyAuthorInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutAuthorInput | ReactionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutAuthorInput | ReactionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput = {
    create?: XOR<EmailCreateWithoutSubEmailsUserInput, EmailUncheckedCreateWithoutSubEmailsUserInput> | EmailCreateWithoutSubEmailsUserInput[] | EmailUncheckedCreateWithoutSubEmailsUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutSubEmailsUserInput | EmailCreateOrConnectWithoutSubEmailsUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutSubEmailsUserInput | EmailUpsertWithWhereUniqueWithoutSubEmailsUserInput[]
    createMany?: EmailCreateManySubEmailsUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutSubEmailsUserInput | EmailUpdateWithWhereUniqueWithoutSubEmailsUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutSubEmailsUserInput | EmailUpdateManyWithWhereWithoutSubEmailsUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput = {
    create?: XOR<PhoneCreateWithoutSubPhonesUserInput, PhoneUncheckedCreateWithoutSubPhonesUserInput> | PhoneCreateWithoutSubPhonesUserInput[] | PhoneUncheckedCreateWithoutSubPhonesUserInput[]
    connectOrCreate?: PhoneCreateOrConnectWithoutSubPhonesUserInput | PhoneCreateOrConnectWithoutSubPhonesUserInput[]
    upsert?: PhoneUpsertWithWhereUniqueWithoutSubPhonesUserInput | PhoneUpsertWithWhereUniqueWithoutSubPhonesUserInput[]
    createMany?: PhoneCreateManySubPhonesUserInputEnvelope
    set?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    disconnect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    delete?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    connect?: PhoneWhereUniqueInput | PhoneWhereUniqueInput[]
    update?: PhoneUpdateWithWhereUniqueWithoutSubPhonesUserInput | PhoneUpdateWithWhereUniqueWithoutSubPhonesUserInput[]
    updateMany?: PhoneUpdateManyWithWhereWithoutSubPhonesUserInput | PhoneUpdateManyWithWhereWithoutSubPhonesUserInput[]
    deleteMany?: PhoneScalarWhereInput | PhoneScalarWhereInput[]
  }

  export type SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialLinkedsCreateWithoutUserInput, SocialLinkedsUncheckedCreateWithoutUserInput> | SocialLinkedsCreateWithoutUserInput[] | SocialLinkedsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialLinkedsCreateOrConnectWithoutUserInput | SocialLinkedsCreateOrConnectWithoutUserInput[]
    upsert?: SocialLinkedsUpsertWithWhereUniqueWithoutUserInput | SocialLinkedsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialLinkedsCreateManyUserInputEnvelope
    set?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
    disconnect?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
    delete?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
    connect?: SocialLinkedsWhereUniqueInput | SocialLinkedsWhereUniqueInput[]
    update?: SocialLinkedsUpdateWithWhereUniqueWithoutUserInput | SocialLinkedsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialLinkedsUpdateManyWithWhereWithoutUserInput | SocialLinkedsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialLinkedsScalarWhereInput | SocialLinkedsScalarWhereInput[]
  }

  export type RelationUncheckedUpdateManyWithoutSourceUserNestedInput = {
    create?: XOR<RelationCreateWithoutSourceUserInput, RelationUncheckedCreateWithoutSourceUserInput> | RelationCreateWithoutSourceUserInput[] | RelationUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutSourceUserInput | RelationCreateOrConnectWithoutSourceUserInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutSourceUserInput | RelationUpsertWithWhereUniqueWithoutSourceUserInput[]
    createMany?: RelationCreateManySourceUserInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutSourceUserInput | RelationUpdateWithWhereUniqueWithoutSourceUserInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutSourceUserInput | RelationUpdateManyWithWhereWithoutSourceUserInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type RelationUncheckedUpdateManyWithoutTargetUserNestedInput = {
    create?: XOR<RelationCreateWithoutTargetUserInput, RelationUncheckedCreateWithoutTargetUserInput> | RelationCreateWithoutTargetUserInput[] | RelationUncheckedCreateWithoutTargetUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutTargetUserInput | RelationCreateOrConnectWithoutTargetUserInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutTargetUserInput | RelationUpsertWithWhereUniqueWithoutTargetUserInput[]
    createMany?: RelationCreateManyTargetUserInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutTargetUserInput | RelationUpdateWithWhereUniqueWithoutTargetUserInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutTargetUserInput | RelationUpdateManyWithWhereWithoutTargetUserInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput> | FriendshipCreateWithoutRequesterInput[] | FriendshipUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutRequesterInput | FriendshipCreateOrConnectWithoutRequesterInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutRequesterInput | FriendshipUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: FriendshipCreateManyRequesterInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutRequesterInput | FriendshipUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutRequesterInput | FriendshipUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput = {
    create?: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput> | FriendshipCreateWithoutAddresseeInput[] | FriendshipUncheckedCreateWithoutAddresseeInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutAddresseeInput | FriendshipCreateOrConnectWithoutAddresseeInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutAddresseeInput | FriendshipUpsertWithWhereUniqueWithoutAddresseeInput[]
    createMany?: FriendshipCreateManyAddresseeInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutAddresseeInput | FriendshipUpdateWithWhereUniqueWithoutAddresseeInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutAddresseeInput | FriendshipUpdateManyWithWhereWithoutAddresseeInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput> | ReactionCreateWithoutAuthorInput[] | ReactionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput | ReactionCreateOrConnectWithoutAuthorInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutAuthorInput | ReactionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReactionCreateManyAuthorInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutAuthorInput | ReactionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutAuthorInput | ReactionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentFriendRequestsInput = {
    create?: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedFriendRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendRequestsInput
    upsert?: UserUpsertWithoutSentFriendRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentFriendRequestsInput, UserUpdateWithoutSentFriendRequestsInput>, UserUncheckedUpdateWithoutSentFriendRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput
    upsert?: UserUpsertWithoutReceivedFriendRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput, UserUpdateWithoutReceivedFriendRequestsInput>, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
  }

  export type UserCreateNestedOneWithoutSentRelationsInput = {
    create?: XOR<UserCreateWithoutSentRelationsInput, UserUncheckedCreateWithoutSentRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedRelationsInput = {
    create?: XOR<UserCreateWithoutReceivedRelationsInput, UserUncheckedCreateWithoutReceivedRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRelationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRelationTypeFieldUpdateOperationsInput = {
    set?: $Enums.RelationType
  }

  export type UserUpdateOneRequiredWithoutSentRelationsNestedInput = {
    create?: XOR<UserCreateWithoutSentRelationsInput, UserUncheckedCreateWithoutSentRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentRelationsInput
    upsert?: UserUpsertWithoutSentRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentRelationsInput, UserUpdateWithoutSentRelationsInput>, UserUncheckedUpdateWithoutSentRelationsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedRelationsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedRelationsInput, UserUncheckedCreateWithoutReceivedRelationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedRelationsInput
    upsert?: UserUpsertWithoutReceivedRelationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedRelationsInput, UserUpdateWithoutReceivedRelationsInput>, UserUncheckedUpdateWithoutReceivedRelationsInput>
  }

  export type UserCreateNestedOneWithoutPrimaryEmailInput = {
    create?: XOR<UserCreateWithoutPrimaryEmailInput, UserUncheckedCreateWithoutPrimaryEmailInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrimaryEmailInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubEmailsInput = {
    create?: XOR<UserCreateWithoutSubEmailsInput, UserUncheckedCreateWithoutSubEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubEmailsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutPrimaryEmailInput = {
    create?: XOR<UserCreateWithoutPrimaryEmailInput, UserUncheckedCreateWithoutPrimaryEmailInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrimaryEmailInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutPrimaryEmailNestedInput = {
    create?: XOR<UserCreateWithoutPrimaryEmailInput, UserUncheckedCreateWithoutPrimaryEmailInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrimaryEmailInput
    upsert?: UserUpsertWithoutPrimaryEmailInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrimaryEmailInput, UserUpdateWithoutPrimaryEmailInput>, UserUncheckedUpdateWithoutPrimaryEmailInput>
  }

  export type UserUpdateOneWithoutSubEmailsNestedInput = {
    create?: XOR<UserCreateWithoutSubEmailsInput, UserUncheckedCreateWithoutSubEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubEmailsInput
    upsert?: UserUpsertWithoutSubEmailsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubEmailsInput, UserUpdateWithoutSubEmailsInput>, UserUncheckedUpdateWithoutSubEmailsInput>
  }

  export type UserUncheckedUpdateOneWithoutPrimaryEmailNestedInput = {
    create?: XOR<UserCreateWithoutPrimaryEmailInput, UserUncheckedCreateWithoutPrimaryEmailInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrimaryEmailInput
    upsert?: UserUpsertWithoutPrimaryEmailInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrimaryEmailInput, UserUpdateWithoutPrimaryEmailInput>, UserUncheckedUpdateWithoutPrimaryEmailInput>
  }

  export type UserCreateNestedOneWithoutPrimaryPhoneInput = {
    create?: XOR<UserCreateWithoutPrimaryPhoneInput, UserUncheckedCreateWithoutPrimaryPhoneInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrimaryPhoneInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubPhonesInput = {
    create?: XOR<UserCreateWithoutSubPhonesInput, UserUncheckedCreateWithoutSubPhonesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubPhonesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutPrimaryPhoneInput = {
    create?: XOR<UserCreateWithoutPrimaryPhoneInput, UserUncheckedCreateWithoutPrimaryPhoneInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrimaryPhoneInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutPrimaryPhoneNestedInput = {
    create?: XOR<UserCreateWithoutPrimaryPhoneInput, UserUncheckedCreateWithoutPrimaryPhoneInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrimaryPhoneInput
    upsert?: UserUpsertWithoutPrimaryPhoneInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrimaryPhoneInput, UserUpdateWithoutPrimaryPhoneInput>, UserUncheckedUpdateWithoutPrimaryPhoneInput>
  }

  export type UserUpdateOneWithoutSubPhonesNestedInput = {
    create?: XOR<UserCreateWithoutSubPhonesInput, UserUncheckedCreateWithoutSubPhonesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubPhonesInput
    upsert?: UserUpsertWithoutSubPhonesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubPhonesInput, UserUpdateWithoutSubPhonesInput>, UserUncheckedUpdateWithoutSubPhonesInput>
  }

  export type UserUncheckedUpdateOneWithoutPrimaryPhoneNestedInput = {
    create?: XOR<UserCreateWithoutPrimaryPhoneInput, UserUncheckedCreateWithoutPrimaryPhoneInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrimaryPhoneInput
    upsert?: UserUpsertWithoutPrimaryPhoneInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrimaryPhoneInput, UserUpdateWithoutPrimaryPhoneInput>, UserUncheckedUpdateWithoutPrimaryPhoneInput>
  }

  export type UserCreateNestedOneWithoutSocialLinkedsInput = {
    create?: XOR<UserCreateWithoutSocialLinkedsInput, UserUncheckedCreateWithoutSocialLinkedsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialLinkedsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type UserUpdateOneRequiredWithoutSocialLinkedsNestedInput = {
    create?: XOR<UserCreateWithoutSocialLinkedsInput, UserUncheckedCreateWithoutSocialLinkedsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSocialLinkedsInput
    upsert?: UserUpsertWithoutSocialLinkedsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSocialLinkedsInput, UserUpdateWithoutSocialLinkedsInput>, UserUncheckedUpdateWithoutSocialLinkedsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeFilter<$PrismaModel> | $Enums.Scope
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Scope | EnumScopeFieldRefInput<$PrismaModel>
    in?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Scope[] | ListEnumScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumScopeWithAggregatesFilter<$PrismaModel> | $Enums.Scope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScopeFilter<$PrismaModel>
    _max?: NestedEnumScopeFilter<$PrismaModel>
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostStatus[] | ListEnumPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCommentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusFilter<$PrismaModel> | $Enums.CommentStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentStatus[] | ListEnumCommentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentStatusFilter<$PrismaModel>
    _max?: NestedEnumCommentStatusFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumRelationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationType | EnumRelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationTypeFilter<$PrismaModel> | $Enums.RelationType
  }

  export type NestedEnumRelationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RelationType | EnumRelationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RelationType[] | ListEnumRelationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRelationTypeWithAggregatesFilter<$PrismaModel> | $Enums.RelationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationTypeFilter<$PrismaModel>
    _max?: NestedEnumRelationTypeFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type ReactionCreateWithoutPostInput = {
    id?: string
    author: UserCreateNestedOneWithoutReactionsInput
    comment?: CommentCreateNestedOneWithoutReationsInput
  }

  export type ReactionUncheckedCreateWithoutPostInput = {
    id?: string
    authorId: string
    commentId?: string | null
  }

  export type ReactionCreateOrConnectWithoutPostInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput>
  }

  export type ReactionCreateManyPostInputEnvelope = {
    data: ReactionCreateManyPostInput | ReactionCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    author: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    reations?: ReactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    reations?: ReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ReactionUpsertWithWhereUniqueWithoutPostInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutPostInput, ReactionUncheckedUpdateWithoutPostInput>
    create: XOR<ReactionCreateWithoutPostInput, ReactionUncheckedCreateWithoutPostInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutPostInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutPostInput, ReactionUncheckedUpdateWithoutPostInput>
  }

  export type ReactionUpdateManyWithWhereWithoutPostInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutPostInput>
  }

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    OR?: ReactionScalarWhereInput[]
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    id?: StringFilter<"Reaction"> | string
    authorId?: UuidFilter<"Reaction"> | string
    postId?: StringNullableFilter<"Reaction"> | string | null
    commentId?: StringNullableFilter<"Reaction"> | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    authorId?: UuidFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updateAt?: DateTimeFilter<"Comment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    updateHistories?: StringNullableListFilter<"Comment">
    status?: EnumCommentStatusFilter<"Comment"> | $Enums.CommentStatus
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
    author: UserCreateNestedOneWithoutPostsInput
    reactions?: ReactionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    authorId: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    author: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    reations?: ReactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    authorId: string
    postId: string
    parentId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    reations?: ReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    author: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
    reations?: ReactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    authorId: string
    postId: string
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    reations?: ReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutCommentInput = {
    id?: string
    author: UserCreateNestedOneWithoutReactionsInput
    post?: PostCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutCommentInput = {
    id?: string
    authorId: string
    postId?: string | null
  }

  export type ReactionCreateOrConnectWithoutCommentInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutCommentInput, ReactionUncheckedCreateWithoutCommentInput>
  }

  export type ReactionCreateManyCommentInputEnvelope = {
    data: ReactionCreateManyCommentInput | ReactionCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    reactions?: ReactionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    reations?: ReactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    reations?: ReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type ReactionUpsertWithWhereUniqueWithoutCommentInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutCommentInput, ReactionUncheckedUpdateWithoutCommentInput>
    create: XOR<ReactionCreateWithoutCommentInput, ReactionUncheckedCreateWithoutCommentInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutCommentInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutCommentInput, ReactionUncheckedUpdateWithoutCommentInput>
  }

  export type ReactionUpdateManyWithWhereWithoutCommentInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutCommentInput>
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type PostCreateWithoutReactionsInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
    author: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutReactionsInput = {
    id?: string
    authorId: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutReactionsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
  }

  export type CommentCreateWithoutReationsInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    author: UserCreateNestedOneWithoutCommentsInput
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutReationsInput = {
    id?: string
    authorId: string
    postId: string
    parentId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutReationsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutReationsInput, CommentUncheckedCreateWithoutReationsInput>
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type PostUpsertWithoutReactionsInput = {
    update: XOR<PostUpdateWithoutReactionsInput, PostUncheckedUpdateWithoutReactionsInput>
    create: XOR<PostCreateWithoutReactionsInput, PostUncheckedCreateWithoutReactionsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutReactionsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutReactionsInput, PostUncheckedUpdateWithoutReactionsInput>
  }

  export type PostUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutReationsInput = {
    update: XOR<CommentUpdateWithoutReationsInput, CommentUncheckedUpdateWithoutReationsInput>
    create: XOR<CommentCreateWithoutReationsInput, CommentUncheckedCreateWithoutReationsInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutReationsInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutReationsInput, CommentUncheckedUpdateWithoutReationsInput>
  }

  export type CommentUpdateWithoutReationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutReationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type EmailCreateWithoutPrimaryEmailUserInput = {
    id?: string
    value: string
    scope?: $Enums.Scope
    subEmailsUser?: UserCreateNestedOneWithoutSubEmailsInput
  }

  export type EmailUncheckedCreateWithoutPrimaryEmailUserInput = {
    id?: string
    value: string
    scope?: $Enums.Scope
    subEmailsUserId?: string | null
  }

  export type EmailCreateOrConnectWithoutPrimaryEmailUserInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutPrimaryEmailUserInput, EmailUncheckedCreateWithoutPrimaryEmailUserInput>
  }

  export type EmailCreateWithoutSubEmailsUserInput = {
    id?: string
    value: string
    scope?: $Enums.Scope
    primaryEmailUser?: UserCreateNestedOneWithoutPrimaryEmailInput
  }

  export type EmailUncheckedCreateWithoutSubEmailsUserInput = {
    id?: string
    value: string
    scope?: $Enums.Scope
    primaryEmailUser?: UserUncheckedCreateNestedOneWithoutPrimaryEmailInput
  }

  export type EmailCreateOrConnectWithoutSubEmailsUserInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutSubEmailsUserInput, EmailUncheckedCreateWithoutSubEmailsUserInput>
  }

  export type EmailCreateManySubEmailsUserInputEnvelope = {
    data: EmailCreateManySubEmailsUserInput | EmailCreateManySubEmailsUserInput[]
    skipDuplicates?: boolean
  }

  export type PhoneCreateWithoutPrimaryPhoneUserInput = {
    id?: string
    value: string
    scope: $Enums.Scope
    subPhonesUser?: UserCreateNestedOneWithoutSubPhonesInput
  }

  export type PhoneUncheckedCreateWithoutPrimaryPhoneUserInput = {
    id?: string
    value: string
    scope: $Enums.Scope
    subPhonesUserId?: string | null
  }

  export type PhoneCreateOrConnectWithoutPrimaryPhoneUserInput = {
    where: PhoneWhereUniqueInput
    create: XOR<PhoneCreateWithoutPrimaryPhoneUserInput, PhoneUncheckedCreateWithoutPrimaryPhoneUserInput>
  }

  export type PhoneCreateWithoutSubPhonesUserInput = {
    id?: string
    value: string
    scope: $Enums.Scope
    primaryPhoneUser?: UserCreateNestedOneWithoutPrimaryPhoneInput
  }

  export type PhoneUncheckedCreateWithoutSubPhonesUserInput = {
    id?: string
    value: string
    scope: $Enums.Scope
    primaryPhoneUser?: UserUncheckedCreateNestedOneWithoutPrimaryPhoneInput
  }

  export type PhoneCreateOrConnectWithoutSubPhonesUserInput = {
    where: PhoneWhereUniqueInput
    create: XOR<PhoneCreateWithoutSubPhonesUserInput, PhoneUncheckedCreateWithoutSubPhonesUserInput>
  }

  export type PhoneCreateManySubPhonesUserInputEnvelope = {
    data: PhoneCreateManySubPhonesUserInput | PhoneCreateManySubPhonesUserInput[]
    skipDuplicates?: boolean
  }

  export type SocialLinkedsCreateWithoutUserInput = {
    id?: string
    platform: $Enums.Platform
  }

  export type SocialLinkedsUncheckedCreateWithoutUserInput = {
    id?: string
    platform: $Enums.Platform
  }

  export type SocialLinkedsCreateOrConnectWithoutUserInput = {
    where: SocialLinkedsWhereUniqueInput
    create: XOR<SocialLinkedsCreateWithoutUserInput, SocialLinkedsUncheckedCreateWithoutUserInput>
  }

  export type SocialLinkedsCreateManyUserInputEnvelope = {
    data: SocialLinkedsCreateManyUserInput | SocialLinkedsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RelationCreateWithoutSourceUserInput = {
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt?: Date | string
    updatedAt?: Date | string
    targetUser: UserCreateNestedOneWithoutReceivedRelationsInput
  }

  export type RelationUncheckedCreateWithoutSourceUserInput = {
    targetUserId: string
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationCreateOrConnectWithoutSourceUserInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutSourceUserInput, RelationUncheckedCreateWithoutSourceUserInput>
  }

  export type RelationCreateManySourceUserInputEnvelope = {
    data: RelationCreateManySourceUserInput | RelationCreateManySourceUserInput[]
    skipDuplicates?: boolean
  }

  export type RelationCreateWithoutTargetUserInput = {
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceUser: UserCreateNestedOneWithoutSentRelationsInput
  }

  export type RelationUncheckedCreateWithoutTargetUserInput = {
    sourceUserId: string
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationCreateOrConnectWithoutTargetUserInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutTargetUserInput, RelationUncheckedCreateWithoutTargetUserInput>
  }

  export type RelationCreateManyTargetUserInputEnvelope = {
    data: RelationCreateManyTargetUserInput | RelationCreateManyTargetUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutRequesterInput = {
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    addressee: UserCreateNestedOneWithoutReceivedFriendRequestsInput
  }

  export type FriendshipUncheckedCreateWithoutRequesterInput = {
    addresseeId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipCreateManyRequesterInputEnvelope = {
    data: FriendshipCreateManyRequesterInput | FriendshipCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutAddresseeInput = {
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutSentFriendRequestsInput
  }

  export type FriendshipUncheckedCreateWithoutAddresseeInput = {
    requesterId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutAddresseeInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput>
  }

  export type FriendshipCreateManyAddresseeInputEnvelope = {
    data: FriendshipCreateManyAddresseeInput | FriendshipCreateManyAddresseeInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
    reactions?: ReactionCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
    reactions?: ReactionUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
    reations?: ReactionCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    postId: string
    parentId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
    reations?: ReactionUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutAuthorInput = {
    id?: string
    post?: PostCreateNestedOneWithoutReactionsInput
    comment?: CommentCreateNestedOneWithoutReationsInput
  }

  export type ReactionUncheckedCreateWithoutAuthorInput = {
    id?: string
    postId?: string | null
    commentId?: string | null
  }

  export type ReactionCreateOrConnectWithoutAuthorInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput>
  }

  export type ReactionCreateManyAuthorInputEnvelope = {
    data: ReactionCreateManyAuthorInput | ReactionCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type EmailUpsertWithoutPrimaryEmailUserInput = {
    update: XOR<EmailUpdateWithoutPrimaryEmailUserInput, EmailUncheckedUpdateWithoutPrimaryEmailUserInput>
    create: XOR<EmailCreateWithoutPrimaryEmailUserInput, EmailUncheckedCreateWithoutPrimaryEmailUserInput>
    where?: EmailWhereInput
  }

  export type EmailUpdateToOneWithWhereWithoutPrimaryEmailUserInput = {
    where?: EmailWhereInput
    data: XOR<EmailUpdateWithoutPrimaryEmailUserInput, EmailUncheckedUpdateWithoutPrimaryEmailUserInput>
  }

  export type EmailUpdateWithoutPrimaryEmailUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    subEmailsUser?: UserUpdateOneWithoutSubEmailsNestedInput
  }

  export type EmailUncheckedUpdateWithoutPrimaryEmailUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    subEmailsUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailUpsertWithWhereUniqueWithoutSubEmailsUserInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutSubEmailsUserInput, EmailUncheckedUpdateWithoutSubEmailsUserInput>
    create: XOR<EmailCreateWithoutSubEmailsUserInput, EmailUncheckedCreateWithoutSubEmailsUserInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutSubEmailsUserInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutSubEmailsUserInput, EmailUncheckedUpdateWithoutSubEmailsUserInput>
  }

  export type EmailUpdateManyWithWhereWithoutSubEmailsUserInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutSubEmailsUserInput>
  }

  export type EmailScalarWhereInput = {
    AND?: EmailScalarWhereInput | EmailScalarWhereInput[]
    OR?: EmailScalarWhereInput[]
    NOT?: EmailScalarWhereInput | EmailScalarWhereInput[]
    id?: UuidFilter<"Email"> | string
    value?: StringFilter<"Email"> | string
    scope?: EnumScopeFilter<"Email"> | $Enums.Scope
    subEmailsUserId?: UuidNullableFilter<"Email"> | string | null
  }

  export type PhoneUpsertWithoutPrimaryPhoneUserInput = {
    update: XOR<PhoneUpdateWithoutPrimaryPhoneUserInput, PhoneUncheckedUpdateWithoutPrimaryPhoneUserInput>
    create: XOR<PhoneCreateWithoutPrimaryPhoneUserInput, PhoneUncheckedCreateWithoutPrimaryPhoneUserInput>
    where?: PhoneWhereInput
  }

  export type PhoneUpdateToOneWithWhereWithoutPrimaryPhoneUserInput = {
    where?: PhoneWhereInput
    data: XOR<PhoneUpdateWithoutPrimaryPhoneUserInput, PhoneUncheckedUpdateWithoutPrimaryPhoneUserInput>
  }

  export type PhoneUpdateWithoutPrimaryPhoneUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    subPhonesUser?: UserUpdateOneWithoutSubPhonesNestedInput
  }

  export type PhoneUncheckedUpdateWithoutPrimaryPhoneUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    subPhonesUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneUpsertWithWhereUniqueWithoutSubPhonesUserInput = {
    where: PhoneWhereUniqueInput
    update: XOR<PhoneUpdateWithoutSubPhonesUserInput, PhoneUncheckedUpdateWithoutSubPhonesUserInput>
    create: XOR<PhoneCreateWithoutSubPhonesUserInput, PhoneUncheckedCreateWithoutSubPhonesUserInput>
  }

  export type PhoneUpdateWithWhereUniqueWithoutSubPhonesUserInput = {
    where: PhoneWhereUniqueInput
    data: XOR<PhoneUpdateWithoutSubPhonesUserInput, PhoneUncheckedUpdateWithoutSubPhonesUserInput>
  }

  export type PhoneUpdateManyWithWhereWithoutSubPhonesUserInput = {
    where: PhoneScalarWhereInput
    data: XOR<PhoneUpdateManyMutationInput, PhoneUncheckedUpdateManyWithoutSubPhonesUserInput>
  }

  export type PhoneScalarWhereInput = {
    AND?: PhoneScalarWhereInput | PhoneScalarWhereInput[]
    OR?: PhoneScalarWhereInput[]
    NOT?: PhoneScalarWhereInput | PhoneScalarWhereInput[]
    id?: UuidFilter<"Phone"> | string
    value?: StringFilter<"Phone"> | string
    scope?: EnumScopeFilter<"Phone"> | $Enums.Scope
    subPhonesUserId?: UuidNullableFilter<"Phone"> | string | null
  }

  export type SocialLinkedsUpsertWithWhereUniqueWithoutUserInput = {
    where: SocialLinkedsWhereUniqueInput
    update: XOR<SocialLinkedsUpdateWithoutUserInput, SocialLinkedsUncheckedUpdateWithoutUserInput>
    create: XOR<SocialLinkedsCreateWithoutUserInput, SocialLinkedsUncheckedCreateWithoutUserInput>
  }

  export type SocialLinkedsUpdateWithWhereUniqueWithoutUserInput = {
    where: SocialLinkedsWhereUniqueInput
    data: XOR<SocialLinkedsUpdateWithoutUserInput, SocialLinkedsUncheckedUpdateWithoutUserInput>
  }

  export type SocialLinkedsUpdateManyWithWhereWithoutUserInput = {
    where: SocialLinkedsScalarWhereInput
    data: XOR<SocialLinkedsUpdateManyMutationInput, SocialLinkedsUncheckedUpdateManyWithoutUserInput>
  }

  export type SocialLinkedsScalarWhereInput = {
    AND?: SocialLinkedsScalarWhereInput | SocialLinkedsScalarWhereInput[]
    OR?: SocialLinkedsScalarWhereInput[]
    NOT?: SocialLinkedsScalarWhereInput | SocialLinkedsScalarWhereInput[]
    id?: StringFilter<"SocialLinkeds"> | string
    platform?: EnumPlatformFilter<"SocialLinkeds"> | $Enums.Platform
    userId?: UuidFilter<"SocialLinkeds"> | string
  }

  export type RelationUpsertWithWhereUniqueWithoutSourceUserInput = {
    where: RelationWhereUniqueInput
    update: XOR<RelationUpdateWithoutSourceUserInput, RelationUncheckedUpdateWithoutSourceUserInput>
    create: XOR<RelationCreateWithoutSourceUserInput, RelationUncheckedCreateWithoutSourceUserInput>
  }

  export type RelationUpdateWithWhereUniqueWithoutSourceUserInput = {
    where: RelationWhereUniqueInput
    data: XOR<RelationUpdateWithoutSourceUserInput, RelationUncheckedUpdateWithoutSourceUserInput>
  }

  export type RelationUpdateManyWithWhereWithoutSourceUserInput = {
    where: RelationScalarWhereInput
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyWithoutSourceUserInput>
  }

  export type RelationScalarWhereInput = {
    AND?: RelationScalarWhereInput | RelationScalarWhereInput[]
    OR?: RelationScalarWhereInput[]
    NOT?: RelationScalarWhereInput | RelationScalarWhereInput[]
    sourceUserId?: UuidFilter<"Relation"> | string
    targetUserId?: UuidFilter<"Relation"> | string
    type?: EnumRelationTypeFilter<"Relation"> | $Enums.RelationType
    status?: EnumStatusFilter<"Relation"> | $Enums.Status
    scope?: EnumScopeFilter<"Relation"> | $Enums.Scope
    createdAt?: DateTimeFilter<"Relation"> | Date | string
    updatedAt?: DateTimeFilter<"Relation"> | Date | string
  }

  export type RelationUpsertWithWhereUniqueWithoutTargetUserInput = {
    where: RelationWhereUniqueInput
    update: XOR<RelationUpdateWithoutTargetUserInput, RelationUncheckedUpdateWithoutTargetUserInput>
    create: XOR<RelationCreateWithoutTargetUserInput, RelationUncheckedCreateWithoutTargetUserInput>
  }

  export type RelationUpdateWithWhereUniqueWithoutTargetUserInput = {
    where: RelationWhereUniqueInput
    data: XOR<RelationUpdateWithoutTargetUserInput, RelationUncheckedUpdateWithoutTargetUserInput>
  }

  export type RelationUpdateManyWithWhereWithoutTargetUserInput = {
    where: RelationScalarWhereInput
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyWithoutTargetUserInput>
  }

  export type FriendshipUpsertWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutRequesterInput, FriendshipUncheckedUpdateWithoutRequesterInput>
    create: XOR<FriendshipCreateWithoutRequesterInput, FriendshipUncheckedCreateWithoutRequesterInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutRequesterInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutRequesterInput, FriendshipUncheckedUpdateWithoutRequesterInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutRequesterInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutRequesterInput>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    requesterId?: UuidFilter<"Friendship"> | string
    addresseeId?: UuidFilter<"Friendship"> | string
    status?: EnumStatusFilter<"Friendship"> | $Enums.Status
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    updatedAt?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutAddresseeInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutAddresseeInput, FriendshipUncheckedUpdateWithoutAddresseeInput>
    create: XOR<FriendshipCreateWithoutAddresseeInput, FriendshipUncheckedCreateWithoutAddresseeInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutAddresseeInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutAddresseeInput, FriendshipUncheckedUpdateWithoutAddresseeInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutAddresseeInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutAddresseeInput>
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    authorId?: UuidFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updateAt?: DateTimeFilter<"Post"> | Date | string
    scope?: EnumScopeFilter<"Post"> | $Enums.Scope
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    content?: StringFilter<"Post"> | string
    medias?: StringNullableListFilter<"Post">
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReactionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutAuthorInput, ReactionUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReactionCreateWithoutAuthorInput, ReactionUncheckedCreateWithoutAuthorInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutAuthorInput, ReactionUncheckedUpdateWithoutAuthorInput>
  }

  export type ReactionUpdateManyWithWhereWithoutAuthorInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type UserCreateWithoutSentFriendRequestsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSentFriendRequestsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSentFriendRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
  }

  export type UserCreateWithoutReceivedFriendRequestsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutReceivedFriendRequestsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutReceivedFriendRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
  }

  export type UserUpsertWithoutSentFriendRequestsInput = {
    update: XOR<UserUpdateWithoutSentFriendRequestsInput, UserUncheckedUpdateWithoutSentFriendRequestsInput>
    create: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentFriendRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentFriendRequestsInput, UserUncheckedUpdateWithoutSentFriendRequestsInput>
  }

  export type UserUpdateWithoutSentFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutSentFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithoutReceivedFriendRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedFriendRequestsInput, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
    create: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedFriendRequestsInput, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
  }

  export type UserUpdateWithoutReceivedFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedFriendRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutSentRelationsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSentRelationsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSentRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentRelationsInput, UserUncheckedCreateWithoutSentRelationsInput>
  }

  export type UserCreateWithoutReceivedRelationsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutReceivedRelationsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutReceivedRelationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedRelationsInput, UserUncheckedCreateWithoutReceivedRelationsInput>
  }

  export type UserUpsertWithoutSentRelationsInput = {
    update: XOR<UserUpdateWithoutSentRelationsInput, UserUncheckedUpdateWithoutSentRelationsInput>
    create: XOR<UserCreateWithoutSentRelationsInput, UserUncheckedCreateWithoutSentRelationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentRelationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentRelationsInput, UserUncheckedUpdateWithoutSentRelationsInput>
  }

  export type UserUpdateWithoutSentRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutSentRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithoutReceivedRelationsInput = {
    update: XOR<UserUpdateWithoutReceivedRelationsInput, UserUncheckedUpdateWithoutReceivedRelationsInput>
    create: XOR<UserCreateWithoutReceivedRelationsInput, UserUncheckedCreateWithoutReceivedRelationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedRelationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedRelationsInput, UserUncheckedUpdateWithoutReceivedRelationsInput>
  }

  export type UserUpdateWithoutReceivedRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutPrimaryEmailInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPrimaryEmailInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPrimaryEmailInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrimaryEmailInput, UserUncheckedCreateWithoutPrimaryEmailInput>
  }

  export type UserCreateWithoutSubEmailsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSubEmailsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSubEmailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubEmailsInput, UserUncheckedCreateWithoutSubEmailsInput>
  }

  export type UserUpsertWithoutPrimaryEmailInput = {
    update: XOR<UserUpdateWithoutPrimaryEmailInput, UserUncheckedUpdateWithoutPrimaryEmailInput>
    create: XOR<UserCreateWithoutPrimaryEmailInput, UserUncheckedCreateWithoutPrimaryEmailInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrimaryEmailInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrimaryEmailInput, UserUncheckedUpdateWithoutPrimaryEmailInput>
  }

  export type UserUpdateWithoutPrimaryEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPrimaryEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithoutSubEmailsInput = {
    update: XOR<UserUpdateWithoutSubEmailsInput, UserUncheckedUpdateWithoutSubEmailsInput>
    create: XOR<UserCreateWithoutSubEmailsInput, UserUncheckedCreateWithoutSubEmailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubEmailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubEmailsInput, UserUncheckedUpdateWithoutSubEmailsInput>
  }

  export type UserUpdateWithoutSubEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutSubEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutPrimaryPhoneInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPrimaryPhoneInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPrimaryPhoneInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrimaryPhoneInput, UserUncheckedCreateWithoutPrimaryPhoneInput>
  }

  export type UserCreateWithoutSubPhonesInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    socialLinkeds?: SocialLinkedsCreateNestedManyWithoutUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSubPhonesInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    socialLinkeds?: SocialLinkedsUncheckedCreateNestedManyWithoutUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSubPhonesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubPhonesInput, UserUncheckedCreateWithoutSubPhonesInput>
  }

  export type UserUpsertWithoutPrimaryPhoneInput = {
    update: XOR<UserUpdateWithoutPrimaryPhoneInput, UserUncheckedUpdateWithoutPrimaryPhoneInput>
    create: XOR<UserCreateWithoutPrimaryPhoneInput, UserUncheckedCreateWithoutPrimaryPhoneInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrimaryPhoneInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrimaryPhoneInput, UserUncheckedUpdateWithoutPrimaryPhoneInput>
  }

  export type UserUpdateWithoutPrimaryPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPrimaryPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithoutSubPhonesInput = {
    update: XOR<UserUpdateWithoutSubPhonesInput, UserUncheckedUpdateWithoutSubPhonesInput>
    create: XOR<UserCreateWithoutSubPhonesInput, UserUncheckedCreateWithoutSubPhonesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubPhonesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubPhonesInput, UserUncheckedUpdateWithoutSubPhonesInput>
  }

  export type UserUpdateWithoutSubPhonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    socialLinkeds?: SocialLinkedsUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutSubPhonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    socialLinkeds?: SocialLinkedsUncheckedUpdateManyWithoutUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateWithoutSocialLinkedsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    primaryEmail: EmailCreateNestedOneWithoutPrimaryEmailUserInput
    subEmails?: EmailCreateNestedManyWithoutSubEmailsUserInput
    primaryPhone?: PhoneCreateNestedOneWithoutPrimaryPhoneUserInput
    subPhones?: PhoneCreateNestedManyWithoutSubPhonesUserInput
    sentRelations?: RelationCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipCreateNestedManyWithoutAddresseeInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    reactions?: ReactionCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSocialLinkedsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updateAt?: Date | string
    flags?: UserCreateflagsInput | $Enums.UserFlag[]
    primaryEmailId: string
    primaryPhoneId?: string | null
    hashedPassword: string
    displayName: string
    username?: string | null
    gender: $Enums.Gender
    pronoun?: string | null
    birthday: Date | string
    biography?: string | null
    websites?: UserCreatewebsitesInput | string[]
    language?: string | null
    deletedAt?: Date | string | null
    avatarUrl?: string | null
    bannerUrl?: string | null
    subEmails?: EmailUncheckedCreateNestedManyWithoutSubEmailsUserInput
    subPhones?: PhoneUncheckedCreateNestedManyWithoutSubPhonesUserInput
    sentRelations?: RelationUncheckedCreateNestedManyWithoutSourceUserInput
    receivedRelations?: RelationUncheckedCreateNestedManyWithoutTargetUserInput
    sentFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutRequesterInput
    receivedFriendRequests?: FriendshipUncheckedCreateNestedManyWithoutAddresseeInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSocialLinkedsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSocialLinkedsInput, UserUncheckedCreateWithoutSocialLinkedsInput>
  }

  export type UserUpsertWithoutSocialLinkedsInput = {
    update: XOR<UserUpdateWithoutSocialLinkedsInput, UserUncheckedUpdateWithoutSocialLinkedsInput>
    create: XOR<UserCreateWithoutSocialLinkedsInput, UserUncheckedCreateWithoutSocialLinkedsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSocialLinkedsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSocialLinkedsInput, UserUncheckedUpdateWithoutSocialLinkedsInput>
  }

  export type UserUpdateWithoutSocialLinkedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryEmail?: EmailUpdateOneRequiredWithoutPrimaryEmailUserNestedInput
    subEmails?: EmailUpdateManyWithoutSubEmailsUserNestedInput
    primaryPhone?: PhoneUpdateOneWithoutPrimaryPhoneUserNestedInput
    subPhones?: PhoneUpdateManyWithoutSubPhonesUserNestedInput
    sentRelations?: RelationUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUpdateManyWithoutAddresseeNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutSocialLinkedsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: UserUpdateflagsInput | $Enums.UserFlag[]
    primaryEmailId?: StringFieldUpdateOperationsInput | string
    primaryPhoneId?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    pronoun?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: DateTimeFieldUpdateOperationsInput | Date | string
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    websites?: UserUpdatewebsitesInput | string[]
    language?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    subEmails?: EmailUncheckedUpdateManyWithoutSubEmailsUserNestedInput
    subPhones?: PhoneUncheckedUpdateManyWithoutSubPhonesUserNestedInput
    sentRelations?: RelationUncheckedUpdateManyWithoutSourceUserNestedInput
    receivedRelations?: RelationUncheckedUpdateManyWithoutTargetUserNestedInput
    sentFriendRequests?: FriendshipUncheckedUpdateManyWithoutRequesterNestedInput
    receivedFriendRequests?: FriendshipUncheckedUpdateManyWithoutAddresseeNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ReactionCreateManyPostInput = {
    id?: string
    authorId: string
    commentId?: string | null
  }

  export type CommentCreateManyPostInput = {
    id?: string
    authorId: string
    parentId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
  }

  export type ReactionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutReactionsNestedInput
    comment?: CommentUpdateOneWithoutReationsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReactionUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    reations?: ReactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    reations?: ReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
  }

  export type CommentCreateManyParentInput = {
    id?: string
    authorId: string
    postId: string
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
  }

  export type ReactionCreateManyCommentInput = {
    id?: string
    authorId: string
    postId?: string | null
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    reations?: ReactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    reations?: ReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
  }

  export type ReactionUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutReactionsNestedInput
    post?: PostUpdateOneWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReactionUncheckedUpdateManyWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmailCreateManySubEmailsUserInput = {
    id?: string
    value: string
    scope?: $Enums.Scope
  }

  export type PhoneCreateManySubPhonesUserInput = {
    id?: string
    value: string
    scope: $Enums.Scope
  }

  export type SocialLinkedsCreateManyUserInput = {
    id?: string
    platform: $Enums.Platform
  }

  export type RelationCreateManySourceUserInput = {
    targetUserId: string
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RelationCreateManyTargetUserInput = {
    sourceUserId: string
    type: $Enums.RelationType
    status: $Enums.Status
    scope: $Enums.Scope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipCreateManyRequesterInput = {
    addresseeId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FriendshipCreateManyAddresseeInput = {
    requesterId: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    scope: $Enums.Scope
    status: $Enums.PostStatus
    content: string
    medias?: PostCreatemediasInput | string[]
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    postId: string
    parentId?: string | null
    createdAt?: Date | string
    updateAt?: Date | string
    deletedAt?: Date | string | null
    updateHistories?: CommentCreateupdateHistoriesInput | string[]
    status: $Enums.CommentStatus
  }

  export type ReactionCreateManyAuthorInput = {
    id?: string
    postId?: string | null
    commentId?: string | null
  }

  export type EmailUpdateWithoutSubEmailsUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    primaryEmailUser?: UserUpdateOneWithoutPrimaryEmailNestedInput
  }

  export type EmailUncheckedUpdateWithoutSubEmailsUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    primaryEmailUser?: UserUncheckedUpdateOneWithoutPrimaryEmailNestedInput
  }

  export type EmailUncheckedUpdateManyWithoutSubEmailsUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type PhoneUpdateWithoutSubPhonesUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    primaryPhoneUser?: UserUpdateOneWithoutPrimaryPhoneNestedInput
  }

  export type PhoneUncheckedUpdateWithoutSubPhonesUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    primaryPhoneUser?: UserUncheckedUpdateOneWithoutPrimaryPhoneNestedInput
  }

  export type PhoneUncheckedUpdateManyWithoutSubPhonesUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
  }

  export type SocialLinkedsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
  }

  export type SocialLinkedsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
  }

  export type SocialLinkedsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
  }

  export type RelationUpdateWithoutSourceUserInput = {
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetUser?: UserUpdateOneRequiredWithoutReceivedRelationsNestedInput
  }

  export type RelationUncheckedUpdateWithoutSourceUserInput = {
    targetUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationUncheckedUpdateManyWithoutSourceUserInput = {
    targetUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationUpdateWithoutTargetUserInput = {
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUser?: UserUpdateOneRequiredWithoutSentRelationsNestedInput
  }

  export type RelationUncheckedUpdateWithoutTargetUserInput = {
    sourceUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationUncheckedUpdateManyWithoutTargetUserInput = {
    sourceUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumRelationTypeFieldUpdateOperationsInput | $Enums.RelationType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutRequesterInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addressee?: UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutRequesterInput = {
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutRequesterInput = {
    addresseeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutAddresseeInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutAddresseeInput = {
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutAddresseeInput = {
    requesterId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
    reactions?: ReactionUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
    reactions?: ReactionUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: EnumScopeFieldUpdateOperationsInput | $Enums.Scope
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    content?: StringFieldUpdateOperationsInput | string
    medias?: PostUpdatemediasInput | string[]
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
    reations?: ReactionUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
    reations?: ReactionUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateHistories?: CommentUpdateupdateHistoriesInput | string[]
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
  }

  export type ReactionUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneWithoutReactionsNestedInput
    comment?: CommentUpdateOneWithoutReationsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReactionUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}