import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();


export default async function(req, res) {
  const visits = await redis.incr("clicks");
  return res.status(200).json({ "visits" : visits });
}