
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
 * Model Credenciales
 * 
 */
export type Credenciales = $Result.DefaultSelection<Prisma.$CredencialesPayload>
/**
 * Model Perfil
 * 
 */
export type Perfil = $Result.DefaultSelection<Prisma.$PerfilPayload>
/**
 * Model Nivel
 * 
 */
export type Nivel = $Result.DefaultSelection<Prisma.$NivelPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model ZonaMuscular
 * 
 */
export type ZonaMuscular = $Result.DefaultSelection<Prisma.$ZonaMuscularPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Credenciales
 * const credenciales = await prisma.credenciales.findMany()
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
   * // Fetch zero or more Credenciales
   * const credenciales = await prisma.credenciales.findMany()
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
   * `prisma.credenciales`: Exposes CRUD operations for the **Credenciales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Credenciales
    * const credenciales = await prisma.credenciales.findMany()
    * ```
    */
  get credenciales(): Prisma.CredencialesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.PerfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nivel`: Exposes CRUD operations for the **Nivel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nivels
    * const nivels = await prisma.nivel.findMany()
    * ```
    */
  get nivel(): Prisma.NivelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.zonaMuscular`: Exposes CRUD operations for the **ZonaMuscular** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZonaMusculars
    * const zonaMusculars = await prisma.zonaMuscular.findMany()
    * ```
    */
  get zonaMuscular(): Prisma.ZonaMuscularDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Credenciales: 'Credenciales',
    Perfil: 'Perfil',
    Nivel: 'Nivel',
    Video: 'Video',
    ZonaMuscular: 'ZonaMuscular'
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
      modelProps: "credenciales" | "perfil" | "nivel" | "video" | "zonaMuscular"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Credenciales: {
        payload: Prisma.$CredencialesPayload<ExtArgs>
        fields: Prisma.CredencialesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CredencialesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CredencialesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload>
          }
          findFirst: {
            args: Prisma.CredencialesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CredencialesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload>
          }
          findMany: {
            args: Prisma.CredencialesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload>[]
          }
          create: {
            args: Prisma.CredencialesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload>
          }
          createMany: {
            args: Prisma.CredencialesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CredencialesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload>[]
          }
          delete: {
            args: Prisma.CredencialesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload>
          }
          update: {
            args: Prisma.CredencialesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload>
          }
          deleteMany: {
            args: Prisma.CredencialesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CredencialesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CredencialesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload>[]
          }
          upsert: {
            args: Prisma.CredencialesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CredencialesPayload>
          }
          aggregate: {
            args: Prisma.CredencialesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCredenciales>
          }
          groupBy: {
            args: Prisma.CredencialesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CredencialesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CredencialesCountArgs<ExtArgs>
            result: $Utils.Optional<CredencialesCountAggregateOutputType> | number
          }
        }
      }
      Perfil: {
        payload: Prisma.$PerfilPayload<ExtArgs>
        fields: Prisma.PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          deleteMany: {
            args: Prisma.PerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerfilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          upsert: {
            args: Prisma.PerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfil>
          }
          groupBy: {
            args: Prisma.PerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerfilCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number
          }
        }
      }
      Nivel: {
        payload: Prisma.$NivelPayload<ExtArgs>
        fields: Prisma.NivelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NivelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NivelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          findFirst: {
            args: Prisma.NivelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NivelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          findMany: {
            args: Prisma.NivelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>[]
          }
          create: {
            args: Prisma.NivelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          createMany: {
            args: Prisma.NivelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NivelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>[]
          }
          delete: {
            args: Prisma.NivelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          update: {
            args: Prisma.NivelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          deleteMany: {
            args: Prisma.NivelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NivelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NivelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>[]
          }
          upsert: {
            args: Prisma.NivelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          aggregate: {
            args: Prisma.NivelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNivel>
          }
          groupBy: {
            args: Prisma.NivelGroupByArgs<ExtArgs>
            result: $Utils.Optional<NivelGroupByOutputType>[]
          }
          count: {
            args: Prisma.NivelCountArgs<ExtArgs>
            result: $Utils.Optional<NivelCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      ZonaMuscular: {
        payload: Prisma.$ZonaMuscularPayload<ExtArgs>
        fields: Prisma.ZonaMuscularFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZonaMuscularFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZonaMuscularFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload>
          }
          findFirst: {
            args: Prisma.ZonaMuscularFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZonaMuscularFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload>
          }
          findMany: {
            args: Prisma.ZonaMuscularFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload>[]
          }
          create: {
            args: Prisma.ZonaMuscularCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload>
          }
          createMany: {
            args: Prisma.ZonaMuscularCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZonaMuscularCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload>[]
          }
          delete: {
            args: Prisma.ZonaMuscularDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload>
          }
          update: {
            args: Prisma.ZonaMuscularUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload>
          }
          deleteMany: {
            args: Prisma.ZonaMuscularDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZonaMuscularUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ZonaMuscularUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload>[]
          }
          upsert: {
            args: Prisma.ZonaMuscularUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZonaMuscularPayload>
          }
          aggregate: {
            args: Prisma.ZonaMuscularAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZonaMuscular>
          }
          groupBy: {
            args: Prisma.ZonaMuscularGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZonaMuscularGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZonaMuscularCountArgs<ExtArgs>
            result: $Utils.Optional<ZonaMuscularCountAggregateOutputType> | number
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
    credenciales?: CredencialesOmit
    perfil?: PerfilOmit
    nivel?: NivelOmit
    video?: VideoOmit
    zonaMuscular?: ZonaMuscularOmit
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
   * Count Type NivelCountOutputType
   */

  export type NivelCountOutputType = {
    perfiles: number
    videos: number
  }

  export type NivelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfiles?: boolean | NivelCountOutputTypeCountPerfilesArgs
    videos?: boolean | NivelCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * NivelCountOutputType without action
   */
  export type NivelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NivelCountOutputType
     */
    select?: NivelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NivelCountOutputType without action
   */
  export type NivelCountOutputTypeCountPerfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
  }

  /**
   * NivelCountOutputType without action
   */
  export type NivelCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Count Type ZonaMuscularCountOutputType
   */

  export type ZonaMuscularCountOutputType = {
    videos: number
  }

  export type ZonaMuscularCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | ZonaMuscularCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * ZonaMuscularCountOutputType without action
   */
  export type ZonaMuscularCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscularCountOutputType
     */
    select?: ZonaMuscularCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ZonaMuscularCountOutputType without action
   */
  export type ZonaMuscularCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Credenciales
   */

  export type AggregateCredenciales = {
    _count: CredencialesCountAggregateOutputType | null
    _avg: CredencialesAvgAggregateOutputType | null
    _sum: CredencialesSumAggregateOutputType | null
    _min: CredencialesMinAggregateOutputType | null
    _max: CredencialesMaxAggregateOutputType | null
  }

  export type CredencialesAvgAggregateOutputType = {
    id: number | null
  }

  export type CredencialesSumAggregateOutputType = {
    id: number | null
  }

  export type CredencialesMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredencialesMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CredencialesCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CredencialesAvgAggregateInputType = {
    id?: true
  }

  export type CredencialesSumAggregateInputType = {
    id?: true
  }

  export type CredencialesMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredencialesMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CredencialesCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CredencialesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credenciales to aggregate.
     */
    where?: CredencialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credenciales to fetch.
     */
    orderBy?: CredencialesOrderByWithRelationInput | CredencialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CredencialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credenciales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credenciales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Credenciales
    **/
    _count?: true | CredencialesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CredencialesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CredencialesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CredencialesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CredencialesMaxAggregateInputType
  }

  export type GetCredencialesAggregateType<T extends CredencialesAggregateArgs> = {
        [P in keyof T & keyof AggregateCredenciales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCredenciales[P]>
      : GetScalarType<T[P], AggregateCredenciales[P]>
  }




  export type CredencialesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CredencialesWhereInput
    orderBy?: CredencialesOrderByWithAggregationInput | CredencialesOrderByWithAggregationInput[]
    by: CredencialesScalarFieldEnum[] | CredencialesScalarFieldEnum
    having?: CredencialesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CredencialesCountAggregateInputType | true
    _avg?: CredencialesAvgAggregateInputType
    _sum?: CredencialesSumAggregateInputType
    _min?: CredencialesMinAggregateInputType
    _max?: CredencialesMaxAggregateInputType
  }

  export type CredencialesGroupByOutputType = {
    id: number
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: CredencialesCountAggregateOutputType | null
    _avg: CredencialesAvgAggregateOutputType | null
    _sum: CredencialesSumAggregateOutputType | null
    _min: CredencialesMinAggregateOutputType | null
    _max: CredencialesMaxAggregateOutputType | null
  }

  type GetCredencialesGroupByPayload<T extends CredencialesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CredencialesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CredencialesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CredencialesGroupByOutputType[P]>
            : GetScalarType<T[P], CredencialesGroupByOutputType[P]>
        }
      >
    >


  export type CredencialesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    perfil?: boolean | Credenciales$perfilArgs<ExtArgs>
  }, ExtArgs["result"]["credenciales"]>

  export type CredencialesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credenciales"]>

  export type CredencialesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["credenciales"]>

  export type CredencialesSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CredencialesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["credenciales"]>
  export type CredencialesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | Credenciales$perfilArgs<ExtArgs>
  }
  export type CredencialesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CredencialesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CredencialesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Credenciales"
    objects: {
      perfil: Prisma.$PerfilPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["credenciales"]>
    composites: {}
  }

  type CredencialesGetPayload<S extends boolean | null | undefined | CredencialesDefaultArgs> = $Result.GetResult<Prisma.$CredencialesPayload, S>

  type CredencialesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CredencialesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CredencialesCountAggregateInputType | true
    }

  export interface CredencialesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Credenciales'], meta: { name: 'Credenciales' } }
    /**
     * Find zero or one Credenciales that matches the filter.
     * @param {CredencialesFindUniqueArgs} args - Arguments to find a Credenciales
     * @example
     * // Get one Credenciales
     * const credenciales = await prisma.credenciales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CredencialesFindUniqueArgs>(args: SelectSubset<T, CredencialesFindUniqueArgs<ExtArgs>>): Prisma__CredencialesClient<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Credenciales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CredencialesFindUniqueOrThrowArgs} args - Arguments to find a Credenciales
     * @example
     * // Get one Credenciales
     * const credenciales = await prisma.credenciales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CredencialesFindUniqueOrThrowArgs>(args: SelectSubset<T, CredencialesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CredencialesClient<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credenciales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialesFindFirstArgs} args - Arguments to find a Credenciales
     * @example
     * // Get one Credenciales
     * const credenciales = await prisma.credenciales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CredencialesFindFirstArgs>(args?: SelectSubset<T, CredencialesFindFirstArgs<ExtArgs>>): Prisma__CredencialesClient<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Credenciales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialesFindFirstOrThrowArgs} args - Arguments to find a Credenciales
     * @example
     * // Get one Credenciales
     * const credenciales = await prisma.credenciales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CredencialesFindFirstOrThrowArgs>(args?: SelectSubset<T, CredencialesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CredencialesClient<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Credenciales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Credenciales
     * const credenciales = await prisma.credenciales.findMany()
     * 
     * // Get first 10 Credenciales
     * const credenciales = await prisma.credenciales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const credencialesWithIdOnly = await prisma.credenciales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CredencialesFindManyArgs>(args?: SelectSubset<T, CredencialesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Credenciales.
     * @param {CredencialesCreateArgs} args - Arguments to create a Credenciales.
     * @example
     * // Create one Credenciales
     * const Credenciales = await prisma.credenciales.create({
     *   data: {
     *     // ... data to create a Credenciales
     *   }
     * })
     * 
     */
    create<T extends CredencialesCreateArgs>(args: SelectSubset<T, CredencialesCreateArgs<ExtArgs>>): Prisma__CredencialesClient<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Credenciales.
     * @param {CredencialesCreateManyArgs} args - Arguments to create many Credenciales.
     * @example
     * // Create many Credenciales
     * const credenciales = await prisma.credenciales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CredencialesCreateManyArgs>(args?: SelectSubset<T, CredencialesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Credenciales and returns the data saved in the database.
     * @param {CredencialesCreateManyAndReturnArgs} args - Arguments to create many Credenciales.
     * @example
     * // Create many Credenciales
     * const credenciales = await prisma.credenciales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Credenciales and only return the `id`
     * const credencialesWithIdOnly = await prisma.credenciales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CredencialesCreateManyAndReturnArgs>(args?: SelectSubset<T, CredencialesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Credenciales.
     * @param {CredencialesDeleteArgs} args - Arguments to delete one Credenciales.
     * @example
     * // Delete one Credenciales
     * const Credenciales = await prisma.credenciales.delete({
     *   where: {
     *     // ... filter to delete one Credenciales
     *   }
     * })
     * 
     */
    delete<T extends CredencialesDeleteArgs>(args: SelectSubset<T, CredencialesDeleteArgs<ExtArgs>>): Prisma__CredencialesClient<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Credenciales.
     * @param {CredencialesUpdateArgs} args - Arguments to update one Credenciales.
     * @example
     * // Update one Credenciales
     * const credenciales = await prisma.credenciales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CredencialesUpdateArgs>(args: SelectSubset<T, CredencialesUpdateArgs<ExtArgs>>): Prisma__CredencialesClient<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Credenciales.
     * @param {CredencialesDeleteManyArgs} args - Arguments to filter Credenciales to delete.
     * @example
     * // Delete a few Credenciales
     * const { count } = await prisma.credenciales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CredencialesDeleteManyArgs>(args?: SelectSubset<T, CredencialesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credenciales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Credenciales
     * const credenciales = await prisma.credenciales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CredencialesUpdateManyArgs>(args: SelectSubset<T, CredencialesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Credenciales and returns the data updated in the database.
     * @param {CredencialesUpdateManyAndReturnArgs} args - Arguments to update many Credenciales.
     * @example
     * // Update many Credenciales
     * const credenciales = await prisma.credenciales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Credenciales and only return the `id`
     * const credencialesWithIdOnly = await prisma.credenciales.updateManyAndReturn({
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
    updateManyAndReturn<T extends CredencialesUpdateManyAndReturnArgs>(args: SelectSubset<T, CredencialesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Credenciales.
     * @param {CredencialesUpsertArgs} args - Arguments to update or create a Credenciales.
     * @example
     * // Update or create a Credenciales
     * const credenciales = await prisma.credenciales.upsert({
     *   create: {
     *     // ... data to create a Credenciales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Credenciales we want to update
     *   }
     * })
     */
    upsert<T extends CredencialesUpsertArgs>(args: SelectSubset<T, CredencialesUpsertArgs<ExtArgs>>): Prisma__CredencialesClient<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Credenciales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialesCountArgs} args - Arguments to filter Credenciales to count.
     * @example
     * // Count the number of Credenciales
     * const count = await prisma.credenciales.count({
     *   where: {
     *     // ... the filter for the Credenciales we want to count
     *   }
     * })
    **/
    count<T extends CredencialesCountArgs>(
      args?: Subset<T, CredencialesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CredencialesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Credenciales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CredencialesAggregateArgs>(args: Subset<T, CredencialesAggregateArgs>): Prisma.PrismaPromise<GetCredencialesAggregateType<T>>

    /**
     * Group by Credenciales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CredencialesGroupByArgs} args - Group by arguments.
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
      T extends CredencialesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CredencialesGroupByArgs['orderBy'] }
        : { orderBy?: CredencialesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CredencialesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredencialesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Credenciales model
   */
  readonly fields: CredencialesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Credenciales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CredencialesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends Credenciales$perfilArgs<ExtArgs> = {}>(args?: Subset<T, Credenciales$perfilArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Credenciales model
   */
  interface CredencialesFieldRefs {
    readonly id: FieldRef<"Credenciales", 'Int'>
    readonly email: FieldRef<"Credenciales", 'String'>
    readonly password: FieldRef<"Credenciales", 'String'>
    readonly createdAt: FieldRef<"Credenciales", 'DateTime'>
    readonly updatedAt: FieldRef<"Credenciales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Credenciales findUnique
   */
  export type CredencialesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
    /**
     * Filter, which Credenciales to fetch.
     */
    where: CredencialesWhereUniqueInput
  }

  /**
   * Credenciales findUniqueOrThrow
   */
  export type CredencialesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
    /**
     * Filter, which Credenciales to fetch.
     */
    where: CredencialesWhereUniqueInput
  }

  /**
   * Credenciales findFirst
   */
  export type CredencialesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
    /**
     * Filter, which Credenciales to fetch.
     */
    where?: CredencialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credenciales to fetch.
     */
    orderBy?: CredencialesOrderByWithRelationInput | CredencialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credenciales.
     */
    cursor?: CredencialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credenciales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credenciales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credenciales.
     */
    distinct?: CredencialesScalarFieldEnum | CredencialesScalarFieldEnum[]
  }

  /**
   * Credenciales findFirstOrThrow
   */
  export type CredencialesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
    /**
     * Filter, which Credenciales to fetch.
     */
    where?: CredencialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credenciales to fetch.
     */
    orderBy?: CredencialesOrderByWithRelationInput | CredencialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Credenciales.
     */
    cursor?: CredencialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credenciales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credenciales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Credenciales.
     */
    distinct?: CredencialesScalarFieldEnum | CredencialesScalarFieldEnum[]
  }

  /**
   * Credenciales findMany
   */
  export type CredencialesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
    /**
     * Filter, which Credenciales to fetch.
     */
    where?: CredencialesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Credenciales to fetch.
     */
    orderBy?: CredencialesOrderByWithRelationInput | CredencialesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Credenciales.
     */
    cursor?: CredencialesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Credenciales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Credenciales.
     */
    skip?: number
    distinct?: CredencialesScalarFieldEnum | CredencialesScalarFieldEnum[]
  }

  /**
   * Credenciales create
   */
  export type CredencialesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
    /**
     * The data needed to create a Credenciales.
     */
    data: XOR<CredencialesCreateInput, CredencialesUncheckedCreateInput>
  }

  /**
   * Credenciales createMany
   */
  export type CredencialesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Credenciales.
     */
    data: CredencialesCreateManyInput | CredencialesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credenciales createManyAndReturn
   */
  export type CredencialesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * The data used to create many Credenciales.
     */
    data: CredencialesCreateManyInput | CredencialesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Credenciales update
   */
  export type CredencialesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
    /**
     * The data needed to update a Credenciales.
     */
    data: XOR<CredencialesUpdateInput, CredencialesUncheckedUpdateInput>
    /**
     * Choose, which Credenciales to update.
     */
    where: CredencialesWhereUniqueInput
  }

  /**
   * Credenciales updateMany
   */
  export type CredencialesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Credenciales.
     */
    data: XOR<CredencialesUpdateManyMutationInput, CredencialesUncheckedUpdateManyInput>
    /**
     * Filter which Credenciales to update
     */
    where?: CredencialesWhereInput
    /**
     * Limit how many Credenciales to update.
     */
    limit?: number
  }

  /**
   * Credenciales updateManyAndReturn
   */
  export type CredencialesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * The data used to update Credenciales.
     */
    data: XOR<CredencialesUpdateManyMutationInput, CredencialesUncheckedUpdateManyInput>
    /**
     * Filter which Credenciales to update
     */
    where?: CredencialesWhereInput
    /**
     * Limit how many Credenciales to update.
     */
    limit?: number
  }

  /**
   * Credenciales upsert
   */
  export type CredencialesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
    /**
     * The filter to search for the Credenciales to update in case it exists.
     */
    where: CredencialesWhereUniqueInput
    /**
     * In case the Credenciales found by the `where` argument doesn't exist, create a new Credenciales with this data.
     */
    create: XOR<CredencialesCreateInput, CredencialesUncheckedCreateInput>
    /**
     * In case the Credenciales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CredencialesUpdateInput, CredencialesUncheckedUpdateInput>
  }

  /**
   * Credenciales delete
   */
  export type CredencialesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
    /**
     * Filter which Credenciales to delete.
     */
    where: CredencialesWhereUniqueInput
  }

  /**
   * Credenciales deleteMany
   */
  export type CredencialesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Credenciales to delete
     */
    where?: CredencialesWhereInput
    /**
     * Limit how many Credenciales to delete.
     */
    limit?: number
  }

  /**
   * Credenciales.perfil
   */
  export type Credenciales$perfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    where?: PerfilWhereInput
  }

  /**
   * Credenciales without action
   */
  export type CredencialesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Credenciales
     */
    select?: CredencialesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Credenciales
     */
    omit?: CredencialesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CredencialesInclude<ExtArgs> | null
  }


  /**
   * Model Perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  export type PerfilAvgAggregateOutputType = {
    id: number | null
    credencialesId: number | null
    edad: number | null
    nivel_actual_id: number | null
  }

  export type PerfilSumAggregateOutputType = {
    id: number | null
    credencialesId: number | null
    edad: number | null
    nivel_actual_id: number | null
  }

  export type PerfilMinAggregateOutputType = {
    id: number | null
    credencialesId: number | null
    nombre: string | null
    rol: string | null
    edad: number | null
    nivel_actual_id: number | null
    fecha_ultima_evaluacion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerfilMaxAggregateOutputType = {
    id: number | null
    credencialesId: number | null
    nombre: string | null
    rol: string | null
    edad: number | null
    nivel_actual_id: number | null
    fecha_ultima_evaluacion: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerfilCountAggregateOutputType = {
    id: number
    credencialesId: number
    nombre: number
    rol: number
    edad: number
    nivel_actual_id: number
    fecha_ultima_evaluacion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PerfilAvgAggregateInputType = {
    id?: true
    credencialesId?: true
    edad?: true
    nivel_actual_id?: true
  }

  export type PerfilSumAggregateInputType = {
    id?: true
    credencialesId?: true
    edad?: true
    nivel_actual_id?: true
  }

  export type PerfilMinAggregateInputType = {
    id?: true
    credencialesId?: true
    nombre?: true
    rol?: true
    edad?: true
    nivel_actual_id?: true
    fecha_ultima_evaluacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerfilMaxAggregateInputType = {
    id?: true
    credencialesId?: true
    nombre?: true
    rol?: true
    edad?: true
    nivel_actual_id?: true
    fecha_ultima_evaluacion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerfilCountAggregateInputType = {
    id?: true
    credencialesId?: true
    nombre?: true
    rol?: true
    edad?: true
    nivel_actual_id?: true
    fecha_ultima_evaluacion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfil to aggregate.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perfils
    **/
    _count?: true | PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilMaxAggregateInputType
  }

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>
  }




  export type PerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithAggregationInput | PerfilOrderByWithAggregationInput[]
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum
    having?: PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilCountAggregateInputType | true
    _avg?: PerfilAvgAggregateInputType
    _sum?: PerfilSumAggregateInputType
    _min?: PerfilMinAggregateInputType
    _max?: PerfilMaxAggregateInputType
  }

  export type PerfilGroupByOutputType = {
    id: number
    credencialesId: number
    nombre: string | null
    rol: string
    edad: number | null
    nivel_actual_id: number
    fecha_ultima_evaluacion: Date
    createdAt: Date
    updatedAt: Date
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>
        }
      >
    >


  export type PerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credencialesId?: boolean
    nombre?: boolean
    rol?: boolean
    edad?: boolean
    nivel_actual_id?: boolean
    fecha_ultima_evaluacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credenciales?: boolean | CredencialesDefaultArgs<ExtArgs>
    nivel_actual?: boolean | NivelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credencialesId?: boolean
    nombre?: boolean
    rol?: boolean
    edad?: boolean
    nivel_actual_id?: boolean
    fecha_ultima_evaluacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credenciales?: boolean | CredencialesDefaultArgs<ExtArgs>
    nivel_actual?: boolean | NivelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    credencialesId?: boolean
    nombre?: boolean
    rol?: boolean
    edad?: boolean
    nivel_actual_id?: boolean
    fecha_ultima_evaluacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credenciales?: boolean | CredencialesDefaultArgs<ExtArgs>
    nivel_actual?: boolean | NivelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectScalar = {
    id?: boolean
    credencialesId?: boolean
    nombre?: boolean
    rol?: boolean
    edad?: boolean
    nivel_actual_id?: boolean
    fecha_ultima_evaluacion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PerfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "credencialesId" | "nombre" | "rol" | "edad" | "nivel_actual_id" | "fecha_ultima_evaluacion" | "createdAt" | "updatedAt", ExtArgs["result"]["perfil"]>
  export type PerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credenciales?: boolean | CredencialesDefaultArgs<ExtArgs>
    nivel_actual?: boolean | NivelDefaultArgs<ExtArgs>
  }
  export type PerfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credenciales?: boolean | CredencialesDefaultArgs<ExtArgs>
    nivel_actual?: boolean | NivelDefaultArgs<ExtArgs>
  }
  export type PerfilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    credenciales?: boolean | CredencialesDefaultArgs<ExtArgs>
    nivel_actual?: boolean | NivelDefaultArgs<ExtArgs>
  }

  export type $PerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perfil"
    objects: {
      credenciales: Prisma.$CredencialesPayload<ExtArgs>
      nivel_actual: Prisma.$NivelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      credencialesId: number
      nombre: string | null
      rol: string
      edad: number | null
      nivel_actual_id: number
      fecha_ultima_evaluacion: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["perfil"]>
    composites: {}
  }

  type PerfilGetPayload<S extends boolean | null | undefined | PerfilDefaultArgs> = $Result.GetResult<Prisma.$PerfilPayload, S>

  type PerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface PerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perfil'], meta: { name: 'Perfil' } }
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {PerfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerfilFindUniqueArgs>(args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, PerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerfilFindFirstArgs>(args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, PerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     * 
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilWithIdOnly = await prisma.perfil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerfilFindManyArgs>(args?: SelectSubset<T, PerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfil.
     * @param {PerfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     * 
     */
    create<T extends PerfilCreateArgs>(args: SelectSubset<T, PerfilCreateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfils.
     * @param {PerfilCreateManyArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerfilCreateManyArgs>(args?: SelectSubset<T, PerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perfils and returns the data saved in the database.
     * @param {PerfilCreateManyAndReturnArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perfils and only return the `id`
     * const perfilWithIdOnly = await prisma.perfil.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerfilCreateManyAndReturnArgs>(args?: SelectSubset<T, PerfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Perfil.
     * @param {PerfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     * 
     */
    delete<T extends PerfilDeleteArgs>(args: SelectSubset<T, PerfilDeleteArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfil.
     * @param {PerfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerfilUpdateArgs>(args: SelectSubset<T, PerfilUpdateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfils.
     * @param {PerfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerfilDeleteManyArgs>(args?: SelectSubset<T, PerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerfilUpdateManyArgs>(args: SelectSubset<T, PerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils and returns the data updated in the database.
     * @param {PerfilUpdateManyAndReturnArgs} args - Arguments to update many Perfils.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perfils and only return the `id`
     * const perfilWithIdOnly = await prisma.perfil.updateManyAndReturn({
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
    updateManyAndReturn<T extends PerfilUpdateManyAndReturnArgs>(args: SelectSubset<T, PerfilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Perfil.
     * @param {PerfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
     */
    upsert<T extends PerfilUpsertArgs>(args: SelectSubset<T, PerfilUpsertArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
    **/
    count<T extends PerfilCountArgs>(
      args?: Subset<T, PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerfilAggregateArgs>(args: Subset<T, PerfilAggregateArgs>): Prisma.PrismaPromise<GetPerfilAggregateType<T>>

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilGroupByArgs} args - Group by arguments.
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
      T extends PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilGroupByArgs['orderBy'] }
        : { orderBy?: PerfilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perfil model
   */
  readonly fields: PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    credenciales<T extends CredencialesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CredencialesDefaultArgs<ExtArgs>>): Prisma__CredencialesClient<$Result.GetResult<Prisma.$CredencialesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nivel_actual<T extends NivelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NivelDefaultArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Perfil model
   */
  interface PerfilFieldRefs {
    readonly id: FieldRef<"Perfil", 'Int'>
    readonly credencialesId: FieldRef<"Perfil", 'Int'>
    readonly nombre: FieldRef<"Perfil", 'String'>
    readonly rol: FieldRef<"Perfil", 'String'>
    readonly edad: FieldRef<"Perfil", 'Int'>
    readonly nivel_actual_id: FieldRef<"Perfil", 'Int'>
    readonly fecha_ultima_evaluacion: FieldRef<"Perfil", 'DateTime'>
    readonly createdAt: FieldRef<"Perfil", 'DateTime'>
    readonly updatedAt: FieldRef<"Perfil", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Perfil findUnique
   */
  export type PerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findUniqueOrThrow
   */
  export type PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findFirst
   */
  export type PerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findFirstOrThrow
   */
  export type PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findMany
   */
  export type PerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfils to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil create
   */
  export type PerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Perfil.
     */
    data: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
  }

  /**
   * Perfil createMany
   */
  export type PerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perfil createManyAndReturn
   */
  export type PerfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perfil update
   */
  export type PerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Perfil.
     */
    data: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
    /**
     * Choose, which Perfil to update.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil updateMany
   */
  export type PerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to update.
     */
    limit?: number
  }

  /**
   * Perfil updateManyAndReturn
   */
  export type PerfilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perfil upsert
   */
  export type PerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Perfil to update in case it exists.
     */
    where: PerfilWhereUniqueInput
    /**
     * In case the Perfil found by the `where` argument doesn't exist, create a new Perfil with this data.
     */
    create: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
    /**
     * In case the Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
  }

  /**
   * Perfil delete
   */
  export type PerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter which Perfil to delete.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil deleteMany
   */
  export type PerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfils to delete
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to delete.
     */
    limit?: number
  }

  /**
   * Perfil without action
   */
  export type PerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
  }


  /**
   * Model Nivel
   */

  export type AggregateNivel = {
    _count: NivelCountAggregateOutputType | null
    _avg: NivelAvgAggregateOutputType | null
    _sum: NivelSumAggregateOutputType | null
    _min: NivelMinAggregateOutputType | null
    _max: NivelMaxAggregateOutputType | null
  }

  export type NivelAvgAggregateOutputType = {
    id: number | null
    numero_orden: number | null
  }

  export type NivelSumAggregateOutputType = {
    id: number | null
    numero_orden: number | null
  }

  export type NivelMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    numero_orden: number | null
  }

  export type NivelMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    numero_orden: number | null
  }

  export type NivelCountAggregateOutputType = {
    id: number
    nombre: number
    numero_orden: number
    _all: number
  }


  export type NivelAvgAggregateInputType = {
    id?: true
    numero_orden?: true
  }

  export type NivelSumAggregateInputType = {
    id?: true
    numero_orden?: true
  }

  export type NivelMinAggregateInputType = {
    id?: true
    nombre?: true
    numero_orden?: true
  }

  export type NivelMaxAggregateInputType = {
    id?: true
    nombre?: true
    numero_orden?: true
  }

  export type NivelCountAggregateInputType = {
    id?: true
    nombre?: true
    numero_orden?: true
    _all?: true
  }

  export type NivelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nivel to aggregate.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nivels
    **/
    _count?: true | NivelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NivelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NivelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NivelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NivelMaxAggregateInputType
  }

  export type GetNivelAggregateType<T extends NivelAggregateArgs> = {
        [P in keyof T & keyof AggregateNivel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNivel[P]>
      : GetScalarType<T[P], AggregateNivel[P]>
  }




  export type NivelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NivelWhereInput
    orderBy?: NivelOrderByWithAggregationInput | NivelOrderByWithAggregationInput[]
    by: NivelScalarFieldEnum[] | NivelScalarFieldEnum
    having?: NivelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NivelCountAggregateInputType | true
    _avg?: NivelAvgAggregateInputType
    _sum?: NivelSumAggregateInputType
    _min?: NivelMinAggregateInputType
    _max?: NivelMaxAggregateInputType
  }

  export type NivelGroupByOutputType = {
    id: number
    nombre: string
    numero_orden: number
    _count: NivelCountAggregateOutputType | null
    _avg: NivelAvgAggregateOutputType | null
    _sum: NivelSumAggregateOutputType | null
    _min: NivelMinAggregateOutputType | null
    _max: NivelMaxAggregateOutputType | null
  }

  type GetNivelGroupByPayload<T extends NivelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NivelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NivelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NivelGroupByOutputType[P]>
            : GetScalarType<T[P], NivelGroupByOutputType[P]>
        }
      >
    >


  export type NivelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    numero_orden?: boolean
    perfiles?: boolean | Nivel$perfilesArgs<ExtArgs>
    videos?: boolean | Nivel$videosArgs<ExtArgs>
    _count?: boolean | NivelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nivel"]>

  export type NivelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    numero_orden?: boolean
  }, ExtArgs["result"]["nivel"]>

  export type NivelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    numero_orden?: boolean
  }, ExtArgs["result"]["nivel"]>

  export type NivelSelectScalar = {
    id?: boolean
    nombre?: boolean
    numero_orden?: boolean
  }

  export type NivelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "numero_orden", ExtArgs["result"]["nivel"]>
  export type NivelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfiles?: boolean | Nivel$perfilesArgs<ExtArgs>
    videos?: boolean | Nivel$videosArgs<ExtArgs>
    _count?: boolean | NivelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NivelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NivelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NivelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nivel"
    objects: {
      perfiles: Prisma.$PerfilPayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      numero_orden: number
    }, ExtArgs["result"]["nivel"]>
    composites: {}
  }

  type NivelGetPayload<S extends boolean | null | undefined | NivelDefaultArgs> = $Result.GetResult<Prisma.$NivelPayload, S>

  type NivelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NivelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NivelCountAggregateInputType | true
    }

  export interface NivelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nivel'], meta: { name: 'Nivel' } }
    /**
     * Find zero or one Nivel that matches the filter.
     * @param {NivelFindUniqueArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NivelFindUniqueArgs>(args: SelectSubset<T, NivelFindUniqueArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nivel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NivelFindUniqueOrThrowArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NivelFindUniqueOrThrowArgs>(args: SelectSubset<T, NivelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nivel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelFindFirstArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NivelFindFirstArgs>(args?: SelectSubset<T, NivelFindFirstArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nivel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelFindFirstOrThrowArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NivelFindFirstOrThrowArgs>(args?: SelectSubset<T, NivelFindFirstOrThrowArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nivels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nivels
     * const nivels = await prisma.nivel.findMany()
     * 
     * // Get first 10 Nivels
     * const nivels = await prisma.nivel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nivelWithIdOnly = await prisma.nivel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NivelFindManyArgs>(args?: SelectSubset<T, NivelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nivel.
     * @param {NivelCreateArgs} args - Arguments to create a Nivel.
     * @example
     * // Create one Nivel
     * const Nivel = await prisma.nivel.create({
     *   data: {
     *     // ... data to create a Nivel
     *   }
     * })
     * 
     */
    create<T extends NivelCreateArgs>(args: SelectSubset<T, NivelCreateArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nivels.
     * @param {NivelCreateManyArgs} args - Arguments to create many Nivels.
     * @example
     * // Create many Nivels
     * const nivel = await prisma.nivel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NivelCreateManyArgs>(args?: SelectSubset<T, NivelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nivels and returns the data saved in the database.
     * @param {NivelCreateManyAndReturnArgs} args - Arguments to create many Nivels.
     * @example
     * // Create many Nivels
     * const nivel = await prisma.nivel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nivels and only return the `id`
     * const nivelWithIdOnly = await prisma.nivel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NivelCreateManyAndReturnArgs>(args?: SelectSubset<T, NivelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nivel.
     * @param {NivelDeleteArgs} args - Arguments to delete one Nivel.
     * @example
     * // Delete one Nivel
     * const Nivel = await prisma.nivel.delete({
     *   where: {
     *     // ... filter to delete one Nivel
     *   }
     * })
     * 
     */
    delete<T extends NivelDeleteArgs>(args: SelectSubset<T, NivelDeleteArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nivel.
     * @param {NivelUpdateArgs} args - Arguments to update one Nivel.
     * @example
     * // Update one Nivel
     * const nivel = await prisma.nivel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NivelUpdateArgs>(args: SelectSubset<T, NivelUpdateArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nivels.
     * @param {NivelDeleteManyArgs} args - Arguments to filter Nivels to delete.
     * @example
     * // Delete a few Nivels
     * const { count } = await prisma.nivel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NivelDeleteManyArgs>(args?: SelectSubset<T, NivelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nivels
     * const nivel = await prisma.nivel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NivelUpdateManyArgs>(args: SelectSubset<T, NivelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nivels and returns the data updated in the database.
     * @param {NivelUpdateManyAndReturnArgs} args - Arguments to update many Nivels.
     * @example
     * // Update many Nivels
     * const nivel = await prisma.nivel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nivels and only return the `id`
     * const nivelWithIdOnly = await prisma.nivel.updateManyAndReturn({
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
    updateManyAndReturn<T extends NivelUpdateManyAndReturnArgs>(args: SelectSubset<T, NivelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nivel.
     * @param {NivelUpsertArgs} args - Arguments to update or create a Nivel.
     * @example
     * // Update or create a Nivel
     * const nivel = await prisma.nivel.upsert({
     *   create: {
     *     // ... data to create a Nivel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nivel we want to update
     *   }
     * })
     */
    upsert<T extends NivelUpsertArgs>(args: SelectSubset<T, NivelUpsertArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelCountArgs} args - Arguments to filter Nivels to count.
     * @example
     * // Count the number of Nivels
     * const count = await prisma.nivel.count({
     *   where: {
     *     // ... the filter for the Nivels we want to count
     *   }
     * })
    **/
    count<T extends NivelCountArgs>(
      args?: Subset<T, NivelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NivelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NivelAggregateArgs>(args: Subset<T, NivelAggregateArgs>): Prisma.PrismaPromise<GetNivelAggregateType<T>>

    /**
     * Group by Nivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelGroupByArgs} args - Group by arguments.
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
      T extends NivelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NivelGroupByArgs['orderBy'] }
        : { orderBy?: NivelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NivelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNivelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nivel model
   */
  readonly fields: NivelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nivel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NivelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfiles<T extends Nivel$perfilesArgs<ExtArgs> = {}>(args?: Subset<T, Nivel$perfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends Nivel$videosArgs<ExtArgs> = {}>(args?: Subset<T, Nivel$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Nivel model
   */
  interface NivelFieldRefs {
    readonly id: FieldRef<"Nivel", 'Int'>
    readonly nombre: FieldRef<"Nivel", 'String'>
    readonly numero_orden: FieldRef<"Nivel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Nivel findUnique
   */
  export type NivelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel findUniqueOrThrow
   */
  export type NivelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel findFirst
   */
  export type NivelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nivels.
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nivels.
     */
    distinct?: NivelScalarFieldEnum | NivelScalarFieldEnum[]
  }

  /**
   * Nivel findFirstOrThrow
   */
  export type NivelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nivels.
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nivels.
     */
    distinct?: NivelScalarFieldEnum | NivelScalarFieldEnum[]
  }

  /**
   * Nivel findMany
   */
  export type NivelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivels to fetch.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nivels.
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    distinct?: NivelScalarFieldEnum | NivelScalarFieldEnum[]
  }

  /**
   * Nivel create
   */
  export type NivelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * The data needed to create a Nivel.
     */
    data: XOR<NivelCreateInput, NivelUncheckedCreateInput>
  }

  /**
   * Nivel createMany
   */
  export type NivelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nivels.
     */
    data: NivelCreateManyInput | NivelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nivel createManyAndReturn
   */
  export type NivelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * The data used to create many Nivels.
     */
    data: NivelCreateManyInput | NivelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Nivel update
   */
  export type NivelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * The data needed to update a Nivel.
     */
    data: XOR<NivelUpdateInput, NivelUncheckedUpdateInput>
    /**
     * Choose, which Nivel to update.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel updateMany
   */
  export type NivelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nivels.
     */
    data: XOR<NivelUpdateManyMutationInput, NivelUncheckedUpdateManyInput>
    /**
     * Filter which Nivels to update
     */
    where?: NivelWhereInput
    /**
     * Limit how many Nivels to update.
     */
    limit?: number
  }

  /**
   * Nivel updateManyAndReturn
   */
  export type NivelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * The data used to update Nivels.
     */
    data: XOR<NivelUpdateManyMutationInput, NivelUncheckedUpdateManyInput>
    /**
     * Filter which Nivels to update
     */
    where?: NivelWhereInput
    /**
     * Limit how many Nivels to update.
     */
    limit?: number
  }

  /**
   * Nivel upsert
   */
  export type NivelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * The filter to search for the Nivel to update in case it exists.
     */
    where: NivelWhereUniqueInput
    /**
     * In case the Nivel found by the `where` argument doesn't exist, create a new Nivel with this data.
     */
    create: XOR<NivelCreateInput, NivelUncheckedCreateInput>
    /**
     * In case the Nivel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NivelUpdateInput, NivelUncheckedUpdateInput>
  }

  /**
   * Nivel delete
   */
  export type NivelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter which Nivel to delete.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel deleteMany
   */
  export type NivelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nivels to delete
     */
    where?: NivelWhereInput
    /**
     * Limit how many Nivels to delete.
     */
    limit?: number
  }

  /**
   * Nivel.perfiles
   */
  export type Nivel$perfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    cursor?: PerfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Nivel.videos
   */
  export type Nivel$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Nivel without action
   */
  export type NivelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Nivel
     */
    omit?: NivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    zona_muscular_id: number | null
    nivel_id: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    zona_muscular_id: number | null
    nivel_id: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    url_video: string | null
    url_miniatura: string | null
    zona_muscular_id: number | null
    nivel_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    url_video: string | null
    url_miniatura: string | null
    zona_muscular_id: number | null
    nivel_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    url_video: number
    url_miniatura: number
    zona_muscular_id: number
    nivel_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    zona_muscular_id?: true
    nivel_id?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    zona_muscular_id?: true
    nivel_id?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    url_video?: true
    url_miniatura?: true
    zona_muscular_id?: true
    nivel_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    url_video?: true
    url_miniatura?: true
    zona_muscular_id?: true
    nivel_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    url_video?: true
    url_miniatura?: true
    zona_muscular_id?: true
    nivel_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    zona_muscular_id: number
    nivel_id: number
    createdAt: Date
    updatedAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    url_video?: boolean
    url_miniatura?: boolean
    zona_muscular_id?: boolean
    nivel_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zonaMuscular?: boolean | ZonaMuscularDefaultArgs<ExtArgs>
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    url_video?: boolean
    url_miniatura?: boolean
    zona_muscular_id?: boolean
    nivel_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zonaMuscular?: boolean | ZonaMuscularDefaultArgs<ExtArgs>
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    url_video?: boolean
    url_miniatura?: boolean
    zona_muscular_id?: boolean
    nivel_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zonaMuscular?: boolean | ZonaMuscularDefaultArgs<ExtArgs>
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    url_video?: boolean
    url_miniatura?: boolean
    zona_muscular_id?: boolean
    nivel_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "url_video" | "url_miniatura" | "zona_muscular_id" | "nivel_id" | "createdAt" | "updatedAt", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zonaMuscular?: boolean | ZonaMuscularDefaultArgs<ExtArgs>
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zonaMuscular?: boolean | ZonaMuscularDefaultArgs<ExtArgs>
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    zonaMuscular?: boolean | ZonaMuscularDefaultArgs<ExtArgs>
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      zonaMuscular: Prisma.$ZonaMuscularPayload<ExtArgs>
      nivel: Prisma.$NivelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      url_video: string
      url_miniatura: string
      zona_muscular_id: number
      nivel_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    zonaMuscular<T extends ZonaMuscularDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ZonaMuscularDefaultArgs<ExtArgs>>): Prisma__ZonaMuscularClient<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nivel<T extends NivelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NivelDefaultArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly nombre: FieldRef<"Video", 'String'>
    readonly descripcion: FieldRef<"Video", 'String'>
    readonly url_video: FieldRef<"Video", 'String'>
    readonly url_miniatura: FieldRef<"Video", 'String'>
    readonly zona_muscular_id: FieldRef<"Video", 'Int'>
    readonly nivel_id: FieldRef<"Video", 'Int'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model ZonaMuscular
   */

  export type AggregateZonaMuscular = {
    _count: ZonaMuscularCountAggregateOutputType | null
    _avg: ZonaMuscularAvgAggregateOutputType | null
    _sum: ZonaMuscularSumAggregateOutputType | null
    _min: ZonaMuscularMinAggregateOutputType | null
    _max: ZonaMuscularMaxAggregateOutputType | null
  }

  export type ZonaMuscularAvgAggregateOutputType = {
    id: number | null
  }

  export type ZonaMuscularSumAggregateOutputType = {
    id: number | null
  }

  export type ZonaMuscularMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZonaMuscularMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ZonaMuscularCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ZonaMuscularAvgAggregateInputType = {
    id?: true
  }

  export type ZonaMuscularSumAggregateInputType = {
    id?: true
  }

  export type ZonaMuscularMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZonaMuscularMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ZonaMuscularCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ZonaMuscularAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZonaMuscular to aggregate.
     */
    where?: ZonaMuscularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZonaMusculars to fetch.
     */
    orderBy?: ZonaMuscularOrderByWithRelationInput | ZonaMuscularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZonaMuscularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZonaMusculars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZonaMusculars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZonaMusculars
    **/
    _count?: true | ZonaMuscularCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ZonaMuscularAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ZonaMuscularSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZonaMuscularMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZonaMuscularMaxAggregateInputType
  }

  export type GetZonaMuscularAggregateType<T extends ZonaMuscularAggregateArgs> = {
        [P in keyof T & keyof AggregateZonaMuscular]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZonaMuscular[P]>
      : GetScalarType<T[P], AggregateZonaMuscular[P]>
  }




  export type ZonaMuscularGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZonaMuscularWhereInput
    orderBy?: ZonaMuscularOrderByWithAggregationInput | ZonaMuscularOrderByWithAggregationInput[]
    by: ZonaMuscularScalarFieldEnum[] | ZonaMuscularScalarFieldEnum
    having?: ZonaMuscularScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZonaMuscularCountAggregateInputType | true
    _avg?: ZonaMuscularAvgAggregateInputType
    _sum?: ZonaMuscularSumAggregateInputType
    _min?: ZonaMuscularMinAggregateInputType
    _max?: ZonaMuscularMaxAggregateInputType
  }

  export type ZonaMuscularGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    createdAt: Date
    updatedAt: Date
    _count: ZonaMuscularCountAggregateOutputType | null
    _avg: ZonaMuscularAvgAggregateOutputType | null
    _sum: ZonaMuscularSumAggregateOutputType | null
    _min: ZonaMuscularMinAggregateOutputType | null
    _max: ZonaMuscularMaxAggregateOutputType | null
  }

  type GetZonaMuscularGroupByPayload<T extends ZonaMuscularGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZonaMuscularGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZonaMuscularGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZonaMuscularGroupByOutputType[P]>
            : GetScalarType<T[P], ZonaMuscularGroupByOutputType[P]>
        }
      >
    >


  export type ZonaMuscularSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    videos?: boolean | ZonaMuscular$videosArgs<ExtArgs>
    _count?: boolean | ZonaMuscularCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zonaMuscular"]>

  export type ZonaMuscularSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zonaMuscular"]>

  export type ZonaMuscularSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["zonaMuscular"]>

  export type ZonaMuscularSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ZonaMuscularOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "createdAt" | "updatedAt", ExtArgs["result"]["zonaMuscular"]>
  export type ZonaMuscularInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    videos?: boolean | ZonaMuscular$videosArgs<ExtArgs>
    _count?: boolean | ZonaMuscularCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ZonaMuscularIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ZonaMuscularIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ZonaMuscularPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZonaMuscular"
    objects: {
      videos: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["zonaMuscular"]>
    composites: {}
  }

  type ZonaMuscularGetPayload<S extends boolean | null | undefined | ZonaMuscularDefaultArgs> = $Result.GetResult<Prisma.$ZonaMuscularPayload, S>

  type ZonaMuscularCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ZonaMuscularFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ZonaMuscularCountAggregateInputType | true
    }

  export interface ZonaMuscularDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZonaMuscular'], meta: { name: 'ZonaMuscular' } }
    /**
     * Find zero or one ZonaMuscular that matches the filter.
     * @param {ZonaMuscularFindUniqueArgs} args - Arguments to find a ZonaMuscular
     * @example
     * // Get one ZonaMuscular
     * const zonaMuscular = await prisma.zonaMuscular.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZonaMuscularFindUniqueArgs>(args: SelectSubset<T, ZonaMuscularFindUniqueArgs<ExtArgs>>): Prisma__ZonaMuscularClient<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ZonaMuscular that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ZonaMuscularFindUniqueOrThrowArgs} args - Arguments to find a ZonaMuscular
     * @example
     * // Get one ZonaMuscular
     * const zonaMuscular = await prisma.zonaMuscular.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZonaMuscularFindUniqueOrThrowArgs>(args: SelectSubset<T, ZonaMuscularFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZonaMuscularClient<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZonaMuscular that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaMuscularFindFirstArgs} args - Arguments to find a ZonaMuscular
     * @example
     * // Get one ZonaMuscular
     * const zonaMuscular = await prisma.zonaMuscular.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZonaMuscularFindFirstArgs>(args?: SelectSubset<T, ZonaMuscularFindFirstArgs<ExtArgs>>): Prisma__ZonaMuscularClient<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ZonaMuscular that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaMuscularFindFirstOrThrowArgs} args - Arguments to find a ZonaMuscular
     * @example
     * // Get one ZonaMuscular
     * const zonaMuscular = await prisma.zonaMuscular.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZonaMuscularFindFirstOrThrowArgs>(args?: SelectSubset<T, ZonaMuscularFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZonaMuscularClient<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ZonaMusculars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaMuscularFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZonaMusculars
     * const zonaMusculars = await prisma.zonaMuscular.findMany()
     * 
     * // Get first 10 ZonaMusculars
     * const zonaMusculars = await prisma.zonaMuscular.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const zonaMuscularWithIdOnly = await prisma.zonaMuscular.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ZonaMuscularFindManyArgs>(args?: SelectSubset<T, ZonaMuscularFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ZonaMuscular.
     * @param {ZonaMuscularCreateArgs} args - Arguments to create a ZonaMuscular.
     * @example
     * // Create one ZonaMuscular
     * const ZonaMuscular = await prisma.zonaMuscular.create({
     *   data: {
     *     // ... data to create a ZonaMuscular
     *   }
     * })
     * 
     */
    create<T extends ZonaMuscularCreateArgs>(args: SelectSubset<T, ZonaMuscularCreateArgs<ExtArgs>>): Prisma__ZonaMuscularClient<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ZonaMusculars.
     * @param {ZonaMuscularCreateManyArgs} args - Arguments to create many ZonaMusculars.
     * @example
     * // Create many ZonaMusculars
     * const zonaMuscular = await prisma.zonaMuscular.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZonaMuscularCreateManyArgs>(args?: SelectSubset<T, ZonaMuscularCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZonaMusculars and returns the data saved in the database.
     * @param {ZonaMuscularCreateManyAndReturnArgs} args - Arguments to create many ZonaMusculars.
     * @example
     * // Create many ZonaMusculars
     * const zonaMuscular = await prisma.zonaMuscular.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZonaMusculars and only return the `id`
     * const zonaMuscularWithIdOnly = await prisma.zonaMuscular.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZonaMuscularCreateManyAndReturnArgs>(args?: SelectSubset<T, ZonaMuscularCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ZonaMuscular.
     * @param {ZonaMuscularDeleteArgs} args - Arguments to delete one ZonaMuscular.
     * @example
     * // Delete one ZonaMuscular
     * const ZonaMuscular = await prisma.zonaMuscular.delete({
     *   where: {
     *     // ... filter to delete one ZonaMuscular
     *   }
     * })
     * 
     */
    delete<T extends ZonaMuscularDeleteArgs>(args: SelectSubset<T, ZonaMuscularDeleteArgs<ExtArgs>>): Prisma__ZonaMuscularClient<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ZonaMuscular.
     * @param {ZonaMuscularUpdateArgs} args - Arguments to update one ZonaMuscular.
     * @example
     * // Update one ZonaMuscular
     * const zonaMuscular = await prisma.zonaMuscular.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZonaMuscularUpdateArgs>(args: SelectSubset<T, ZonaMuscularUpdateArgs<ExtArgs>>): Prisma__ZonaMuscularClient<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ZonaMusculars.
     * @param {ZonaMuscularDeleteManyArgs} args - Arguments to filter ZonaMusculars to delete.
     * @example
     * // Delete a few ZonaMusculars
     * const { count } = await prisma.zonaMuscular.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZonaMuscularDeleteManyArgs>(args?: SelectSubset<T, ZonaMuscularDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZonaMusculars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaMuscularUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZonaMusculars
     * const zonaMuscular = await prisma.zonaMuscular.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZonaMuscularUpdateManyArgs>(args: SelectSubset<T, ZonaMuscularUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZonaMusculars and returns the data updated in the database.
     * @param {ZonaMuscularUpdateManyAndReturnArgs} args - Arguments to update many ZonaMusculars.
     * @example
     * // Update many ZonaMusculars
     * const zonaMuscular = await prisma.zonaMuscular.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ZonaMusculars and only return the `id`
     * const zonaMuscularWithIdOnly = await prisma.zonaMuscular.updateManyAndReturn({
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
    updateManyAndReturn<T extends ZonaMuscularUpdateManyAndReturnArgs>(args: SelectSubset<T, ZonaMuscularUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ZonaMuscular.
     * @param {ZonaMuscularUpsertArgs} args - Arguments to update or create a ZonaMuscular.
     * @example
     * // Update or create a ZonaMuscular
     * const zonaMuscular = await prisma.zonaMuscular.upsert({
     *   create: {
     *     // ... data to create a ZonaMuscular
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZonaMuscular we want to update
     *   }
     * })
     */
    upsert<T extends ZonaMuscularUpsertArgs>(args: SelectSubset<T, ZonaMuscularUpsertArgs<ExtArgs>>): Prisma__ZonaMuscularClient<$Result.GetResult<Prisma.$ZonaMuscularPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ZonaMusculars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaMuscularCountArgs} args - Arguments to filter ZonaMusculars to count.
     * @example
     * // Count the number of ZonaMusculars
     * const count = await prisma.zonaMuscular.count({
     *   where: {
     *     // ... the filter for the ZonaMusculars we want to count
     *   }
     * })
    **/
    count<T extends ZonaMuscularCountArgs>(
      args?: Subset<T, ZonaMuscularCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZonaMuscularCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZonaMuscular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaMuscularAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZonaMuscularAggregateArgs>(args: Subset<T, ZonaMuscularAggregateArgs>): Prisma.PrismaPromise<GetZonaMuscularAggregateType<T>>

    /**
     * Group by ZonaMuscular.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZonaMuscularGroupByArgs} args - Group by arguments.
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
      T extends ZonaMuscularGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZonaMuscularGroupByArgs['orderBy'] }
        : { orderBy?: ZonaMuscularGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZonaMuscularGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZonaMuscularGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZonaMuscular model
   */
  readonly fields: ZonaMuscularFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZonaMuscular.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZonaMuscularClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    videos<T extends ZonaMuscular$videosArgs<ExtArgs> = {}>(args?: Subset<T, ZonaMuscular$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ZonaMuscular model
   */
  interface ZonaMuscularFieldRefs {
    readonly id: FieldRef<"ZonaMuscular", 'Int'>
    readonly nombre: FieldRef<"ZonaMuscular", 'String'>
    readonly descripcion: FieldRef<"ZonaMuscular", 'String'>
    readonly createdAt: FieldRef<"ZonaMuscular", 'DateTime'>
    readonly updatedAt: FieldRef<"ZonaMuscular", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ZonaMuscular findUnique
   */
  export type ZonaMuscularFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
    /**
     * Filter, which ZonaMuscular to fetch.
     */
    where: ZonaMuscularWhereUniqueInput
  }

  /**
   * ZonaMuscular findUniqueOrThrow
   */
  export type ZonaMuscularFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
    /**
     * Filter, which ZonaMuscular to fetch.
     */
    where: ZonaMuscularWhereUniqueInput
  }

  /**
   * ZonaMuscular findFirst
   */
  export type ZonaMuscularFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
    /**
     * Filter, which ZonaMuscular to fetch.
     */
    where?: ZonaMuscularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZonaMusculars to fetch.
     */
    orderBy?: ZonaMuscularOrderByWithRelationInput | ZonaMuscularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZonaMusculars.
     */
    cursor?: ZonaMuscularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZonaMusculars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZonaMusculars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZonaMusculars.
     */
    distinct?: ZonaMuscularScalarFieldEnum | ZonaMuscularScalarFieldEnum[]
  }

  /**
   * ZonaMuscular findFirstOrThrow
   */
  export type ZonaMuscularFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
    /**
     * Filter, which ZonaMuscular to fetch.
     */
    where?: ZonaMuscularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZonaMusculars to fetch.
     */
    orderBy?: ZonaMuscularOrderByWithRelationInput | ZonaMuscularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZonaMusculars.
     */
    cursor?: ZonaMuscularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZonaMusculars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZonaMusculars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZonaMusculars.
     */
    distinct?: ZonaMuscularScalarFieldEnum | ZonaMuscularScalarFieldEnum[]
  }

  /**
   * ZonaMuscular findMany
   */
  export type ZonaMuscularFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
    /**
     * Filter, which ZonaMusculars to fetch.
     */
    where?: ZonaMuscularWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZonaMusculars to fetch.
     */
    orderBy?: ZonaMuscularOrderByWithRelationInput | ZonaMuscularOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZonaMusculars.
     */
    cursor?: ZonaMuscularWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZonaMusculars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZonaMusculars.
     */
    skip?: number
    distinct?: ZonaMuscularScalarFieldEnum | ZonaMuscularScalarFieldEnum[]
  }

  /**
   * ZonaMuscular create
   */
  export type ZonaMuscularCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
    /**
     * The data needed to create a ZonaMuscular.
     */
    data: XOR<ZonaMuscularCreateInput, ZonaMuscularUncheckedCreateInput>
  }

  /**
   * ZonaMuscular createMany
   */
  export type ZonaMuscularCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZonaMusculars.
     */
    data: ZonaMuscularCreateManyInput | ZonaMuscularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZonaMuscular createManyAndReturn
   */
  export type ZonaMuscularCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * The data used to create many ZonaMusculars.
     */
    data: ZonaMuscularCreateManyInput | ZonaMuscularCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZonaMuscular update
   */
  export type ZonaMuscularUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
    /**
     * The data needed to update a ZonaMuscular.
     */
    data: XOR<ZonaMuscularUpdateInput, ZonaMuscularUncheckedUpdateInput>
    /**
     * Choose, which ZonaMuscular to update.
     */
    where: ZonaMuscularWhereUniqueInput
  }

  /**
   * ZonaMuscular updateMany
   */
  export type ZonaMuscularUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZonaMusculars.
     */
    data: XOR<ZonaMuscularUpdateManyMutationInput, ZonaMuscularUncheckedUpdateManyInput>
    /**
     * Filter which ZonaMusculars to update
     */
    where?: ZonaMuscularWhereInput
    /**
     * Limit how many ZonaMusculars to update.
     */
    limit?: number
  }

  /**
   * ZonaMuscular updateManyAndReturn
   */
  export type ZonaMuscularUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * The data used to update ZonaMusculars.
     */
    data: XOR<ZonaMuscularUpdateManyMutationInput, ZonaMuscularUncheckedUpdateManyInput>
    /**
     * Filter which ZonaMusculars to update
     */
    where?: ZonaMuscularWhereInput
    /**
     * Limit how many ZonaMusculars to update.
     */
    limit?: number
  }

  /**
   * ZonaMuscular upsert
   */
  export type ZonaMuscularUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
    /**
     * The filter to search for the ZonaMuscular to update in case it exists.
     */
    where: ZonaMuscularWhereUniqueInput
    /**
     * In case the ZonaMuscular found by the `where` argument doesn't exist, create a new ZonaMuscular with this data.
     */
    create: XOR<ZonaMuscularCreateInput, ZonaMuscularUncheckedCreateInput>
    /**
     * In case the ZonaMuscular was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZonaMuscularUpdateInput, ZonaMuscularUncheckedUpdateInput>
  }

  /**
   * ZonaMuscular delete
   */
  export type ZonaMuscularDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
    /**
     * Filter which ZonaMuscular to delete.
     */
    where: ZonaMuscularWhereUniqueInput
  }

  /**
   * ZonaMuscular deleteMany
   */
  export type ZonaMuscularDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZonaMusculars to delete
     */
    where?: ZonaMuscularWhereInput
    /**
     * Limit how many ZonaMusculars to delete.
     */
    limit?: number
  }

  /**
   * ZonaMuscular.videos
   */
  export type ZonaMuscular$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * ZonaMuscular without action
   */
  export type ZonaMuscularDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZonaMuscular
     */
    select?: ZonaMuscularSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ZonaMuscular
     */
    omit?: ZonaMuscularOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZonaMuscularInclude<ExtArgs> | null
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


  export const CredencialesScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CredencialesScalarFieldEnum = (typeof CredencialesScalarFieldEnum)[keyof typeof CredencialesScalarFieldEnum]


  export const PerfilScalarFieldEnum: {
    id: 'id',
    credencialesId: 'credencialesId',
    nombre: 'nombre',
    rol: 'rol',
    edad: 'edad',
    nivel_actual_id: 'nivel_actual_id',
    fecha_ultima_evaluacion: 'fecha_ultima_evaluacion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const NivelScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    numero_orden: 'numero_orden'
  };

  export type NivelScalarFieldEnum = (typeof NivelScalarFieldEnum)[keyof typeof NivelScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    url_video: 'url_video',
    url_miniatura: 'url_miniatura',
    zona_muscular_id: 'zona_muscular_id',
    nivel_id: 'nivel_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const ZonaMuscularScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ZonaMuscularScalarFieldEnum = (typeof ZonaMuscularScalarFieldEnum)[keyof typeof ZonaMuscularScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type CredencialesWhereInput = {
    AND?: CredencialesWhereInput | CredencialesWhereInput[]
    OR?: CredencialesWhereInput[]
    NOT?: CredencialesWhereInput | CredencialesWhereInput[]
    id?: IntFilter<"Credenciales"> | number
    email?: StringFilter<"Credenciales"> | string
    password?: StringFilter<"Credenciales"> | string
    createdAt?: DateTimeFilter<"Credenciales"> | Date | string
    updatedAt?: DateTimeFilter<"Credenciales"> | Date | string
    perfil?: XOR<PerfilNullableScalarRelationFilter, PerfilWhereInput> | null
  }

  export type CredencialesOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    perfil?: PerfilOrderByWithRelationInput
  }

  export type CredencialesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CredencialesWhereInput | CredencialesWhereInput[]
    OR?: CredencialesWhereInput[]
    NOT?: CredencialesWhereInput | CredencialesWhereInput[]
    password?: StringFilter<"Credenciales"> | string
    createdAt?: DateTimeFilter<"Credenciales"> | Date | string
    updatedAt?: DateTimeFilter<"Credenciales"> | Date | string
    perfil?: XOR<PerfilNullableScalarRelationFilter, PerfilWhereInput> | null
  }, "id" | "email">

  export type CredencialesOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CredencialesCountOrderByAggregateInput
    _avg?: CredencialesAvgOrderByAggregateInput
    _max?: CredencialesMaxOrderByAggregateInput
    _min?: CredencialesMinOrderByAggregateInput
    _sum?: CredencialesSumOrderByAggregateInput
  }

  export type CredencialesScalarWhereWithAggregatesInput = {
    AND?: CredencialesScalarWhereWithAggregatesInput | CredencialesScalarWhereWithAggregatesInput[]
    OR?: CredencialesScalarWhereWithAggregatesInput[]
    NOT?: CredencialesScalarWhereWithAggregatesInput | CredencialesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Credenciales"> | number
    email?: StringWithAggregatesFilter<"Credenciales"> | string
    password?: StringWithAggregatesFilter<"Credenciales"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Credenciales"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Credenciales"> | Date | string
  }

  export type PerfilWhereInput = {
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    id?: IntFilter<"Perfil"> | number
    credencialesId?: IntFilter<"Perfil"> | number
    nombre?: StringNullableFilter<"Perfil"> | string | null
    rol?: StringFilter<"Perfil"> | string
    edad?: IntNullableFilter<"Perfil"> | number | null
    nivel_actual_id?: IntFilter<"Perfil"> | number
    fecha_ultima_evaluacion?: DateTimeFilter<"Perfil"> | Date | string
    createdAt?: DateTimeFilter<"Perfil"> | Date | string
    updatedAt?: DateTimeFilter<"Perfil"> | Date | string
    credenciales?: XOR<CredencialesScalarRelationFilter, CredencialesWhereInput>
    nivel_actual?: XOR<NivelScalarRelationFilter, NivelWhereInput>
  }

  export type PerfilOrderByWithRelationInput = {
    id?: SortOrder
    credencialesId?: SortOrder
    nombre?: SortOrderInput | SortOrder
    rol?: SortOrder
    edad?: SortOrderInput | SortOrder
    nivel_actual_id?: SortOrder
    fecha_ultima_evaluacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credenciales?: CredencialesOrderByWithRelationInput
    nivel_actual?: NivelOrderByWithRelationInput
  }

  export type PerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    credencialesId?: number
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    nombre?: StringNullableFilter<"Perfil"> | string | null
    rol?: StringFilter<"Perfil"> | string
    edad?: IntNullableFilter<"Perfil"> | number | null
    nivel_actual_id?: IntFilter<"Perfil"> | number
    fecha_ultima_evaluacion?: DateTimeFilter<"Perfil"> | Date | string
    createdAt?: DateTimeFilter<"Perfil"> | Date | string
    updatedAt?: DateTimeFilter<"Perfil"> | Date | string
    credenciales?: XOR<CredencialesScalarRelationFilter, CredencialesWhereInput>
    nivel_actual?: XOR<NivelScalarRelationFilter, NivelWhereInput>
  }, "id" | "credencialesId">

  export type PerfilOrderByWithAggregationInput = {
    id?: SortOrder
    credencialesId?: SortOrder
    nombre?: SortOrderInput | SortOrder
    rol?: SortOrder
    edad?: SortOrderInput | SortOrder
    nivel_actual_id?: SortOrder
    fecha_ultima_evaluacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PerfilCountOrderByAggregateInput
    _avg?: PerfilAvgOrderByAggregateInput
    _max?: PerfilMaxOrderByAggregateInput
    _min?: PerfilMinOrderByAggregateInput
    _sum?: PerfilSumOrderByAggregateInput
  }

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    OR?: PerfilScalarWhereWithAggregatesInput[]
    NOT?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Perfil"> | number
    credencialesId?: IntWithAggregatesFilter<"Perfil"> | number
    nombre?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    rol?: StringWithAggregatesFilter<"Perfil"> | string
    edad?: IntNullableWithAggregatesFilter<"Perfil"> | number | null
    nivel_actual_id?: IntWithAggregatesFilter<"Perfil"> | number
    fecha_ultima_evaluacion?: DateTimeWithAggregatesFilter<"Perfil"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Perfil"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Perfil"> | Date | string
  }

  export type NivelWhereInput = {
    AND?: NivelWhereInput | NivelWhereInput[]
    OR?: NivelWhereInput[]
    NOT?: NivelWhereInput | NivelWhereInput[]
    id?: IntFilter<"Nivel"> | number
    nombre?: StringFilter<"Nivel"> | string
    numero_orden?: IntFilter<"Nivel"> | number
    perfiles?: PerfilListRelationFilter
    videos?: VideoListRelationFilter
  }

  export type NivelOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_orden?: SortOrder
    perfiles?: PerfilOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
  }

  export type NivelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero_orden?: number
    AND?: NivelWhereInput | NivelWhereInput[]
    OR?: NivelWhereInput[]
    NOT?: NivelWhereInput | NivelWhereInput[]
    nombre?: StringFilter<"Nivel"> | string
    perfiles?: PerfilListRelationFilter
    videos?: VideoListRelationFilter
  }, "id" | "numero_orden">

  export type NivelOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_orden?: SortOrder
    _count?: NivelCountOrderByAggregateInput
    _avg?: NivelAvgOrderByAggregateInput
    _max?: NivelMaxOrderByAggregateInput
    _min?: NivelMinOrderByAggregateInput
    _sum?: NivelSumOrderByAggregateInput
  }

  export type NivelScalarWhereWithAggregatesInput = {
    AND?: NivelScalarWhereWithAggregatesInput | NivelScalarWhereWithAggregatesInput[]
    OR?: NivelScalarWhereWithAggregatesInput[]
    NOT?: NivelScalarWhereWithAggregatesInput | NivelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Nivel"> | number
    nombre?: StringWithAggregatesFilter<"Nivel"> | string
    numero_orden?: IntWithAggregatesFilter<"Nivel"> | number
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    nombre?: StringFilter<"Video"> | string
    descripcion?: StringFilter<"Video"> | string
    url_video?: StringFilter<"Video"> | string
    url_miniatura?: StringFilter<"Video"> | string
    zona_muscular_id?: IntFilter<"Video"> | number
    nivel_id?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    zonaMuscular?: XOR<ZonaMuscularScalarRelationFilter, ZonaMuscularWhereInput>
    nivel?: XOR<NivelScalarRelationFilter, NivelWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url_video?: SortOrder
    url_miniatura?: SortOrder
    zona_muscular_id?: SortOrder
    nivel_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zonaMuscular?: ZonaMuscularOrderByWithRelationInput
    nivel?: NivelOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    nombre?: StringFilter<"Video"> | string
    descripcion?: StringFilter<"Video"> | string
    url_video?: StringFilter<"Video"> | string
    url_miniatura?: StringFilter<"Video"> | string
    zona_muscular_id?: IntFilter<"Video"> | number
    nivel_id?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    zonaMuscular?: XOR<ZonaMuscularScalarRelationFilter, ZonaMuscularWhereInput>
    nivel?: XOR<NivelScalarRelationFilter, NivelWhereInput>
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url_video?: SortOrder
    url_miniatura?: SortOrder
    zona_muscular_id?: SortOrder
    nivel_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    nombre?: StringWithAggregatesFilter<"Video"> | string
    descripcion?: StringWithAggregatesFilter<"Video"> | string
    url_video?: StringWithAggregatesFilter<"Video"> | string
    url_miniatura?: StringWithAggregatesFilter<"Video"> | string
    zona_muscular_id?: IntWithAggregatesFilter<"Video"> | number
    nivel_id?: IntWithAggregatesFilter<"Video"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type ZonaMuscularWhereInput = {
    AND?: ZonaMuscularWhereInput | ZonaMuscularWhereInput[]
    OR?: ZonaMuscularWhereInput[]
    NOT?: ZonaMuscularWhereInput | ZonaMuscularWhereInput[]
    id?: IntFilter<"ZonaMuscular"> | number
    nombre?: StringFilter<"ZonaMuscular"> | string
    descripcion?: StringFilter<"ZonaMuscular"> | string
    createdAt?: DateTimeFilter<"ZonaMuscular"> | Date | string
    updatedAt?: DateTimeFilter<"ZonaMuscular"> | Date | string
    videos?: VideoListRelationFilter
  }

  export type ZonaMuscularOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    videos?: VideoOrderByRelationAggregateInput
  }

  export type ZonaMuscularWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ZonaMuscularWhereInput | ZonaMuscularWhereInput[]
    OR?: ZonaMuscularWhereInput[]
    NOT?: ZonaMuscularWhereInput | ZonaMuscularWhereInput[]
    descripcion?: StringFilter<"ZonaMuscular"> | string
    createdAt?: DateTimeFilter<"ZonaMuscular"> | Date | string
    updatedAt?: DateTimeFilter<"ZonaMuscular"> | Date | string
    videos?: VideoListRelationFilter
  }, "id" | "nombre">

  export type ZonaMuscularOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ZonaMuscularCountOrderByAggregateInput
    _avg?: ZonaMuscularAvgOrderByAggregateInput
    _max?: ZonaMuscularMaxOrderByAggregateInput
    _min?: ZonaMuscularMinOrderByAggregateInput
    _sum?: ZonaMuscularSumOrderByAggregateInput
  }

  export type ZonaMuscularScalarWhereWithAggregatesInput = {
    AND?: ZonaMuscularScalarWhereWithAggregatesInput | ZonaMuscularScalarWhereWithAggregatesInput[]
    OR?: ZonaMuscularScalarWhereWithAggregatesInput[]
    NOT?: ZonaMuscularScalarWhereWithAggregatesInput | ZonaMuscularScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ZonaMuscular"> | number
    nombre?: StringWithAggregatesFilter<"ZonaMuscular"> | string
    descripcion?: StringWithAggregatesFilter<"ZonaMuscular"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ZonaMuscular"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ZonaMuscular"> | Date | string
  }

  export type CredencialesCreateInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    perfil?: PerfilCreateNestedOneWithoutCredencialesInput
  }

  export type CredencialesUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    perfil?: PerfilUncheckedCreateNestedOneWithoutCredencialesInput
  }

  export type CredencialesUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilUpdateOneWithoutCredencialesNestedInput
  }

  export type CredencialesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perfil?: PerfilUncheckedUpdateOneWithoutCredencialesNestedInput
  }

  export type CredencialesCreateManyInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredencialesUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredencialesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilCreateInput = {
    nombre?: string | null
    rol?: string
    edad?: number | null
    fecha_ultima_evaluacion?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    credenciales: CredencialesCreateNestedOneWithoutPerfilInput
    nivel_actual: NivelCreateNestedOneWithoutPerfilesInput
  }

  export type PerfilUncheckedCreateInput = {
    id?: number
    credencialesId: number
    nombre?: string | null
    rol?: string
    edad?: number | null
    nivel_actual_id: number
    fecha_ultima_evaluacion?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerfilUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_ultima_evaluacion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credenciales?: CredencialesUpdateOneRequiredWithoutPerfilNestedInput
    nivel_actual?: NivelUpdateOneRequiredWithoutPerfilesNestedInput
  }

  export type PerfilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    credencialesId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    nivel_actual_id?: IntFieldUpdateOperationsInput | number
    fecha_ultima_evaluacion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilCreateManyInput = {
    id?: number
    credencialesId: number
    nombre?: string | null
    rol?: string
    edad?: number | null
    nivel_actual_id: number
    fecha_ultima_evaluacion?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerfilUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_ultima_evaluacion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    credencialesId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    nivel_actual_id?: IntFieldUpdateOperationsInput | number
    fecha_ultima_evaluacion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NivelCreateInput = {
    nombre: string
    numero_orden: number
    perfiles?: PerfilCreateNestedManyWithoutNivel_actualInput
    videos?: VideoCreateNestedManyWithoutNivelInput
  }

  export type NivelUncheckedCreateInput = {
    id?: number
    nombre: string
    numero_orden: number
    perfiles?: PerfilUncheckedCreateNestedManyWithoutNivel_actualInput
    videos?: VideoUncheckedCreateNestedManyWithoutNivelInput
  }

  export type NivelUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero_orden?: IntFieldUpdateOperationsInput | number
    perfiles?: PerfilUpdateManyWithoutNivel_actualNestedInput
    videos?: VideoUpdateManyWithoutNivelNestedInput
  }

  export type NivelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero_orden?: IntFieldUpdateOperationsInput | number
    perfiles?: PerfilUncheckedUpdateManyWithoutNivel_actualNestedInput
    videos?: VideoUncheckedUpdateManyWithoutNivelNestedInput
  }

  export type NivelCreateManyInput = {
    id?: number
    nombre: string
    numero_orden: number
  }

  export type NivelUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero_orden?: IntFieldUpdateOperationsInput | number
  }

  export type NivelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero_orden?: IntFieldUpdateOperationsInput | number
  }

  export type VideoCreateInput = {
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zonaMuscular: ZonaMuscularCreateNestedOneWithoutVideosInput
    nivel: NivelCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    zona_muscular_id: number
    nivel_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zonaMuscular?: ZonaMuscularUpdateOneRequiredWithoutVideosNestedInput
    nivel?: NivelUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    zona_muscular_id?: IntFieldUpdateOperationsInput | number
    nivel_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    zona_muscular_id: number
    nivel_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    zona_muscular_id?: IntFieldUpdateOperationsInput | number
    nivel_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZonaMuscularCreateInput = {
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutZonaMuscularInput
  }

  export type ZonaMuscularUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutZonaMuscularInput
  }

  export type ZonaMuscularUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutZonaMuscularNestedInput
  }

  export type ZonaMuscularUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutZonaMuscularNestedInput
  }

  export type ZonaMuscularCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZonaMuscularUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZonaMuscularUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PerfilNullableScalarRelationFilter = {
    is?: PerfilWhereInput | null
    isNot?: PerfilWhereInput | null
  }

  export type CredencialesCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredencialesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CredencialesMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredencialesMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CredencialesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CredencialesScalarRelationFilter = {
    is?: CredencialesWhereInput
    isNot?: CredencialesWhereInput
  }

  export type NivelScalarRelationFilter = {
    is?: NivelWhereInput
    isNot?: NivelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder
    credencialesId?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    edad?: SortOrder
    nivel_actual_id?: SortOrder
    fecha_ultima_evaluacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerfilAvgOrderByAggregateInput = {
    id?: SortOrder
    credencialesId?: SortOrder
    edad?: SortOrder
    nivel_actual_id?: SortOrder
  }

  export type PerfilMaxOrderByAggregateInput = {
    id?: SortOrder
    credencialesId?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    edad?: SortOrder
    nivel_actual_id?: SortOrder
    fecha_ultima_evaluacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder
    credencialesId?: SortOrder
    nombre?: SortOrder
    rol?: SortOrder
    edad?: SortOrder
    nivel_actual_id?: SortOrder
    fecha_ultima_evaluacion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerfilSumOrderByAggregateInput = {
    id?: SortOrder
    credencialesId?: SortOrder
    edad?: SortOrder
    nivel_actual_id?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PerfilListRelationFilter = {
    every?: PerfilWhereInput
    some?: PerfilWhereInput
    none?: PerfilWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type PerfilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NivelCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_orden?: SortOrder
  }

  export type NivelAvgOrderByAggregateInput = {
    id?: SortOrder
    numero_orden?: SortOrder
  }

  export type NivelMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_orden?: SortOrder
  }

  export type NivelMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    numero_orden?: SortOrder
  }

  export type NivelSumOrderByAggregateInput = {
    id?: SortOrder
    numero_orden?: SortOrder
  }

  export type ZonaMuscularScalarRelationFilter = {
    is?: ZonaMuscularWhereInput
    isNot?: ZonaMuscularWhereInput
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url_video?: SortOrder
    url_miniatura?: SortOrder
    zona_muscular_id?: SortOrder
    nivel_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    zona_muscular_id?: SortOrder
    nivel_id?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url_video?: SortOrder
    url_miniatura?: SortOrder
    zona_muscular_id?: SortOrder
    nivel_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url_video?: SortOrder
    url_miniatura?: SortOrder
    zona_muscular_id?: SortOrder
    nivel_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    zona_muscular_id?: SortOrder
    nivel_id?: SortOrder
  }

  export type ZonaMuscularCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZonaMuscularAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ZonaMuscularMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZonaMuscularMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ZonaMuscularSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PerfilCreateNestedOneWithoutCredencialesInput = {
    create?: XOR<PerfilCreateWithoutCredencialesInput, PerfilUncheckedCreateWithoutCredencialesInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutCredencialesInput
    connect?: PerfilWhereUniqueInput
  }

  export type PerfilUncheckedCreateNestedOneWithoutCredencialesInput = {
    create?: XOR<PerfilCreateWithoutCredencialesInput, PerfilUncheckedCreateWithoutCredencialesInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutCredencialesInput
    connect?: PerfilWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PerfilUpdateOneWithoutCredencialesNestedInput = {
    create?: XOR<PerfilCreateWithoutCredencialesInput, PerfilUncheckedCreateWithoutCredencialesInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutCredencialesInput
    upsert?: PerfilUpsertWithoutCredencialesInput
    disconnect?: PerfilWhereInput | boolean
    delete?: PerfilWhereInput | boolean
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutCredencialesInput, PerfilUpdateWithoutCredencialesInput>, PerfilUncheckedUpdateWithoutCredencialesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PerfilUncheckedUpdateOneWithoutCredencialesNestedInput = {
    create?: XOR<PerfilCreateWithoutCredencialesInput, PerfilUncheckedCreateWithoutCredencialesInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutCredencialesInput
    upsert?: PerfilUpsertWithoutCredencialesInput
    disconnect?: PerfilWhereInput | boolean
    delete?: PerfilWhereInput | boolean
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutCredencialesInput, PerfilUpdateWithoutCredencialesInput>, PerfilUncheckedUpdateWithoutCredencialesInput>
  }

  export type CredencialesCreateNestedOneWithoutPerfilInput = {
    create?: XOR<CredencialesCreateWithoutPerfilInput, CredencialesUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: CredencialesCreateOrConnectWithoutPerfilInput
    connect?: CredencialesWhereUniqueInput
  }

  export type NivelCreateNestedOneWithoutPerfilesInput = {
    create?: XOR<NivelCreateWithoutPerfilesInput, NivelUncheckedCreateWithoutPerfilesInput>
    connectOrCreate?: NivelCreateOrConnectWithoutPerfilesInput
    connect?: NivelWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CredencialesUpdateOneRequiredWithoutPerfilNestedInput = {
    create?: XOR<CredencialesCreateWithoutPerfilInput, CredencialesUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: CredencialesCreateOrConnectWithoutPerfilInput
    upsert?: CredencialesUpsertWithoutPerfilInput
    connect?: CredencialesWhereUniqueInput
    update?: XOR<XOR<CredencialesUpdateToOneWithWhereWithoutPerfilInput, CredencialesUpdateWithoutPerfilInput>, CredencialesUncheckedUpdateWithoutPerfilInput>
  }

  export type NivelUpdateOneRequiredWithoutPerfilesNestedInput = {
    create?: XOR<NivelCreateWithoutPerfilesInput, NivelUncheckedCreateWithoutPerfilesInput>
    connectOrCreate?: NivelCreateOrConnectWithoutPerfilesInput
    upsert?: NivelUpsertWithoutPerfilesInput
    connect?: NivelWhereUniqueInput
    update?: XOR<XOR<NivelUpdateToOneWithWhereWithoutPerfilesInput, NivelUpdateWithoutPerfilesInput>, NivelUncheckedUpdateWithoutPerfilesInput>
  }

  export type PerfilCreateNestedManyWithoutNivel_actualInput = {
    create?: XOR<PerfilCreateWithoutNivel_actualInput, PerfilUncheckedCreateWithoutNivel_actualInput> | PerfilCreateWithoutNivel_actualInput[] | PerfilUncheckedCreateWithoutNivel_actualInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutNivel_actualInput | PerfilCreateOrConnectWithoutNivel_actualInput[]
    createMany?: PerfilCreateManyNivel_actualInputEnvelope
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutNivelInput = {
    create?: XOR<VideoCreateWithoutNivelInput, VideoUncheckedCreateWithoutNivelInput> | VideoCreateWithoutNivelInput[] | VideoUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutNivelInput | VideoCreateOrConnectWithoutNivelInput[]
    createMany?: VideoCreateManyNivelInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type PerfilUncheckedCreateNestedManyWithoutNivel_actualInput = {
    create?: XOR<PerfilCreateWithoutNivel_actualInput, PerfilUncheckedCreateWithoutNivel_actualInput> | PerfilCreateWithoutNivel_actualInput[] | PerfilUncheckedCreateWithoutNivel_actualInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutNivel_actualInput | PerfilCreateOrConnectWithoutNivel_actualInput[]
    createMany?: PerfilCreateManyNivel_actualInputEnvelope
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutNivelInput = {
    create?: XOR<VideoCreateWithoutNivelInput, VideoUncheckedCreateWithoutNivelInput> | VideoCreateWithoutNivelInput[] | VideoUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutNivelInput | VideoCreateOrConnectWithoutNivelInput[]
    createMany?: VideoCreateManyNivelInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type PerfilUpdateManyWithoutNivel_actualNestedInput = {
    create?: XOR<PerfilCreateWithoutNivel_actualInput, PerfilUncheckedCreateWithoutNivel_actualInput> | PerfilCreateWithoutNivel_actualInput[] | PerfilUncheckedCreateWithoutNivel_actualInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutNivel_actualInput | PerfilCreateOrConnectWithoutNivel_actualInput[]
    upsert?: PerfilUpsertWithWhereUniqueWithoutNivel_actualInput | PerfilUpsertWithWhereUniqueWithoutNivel_actualInput[]
    createMany?: PerfilCreateManyNivel_actualInputEnvelope
    set?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    disconnect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    delete?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    update?: PerfilUpdateWithWhereUniqueWithoutNivel_actualInput | PerfilUpdateWithWhereUniqueWithoutNivel_actualInput[]
    updateMany?: PerfilUpdateManyWithWhereWithoutNivel_actualInput | PerfilUpdateManyWithWhereWithoutNivel_actualInput[]
    deleteMany?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutNivelNestedInput = {
    create?: XOR<VideoCreateWithoutNivelInput, VideoUncheckedCreateWithoutNivelInput> | VideoCreateWithoutNivelInput[] | VideoUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutNivelInput | VideoCreateOrConnectWithoutNivelInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutNivelInput | VideoUpsertWithWhereUniqueWithoutNivelInput[]
    createMany?: VideoCreateManyNivelInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutNivelInput | VideoUpdateWithWhereUniqueWithoutNivelInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutNivelInput | VideoUpdateManyWithWhereWithoutNivelInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type PerfilUncheckedUpdateManyWithoutNivel_actualNestedInput = {
    create?: XOR<PerfilCreateWithoutNivel_actualInput, PerfilUncheckedCreateWithoutNivel_actualInput> | PerfilCreateWithoutNivel_actualInput[] | PerfilUncheckedCreateWithoutNivel_actualInput[]
    connectOrCreate?: PerfilCreateOrConnectWithoutNivel_actualInput | PerfilCreateOrConnectWithoutNivel_actualInput[]
    upsert?: PerfilUpsertWithWhereUniqueWithoutNivel_actualInput | PerfilUpsertWithWhereUniqueWithoutNivel_actualInput[]
    createMany?: PerfilCreateManyNivel_actualInputEnvelope
    set?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    disconnect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    delete?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    connect?: PerfilWhereUniqueInput | PerfilWhereUniqueInput[]
    update?: PerfilUpdateWithWhereUniqueWithoutNivel_actualInput | PerfilUpdateWithWhereUniqueWithoutNivel_actualInput[]
    updateMany?: PerfilUpdateManyWithWhereWithoutNivel_actualInput | PerfilUpdateManyWithWhereWithoutNivel_actualInput[]
    deleteMany?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutNivelNestedInput = {
    create?: XOR<VideoCreateWithoutNivelInput, VideoUncheckedCreateWithoutNivelInput> | VideoCreateWithoutNivelInput[] | VideoUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutNivelInput | VideoCreateOrConnectWithoutNivelInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutNivelInput | VideoUpsertWithWhereUniqueWithoutNivelInput[]
    createMany?: VideoCreateManyNivelInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutNivelInput | VideoUpdateWithWhereUniqueWithoutNivelInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutNivelInput | VideoUpdateManyWithWhereWithoutNivelInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type ZonaMuscularCreateNestedOneWithoutVideosInput = {
    create?: XOR<ZonaMuscularCreateWithoutVideosInput, ZonaMuscularUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ZonaMuscularCreateOrConnectWithoutVideosInput
    connect?: ZonaMuscularWhereUniqueInput
  }

  export type NivelCreateNestedOneWithoutVideosInput = {
    create?: XOR<NivelCreateWithoutVideosInput, NivelUncheckedCreateWithoutVideosInput>
    connectOrCreate?: NivelCreateOrConnectWithoutVideosInput
    connect?: NivelWhereUniqueInput
  }

  export type ZonaMuscularUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<ZonaMuscularCreateWithoutVideosInput, ZonaMuscularUncheckedCreateWithoutVideosInput>
    connectOrCreate?: ZonaMuscularCreateOrConnectWithoutVideosInput
    upsert?: ZonaMuscularUpsertWithoutVideosInput
    connect?: ZonaMuscularWhereUniqueInput
    update?: XOR<XOR<ZonaMuscularUpdateToOneWithWhereWithoutVideosInput, ZonaMuscularUpdateWithoutVideosInput>, ZonaMuscularUncheckedUpdateWithoutVideosInput>
  }

  export type NivelUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<NivelCreateWithoutVideosInput, NivelUncheckedCreateWithoutVideosInput>
    connectOrCreate?: NivelCreateOrConnectWithoutVideosInput
    upsert?: NivelUpsertWithoutVideosInput
    connect?: NivelWhereUniqueInput
    update?: XOR<XOR<NivelUpdateToOneWithWhereWithoutVideosInput, NivelUpdateWithoutVideosInput>, NivelUncheckedUpdateWithoutVideosInput>
  }

  export type VideoCreateNestedManyWithoutZonaMuscularInput = {
    create?: XOR<VideoCreateWithoutZonaMuscularInput, VideoUncheckedCreateWithoutZonaMuscularInput> | VideoCreateWithoutZonaMuscularInput[] | VideoUncheckedCreateWithoutZonaMuscularInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutZonaMuscularInput | VideoCreateOrConnectWithoutZonaMuscularInput[]
    createMany?: VideoCreateManyZonaMuscularInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutZonaMuscularInput = {
    create?: XOR<VideoCreateWithoutZonaMuscularInput, VideoUncheckedCreateWithoutZonaMuscularInput> | VideoCreateWithoutZonaMuscularInput[] | VideoUncheckedCreateWithoutZonaMuscularInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutZonaMuscularInput | VideoCreateOrConnectWithoutZonaMuscularInput[]
    createMany?: VideoCreateManyZonaMuscularInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type VideoUpdateManyWithoutZonaMuscularNestedInput = {
    create?: XOR<VideoCreateWithoutZonaMuscularInput, VideoUncheckedCreateWithoutZonaMuscularInput> | VideoCreateWithoutZonaMuscularInput[] | VideoUncheckedCreateWithoutZonaMuscularInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutZonaMuscularInput | VideoCreateOrConnectWithoutZonaMuscularInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutZonaMuscularInput | VideoUpsertWithWhereUniqueWithoutZonaMuscularInput[]
    createMany?: VideoCreateManyZonaMuscularInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutZonaMuscularInput | VideoUpdateWithWhereUniqueWithoutZonaMuscularInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutZonaMuscularInput | VideoUpdateManyWithWhereWithoutZonaMuscularInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutZonaMuscularNestedInput = {
    create?: XOR<VideoCreateWithoutZonaMuscularInput, VideoUncheckedCreateWithoutZonaMuscularInput> | VideoCreateWithoutZonaMuscularInput[] | VideoUncheckedCreateWithoutZonaMuscularInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutZonaMuscularInput | VideoCreateOrConnectWithoutZonaMuscularInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutZonaMuscularInput | VideoUpsertWithWhereUniqueWithoutZonaMuscularInput[]
    createMany?: VideoCreateManyZonaMuscularInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutZonaMuscularInput | VideoUpdateWithWhereUniqueWithoutZonaMuscularInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutZonaMuscularInput | VideoUpdateManyWithWhereWithoutZonaMuscularInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PerfilCreateWithoutCredencialesInput = {
    nombre?: string | null
    rol?: string
    edad?: number | null
    fecha_ultima_evaluacion?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    nivel_actual: NivelCreateNestedOneWithoutPerfilesInput
  }

  export type PerfilUncheckedCreateWithoutCredencialesInput = {
    id?: number
    nombre?: string | null
    rol?: string
    edad?: number | null
    nivel_actual_id: number
    fecha_ultima_evaluacion?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerfilCreateOrConnectWithoutCredencialesInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutCredencialesInput, PerfilUncheckedCreateWithoutCredencialesInput>
  }

  export type PerfilUpsertWithoutCredencialesInput = {
    update: XOR<PerfilUpdateWithoutCredencialesInput, PerfilUncheckedUpdateWithoutCredencialesInput>
    create: XOR<PerfilCreateWithoutCredencialesInput, PerfilUncheckedCreateWithoutCredencialesInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutCredencialesInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutCredencialesInput, PerfilUncheckedUpdateWithoutCredencialesInput>
  }

  export type PerfilUpdateWithoutCredencialesInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_ultima_evaluacion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel_actual?: NivelUpdateOneRequiredWithoutPerfilesNestedInput
  }

  export type PerfilUncheckedUpdateWithoutCredencialesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    nivel_actual_id?: IntFieldUpdateOperationsInput | number
    fecha_ultima_evaluacion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredencialesCreateWithoutPerfilInput = {
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredencialesUncheckedCreateWithoutPerfilInput = {
    id?: number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CredencialesCreateOrConnectWithoutPerfilInput = {
    where: CredencialesWhereUniqueInput
    create: XOR<CredencialesCreateWithoutPerfilInput, CredencialesUncheckedCreateWithoutPerfilInput>
  }

  export type NivelCreateWithoutPerfilesInput = {
    nombre: string
    numero_orden: number
    videos?: VideoCreateNestedManyWithoutNivelInput
  }

  export type NivelUncheckedCreateWithoutPerfilesInput = {
    id?: number
    nombre: string
    numero_orden: number
    videos?: VideoUncheckedCreateNestedManyWithoutNivelInput
  }

  export type NivelCreateOrConnectWithoutPerfilesInput = {
    where: NivelWhereUniqueInput
    create: XOR<NivelCreateWithoutPerfilesInput, NivelUncheckedCreateWithoutPerfilesInput>
  }

  export type CredencialesUpsertWithoutPerfilInput = {
    update: XOR<CredencialesUpdateWithoutPerfilInput, CredencialesUncheckedUpdateWithoutPerfilInput>
    create: XOR<CredencialesCreateWithoutPerfilInput, CredencialesUncheckedCreateWithoutPerfilInput>
    where?: CredencialesWhereInput
  }

  export type CredencialesUpdateToOneWithWhereWithoutPerfilInput = {
    where?: CredencialesWhereInput
    data: XOR<CredencialesUpdateWithoutPerfilInput, CredencialesUncheckedUpdateWithoutPerfilInput>
  }

  export type CredencialesUpdateWithoutPerfilInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CredencialesUncheckedUpdateWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NivelUpsertWithoutPerfilesInput = {
    update: XOR<NivelUpdateWithoutPerfilesInput, NivelUncheckedUpdateWithoutPerfilesInput>
    create: XOR<NivelCreateWithoutPerfilesInput, NivelUncheckedCreateWithoutPerfilesInput>
    where?: NivelWhereInput
  }

  export type NivelUpdateToOneWithWhereWithoutPerfilesInput = {
    where?: NivelWhereInput
    data: XOR<NivelUpdateWithoutPerfilesInput, NivelUncheckedUpdateWithoutPerfilesInput>
  }

  export type NivelUpdateWithoutPerfilesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero_orden?: IntFieldUpdateOperationsInput | number
    videos?: VideoUpdateManyWithoutNivelNestedInput
  }

  export type NivelUncheckedUpdateWithoutPerfilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero_orden?: IntFieldUpdateOperationsInput | number
    videos?: VideoUncheckedUpdateManyWithoutNivelNestedInput
  }

  export type PerfilCreateWithoutNivel_actualInput = {
    nombre?: string | null
    rol?: string
    edad?: number | null
    fecha_ultima_evaluacion?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    credenciales: CredencialesCreateNestedOneWithoutPerfilInput
  }

  export type PerfilUncheckedCreateWithoutNivel_actualInput = {
    id?: number
    credencialesId: number
    nombre?: string | null
    rol?: string
    edad?: number | null
    fecha_ultima_evaluacion?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerfilCreateOrConnectWithoutNivel_actualInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutNivel_actualInput, PerfilUncheckedCreateWithoutNivel_actualInput>
  }

  export type PerfilCreateManyNivel_actualInputEnvelope = {
    data: PerfilCreateManyNivel_actualInput | PerfilCreateManyNivel_actualInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutNivelInput = {
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zonaMuscular: ZonaMuscularCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutNivelInput = {
    id?: number
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    zona_muscular_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutNivelInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutNivelInput, VideoUncheckedCreateWithoutNivelInput>
  }

  export type VideoCreateManyNivelInputEnvelope = {
    data: VideoCreateManyNivelInput | VideoCreateManyNivelInput[]
    skipDuplicates?: boolean
  }

  export type PerfilUpsertWithWhereUniqueWithoutNivel_actualInput = {
    where: PerfilWhereUniqueInput
    update: XOR<PerfilUpdateWithoutNivel_actualInput, PerfilUncheckedUpdateWithoutNivel_actualInput>
    create: XOR<PerfilCreateWithoutNivel_actualInput, PerfilUncheckedCreateWithoutNivel_actualInput>
  }

  export type PerfilUpdateWithWhereUniqueWithoutNivel_actualInput = {
    where: PerfilWhereUniqueInput
    data: XOR<PerfilUpdateWithoutNivel_actualInput, PerfilUncheckedUpdateWithoutNivel_actualInput>
  }

  export type PerfilUpdateManyWithWhereWithoutNivel_actualInput = {
    where: PerfilScalarWhereInput
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyWithoutNivel_actualInput>
  }

  export type PerfilScalarWhereInput = {
    AND?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
    OR?: PerfilScalarWhereInput[]
    NOT?: PerfilScalarWhereInput | PerfilScalarWhereInput[]
    id?: IntFilter<"Perfil"> | number
    credencialesId?: IntFilter<"Perfil"> | number
    nombre?: StringNullableFilter<"Perfil"> | string | null
    rol?: StringFilter<"Perfil"> | string
    edad?: IntNullableFilter<"Perfil"> | number | null
    nivel_actual_id?: IntFilter<"Perfil"> | number
    fecha_ultima_evaluacion?: DateTimeFilter<"Perfil"> | Date | string
    createdAt?: DateTimeFilter<"Perfil"> | Date | string
    updatedAt?: DateTimeFilter<"Perfil"> | Date | string
  }

  export type VideoUpsertWithWhereUniqueWithoutNivelInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutNivelInput, VideoUncheckedUpdateWithoutNivelInput>
    create: XOR<VideoCreateWithoutNivelInput, VideoUncheckedCreateWithoutNivelInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutNivelInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutNivelInput, VideoUncheckedUpdateWithoutNivelInput>
  }

  export type VideoUpdateManyWithWhereWithoutNivelInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutNivelInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: IntFilter<"Video"> | number
    nombre?: StringFilter<"Video"> | string
    descripcion?: StringFilter<"Video"> | string
    url_video?: StringFilter<"Video"> | string
    url_miniatura?: StringFilter<"Video"> | string
    zona_muscular_id?: IntFilter<"Video"> | number
    nivel_id?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
  }

  export type ZonaMuscularCreateWithoutVideosInput = {
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZonaMuscularUncheckedCreateWithoutVideosInput = {
    id?: number
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ZonaMuscularCreateOrConnectWithoutVideosInput = {
    where: ZonaMuscularWhereUniqueInput
    create: XOR<ZonaMuscularCreateWithoutVideosInput, ZonaMuscularUncheckedCreateWithoutVideosInput>
  }

  export type NivelCreateWithoutVideosInput = {
    nombre: string
    numero_orden: number
    perfiles?: PerfilCreateNestedManyWithoutNivel_actualInput
  }

  export type NivelUncheckedCreateWithoutVideosInput = {
    id?: number
    nombre: string
    numero_orden: number
    perfiles?: PerfilUncheckedCreateNestedManyWithoutNivel_actualInput
  }

  export type NivelCreateOrConnectWithoutVideosInput = {
    where: NivelWhereUniqueInput
    create: XOR<NivelCreateWithoutVideosInput, NivelUncheckedCreateWithoutVideosInput>
  }

  export type ZonaMuscularUpsertWithoutVideosInput = {
    update: XOR<ZonaMuscularUpdateWithoutVideosInput, ZonaMuscularUncheckedUpdateWithoutVideosInput>
    create: XOR<ZonaMuscularCreateWithoutVideosInput, ZonaMuscularUncheckedCreateWithoutVideosInput>
    where?: ZonaMuscularWhereInput
  }

  export type ZonaMuscularUpdateToOneWithWhereWithoutVideosInput = {
    where?: ZonaMuscularWhereInput
    data: XOR<ZonaMuscularUpdateWithoutVideosInput, ZonaMuscularUncheckedUpdateWithoutVideosInput>
  }

  export type ZonaMuscularUpdateWithoutVideosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZonaMuscularUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NivelUpsertWithoutVideosInput = {
    update: XOR<NivelUpdateWithoutVideosInput, NivelUncheckedUpdateWithoutVideosInput>
    create: XOR<NivelCreateWithoutVideosInput, NivelUncheckedCreateWithoutVideosInput>
    where?: NivelWhereInput
  }

  export type NivelUpdateToOneWithWhereWithoutVideosInput = {
    where?: NivelWhereInput
    data: XOR<NivelUpdateWithoutVideosInput, NivelUncheckedUpdateWithoutVideosInput>
  }

  export type NivelUpdateWithoutVideosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    numero_orden?: IntFieldUpdateOperationsInput | number
    perfiles?: PerfilUpdateManyWithoutNivel_actualNestedInput
  }

  export type NivelUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    numero_orden?: IntFieldUpdateOperationsInput | number
    perfiles?: PerfilUncheckedUpdateManyWithoutNivel_actualNestedInput
  }

  export type VideoCreateWithoutZonaMuscularInput = {
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nivel: NivelCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutZonaMuscularInput = {
    id?: number
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    nivel_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutZonaMuscularInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutZonaMuscularInput, VideoUncheckedCreateWithoutZonaMuscularInput>
  }

  export type VideoCreateManyZonaMuscularInputEnvelope = {
    data: VideoCreateManyZonaMuscularInput | VideoCreateManyZonaMuscularInput[]
    skipDuplicates?: boolean
  }

  export type VideoUpsertWithWhereUniqueWithoutZonaMuscularInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutZonaMuscularInput, VideoUncheckedUpdateWithoutZonaMuscularInput>
    create: XOR<VideoCreateWithoutZonaMuscularInput, VideoUncheckedCreateWithoutZonaMuscularInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutZonaMuscularInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutZonaMuscularInput, VideoUncheckedUpdateWithoutZonaMuscularInput>
  }

  export type VideoUpdateManyWithWhereWithoutZonaMuscularInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutZonaMuscularInput>
  }

  export type PerfilCreateManyNivel_actualInput = {
    id?: number
    credencialesId: number
    nombre?: string | null
    rol?: string
    edad?: number | null
    fecha_ultima_evaluacion?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateManyNivelInput = {
    id?: number
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    zona_muscular_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerfilUpdateWithoutNivel_actualInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_ultima_evaluacion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credenciales?: CredencialesUpdateOneRequiredWithoutPerfilNestedInput
  }

  export type PerfilUncheckedUpdateWithoutNivel_actualInput = {
    id?: IntFieldUpdateOperationsInput | number
    credencialesId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_ultima_evaluacion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerfilUncheckedUpdateManyWithoutNivel_actualInput = {
    id?: IntFieldUpdateOperationsInput | number
    credencialesId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    edad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_ultima_evaluacion?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpdateWithoutNivelInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zonaMuscular?: ZonaMuscularUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutNivelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    zona_muscular_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutNivelInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    zona_muscular_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyZonaMuscularInput = {
    id?: number
    nombre: string
    descripcion: string
    url_video: string
    url_miniatura: string
    nivel_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateWithoutZonaMuscularInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nivel?: NivelUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutZonaMuscularInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    nivel_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutZonaMuscularInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    url_video?: StringFieldUpdateOperationsInput | string
    url_miniatura?: StringFieldUpdateOperationsInput | string
    nivel_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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