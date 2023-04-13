import Redis, { Redis as RedisClient } from 'ioredis';
import cacheConfig from '@config/cache';

export default class RedisCache {
  private cliente: RedisClient;

  constructor() {
    this.cliente = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: any): Promise<void> {
    console.log(key, value);
  }

  //public async recover<T>(key: string): Promise<T || null> { }

  //public async invalidate(key: string): Promise<void>{}
}
